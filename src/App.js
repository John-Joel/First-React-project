import { React, useState } from 'react';
import Header from './Header';
import Product from './Product';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cart, setCart] = useState([]);

  const ToggleCart = () => {
    setIsCartVisible(!isCartVisible);
  }

  const AddToCart = (product) => {

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updateCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      setCart(updateCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }
  return (
    <>
      {
        isCartVisible ?
          (<Product searchTerm={searchTerm} cart={cart} />,
            <Header setSearchTerm={setSearchTerm} ToggleCart={ToggleCart} />
          ) : (
            <AddToCart AddToCart={AddToCart} />)
      }
    </>
  );
}

export default App;
