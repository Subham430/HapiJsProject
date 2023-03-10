const {success, error} = require("../response/macros");

exports.admin_permission = async (request) => {
    try {
        if (request.user.role === "admin") {
            throw new Error('Permission denied');
        }
        return
    } catch (err) {
        throw new Error(err.message);
    }
}
