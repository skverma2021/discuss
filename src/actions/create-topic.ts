'use server';

export async function createTopic(title: string, description: string) {

// TO DO: revalidate the Home Page after topic creation
  // Simulate topic creation logic
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  return { slug, title, description };
}