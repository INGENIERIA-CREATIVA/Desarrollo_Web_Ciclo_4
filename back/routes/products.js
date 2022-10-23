const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductByid, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController") //Traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts) //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct); //Establecemos la ruta
router.route('/producto/:id').get(getProductById); //Ruta para consultar por id
router.route('/producto/:id').put(updateProduct);//Creacion de la ruta de Actualizacion 1
router.route('/producto/:id').delete(deleteProduct);//Creacion de la ruta de eliminacion por id  

module.exports=router;