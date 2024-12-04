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
import { useCompareNaive, useCompareSmart } from "@/hooks";
import React from "react";

interface IProps {
    selectedModels: string[];
}


  export const CompareTable: React.FC<IProps> = (props) => {

    const {
        selectedModels,
    } = props;

    const { data: compareNaive, isLoading: loadingCompareNaive } = useCompareNaive(selectedModels[0], selectedModels[1]);
    const { data: compareSmart, isLoading: loadingCompareSmart } = useCompareSmart(selectedModels[0], selectedModels[1]);

    console.log("Compare:",compareNaive, compareSmart);
    if (loadingCompareNaive || loadingCompareSmart) {
        return (<>Loading...</>);
    }

    return (
        <>
            <Table>
                <TableCaption>Compare Naive</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead>Sig@90</TableHead>
                    <TableHead>Sig@95</TableHead>
                    <TableHead>Sig@99</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell>{ compareNaive.is_significant_at_90_confidence ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                    }</TableCell>
                    <TableCell>{ compareNaive.is_significant_at_95_confidence ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                    }</TableCell>
                    <TableCell>
                    { compareNaive.is_significant_at_99_confidence ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                    }
                    </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Table>
                <TableCaption>Compare Smart</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead>Sig@90</TableHead>
                    <TableHead>Sig@95</TableHead>
                    <TableHead>Sig@99</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell>{ compareSmart.is_significant_at_90_confidence ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                    }</TableCell>
                    <TableCell>
                    { compareSmart.is_significant_at_95_confidence ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                    }
                    </TableCell>
                    <TableCell>
                    { compareSmart.is_significant_at_99_confidence ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                    }
                    </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>

    );
};
