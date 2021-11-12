import s from './Button.module.css'

export function Button(props) {
    return (
        <button className={s.ButtonClass} type='button' onClick={props.handleClick} >Load More</button>
    )
}