import React  from 'react';
import './LoadingContent.css';

const LoadingContent = () => {
    return(
        <div className="container_style">
          <div className="center_container">
            <div><h1>Cargando...</h1></div>

            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
    );

}


export default  LoadingContent;