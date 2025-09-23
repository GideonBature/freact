export default interface UserData {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    image: string,
    address: AddressData,
}

interface AddressData {
    address: string,
    city: string,
    state: string,
    country: string,
}
