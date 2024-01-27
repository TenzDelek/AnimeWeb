"use client";
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
  useEffect(() => {
    getanime(id);
  }, [id]);
  return <div>
    <h1>{title}</h1>
  </div>;
};

export default page;
