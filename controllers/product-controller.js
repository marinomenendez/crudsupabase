import { supabase } from "../config.js";

export const getProducts = async (req,res) => {
//export async function getProducts(req, res) {
    console.log("Listado de productos");
    const data = await supabase.from('productos').select('*');
    console.log(data.data);
    //res.json(data);
    res.render("productos", {productos: data}); //lo renderizamos a una plantilla productos, ya que en json en el navegador queda feo
}


export const nuevoFormulario = async(req, res) => {
    res.render('nuevo', { title: 'Pagina de productos', message: 'Nuevo producto'});
}

export const addProduct = async (req,res) => {
    console.log("Añadir producto");
    const {nombre, unidades, precio} = req.body;
    if (!nombre) {
        res.send("El nombre es obligatorio");
    }

    const insertar = await supabase.from('productos').insert(
        {
        "nombre": req.body.nombre,
        "unidades": Number(req.body.unidades),
        "precio": Number(req.body.precio)
        }
    );
    //res.json(insertar);
    res.redirect("/");
}

export const actualizarFormulario = async(req, res) => {
    res.render('actualizar');
}

export const updateProduct = async (req,res) => {
    console.log("Actualizar producto");
    const {id, nombre, unidades, precio} = req.body;
    if (!nombre) {
        res.send("El nombre es obligatorio");
    }

    const actualizar = await supabase.from('productos').update(
        {
        "id": Number(req.body.id),
        "nombre": req.body.nombre,
        "unidades": Number(req.body.unidades),
        "precio": Number(req.body.precio)
        }
    );
    //res.json(actualizar);
    res.redirect("/");
}

export const eliminarFormulario = async(req, res) => {
    res.render('eliminar');
}

export const deleteProduct = async (req,res) => {
    console.log("Eliminar producto");
    const {id} = req.body;

    const borrar = await supabase.from('productos').delete(
        {
        "id": Number(req.body.id)
        }
    );
    //res.json(borrar);
    res.redirect("/");
}
