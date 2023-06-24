import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useState,useEffect} from 'react';
import { Col, Row } from 'react-bootstrap';

function Dashboard() {

    const [blogs, setBlog] = useState([]);
    useEffect(() => {
      getData();
    },[]);
    const getData = async () => {
      try {
     const incomingData = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
     );
      const formattedData = await incomingData.json();
      setBlog(formattedData);
      console.log(formattedData);
     } catch(error) {
      console.log(error);
     }
      };
   

  return (

    
    
    <Container className="my-5">
    <h5 className="my-5 text-center display-4">Blogs</h5>
    <Row>
        
    
    {blogs.map((blog,i) => (
        <Col md={4}>
         <Card style={{ marginBottom: '30px' }}>
        <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>
             {blog.body}
        </Card.Text>

        </Card.Body>
        </Card>

        </Col>
       
    
     ))}
  
  </Row>
   
    </Container>

   
  );
}

export default Dashboard;