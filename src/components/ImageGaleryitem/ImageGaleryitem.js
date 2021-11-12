import s from './ImageGaleryitem.module.css'

export function ImageGaleryitem({ searchResult, onImgClick }) {
    return (
        <>
            {searchResult.map(el => {
                return (
                    <li key={el.id} className={s.ImageGalleryItem} >
                        <img src={el.webformatURL} alt='' className={s.ImageGalleryItemImage} onClick={onImgClick} />
                    </li>
                )
            }
            )
            }
        </>
    )
}