"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { ArrowRight, Target, Lightbulb, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20">
            <Container>
                {/* Hero */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeIn("up")}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <span className="text-blue-400 font-medium tracking-wider uppercase mb-4 block">Our Story</span>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                        Pioneering Digital <br /> Transformation Since 2000
                    </h1>
                    <p className="text-xl text-slate-400">
                        For over two decades, Antigravity Solutions has been at the forefront of the IT industry,
                        helping businesses navigate the evolving digital landscape with confidence and clarity.
                    </p>
                </motion.div>

                {/* Mission/Vision */}
                <motion.div
                    variants={staggerContainer()}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8 mb-32"
                >
                    <Card
                        icon={Target}
                        title="Our Mission"
                        description="To provide enterprise-grade technology solutions that empower businesses to scale, innovate, and lead in their markets."
                    />
                    <Card
                        icon={Lightbulb}
                        title="Our Vision"
                        description="To be the global standard for digital excellence, where technology enhances human potential and drives sustainable growth."
                    />
                    <Card
                        icon={Heart}
                        title="Our Values"
                        description="Integrity, Innovation, and Excellence are woven into every line of code we write and every strategy we devise."
                    />
                </motion.div>

                {/* Stats/Story Section */}
                <div className="flex flex-col md:flex-row gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-heading">25 Years of<br />Experience</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Founded by a team of passionate engineers and designers, we started with a simple belief:
                            that technology should be an enabler, not a barrier. Today, we are a global team of
                            over 50 experts, delivering robust solutions to Fortune 500 companies and ambitious startups alike.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Our approach is client-centric and results-driven. We don&apos;t just build websites; we build
                            business assets that generate revenue, streamline operations, and enhance customer satisfaction.
                        </p>
                        <Button variant="outline" className="mt-4" asChild>
                            <Link href="/contact">Work With Us</Link>
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full h-[400px] rounded-2xl border border-slate-800 relative overflow-hidden group"
                    >
                        <img
                            src="/about-team.png"
                            alt="Our team collaborating in a modern tech office"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}

interface CardProps {
    icon: any;
    title: string;
    description: string;
}

function Card({ icon: Icon, title, description }: CardProps) {
    return (
        <motion.div variants={fadeIn("up")} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold font-heading text-white mb-4">{title}</h3>
            <p className="text-slate-400 leading-relaxed">{description}</p>
        </motion.div>
    )
}
