import React, {useState} from "react" //리액트가 읽을수 있도록 import
export default function Midterm (props) {
    const [change, setchange] = useState(0);
    
    
    
 
    return (
      <div>
        <p>당신은 어떤 과일을 좋아하나요 ? {change}</p>
        <button onClick={() => setchange(change + 1)}>           
         사과
        </button>
        <button onClick={() => setchange(change + 1)}>           
         오렌지
        </button>
        <button onClick={() => setchange(change + 1)}>           
         바나나
        </button>
      </div>
    );
  }
