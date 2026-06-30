package com.portfolio.service;

import com.portfolio.model.ContactRequest;
import java.io.UnsupportedEncodingException;
import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String senderEmail;

    @Value("${portfolio.mail.to}")
    private String recipientEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactMail(ContactRequest request) {
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, false, "UTF-8");

            // Gmail SMTP always sends from your authenticated Gmail address.
            // We show the visitor's name + email in the display name; Reply-To is their real address.
            String visitorLabel = request.getName() + " (" + request.getEmail() + ")";
            helper.setFrom(new InternetAddress(senderEmail, visitorLabel));
            helper.setReplyTo(request.getEmail());
            helper.setTo(recipientEmail);
            helper.setSubject("Portfolio: " + request.getSubject() + " (from " + request.getName() + ")");
            helper.setText(
                    "You received a new message from your portfolio website.\n\n" +
                            "Name: " + request.getName() + "\n" +
                            "Email: " + request.getEmail() + "\n" +
                            "Subject: " + request.getSubject() + "\n\n" +
                            "Message:\n" + request.getMessage());

            mailSender.send(mimeMessage);
        } catch (MessagingException | UnsupportedEncodingException e) {
            throw new IllegalStateException("Failed to send contact email", e);
        }
    }
}
