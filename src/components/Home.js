import React, {useEffect, Fragment} from 'react';
import plancha_04 from '../imagenes/image4960.png';
import {connect} from 'react-redux';
import {addBasket} from '../actions/addAction';
import {get_products_home} from '../actions/homeActionApi';
import LoadingContent from './LoadingComponent/LoadingContent';
import FileUploadComponent from './dataQust/FileUploadComponent.js';
import EditFileComponent from './dataQust/EditFileComponent.js';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = ({basketProps,get_products_home, addBasket}, props) => {


    const [modalShow, setModalShow] = React.useState(false);
    const [editModalShow, setEditModalShow] = React.useState(false);
    const [productEdit, setProductEdit] = React.useState({
        created_at: "",
        description: "",
        id: "",
        inCart: "",
        name_product: "",
        numbers: "",
        price: "",
        sku: "",
        updated_at:"",
    });
    let produts_home =[];
    
    useEffect(() =>{
        get_products_home()
    }, []);

/*  useCallback(get_products_home(), []) */
  
    let isEmpty = (obj) => {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }


  
  
    


    if (isEmpty(basketProps.products)) {
        return(
            <React.StrictMode>
            <Button
            variant="primary"
            onClick={() => setModalShow(true)} 
            
            >
            Agregar producto
            </Button>

            <FileUploadComponent
            show={modalShow}
            onHide={() => setModalShow(false)}
            
            />

            <LoadingContent/>
            </React.StrictMode>
        )
    } else {
      
        Object.keys(basketProps.products).forEach( function(item){

           
                produts_home.push(basketProps.products[item])
            
    
        })
        

   
       

   produts_home = produts_home.map( (product, index) => {
        
    return(
        

        <Fragment key={product.id}>
            <div className="img_product">
            <Link onClick={() => {setProductEdit(product); setEditModalShow(true)}} className="edit_product " to="#"> Editar</Link>
                <img src={plancha_04} alt={product.name_product} />
                <h3> {product.name_product}</h3>
                <h3> ${Number(product.price)}</h3>

                <Link onClick={() => addBasket(product)} className="add_to_cart cart_01" to="#"> Agregar al carrito</Link>
            </div>
        </Fragment>

    )

});


        return(
            <div >  
                <div >
                    <Fragment>
                        <Button
                        variant="primary"
                        onClick={() => setModalShow(true)} 

                        >
                        Agregar producto
                        </Button>

                        <FileUploadComponent
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        />
                    </Fragment>
                    <Fragment>
                        <EditFileComponent
                        show={editModalShow}
                        onHide={() => setEditModalShow(false)}
                        producto={productEdit}
                        />
                    </Fragment>
                </div>
                <div className="container_product">

                   
                    
                    {produts_home}
                   

                </div>
            
            </div>

        );
    }
}
const mapStateToProps = state => ({
    
    basketProps: state.basketState
})

export default connect(mapStateToProps , {addBasket, get_products_home})(Home);