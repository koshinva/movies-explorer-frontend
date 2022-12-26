import AboutProject from '../Main/AboutProject/AboutProject';
import Promo from '../Main/Promo/Promo';
import Techs from '../Main/Techs/Techs';
import './App.css';

function App() {
  return (
    <div className="app">
      <Promo />
      <AboutProject />
      <Techs />
    </div>
  );
}

export default App;
