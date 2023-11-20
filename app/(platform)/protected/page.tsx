// import { currentUser, auth } from '@clerk/nextjs' // used in only server components

// "use client";
// import { useAuth, useUser } from '@clerk/nextjs' // used in client component

import React from 'react'
import { UserButton } from '@clerk/nextjs';

// const Protected = async() => { // we can't use async component in client side components

const Protected = () => {
    // const user = await currentUser(); // used in server component
    // const {userId} = auth(); // used in server component

    // const {userId} = useAuth(); // used in client component
    // const {user} = useUser(); // used in client component
  return (
    <div>
        {/* User: {user?.firstName}
        <br />
        UserId: {userId} */}
        <UserButton
            afterSignOutUrl="/"
        />
    </div>
  )
}

export default Protected