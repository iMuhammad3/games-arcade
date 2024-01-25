import React from 'react'
import Button from '../../components/Buttons/Button'
import { collection, setDoc } from 'firebase/firestore'
import { auth, db, googleProvider } from '../../config/firebase.config'
import { signInWithPopup } from 'firebase/auth'

export const Login = () => {

    const signIn = async () => {
        try{
            const collectionRef = collection(db, "users");
            const results = await signInWithPopup(auth, googleProvider);
            await setDoc(doc(collectionRef, results.user.uid),{
                displayName: results.user.displayName,
                photoURL: results.user.photoURL,
            })
        } catch (err){
            console.error(err);
        }
    }

  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col items-center gap-4 border rounded py-12 px-8'>
            <h1 className='text-3xl'>Welcome!</h1>
            <p className='text-lg'>
                Please sign in with google to continue
            </p>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    </div>
  )
}
