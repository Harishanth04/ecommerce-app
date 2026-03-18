import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContect'
import { Link } from 'react-router-dom'

const ProductItems = ({ id, image, name, price }) => {

  const { currency } = useContext(ShopContext)

  return (

    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>

      <div className='border p-3 hover:shadow-lg transition ease-in-out'>

        <img src={image[0]} alt={name} className='w-full h-40 object-cover' />

        <p className='mt-2 text-sm'>{name}</p>

        <p className='text-gray-500 text-sm'>
          {currency}{price}
        </p>

      </div>

    </Link>
  )
}

export default ProductItems;