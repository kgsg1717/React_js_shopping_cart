import {SUCCESS , FAILURE} from './types';



export const get_products_home =() => dispatch => {
   
    Promise.all([
        fetch('http://localhost:8000/productos', { 
        method: 'GET',
        headers: {
            "Content-type": "application/json"
            
        }
    })
      ]).then(async([aa]) => {
        const a = await aa.json();
        add_new_properties(a);
        dispatch({ type: SUCCESS, payload:object_api_product_key(a,"id") })
      })
      .then((responseText) => {
        
    
      }).catch((err) => {
        dispatch({ type: FAILURE, payload: err});
      });
}


  const object_api_product_key = (arr,key) => arr.reduce((acc,el) => {
      acc[el[key]] = el;
      return acc;
  },{}); 

  const add_new_properties = (array) => {

    for (let i = 0; i < array.length; i++) {
      array[i]["numbers"]=0;
      array[i]["inCart"]= false;
      array[i]["product_id_in_cart"]=0;
      array[i]["product_id_numbers"]=0;
      
    }
  
  }