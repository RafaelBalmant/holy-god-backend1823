"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("@services/user/user.service");
var user_repository_1 = require("@repositories/user/user.repository");
var winston = require("winston");
var logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});
logger.info('Initialized logger');
var repositories = {
    userRepository: new user_repository_1.default()
};
var services = {
    userService: new user_service_1.default(repositories.userRepository)
};
var container = function () {
    return {
        services: services
    };
};
exports.default = container;
