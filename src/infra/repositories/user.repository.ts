import UserModelInterface from '@interfaces/models/userModel.interface'
import IUserRepository from '@interfaces/repositories/userRepository.interface'
import { Model } from 'sequelize'

export class UserRepository implements IUserRepository {
    users: []
    model: Model;
    constructor(model: Model) {
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
