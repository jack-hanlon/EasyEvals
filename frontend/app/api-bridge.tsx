"use client";
import { useRoot } from "@/hooks";
import React from "react";

export function ApiBridge() {
    const { data: rootText, isLoading: loadingRootText, isError: rootTextError } = useRoot();
    if (loadingRootText){
        return <>Loading...</>
    }
    if (rootTextError) {
        return <>Error loading rootText</>
    }

    return (
        <pre>{ JSON.stringify(rootText)}</pre>
    );
}

