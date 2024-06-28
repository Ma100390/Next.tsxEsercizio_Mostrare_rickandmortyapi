import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Homepage() {

  return (
    <>
      <a href="/characters">Vai alla pagina personaggi</a>
    </>
  )
}
