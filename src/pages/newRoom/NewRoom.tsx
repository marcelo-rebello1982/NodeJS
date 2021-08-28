import { FormEvent, useState } from 'react';
import logoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button';
import { database } from '../../services/firebase';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../components/hooks/useAuth';
import illustrationImg from '../../assets/images/illustration.svg';

import '../../styles/auth.scss';

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    if (newRoom.trim() === '') {
      return;
    }
    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });
    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Symbolizing questions and answers" />
        <strong>Create rooms Q&amp;A at one real time</strong>
        <p>Take your doubts in real time</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />
          <h2>Create one new Room</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="room name"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Create new room</Button>
          </form>
          <p>
            Want to enter an existing room ? <Link to="/">Click here</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
