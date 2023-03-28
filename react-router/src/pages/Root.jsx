import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
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
// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";

// export default function Root() {
//   return (
//     <div>
//       <Navbar />
//       <Outlet />
//     </div>
//   );
// }

// // Navbar에서 작성한 Link tag의 컴포넌트를 <Navbar> 아래 <Outlet>부분에 보여주려면
// // router를 사용하는 곳에서 children 속성을 사용하여 내부에 경로를 작성한다
