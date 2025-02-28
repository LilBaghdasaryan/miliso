"use client";
import React, { useActionState } from 'react'
import Form from 'next/form'
import { Loader2 } from 'lucide-react'

const initialState = {
  message: ''
}
type SignUpProps = {
  action: (prevState: any, formData: FormData) => Promise<{message: string} | undefined>  
}


function SignUp({action}: SignUpProps) {
    const [state, formAction, isPending] = useActionState(action, initialState);
  return (
    <Form action={formAction} className='max-w-md mx-auto my-16 bg-white rounded-lg shadow-md p-8'>
        <h1 className='text-2xl font-bold text-center mb-2'>
            Join the DEAL revolution!
        </h1>
        <p className='text-center text-sm text-rose-600 font-semibold mb-2'>🔥 LIMITED TIME OFFER 🔥</p>
        <p className='text-center text-sm text-gray-600 font-semibold mb-6'>
            Sign  up now and get 90% off your first order!
        </p>
        <div className='space-y-6'>
            <div className='space-y-2'>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                    Email address
                </label>
                <input 
                    type='email'
                    name='email'
                    id='email'
                    autoComplete='email'
                    required
                    placeholder='Enter your email address'
                    className='w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-colors'
                />
            </div>
            <div>
                <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                    Password
                </label>
                <input 
                    type='password'
                    name='password'
                    id='password'
                    autoComplete='new-password'
                    required
                    placeholder='Create a password'
                    className='w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-colors'
                />
            </div>
            <div className='text-center'>
                <p className='text-xs text-gray-500 mb-2'>⚡️ Only 127 welcome bonus packages remaining!</p>
                <p className='text-xs text-gray-500 mb-2'>🕒 Offer expires in: 13:45</p>
            </div>
            <button
                type='submit'
                disabled={isPending}
                className={`w-full bg-rose-600 text-white font-medium py-3 rounded-md hover:bg-rose-700 transition-colors flex justify-center items-center gap-2 ${isPending ? 'cursor-not-allowed' : ''}`}
                >
                    {isPending ? 
                    (<React.Fragment>
                        <Loader2 className='h-4 w-4 animate-spin' />
                        CREATING ACCOUNT...
                    </React.Fragment>)
                    : 'CREATE ACCOUNT'}
            </button>
            {state?.message && state.message.length > 0 && (
                    <p className='text-center text-sm text-red-600'>
                        {state.message}
                    </p>
                )}

        </div>
    </Form>
  )
}

export default SignUp