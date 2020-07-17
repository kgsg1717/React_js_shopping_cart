import React , {useEffect} from 'react';
import { connect } from 'react-redux';
import {getNumbers} from '../actions/getAction';
import { Link } from 'react-router-dom';


const Header = (props) => {



  useEffect(() =>{
      getNumbers();
  },[]);


    return(
        <header >
            <div className="fondo_oscuro" ></div>
            <nav>
              <h2>TIENDA</h2>
              <ul>
                <li><Link to="/"> HOME </Link></li>
            
                <li className="cart_button"><Link to="/cart"> 
    <ion-icon name="basket-outline"></ion-icon>TIENDA <span>{props.basketProps.basketNumbers}</span>
                </Link></li>

              </ul>
            </nav>
        </header>

    );

}

const mapStateToProps = state => ({

  basketProps: state.basketState

})

export default connect(mapStateToProps, {getNumbers}) (Header);