import axios from "axios";
// @ts-ignore
import { BehaviorSubject } from "rxjs";

const videoSubject = new BehaviorSubject(null);
const channelVideosSubject = new BehaviorSubject(null);

const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
const channelId = process.env.REACT_APP_YOUTUBE_CHANNEL;

export const youtubeService = {
  getVideoInfo,
  videoData: videoSubject.asObservable(),
  getChannelVideos,
  channelVideosData: channelVideosSubject.asObservable(),
};

function getVideoInfo(videoId: string) {
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`;
  axios.get(url).then((res) => videoSubject.next(res.data));
}

function getChannelVideos() {
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet%2Cid&channelId=${channelId}&key=${apiKey}`;
  axios.get(url).then((res) => videoSubject.next(res.data));
}
