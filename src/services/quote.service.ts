const url = "https://dummyjson.com/quotes";

const res = await fetch(url);
const json = await res.json();

export default json.quotes;
