import type UserData from "../../interfaces/iUser";
import "./UserCard.css";

export default function UserCard(props: UserData) {
    return (
        <>
            <div className="card">
                <p>{props.id}</p>
                <img src={props.image} alt={props.firstName} />
                <h3>{props.firstName} {props.lastName}</h3>
                <p>{props.gender} | {props.age}</p>
                <p>{props.address.address}, {props.address.city}, {props.address.state}, {props.address.country}.</p>
            </div>
        </>
    )
}
