import { useState, useEffect } from "react";
import { ImageGaleryitem } from "../ImageGaleryitem/ImageGaleryitem";
import { PixabyFetch } from '../api/Pixaby';
import { Button } from "../Button/Button";
import s from './ImageGalery.module.css'
import Loader from "react-loader-spinner";
import {Modal} from "../Modal/Modal.js"


const newPixabyFetch = new PixabyFetch()
// console.log(newPixabyFetch)
export function ImageGalery({ searchValue, pageScroll }) {
  
  const [searchResult, setSearchResult] = useState([])
  const [status, setStatus] = useState('init')
  const [showModal, setShowModal] = useState(false)
  const [modalImg, setModalImg] = useState('')
  
  useEffect(() => {
    if (searchValue === '') {
      return
    }
    console.log('fetch!!')
    setStatus('loading')
    newPixabyFetch.resetPage()
    newPixabyFetch.searchQuery = searchValue
    // console.log(newPixabyFetch.searchQuery = this.props.searchValue)
    newPixabyFetch  
      .searchPhotos()
      .then(result => {
        if (result.length > 0) {
          setSearchResult(result)
          setStatus('success')
        }
        // console.log('then result',result) 
        
        else {
          setStatus('error')
        }
      })
      .catch(err => {
        console.log('catch result',err);
        setStatus('error');
      });
      
        
  },[searchValue])

  
  const handleClick = (e) => {
    newPixabyFetch.page = 1
    newPixabyFetch
      .searchPhotos()
      .then(result => {
        setSearchResult((prev) => [...prev, ...result])
        pageScroll()
      })
      
      .catch(err => {
        // console.log(err)
        setStatus('error');
      });
    
  }
  const toggleModal = () => {
    setShowModal(prev => !prev)
  }
  
  const onImgClick = (e) => {
    console.log(e.target)
    setModalImg(searchResult.find(el => el.webformatURL === e.target.src).largeImageURL)
    toggleModal()
  }

  return (<>
    {status === 'init' && <p className={s.init}>Enter your query</p>}

    {status === 'loading' && <div className={s.loader}>
      <Loader type="ThreeDots" color="#3f51b5" height={80} width={80} />
    </div>}
     
    {status === 'success' && <>
      <ul className={s.ImageGallery}>
        <ImageGaleryitem searchResult={searchResult} onImgClick={onImgClick} />
      </ul>
      <Button handleClick={handleClick} />
      {showModal && <Modal modalImg={modalImg} onClose={toggleModal} />}
    </>}
      
    {status === 'error' && <p className={s.error}>Something is wrong</p>}
   
  </>)
}
   
      
