'use server';
import * as auth from '@/auth';

export async function signIn() {
  // action logic here
  return auth.signIn('github');
}

