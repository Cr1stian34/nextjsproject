import { Text } from "@chakra-ui/react";
import React from "react";

interface propsCardVideoAnime {
  anime: any;
}

const CardVideoAnime: React.FC<propsCardVideoAnime> = ({ anime }) => {
  return (
    <div className="flex gap-2 max-w-[80%] border-2 border-slate-900 rounded-md mx-auto py-5">
      <div>
        <iframe
          width={"560"}
          height={"315"}
          src={`https://www.youtube.com/embed/${anime.id.videoId}`}
          title="Youtube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex flex-col gap-3">
        <Text className=" mx-auto">{anime.snippet.title}</Text>
        <p>{anime.snippet.description}</p>
        <p>{anime.snippet.publishTime}</p>
        <p>{anime.snippet.publishedAt}</p>
      </div>
    </div>
  );
};

export default CardVideoAnime;
