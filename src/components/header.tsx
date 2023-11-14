import Link from 'next/link'
import Image from 'next/image'
import Cart from './cart'
import { SearchForm } from './search-form'

export function Header() {
  return (
    <div className="flex items-center align-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <SearchForm />
      </div>
      <div className="flex items-center gap-4">
        <Cart />

        <div className="w-px h-4 bg-zinc-400" />

        <Link href="/" className="flex items-center gap-2 houver:underline">
          <span className="text-sm">Account</span>
          <Image
            alt=""
            src="https://github.com/HenriqueFSouza.png"
            className="rounded-full h-6 w-6"
            width={24}
            // As propriedades width e height vão converter a imagem para um tamanho menor, para que a imagem não fique muito pesada.
            height={24}
          />
        </Link>
      </div>
    </div>
  )
}
