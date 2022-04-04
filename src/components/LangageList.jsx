const Langage = ["Java","PHP","React","Go"];




const LangageList = (props)=>{
    return(
        Langage.map((lang,index)=>{
        return <div key={index.toString()}>{lang}</div>
         })
    )
}

export default LangageList;