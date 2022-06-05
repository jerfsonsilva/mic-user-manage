const userRepository = require('../repositories/user.repository');
const bcrypt = require('bcryptjs');
const { userErrorCode } = require('../enum/userErrors');

const pageSize = 5;

class UserService {
    async create({ name, email, password }) {
        await userRepository.init()
        const verifyEmail = await userRepository.findOneByEmail(email)
        if (verifyEmail !== null) throw userErrorCode.emailAlreadyExists

        return userRepository.create({
            name,
            email,
            password: await bcrypt.hash(password, 8)
        });
    }
    async update(id, { name, email, password }) {
        await userRepository.init()

        const verifyId = await userRepository.findOneById(id)
        if (verifyId === null) throw userErrorCode.userNotFound

        let data = {}
        if (name) data.name = name
        if (email) data.email = email
        if (password) data.password = await bcrypt.hash(password, 8)

        return userRepository.update(id, data);
    }
    async delete(id) {
        await userRepository.init()
        return userRepository.delete(id)
    }
    async findAll(filters, page) {
        await userRepository.init()
        const offset = (page - 1) * pageSize
        return userRepository.findAll(filters, pageSize, offset)
    }
}
module.exports = new UserService();