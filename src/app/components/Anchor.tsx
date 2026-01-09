import Link from 'next/link'
import { ReactNode } from 'react'

type TProps = {
  href: string
  children: ReactNode
}

export const Anchor = (props: TProps) => (
  <Link
    href={props.href}
    target="_blank"
    prefetch={true}
    className="underline text-grey hover:text-blue focus:text-blue active:text-blue active:opacity-80 transition-all"
  >
    {props.children}
  </Link>
)
