//import { supabase } from "./config.js";
import express from "express";
import router from "./routes/rutas.js";

console.log("Arrancando proyecto crud supabase");
//console.log(supabase);

const app = express();
app.set('view engine','pug');
app.set('views','./views');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use("/", router);

app.listen(3000, () => {
    console.log(`Aplicación funcionando en el puerto 3000`)
}
);