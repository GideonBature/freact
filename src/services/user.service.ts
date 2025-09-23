import type UserData from "../interfaces/iUser";
const url = "https://dummyjson.com/users";

export default async function fetchUsers(): Promise<UserData[]> {
    const res = await fetch(url);
    const json = await res.json();

    return json.users;
}
