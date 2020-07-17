import React, {Component , Fragment} from 'react';
import { Row, Form, Col, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlertComponent from '../alertComponent/AlertComponent';


class EditFileComponent  extends Component {

    constructor(props) {
        super(props);
        this.state = {
          response: {},
        }
     
        this.handleSubmit = this.handleSubmit.bind(this);
    
      }


      handleSubmit(event){
        event.preventDefault()
    
      
       let  apiUrl = 'http://localhost:8000/productos/update';
       
       
    
        const options = {
          method: 'POST',
          headers: {
            "Content-type": "application/json"
            
          },
          body:JSON.stringify({
            id: event.target.ProductoId.value,
            name_product: event.target.NombreProductoId.value,
            sku: event.target.SKUProductoId.value,
            description: event.target.DescripcionProductoId.value,
            price: event.target.PriceProductoId.value,
          })
        };
    

    
        fetch(apiUrl, options)
          .then(res => res.json())
          .then(result => {
           
            this.setState({
              response: result,
              
            });
            window.location.reload(false);
    
            
          },
          (error) => {
            alert(error);
            this.setState({
              response: error,
              
            })
          }
        )
      }



      render() {
    

    
        return(
    
          <Fragment key={this.props.producto.id}>
          <Modal
          {...this.props}
          
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
         
          {this.state.response.status === 'success' && <div><br /><AlertComponent content_alert={this.state.response.message} alert_state={this.state.response.status} /></div>}
          {this.state.response.status === 'warning' && <div><br /><AlertComponent content_alert={this.state.response.message} alert_state={this.state.response.status}/></div>}
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="ProductoId">
                    <Form.Label>Nombre de producto</Form.Label>
                    <Form.Control
                    type="text"
                    name="ProductoId"
                    required
                    disabled
                    defaultValue={this.props.producto.id}
                    />
                  </Form.Group>
                  <Form.Group controlId="NombreProductoId">
                    <Form.Label>Nombre de producto</Form.Label>
                    <Form.Control
                    type="text"
                    name="NombreProducto"
                    required
                    defaultValue={this.props.producto.name_product}
                    placeholder="Nombre del producto"
                    />
                  </Form.Group>
                  <Form.Group controlId="SKUProductoId">
                    <Form.Label>SKU</Form.Label>
                    <Form.Control
                    type="text"
                    name="SKUProducto"
                    required
                    defaultValue={this.props.producto.sku}
                    placeholder="SKU del producto"
                    />
                  </Form.Group>
                  <Form.Group controlId="DescripcionProductoId">
                    <Form.Label>Descripcion del producto</Form.Label>
                    <Form.Control
                    type="text"
                    name="NombreProducto"
                    required
                    defaultValue={this.props.producto.description}
                    placeholder="Descripcione del producto"
                    />
                  </Form.Group>
                  <Form.Group controlId="PriceProductoId">
                    <Form.Label>Precio del producto</Form.Label>
                    <Form.Control
                    type="number"
                    name="PriceProducto"
                    required
                    defaultValue={Number(this.props.producto.price)}
                    placeholder="Precio del producto"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Button variant="primary" type="submit"> actualizar producto</Button>
                  </Form.Group>
    
                </Form>
              </Col>
    
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
    
        </Fragment>
         
        )
      }



}


export default EditFileComponent ;
