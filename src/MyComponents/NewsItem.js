
export default function NewsItem(props) {
    return (
        <div className="card me-2 mt-2 w-25 flex-grow-1 position-relative">
                <div className='newsSource'><span>{props.element.source.name}</span></div>
                <img src={props.element.urlToImage !== null ? props.element.urlToImage : "https://cdn.mos.cms.futurecdn.net/TkH6P2KSxmiEkaFD74p86b-1920-80.jpg"} className="card-img-top" alt="Some health related pic" style={{ height: "250px", objectFit: "cover", objectPosition: "top" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.element.title}</h5>
                    <p className="card-text">{!props.element.description?"":props.element.description.substr(0,200)+'... '}</p>
                    <p className="card-text"><small className="text-muted">By - {!props.element.author ? "Unknown" : props.element.author}, at - {new Date(props.element.publishedAt).toGMTString()}</small></p>
                    <a rel="noreferrer" href={props.element.url} target="_blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
    )
}
