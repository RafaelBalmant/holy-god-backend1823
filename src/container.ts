import UserService from "@services/user/user.service";
import UserRepository from "@repositories/user/user.repository";


const repositories = {
    userRepository: new UserRepository()
}

const services = {
    userService: new UserService(repositories.userRepository)

}

const container = () => {
    return {
        services
    }
};

export default container;
