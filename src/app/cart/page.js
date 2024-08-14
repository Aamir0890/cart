'use client'
import Image from 'next/image'
import React,{useState} from 'react'
import Head from 'next/head'
import { FaMinusCircle,FaPlusCircle } from 'react-icons/fa'
import { useCart } from 'react-use-cart'
import { toast } from 'react-hot-toast'


function Cart() {
  const {updateItemQuantity,items,cartTotal}=useCart()
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState('');

  const handleApplyCoupon = () => {
    let discountAmount = 0;
    setError('');  

    if (coupon === 'DISCOUNT10') {
      discountAmount = 0.10;
    } else if (coupon === 'DISCOUNT20') {
      discountAmount = 0.20;
    } else {
      setError('Invalid coupon code.');
      return;
    }

    setDiscount(discountAmount);
  };

  const finalTotal = (cartTotal * (1 - discount)).toFixed(2);
  
  return (
    <div>
  <Head>
    <title>Cart</title>
    <meta property='og:title' content='Cart' key='title'/>
  </Head>
  <div className='container py-3'>
 
    <h5 className='text-center text-info mb-4'>SHOPPING CART</h5>
    <hr className='text-primary mb-4'/>
    <div className='row'>
      
      <div className='col-md-8 col-12'>
        {items.map(product => (
          <div key={product.id} className='card shadow-sm border-0 rounded-3 mb-4'>
            <div className='row g-0 align-items-center'>
              <div className='col-4 text-center'>
                <Image 
                  src={product.image}
                  height='100'
                  width='100'
                  priority
                  className='img-fluid rounded-start'
                  alt={product.name}
                />
              </div>
              <div className='col-8'>
                <div className='card-body'>
                  <h6 className='card-title fw-bold mb-1'>{product.name}</h6>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-0'>{product.quantity} x ${product.price}</p>
                    <div className='btn-group'>
                      <button
                        onClick={() => {
                          updateItemQuantity(product.id, product.quantity + 1)
                          toast.success(`${product.name} has been added to cart`)
                        }}
                        className='btn btn-primary btn-sm rounded-lg shadow-md mx-1'
                      >
                        <FaPlusCircle />
                      </button>
                      <button
                        onClick={() => {
                          updateItemQuantity(product.id, product.quantity - 1)
                          toast.error(`${product.name} has been removed from cart`)
                        }}
                        className='btn btn-danger btn-sm rounded-lg shadow-md mx-1'
                      >
                        <FaMinusCircle />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Summary Section */}
      <div className='col-md-4 col-12'>
      <div className='card shadow-sm border-0 rounded-3'>
        <div className='card-body'>
          <h6 className='text-center mb-3'>Order Summary</h6>
          <div className='d-flex justify-content-between mb-2'>
            <span>Delivery</span> <span>$0.00</span>
          </div>
          <div className='d-flex justify-content-between mb-2'>
            <span>Discount</span> <span>${(cartTotal * discount).toFixed(2)}</span>
          </div>
          <div className='d-flex justify-content-between fw-bold'>
            <span>Total</span> <span>${finalTotal}</span>
          </div>
          <div className='mt-3'>
            <input 
              type='text' 
              className='form-control mb-2' 
              placeholder='Enter coupon code' 
              value={coupon} 
              onChange={(e) => setCoupon(e.target.value)} 
            />
            {error && <div className='text-danger mb-2'>{error}</div>}
            <button 
              className='btn btn-primary btn-block' 
              onClick={handleApplyCoupon}
            >
              Apply Coupon
            </button>
          </div>
          <button className='btn btn-primary btn-block mt-4'>Proceed to Checkout</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>

  )
}

export default Cart
