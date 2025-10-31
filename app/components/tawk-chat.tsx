"use client";
import { useEffect } from "react";

export default function TawkToChat() {
  useEffect(() => {
    // Avoid duplicate injection
    if (document.getElementById("tawk-script")) return;

    // Create the Tawk.to script
    const s1 = document.createElement("script");
    s1.id = "tawk-script";
    s1.async = true;
    s1.src = "https://embed.tawk.to/68e90642afbbb71951325c9d/1j7740tsd"; // ✅ Your Tawk.to script
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    const s0 = document.getElementsByTagName("script")[0];
    s0.parentNode?.insertBefore(s1, s0);

    // Optional cleanup (keeps script persistent)
    return () => {};
  }, []);

  return null; // No UI needed
}
