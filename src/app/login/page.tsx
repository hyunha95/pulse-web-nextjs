"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import PulseAnimation from "./components/PulseAnimation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="w-full lg:grid min-h-screen lg:grid-cols-2 background">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-xl font-bold mb-5">로그인 또는 회원가입</h1>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                placeholder="pulse@example.com"
                className="focus-visible:ring-0 focus-visible:ring-offset-0"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">비밀번호</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  비밀번호를 잊으셨나요?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                className="focus-visible:ring-0 focus-visible:ring-offset-0"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              onClick={() => router.replace("/")}
            >
              로그인
            </Button>
            <Button className="w-full">Google 계정으로 계속하기</Button>
          </div>
          <div className="mt-4 text-center text-sm">
            <Link href="#" className="underline">
              계정 만들기
            </Link>
          </div>
        </div>
      </div>
      <PulseAnimation />
    </div>
  );
}
