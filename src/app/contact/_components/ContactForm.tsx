"use client";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";

import Button from "@/components/ui/Button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema } from "@/schema/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export type ContactBody = {
	name: string;
	email: string;
	message: string;
};

const ContactForm = () => {
	const form = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
	});

	const submitButtonRef = useRef<HTMLButtonElement | null>(null);

	const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
		if (submitButtonRef && submitButtonRef.current) {
			submitButtonRef.current.disabled = true;
		}

		const sendDatas = async (): Promise<string> => {
			const response = await fetch("/api/email", {
				method: "POST",
				body: JSON.stringify(values),
			});

			if (!response.ok) {
				console.error(response.status, response.statusText);
				return Promise.reject(response.statusText);
			}

			return Promise.resolve("OK");
		};

		const sendDatasTest = new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() <= 0.5) {
					reject("REJECT");
				} else {
					resolve("RESOLVE");
				}
			}, 3000);
		});

		const sendingToast = toast.promise(
			process.env.NODE_ENV !== "production" ? sendDatasTest : sendDatas(),
			{
				loading: "Sending email..",
				success: "Success. Email was sent.",
				error: "An error occured. Email not sent.",
			}
		);

		try {
			await sendingToast;
		} finally {
			if (submitButtonRef && submitButtonRef.current) {
				submitButtonRef.current.disabled = false;
			}
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="max-w-lg ml-8 space-y-2"
			>
				{/* Name begin */}
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Your name.." {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Name end */}

				{/* Email begin */}
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Your email.." {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Email end */}

				{/* Message begin */}
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Textarea
									placeholder="Type your message here.."
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Message end */}

				<Button type="submit" className="mt-2" ref={submitButtonRef}>
					Submit
				</Button>

				{/* <p className="text-xs">
					* This send email feature hasn&apos;t been implemented yet.
					<br />
					So don&apos;t worry if you accidentally submit the form.
				</p> */}
			</form>
		</Form>
	);
};

export default ContactForm;
