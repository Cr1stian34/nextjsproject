"use client";
import LoaderCommon from "@/app/common/loader/LoaderCommon";
import { Box, Card, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const AnimeDetalls = () => {
  const [anime, setAnime] = useState(null);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const getAnimeData = async () => {
      try {
        // Obtener el parámetro 'anime' de los parámetros de búsqueda
        const animeParam = searchParams.get("anime");

        // Si el parámetro 'anime' existe
        if (animeParam) {
          // Decodificar el JSON y establecerlo en el estado
          const animeData = JSON.parse(decodeURIComponent(animeParam));
          setAnime(animeData);
        }
      } catch (error) {
        console.error("Error al obtener los datos del anime:", error);
      }
    };

    // Llamar a la función para obtener los datos del anime
    getAnimeData();
  }, [pathname, searchParams]);

  if (!anime) {
    return <LoaderCommon />;
  }

  console.log("a =>", anime);

  return (
    <div className="w-hull bg-black h-[100%]">
      <div className="w-[80%] h-auto mx-auto py-10 flex gap-2 p-5 rounded-md bg-slate-900 text-white">
        <div className="w-[auto] h-[300px]">
          <Image src={anime.images.jpg.image_url} />
        </div>
        <div className="w-[80%]">
          <h2 className=" text-center">{anime.title}</h2>
          <p className=" text-sm">{anime.synopsis}</p>
          <div className="mt-5">
            <p className=" text-sm">Rating: {anime.rating}</p>
            <p className=" text-sm">Popularity: {anime.popularity}</p>
          </div>
          <div className="flex justify-center items-center">
            {anime.trailer && (
              <iframe
                width="560"
                height="315"
                src={anime.trailer.embed_url}
                title={anime.title + " Trailer"}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetalls;