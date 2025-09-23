import type TodoData from "../../interfaces/iTodo";
import "./TodoCard.css";

export default function Card(props: TodoData) {
    return (
        <>
            <div className="card">
                <p>{props.id}</p>
                <h3>{props.todo}</h3>
                <span>{props.completed ? "✅ Completed" : "❌ Not Completed"}</span>
                <p>user #{props.userId}</p>
            </div>
        </>
    )
}
