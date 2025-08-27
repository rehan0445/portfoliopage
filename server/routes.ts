import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import sgMail from '@sendgrid/mail';

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure SendGrid
  if (process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      if (!process.env.SENDGRID_API_KEY) {
        console.log('Contact form submission:', { name, email, message });
        return res.status(200).json({ success: true, message: 'Message received (no email service configured)' });
      }

      const msg = {
        to: 'nexus.rehansurani@gmail.com',
        from: 'nexus.rehansurani@gmail.com', // Must be verified sender
        subject: `New Contact Form Message from ${name}`,
        text: `
Name: ${name}
Email: ${email}
Message: ${message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };

      await sgMail.send(msg);
      res.status(200).json({ success: true, message: 'Message sent successfully' });
      
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send message' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
