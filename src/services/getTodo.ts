import type Todo from "../interfaces/iTodo";
const url = "https://dummyjson.com/todos";

export default async function fetchTodos(): Promise<Todo[]> {
    const res = await fetch(url);
    const json = await res.json();

    return json.todos;
}
