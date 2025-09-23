import { useState } from "react";
import type QuoteData from "../../interfaces/iQuote";
import fetchQuote from "../../services/quote.service";
import QuoteCard from "../QuoteCard/QuoteCard";
import "./QuoteList.css"

export default function QuoteList() {
    const [quotes, setQuote] = useState<QuoteData[]>([]);

    async function fetchData() {
        const data = await fetchQuote();
        setQuote(data)
    }

    fetchData();

    return (
        <>
            <div className="container">
                {quotes.map(quote => (
                    <QuoteCard
                        key={quote.id}
                        id={quote.id}
                        quote={quote.quote}
                        author={quote.author}
                    />
                ))}
            </div>
        </>
    )
}
