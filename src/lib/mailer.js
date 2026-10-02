import nodemailer from 'nodemailer';

/**
 * Creates and returns a configured Nodemailer transporter
 */
export function getTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    // Optional timeout settings
    connectionTimeout: 10000,
    greetingTimeout: 5000,
    socketTimeout: 15000,
  });
}

/**
 * Generates an executive, branded HTML email for the admissions desk
 */
export function generateNotificationHtml(data) {
  const {
    parentName,
    phone,
    email = 'Not provided',
    childAge = 'Not specified',
    program = 'General Enquiry',
    preferredTime = 'Flexible',
    message = 'None',
    source = 'Website Form',
    submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  } = data;

  const waLink = `https://wa.me/91${phone.replace(/[^0-9]/g, '')}`;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Admission Enquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F8FAFC; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E293B;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #F8FAFC; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #E2E8F0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #559E18 0%, #3F7511 100%); padding: 26px 30px; text-align: left;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="display: inline-block; background: rgba(255,255,255,0.2); color: #FEF08A; font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; padding: 4px 10px; border-radius: 9999px; margin-bottom: 8px;">
                      🎓 New Admission Enquiry
                    </span>
                    <h1 style="margin: 0; color: #FFFFFF; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">
                      Appy Kidz International Pre School
                    </h1>
                    <p style="margin: 4px 0 0; color: #DCFCE7; font-size: 13px;">
                      Campus: Building No 30, Aryan Springz, Phase 2, Kithaganur, Bangalore - 560049
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Summary Alert -->
          <tr>
            <td style="padding: 24px 30px 10px;">
              <div style="background-color: #F0FDF4; border-left: 4px solid #559E18; padding: 14px 16px; border-radius: 6px;">
                <p style="margin: 0; font-size: 14px; color: #166534; font-weight: 600;">
                  A parent just submitted a school visit &amp; admission enquiry through the website.
                </p>
                <p style="margin: 4px 0 0; font-size: 12px; color: #4B5563;">
                  Source: <strong>${source}</strong> &bull; Received on: ${submittedAt} (IST)
                </p>
              </div>
            </td>
          </tr>

          <!-- Key Lead Details Table -->
          <tr>
            <td style="padding: 15px 30px 25px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                
                <tr>
                  <td style="padding: 11px 0; border-bottom: 1px solid #F1F5F9; color: #64748B; font-size: 13px; width: 38%; font-weight: 600;">
                    Parent's Name
                  </td>
                  <td style="padding: 11px 0; border-bottom: 1px solid #F1F5F9; color: #0F172A; font-size: 14px; font-weight: 700;">
                    ${parentName}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 11px 0; border-bottom: 1px solid #F1F5F9; color: #64748B; font-size: 13px; font-weight: 600;">
                    Phone Number
                  </td>
                  <td style="padding: 11px 0; border-bottom: 1px solid #F1F5F9; color: #0F172A; font-size: 14px; font-weight: 700;">
                    <a href="tel:${phone}" style="color: #0284C7; text-decoration: none;">${phone}</a>
                    &nbsp;&bull;&nbsp;
                    <a href="${waLink}" style="color: #16A34A; text-decoration: none; font-size: 12px;" target="_blank">Chat WhatsApp &rarr;</a>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 11px 0; border-bottom: 1px solid #F1F5F9; color: #64748B; font-size: 13px; font-weight: 600;">
                    Email Address
                  </td>
                  <td style="padding: 11px 0; border-bottom: 1px solid #F1F5F9; color: #0F172A; font-size: 14px;">
                    ${email !== 'Not provided' ? `<a href="mailto:${email}" style="color: #0284C7; text-decoration: none;">${email}</a>` : '<span style="color: #94A3B8;">Not provided</span>'}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 11px 0; border-bottom: 1px solid #F1F5F9; color: #64748B; font-size: 13px; font-weight: 600;">
                    Programme Interested
                  </td>
                  <td style="padding: 11px 0; border-bottom: 1px solid #F1F5F9; color: #559E18; font-size: 14px; font-weight: 800;">
                    ${program}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 11px 0; border-bottom: 1px solid #F1F5F9; color: #64748B; font-size: 13px; font-weight: 600;">
                    Child's Age
                  </td>
                  <td style="padding: 11px 0; border-bottom: 1px solid #F1F5F9; color: #0F172A; font-size: 14px; font-weight: 600;">
                    ${childAge}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 11px 0; border-bottom: 1px solid #F1F5F9; color: #64748B; font-size: 13px; font-weight: 600;">
                    Preferred Visit Window
                  </td>
                  <td style="padding: 11px 0; border-bottom: 1px solid #F1F5F9; color: #0F172A; font-size: 14px;">
                    ${preferredTime}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 12px 0 0; color: #64748B; font-size: 13px; font-weight: 600; vertical-align: top;">
                    Parent Message / Notes
                  </td>
                  <td style="padding: 12px 0 0; color: #334155; font-size: 13px; line-height: 1.5; font-style: italic;">
                    ${message ? `“${message}”` : '<span style="color: #94A3B8;">No additional notes</span>'}
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Quick Action Buttons -->
          <tr>
            <td style="padding: 0 30px 25px; text-align: center;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <a href="tel:${phone}" style="display: inline-block; background-color: #559E18; color: #FFFFFF; font-weight: 700; font-size: 13px; text-decoration: none; padding: 10px 20px; border-radius: 8px; margin: 0 6px 6px;">
                      📞 Call Parent
                    </a>
                    <a href="${waLink}" style="display: inline-block; background-color: #16A34A; color: #FFFFFF; font-weight: 700; font-size: 13px; text-decoration: none; padding: 10px 20px; border-radius: 8px; margin: 0 6px 6px;" target="_blank">
                      💬 Open WhatsApp Chat
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #F1F5F9; padding: 16px 30px; text-align: center; border-top: 1px solid #E2E8F0;">
              <p style="margin: 0; font-size: 11px; color: #64748B;">
                Automated enquiry notification from <strong>Appy Kidz International Pre School Website</strong>.
              </p>
              <p style="margin: 4px 0 0; font-size: 11px; color: #94A3B8;">
                Building No 30, Aryan Springz, Phase 2, Kithaganur, Bangalore - 560049 &bull; Phone: +91 70222 61013
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Generates an executive, branded HTML thank you / acknowledgement email for the parent
 */
export function generateParentAcknowledgementHtml(data) {
  const {
    parentName,
    program = 'Preschool & Daycare',
    childAge = 'Not specified',
    preferredTime = 'Flexible',
  } = data;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Enquiring - Appy Kidz International Pre School</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F8FAFC; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E293B;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #F8FAFC; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #E2E8F0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #559E18 0%, #3F7511 100%); padding: 28px 30px; text-align: left;">
              <span style="display: inline-block; background: rgba(255,255,255,0.2); color: #FEF08A; font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; padding: 4px 10px; border-radius: 9999px; margin-bottom: 8px;">
                Admissions 2026-27
              </span>
              <h1 style="margin: 0; color: #FFFFFF; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">
                Appy Kidz International Pre School
              </h1>
              <p style="margin: 4px 0 0; color: #DCFCE7; font-size: 13px;">
                Building No 30, Aryan Springz, Phase 2, Kithaganur, Bangalore - 560049
              </p>
            </td>
          </tr>

          <!-- Welcome Body -->
          <tr>
            <td style="padding: 28px 30px 15px;">
              <h2 style="font-size: 18px; color: #1E293B; margin: 0 0 12px; font-weight: 700;">
                Dear ${parentName},
              </h2>
              <p style="font-size: 14px; line-height: 1.65; color: #334155; margin: 0 0 16px;">
                Thank you for reaching out to <strong>Appy Kidz International Pre School &amp; Day Care</strong>! We are delighted to receive your enquiry for our Kithaganur campus.
              </p>
              
              <div style="background-color: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 10px; padding: 16px 20px; margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px; font-size: 14px; color: #15803D; font-weight: 800;">
                  Your Enquiry Details:
                </h3>
                <p style="margin: 4px 0; font-size: 13px; color: #374151;">
                  &bull; <strong>Programme:</strong> ${program}
                </p>
                <p style="margin: 4px 0; font-size: 13px; color: #374151;">
                  &bull; <strong>Child's Age:</strong> ${childAge}
                </p>
                <p style="margin: 4px 0; font-size: 13px; color: #374151;">
                  &bull; <strong>Preferred Visit Window:</strong> ${preferredTime}
                </p>
              </div>

              <h3 style="font-size: 15px; color: #1E293B; margin: 0 0 10px; font-weight: 700;">
                What to Expect Next:
              </h3>
              <p style="font-size: 14px; line-height: 1.65; color: #334155; margin: 0 0 20px;">
                Our admissions team will call you shortly to confirm your campus visit date and time, show you our child-proofed facilities, and discuss our Montessori curriculum and fees.
              </p>

              <div style="background-color: #F8FAFC; border-radius: 10px; padding: 18px 20px; border: 1px solid #E2E8F0; margin-bottom: 24px;">
                <h4 style="margin: 0 0 8px; font-size: 13px; color: #0F172A; text-transform: uppercase; letter-spacing: 0.5px;">
                  Campus Address &amp; Contact:
                </h4>
                <p style="margin: 3px 0; font-size: 13px; color: #475569;">
                  📍 <strong>Building No 30, Aryan Springz, Phase 2, Kithaganur, Bangalore - 560049</strong>
                </p>
                <p style="margin: 3px 0; font-size: 13px; color: #475569;">
                  📞 Phone: <a href="tel:+917022261013" style="color: #0284C7; text-decoration: none; font-weight: 700;">+91 70222 61013</a>
                </p>
                <p style="margin: 3px 0; font-size: 13px; color: #475569;">
                  ⏰ Campus Hours: Monday – Saturday: 8:30 AM – 6:30 PM
                </p>
              </div>

              <div style="text-align: center; margin-bottom: 10px;">
                <a href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Kithaganur!%20I%20have%20submitted%20an%20admission%20enquiry%20and%20would%20like%20to%20connect." 
                   style="display: inline-block; background-color: #25D366; color: #FFFFFF; font-weight: 700; font-size: 14px; text-decoration: none; padding: 12px 24px; border-radius: 9999px;">
                  💬 Chat with Admissions on WhatsApp
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #F1F5F9; padding: 16px 30px; text-align: center; border-top: 1px solid #E2E8F0;">
              <p style="margin: 0; font-size: 12px; color: #64748B;">
                Warm Regards,<br>
                <strong>Admissions Desk &bull; Appy Kidz International Pre School</strong>
              </p>
              <p style="margin: 6px 0 0; font-size: 11px; color: #94A3B8;">
                Bengaluru Campus: Building No 30, Aryan Springz, Phase 2, Kithaganur, Bangalore - 560049 &bull; +91 70222 61013
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Sends the enquiry notification email to admin AND acknowledgement to parent
 */
export async function sendEnquiryEmail(data) {
  const transporter = getTransporter();

  // If no credentials configured yet, return a safe simulated preview response
  if (!transporter) {
    console.log('\n======================================================');
    console.log('📬 [EMAIL SIMULATION - SMTP CREDENTIALS NOT YET SET]');
    console.log('Lead Details:', {
      Parent: data.parentName,
      Phone: data.phone,
      Email: data.email,
      Program: data.program,
      Age: data.childAge,
      Time: data.preferredTime,
      Message: data.message,
      Source: data.source,
    });
    console.log('To activate live sending, configure SMTP credentials in .env.local');
    console.log('======================================================\n');

    return {
      success: true,
      simulated: true,
      message: 'SMTP credentials not configured yet. Enquiry logged to server console.',
    };
  }

  const to = process.env.ENQUIRY_NOTIFICATION_EMAIL || process.env.SMTP_USER;
  const from = process.env.SMTP_FROM || `"Appy Kidz Admissions" <${process.env.SMTP_USER}>`;

  const html = generateNotificationHtml(data);
  const text = `
NEW ADMISSION ENQUIRY - APPY KIDZ INTERNATIONAL PRE SCHOOL
-----------------------------------------------------------
Parent Name: ${data.parentName}
Phone: ${data.phone}
Email: ${data.email || 'Not provided'}
Programme: ${data.program || 'Not specified'}
Child Age: ${data.childAge || 'Not specified'}
Preferred Visit Time: ${data.preferredTime || 'Flexible'}
Message: ${data.message || 'None'}
Source: ${data.source || 'Website'}
Date: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
-----------------------------------------------------------
Campus: Building No 30, Aryan Springz, Phase 2, Kithaganur, Bangalore - 560049
Phone: +91 70222 61013
  `.trim();

  // 1. Send notification to school admissions email (appykidzbangalore@gmail.com)
  const info = await transporter.sendMail({
    from,
    to,
    replyTo: data.email && data.email.includes('@') ? data.email : undefined,
    subject: `🎓 New Admission Enquiry: ${data.parentName} (${data.program || 'Preschool'})`,
    text,
    html,
  });

  // 2. If parent provided an email, send them a confirmation / thank you email
  if (data.email && data.email.includes('@')) {
    try {
      const parentHtml = generateParentAcknowledgementHtml(data);
      await transporter.sendMail({
        from,
        to: data.email.trim(),
        subject: `Thank You for Your Enquiry — Appy Kidz International Pre School`,
        html: parentHtml,
      });
    } catch (parentEmailErr) {
      console.error('Error sending parent acknowledgement email:', parentEmailErr);
    }
  }

  return {
    success: true,
    messageId: info.messageId,
  };
}
