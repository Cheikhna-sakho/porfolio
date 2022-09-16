import './App.css';
import Projet from './components/project/Project';
import Home from './components/home/Home';
import About from './components/about/About';
import gsap from 'gsap';
import { useEffect } from 'react';
import MediaSocieaux from './components/medias/MediaSocieaux';

function App() {
  useEffect(() => {
    gsap.fromTo('.home-top', { opacity: 0, y: -15,zIndex:-1 }, { opacity: 1, duration: 4, y: 0,zIndex:1 })
    gsap.fromTo('.home-content', { opacity: 0, x: "80%" }, { opacity: 1, duration: 3, x: 0 })
  }, []);
  return (
    <div className="App">
      <MediaSocieaux/>
      <Home />
      <main>
        <Projet />
        <About />
      </main>
    </div>
  );
}

export default App;
