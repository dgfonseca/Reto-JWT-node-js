const { mongoUtils, dataBase } = require("../lib/utils/mongo.js");
const COLLECTION_NAME = "productos";

async function getProducts() {
  const client = await mongoUtils.conn();
  const products = await client
    .db(dataBase)
    .collection(COLLECTION_NAME)
    .find({})
    .toArray()
    .finally(() => client.close());
  return products;
}

async function insertProduct(product) {
  return mongoUtils.conn().then((client) => {
    return client
      .db(dataBase)
      .collection(COLLECTION_NAME)
      .insertOne(product)
      .finally(() => client.close());
  });
}

async function putProducto(product, data) {
  console.log(product);
  return mongoUtils.conn().then((client) => {
    return client
      .db(dataBase)
      .collection(COLLECTION_NAME)
      .updateOne({ nit: 1234 }, { $set: { nombre: data.nombre } });
  });
}

async function getRole(user) {
  return mongoUtils.conn().then((client) => {
    return client
      .db(dataBase)
      .collection("usuario")
      .findOne({ username: user })
      .finally(() => client.close());
  });
}

module.exports = [getProducts, insertProduct, putProducto, getRole];
