import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';
import { useRoom } from '../../components/hooks/useRoom';
import { database } from '../../services/firebase';

//import './styles.scss';

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  // const { user } = useAuth();

  const params = useParams<RoomParams>();
  const roomId = params.id;

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Confirm the exclusion of this question?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  const { title, questions } = useRoom(roomId);

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="LetMeask" />
          <div>
            <RoomCode code={roomId} />
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
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remove Question" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}
// algoritmo de reconciliação
