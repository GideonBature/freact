import type TodoData from "../../interfaces/iTodo";
import Card from "../TodoCard/TodoCard";
import json from "../../services/todo.service";
import { useSearch } from "../context/SearchContext";
import "./TodoList.css";

export default function Todo() {
    const { searchQuery } = useSearch();
    const todos: TodoData[] = json;

    const filteredTodos = todos.filter(todo =>
        todo.todo.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container">
            {
                filteredTodos.map(todo => (
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
