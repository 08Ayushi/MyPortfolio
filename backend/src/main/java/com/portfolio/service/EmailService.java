package com.portfolio.service;

import com.portfolio.model.ContactRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
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
        SimpleMailMessage message = new SimpleMailMessage();

        // For Gmail SMTP, From should be your authenticated Gmail address.
        // The visitor's email is added as Reply-To so you can directly reply to them.
        message.setFrom(senderEmail);
        message.setReplyTo(request.getEmail());
        message.setTo(recipientEmail);
        message.setSubject("Portfolio: " + request.getSubject() + " (from " + request.getName() + ")");
        message.setText(
                "You received a new message from your portfolio website.\n\n" +
                        "Name: " + request.getName() + "\n" +
                        "Email: " + request.getEmail() + "\n" +
                        "Subject: " + request.getSubject() + "\n\n" +
                        "Message:\n" + request.getMessage());

        mailSender.send(message);
    }
}
