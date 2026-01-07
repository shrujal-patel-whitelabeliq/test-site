"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-slate-950/80 z-10" /> {/* Overlay for readability */}
                <img
                    src="/hero-modern-tech.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>

            {/* Background Gradients (Subtle Overlay) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0 opacity-50">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />
            </div>

            <Container className="relative z-10">
                <motion.div
                    variants={staggerContainer(0.2, 0.5)}
                    initial="hidden"
                    animate="show"
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Badge */}
                    <motion.div variants={fadeIn("down")} className="flex justify-center mb-6">
                        <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
                            25+ Years of Digital Excellence
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={fadeIn("up")}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight leading-tight"
                    >
                        We Build <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">Future-Proof</span> <br className="hidden md:block" /> Digital Experiences
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={fadeIn("up")}
                        className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
                    >
                        Your trusted partner for enterprise web development, mobile applications, and results-driven digital marketing. We transform complex challenges into scalable solutions.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeIn("up")}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button size="lg" variant="gradient" className="w-full sm:w-auto px-8" asChild>
                            <Link href="/contact" className="inline-flex items-center gap-2">
                                Start Your Project <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto px-8" asChild>
                            <Link href="/services">
                                Explore Services
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}
