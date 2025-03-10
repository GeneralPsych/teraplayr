"use client"; // Use this directive to enable client-side features

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { RocketIcon } from "lucide-react";

const Downloader = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [inputUrl, setInputUrl] = useState("");

  useEffect(() => {
    // Check URL parameters on client side
    const url = searchParams.get("url");
    if (url) {
      setInputUrl(decodeURIComponent(url)); // Decode the URL parameter
    }
  }, [searchParams]);

  const handleUrlChange = (e) => {
    const url = e.target.value;
    if (isValidUrl(url)) {
      setInputUrl(url);
      // Update the URL with the input URL parameter
      const newUrl = `${window.location.pathname}?url=${encodeURIComponent(
        url
      )}`;
      router.push(newUrl);
      let id = url.split("/")[4];
      fetch("https://apis.terabox.tech/api/upload?id=" + id + "&user=1");
    } else {
      alert("Please enter a valid URL.");
    }
  };

  const copyShareLink = () => {
    const currentUrl = `${window.location.origin}${
      window.location.pathname
    }?url=${encodeURIComponent(inputUrl)}`;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("Share link copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying share link:", err);
      });
  };

  const copyEmbedCode = () => {
    const embedCode = `<iframe src="${
      window.location.origin
    }/play.html?url=${encodeURIComponent(
      inputUrl
    )}" width="700px" height="600px" frameborder="0" allowfullscreen scrolling="no"></iframe>`;
    navigator.clipboard
      .writeText(embedCode)
      .then(() => {
        alert("Embed code copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying embed code:", err);
      });
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
            Terabox Video Downloader
          </h1>
          <p className="text-slate-400 text-lg">
            Download, embed and share Terabox videos seamlessly
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-slate-700">
          <div className="relative">
            <input
              id="input-url"
              type="text"
              value={inputUrl}
              onChange={handleUrlChange}
              placeholder="Paste your Terabox URL here"
              className="w-full bg-slate-900/50 text-white placeholder-slate-400 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>
        </div>

        {/* Action Buttons */}
        {inputUrl && (
          <div className="grid gap-4 md:grid-cols-2">
            <button
              onClick={copyEmbedCode}
              className="group relative px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
            >
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copy Embed Code
              </span>
            </button>

            <button
              onClick={copyShareLink}
              className="group relative px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-xl transition-all duration-200 shadow-lg hover:shadow-violet-500/25"
            >
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Share Link
              </span>
            </button>
          </div>
        )}

        {/* Preview Section */}
        {inputUrl && (
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-slate-700">
            <iframe
              src={`https://player.terabox.tech/?url=${encodeURIComponent(
                inputUrl
              )}`}
              className="w-full aspect-video rounded-lg"
              frameBorder="0"
              allowFullScreen
              scrolling="no"
            />
            <a
              href={`https://player.terabox.tech/?url=${encodeURIComponent(
                inputUrl
              )}`}
              target="_blank"
              className="mt-4 block text-center px-6 py-3 bg-green-600 hover:bg-green-500 rounded-xl transition-all duration-200 shadow-lg hover:shadow-green-500/25"
            >
              Open Video
            </a>
          </div>
        )}
      </div>
      <TeraboxScriptSection />
    </div>
  );
};

export default Downloader;

export function DisqusComments() {
  return (
    <div>
      <div id="disqus_thread" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          var disqus_config = function () {
            this.page.url = window.location.href;
            this.page.identifier = window.location.pathname;
          };
          (function() {
            var d = document, s = d.createElement('script');
            s.src = 'https://terabox-1.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
          })();
        `,
        }}
      />
      <noscript>
        Please enable JavaScript to view the &lt;a
        href="https://disqus.com/?ref_noscript"&gt;comments powered by
        Disqus.&lt;/a&gt;
      </noscript>
      <script
        id="dsq-count-scr"
        src="//terabox-1.disqus.com/count.js"
        async
      ></script>
    </div>
  );
}

export const TeraboxScriptSection = () => {
  // Calculate discount percentage
  const originalPrice = 10444.36;
  const currentPrice = 999;
  const discountPercentage = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);

  // Set fixed end date - March 9, 2025
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calculateTimeLeft = () => {
      const endDate = new Date('2025-03-09T23:59:59').getTime();
      const now = new Date().getTime();
      const difference = endDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Prevent hydration error by not rendering timer until mounted
  if (!mounted) {
    return null;
  }

  return (
    <section className="py-16 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-slate-700">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
              Premium Terabox Script
            </h2>

            {/* Price and Timer Section */}
            <div className="bg-slate-900/50 p-4 rounded-xl">
              <div className="text-2xl font-bold text-white mb-2">
                <span className="line-through text-gray-400">₹{originalPrice.toFixed(2)}</span>
                <span className="ml-3 text-green-400">₹{currentPrice}</span>
                <span className="ml-2 text-amber-400">({discountPercentage}% OFF)</span>
              </div>
              <div className="text-amber-400 font-semibold">
                Limited Time Offer Ends On March 9, 2025:
                <div className="flex justify-center gap-4 mt-2">
                  <div className="bg-slate-800 px-3 py-2 rounded-lg">
                    <span className="text-xl">{timeLeft.days}</span>d
                  </div>
                  <div className="bg-slate-800 px-3 py-2 rounded-lg">
                    <span className="text-xl">{timeLeft.hours}</span>h
                  </div>
                  <div className="bg-slate-800 px-3 py-2 rounded-lg">
                    <span className="text-xl">{timeLeft.minutes}</span>m
                  </div>
                  <div className="bg-slate-800 px-3 py-2 rounded-lg">
                    <span className="text-xl">{timeLeft.seconds}</span>s
                  </div>
                </div>
              </div>
            </div>

            {/* Features and Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-6 text-left sr-only">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Features</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>✓ Direct video downloads</li>
                  <li>✓ Embed player support</li>
                  <li>✓ Auto video quality selection</li>
                  <li>✓ No watermarks</li>
                  <li>✓ Lifetime updates</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Benefits</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>✓ Easy integration</li>
                  <li>✓ 24/7 Technical support</li>
                  <li>✓ Documentation included</li>
                  <li>✓ API access</li>
                  <li>✓ Multiple domain license</li>
                </ul>
              </div>
            </div>

            {/* Action Button and Links */}
            <div className="space-y-4">
              <a
                href="https://payments.cashfree.com/forms/teradl"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 hover:bg-green-500 rounded-xl transition-all duration-200 shadow-lg hover:shadow-green-500/25 text-white text-lg font-semibold inline-block"
              >
                <RocketIcon className="w-5 h-5 inline-block mr-2" />
                Get Premium Script - ₹999 Only
              </a>
              
              <div className="text-sm space-y-2 ">
                <div>
                  <a
                    href="https://t.me/player1921"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Contact on Telegram
                  </a>
                </div>
                <div>
                  <a
                    href="https://marketplace.terabox.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300"
                  >
                    Explore Marketplace
                  </a>
                </div>
                <div className="text-slate-400">
                  Need help? Contact our support team at{" "}
                  <a
                    href="mailto:jokes4ush@gmail.com"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    mail@terabox.tech
                  </a>
                </div>
              </div>
            </div>

            {/* Remove the old buttons and links */}
          </div>
        </div>
      </div>
    </section>
  );
};
