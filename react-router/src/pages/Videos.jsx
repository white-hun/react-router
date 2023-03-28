import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Videos() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    navigate(`/videos/${text}`);
  };
  return (
    <div>
      Videos
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="video id: " value={text} onChange={handleChange} />
      </form>
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
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Videos() {
//   const [text, setText] = useState();
//   const navigate = useNavigate();
//   const handleChange = (e) => {
//     setText(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setText("");
//     navigate(`/videos/${text}`);
//   };
//   return (
//     <div>
//       Videos Pages
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="video id: " value={text} onChange={handleChange} />
//       </form>
//     </div>
//   );
// }

// // 경로 이동하는법 2가지
// // Link tag 사용하여 컴포넌트 지정
// // useNavigate -코드상에서 동적으로 이동, 변수로 지정해주고 어디로 갈지 경로를 지정해주면 된다
