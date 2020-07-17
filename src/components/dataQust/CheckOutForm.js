import React, {Component} from 'react';
import { Button, Modal , Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class CheckOutForm  extends Component {

    constructor(props) {
        super(props);
        this.state = {
          response: {},
        }
     
        this.handleSubmit = this.handleSubmit.bind(this);
    
      }


      handleSubmit(event){
        event.preventDefault()
    
      
       let  apiUrl = 'http://localhost:8000/checkout';
       
   

        const options = {
          method: 'POST',
          headers: {
            "Content-type": "application/json"
            
          },
          body:JSON.stringify({
                products:this.props.producto,
                id:this.props.totalproductoID
            })
        };
    
    
    
        fetch(apiUrl, options)
          .then(res => res.json())
          .then(result => {
           
          
            window.location.reload(false);
          },
          (error) => {
          
           
          }
        )
      }



      render() {
        
        let productCheckOut=this.props.producto;

        productCheckOut = productCheckOut.map( (product, index) => {
        
            return(
                
    
              
                    <tr>

                      <td>{product.name_product}</td>
                      <td>{Number(product.price)}</td>
                      <td>{product.numbers}</td>
                      <td>{ product.numbers*product.price}</td>
                 
                    </tr>
               
    
            )
    
        });

    
        return(
    
    <React.StrictMode>
          <Modal
          {...this.props}
          
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
         
          
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Check out
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            

              <Table variant="dark">

                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>

                  { productCheckOut}

                  <tr>
                    <th></th>
                    <th></th>
                    <th>Total=</th>
                    <th>{this.props.totalproducto}</th>
                  </tr>

                </tbody>


              </Table>
              
                   
                 
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={this.handleSubmit} variant="primary" type="submit"> Check Out</Button>
            <Button variant="danger" onClick={this.props.onHide}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
    
        </React.StrictMode>
         
        )
      }



}


export default CheckOutForm ;