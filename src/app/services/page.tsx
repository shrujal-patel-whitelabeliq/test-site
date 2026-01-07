"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { CheckCircle2, Globe, Smartphone, Palette, BarChart3, Box } from "lucide-react";

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-20">
            <Container>
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeIn("up")}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Our Services</h1>
                    <p className="text-xl text-slate-400">
                        End-to-end digital solutions tailored to your business goals. From concept to launch and beyond.
                    </p>
                </motion.div>

                {/* Web Development */}
                <Section
                    title="Web Development"
                    icon={Globe}
                    description="We build scalable, high-performance websites using the latest technologies."
                    features={[
                        "Templated Website Development - Quick deploy",
                        "Custom Website Development - Tailored solutions",
                        "Ecommerce Store Development - Magento, Shopify, WooCommerce",
                        "SaaS Application Development - Scalable cloud apps"
                    ]}
                    delay={0.1}
                />

                {/* Mobile App */}
                <Section
                    title="Mobile Application Development"
                    icon={Smartphone}
                    description="Native and cross-platform apps that engage users and drive growth."
                    features={[
                        "Native iOS Development - Swift/SwiftUI",
                        "Native Android Development - Kotlin/Java",
                        "Cross-platform Development - React Native/Flutter",
                        "App Store Optimization & Deployment"
                    ]}
                    delay={0.2}
                />

                {/* Design */}
                <Section
                    title="Design & Creative"
                    icon={Palette}
                    description="Award-winning UI/UX design that brings your brand to life."
                    features={[
                        "UI/UX Design - User-centric interfaces",
                        "Graphic Design - Branding & Assets",
                        "3D Rendering - Product visualization",
                        "Motion Graphics - Engaging animations"
                    ]}
                    delay={0.3}
                />

                {/* Marketing */}
                <Section
                    title="Digital Marketing"
                    icon={BarChart3}
                    description="Data-driven strategies to maximize your online visibility and ROI."
                    features={[
                        "Technical SEO Optimization - Core Web Vitals",
                        "Ad Creation - Search & Display Campaigns",
                        "Content Strategy - Authority building",
                        "Social Media Marketing - Brand engagement"
                    ]}
                    delay={0.4}
                />
            </Container>
        </div>
    );
}

interface SectionProps {
    title: string;
    icon: any; // Lucide icon
    description: string;
    features: string[];
    delay: number;
}

function Section({ title, icon: Icon, description, features, delay }: SectionProps) {
    return (
        <motion.div
            variants={fadeIn("up", delay)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/30 transition-all"
        >
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400">
                    <Icon size={32} />
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">{title}</h2>
                    <p className="text-slate-400 mb-8 text-lg">{description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {features.map((feature: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-3">
                                <CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" />
                                <span className="text-slate-300">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
