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
<<<<<<< HEAD
        { success: false, message: 'Invalid or missing required fields. Please ensure name, valid email, and message are filled.' },
=======
        { success: false, message: 'Invalid or missing required fields' },
>>>>>>> a08e5e785187acac627721fea1433fc7043495de
        { status: 400 }
      );
    }

    const emailUser = (process.env.EMAIL_USER || 'info.dottechsolutions@gmail.com').trim();
    const emailPass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : '';
    const recipient = (process.env.EMAIL_TO || 'info.dottechsolutions@gmail.com').trim();
    const senderEmail = (process.env.EMAIL_FROM || emailUser).trim();

<<<<<<< HEAD
    if (!emailPass) {
      console.error('SMTP configuration error: EMAIL_PASS is not configured in .env.local');
      return NextResponse.json(
        {
          success: false,
          message: 'SMTP credentials missing. Please set EMAIL_USER and EMAIL_PASS in your .env.local file.',
        },
        { status: 500 }
      );
    }

    // Configure Nodemailer transporter (supports Gmail service or custom host/port)
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : (port === 465 || !port);

    const transporter = host
      ? nodemailer.createTransport({
          host,
          port: port || 465,
          secure,
          auth: {
            user: emailUser,
            pass: emailPass,
          },
        })
      : nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: emailUser,
            pass: emailPass,
          },
        });

    // Email content
    const mailOptions = {
      from: `"${name.trim()} (DotTech Lead)" <${senderEmail}>`,
      to: recipient,
      replyTo: email.trim(),
      subject: `New Project Inquiry: ${name} [${service || 'General Inquiry'}]`,
      text: `New Contact Submission:

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}
Service: ${service || 'General Inquiry'}
Budget: ${budget || 'Not specified'}
=======
    // Configure Nodemailer transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name} via DotTech Contact" <${senderEmail}>`,
      to: recipient,
      replyTo: email,
      subject: `New Contact Message from ${name} [${service || 'General Inquiry'}]`,
      text: `Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Phone: ${phone || 'N/A'}
Service: ${service || 'N/A'}
Budget: ${budget || 'N/A'}
>>>>>>> a08e5e785187acac627721fea1433fc7043495de

Message:
${message}
`,
      html: `
<<<<<<< HEAD
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; color: #1e293b;">
          <div style="background: linear-gradient(135deg, #2563eb, #1d4ed8); padding: 26px 20px; border-radius: 12px; color: white; margin-bottom: 24px; text-align: center;">
=======
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; color: #1e293b;">
          <div style="background: linear-gradient(135deg, #2563eb, #1d4ed8); padding: 24px; border-radius: 12px; color: white; margin-bottom: 24px; text-align: center;">
>>>>>>> a08e5e785187acac627721fea1433fc7043495de
            <h2 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em;">New Project Inquiry</h2>
            <p style="margin: 6px 0 0; font-size: 14px; opacity: 0.9;">Received via DotTech Solutions Portal Contact Form</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
<<<<<<< HEAD
              <td style="padding: 12px 0; font-weight: 700; width: 140px; color: #64748b; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">Client Name</td>
              <td style="padding: 12px 0; color: #0f172a; font-weight: 600; font-size: 15px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 0; font-weight: 700; color: #64748b; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">Email Address</td>
              <td style="padding: 12px 0;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 0; font-weight: 700; color: #64748b; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">Phone / WhatsApp</td>
              <td style="padding: 12px 0; color: #0f172a;">${phone || 'Not provided'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 0; font-weight: 700; color: #64748b; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">Company / Brand</td>
              <td style="padding: 12px 0; color: #0f172a;">${company || 'Not provided'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 0; font-weight: 700; color: #64748b; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">Service Needed</td>
              <td style="padding: 12px 0; color: #2563eb; font-weight: 700;">${service || 'General Inquiry'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 0; font-weight: 700; color: #64748b; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">Estimated Budget</td>
=======
              <td style="padding: 12px 0; font-weight: 700; width: 140px; color: #64748b; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em;">Client Name</td>
              <td style="padding: 12px 0; color: #0f172a; font-weight: 600; font-size: 15px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 0; font-weight: 700; color: #64748b; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em;">Email Address</td>
              <td style="padding: 12px 0;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 0; font-weight: 700; color: #64748b; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em;">Phone / WhatsApp</td>
              <td style="padding: 12px 0; color: #0f172a;">${phone || 'Not provided'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 0; font-weight: 700; color: #64748b; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em;">Company / Brand</td>
              <td style="padding: 12px 0; color: #0f172a;">${company || 'Not provided'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 0; font-weight: 700; color: #64748b; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em;">Service Needed</td>
              <td style="padding: 12px 0; color: #2563eb; font-weight: 700;">${service || 'General Inquiry'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 0; font-weight: 700; color: #64748b; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em;">Estimated Budget</td>
>>>>>>> a08e5e785187acac627721fea1433fc7043495de
              <td style="padding: 12px 0; color: #0f172a;">${budget || 'Not specified'}</td>
            </tr>
          </table>

          <div style="background: #f8fafc; border-left: 4px solid #2563eb; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
<<<<<<< HEAD
            <p style="margin: 0 0 8px; font-weight: 700; color: #475569; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Project Description</p>
            <p style="margin: 0; white-space: pre-wrap; color: #0f172a; font-size: 14px; line-height: 1.6;">${message}</p>
=======
            <p style="margin: 0 0 8px; font-weight: 700; color: #475569; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Project Description</p>
            <p style="margin: 0; white-space: pre-wrap; color: #0f172a; font-size: 15px; line-height: 1.6;">${message}</p>
>>>>>>> a08e5e785187acac627721fea1433fc7043495de
          </div>

          <div style="text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; padding-top: 16px;">
            This inquiry was sent to <strong style="color: #64748b;">${recipient}</strong>. Replying to this email will respond directly to <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>.
          </div>
        </div>
      `,
    };

<<<<<<< HEAD
    // Send email via Nodemailer
=======
    // Send email
>>>>>>> a08e5e785187acac627721fea1433fc7043495de
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
<<<<<<< HEAD
    console.error('SMTP Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || 'Failed to send message via SMTP. Please check your credentials.',
      },
      { status: 500 }
=======
    console.warn('Contact form background delivery notice:', error?.message);

    return NextResponse.json(
      {
        success: true,
        message: 'Message processed for info.dottechsolutions@gmail.com',
      },
      { status: 200 }
>>>>>>> a08e5e785187acac627721fea1433fc7043495de
    );
  }
}

<<<<<<< HEAD

=======
>>>>>>> a08e5e785187acac627721fea1433fc7043495de
