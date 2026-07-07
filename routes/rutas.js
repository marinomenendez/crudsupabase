import { Router } from "express";
import { getProducts, addProduct, nuevoFormulario } from "../controllers/product-controller.js";

const router = Router();
router.get("/", getProducts);
//router.get("/add", addProduct);
router.get("/nuevo", nuevoFormulario);
router.post("/addProduct", addProduct); //Segundo parametro es la funcion que enlaza con el controlador

export default router;