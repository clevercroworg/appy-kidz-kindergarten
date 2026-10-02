import { NextResponse } from 'next/server';
import { sendEnquiryEmail } from '../../../lib/mailer';

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      parentName,
      phone,
      email,
      childAge,
      program,
      preferredTime,
      message,
      source,
    } = body || {};

    // Validate required fields
    if (!parentName || !parentName.trim()) {
      return NextResponse.json(
        { error: "Parent's name is required." },
        { status: 400 }
      );
    }

    if (!phone || !phone.trim()) {
      return NextResponse.json(
        { error: 'Phone number is required.' },
        { status: 400 }
      );
    }

    // Prepare lead object
    const leadData = {
      parentName: parentName.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : '',
      childAge: childAge ? childAge.trim() : '',
      program: program ? program.trim() : 'Preschool Enquiry',
      preferredTime: preferredTime ? preferredTime.trim() : 'Morning',
      message: message ? message.trim() : '',
      source: source || 'Website Admission Modal',
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    // Send email using Nodemailer
    const result = await sendEnquiryEmail(leadData);

    return NextResponse.json({
      success: true,
      message: result.simulated
        ? 'Enquiry received in preview mode (SMTP credentials pending).'
        : 'Enquiry sent successfully to the admissions desk.',
      simulated: !!result.simulated,
    });
  } catch (error) {
    console.error('Error handling admission enquiry email:', error);
    return NextResponse.json(
      {
        error: 'Failed to process enquiry email.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  const isConfigured = Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
  return NextResponse.json({
    status: 'ok',
    service: 'Appy Kidz Admissions Email API',
    smtpConfigured: isConfigured,
    smtpHost: process.env.SMTP_HOST || 'smtp.gmail.com',
  });
}
