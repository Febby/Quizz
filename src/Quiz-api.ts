export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuizQuestions = async (amount:number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    // double await because we initially wait for the fetch firstly and then proceed to convert it to json
    const data = await (await fetch(endpoint)).json();
    console.log(data);
    
}