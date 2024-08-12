"use client";

import { CircleUser } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu as ShadcnDropDownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function DropdownMenu() {
  const router = useRouter();

  return (
    <ShadcnDropDownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">사용자 메뉴 전환</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>내 계정</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>설정</DropdownMenuItem>
        <DropdownMenuItem>도움말</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.replace("/login")}>
          로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </ShadcnDropDownMenu>
  );
}
