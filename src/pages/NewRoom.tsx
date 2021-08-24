import '../styles/auth.scss'
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import illustrationImg from '../assets/images/illustration.svg'

export function NewRoom() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustracão simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as duvidas em tempo real * alterar stilo</p>
                </aside>
                <main>
                    <div className = "main-content">
                        <img src={logoImg} alt="letmeask" />
                        <h2>Criar uma nova sala</h2>
                        <form>
                            <input type="text" placeholder= "digite o nome da sala"
                            />
                            <Button type ="submit">
                               Criar Sala
                            </Button>
                        </form>
                        <p>
                          quer entrar em uma sala exitente ? <a href="#">clique aqui</a>
                        </p>
                        </div>
                </main>
        </div>
    )
}