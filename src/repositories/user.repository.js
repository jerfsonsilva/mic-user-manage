const { userModel } = require("../models/user.model")

class UserRepository {
    async init() {
        if (!this.userModelInstance) {
            this.userModelInstance = await userModel()
        }
    }
    async create({ name, email, password }) {
        await this.init()
        return this.userModelInstance.create({ name, email, password })
    }
    async update(data) {
        await this.init()
        return this.userModelInstance.update(data)
    }
    async delete() {

    }
}
module.exports = new UserRepository()