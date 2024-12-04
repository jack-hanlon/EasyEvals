"use client";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React from "react";

export function InputFile() {
  return (
    <span className="grid w-[100%] max-w-sm items-center gap-4">
      <Label htmlFor="file"></Label>
      <Input id="file" type="file" />
    </span>
  )
}
