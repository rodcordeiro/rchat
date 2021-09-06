import React from 'react';
import './style.css';

import { Room } from '../../Components/Rooms/RoomIcon'

import Header from '../../Components/header';

function Chat() {
  const rooms = [
    {
      id: 0,
      name: "Teste",
      picture:"https://rodcordeiro.github.io/shares/img/baracktocat.jpg"
    },{
      id: 1,
      name: "DEV",
      picture:"https://rodcordeiro.github.io/shares/img/codigo3.jpeg"
    },{
      id: 2,
      name: "Rod",
      picture:"https://rodcordeiro.github.io/shares/img/animeLandscape.jpg"
    },{
      id: 3,
      name: "Uma Room com o nome muito grande",
      picture:"https://rodcordeiro.github.io/shares/img/GrimReaper.png"
    },{
      id: 4,
      name: "Headquarter",
      picture:"https://rodcordeiro.github.io/shares/img/baracktocat.jpg"
    },{
      id: 5,
      name: "Chat",
      picture:"https://rodcordeiro.github.io/shares/img/josh-redd-u_RiRTA_TtY-unsplash.jpg"
    },
  ]

  return (
    <div className="chat">
      <Header 
        picture="https://rodcordeiro.github.io/shares/img/FB_IMG_1603190450542.jpg"
        name="Rod"
      />
      <aside id="rooms">
        {
          rooms.map(room=>(
                <Room 
                  key={room.id}
                  picture={room.picture}
                  name={room.name} 
                />              
            )
          )
        }
      </aside>
      <section id="messages">
        
      </section>
      <aside id="users">
      </aside>
      
    </div>
  );
}

export default Chat;
