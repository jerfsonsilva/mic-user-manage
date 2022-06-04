const AWS = require('aws-sdk');
class SecretsManagerService {
    async getSecret(secretName) {
        const config = {
            region: process.env.REGION
        }
        let secretsManager = new AWS.SecretsManager(config);
        try {
            let secretValue = await (secretsManager.getSecretValue({ SecretId: secretName })).promise();
            if ('SecretString' in secretValue) {
                return secretValue.SecretString;
            } else {
                let buff = new Buffer(secretValue.SecretBinary, 'base64');
                return buff.toString('ascii');
            }
        } catch (err) {
            throw err;
        }
    }
}
module.exports = new SecretsManagerService();