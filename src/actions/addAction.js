import {ADD_PRPDUCT_BASKET} from './types';

export const addBasket = (productName) =>{
   
    return (dispatch) => {
        
       
        Promise.all([
            fetch('http://localhost:8000/carrito_productos', { 
            method: 'POST',
            body:JSON.stringify({
                
                id: productName["id"],
                name_product:  productName["name_product"],
                inCart: true,
                sku:  productName["sku"],
                description:  productName["description"],
                price:  productName["price"],
                numbers: productName["numbers"] + 1,
                product_id_in_cart:  productName["product_id_in_cart"],
                product_id_numbers:productName["product_id_numbers"],
                
                
              }),
            headers: {
                "Content-type": "application/json"
                
            }
        })
          ]).then(async([aa]) => {
            const a = await aa.json();

            dispatch({
                type: ADD_PRPDUCT_BASKET,
                payload:a
            })
          
          })
          .then((responseText) => {
            
        
          }).catch((err) => {
            
          });



    }
}