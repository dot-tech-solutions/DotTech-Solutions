import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, budget, message } = body;

    // Basic Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name?.trim() || !email?.trim() || !message?.trim() || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid or missing required fields' },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Change if not using Gmail
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const senderEmail = process.env.EMAIL_FROM || process.env.EMAIL_USER;
    const mailOptions = {
      from: `"${name} (Website Contact)" <${senderEmail}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Phone: ${phone || 'N/A'}
Service: ${service || 'N/A'}
Budget: ${budget || 'N/A'}

Message:
${message}
`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
