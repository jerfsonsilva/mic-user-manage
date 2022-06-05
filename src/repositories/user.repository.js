const { userModel } = require("../models/user.model")

class UserRepository {
    async init() {
        if (!this.userModelInstance) {
            this.userModelInstance = await userModel()
        }
    }
    async findOneByEmail(email) {
        return this.userModelInstance.findOne({
            where: { email }
        })
    }
    async create({ name, email, password }) {
        return this.userModelInstance.create({ name, email, password })
    }
    async update(id, data) {
        return this.userModelInstance.update(data, {
            where: {
                id
            }
        })
    }
    async delete() {

    }
}
module.exports = new UserRepository()