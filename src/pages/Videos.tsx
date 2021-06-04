import React, { useEffect, useState } from "react";
import axios from "axios";
import { IVideo } from "./ivideo";

export function Videos() {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const channelId = process.env.REACT_APP_YOUTUBE_CHANNEL;
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet%2Cid&channelId=${channelId}&key=${apiKey}`;

  const defaultVideos: IVideo[] = [];

  const [videos, setVideos]: [IVideo[], (videos: IVideo[]) => void] =
    useState(defaultVideos);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() => {
    axios
      .get<IVideo[]>(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setVideos(response.data.items);
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
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className="App">
      <ul className="posts">
        {videos.map((video) => (
          <li key={video.id}>
            <h3>{video.title}</h3>
            <p>{video.body}</p>
          </li>
        ))}
      </ul>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
