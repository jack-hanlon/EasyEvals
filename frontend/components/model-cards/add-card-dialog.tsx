"use client";

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { ModelCard } from "./model-card";
import { InputFile } from "./input-file";
import { Button } from "../ui/button";


export const AddCardDialog: React.FC = () => {

    return (
        <Dialog>
            <DialogTrigger>
                <ModelCard
                        title={"Add dataset"}
                        description={"Add your own dataset to benchmark its performance"}
                        content={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        }
                    /></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Add your dataset</DialogTitle>
                <DialogDescription className="flex flex-col gap-4">
                    <span>
                        Your dataset must follow this schema. Accepted file types are CSV and JSON.
                        <InputFile />
                    </span>
                    <Button type="submit">Submit</Button>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
            </Dialog>
    );
};
