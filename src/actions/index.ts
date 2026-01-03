'use server';
import * as auth from '@/auth';

export async function signIn() {
  // action logic here
  return auth.signIn('github');
}

export async function signOut() {
  // action logic here
  return auth.signOut();
}