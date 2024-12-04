
export const defaultQueryFn = async (url: string, method: string) => {
    const response = await fetch(`http://127.0.0.1:8000/${ url }`, { method });
    const body = await response.json();

    if (!response.ok) {
        throw new Error(`${ response.status } - ${ response.body }`);
    } else if (body.message && body.timestamp) {
        throw new Error(`403 - ${ body.message }`);
    }

    return body;
};

// FETCHES THE OVERALL EVALS
export const getOverallEval = async (model1:string, model2: string) => {
    try {
        const overallEval = await defaultQueryFn(`overall-eval?model1=${model1}&model2=${model2}`, "GET");
        return overallEval;

    } catch (error: unknown ) {
        console.error("Error fetching overall eval", error);
    }
}

// POST REQUEST TO UPLOAD DATASET
// TODO: add this
// export const uploadDataset = () => {

// }
