import './App.css';
import Article from './components/Article';
import {useState} from 'react'


function App() {
  const [state,setState]  = useState(false)
  const changeState =()=>{
    setState (prevState => !prevState)
  }
  return (
    <div>
      今は{state ? "ON":"OFF"}です
      <Article
        title={"タイトル表示"}
        content={"内容表示です"}
      />
      <button onClick={changeState}>ボタン</button>
    </div>
  );
}

export default App;
