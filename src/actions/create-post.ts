'use server';

export async function createPost(topicSlug: string, title: string, content: string) {

// TO DO: revalidate the topic show page after post creation
  // Simulate post creation logic
  const postId = Math.random().toString(36).substr(2, 9);
  return { postId, topicSlug, title, content };
}