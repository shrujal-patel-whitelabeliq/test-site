"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Code2, Server, ShoppingCart, Cloud } from "lucide-react";

const technologies = [
    {
        category: "Frontend & Mobile",
        icon: Code2,
        color: "from-blue-500 to-cyan-500",
        techs: ["React.js", "Vue.js", "Next.js", "React Native", "Flutter", "TypeScript", "Tailwind CSS"]
    },
    {
        category: "Backend & API",
        icon: Server,
        color: "from-purple-500 to-pink-500",
        techs: ["Node.js", "Python", "Laravel", "Ruby on Rails", "GraphQL", "REST API"]
    },
    {
        category: "CMS & Ecommerce",
        icon: ShoppingCart,
        color: "from-orange-500 to-red-500",
        techs: ["WordPress", "Shopify", "Magento", "WooCommerce", "Strapi", "Contentful"]
    },
    {
        category: "Infrastructure",
        icon: Cloud,
        color: "from-green-500 to-emerald-500",
        techs: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Vercel", "Firebase"]
    }
];

export function TechStack() {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px]" />

            <Container className="relative z-10">
                <motion.div
                    variants={staggerContainer()}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <motion.span
                        variants={fadeIn("up")}
                        className="text-blue-400 font-medium tracking-wider uppercase mb-4 block"
                    >
                        Our Tech Stack
                    </motion.span>
                    <motion.h2
                        variants={fadeIn("up")}
                        className="text-3xl md:text-5xl font-bold font-heading mb-4"
                    >
                        Powered by Modern Tech
                    </motion.h2>
                    <motion.p variants={fadeIn("up")} className="text-slate-400 text-lg">
                        We choose the right tools for your specific needs, ensuring scalability, security, and performance.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={staggerContainer(0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-6"
                >
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.category}
                            variants={fadeIn("up", index * 0.1)}
                            className="group relative p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 backdrop-blur-sm"
                        >
                            {/* Gradient glow on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />

                            <div className="relative z-10">
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} p-0.5`}>
                                        <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                                            <tech.icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold font-heading text-white">
                                        {tech.category}
                                    </h3>
                                </div>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-2">
                                    {tech.techs.map((item) => (
                                        <span
                                            key={item}
                                            className="px-4 py-2 bg-slate-800/80 text-slate-300 text-sm rounded-full border border-slate-700/50 hover:border-slate-600 hover:text-white transition-colors cursor-default"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}

