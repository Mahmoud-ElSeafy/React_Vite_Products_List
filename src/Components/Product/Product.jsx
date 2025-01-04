import React from 'react'

export default function Product(props) {
    
  let {id, Brand, Model, Type, Price, OnSale, Quantity} = props.productDetails
  
  return (
    <>
           {/* Product detail */}
            <div className="col-md-4 ">
              <div className="inner p-3 bg-secondary-subtle shadow rounded-4 position-relative">
                <h4><span className='fw-bold'>id: </span>{id}</h4>
                <h4><span className='fw-bold'>Brand: </span>{Brand}</h4>
                <h4 className='fs-5'><span className='fw-bold'>Model: </span>{Model}</h4>
                <h4><span className='fw-bold'>Type: </span>{Type}</h4>
                <h4><span className='fw-bold'>Price: </span>{Price}</h4>
                <h4><span className='fw-bold'>Quantity: </span>{Quantity}</h4>
                <h6>{OnSale ? <div className='fw-bold bg-danger position-absolute px-2 py-1 top-0 end-0 rounded-3'>Sale</div> : ''}</h6>
                
            {/* Transaction buttons */}
              {/* Delete button */}
                <div onClick={()=>props.delete(id,props.productIndex)} className="btn btn-outline-danger w-100 my-2">Delete</div>
                
              {/* Update button (Decrement in product quantity)*/}
                <div onClick={()=>props.updateWithdrawal(id,Quantity,props.productIndex)} className="btn btn-outline-warning w-50">Update Qty(-)</div>
                
              {/* Update button (increment in product quantity)*/}
                <div onClick={()=>props.updateAdd(id,Quantity,props.productIndex)} className="btn btn-outline-success w-50">Update Qty(+)</div>

              </div>
            </div>
            
    </>
  )
}
