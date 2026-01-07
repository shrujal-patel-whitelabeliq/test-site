"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        full_name: "",
        email_address: "",
        service_interest: "Web Development",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ full_name: "", email_address: "", service_interest: "Web Development", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Submission failed:", error);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="pt-32 pb-20 min-h-[70vh] flex items-center justify-center">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-xl mx-auto text-center"
                    >
                        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                            <CheckCircle2 size={48} />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold font-heading mb-6">Message Sent!</h1>
                        <p className="text-xl text-slate-400 mb-10">
                            Thank you for reaching out. We&apos;ve received your inquiry and sent a confirmation email to {formData.email_address || "your inbox"}. Our team will get back to you shortly.
                        </p>
                        <Button variant="gradient" size="lg" onClick={() => setStatus("idle")}>
                            Send Another Message
                        </Button>
                    </motion.div>
                </Container>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20">
            <Container>
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeIn("up")}
                    className="grid lg:grid-cols-2 gap-16"
                >
                    {/* Contact Info */}
                    <div>
                        <span className="text-blue-400 font-medium tracking-wider uppercase mb-4 block">Get In Touch</span>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Let&apos;s Start a Conversation</h1>
                        <p className="text-xl text-slate-400 mb-12">
                            Whether you have a specific project in mind or just want to explore possibilities, we&apos;re here to help.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-blue-400 flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Visit Us</h3>
                                    <p className="text-slate-400">123 Innovation Drive, Suite 100<br />Tech City, CA 94000</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-blue-400 flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
                                    <p className="text-slate-400">hello@antigravity.com</p>
                                    <p className="text-slate-400">support@antigravity.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-blue-400 flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Call Us</h3>
                                    <p className="text-slate-400">+1 (555) 123-4567</p>
                                    <p className="text-slate-400">Mon-Fri from 9am to 6pm PST</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-slate-900/50 p-8 md:p-10 rounded-3xl border border-slate-800">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="full_name" className="text-sm font-medium text-slate-300">Full Name</label>
                                    <input
                                        id="full_name"
                                        type="text"
                                        required
                                        value={formData.full_name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email_address" className="text-sm font-medium text-slate-300">Email Address</label>
                                    <input
                                        id="email_address"
                                        type="email"
                                        required
                                        value={formData.email_address}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service_interest" className="text-sm font-medium text-slate-300">Service Interest</label>
                                <select
                                    id="service_interest"
                                    value={formData.service_interest}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                                >
                                    <option>Web Development</option>
                                    <option>Mobile App Development</option>
                                    <option>UI/UX Design</option>
                                    <option>Digital Marketing</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                ></textarea>
                            </div>

                            {status === "error" && (
                                <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                                    <AlertCircle size={16} />
                                    <span>Something went wrong. Please try again.</span>
                                </div>
                            )}

                            <Button
                                variant="gradient"
                                size="lg"
                                className="w-full"
                                disabled={status === "loading"}
                            >
                                {status === "loading" ? "Sending..." : (
                                    <span className="flex items-center gap-2">
                                        Send Message <Send size={18} />
                                    </span>
                                )}
                            </Button>
                        </form>
                    </div>
                </motion.div>

                {/* Map Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 w-full h-[300px] bg-slate-900 rounded-2xl border border-slate-800 relative overflow-hidden flex items-center justify-center text-slate-600"
                >
                    <MapPin size={48} className="opacity-20" />
                    <span className="ml-4 font-bold text-xl opacity-20">Map Embed Placeholder (Performance Optimized)</span>
                </motion.div>
            </Container>
        </div>
    );
}
