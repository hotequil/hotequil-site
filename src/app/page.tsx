import Link from 'next/link'
import Image from 'next/image'
import { description, title } from '@/app/constants'

export default function App() {
  return (
    <main className="flex flex-col sm:flex-row w-full h-full p-8 pt-8 sm:pt-24 gap-4 sm:gap-6 max-w-5xl mx-auto justify-center">
      <Image
        src="/images/hotequil.png"
        alt="Hotequil photo"
        width={512}
        height={512}
        priority
        className="w-[156px] h-[156px] select-none pointer-events-none"
      />

      <div className="flex flex-col gap-y-4 sm:gap-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>

        <p className="leading-4 text-justify text-sm sm:text-base">{description}</p>

        <ul className="flex flex-wrap gap-2 text-sm sm:text-base leading-4">
          <li>
            <Link
              href="mailto:hotequil@protonmail.com"
              target="_blank"
              prefetch={true}
              className="underline text-grey hover:text-blue focus:text-blue"
            >
              Email
            </Link>
          </li>
          <li>
            <Link
              href="/docs/curriculum.pdf"
              target="_blank"
              prefetch={true}
              className="underline text-grey hover:text-blue focus:text-blue"
            >
              Curriculum
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/joao-paulo-hotequil"
              target="_blank"
              prefetch={true}
              className="underline text-grey hover:text-blue focus:text-blue"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/hotequil"
              target="_blank"
              prefetch={true}
              className="underline text-grey hover:text-blue focus:text-blue"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="https://odysee.com/@hotequil"
              target="_blank"
              prefetch={true}
              className="underline text-grey hover:text-blue focus:text-blue"
            >
              Odysee
            </Link>
          </li>
        </ul>
      </div>
    </main>
  )
}
