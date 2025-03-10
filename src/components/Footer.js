"use client";

import { MessageCircle, Github, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/terabox-tech", label: "GitHub" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/terabox_tech", label: "Twitter" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com/@terabox_tech", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-400">
      {/* Action Buttons */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://t.me/terasop_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-sky-500 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <MessageCircle className="w-5 h-5" />
            Telegram Bot
          </a>
          {/* <a
            href="https://www.youtube.com/watch?v=ynPuiFzotAQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Watch Tutorial
          </a> */}
        </div>

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
          <p>&copy; {new Date().getFullYear()} Terabox.tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
