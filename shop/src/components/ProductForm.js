// src/components/ProductForm.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    imageURL: '',
    stock: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'products'), {
        name: product.name,
        description: product.description,
        price: Number(product.price),
        category: product.category,
        imageURL: product.imageURL,
        stock: Number(product.stock)
      });
      alert('Product uploaded successfully!');
      setProduct({
        name: '',
        description: '',
        price: '',
        category: '',
        imageURL: '',
        stock: ''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error uploading product.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} /><br />
      <input type="text" name="description" placeholder="Product Description" value={product.description} onChange={handleChange} /><br />
      <input type="number" name="price" placeholder="Product Price" value={product.price} onChange={handleChange} /><br />
      <input type="text" name="category" placeholder="Product Category" value={product.category} onChange={handleChange} /><br />
      <input type="text" name="imageURL" placeholder="Product Image URL" value={product.imageURL} onChange={handleChange} /><br />
      <input type="number" name="stock" placeholder="Product Stock" value={product.stock} onChange={handleChange} /><br />
      <button type="submit">Upload</button>
    </form>
  );
};

export default ProductForm;
