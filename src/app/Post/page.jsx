import Link from "next/link";


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
        posts.map(post =>
          <div key={post.id} className="border p-4 rounded-xl">
            <p> UserID: { post.userId}</p>
            <p> ID: { post.id}</p>
            <h3>Title: { post.title}</h3>  
            <p>Body: {post.body}</p>  
            <Link href={`/Post/${post.id}`} className="border m-3">Details</Link>
          
          </div>
        
        )
     }
    </div>
  );
};

export default Post;