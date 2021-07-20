import React from 'react';
import PropTypes from 'prop-types';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Col, Container, Row
  } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { savetodo } from '../features/Todoslice';


Home.propTypes = {
    posts: PropTypes.array,
};
Home.defaultProps ={
    posts: [],
};

function Home(props) {
    const {posts} = props;
    console.log(props);
    const dispatch= useDispatch();
    const addToCart = (post)=>{
        dispatch(savetodo(post))
    };

    
    return (
        <div className='list'>
            <Container>
                <h1> WELCOME TO PHARMACY</h1>
                <Row>
            {posts.map(post=>(
                <Col sm="3" >
                <Card>
                <CardImg top width="100%" src={post.imageUrl} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">{post.name}</CardTitle>
                  
                  <CardText>{post.description}</CardText>
                  <Button onClick={()=>addToCart(post)}>Add</Button>
                </CardBody>
              </Card>
              </Col>
            ))}
            </Row>
            </Container>
        </div>
    );
}

export default Home;