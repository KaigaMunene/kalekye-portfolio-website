/* eslint-env node */
/* global process */
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? ['https://yourdomain.com']
        : ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true,
  }),
);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Create Nodemailer transporter with enhanced error handling
const createTransporter = () => {
  const { EMAIL_USER, EMAIL_PASS } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS) {
    const error = new Error(
      'Email configuration missing. Please check your .env file.',
    );
    error.code = 'MISSING_CONFIG';
    throw error;
  }

  if (EMAIL_PASS === 'your_app_password_here') {
    const error = new Error(
      'Please update EMAIL_PASS in .env file with your Gmail App Password.',
    );
    error.code = 'INVALID_PASSWORD';
    throw error;
  }

  try {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
      pool: true,
      maxConnections: 1,
      rateDelta: 20000,
      rateLimit: 5,
    });
  } catch (error) {
    console.error('Failed to create email transporter:', error);
    throw new Error('Email service configuration error');
  }
};

// Enhanced input sanitization function
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';

  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .substring(0, 1000); // Limit length
};

// Input validation schema
const validateInput = (data) => {
  const errors = [];

  if (!data.firstName || data.firstName.length < 2) {
    errors.push('First name must be at least 2 characters');
  }

  if (!data.lastName || data.lastName.length < 2) {
    errors.push('Last name must be at least 2 characters');
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please provide a valid email address');
  }

  if (!data.service) {
    errors.push('Please select a service');
  }

  if (!data.message || data.message.length < 10) {
    errors.push('Message must be at least 10 characters');
  }

  if (data.message && data.message.length > 2000) {
    errors.push('Message must be less than 2000 characters');
  }

  return errors;
};

// Email endpoint with enhanced error handling
app.post('/api/send-email', async (req, res) => {
  const startTime = Date.now();

  try {
    const { firstName, lastName, email, service, message } = req.body;

    // Sanitize inputs
    const sanitizedData = {
      firstName: sanitizeInput(firstName),
      lastName: sanitizeInput(lastName),
      email: sanitizeInput(email),
      service: sanitizeInput(service),
      message: sanitizeInput(message),
    };

    // Validate inputs
    const validationErrors = validateInput(sanitizedData);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors,
      });
    }

    // Create and verify transporter
    const transporter = createTransporter();
    await transporter.verify();

    // Email content with enhanced security
    const mailOptions = {
      from: `"${sanitizedData.firstName} ${sanitizedData.lastName}" <${process.env.EMAIL_USER}>`,
      to: 'kaigamunene@gmail.com',
      replyTo: sanitizedData.email,
      subject: `New Contact Form Submission from ${sanitizedData.firstName} ${sanitizedData.lastName}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); overflow: hidden;">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #9E7758 0%, #705748 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                📧 New Contact Form Submission
              </h1>
              <p style="color: #f0f0f0; margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">
                Someone wants to connect with you!
              </p>
            </div>

            <!-- Contact Details Card -->
            <div style="padding: 30px; background-color: #ffffff;">
              <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 25px; border-radius: 10px; border-left: 4px solid #9E7758; margin-bottom: 25px;">
                <h2 style="color: #9E7758; margin: 0 0 20px 0; font-size: 22px; font-weight: 600; display: flex; align-items: center;">
                  👤 Contact Details
                </h2>
                <div style="display: grid; gap: 15px;">
                  <div style="display: flex; align-items: center;">
                    <span style="background-color: #9E7758; color: white; padding: 8px 12px; border-radius: 6px; font-weight: 600; min-width: 80px; text-align: center; margin-right: 15px;">Name</span>
                    <span style="font-size: 16px; color: #333; font-weight: 500;">${sanitizedData.firstName} ${sanitizedData.lastName}</span>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <span style="background-color: #9E7758; color: white; padding: 8px 12px; border-radius: 6px; font-weight: 600; min-width: 80px; text-align: center; margin-right: 15px;">Email</span>
                    <a href="mailto:${sanitizedData.email}" style="font-size: 16px; color: #007bff; text-decoration: none; font-weight: 500;">${sanitizedData.email}</a>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <span style="background-color: #9E7758; color: white; padding: 8px 12px; border-radius: 6px; font-weight: 600; min-width: 80px; text-align: center; margin-right: 15px;">Service</span>
                    <span style="font-size: 16px; color: #333; font-weight: 500;">${sanitizedData.service}</span>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <span style="background-color: #9E7758; color: white; padding: 8px 12px; border-radius: 6px; font-weight: 600; min-width: 80px; text-align: center; margin-right: 15px;">Time</span>
                    <span style="font-size: 16px; color: #333; font-weight: 500;">${new Date().toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <!-- Message Card -->
              <div style="background: linear-gradient(135deg, #fff8f0 0%, #fef5e7 100%); padding: 25px; border-radius: 10px; border-left: 4px solid #ffc107;">
                <h2 style="color: #856404; margin: 0 0 20px 0; font-size: 22px; font-weight: 600; display: flex; align-items: center;">
                  💬 Message
                </h2>
                <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e9ecef; line-height: 1.6; font-size: 16px; color: #333; white-space: pre-wrap; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                  ${sanitizedData.message}
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="margin: 0; color: #6c757d; font-size: 14px;">
                📧 This message was sent from your portfolio website contact form
              </p>
              <p style="margin: 10px 0 0 0; color: #6c757d; font-size: 12px;">
                Reply directly to this email to respond to ${sanitizedData.firstName}
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${sanitizedData.firstName} ${sanitizedData.lastName}
        Email: ${sanitizedData.email}
        Service Interest: ${sanitizedData.service}
        Submitted: ${new Date().toLocaleString()}
        
        Message:
        ${sanitizedData.message}
        
        ---
        This message was sent from your portfolio website contact form.
      `,
    };

    // Send email with timeout
    const emailPromise = transporter.sendMail(mailOptions);
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Email sending timeout')), 30000),
    );

    await Promise.race([emailPromise, timeoutPromise]);

    const processingTime = Date.now() - startTime;
    console.log(`Email sent successfully in ${processingTime}ms`);

    res.json({
      success: true,
      message: 'Email sent successfully!',
      processingTime: `${processingTime}ms`,
    });
  } catch (error) {
    const processingTime = Date.now() - startTime;
    console.error(`Email sending error (${processingTime}ms):`, error);

    // Handle specific error types
    let statusCode = 500;
    let message = 'Failed to send email. Please try again.';

    if (error.code === 'MISSING_CONFIG' || error.code === 'INVALID_PASSWORD') {
      statusCode = 503;
      message =
        'Email service temporarily unavailable. Please contact us directly.';
    } else if (error.message.includes('timeout')) {
      statusCode = 504;
      message = 'Email service timeout. Please try again later.';
    }

    res.status(statusCode).json({
      success: false,
      message,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      processingTime: `${processingTime}ms`,
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'Server is running!',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
    path: req.originalUrl,
  });
});

// Global error handler
app.use((error, req, res) => {
  console.error('Unhandled error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? error.message : undefined,
  });
});

// Graceful shutdown
const gracefulShutdown = (signal) => {
  console.log(`\n${signal} received. Shutting down gracefully...`);
  process.exit(0);
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Start server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email service ready for contact form submissions`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`⏰ Started at: ${new Date().toISOString()}`);
});

// Handle server errors
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use`);
    process.exit(1);
  } else {
    console.error('❌ Server error:', error);
    process.exit(1);
  }
});
