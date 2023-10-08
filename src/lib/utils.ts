import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { formatDistanceToNowStrict } from 'date-fns'

import locale from 'date-fns/locale/en-US'


//function to merge tailwind classes with clsx
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


//setting up defaults for formatDistanceToNowStrict
const formatDistanceLocale = {
  lessThanXSeconds: 'just now',
  xSeconds: 'just now',
  halfAMinute: 'just now',
  lessThanXMinutes: '{{count}}m',
  xMinutes: '{{count}}m',
  aboutXHours: '{{count}}h',
  xHours: '{{count}}h',
  xDays: '{{count}}d',
  aboutXWeeks: '{{count}}w',
  xWeeks: '{{count}}w',
  aboutXMonths: '{{count}}m',
  xMonths: '{{count}}m',
  aboutXYears: '{{count}}y',
  xYears: '{{count}}y',
  overXYears: '{{count}}y',
  almostXYears: '{{count}}y',
}

function formatDistance(token: string, count: number, options?: any): string {
  options = options || {}

  const result = formatDistanceLocale[
    token as keyof typeof formatDistanceLocale
  ].replace('{{count}}', count.toString())

  if (options.addSuffix) {
    //used to show time of post
    if (options.comparison > 0) {
      return 'in ' + result
    } else {
      if (result === 'just now') return result
      return result + ' ago'
    }
  }

  return result
}


//function to format time to now
export function formatTimeToNow(date: Date): string {
  return formatDistanceToNowStrict(date, {
    //used to show time of post
    addSuffix: true,
    locale: {
      ...locale,
      formatDistance,
    },
  })
}
