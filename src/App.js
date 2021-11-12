import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from "./components/Searchbar/Searchbar"
import { ImageGalery } from './components/ImageGalery/ImageGalery';
import { useState } from 'react';


export default function App () {

  const [serchedImg, setSerchedImg] = useState(null)
  const [searchValue, setSearchValue] = useState('')

  const getSearchValue = (value) =>{
    setSearchValue(value)
  }
  const pageScroll = () => {
  window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});
  }
  
    return (
      <div className="App">
        <Searchbar getSearchValue={getSearchValue}/>
        <ImageGalery searchValue={searchValue} pageScroll={pageScroll}/>
      </div>
    );
  }
  


