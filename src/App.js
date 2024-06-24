import './App.css';
import Routes from './Routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  return (
    <div>
      <Routes/>
    </div>
  );
}

AOS.init({duration:1000,delay:100,});
export default App;