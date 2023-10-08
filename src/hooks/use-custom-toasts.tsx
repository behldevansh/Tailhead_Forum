import { buttonVariants } from '@/components/ui/Button'

import { toast } from '@/hooks/use-toast'
import Link from 'next/link'


//custom toast hook to check the error and display the toast
export const useCustomToasts = () => {
  const loginToast = () => {
    const { dismiss } = toast({
      title: 'Login required.',

      description: 'You need to be logged in to do that.',
      variant: 'destructive',



      //check login error and display toast
      action: (
        <Link
          onClick={() => dismiss()}
          href='/sign-in'
          className={buttonVariants({ variant: 'outline' })}>
          Login
        </Link>
      ),
    })
  }
  return { loginToast }
}
