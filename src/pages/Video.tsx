import React from "react";
import {
    useParams
} from "react-router-dom";

export function Video() {
    // @ts-ignore
    let { videoId } = useParams();
    return (
        <div>
            <h3>watch video page {videoId}</h3>
        </div>
    );
}