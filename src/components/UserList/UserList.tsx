import type UserData from "../../interfaces/iUser";
import json from "../../services/user.service";
import UserCard from "../UserCard/UserCard";
import { useSearch } from "../context/SearchContext";

export default function UserList() {
    const { searchQuery } = useSearch();
    const users: UserData[] = json;

    const filteredUsers = users.filter(user =>
        user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phone.includes(searchQuery) ||
        user.address.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.address.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.address.country.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="container">
                {filteredUsers.map(user => (
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
