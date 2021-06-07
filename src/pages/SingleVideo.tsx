import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Video, YoutubeResult } from "../app/types";
import YouTube from "react-youtube";
import { youtubeService } from "../services/youtube.service";

export function SingleVideo() {
  // @ts-ignore
  let { videoId } = useParams();

  const defaultYoutubeResult: YoutubeResult = { items: [] };

  const [youtubeResult, setYoutubeResult]: [
    YoutubeResult,
    (youtubeResult: YoutubeResult) => void
  ] = useState(defaultYoutubeResult);

  useEffect(() => {
    youtubeService.getVideoInfo(videoId);
    const subscription = youtubeService.videoData.subscribe(
      (data: YoutubeResult) => {
        setYoutubeResult(data);
      }
    );
    return subscription.unsubscribe;
  }, [videoId]);

  if (youtubeResult) {
    return (
      <div className="App">
        <YouTube videoId={videoId} />
        <ul className="video-with-desc">
          {youtubeResult.items.map((video: Video) => (
            <li key={video.id.videoId}>
              <p>Title: {video.snippet.title}</p>
              <p>Description: {video.snippet.description}</p>
              <p>viewCount: {video.statistics.viewCount}</p>
              <p>likeCount: {video.statistics.likeCount}</p>
              <p>favoriteCount: {video.statistics.favoriteCount}</p>
              <p>commentCount: {video.statistics.commentCount}</p>
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
