"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { id } = useParams();
  console.log(id);
  const [anime, setAnime] = useState({});
  const [character, setcharacter] = useState([]);
  const [showmore, setshowmore] = useState(false);
  const {
    title,
    synopsis,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    scored_by,
    popularity,
    status,
    rating,
    source,
  } = anime;
  const getanime = async (anime) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await res.json();
    setAnime(data.data);
    console.log(data.data);
  };
  const getcharacter=async(anime)=>{
    const res = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`);
    const data = await res.json();
    setcharacter(data.data);
    console.log(data.data);
  }
  useEffect(() => {
    getanime(id);
    getcharacter(id)
  }, [id]);
  return <div className=" flex flex-col items-center mt-8">
    <h1 className=" font-bold text-lg">{title}</h1>
    <div className='  p-2'>
        <div className=" flex items-center gap-8 justify-center">
            <div>
                <Image src={images?.jpg.large_image_url} height={250} width={250} alt="anime images" className=" rounded-md" />
            </div>
            <div className="space-y-2">
                <p><span className=" font-bold">Aired:</span><span>{aired?.string}</span></p>
                <p><span className=" font-bold">Rating:</span><span>{rating}</span></p>
                        <p><span className=" font-bold">Rank:</span><span>{rank}</span></p>
                        <p><span className=" font-bold">Score:</span><span>{score}</span></p>
                        <p><span className=" font-bold">Scored By:</span><span>{scored_by}</span></p>
                        <p><span className=" font-bold">Popularity:</span><span>{popularity}</span></p>
                        <p><span className=" font-bold">Status:</span><span>{status}</span></p>
                        <p><span className=" font-bold">Source:</span><span>{source}</span></p>
                        <p><span className=" font-bold">Season:</span><span>{season}</span></p>
                        <p><span className=" font-bold">Duration:</span><span>{duration}</span></p>
            </div>
        </div>
        <p className=" max-w-[720px]">
                    {showmore ? synopsis : synopsis?.substring(0, 450) + '...'}
                    <button onClick={() => {
                        setshowmore((prev)=>!prev)
                    } } className=" text-green-500">{showmore ? 'Show Less': 'Read More'}</button>
                </p>
    </div>
    <div className=" text-lg font-bold text-center">
      <hr/>
    TRIALER
    <hr/>
        <div className=" mt-4">
        {trailer?.embed_url ? 
                    <iframe className=" rounded-xl"
                        src={trailer?.embed_url} 
                        title="Inline Frame Example"
                        width="720"
                        height="300"
                        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        
                        allowFullScreen>
                    </iframe> :
                    <h3>Trailer not available</h3>
                }
        </div>
    </div>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  p-4 gap-4 ">
        {character?.map((character,index)=>{
            const {role}=character
            const {images,name,mal_id}=character.character
            return <Link href={`/Character/${mal_id}`} key={index}>
               <div className=" w-full flex flex-col items-center justify-center  p-3 rounded-lg bg-[#282828] hover:bg-[#191919] transition-all duration-100 ease-in-out ">
                
                <Image src={images?.jpg.image_url} alt="character" height={100} width={100} className=" rounded-lg" />
                <h4 className=" font-semibold" >{name}</h4>
                <p className=" text-sm">{role}</p>
               </div>
                </Link>
        })}
    </div>
  </div>;
};

export default page;
