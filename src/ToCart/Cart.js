import React, { useState , useEffect} from 'react';
import {PropTypes} from 'prop-types';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle,CardSubtitle, Button, Col, Container, Row
  } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../features/Todoslice';
import './CartStyle.css';

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
    useEffect(() => {
      const priceCartTotal= (buyLists)=>{
        return buyLists.map(x => Number.parseInt(x.price)).reduce((a,b)=>a+b,0);
      }
      setCartTotal(priceCartTotal(buyLists));
    }, [buyLists]);
    
    return (
        <div className="todoItem">
            
            <Container>
                
                <div className="todoItem__price">
                  <div className="todoItem__price__total">
                        <h2>Giỏ Hàng</h2> 
                        <p>Tổng tiền là:{cartTotal} VND</p>
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
            <div className="infor-pay">
            <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  
        placeholder="Địa Chỉ "
        />
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  
        placeholder="Số Điện Thoại "
        />
        <button className="btn btn-outline-success" type="submit">Đặt Hàng</button>
      </form>
            </div>
            </Container>
        </div>
    )
}

export default Cart;