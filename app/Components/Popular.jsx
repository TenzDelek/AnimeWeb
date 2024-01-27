'use client'
import React from 'react'
import { useGlobalContext } from '../Context/global'
import Link from 'next/link'

const Popular = () => {
 const {popularAnime, isSearch}= useGlobalContext()
  const conditional=()=>{
    if(!isSearch)
    {
      return popularAnime.map((anime)=>{
        return <Link href={`/Anime/${anime.mal_id}`} key={anime.mal_id}>
            <img className=' w-full h-full object-cover rounded-xl' src={anime.images.jpg.large_image_url} />

          </Link>
      })
    }
  }
 return (
    <div className=' flex'>
      <div className='  mt-8 pt-8 pb-8 pl-20 pr-0  w-full grid grid-cols-5 gap-4'>
        {conditional()}
      </div>
      </div>
  )
}

export default Popular