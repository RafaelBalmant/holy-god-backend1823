import IUserRepository from '@interfaces/repositories/userRepository.interface'
import { UserModel } from '@models/user.model'

export class UserRepository implements IUserRepository {
    users: []
    model: UserModel
    constructor(model: UserModel) {
        this.model = model
        this.users = []
    }
    createUser(user: any): any {
        return null
    }
    getUserById(id: string): any {
        return null
    }
}
