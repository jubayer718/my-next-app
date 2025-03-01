

async function getSinglePost(id) {
   
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = res.json();
  return data
}
const page = async ({ params }) => {
  const id = await params.id;
  const singleData = await getSinglePost(id);
  return (
    <div className="my-12 text-center ">
      <p>UserID: {singleData.userId }</p>
      <h1 className="text-3xl font-bold">Title: {singleData.title }</h1>
      <p className="font-semibold">Body: {singleData.body }</p>
     
    </div>
  );
};

export default page;