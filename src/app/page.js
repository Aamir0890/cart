'use client'
import Image from "next/image";
import { products } from "../../utils/data";
import { FaCartPlus, FaTimesCircle } from "react-icons/fa";
import { useCart } from "react-use-cart";
import { toast } from 'react-hot-toast';
export default function Home() {
  const {addItem,inCart,removeItem}=useCart();

  return (
    <div className="container mx-auto px-4 py-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product) => (
      <div key={product.id} className="flex justify-center mb-4">
        <div className="card border-0 shadow-lg rounded-lg overflow-hidden w-full max-w-xs transform transition duration-300 hover:scale-105">
          <div className="w-40 h-40 flex items-center justify-center ml-10 mt-3">
            <Image
              src={product.image}
              width={160}
              height={160}
              priority
              className="object-contain w-full h-full"
              alt={product.name}
            />
          </div>
          <div className="p-4 bg-white text-center">
            <h6 className="card-title font-semibold text-lg text-gray-800 mb-2">
              {product.name}
            </h6>
            <div className="flex justify-center items-center mt-4">
              <button className="btn btn-dark btn-sm rounded-lg shadow-md flex-grow-1 mx-1">
                ${product.price}
              </button>
              {inCart(product.id) && (
                <button 
                  onClick={() => {
                    toast.error(`1 ${product.name} has been removed from the cart`)
                    removeItem(product.id)}}
                  className="btn btn-danger btn-sm rounded-lg shadow-md mx-1"
                  aria-label="Remove from cart"
                >
                  <FaTimesCircle />
                </button>
              )}
              <button 
                onClick={() => {
                  toast.success(`1 ${product.name} has been added to the cart`)
                  addItem(product)}}
                className="btn btn-primary btn-sm rounded-lg shadow-md mx-1"
                aria-label="Add to cart"
              >
                <FaCartPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
