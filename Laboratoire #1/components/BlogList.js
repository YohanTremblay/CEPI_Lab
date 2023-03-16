function BlogList(props){
    let [blog, setBlog] = React.useState();
    React.useEffect(()=>{
        fetch('http://localhost:3000/Publication')
        .then(reponse => reponse.json())
        .then(json =>{
            let tab = json.map((element, index) =>
                {
                   return <BlogCard key={index} id={element.id} content={element.content} title={element.title}></BlogCard>
                })
           
            setBlog(tab);
    });
        },[])

    return blog;
}