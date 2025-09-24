import type QuoteData from "../../interfaces/iQuote";
import QuoteCard from "../QuoteCard/QuoteCard";
import json from "../../services/quote.service";
import { useSearch } from "../context/SearchContext";
import "./QuoteList.css"

export default function QuoteList() {
    const { searchQuery } = useSearch();
    const quotes: QuoteData[] = json;

    const filteredQuotes = quotes.filter(quote =>
        quote.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quote.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="container">
                {filteredQuotes.map(quote => (
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
