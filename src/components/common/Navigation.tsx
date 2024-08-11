"use client";

import React, { useState } from "react";
import { Home, MessageCircleMore, SquarePlus, UserRound } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

const menuItems = [
  {
    icon: Home,
    label: "홈",
    href: "/",
  },
  {
    icon: SquarePlus,
    label: "만들기",
    href: "/posts/new",
  },
  {
    icon: UserRound,
    label: "프로필",
    href: "/profile",
  },
  {
    icon: MessageCircleMore,
    label: "메시지",
    href: "/messages",
    badge: 6,
  },
];

type Props = {
  size: "sm" | "lg";
};

export default function Navigation({ size }: Props) {
  const [tab, setTab] = useState("홈");

  const linkClass =
    size === "lg"
      ? "text-base gap-3 rounded-lg transition-all hover:text-primary"
      : "mx-[-0.65rem] gap-4 rounded-xl text-muted-foreground hover:text-foreground";

  return (
    <>
      {menuItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={() => setTab(item.label)}
          className={`flex items-center px-3 py-2 ${linkClass} ${
            tab === item.label ? "bg-muted" : ""
          }`}
        >
          <item.icon className="h-5 w-5" />
          <span>{item.label}</span>
          {item.label === "메시지" && (
            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
              6
            </Badge>
          )}
        </Link>
      ))}
    </>
  );
}
