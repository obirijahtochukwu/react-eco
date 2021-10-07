import React, { useState, useContext } from 'react';
import {topItems} from './data2';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [items,setItems] = useState(topItems);

  // SEARCH BAR //
  const [searchModal, setSearchModal] = useState(false);
  const [ name, setName] = useState('');
  const [searchField, setSearchField] = useState('');
  const [searchShow, setSearchShow] = useState(false);
  const [isEditting, setIsEditting] = useState(false);
  const [filteredList, setFilteredList] = useState([]);

  const filteredItems = items.filter(
    item =>{
      return (
        item.title.toLowerCase().includes(searchField.toLocaleLowerCase())
        ||
        item.title.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
    }
  )
  
  
  const handleChange = (e, value) => {
    if (name && isEditting) {
      setName(e.target.value)
      setSearchField(name);
      if (e.target.value === '') {
        setSearchShow(false)
      }
    }
    else{
      setName(e.target.value)
      setSearchField(e.target.value);
      if (e.target.value === '') {
        setSearchShow(false)
      }
      else{
        setSearchShow(true);
      }
    }
  }
  
  const edit = (id) =>{
    const specificItem = getItem(id)
    const title = specificItem.title;
    setIsEditting(true);
    setName(title)
    setSearchShow(false)
    setSearchModal(false)
    mapFilteredItems(id)
  };

  const mapFilteredItems = (e) =>{
    setName('');
    setSearchField(name);
    const filtered = items.filter(
      item =>{
        return (
          item.title.toLowerCase().includes(searchField.toLocaleLowerCase())
          ||
          item.title.toLowerCase().includes(searchField.toLocaleLowerCase())
        )
      }
    )
    setFilteredList(filtered); 
    setSearchModal(false);
  }


  // PRODUCTS //
  const [count,setCount] = useState(topItems);
  // eslint-disable-next-line
  const [detailProduct,setDetailProduct] = useState(topItems);
  const [cart,setCart] = useState([]);

  const recommended = items.filter((item)=> item.category === 'recommended')
  const defacto = items.filter((item)=> item.category === 'defacto store')
  const brand = items.filter((item)=> item.category === 'brand festival top deals')
  const anker = items.filter((item)=> item.category === 'anker store')
  const accessories = items.filter((item)=> item.category === 'accessories you might need')
  const mobile = items.filter((item)=> item.category === 'mobile accessories')
  const footwares = items.filter((item)=> item.category === 'footwares')
  

  const getItem = (id) => {
    const product = items.find(item => item.id === id);
    return product;
  }
  
  const handleDetail = (id) =>{
    const product = getItem(id);
    setDetailProduct(product);
  }

  const addToCart = (id) =>{
    const product = getItem(id);
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setCart([...cart,product]);
    
  }

  const increment = (id) =>{
    const product = getItem(id);
    product.count = product.count + 1;
    product.total = product.count * product.price;
    setCount([product]);
    
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

  const cartTotalCount = items.reduce((total, items) => total + items.count , 0);
  const cartTotalPrice = items.reduce((total, items) => total + items.price * items.count, 0);

  

  
  
  return (
    <AppContext.Provider
      value={{
        searchModal,
        setSearchModal,
        name,
        searchField,
        searchShow,
        filteredItems,
        handleChange,
        edit,
        isEditting,
        filteredList,
        mapFilteredItems,
        items,
        detailProduct,
        handleDetail,
        recommended,
        defacto,
        brand,
        anker,
        accessories,
        mobile,
        footwares,
        getItem,
        addToCart,
        cart,
        increment,
        decrement,
        removeItem,
        count,
        cartTotalCount,
        cartTotalPrice,
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
