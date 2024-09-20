export default interface UserRepositoryInterface {
    createUser(user: any): any;
    getUserById(id: string): any;
}