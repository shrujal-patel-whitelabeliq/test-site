"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Globe, Smartphone, Palette, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "Web Development",
        description: "We build scalable, high-performance websites and web applications using the latest technologies. From tailored corporate sites to complex SaaS platforms.",
        icon: Globe,
        link: "/services#web",
        color: "from-blue-500 to-cyan-500",
        image: "/service-web.png",
        features: [
            "Custom Website Development",
            "E-commerce Solutions",
            "SaaS Application Development",
            "Progressive Web Apps"
        ]
    },
    {
        title: "Mobile App Development",
        description: "Native iOS & Android apps and cross-platform solutions that deliver seamless user experiences and powerful functionality for your business.",
        icon: Smartphone,
        link: "/services#mobile",
        color: "from-purple-500 to-pink-500",
        image: "/service-mobile.png",
        features: [
            "Native iOS & Android",
            "Cross-platform (React Native/Flutter)",
            "App Store Optimization",
            "Maintenance & Support"
        ]
    },
    {
        title: "UI/UX Design",
        description: "User-centric design that blends aesthetics with usability. We create intuitive interfaces that drive engagement and conversions.",
        icon: Palette,
        link: "/services#design",
        color: "from-orange-500 to-red-500",
        image: "/service-design.png",
        features: [
            "User Research & Strategy",
            "Wireframing & Prototyping",
            "Visual Design Systems",
            "Usability Testing"
        ]
    },
    {
        title: "Digital Marketing",
        description: "Data-driven strategies including SEO, PPC, and content marketing to increase your visibility and ROI in the digital space.",
        icon: BarChart3,
        link: "/services#marketing",
        color: "from-green-500 to-emerald-500",
        image: "/service-marketing.png",
        features: [
            "Technical SEO Optimization",
            "PPC & Ad Campaigns",
            "Content Strategy",
            "Analytics & Reporting"
        ]
    },
];

export function ServicesHighlight() {
    return (
        <section className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10">
                <motion.div
                    variants={staggerContainer()}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <motion.span
                        variants={fadeIn("up")}
                        className="text-blue-400 font-medium tracking-wider uppercase mb-4 block"
                    >
                        What We Do
                    </motion.span>
                    <motion.h2 variants={fadeIn("up")} className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Comprehensive IT Solutions
                    </motion.h2>
                    <motion.p variants={fadeIn("up")} className="text-slate-400 text-lg">
                        We provide end-to-end digital services to help your business grow, innovate, and succeed in a connected world.
                    </motion.p>
                </motion.div>

                {/* Services with alternating layout */}
                <div className="space-y-24 md:space-y-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}
                        >
                            {/* Image */}
                            <div className="flex-1 w-full">
                                <div className="relative group">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 rounded-3xl blur-2xl group-hover:opacity-30 transition-opacity`} />
                                    <div className="relative rounded-3xl overflow-hidden border border-slate-800">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-[300px] md:h-[400px] object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 w-full">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-6`}>
                                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>
                                </div>

                                <h3 className="text-2xl md:text-4xl font-bold font-heading mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                            <span className="text-slate-300 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button variant="outline" size="lg" asChild>
                                    <Link href={service.link} className="inline-flex items-center gap-2">
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <Button variant="gradient" size="lg" asChild>
                        <Link href="/services" className="inline-flex items-center gap-2">
                            View All Services <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </motion.div>
            </Container>
        </section>
    );
}
