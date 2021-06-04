import React from "react";
import { useParams } from "react-router-dom";

interface Video {
  items: [
    {
      id: string;
      snippet: {
        title: string;
        description: string;
        thumbnails: {
          default: {
            url: string;
          };
        };
      };
    }
  ];
}

export function Video() {
  // @ts-ignore
  let { videoId } = useParams();
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`;
  return (
    <div>
      <h3>watch video page {videoId}</h3>
      <p>{url}</p>
    </div>
  );
}
