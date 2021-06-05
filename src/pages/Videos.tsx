import React, { useEffect, useState } from "react";
import axios from "axios";
import { Video, YoutubeResult } from "../app/types";

export function Videos() {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const channelId = process.env.REACT_APP_YOUTUBE_CHANNEL;
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet%2Cid&channelId=${channelId}&key=${apiKey}`;

  const defaultYoutubeResult: YoutubeResult = { items: [] };

  const [youtubeResult, setYoutubeResult]: [
    YoutubeResult,
    (youtubeResult: YoutubeResult) => void
  ] = useState(defaultYoutubeResult);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() => {
    axios
      .get<YoutubeResult>(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setYoutubeResult(response.data);
        setLoading(false);
      })
      .catch((ex) => {
        const error =
          ex.response.status === 404
            ? "Resource Not found"
            : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
      });
  });

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className="App">
      <ul className="posts">
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
      {error && <p className="error">{error}</p>}
    </div>
  );
}
