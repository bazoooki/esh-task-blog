import posts from "@/db/posts.json";


export default function getPost (slug: string): any {
  const post = posts.find((post) => post.slug === slug);

  return post
}