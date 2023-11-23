import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import Container from"../Shared/Container"
const Rooms = () => {
 const [rooms,setRooms]=useState([])
 useEffect(()=>{
    fetch("../../../public/rooms.json")
    .then(res=>res.json())
    .then(data=>setRooms(data))
 },[])



    return (


      <Container>
        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {
            rooms.map(room=><Card room={room} key={room._id}></Card>)
          }
        </div>
        </Container>
    );
};

export default Rooms;