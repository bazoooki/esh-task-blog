interface PostAuthor {
  name: string;
  role: string;
}
export interface Post{
  id: number;
  slug: string;
  title: string;
  author: PostAuthor;
  date: string;
  coverImage: string;
  content: string;
  excerpt: string;
}