import { ArticleCard } from "@/components/ArticleCard";
import rootStyles from "@/styles/root.module.css";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

// posts will be populated at build time by getStaticProps()
export default function Blog({ posts }: { posts: Array<Post> }) {
  return (
    <>
      <main className={rootStyles.main}>
        <h1 className="mb-[60px] text-5xl font-medium">Blog</h1>
        <ul className="grid grid-cols-3 gap-6">
          {posts.slice(0, 9).map((post) => (
            <li key={post.id} className="h-full">
              <ArticleCard
                thumbnail=""
                title={post.title}
                description={post.body}
                link=""
                tag=""
                user={{
                  avatar: "",
                  name: "",
                }}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
