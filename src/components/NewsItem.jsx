import image from '../assets/news.jpg';

const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2" style={{maxWidth:"260px"}}>
    <img src={src?src:image} style={{height:"121px",width:"242px"}} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{title.slice(0,50) + '...'}</h5>
        <p className="card-text">{description?description.slice(0,80)+'....':`To Read more about this news, you can click to the Read More button`}</p>
        <a href={url} className="btn btn-primary">Read more</a>
    </div>
    </div>
  )
}

export default NewsItem
