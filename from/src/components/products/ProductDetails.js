import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'

export const ProductDetails = () => {
  return (
    <Fragment>
        <MetaData title="Camiseta Manga Corta"></MetaData>
        <div className='row d-flex justify-content-around'>
            <div className='col-12 col-log-5 img-fluid' id="imagen_producto">
                <img src="../../images/productos/product1.jpg" alt="Imagen_producto" height="450" width="450"></img>
            </div>
            <div className='col-12 col-lg-5 mt-5'>
                <h3>Camiseta Manga Corta</h3>
                <p id="product_id">Product #1234567</p>
            </div>
        </div>
    </Fragment>
  )
}
