export default interface UserRepository {
    createUser(user: any): any;
    getUserById(id: string): any;
}