import { Model, Sequelize } from 'sequelize'
import UserModelInterface from '@interfaces/models/userModel.interface'

export class UserModel extends UserModelInterface {
    connection: Sequelize
    constructor(connection: Sequelize) {
        super()
        this.connection = connection
    }
}
