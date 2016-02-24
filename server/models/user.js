import db from './../db';
import crypto from 'crypto';

function hashPwd(salt, pwd) {
    let hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
}

function createSalt() {
    return crypto.randomBytes(128).toString('base64');
}

const UserSchema = new db.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userTel: { type: String, required: true },
    userName: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    salt: { type: String, required: true },
    roles: [String]
});

UserSchema.methods = {
    authenticate: function (passwordToMatch) {
        return hashPwd(this.salt, passwordToMatch) === this.hashedPassword;
    },
    hashPassword: function (pwd) {
        this.salt = createSalt();
        this.hashedPassword = hashPwd(this.salt, pwd);
    }
};

let User = db.model('User', UserSchema);

export default User;
