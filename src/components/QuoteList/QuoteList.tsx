import type QuoteData from "../../interfaces/iQuote";
import QuoteCard from "../QuoteCard/QuoteCard";
import json from "../../services/quote.service";
import "./QuoteList.css"

export default function QuoteList() {
    const quotes: QuoteData[] = json;

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
