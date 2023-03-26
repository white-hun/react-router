import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";
import Root from "./pages/Root";
import VideoDetail from "./pages/VideoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/videos", element: <Videos /> },
      { path: "/videos/:videoID", element: <VideoDetail /> },
    ],
  },
  {
    path: "/videos",
    element: <Videos />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

// path라는 <Root>요소 안에 children이 있는데 index(최상위 경로) 기본적으로 <Home>이고
// path가 videos라면 <Videos>를 보여준다
