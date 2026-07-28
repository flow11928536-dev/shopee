"use client";

import { useState, useEffect } from "react";

interface ClientWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function ClientWrapper({ children, className = "" }: ClientWrapperProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={className}>
      {children}
    </div>
  );
}