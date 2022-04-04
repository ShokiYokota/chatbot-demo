import './App.css';
import {Article,LangageList} from './components/index';
import {useState} from 'react'

const lang = '';

function App() {
  const [state,setState]  = useState(false)
  const changeState =()=>{
    setState (prevState => !prevState)
  }
  return (
    <div>
      知っている言語の一覧：<LangageList lang={lang}/>
      <h1>prevState:今は{state ? "ON":"OFF"}です</h1>
      <Article
        title={"Reactのお勉強"}
        subtitle={"勉強内容"}
        content1={"prevState"}
        content2={"配列と繰り返し"}
        content3={"リストの追加"}
      />
      <button onClick={changeState}>ボタン</button>
    </div>
  );
}

export default App;
