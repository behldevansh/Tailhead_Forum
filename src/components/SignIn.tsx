import { Icons } from '@/components/Icons'
import UserAuthForm from '@/components/UserAuthForm'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw,faUser } from '@fortawesome/free-solid-svg-icons'

const SignIn = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>
        {/* <Icons.logo className='mx-auto h-6 w-6' /> */}
        <FontAwesomeIcon icon={faPaw} className='mx-auto h-6 w-6'/>
        <h1 className='text-2xl font-semibold tracking-tight'>Welcome To Tailhead</h1>
        <p className='text-sm max-w-xs mx-auto'>
          By continuing, you are setting up a Tailhead account.
        </p>
      </div>
      <UserAuthForm />
      <p className='px-8 text-center text-sm text-muted-foreground'>
        New to Tailhead?{' '}
        <Link
          href='/sign-up'
          className='hover:text-brand text-sm underline underline-offset-4'>
          Sign Up
        </Link>
      </p>
    </div>
  )
}

export default SignIn
