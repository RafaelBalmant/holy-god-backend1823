import IUserServiceInterface from '@interfaces/services/user.interface';
import IUserRepository from '@interfaces/repository/user.repository';


class UserService implements IUserServiceInterface {
    userRepo: IUserRepository;
    constructor(private userRepository: IUserRepository) {
        this.userRepo = userRepository;
    }

    async createUser(user: UserService): Promise<UserService> {
        return this.userRepository.createUser(user);
    }

    async getUserById(id: string): Promise<UserService> {
        return this.userRepository.getUserById(id);
    }
}