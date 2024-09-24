import { UserService } from '@services/user.service'
import { UserRepository } from '@repositories/user.repository'
import { UserModel } from '@models/user.model'
import { Sequelize } from 'sequelize'
import winston from 'winston'

const sequelize = new Sequelize('postgres://root:root@localhost:5432/holygod')

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'MAIN CONTAINER' },
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
})

const container = async () => {
    try {
        await sequelize.authenticate()
        console.log('testeeee')
        logger.info(
            `[CONTAINER ${
                new Date().toTimeString
            } - Sequelize Connected to Database`
        )

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
    } catch (e) {
        logger.error(e)
    }
}

export default container
