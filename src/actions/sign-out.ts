'use server';
import * as auth from '@/auth';



export async function signOut() {
  // action logic here
  return auth.signOut();
}