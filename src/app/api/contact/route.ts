import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const body = await req.json();
        const { full_name, email_address, service_interest, message } = body;

        const submission_date = new Date().toLocaleDateString();
        const submission_time = new Date().toLocaleTimeString();

        // 1. Team Notification Email (to shrujalp@whitelabeliq.com)
        const teamEmailHtml = `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
    <h2 style="color: #1e293b;">Hello Team,</h2>
    <p>You've received a new contact form submission from the Antigravity website. Here are the details:</p>
    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
    <p><strong>Full Name:</strong><br />${full_name}</p>
    <p><strong>Email Address:</strong><br />${email_address}</p>
    <p><strong>Service Interest:</strong><br />${service_interest}</p>
    <p><strong>Message:</strong><br />${message}</p>
    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
    <p><strong>Submission Details:</strong></p>
    <ul style="list-style: disc; padding-left: 20px;">
        <li>Source: Website Contact Form</li>
        <li>Date: ${submission_date}</li>
        <li>Time: ${submission_time}</li>
    </ul>
    <p>Please follow up with the sender at your earliest convenience.</p>
    <p style="margin-top: 32px;">Best regards,<br /><strong>Antigravity Website</strong><br />Automated Notification System</p>
</div>
`;

        // 2. User Confirmation Email
        const userConfirmationHtml = `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
    <h2 style="color: #1e293b;">Hi ${full_name},</h2>
    <p>Thank you for reaching out to <strong>Antigravity</strong> 👋<br />
    We've successfully received your message and appreciate you taking the time to contact us.</p>
    <p>Here's a quick summary of what you submitted:</p>
    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
    <p><strong>Service Interest:</strong><br />${service_interest}</p>
    <p><strong>Your Message:</strong><br />${message}</p>
    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
    <p>Our team is currently reviewing your inquiry, and we'll get back to you as soon as possible—typically within <strong>1 business day</strong>.</p>
    <p>If you have any additional details to share in the meantime, feel free to reply directly to this email.</p>
    <p>Looking forward to connecting with you!</p>
    <p style="margin-top: 32px;">Best regards,<br /><strong>The Antigravity Team</strong><br />
    📧 <a href="mailto:hello@antigravity.com">hello@antigravity.com</a><br />
    📞 +1 (555) 123-4567<br />
    🕘 Mon–Fri, 9am–6pm PST</p>
</div>
`;

        // Send Team Notification via Resend
        const teamResponse = await resend.emails.send({
            from: "Antigravity Website <onboarding@resend.dev>",
            to: ["shrujalp@whitelabeliq.com"],
            subject: `New Contact Inquiry from ${full_name}`,
            html: teamEmailHtml,
        });

        console.log("Team Email Resend Response:", teamResponse);

        // Send User Confirmation via Resend
        const userResponse = await resend.emails.send({
            from: "Antigravity <onboarding@resend.dev>",
            to: [email_address],
            subject: "We've received your message - Antigravity",
            html: userConfirmationHtml,
        });

        console.log("User Confirmation Email Resend Response:", userResponse);

        if (userResponse.error) {
            console.error("Resend User Email Error Details:", userResponse.error);
        }

        return NextResponse.json({
            success: true,
            message: "Inquiry processed",
            debug: {
                team: !!teamResponse.data,
                user: !!userResponse.data,
                userError: userResponse.error?.message || null
            }
        });
    } catch (error) {
        console.error("Resend API Route Error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to process inquiry" },
            { status: 500 }
        );
    }
}
