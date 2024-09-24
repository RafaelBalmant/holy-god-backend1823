import { UserService } from '@services/user.service'
import { UserRepository } from '@repositories/user.repository'
import { UserModel } from '@models/user.model'
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('postgres://root:root@localhost:5432/holygod')

const container = async () => {
    try {
        await sequelize.authenticate()

        const models = {
            userModel: new UserModel(sequelize),
        }

        const repositories = {
            userRepository: new UserRepository(models.userModel),
        }

        const services = {
            userService: new UserService(repositories.userRepository),
        }

        return {
            services,
        }
    } catch (e) {}
}

export default container
