'use client'
import React from 'react'
import { useGlobalContext } from '../Context/global'
import Link from 'next/link'

const Upcoming = ({rendered}) => {
 const {upcomingAnime, isSearch,searchResults}= useGlobalContext()
  const conditional=()=>{
    if(!isSearch && rendered=='upcoming')
    {
      return upcomingAnime.map((anime)=>{
        return <Link href={`/Anime/${anime.mal_id}`} key={anime.mal_id}>
            <img className=' w-full h-full object-cover rounded-xl' src={anime.images.jpg.large_image_url} />

          </Link>
      })
    }
    else{
      return searchResults.map((anime)=>{
        return <Link href={`/Anime/${anime.mal_id}`} key={anime.mal_id}>
        <img className=' w-full h-full object-cover rounded-xl' src={anime.images.jpg.large_image_url}  alt=' search'/>
        </Link>
      })
    }
  }
 return (
    <div className=' flex '>
      <div className='  mt-8 w-full grid grid-cols-5 gap-4'>
        {conditional()}
      </div>
      </div>
  )
}

export default Upcoming