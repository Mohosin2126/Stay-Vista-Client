import { useEffect } from "react";
import { useState } from "react";

const Rooms = () => {
 const [rooms,setRooms]=useState([])
 useEffect(()=>{
    fetch("../../../public/rooms.json")
    .then(res=>res.json())
    .then(data=>setRooms(data))
 },[])



    return (
        <div>
          <h1>{rooms.length}</h1>
        </div>
    );
};

export default Rooms;