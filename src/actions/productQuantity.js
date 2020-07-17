import {INCREASE_QUANTITY, DECREASE_QUANTITY , CLEAR_PRODUCT} from './types';

export const productQuantity = (action, name) => {

    return (dispath) => {
        

        dispath({

            type:action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload:name
        })
    }

}

export const clearProduct = (name) => {

    return (dispath) => {
    

        dispath({

            type: CLEAR_PRODUCT,
            payload:name
        })
    }

}