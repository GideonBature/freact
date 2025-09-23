import { useState } from "react";
import fetchUsers from "../../services/getUser"
import type UserData from "../../interfaces/iUser";
import UserCard from "../UserCard/UserCard";

export default function UserList() {
    const [users, setUser] = useState<UserData[]>([]);
    async function fetchData() {
        const data = await fetchUsers();
        setUser(data);
    }

    fetchData();

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
