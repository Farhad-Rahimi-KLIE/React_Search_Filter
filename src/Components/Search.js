import React from 'react'
import './Search.css'
import { useState } from 'react'
import { useEffect } from 'react';
const Search = () => {
  const [data,setData] =useState([]);
  const [filtersearch,setFiltersearch] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
      return res.json();
    }).then((jan)=>{
      setData(jan)
      setFiltersearch(jan)
    }).catch((error)=>{
      console.log(error)
    })
  })
  const handlechange = (value)=>{
    const res = filtersearch.filter((culElem)=>{
      return culElem.name.toLowerCase().includes(value);
      setData(res)
    })
  }
  return (
    <div className='search-top'>
    <div className='search'>
      <input type="text" placeholder='Search here' onChange={(e)=> handlechange(e.target.value)}/>
    </div>
    <div className="search-result">
      {
        data.map((curElem,id)=>{
          return <div key={id}>
            {curElem.name}
          </div>
        })
      }
    </div>
    </div>
  )
}

export default Search
