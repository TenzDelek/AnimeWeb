'use client'
import React, { useState } from 'react'
import Popular from './Popular'
import { useGlobalContext } from '../Context/global'

const Homepage = () => {
    const[rendered,setrendered]=useState('popular')
   const {handlechange,handlesubmit,
    searchanime,search}= useGlobalContext()
  const switchcomponent=()=>{
    switch(rendered){
        case 'popular':
            return <Popular rendered={rendered}/>
        default:
            return <Popular rendered={rendered}/>
    }
  }
    return (
    <div>
        <header>
            <div>
                <h1>{rendered==='popular'?'popular anime':
                rendered=== 'airing'? 'airing anime':'upcoming anime'
                }</h1>
            </div>
                <div>
                    <div>
                        <button onClick={()=>{
                            setrendered('popular')
                        }}>Popular</button>
                    </div>
                    <form action="">
                       <div>
                        <input type="text" placeholder='search anime' value={search} onChange={handlechange} />
                        <button type='submit' onClick={handlesubmit}>Search</button>
                       </div>
                    </form>
                    <div>
                        <button onClick={()=>{
                            setrendered('airing')
                        }}>Airing</button>
                    </div>
                    <div>
                        <button onClick={()=>{
                            setrendered('upcoming')
                        }}>Upcoming</button>
                    </div>
                </div>

        </header>
    </div>
  )
}

export default Homepage