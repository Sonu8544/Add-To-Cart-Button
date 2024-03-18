import React, { useEffect, useState } from 'react';
import { getProductData } from '../Api';

export default function Home() {
  const [productData, setProductData] = useState(null);
  const [clickedButtons, setClickedButtons] = useState({});

  const handleClick = (productId, title) => {
    console.log('Clicked Product ID:', productId);
    console.log('Clicked Product Title:', title);

    setClickedButtons(prevState => ({
      ...prevState,
      [productId]: true
    }));
    setTimeout(() => {
      setClickedButtons(prevState => ({
        ...prevState,
        [productId]: false
      }));
    }, 1000);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getProductData();
        setProductData(response.data);
      } catch (error) {
        console.error("Error Fetching data", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:mx-5 lg:grid-cols-4 lg:mx-8 xl:grid-cols-4 gap-6">
      {productData &&
        productData.map((item, index) => (
          <div key={index} className="max-w-sm mx-auto">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg mb-5">
              <a href="#">
                <img className="rounded-t-lg h-[400px] w-full object-cover" src={item.image} alt="" />
              </a>
              <div className="p-5">
                <a href="#" className="flex justify-between">
                  <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{item.title}</h5>
                  <h5>{item.rating}</h5>
                </a>
                <p className="font-normal text-gray-700 mb-3">{item.description}</p>
                <div className="flex justify-between w-full">
                  <button
                    onClick={() => handleClick(item._id, item.title)} // Pass product ID and title to handleClick function
                    className={`px-6 w-full py-2 uppercase rounded-md border-2 border-gray-900 focus:outline-none ${clickedButtons[item._id] ? 'bg-gray-800 text-white' : ''
                      }`}
                  >
                    {clickedButtons[item._id] ? 'Added!' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
