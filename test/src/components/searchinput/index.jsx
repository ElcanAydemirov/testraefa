import React from 'react'
import style from './index.module.scss'

const SearchInput = ({searchValue,setSearchValue}) => {
  return (
    <input type="search" className={style} onChange={(e) => {
        setSearchValue(e.target.value)
    }}/>
  )
}

export default SearchInput