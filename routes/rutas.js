import { Router } from "express";
import { getProducts, addProduct, nuevoFormulario, actualizarFormulario, eliminarFormulario, updateProduct, deleteProduct } from "../controllers/product-controller.js";

const router = Router();
router.get("/", getProducts);
//router.get("/add", addProduct);

//Rutas para añadir producto
router.get("/nuevo", nuevoFormulario);
router.post("/addProduct", addProduct); //Segundo parametro es la funcion que enlaza con el controlador

//Rutas para actualizar producto
router.get("/actualizar", actualizarFormulario);
router.post("/updateProduct", updateProduct);

//Rutas para eliminar producto
router.get("/eliminar", eliminarFormulario);
router.post("/deleteProduct", deleteProduct);

export default router;