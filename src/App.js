import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './Redux/ProductsSlice';
import './App.css';
import Header from './Components/Header';


function App() {
  const dispatch = useDispatch()
  const products= useSelector(state => state.productsSlice)

  useEffect(()=>{
    dispatch(fetchProducts()) 
  },[])


  return (
    <div className="App">
      <Header />
      
      
    </div>
  );
}

export default App;
