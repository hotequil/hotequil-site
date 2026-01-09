import Image from 'next/image'
import { description, title } from '@/app/constants'
import { Anchor } from '@/app/components/Anchor'

export default function App() {
  return (
    <main className="flex flex-col sm:flex-row w-full h-full p-8 pt-8 sm:pt-24 gap-4 sm:gap-6 max-w-5xl mx-auto justify-center">
      <Image
        src="/images/hotequil.png"
        alt="Hotequil photo"
        width={512}
        height={512}
        priority
        className="w-38 h-38 select-none pointer-events-none"
      />

      <div className="flex flex-col gap-y-4 sm:gap-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>

        <p className="leading-4 text-justify text-sm sm:text-base">{description}</p>

        <ul className="flex flex-wrap gap-2 text-sm sm:text-base leading-4">
          <li>
            <Anchor href="mailto:hotequil@protonmail.com">Email</Anchor>
          </li>
          <li>
            <Anchor href="/docs/curriculum.pdf">Curriculum</Anchor>
          </li>
          <li>
            <Anchor href="https://www.linkedin.com/in/joao-paulo-hotequil">LinkedIn</Anchor>
          </li>
          <li>
            <Anchor href="https://github.com/hotequil">GitHub</Anchor>
          </li>
          <li>
            <Anchor href="https://odysee.com/@hotequil">Odysee</Anchor>
          </li>
        </ul>
      </div>
    </main>
  )
}
