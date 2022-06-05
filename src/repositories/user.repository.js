const { userErrorCode } = require('../enum/userErrors');
const { userModel } = require('../models/user.model');

class UserRepository {
    async init() {
        if (!this.userModelInstance) {
            this.userModelInstance = await userModel();
        }
    }
    async findOneByEmail(email) {
        return this.userModelInstance.findOne({
            where: { email },
        });
    }
    async findOneById(id) {
        return this.userModelInstance.findByPk(id);
    }
    async create({ name, email, password }) {
        return this.userModelInstance.create({ name, email, password });
    }
    async update(id, data) {
        return this.userModelInstance.update(data, {
            where: {
                id,
            },
        });
    }
    async delete(id) {
        const verifyId = await this.findOneById(id)
        console.log(verifyId)
        if (verifyId === null) throw userErrorCode.userNotFound

        return verifyId.destroy()
    }
}
module.exports = new UserRepository();