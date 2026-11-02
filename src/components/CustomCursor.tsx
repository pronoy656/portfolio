"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.cursor = "auto";
    }
  }, []);

  return null;
}
