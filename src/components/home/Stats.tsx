"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Trophy, Users, Globe2, Code2 } from "lucide-react";

const stats = [
    {
        label: "Years Experience",
        value: "25+",
        icon: Trophy,
        description: "Delivering excellence since 2000"
    },
    {
        label: "Projects Delivered",
        value: "500+",
        icon: Code2,
        description: "Across 15+ industries"
    },
    {
        label: "Team Members",
        value: "50+",
        icon: Users,
        description: "Expert developers & designers"
    },
    {
        label: "Global Clients",
        value: "120+",
        icon: Globe2,
        description: "Trusted worldwide"
    },
];

export function Stats() {
    return (
        <section className="py-12 border-y border-slate-800/50 bg-slate-950/50 backdrop-blur-sm">
            <Container>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeIn("up", index * 0.1)}
                            className="flex flex-col items-center justify-center text-center group"
                        >
                            <div className="mb-4 p-3 rounded-2xl bg-slate-900 group-hover:bg-blue-900/20 transition-colors">
                                <stat.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-1">
                                {stat.value}
                            </h3>
                            <p className="text-sm font-medium text-slate-400 mb-1">{stat.label}</p>
                            <p className="text-xs text-slate-500">{stat.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
