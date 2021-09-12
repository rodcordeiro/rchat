import React from 'react';
import './style.css';

import { Room } from '../../Components/Rooms'

import Header from '../../Components/header';
import { User } from '../../Components/Users/UserComponent';

import { Message } from '../../Components/Messages';

function Chat() {
  let dia = new Date().toISOString();
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
  ],
  users = [
    { 
      id: 0,
      username: 'admin',
      picture:"https://rodcordeiro.github.io/shares/img/GrimReaper.png"
    },{ 
      id: 1,
      username: 'rodcordeiro',
      picture:"https://rodcordeiro.github.io/shares/img/GrimReaper.png"
    },{ 
      id: 2,
      username: 'teste',
      picture:"https://rodcordeiro.github.io/shares/img/GrimReaper.png"
    },{ 
      id: 3,
      username: 'gabi',
      picture:"https://rodcordeiro.github.io/shares/img/GrimReaper.png"
    },{ 
      id: 4,
      username: 'teste',
      picture:"https://rodcordeiro.github.io/shares/img/GrimReaper.png"
    },
  ],
  
  message={
    date:dia,
    author:{ 
      id: '4',
      username: 'RodCordeiro'
    },
    text: "teste",
    room: "Teste",
  }

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
        <Message
          date={message.date}
          text={message.text}
          author={message.author}
          room={message.room}
          isAuthor={true}
        />
        <Message
          date={message.date}
          text={message.text}
          author={message.author}
          room={message.room}
          isAuthor={false}
        />
        <Message
          date={message.date}
          text={message.text}
          author={message.author}
          room={message.room}
          isAuthor={false}
        />
        <Message
          date={message.date}
          text={message.text}
          author={message.author}
          room={message.room}
          isAuthor={false}
        />
        <Message
          date={message.date}
          text={message.text}
          author={message.author}
          room={message.room}
          isAuthor={true}
        />
        <Message
          date={message.date}
          text={message.text}
          author={message.author}
          room={message.room}
          isAuthor={false}
        />
        <Message
          date={message.date}
          text={message.text}
          author={message.author}
          room={message.room}
          isAuthor={true}
        />
        <Message
          date={message.date}
          text={message.text}
          author={message.author}
          room={message.room}
          isAuthor={false}
        />
        <Message
          date={message.date}
          text={message.text}
          author={message.author}
          room={message.room}
          isAuthor={true}
        />
        <Message
          date={message.date}
          text={message.text}
          author={message.author}
          room={message.room}
          isAuthor={true}
        />
      </section>
      <aside id="users">
        {
          users.map((user: any)=>(
            <User 
              key={user.id}
              username={user.username}
              picture={user.picture}
            />
          ))
        }
      </aside>
      
    </div>
  );
}

export default Chat;
