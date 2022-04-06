import './App.css';
import {Article,LangageList,Form,Langage} from './components/index';
import {useState} from 'react'



function App() {
  const [state,setState]  = useState(false)
  const changeState =()=>{
    setState (prevState => !prevState)
  }
  const [langs,setLangs] = useState(Langage);
  const addLang = (lang) => {
    setLangs([...langs,lang]);
  }
  return (
    <div>
      <header>
      知っている言語の一覧：<LangageList langs={langs}/>
      <Form onAddLang={addLang}/>
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
        <p>あなたのいいところは優しさです<p>
      />
      
    </div>
  );
}

export default App;
