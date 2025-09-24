import type UserData from "../../interfaces/iUser";
import json from "../../services/user.service";
import UserCard from "../UserCard/UserCard";

export default function UserList() {
    const users: UserData[] = json;

    return (
        <>
            <div className="container">
                {users.map(user => (
                    <UserCard
                        key={user.id}
                        id={user.id}
                        image={user.image}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        gender={user.gender}
                        age={user.age}
                        email={user.email}
                        phone={user.phone}
                        address={user.address}
                    />
                ))}
            </div>
        </>
    )
}
