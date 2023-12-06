"use client";

import { z } from "zod";

export const contactFormSchema = z.object({
	name: z.string().trim().min(3, {
		message: "Name must be at least 3 characters.",
	}),
	email: z
		.string()
		.min(1, { message: "Email is required" })
		.email()
		.trim()
		.toLowerCase(),
	message: z.string().trim().min(2, { message: "Message is required" }),
});
