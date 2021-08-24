import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';
import googleIconeImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss';
import { Button } from '../components/Button';


export function Home() {
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
                        <button className="create-room">
                            <img src={googleIconeImg} alt="Logo do google" />
                            Crie sua sala com o google
                        </button>
                        <div className= "separator">ou entre em uma sala</div>
                        <form>
                            <input type="text" placeholder= "digte o codigo da sala"
                            />
                            <Button type ="submit">
                                Entrar na sala
                            </Button>
                        </form>
                    </div>
                </main>
        </div>
    )
}