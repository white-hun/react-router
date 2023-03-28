import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/home", element: <Home /> },
      { path: "/videos", element: <Videos /> },
      { path: "/videos/:videoId", element: <VideoDetail /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
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
// import "./App.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
// import NotFound from "./pages/NotFound";
// import Videos from "./pages/Videos";
// import Root from "./pages/Root";
// import VideoDetail from "./pages/VideoDetail";

// const router = createBrowserRouter([
//   // 어떤 컴포넌트를 보여줄지 로직 작성
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <NotFound />,
//     children: [
//       { index: true, element: <Home /> }, // 기본 페이지
//       { path: "/videos", element: <Videos /> },
//       { path: "/videos/:videoId", element: <VideoDetail /> }, // : 땡땡해줘야한다
//     ],
//   },
// ]);
// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

// // path라는 <Root>요소 안에 children이 있는데 index(최상위 경로) 기본적으로 <Home>이고
// // path가 videos라면 <Videos>를 보여준다

// // 항상 고정되어있는 Navbar를 만들고 원하는 부분만 변경 -> outlet 기능을 사용하면 된다
// // 원하는 자식들을 outlet 안에 표시할 수 있다
