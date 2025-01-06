import React, { useState } from 'react'
import Product from '../Product/Product'

export default function Products() {
    let [productsList, setProductsList] = useState(
        [
            {id:10, Brand:'Toshiba', Model: '43"', Type: 'TV', Price: 8000, OnSale: false, Quantity: 5},
            {id:235, Brand:'LG', Model: '43"', Type: 'TV', Price: 10000, OnSale: true, Quantity: 3},
            {id:2019, Brand:'ATA', Model: '48"', Type: 'TV', Price: 7000, OnSale: false, Quantity: 5},
            {id:150, Brand:'Toshiba', Model: '48"', Type: 'TV', Price: 9500, OnSale: true, Quantity: 2},
            {id:375, Brand:'Apple Iphone 16', Model: 'Pro max 8GB 256GB', Type: 'Mobile', Price: 98800, OnSale: true, Quantity: 2},
            {id:995, Brand:'Samsung S24', Model: 'Ultra 12GB 256GB', Type: 'Mobile', Price: 59500, OnSale: false, Quantity: 3},
            {id:485, Brand:'Xiaomi Note  13', Model: '8GB 256GB', Type: 'Mobile', Price: 9090, OnSale: true, Quantity: 2}
        ]
    )

//----------------------------------------------------------------------
// To activate Using id code => remove only the / *   &  * /     
// ---------------------------------------
// -              Using id               - 
// ---------------------------------------
// Delete product
    function deleteProduct (id,index){
      let products = structuredClone (productsList);
      let newProducts = products.filter((product) => product.id !== id);
      setProductsList (newProducts);    
    }

// Update product by decrement product quantity
    function updateProductWithdrawal (id,Quantity,index){
      let products = structuredClone (productsList);
      let newProducts = products.filter((product) => (product.id !== id ? product : (product.Quantity > 0) ? product.Quantity-- : product));      
      setProductsList (newProducts);     
           
    }

// Update product by increment product quantity
    function updateProductAdd (id,Quantity,index){
      let products = structuredClone (productsList);
      let newProducts = products.filter((product) => (product.id !== id ? product : (product.Quantity <= 0) ? product.Quantity = 1 : product.Quantity++));
      setProductsList (newProducts);          
    }
//----------------------------------------------------------------------------- 


/*
// To activate Using index code => remove only the / *  (above) &  * /   (below)    
// ---------------------------------------
// -              Using index            - 
// ---------------------------------------
// Delete product
function deleteProduct (id,index){
  let products = structuredClone (productsList);
  products.splice(index,1);
  setProductsList (products);      
}

// Update product by decrement product quantity
function updateProductWithdrawal (id,Quantity,index){
  let products = structuredClone (productsList);
  products[index].Quantity > 0 ? products[index].Quantity-- : products[index].Quantity;
  setProductsList (products);          
}

// Update product by increment product quantity
function updateProductAdd (id,Quantity,index){
  let products = structuredClone (productsList);
  products[index].Quantity++;
  setProductsList (products);          
}

//--------------------------------------*/

  return (
    <>
      <h1 className='text-center m-3 fw-bold'>Products List</h1>
      <div className="container">
        <div className="row mx-auto py-4 gy-4">
          
          {productsList.map((product,index) => <Product key={product.id} productIndex={index} updateAdd={updateProductAdd} updateWithdrawal={updateProductWithdrawal} delete={deleteProduct} productDetails={product}/>)}
          
        </div>
      </div>
    </>
  )
}
