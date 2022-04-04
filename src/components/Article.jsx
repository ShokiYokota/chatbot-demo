

const Article = (props) =>{
    return(
        <div>
            <h2>{props.title}</h2>
            <uli>
            <h4>{props.subtitle}</h4>
                <li>{props.content1}</li>
                <li>{props.content2}</li>
                <li>{props.content3}</li>
            </uli>
        </div>
    )
}

export default Article;