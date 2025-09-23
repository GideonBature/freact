import type QuoteData from "../../interfaces/iQuote";

export default function QuoteCard(props: QuoteData) {
    return (
        <>
            <div className="card">
                <p>{props.id}</p>
                <h3>{props.quote}</h3>
                <p>{props.author}</p>
            </div>
        </>
    )
}
