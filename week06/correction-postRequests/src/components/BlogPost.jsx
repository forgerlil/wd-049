const BlogPost = ({ title, body }) => {
  return (
    <div className='blogPost'>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
};

export default BlogPost;
