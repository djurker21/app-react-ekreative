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
}

export interface YoutubeResult {
    items: Video[];
}