import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { nanoid } from 'nanoid'
import axios from 'axios';
import Swal from 'sweetalert2';


export const AddProduct = () => {

  const BASE_URL = 'http://localhost:3000/';

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")

  const addProduct =(e) => {
    e.preventDefault()
    e.target.reset()

    if ((title && image && price && description)) {
      const obj = {
        id: nanoid(),
        title: title,
        image:image,
        price:price,
        description:description,
      }
      const postData = async () => {
        const res = await axios.post(`${BASE_URL}products`,obj) 
        if (res.status == 201) {
          Swal.fire({
            title: "Succesfully Posted",
            icon: "success",
            draggable: true
          });
        }
      }    
      postData()
    }else{
      Swal.fire({
        title: "Inputlardan hansisa bosdur",
        icon: "error",
        draggable: true
      });
    }




  }
  

  return (
    <>


    <Container>
      <Row>
        
        <Form onSubmit={addProduct}> 
                <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>title</Form.Label>
        <Form.Control type="text" placeholder="Title" onChange={(e) => {
          setTitle(e.target.value)
        }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>image</Form.Label>
        <Form.Control type="url" placeholder="Image" onChange={(e) => {
          setImage(e.target.value)
        }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>price</Form.Label>
        <Form.Control type="number" placeholder="Price" onChange={(e) => {
          setPrice(e.target.value)
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" onChange={(e) => {
          setDescription(e.target.value)
        }}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Row>
    </Container>


    </>
  )
}
