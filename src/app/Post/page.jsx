

const gatePost =async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = res.json();
  return data;

};



const Post = async() => {

  const posts = await gatePost();
  

  return (
    <div className="grid grid-cols-3 gap-6 ">
      {
        posts.map(post => <p className="border p-4" key={post.id}>{ post.title}</p>)
     }
    </div>
  );
};

export default Post;