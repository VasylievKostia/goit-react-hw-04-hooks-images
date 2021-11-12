import { useState } from "react"
import s from "./Searchbar.module.css"

export function Searchbar({getSearchValue}) {
  const [searchValue, setSearchValue] = useState('')
  
  const  handleChenge = (e) => {
      setSearchValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchValue.trim() === '') {
     return alert('nothing to search!')
    }
    getSearchValue(searchValue)
    setSearchValue('')
   }

    return (
      <header className={s.Searchbar} >
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
          <input
          name= 'searchValue'
          value={searchValue}
          className={s.SearchFormInput}
          type="text"
          placeholder="Search images and photos"
          onChange={handleChenge}
        />
        </form>
      </header>
    )
  }
