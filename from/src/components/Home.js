import React, { Fragment } from 'react'

const Home = () => {
  return (
    <Fragment>
        <h1 id="encabezado_productos">Ultimos Productos</h1>

        <section id="productos" className='container mt-5'>
            <div className='row'>
                {/* Producto1 */}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3b rounded'>
                        <img className='card-img-top mx-auto' src='./images/product1.jpg' alt='product1'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Camiseta tela Fria 1</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>                                  
                                </div>
                                <span id="No_de_opiniones">5 reviews</span>
                            </div>
                            <p className='card-text'>$72.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                                Ver detalle
                            </a> 
                        </div>
                    </div>
                </div>
                {/* Producto2 */}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3b rounded'>
                        <img className='card-img-top mx-auto' src='./images/product2.jpg' alt='product2'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Camiseta tela Fria 2</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>                                  
                                </div>
                                <span id="No_de_opiniones">5 reviews</span>
                            </div>
                            <p className='card-text'>$72.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                                Ver detalle
                            </a> 
                        </div>
                    </div>
                </div>
                {/* Producto3 */}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3b rounded'>
                        <img className='card-img-top mx-auto' src='./images/product3.jpg' alt='product3'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Camiseta tela Fria 3</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>                                  
                                </div>
                                <span id="No_de_opiniones">5 reviews</span>
                            </div>
                            <p className='card-text'>$72.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                                Ver detalle
                            </a> 
                        </div>
                    </div>
                </div>
                {/* Producto4 */}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3b rounded'>
                        <img className='card-img-top mx-auto' src='./images/product4.jpg' alt='product4'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Camiseta tela Fria 4</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>                                  
                                </div>
                                <span id="No_de_opiniones">5 reviews</span>
                            </div>
                            <p className='card-text'>$72.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                                Ver detalle
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Home