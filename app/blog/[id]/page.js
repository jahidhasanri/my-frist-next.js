export default async function BlogPage({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();
  
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-gray-600">{post.body}</p>
      </div>
    );
  }
  