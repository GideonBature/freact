const url = "https://dummyjson.com/todos";

const res = await fetch(url);
const json = await res.json();

export default json.todos;
