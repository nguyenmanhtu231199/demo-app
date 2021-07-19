import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';


Home.propTypes = {
    posts: PropTypes.array,
};
Home.defaultProps ={
    posts: [],
};

function Home(props) {
    const {posts} = props;
    return (
        <div className='list'>
            
               <Container>
                   <Row>
                    {posts.map(post=> (
                        <div className="card" style="width: 18rem;">
                        <img src={post.imageUrl} className="card-img-top" alt="Card image cap"/>
                        <div className="card-body">
                          <h5 className="card-title">{post.name}</h5>
                          <p className="card-text">{post.description}</p>
                          <a href="#" className="btn btn-primary">Buy</a>
                        </div>
                      </div>
                      
                    ))}
                    </Row>
                </Container>
            
        </div>
    );
}

export default Home;