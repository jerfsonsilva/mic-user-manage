const userRepository = require("../repositories/user.repository");
const bcrypt = require('bcryptjs');

class UserService {
    async create({ name, email, password }) {
        return userRepository.create({
            name,
            email,
            password: await bcrypt.hash(password, 8)
        });
    }
    async update() {

    }
    async delete() {

    }
}
module.exports = new UserService()