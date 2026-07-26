import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, brand, service, location, message, pincode, source } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const sourceLabel = source === 'brand-detail' ? 'Brand Detail Page' : source === 'homepage' ? 'Homepage' : 'Contact Page';

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #2563eb, #0ea5e9); padding: 24px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 22px;">New Service Request</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 14px;">${sourceLabel} Form Submission</p>
        </div>
        <div style="padding: 24px; background: #f8fafc;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155; width: 140px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            ${email ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569;">${email}</td>
            </tr>` : ''}
            ${brand ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Brand & Service</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569;">${brand}</td>
            </tr>` : ''}
            ${service ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Service Type</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569;">${service}</td>
            </tr>` : ''}
            ${pincode ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Pincode</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569;">${pincode}</td>
            </tr>` : ''}
            ${location ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Location</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569;">${location}</td>
            </tr>` : ''}
            ${message ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Message</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569;">${message}</td>
            </tr>` : ''}
          </table>
        </div>
        <div style="padding: 16px 24px; text-align: center; color: #94a3b8; font-size: 12px; background: white;">
          Submitted via RO Service Center Website
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"RO Service Center" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,
      replyTo: email || undefined,
      subject: `New Service Request from ${name}${brand ? ` — ${brand}` : ''}`,
      html: htmlBody,
    });

    return res.status(200).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again or call us.' });
  }
}
