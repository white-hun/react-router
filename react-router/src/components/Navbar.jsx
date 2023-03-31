import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/videos">Videos</Link>
    </nav>
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
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/videos">Videos</Link>
//     </nav>
//   );
// }
// // Link tag는 a tag와 비슷한데 routing을 가능하게 해준다
