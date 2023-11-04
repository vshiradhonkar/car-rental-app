import Navbar from './components/Navbar';
import "../src/dist/styles.css";
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  // document.body.style.overflowX = 'hidden';//to hide the horizontal scroll bar in web page
  return (
    <div  className="App">
        <Navbar />
        <AnimatedRoutes />
    </div>
  );
}

export default App;