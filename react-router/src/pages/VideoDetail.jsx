import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const params = useParams();
  const { videoId } = useParams();
  console.log(params);
  return <div>VideoDetail {videoId}</div>;
}
