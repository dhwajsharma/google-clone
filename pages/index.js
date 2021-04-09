import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0yrUl8sTPilwjvwq4dTho8duuzk7GIVHEWWKN5PYc7h-h7zW84Nc4bWv3Ts62S7KOvyM&usqp=CAU" />
        </div>
      </header>

      {/* Body */}


      {/* Footer */}
    </div>
  )
}
