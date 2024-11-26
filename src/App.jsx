import './App.css'
import Lenis from '@studio-freight/lenis';
import About from './components/About'
import Bento from './components/Bento'
import { TextParallaxContentExample } from './components/TextParallaxContent'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      smooth: true, // Enables smooth scrolling
      lerp: 0.1,    // Adjust for scroll damping (higher is slower)
    });

    // Animation loop to keep Lenis running
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Cleanup Lenis on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div > 
  <TextParallaxContentExample/>
  <div className='h-[450px]'></div>
  <About/>
  <div className='h-[450px]'></div>
  <Bento/>

    </div>
  )
}

export default App
