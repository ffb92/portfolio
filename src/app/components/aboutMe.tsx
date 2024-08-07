import React from 'react'
import Image from 'next/image'

const aboutMe = () => {
  return (
    <section
    id="about-me"
    className="flex flex-col md:flex-row justify-center content-center"
  >
    <div>
      <div className="h-3 w-60 bg-zinc-300 rounded-2xl m-5" />
      <div className="py-10">
        <Image
          src="/about_me.png"
          alt="about_me_picture"
          width={600}
          height={500}
          className="rounded-2xl"
        />
      </div>
    </div>
    <div className="px-0 md:px-10">
      <h2 className="text-4xl md:text-6xl">Hello 👋</h2>
      <p className="text-lg md:text-xl py-7">
        I am a web developer who was born and raised near Cologne. Since I was a child, I
        have been passionate about technology and computer science. Ever since I came into
        contact with coding, I have been very enthusiastic. I like to try out new things,
        libraries and frameworks to make great software!
      </p>
      <p className="text-lg md:text-xl py-2">
        Apart from programming, I am an enthusiastic gamer. From almost all Square Enix
        games, like Kingdom Hearts or Final Fantasy, which accompanied my youth, to Baldurs
        Gate and fantastic titles from Nintendo, such as Zelda or Super Smash Bros. When I
        am not at the computer, I spend a lot of time on the football field as an assistant
        coach for a local club or cheer for my favorite team, 1. FC Köln.
      </p>
      <p className="text-lg md:text-xl py-2">
        Fun fact: I have three cats who love to keep me company while I code.
      </p>
    </div>
  </section>
  )
}

export default aboutMe