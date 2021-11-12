import { useEffect } from 'react'
import s from './Modal.module.css'

export function Modal({modalImg,onClose}) {
    useEffect(() => {
        console.log('modal mount!')
        window.addEventListener('keydown', handleKeyDown)
    return (() => {
        console.log('modal UnMount')
         window.removeEventListener('keydown', handleKeyDown)   
        })
    }, [])


const handleKeyDown = e => {
    if (e.code === 'Escape') {
        onClose()
        }
    }
const backdropClick = e => {
    if (e.target === e.currentTarget) {
        onClose()
    }
}
    
      return (
          <div className={s.Overlay} onClick={backdropClick }>
        <div className={s.Modal}>
            <img src={modalImg} alt="modalImg" />
         </div>
    </div>
    )  
    
    
}
