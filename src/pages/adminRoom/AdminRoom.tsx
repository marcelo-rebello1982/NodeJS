import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import logoImg from '../../assets/images/logo.svg';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';
// import { FormEvent, useEffect, useState } from 'react';
// import { useAuth } from '../../components/hooks/useAuth';
import { useRoom } from '../../components/hooks/useRoom';

//import './styles.scss';

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  // const { user } = useAuth();

  const params = useParams<RoomParams>();
  const roomID = params.id;

  const { title, questions } = useRoom(roomID);

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="LetMeask" />
          <div>
            <RoomCode code={roomID} />
            <Button isOutlined>Close room</Button>
          </div>
        </div>
      </header>
      <main className="content">
        <div className="room-title">
          <h1>Room {title}</h1>
          {questions.length > 0 && <span>{questions.length} Questions</span>}
        </div>
        <div className="qestion-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
// algoritmo de reconciliação
