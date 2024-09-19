export default interface UserInterface {
    createUser(user: UserInterface): any;
    getUserById(id: string): any;
}