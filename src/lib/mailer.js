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

  return nodemailer.createTransporter({
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
                      Campus: Phase 2, Aduru, Kithaganur, Bengaluru - 560049
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
                Phase 2, Aduru, Kithaganur, Bengaluru &bull; Phone: +91 70222 61013
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
 * Sends the enquiry notification email
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
NEW ADMISSION ENQUIRY - APPY KIDZ KITHAGANUR
---------------------------------------------
Parent Name: ${data.parentName}
Phone: ${data.phone}
Email: ${data.email || 'Not provided'}
Programme: ${data.program || 'Not specified'}
Child Age: ${data.childAge || 'Not specified'}
Preferred Visit Time: ${data.preferredTime || 'Flexible'}
Message: ${data.message || 'None'}
Source: ${data.source || 'Website'}
Date: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
---------------------------------------------
Campus: Phase 2, Aduru, Kithaganur, Bengaluru - 560049
Phone: +91 70222 61013
  `.trim();

  const info = await transporter.sendMail({
    from,
    to,
    replyTo: data.email && data.email.includes('@') ? data.email : undefined,
    subject: `🎓 New Admission Enquiry: ${data.parentName} (${data.program || 'Preschool'})`,
    text,
    html,
  });

  return {
    success: true,
    messageId: info.messageId,
  };
}
