// import React from "react";
// function Home(){
//     return(
//         <div className="bi">
//             <h1 className="txt">Welcome...</h1>
        
//         </div>
//     )
// }



// export default Home;



import React from "react";
import { useParams } from "react-router-dom";

function Home(){
  const { id } = useParams();

  return (
    <div>
      <h2>Details Page</h2>
      <p>You are viewing details for ID: {id}</p>
    </div>
  );
};

export default Home;