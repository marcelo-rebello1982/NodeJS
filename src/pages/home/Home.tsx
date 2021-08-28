import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button';
import { database } from '../../services/firebase';
import { useAuth } from '../../components/hooks/useAuth';
import googleIconImg from '../../assets/images/google-icon.svg';
import illustrationImg from '../../assets/images/illustration.svg';

import '../../styles/auth.scss';

export function Home() {
  const history = useHistory();
  const { user, signInwithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInwithGoogle();
      // Await only and run with success response
    }
    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }
    const roomRef = await database.ref(`rooms/${roomCode}`).get();
    if (!roomRef.exists()) {
      alert('Room not found.. ou does no exist..sei lá');
      return;
    }
    history.push(`/rooms/${roomCode}`);
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Symbolizing questions and answers" />
        <strong>Create rooms Q&amp;A at real-time</strong>
        <p>Take the doubts in real time</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Google Logo" />
            Create your room with Google
          </button>
          <div className="separator">or enter one room</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Enter the room code"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Enter the room</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
