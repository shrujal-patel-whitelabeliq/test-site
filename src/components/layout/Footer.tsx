import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Github, Twitter, Linkedin, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 py-12 md:py-16">
            <Container>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">A</span>
                            </div>
                            <span className="font-heading font-bold text-white text-lg">Antigravity</span>
                        </Link>
                        <p className="text-slate-400 text-sm mb-6 max-w-xs">
                            Empowering businesses with enterprise-grade digital solutions. 25+ years of delivering excellence in web, mobile, and marketing.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                                <Facebook size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-heading font-bold text-white mb-4">Services</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">Mobile Apps</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">UI/UX Design</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">SEO & Marketing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-heading font-bold text-white mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-heading font-bold text-white mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li>123 Innovation Drive,<br />Tech City, CA 94000</li>
                            <li><a href="mailto:hello@antigravity.com" className="hover:text-blue-400">hello@antigravity.com</a></li>
                            <li><a href="tel:+15551234567" className="hover:text-blue-400">+1 (555) 123-4567</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Antigravity Solutions. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-slate-300">Privacy Policy</Link>
                        <Link href="#" className="hover:text-slate-300">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
