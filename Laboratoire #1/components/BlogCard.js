function BlogCard(props)
{
    return <div className=" card col-lg-4 yeah">
                <img className="img-fluid" src="..\\style\\Image\\imageNotFound.png" alt=""/>
                <h2> {props.title} </h2>
                <p className="card-text"> {props.content.substr(0, 150)} </p>
                <button>
                    <a href={`http://127.0.0.1:5500/html/Blog.html?id=${props.id}`}>Voir Publication</a>
                </button>
            </div>;
}