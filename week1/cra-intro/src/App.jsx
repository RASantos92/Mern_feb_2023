import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <Counter title={"Bugs in the code"}/>
      <Counter step={2} start={2} title={"increment by 2"}/>
      <Counter step={-5} start={5} title={"decrement by x"}/>
    </>
  );
}

export default App;
