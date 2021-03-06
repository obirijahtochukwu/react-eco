import React, { useState, useContext } from 'react';
import sublinks from './data';
import {topItems} from './data2';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [count,setCount] = useState(topItems);

  // eslint-disable-next-line
  const [items,setItems] = useState(topItems);
  const [detailProduct,setDetailProduct] = useState(topItems);
  const [cart,setCart] = useState([]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: '', links: [] });
  const [location, setLocation] = useState({});
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const getItem = (id) => {
    const product = items.find(item => item.id === id);
    return product;
  }

  const handleDetail = (id) =>{
    const product = getItem(id);
    setDetailProduct(product);
  }

  const addToCart = (id) =>{
    const product = getItem(id)
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setCart([...cart,product])
  }

  const increment = (id) =>{
    const product = getItem(id)
    product.count = product.count + 1;
    product.total = product.count * product.price;
    setCount([product])
  }

  const decrement = (id) =>{
    const product = getItem(id);
    product.count = product.count - 1;
    if(product.count === 0){
      return removeItem(id);
    }
    else{
    product.total = product.count * product.price;
    setCount([product])
    }
  }

  const removeItem = (id) =>{
    // eslint-disable-next-line
    {/*let tempCart = [...cart];
    tempCart = tempCart.filter((item)=>item.id !== id);
    let removed = tempCart(id);
    removed.inCart = false;
    setCart(removed);*/}
  let tempProducts = [...items];
  let tempCart = [...cart];

  tempCart = tempCart.filter(item => item.id !== id);

  const index = tempProducts.indexOf(getItem(id));
  let removedProduct = tempProducts[index];
  removedProduct.inCart = false;
  removedProduct.count = 0;
  removedProduct.inCart = 0;
  setCart(tempCart);
  setItems(tempProducts);

  };

  return (
    <AppContext.Provider
      value={{
        items,
        detailProduct,
        handleDetail,
        getItem,
        addToCart,
        cart,
        increment,
        decrement,
        removeItem,
        count,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
