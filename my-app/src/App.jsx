import './App.css';
import Backside from './components/Backside';
import Footer from './components/Footer';
import Frontside from './components/Frontside';
import Header from './components/Header';
import Main from './components/Main';
import Tema from './components/Tema';

function App() {
  return (
    <div className="App">
<Header>
  <Tema></Tema>
</Header>
<Main>
  <Card>
    <Frontside>
      <Word></Word>
    </Frontside>
    <Backside></Backside>
  </Card>
</Main>
<Footer></Footer>
    </div>
  );
}

export default App;
