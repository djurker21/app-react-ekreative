import React, { useEffect, useState } from "react";
import { Video, YoutubeResult } from "../app/types";
import { youtubeService } from "../services/youtube.service";

export function Videos() {
  const defaultYoutubeResult: YoutubeResult = { items: [] };

  const [youtubeResult, setYoutubeResult]: [
    YoutubeResult,
    (youtubeResult: YoutubeResult) => void
  ] = useState(defaultYoutubeResult);

  useEffect(() => {
    youtubeService.getChannelVideos();
    const subscription = youtubeService.channelVideosData.subscribe(
      (data: YoutubeResult) => {
        setYoutubeResult(data);
      }
    );
    return subscription.unsubscribe;
  }, []);

  if (youtubeResult) {
    return (
      <div className="App">
        <ul className="videos">
          {youtubeResult.items.map((video: Video) => (
            <li key={video.id.videoId}>
              <img
                src={video.snippet.thumbnails.default.url}
                alt={"video_thumbnail"}
              />
              <p>{video.snippet.title}</p>
              <a href={"https://localhost:3000/video/" + video.id.videoId}>
                open
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }
}
