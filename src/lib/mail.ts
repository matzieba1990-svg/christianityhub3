import nodemailer from 'nodemailer'

export async function sendVerificationEmail(email: string, token: string, origin: string) {
  const verifyUrl = `${origin}/verify?token=${token}`

  // Jeśli nie mamy skonfigurowanego SMTP, tylko wypisz w konsoli (do testów)
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
    console.log('\n=============================================')
    console.log(`Brak danych SMTP. Link weryfikacyjny dla ${email}:`)
    console.log(verifyUrl)
    console.log('=============================================\n')
    return
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const mailOptions = {
    from: `"ChristianityHub" <${process.env.SMTP_USER}>`,
    to: email,
    subject: 'Zweryfikuj swój adres email w ChristianityHub',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; text-align: center; background-color: #FAF6F0; color: #2C2621; border-radius: 10px;">
        <h1 style="color: #C9A227;">Witaj w ChristianityHub!</h1>
        <p>Cieszymy się, że dołączasz do naszej chrześcijańskiej wspólnoty.</p>
        <p>Aby dokończyć rejestrację i aktywować swoje konto, kliknij w poniższy przycisk:</p>
        <div style="margin: 30px 0;">
          <a href="${verifyUrl}" style="background-color: #C9A227; color: white; padding: 14px 28px; text-decoration: none; border-radius: 10px; font-weight: bold; display: inline-block;">Aktywuj konto</a>
        </div>
        <p style="font-size: 12px; color: #857A70;">Jeśli nie zakładałeś konta, zignoruj tę wiadomość.</p>
        <p style="font-size: 12px; color: #857A70; margin-top: 20px;">✝ Z Bogiem</p>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
}
