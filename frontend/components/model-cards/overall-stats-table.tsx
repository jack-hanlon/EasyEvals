"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import React from "react";

type OverallScore = {
    accuracy: number;
    model: string;
    stderr: number;
    upper_bound: number;
    lower_bound: number;
}

  interface IProps {
    overallEvals: OverallScore[] | undefined,
  }

  export const OverallStatsTable: React.FC<IProps> = (props) => {

    const {
        overallEvals,
    } = props;

    return (

    <Table>
        <TableCaption>Overall Scores</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead>Model</TableHead>
            <TableHead>Accuracy</TableHead>
            <TableHead>Std Dev</TableHead>
            <TableHead>Lower Bound</TableHead>
            <TableHead>Upper Bound</TableHead>

            </TableRow>
        </TableHeader>
        <TableBody>
            { overallEvals?.map((evals: OverallScore) => (
                <TableRow key={ evals.model }>
                    <TableCell className="font-medium">{ evals.model }</TableCell>
                    <TableCell>{ evals.accuracy }</TableCell>
                    <TableCell>{ evals.stderr }</TableCell>
                    <TableCell>{ evals.lower_bound }</TableCell>
                    <TableCell>{ evals.upper_bound }</TableCell>

                </TableRow>
            ))}
        </TableBody>
    </Table>
    );
};
