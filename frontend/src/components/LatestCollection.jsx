import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContect";
import Title from "./Title";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LatestCollection = () => {

  const { products } = useContext(ShopContext);
  const navigate = useNavigate();

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (!products || products.length === 0) return;

    const newProducts = products.slice(0, 10);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLatestProducts(prev => {
      if (JSON.stringify(prev) === JSON.stringify(newProducts)) {
        return prev;
      }
      return newProducts;
    });

  }, [products]);

  return (
    <div className="my-16 px-6">

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-10"
      >
        <Title text1={"Latest "} text2={"Collection"} />

        <p className="max-w-xl mx-auto text-gray-400 mt-4 text-sm">
          Discover premium fashion with a minimalist luxury touch.
        </p>
      </motion.div>

      {/* Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

        {latestProducts.map((item) => (

          <motion.div
            key={item._id}
            onClick={() => navigate(`/product/${item._id}`)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="group cursor-pointer hover:shadow-xl transition duration-300 rounded-xl p-2"
          >

            {/* Image */}
            <div className="overflow-hidden rounded-xl bg-gray-100 h-60 flex items-center justify-center">

              <img
                src={item.image[0]}
                alt={item.name}
                className="max-h-full object-contain transition duration-500 group-hover:scale-105"
              />

            </div>

            {/* Info */}
            <div className="mt-3">

              <p className="text-sm font-medium tracking-wide">
                {item.name}
              </p>

              <p className="text-gray-400 text-sm mt-1">
                Rs. {item.price}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
};

export default LatestCollection;