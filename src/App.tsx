import { Room } from './components/Room';
import { Home } from './pages/home/Home';
import { NewRoom } from './pages/newRoom/NewRoom';
import { AdminRoom } from './pages/adminRoom/AdminRoom';
import { AuthContextProvider } from './contexts/AuthContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
