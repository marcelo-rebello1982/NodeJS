import { useEffect, useState } from 'react';
import { database } from '../../services/firebase';

type FireBaseQUestions = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
  }
>;

type QuestionType = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
};

export function useRoom(roomId: string) {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    // return data off questions // once,one verificar melhor #
    roomRef.on('value', (room) => {
      const databaseRoom = room.val();
      const fireBaseQUestions: FireBaseQUestions = databaseRoom.questions ?? {};
      const parsedQuestions = Object.entries(fireBaseQUestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
          };
        }
      );
      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    });
  }, [roomId]); // roomID update o console log
  return { questions, title };
}
