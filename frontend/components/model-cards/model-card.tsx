"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import React, { ReactNode } from "react";

interface IProps {
    title: string,
    description?: string,
    content?: ReactNode,
    footer?: string,
    toggle?: () => void;
    isModelSelectCardOpen?: boolean;
}

export const ModelCard: React.FC<IProps> = (props) => {
    const {
        title,
        description,
        content,
        footer,
        toggle,
    } = props;


    const handleToggle = () => {
        if (toggle !== undefined) {
            toggle()
        }
    };

    return (
        <>
            <div className="flex flex-col gap-10">
                <Card
                    className="w-[460px] h-[180px] transition-transform transform hover:scale-105 hover:shadow-sm"
                    onClick={ handleToggle }
                >
                    <CardHeader>
                        <CardTitle>{ title }</CardTitle>
                        <CardDescription>{ description }</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center items-center">
                        <p>{ content }</p>
                    </CardContent>
                    <CardFooter>
                        <p>{ footer }</p>
                    </CardFooter>
                </Card>
            </div>
        </>
  );
}
