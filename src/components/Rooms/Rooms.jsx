import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Rooms = () => {
 const [rooms,setRooms]=useState([])
 useEffect(()=>{
    fetch("../../../public/rooms.json")
    .then(res=>res.json())
    .then(data=>setRooms(data))
 },[])



    return (
        <div>
          {
            rooms.map(room=><Card room={room} key={room._id}></Card>)
          }
        </div>
    );
};

export default Rooms;