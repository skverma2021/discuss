'use client';
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
    if (!session) { 
        return <div>Please sign in to view your profile.</div>;
    }

    return (
        <div>
            <h1>Profile</h1>
            <pre>{JSON.stringify(session.user, null, 2)}</pre>
        </div>
    );
}