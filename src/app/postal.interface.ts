// each post has a title and a category
export interface Post {
  title: string;
  category: string;
}

export interface GroupPosts {
  category: string;
  posts: Post[];
}
