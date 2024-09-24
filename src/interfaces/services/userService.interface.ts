export default interface UserServiceInterface {
    createUser(user: UserServiceInterface): any
    getUserById(id: string): any
}
