const url = "https://dummyjson.com/users";

const res = await fetch(url);
const json = await res.json();

export default json.users;
