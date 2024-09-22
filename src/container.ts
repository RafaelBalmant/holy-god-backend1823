import { UserService } from "@services/user/user.service";
import { UserRepository } from "@repositories/user/user.repository";
import * as winston from "winston";


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'MAIN CONTAINER' },
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

const repositories = {
    userRepository: new UserRepository()
}

const services = {
    userService: new UserService(repositories.userRepository)
}

const container = () => {
    logger.info('Container initialized');
    return {
        services
    }
};

export default container;
