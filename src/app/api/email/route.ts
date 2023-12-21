import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import { Options } from "nodemailer/lib/mailer";

import { ContactBody } from "@/app/contact/_components/ContactForm";

export const POST = async (request: NextRequest) => {
	const { name, email, message } = (await request.json()) as ContactBody;

	const MY_EMAIL = process.env.MY_EMAIL as string;
	const GOOGLE_APP_PASSWORD = process.env.GOOGLE_APP_PASSWORD as string;

	const transport = createTransport({
		service: "gmail",
		auth: {
			user: MY_EMAIL,
			pass: GOOGLE_APP_PASSWORD,
		},
	});

	const mailOptions: Options = {
		replyTo: email,
		to: MY_EMAIL,
		subject: "From My Portfolio Contact | " + name,
		text: message,
	};

	const sendEmailPromise = (): Promise<string> =>
		new Promise<string>((resolve, reject) => {
			transport.sendMail(mailOptions, (error) => {
				if (!error) {
					resolve("Email sent.");
				} else {
					reject(error.message);
				}
			});
		});

	try {
		await sendEmailPromise();
		return NextResponse.json({ message: "Email sent." });
	} catch (error) {
		NextResponse.json({ message: "Could not send email." });
	}
};
