import './style/App.scss';
import Backside from './components/Main/Card/Backside/Backside';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Card from './components/Main/Card/Card';
import Word from './components/Main/Card/Word/Word';

function App() {
  return (
    <div className="App">
<Header/>
<Main>
  <Card>
    <Word/> 
    <Backside/>
  </Card>
</Main>
<Footer/>
    </div>
  );
}

export default App;
