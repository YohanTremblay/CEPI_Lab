function Blog(props){
    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");

    return <div>
            <BlogDetails idBlog={id}/>
            <AddComment idBlog={id}/>
            <CommentList idBlog={id}/>
         </div>
}