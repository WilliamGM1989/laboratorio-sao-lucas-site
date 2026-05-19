"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface CardItem {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  icon: React.ReactNode;
  extra?: React.ReactNode;
}

interface ExpandingCardsProps {
  items: CardItem[];
  defaultActiveIndex?: number;
}

export function ExpandingCards({
  items,
  defaultActiveIndex = 0,
}: ExpandingCardsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  return (
    <>
      {/* Mobile layout — stacked cards with all info always visible */}
      <div className="flex w-full flex-col gap-4 md:hidden">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl"
          >
            {/* Background image */}
            <div className="relative h-[180px] w-full">
              <Image
                src={item.imgSrc}
                alt={item.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Title over image */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-2 text-white/90">
                  {item.icon}
                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Content below image — always visible */}
            <div className="bg-[#0B1B35] px-4 py-4">
              <p className="text-sm leading-relaxed text-white/80">
                {item.description}
              </p>
              {item.extra && <div className="mt-3">{item.extra}</div>}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop layout — expanding cards */}
      <div className="hidden w-full gap-2 md:flex md:h-[450px] md:flex-row">
        {items.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-in-out",
                isActive ? "flex-[4]" : "flex-[1]",
                "h-full"
              )}
            >
              {/* Background image */}
              <Image
                src={item.imgSrc}
                alt={item.title}
                fill
                sizes="50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div
                className={cn(
                  "absolute inset-0 transition-all duration-500",
                  isActive
                    ? "bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                    : "bg-black/50"
                )}
              />

              {/* Collapsed state — vertical label */}
              <div
                className={cn(
                  "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                  isActive ? "pointer-events-none opacity-0" : "opacity-100"
                )}
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-white/80">{item.icon}</span>
                  <h3 className="text-sm font-semibold tracking-wide text-white [writing-mode:vertical-lr] [text-orientation:mixed]">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Expanded state — full content */}
              <div
                className={cn(
                  "absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-500",
                  isActive ? "opacity-100" : "pointer-events-none opacity-0"
                )}
              >
                <div className="flex items-center gap-2 text-white/80">
                  {item.icon}
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
                  {item.description}
                </p>
                {item.extra && <div className="mt-3">{item.extra}</div>}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
