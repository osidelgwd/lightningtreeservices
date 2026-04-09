
"use client";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const isValidEmail = (email: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validaciones de campo
        if (!form.name.trim()) return toast.error("Name field is required!");
        if (!form.email.trim()) return toast.error("Email field is required!");
        if (!isValidEmail(form.email)) return toast.error("Please enter a valid email address!");
        if (!form.message.trim()) return toast.error("Message field is required!");

        setLoading(true);

        try {
            const result = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
                formRef.current!,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
            );

            if (result.text === "OK") {
                toast.success("Message sent successfully!");
                setForm({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                toast.error("Failed to send message. Try again.");
            }
        } catch (err) {
            console.error("EmailJS Error:", err);
            toast.error("Network error. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            ref={formRef}
            className="row cs_gap_y_24"
            id="cs_form"
            onSubmit={handleSubmit}
        >
            <div className="col-sm-6">
                <input
                    type="text"
                    name="name" // Este nombre debe coincidir con tu template de EmailJS {{name}}
                    className="cs_form_field"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                />
            </div>
            <div className="col-sm-6">
                <input
                    type="email"
                    name="email" // Este nombre debe coincidir con tu template de EmailJS {{email}}
                    className="cs_form_field"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                />
            </div>
            <div className="col-lg-12">
                <textarea
                    className="cs_form_field"
                    name="message" // Este nombre debe coincidir con tu template de EmailJS {{message}}
                    placeholder="How can we help with your trees?"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                />
            </div>
            <div className="col-lg-12">
                <button
                    className="cs_btn cs_style_1 cs_type_1 cs_bold cs_heading_bg cs_white_color w-100"
                    type="submit"
                    disabled={loading}
                >
                    <span>{loading ? "Sending..." : "Send Message"}</span>
                </button>
                <div id="cs_result" className="cs_heading_color" />
            </div>
        </form>
    );
};

export default ContactForm;

// "use client";
// import { useState } from "react";
// import { toast } from "react-toastify";

// interface FormData {
// 	name: string;
// 	email: string;
// 	message: string;
// }

// const ContactForm = () => {
// 	const [form, setForm] = useState<FormData>({
// 		name: "",
// 		email: "",
// 		message: "",
// 	});

// 	const isValidEmail = (email: string): boolean => {
// 		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// 	};

// 	const handleChange = (
// 		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// 	) => {
// 		const { name, value } = e.target;
// 		setForm((prev) => ({ ...prev, [name]: value }));
// 	};

// 	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		// Field validation
// 		if (!form.name.trim()) {
// 			return toast.error("Name field is required!");
// 		}
// 		if (!form.email.trim()) {
// 			return toast.error("Email field is required!");
// 		}
// 		if (!isValidEmail(form.email)) {
// 			return toast.error("Please enter a valid email address!");
// 		}
// 		if (!form.message.trim()) {
// 			return toast.error("Message field is required!");
// 		}

// 		const apiKey = process.env.NEXT_PUBLIC_API_KEY;

// 		const formData = new FormData();
// 		formData.append("access_key", apiKey || "");
// 		formData.append("name", form.name);
// 		formData.append("email", form.email);
// 		formData.append("message", form.message);

// 		try {
// 			const res = await fetch("https://api.web3forms.com/submit", {
// 				method: "POST",
// 				body: formData,
// 			});

// 			if (res.ok) {
// 				toast.success("Message sent successfully!");
// 				setForm({
// 					name: "",
// 					email: "",
// 					message: "",
// 				});
// 			} else {
// 				toast.error("Failed to send message. Try again.");
// 			}
// 		} catch (err) {
// 			toast.error("Network error. Please try again later.");
// 		}
// 	};
// 	return (
// 		<form
// 			method="POST"
// 			className="row cs_gap_y_24"
// 			id="cs_form"
// 			onSubmit={handleSubmit}
// 		>
// 			<div className="col-sm-6">
// 				<input
// 					type="text"
// 					name="name"
// 					className="cs_form_field"
// 					placeholder="Name"
// 					value={form.name}
// 					onChange={handleChange}
// 				/>
// 			</div>
// 			<div className="col-sm-6">
// 				<input
// 					type="email"
// 					name="email"
// 					className="cs_form_field"
// 					placeholder="Email"
// 					value={form.email}
// 					onChange={handleChange}
// 				/>
// 			</div>
// 			<div className="col-lg-12">
// 				<textarea
// 					className="cs_form_field"
// 					name="message"
// 					placeholder="Message"
// 					rows={5}
// 					value={form.message}
// 					onChange={handleChange}
// 				/>
// 			</div>
// 			<div className="col-lg-12">
// 				<button
// 					className="cs_btn cs_style_1 cs_type_1 cs_bold cs_heading_bg cs_white_color w-100"
// 					type="submit"
// 				>
// 					<span>Send Message</span>
// 				</button>
// 				<div id="cs_result" className="cs_heading_color" />
// 			</div>
// 		</form>
// 	);
// };

// export default ContactForm;
