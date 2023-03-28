import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const { videoId } = useParams();

  return <div>VideoDetail {videoId}</div>;
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//----------------------------------------------------------------------------------------------
// import React from "react";
// import { useParams } from "react-router-dom";

// export default function VideoDetail() {
//   const { videoId } = useParams();
//   // const params = useParams();
//   console.log(videoId);
//   return <div>VideoDetail {videoId}</div>;
// }

// // useParams
// // RRD 에서는 각각 페이지에 어떤 params가 있는지 객체를 전달해주고
// // 객체안에 key와 value 값이 들어있는데
