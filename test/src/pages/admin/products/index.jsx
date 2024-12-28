import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Container, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import styles from './index.module.scss';

export const AdminProducts = () => {
  const [data, setData] = useState([]);
  const BASE_URL = 'http://localhost:3000/';

  const getData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}products`);
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const editData = (product) => {
    Swal.fire({
      title: 'Edit Product',
      html: `
        <label for="edit-image">Image URL:</label>
        <input id="edit-image" type="text" class="swal2-input" value="${product.image}">
        
        <label for="edit-title">Title:</label>
        <input id="edit-title" type="text" class="swal2-input" value="${product.title}">
        
        <label for="edit-description">Description:</label>
        <input id="edit-description" type="text" class="swal2-input" value="${product.description}">
      `,
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        const image = document.getElementById('edit-image').value;
        const title = document.getElementById('edit-title').value;
        const description = document.getElementById('edit-description').value;

        if (!image || !title || !description) {
          Swal.showValidationMessage('All fields are required!');
          return;
        }

        return { image, title, description };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedProduct = {
          ...product,
          ...result.value,
        };

        axios
          .put(`${BASE_URL}products/${product.id}`, updatedProduct)
          .then(() => {
            Swal.fire('Updated!', 'The product has been updated.', 'success');
            getData(); 
          })
          .catch((error) => {
            Swal.fire('Error!', 'Failed to update the product.', 'error');
          });
      }
    });
  };

  const deleteData = (dId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${BASE_URL}products/${dId}`)
          .then(() => {
            Swal.fire('Deleted!', 'The product has been deleted.', 'success');
            getData(); 
          })
          .catch((error) => {
            Swal.fire('Error!', 'Failed to delete the product.', 'error');
          });
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.table}>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 &&
                data.map((d) => (
                  <tr key={d.id}>
                    <td>
                      <img src={d.image} alt="" className={styles.productImage} />
                    </td>
                    <td>{d.title}</td>
                    <td>{d.description}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => editData(d)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => deleteData(d.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
};
