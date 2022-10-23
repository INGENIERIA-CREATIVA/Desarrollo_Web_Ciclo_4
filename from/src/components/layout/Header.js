import React, { Fragment } from 'react'

const Header = () => {
  return (
    <Fragment>
        <nav className='navbar row'>
            <div className='col-12 col-md-3'>
                <div className='navbar-brand'>
                    <img src="./images/logo192.png" alt="Avass Coled store"></img>
                </div>
            </div>

            <div className='col-12 col-md-6 mt-2 mt-md-0'>
                <div className="imput-group">
                    <input
                        type="text"
                        id="search_field"
                        class="form-control"
                        placeholder="Que producto busca?"></input>
                        <div class='input-group-append'>
                            <button id='search-btn' class='btn'>
                                <i class='fa fa-search' aria-hidden="true">Buscar</i>
                            </button>
                        </div>
                </div>
            </div>
            <div className='col-12 col-md-3 mt-4 mt-md-0 tex-center'>
                <button className='btn' id="login-btn">Inicie Sesión</button>
                <span id="cart" className='ml-3'>Carrito</span>
                <span className='ml-1' id="cart-count">2</span>
            </div>
        </nav>

    </Fragment>
  )
}

export default Header