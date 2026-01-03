import { Button } from "@nextui-org/react";
// import { div } from "framer-motion/client";
import * as actions from "@/actions";
import {auth} from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <form action={actions.signIn}>
        <Button type="submit" className="primary mt-4">Sign In</Button>
      </form>

      <form action={actions.signOut}>
        <Button type="submit" className="primary mt-4">Sign Out</Button>
      </form>
      {session?.user ? <div>{JSON.stringify(session.user)} </div> : <div>Not signed in</div>}
      <Profile />
    </div>

  );
}
