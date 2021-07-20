import React, { useState } from 'react';
import {PropTypes} from 'prop-types';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle,CardSubtitle, Button, Col, Container, Row
  } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../features/Todoslice';

  Cart.propTypes = {
    buyLists: PropTypes.array,
  
};
Cart.defaultProps ={
    buyLists: [],
    
};

function Cart (props) {
 const {buyLists} =props;
    console.log(props);
    const dispatch =useDispatch();
    const deleteToCart = (item)=>{
          dispatch(deleteItem(item))
    };
    console.log(deleteToCart);
    const [cartTotal,setCartTotal]=useState(0);
    const priceCartTotal= (buyLists)=>{
      return buyLists.map(x=>x.price).reduce((a,b)=>a+b);
    }
    setCartTotal(priceCartTotal);
    return (
        <div className="todoItem">
            
            <Container>
                <h1> Gio Hang</h1>
                <div className="todoItem__price">
                  <div className="todoItem__price__total">
                        <p>Tổng tiền là:{cartTotal}</p>
                  </div>

                </div>
                <Row>
            {buyLists.map(item=>(
                <Col sm="3" >
                <Card>
                <CardImg top width="100%" src={item.imageUrl} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">{item.name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Giá:{item.price}</CardSubtitle>
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