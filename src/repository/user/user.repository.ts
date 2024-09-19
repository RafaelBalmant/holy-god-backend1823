import IUserRepository from '../../interfaces/repository/user.repository';


class UserRepository implements IUserRepository {
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

export default UserRepository;