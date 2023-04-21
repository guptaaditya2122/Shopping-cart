import React, { useEffect, useState } from 'react'
import ItemList from '../itemList/ItemList';

function Home() {
const [items,setItem] = useState([]);

useEffect(()=>{
  fetch('data.json').then(res=> res.json()).then(data=>setItem(data));
},[])

  return (
    <section>
        <ItemList items={items}/>
    </section>
  )
}

export default Home
