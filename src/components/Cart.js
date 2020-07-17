import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import { productQuantity, clearProduct } from '../actions/productQuantity';

import plancha_04 from '../imagenes/image4960.png';
import { Button } from 'react-bootstrap';
import CheckOutForm from './dataQust/CheckOutForm';

function Cart({basketProps , productQuantity, clearProduct} ) {
   
  
    let productsInCart = [];
    let productsCheckOut=[];
    const [modalShow, setModalShow] = React.useState(false);
   
    Object.keys(basketProps.products).forEach( function(item){

        if (basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }

    
    })

    let isEmpty = (obj) => {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    productsCheckOut=productsInCart;

 

   

    productsInCart = productsInCart.map( (product, index) => {
        
        return(
            

            <Fragment key={product.id}>
                <div className="product">
                    <ion-icon onClick={() => clearProduct(product.id)} name="close-circle"></ion-icon>
                    <img src={plancha_04}  alt="imagen" />
                    <span className="sm-hide">{product.name_product}</span>
                </div>
                <div className="price sm-hide">{Number(product.price)}</div>
                <div className="quantity">
                    <ion-icon onClick={() => productQuantity('decrease', product.id)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
                    <span className="sm-hide">{product.numbers}</span>
                    <ion-icon onClick={() => productQuantity('increase', product.id)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
                </div>
                <div className="total">{ Number(product.numbers*product.price)}</div>
            </Fragment>

        )

    });
let modalConfirCheck = (array) =>{
    if (isEmpty(array)) {

        return(
            <Fragment>
                <Button
                variant="primary"
                disabled
                
                >
                Check out
            </Button>
    
            
            </Fragment> 
            )    
        
    } else {
       
        return(
        <Fragment>
            <Button
            variant="primary"
            onClick={() => setModalShow(true)} 
            
            >
            Check out
        </Button>

        <CheckOutForm
            show={modalShow}
            onHide={() => setModalShow(false)}
            producto={productsCheckOut}
            totalproducto={basketProps.cartCost}
            totalproductoID={basketProps.basketID}
        />
        </Fragment> 
        )    
    }
}

    return (
        <div>
            <div>
                {modalConfirCheck(productsCheckOut)}
           
            </div>
            <div className="container-products_carts">
                <div className="product-header">
                    <h5>PRODUCTO</h5>
                    <h5>PRECIO</h5>
                    <h5>CANTODAD</h5>
                    <h5>TOTAL</h5>
                </div>
                <div className="products">

                    {productsInCart}

                </div>
                <div className="basketTotalContainer">

                    <h4 className="basketTotalTitle" >TOTAL</h4> 
                    <h4 className="basketTotal">{basketProps.cartCost}</h4>   
                </div>


            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect( mapStateToProps, {productQuantity, clearProduct} ) (Cart);
