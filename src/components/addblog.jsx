import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export const AddBlog = () => {
    return (
        <Container>
            <br></br>
        <h3 >New Blog</h3>
        <div className='row'>
           <div className='col-lg-6'>
           <Form>
           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter Author" />
      </Form.Group>
    </Form>
    <Button variant="primary">Save</Button>
           </div>
        </div>
       
        </Container>
    );
}
