import React from 'react';
import {PropTypes} from 'prop-types';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Col, Container, Row
  } from 'reactstrap';

  Cart.propTypes = {
    buyLists: PropTypes.array,
};
Cart.defaultProps ={
    buyLists: [],
};

function Cart (props) {
 const {buyLists} =props;
    console.log(props);
    const deleteToCart = ()=>{

    }
    return (
        <div className="todoItem">
            
            <Container>
                <h1> Gio Hang</h1>
                <Row>
            {buyLists.map(item=>(
                <Col sm="3" >
                <Card>
                <CardImg top width="100%" src={item.imageUrl} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">{item.name}</CardTitle>
                  
                  <CardText>{item.description}</CardText>
                  <Button onClick={()=>deleteToCart(item)}>Delete</Button>
                </CardBody>
              </Card>
              </Col>
            ))}
            </Row>
            </Container>
        </div>
    )
}

export default Cart;