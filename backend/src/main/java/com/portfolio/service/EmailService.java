package com.portfolio.service;

import com.portfolio.model.ContactRequest;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestTemplate;

@Service
public class EmailService {

    private final JavaMailSender mailSender;
    private final RestTemplate restTemplate;

    @Value("${spring.mail.username}")
    private String senderEmail;

    @Value("${portfolio.mail.to}")
    private String recipientEmail;

    @Value("${resend.api-key:}")
    private String resendApiKey;

    @Value("${resend.from:}")
    private String resendFrom;

    public EmailService(JavaMailSender mailSender, RestTemplate restTemplate) {
        this.mailSender = mailSender;
        this.restTemplate = restTemplate;
    }

    public void sendContactMail(ContactRequest request) {
        if (StringUtils.hasText(resendApiKey)) {
            sendViaResend(request);
        } else {
            sendViaSmtp(request);
        }
    }

    private void sendViaResend(ContactRequest request) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(resendApiKey);

        Map<String, Object> body = new HashMap<>();
        body.put("from", resendFrom);
        body.put("to", List.of(recipientEmail));
        body.put("reply_to", request.getEmail());
        body.put("subject", buildSubject(request));
        body.put("text", buildBody(request));

        try {
            ResponseEntity<String> response = restTemplate.exchange(
                    "https://api.resend.com/emails",
                    HttpMethod.POST,
                    new HttpEntity<>(body, headers),
                    String.class);

            if (!response.getStatusCode().is2xxSuccessful()) {
                throw new IllegalStateException("Resend API failed: " + response.getBody());
            }
        } catch (IllegalStateException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new IllegalStateException("Resend API request failed", ex);
        }
    }

    private void sendViaSmtp(ContactRequest request) {
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, false, "UTF-8");

            String visitorLabel = request.getName() + " (" + request.getEmail() + ")";
            helper.setFrom(new InternetAddress(senderEmail, visitorLabel));
            helper.setReplyTo(request.getEmail());
            helper.setTo(recipientEmail);
            helper.setSubject(buildSubject(request));
            helper.setText(buildBody(request));

            mailSender.send(mimeMessage);
        } catch (MessagingException | UnsupportedEncodingException e) {
            throw new IllegalStateException("Failed to send contact email", e);
        }
    }

    private String buildSubject(ContactRequest request) {
        return "Portfolio: " + request.getSubject() + " (from " + request.getName() + ")";
    }

    private String buildBody(ContactRequest request) {
        return "You received a new message from your portfolio website.\n\n"
                + "Name: " + request.getName() + "\n"
                + "Email: " + request.getEmail() + "\n"
                + "Subject: " + request.getSubject() + "\n\n"
                + "Message:\n" + request.getMessage();
    }
}
