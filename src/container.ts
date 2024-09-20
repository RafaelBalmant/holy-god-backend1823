import { UserService } from "@services/user/user.service";
import { UserRepository } from "@repositories/user/user.repository";
import * as winston from "winston";


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
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

    console.log('Initialized logger');

    return {
        services
    }
};

export default container;
