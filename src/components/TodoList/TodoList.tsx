import type TodoData from "../../interfaces/iTodo";
import Card from "../TodoCard/TodoCard";
import json from "../../services/todo.service";
import "./TodoList.css";

export default function Todo() {
    const todos: TodoData[] = json;

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
