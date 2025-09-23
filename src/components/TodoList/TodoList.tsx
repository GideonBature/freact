import { useState } from "react";
import type TodoData from "../../interfaces/iTodo";
import fetchTodos from "../../services/getTodo";
import Card from "../TodoCard/TodoCard";
import "./TodoList.css";

export default function Todo() {
    const [todos, setTodos] = useState<TodoData[]>([]);

    async function fetchData() {
        const datas = await fetchTodos();
        setTodos(datas);
    }

    fetchData();

    return (
        <div className="container">
            {
                todos.map(todo => (
                    <Card
                        key={todo.id}
                        id={todo.id}
                        todo={todo.todo}
                        completed={todo.completed}
                        userId={todo.userId}
                    />
                ))
            }
        </div>
    )
}
