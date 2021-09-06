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
      picture:"https://rodcordeiro.github.io/shares/img/baracktocat.jpg"
    },{
      id: 2,
      name: "Rod",
      picture:"https://rodcordeiro.github.io/shares/img/baracktocat.jpg"
    },{
      id: 3,
      name: "Teste",
      picture:"https://rodcordeiro.github.io/shares/img/baracktocat.jpg"
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
              <div key={room.id}>
                <Room 
                picture={room.picture}
                name={room.name} 
                />
              </div>
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
