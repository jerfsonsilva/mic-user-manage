const userRepository = require("../repositories/user.repository");

class UserService {
    async create({ name, email, password }) {
        return userRepository.create({
            name,
            email,
            password
        });
    }
    async update() {

    }
    async delete() {

    }
}
module.exports = new UserService()