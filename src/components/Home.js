import React from 'react';
import PropTypes from 'prop-types';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button,CardSubtitle, Col, Container, Row
  } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { savetodo } from '../features/Todoslice';
import './HomeStyle.css';
import { UncontrolledCarousel } from 'reactstrap';

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
    const items = [
        {
          src: 'https://i0.wp.com/phanmemnhathuoc.net/wp-content/uploads/2019/08/top-5-phan-mem-nha-thuoc-tot-nhat-2019.jpg',
          
          key: '1'
        },
        {
          src: 'https://anhtuanle234.files.wordpress.com/2017/12/videoblocks-new-year-2018-background-animation_h101me9c_thumbnail-full01.png?w=980&h=460&crop=1',
          
          key: '2'
        },
        {
          src: 'https://tangtangart.files.wordpress.com/2020/04/img_5714.png?w=980&h=460&crop=1',
          
          key: '3'
        }
      ];
    
    return (
        <div className='list'>
            <Container>
            <UncontrolledCarousel  items={items} />
                <Row>
            {posts.map(post=>(
                <Col sm="3" >
                <Card>
                <CardImg top width="100%" src={post.imageUrl} alt="Card image cap" />
                <span className="discounts"> Giảm 20% </span>
                <CardBody>
                  <CardTitle tag="h5">{post.name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Giá: {post.price} VND</CardSubtitle>
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