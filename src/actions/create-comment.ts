'use server';

export async function createComment(postId: string, content: string) {

// TO DO: revalidate the post show page after comment creation
  // Simulate comment creation logic
  const commentId = Math.random().toString(36).substr(2, 9);
  return { commentId, postId, content };
}