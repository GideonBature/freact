import type QuoteData from "../interfaces/iQuote";
const url = "https://dummyjson.com/quotes";

export default async function fetchQuote(): Promise<QuoteData[]> {
    const res = await fetch(url);
    const json = await res.json();

    return json.quotes;
}
