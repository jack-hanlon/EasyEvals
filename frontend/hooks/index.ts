"use client";

import { defaultQueryFn } from "@/app/api";
import { useQuery } from "@tanstack/react-query";

export const useReadBenchMark = (test_id: string) => {
    return useQuery({
        queryKey: [ 'read-benchmark', test_id ],
        queryFn: async () => defaultQueryFn(`/benchmark/${test_id}`, "GET"),
    });
};

export const useRoot = () => {
    return useQuery({
        queryKey: [ 'root' ],
        queryFn: async () => defaultQueryFn("", "GET"),
    });
};

export const useDataSetEVal = (model1: string, model2: string) => {
    return useQuery({
        queryKey: [ 'dataset-eval' ],
        queryFn: async () => defaultQueryFn(`dataset-eval?model1=${model1}&model2=${model2}`, "GET"),
    });
};

export const useCompareNaive = (model1: string, model2: string) => {
    return useQuery({
        queryKey: [ 'compare-naive' ],
        queryFn: async () => defaultQueryFn(`compare-naive?model1=${model1}&model2=${model2}`, "GET"),
    });
};

export const useCompareSmart = (model1: string, model2: string) => {
    return useQuery({
        queryKey: [ 'compare-smart' ],
        queryFn: async () => defaultQueryFn(`compare-smart?model1=${model1}&model2=${model2}`, "GET"),
    });
};
