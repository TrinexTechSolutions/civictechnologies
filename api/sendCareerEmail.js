
import axios from "axios";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, position, message, resumeName, resumeBase64 } = req.body;

  if (!name || !email || !position) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  let attachment = [];
  if (resumeBase64 && resumeName) {
    const base64Content = resumeBase64.split(",")[1];
    if (base64Content) {
      attachment.push({
        name: resumeName,
        content: base64Content
      });
    }
  }

  try {
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Career Application",
          email: process.env.EMAIL_ADDRESS
        },
        to: [
          {
            email: process.env.EMAIL_ADDRESS_HR
          }
        ],
        replyTo: {
          email: email,
          name: name
        },
        subject: `New Career Application: ${position}`,
        htmlContent: `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>

<body style="margin:0;padding:0;background:#ffffff;font-family:Arial, Helvetica, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
    <tr>
      <td align="center">

        <!-- MAIN WRAPPER -->
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:900px;width:100%;">

          <!-- HERO STYLE HEADER -->
          <tr>
            <td style="padding:80px 20px 40px 20px;text-align:center;">

              <!-- General (Cursive, Smaller) -->
              <div style="
                font-size:70px;
                color:#0177B2;
                line-height:1;
                font-family:'Quintessential', serif;
              ">
                Career
              </div>

              <!-- Inquiry (Large, Bold, Dominant) -->
              <div style="
                font-size:64px;
                font-weight:900;
                letter-spacing:6px;
                text-transform:uppercase;
                color:#111111;
                margin-top:-10px;
              ">
                Application
              </div>

              <p style="
                margin-top:30px;
                font-size:18px;
                color:#555555;
                line-height:1.8;
                max-width:600px;
                margin-left:auto;
                margin-right:auto;
              ">
                A new candidate has submitted a career application.
              </p>

            </td>
          </tr>

          <!-- GOLD DIVIDER -->
          <tr>
            <td style="height:5px;background:#0177B2;"></td>
          </tr>

          <!-- CONTENT -->
          <tr>
            <td style="padding:70px 40px 80px 40px;">

              <table width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td style="padding-bottom:30px;">
                    <div style="font-size:12px;text-transform:uppercase;letter-spacing:3px;color:#999999;margin-bottom:8px;">
                      Full Name
                    </div>
                    <div style="font-size:20px;font-weight:700;color:#111111;">
                      ${name}
                    </div>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom:30px;">
                    <div style="font-size:12px;text-transform:uppercase;letter-spacing:3px;color:#999999;margin-bottom:8px;">
                      Email
                    </div>
                    <div style="font-size:20px;font-weight:700;color:#111111;">
                      ${email}
                    </div>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom:30px;">
                    <div style="font-size:12px;text-transform:uppercase;letter-spacing:3px;color:#999999;margin-bottom:8px;">
                      Phone
                    </div>
                    <div style="font-size:20px;font-weight:700;color:#111111;">
                      ${phone || "N/A"}
                    </div>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom:30px;">
                    <div style="font-size:12px;text-transform:uppercase;letter-spacing:3px;color:#999999;margin-bottom:8px;">
                      Position Applied For
                    </div>
                    <div style="font-size:20px;font-weight:700;color:#111111;">
                      ${position || "N/A"}
                    </div>
                  </td>
                </tr>

                <!-- MESSAGE -->
                <tr>
                  <td style="padding-top:20px;">
                    <div style="font-size:12px;text-transform:uppercase;letter-spacing:3px;color:#999999;margin-bottom:12px;">
                      Message / Cover Letter
                    </div>

                    <div style="
                      background:#f9f9f9;
                      padding:35px;
                      border-radius:14px;
                      font-size:18px;
                      line-height:1.9;
                      color:#333333;
                    ">
                      ${message || "No message provided."}
                    </div>
                  </td>
                </tr>

              </table>

            </td>
          </tr>

          <!-- EXTRA SPACE TO FIX CUT ISSUE -->
          <tr>
            <td style="height:60px;"></td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="
              padding:60px 20px 80px 20px;
              border-top:1px solid #eeeeee;
              text-align:center;
            ">
              <div style="
                font-size:14px;
                color:#999999;
                letter-spacing:3px;
                text-transform:uppercase;
              ">
                Civic Technologies
              </div>

              <div style="
                margin-top:10px;
                font-size:14px;
                color:#aaaaaa;
              ">
                Industrial Infrastructure & Electrical Turnkey Solutions
              </div>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`,
        attachment: attachment.length > 0 ? attachment : undefined
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Brevo Error:", error.response?.data || error.message);
    return res.status(500).json({ success: false });
  }
}
