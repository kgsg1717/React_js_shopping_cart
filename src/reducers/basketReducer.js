import {ADD_PRPDUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY ,CLEAR_PRODUCT , SUCCESS } from '../actions/types';
  



const initialState = {
    basketID:0,
    basketNumbers:0,
    cartCost:0,
    products: {}
}
 

export default (state=initialState  , action) => {
    let productSelected="";
    let producramdom="";
    let producramdomTOTAL="";
    let IDbasketAddRamdom="";



    switch(action.type) {
        case ADD_PRPDUCT_BASKET:
            
           let trueFalse={...state};
           productSelected={...state.products[action.payload["id"]]}; 
           productSelected.inCart=true;
           productSelected.numbers +=1;
           productSelected.product_id_in_cart=action.payload["product_id_in_cart"];
           productSelected.product_id_numbers=action.payload["product_id_numbers"];
          
            if (trueFalse.basketID<=0) {
                
                producramdom={...state.products};

                IDbasketAddRamdom=action.payload["product_id_in_cart"];
                producramdomTOTAL = insertCartId(producramdom,action.payload["product_id_in_cart"]);
            }else{
               
                IDbasketAddRamdom=trueFalse.basketID;
                producramdomTOTAL=trueFalse.products;
            }




            return{
                ...state,
                basketID:IDbasketAddRamdom,
                basketNumbers: state.basketNumbers + 1,
                cartCost:state.cartCost + Number(state.products[action.payload["id"]].price),
                products: {
                    ...state.products=producramdomTOTAL,
                    [action.payload["id"]]:productSelected
                }
            }
        
        case SUCCESS:
            
            let productInCart={};
            productSelected={...state};
            

            if (isEmpty( productSelected.products)) {
                productInCart=action.payload;
            } else {
                productInCart=productSelected.products;
            }
            
            
            
            return{
                ...state,
    
               
                products:productInCart
            }
            
        
        case GET_NUMBERS_BASKET:
            
          
            return{
                ...state
            }
        case INCREASE_QUANTITY:

            productSelected={...state.products[action.payload]}
           
            productSelected.numbers +=1;
          

            return{
                ...state,
                basketNumbers:state.basketNumbers + 1,
                cartCost:state.cartCost + Number(state.products[action.payload].price),

                products:{
                    ...state.products,
                    [action.payload]:productSelected 
                }

            }
        case DECREASE_QUANTITY:
            productSelected={...state.products[action.payload]}
            let cartCostNegative=0;
            let basketNumbersNegative=0;

            if (productSelected.numbers === 0) {
                productSelected.numbers =0;
                cartCostNegative = state.cartCost;
                basketNumbersNegative=state.basketNumbers;
         
            } else {
                productSelected.numbers -=1;
                cartCostNegative=state.cartCost - Number(state.products[action.payload].price);
                basketNumbersNegative= state.basketNumbers -1;
            }
           
            
         

            return{
                ...state,
                basketNumbers:basketNumbersNegative,
                cartCost:cartCostNegative,

                products:{
                    ...state.products,
                    [action.payload]:productSelected 
                }

            }
        case CLEAR_PRODUCT:

            productSelected={...state.products[action.payload]};
            let numbersBackup = productSelected.numbers;
            productSelected.numbers =0;
            productSelected.inCart = false;


            return{
                ...state,
                basketNumbers:state.basketNumbers -numbersBackup,
                cartCost:state.cartCost - (Number(numbersBackup) * Number(productSelected.price)),
                products:{
                    ...state.products,
                    [action.payload]:productSelected 
                }
            }


        default:
            return state;

    }

}

let isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

let insertCartId = (array,data) => {


    for (const i in array) {
        
        array[i]["product_id_in_cart"]=data;

        
    }
    
    
return array;

}