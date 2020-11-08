const { mongoUtils, dataBase } = require("../lib/utils/mongo.js");
const COLLECTION_NAME = "usuario";
const bcrypt = require("bcrypt");
const auth = require("../lib/utils/auth.js");
const saltRounds = 10;

async function login(user) {
  return mongoUtils.conn().then(async (client) => {
    const requestedUser = await client
      .db(dataBase)
      .collection(COLLECTION_NAME)
      .findOne({ username: user.username })
      .finally(() => client.close());

    const isValid = await bcrypt.compare(user.password, requestedUser.password);
    if (isValid) {
      const token = auth.createToken(user);
      data = {
        username: requestedUser.username,
        role: requestedUser.role,
        token: token,
      };
      return data;
    } else {
      return "Contraseña incorrecta";
    }
  });
}

async function createUser(user) {
  if (user.password) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  return mongoUtils.conn().then(async (client) => {
    const newUser = await client
      .db(dataBase)
      .collection(COLLECTION_NAME)
      .insertOne(user)
      .finally(() => client.close());
    // TODO Delete sensitive information
    return newUser;
  });
}

module.exports = [createUser, login];
