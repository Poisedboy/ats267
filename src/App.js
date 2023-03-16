import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Navbar from './components/NavBar';
import Root from './routes/root';

function App() {
  const [isBackground, setIsBackground] = useState(false);

  return (
    <div style={isBackground ? { backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,1) 0%, rgba(22,255,193,1) 100%)'} : null}>
      <Navbar toggleBg={setIsBackground} />
      <Root />
      <Modal />
    </div>
  );
}

export default App;
