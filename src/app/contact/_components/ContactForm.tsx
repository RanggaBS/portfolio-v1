"use client";

import { useForm } from "react-hook-form";
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

const ContactForm = () => {
	const form = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
	});

	// TODO: Implement send email feature
	const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
		console.log("values = ", values);

		alert(
			"Email not sent. Because this feature hasn't been implemented yet."
		);
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

				<Button type="submit" className="mt-2">
					Submit
				</Button>
				<p className="text-xs">
					* This send email feature hasn&apos;t been implemented yet.
					<br />
					So don&apos;t worry if you accidentally submit the form.
				</p>
			</form>
		</Form>
	);
};

export default ContactForm;
