var express = require("express");
var router = express.Router();
var [
  getProducts,
  insertProduct,
  putProducto,
  getRole,
] = require("../controllers/product");
const auth = require("../lib/utils/auth.js");

/* GET product listing. */
router.get("/", auth.checkToken, async function (req, res, next) {
  const products = await getProducts();
  console.warn("products->", products);
  res.send(products);
});
/**
 * POST product
 */
router.post("/", auth.checkToken, async function (req, res, next) {
  const { username } = req.decoded;
  user = await getRole(username);
  rol = user.role;
  if (rol === "Admin") {
    const newProduct = await insertProduct(req.body);
    console.warn("insert products->", newProduct);
    return res.send(newProduct);
  }
  return res.sendStatus(403);
});

router.put("/:id", auth.checkToken, async function (req, res, next) {
  const { username } = req.decoded;
  user = await getRole(username);
  rol = user.role;
  if (rol === "Empleado" || rol === "Admin") {
    const producto = await putProducto(req.params.id, req.body);
    console.warn("put product->", producto);
    return res.send(producto);
  }
  return res.send("No autorizado");
});

module.exports = router;
