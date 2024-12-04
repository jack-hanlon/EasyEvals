"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import React from "react";

  interface IProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    question: any;
  }

  export const QuestionTable: React.FC<IProps> = (props) => {

    const {
        question,
    } = props;

    return (

    <Table>
        <TableHeader>
            <TableRow>
            <TableHead>Model 1</TableHead>
            <TableHead>Model 2</TableHead>
            <TableHead>Sample ID</TableHead>
            <TableHead>Model 1 Score</TableHead>
            <TableHead>Model 2 Score</TableHead>
            <TableHead>Target</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
            <TableCell>{ question.output_model1 }</TableCell>
            <TableCell>{ question.output_model2 }</TableCell>
            <TableCell>{ question.sample_id }</TableCell>
            <TableCell>{ question.score_model1 }</TableCell>
            <TableCell>{ question.score_model2 }</TableCell>
            <TableCell>{ question.target }</TableCell>
            </TableRow>
        </TableBody>
    </Table>
    );
};
