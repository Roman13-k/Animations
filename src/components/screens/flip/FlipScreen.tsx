"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/ui/layout/container/Container";
import FlipDigit from "@/components/ui/blocks/flipDigit/FlipDigit";

interface DateInterface {
  hours: number;
  minutes: number;
  seconds: number;
}

export default function FlipScreen() {
  const [date, setDate] = useState<DateInterface>({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setDate((prev) => {
        const h = now.getHours();
        const m = now.getMinutes();
        const s = now.getSeconds();

        if (prev.hours === h && prev.minutes === m && prev.seconds === s) {
          return prev;
        }

        return { hours: h, minutes: m, seconds: s };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <Container>
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <FlipDigit digit={Math.floor(date.hours / 10)} />
            <FlipDigit digit={date.hours % 10} />
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <FlipDigit digit={Math.floor(date.minutes / 10)} />
            <FlipDigit digit={date.minutes % 10} />
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <FlipDigit digit={Math.floor(date.seconds / 10)} />
            <FlipDigit digit={date.seconds % 10} />
          </div>
        </div>
      </Container>
    </section>
  );
}
