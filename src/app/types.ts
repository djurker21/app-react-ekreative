export interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    commentCount: string;
    favoriteCount: string;
  };
}

export interface YoutubeResult {
  items: Video[];
}

export interface GoogleProfileObj {
  email: string;
  name: string;
  imageUrl: string;
}

export interface FacebookObj {
  email: string;
  name: string;
  picture: {
    data: { url: string };
  };
}
