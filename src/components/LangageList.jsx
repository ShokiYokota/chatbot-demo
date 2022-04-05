



const LangageList = ({langs})=>{
    return(
        langs.map((lang,index)=>{
        return <div key={index.toString()}>{lang}</div>
         })
    )
}

export default LangageList;