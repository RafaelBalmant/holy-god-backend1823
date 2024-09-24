import { Model } from 'sequelize'

interface UserModelInterface {
    id: number
    email: String
}

export default Model<UserModelInterface>
