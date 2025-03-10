"use client";

import { MessageCircle, Github, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/", label: "GitHub" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/", label: "Twitter" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com/", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-400">
      {/* Action Buttons */}
          {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm mb-8">
          {[
            ["Privacy Policy", "/privacy"],
            ["Terms of Service", "/tos"],
            ["Disclaimer", "/disclaimer"],
            ["About Us", "/about"],
            ["Contact", "/contact"],
            ["DMCA", "/dmca"],
          ].map(([title, url]) => (
            <a
              key={title}
              href={url}
              className="hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
            >
              {title}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        {/* <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-400 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
            >
              {icon}
            </a>
          ))}
        </div> */}

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TeraPlayr All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
