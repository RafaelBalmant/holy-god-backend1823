import IUserRepository from '@interfaces/repository/userRepository.interface';


export class UserRepository implements IUserRepository {
    users: [];
    constructor() {
        this.users = [];
    }
    createUser(user: any): any {
        return null;
    }
    getUserById(id: string): any {
        return null;
    }
}

