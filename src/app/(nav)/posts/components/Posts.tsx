"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ellipsis, X } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Posts() {
  return (
    <Card className="max-w-4xl w-full mx-auto border-none">
      <CardHeader className="flex flex-row justify-between p-2">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-sm font-semibold mb-0.5">무신사</h3>
            <p className="text-xs">2021년 10월 10일</p>
          </div>
        </div>
        <div className="flex mr-2 gap-1">
          <Ellipsis />
          <X />
        </div>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
