"use client";

import React, { useEffect, useReducer, useState } from "react";
import { ModelCard } from "./model-card";
import { ModelSelectCard } from "./model-select-card";
import { AddCardDialog } from "./add-card-dialog";
import { OverallStatsTable } from "./overall-stats-table";
import { Card } from "../ui/card";
import { QuestionsAccordions } from "./questions-accordions";
import { CompareTable } from "./compare-table";

type OverallScore = {
    accuracy: number;
    model: string;
    stderr: number;
    upper_bound: number;
    lower_bound: number;
}

export const ModelCards: React.FC = () => {

    const [ isBrowseCardOpen, toggleBrowseCardOpen ] = useReducer(prev => !prev, false);
    const [ overallEvals, setOverallEvals ] = useState<OverallScore[] | undefined>();
    // const [ isAddCardOpen, toggleAddCardOpen ] = useReducer(prev => !prev, false);
    const [ selectedModels, setSelectedModels ] = useState<string[]>();

    const handleOverallEvals =  (overallEvals: OverallScore[]) => {
        setOverallEvals(overallEvals);
    }

    useEffect(() => {
        if (overallEvals) {
            const models = overallEvals.map((evals: OverallScore) => evals.model);
            setSelectedModels(models);
        }
    }, [overallEvals]);

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-row items-center justify-center gap-4">
                <ModelCard
                        title={ "Browse Models" }
                        description={ "Browse a list of supported models to test their benchmarks" }
                        content={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        }
                        toggle={ toggleBrowseCardOpen }
                        isModelSelectCardOpen={ isBrowseCardOpen }
                    />
                    <AddCardDialog />
            </div>
            <div>
            { isBrowseCardOpen &&
                <div className="flex flex-row">
                    <ModelSelectCard
                        submit={ true }
                        align="start"
                        customClasses={ "rounded-tr-none rounded-br-none border-r-0" }
                        title={"Select Models"}
                        handleOverallEvals={ handleOverallEvals }
                        content={
                        [
                            {
                                id: "openai/gpt-4",
                                label: "GPT 4",
                            },
                            {
                                id: "anthropic/claude-3-5-sonnet-latest",
                                label: "Claude 3 Sonnet",
                            },
                            {
                                id: "google/gemini-1.5-flash-001",
                                label: "Gemini 1 5 Flash",
                            },
                            {
                                id: "grok/grok-vision-beta",
                                label: "Grok Beta",
                            },
                            {
                                id: "grok_vision_beta",
                                label: "Grok Vision Beta",
                            },
                        ]
                        }
                    />
                    <ModelSelectCard
                        submit= { false }
                        align="end"
                        customClasses={ "rounded-tl-none rounded-bl-none border-l-0 "}
                        title={"My Datasets"}
                        content={
                        [
                            {
                            id: "theory_of_mind",
                            label: "Theory of Mind",
                            },

                        ]
                        }
                    />
                </div>
            }
            </div>
            { overallEvals &&
                <>
                    <Card className="w-[950px] h-[100%]">
                        <OverallStatsTable overallEvals={ overallEvals } />
                    </Card>
                    <Card className="w-[950px] h-[100%] p-4">
                        { selectedModels !== undefined &&
                        <QuestionsAccordions selectedModels={ selectedModels } />
                        }
                    </Card>
                    <Card className="w-[100%] h-[100%] p-4">
                        { selectedModels !== undefined &&
                            <CompareTable selectedModels={ selectedModels } />
                        }
                    </Card>
                </>
            }
            </div>
        </>
  );
}
