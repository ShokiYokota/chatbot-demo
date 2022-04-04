import './App.css';
import {Article,LangageList,Form} from './components/index';
import {useState} from 'react'

const lang = '';

function App() {
  const [state,setState]  = useState(false)
  const changeState =()=>{
    setState (prevState => !prevState)
  }
  return (
    <div>
      <header>
      知っている言語の一覧：<LangageList lang={lang}/>
      <Form />
      </header>
      <hr />
      <h1>prevState:今は{state ? "ON🔥":"OFF☔"}です</h1>
      <button onClick={changeState}>やる気スイッチ</button>
      <Article
        title={"Reactのお勉強"}
        subtitle={"勉強内容"}
        content1={"prevState"}
        content2={"配列と繰り返し"}
        content3={"リストの追加"}
      />
      
    </div>
  );
}

export default App;
