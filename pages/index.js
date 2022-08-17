import { createElement, useState } from "react"
import Image from "next/image"
import Head from "next/head"
import API_URL from "../settings"
import Card from "../components/Card"
import Carousel from "react-grid-carousel"

export default function Home({ animals }) {

  const [showMore, setShowMore] = useState(false)
  const [currentIdx, setCurrentIndex] = useState(0)

  const changeAnimal = (offset) => {

      if (offset === 1 && currentIdx === animals.length - 1) {
          currentIdx = 0
      } else if (offset === -1 && currentIdx === 0) {
          currentIdx = animals.length - 1
      } else {
          currentIdx = currentIdx + offset
      }
      setCurrentIndex(currentIdx)
      setShowMore(false)
  }

  const nextAnimal = () => {

      changeAnimal(1)
  }

  const prevAnimal = () => {

      changeAnimal(-1)
  }

  const renderHTML = (rawHTML) => createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

  const animal = animals[currentIdx]

  return (<div>

    <Head>
      <title>Gatinder</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Gatinder es una aplicación que te ayuda a encontrar el gato ideal." />
    </Head>

    <div className="container pt-8 max-w-4xl mx-auto w-100" style={{minWidth: 600, minHeight: 600}}>

      <header className="mb-8 flex justify-center">
          <Image
            className="rounded-full"
            height={100}
            width={100}
            src="/gatimanada_logo.jpg"
            alt="Gatimanada logo"
          ></Image>
      </header>

      <main className="m-auto">
        {animals.length > 0 ?
          <div>
            <Carousel gap={0} mobileBreakpoint={0} key={currentIdx}>
              {animal.images.map((image, idx) => {
                return <Carousel.Item key={idx}>
                  <Card animal={animal}
                    image={image}
                    nextAnimal={nextAnimal}
                    prevAnimal={prevAnimal}>
                  </Card>
                </Carousel.Item>
              })}
            </Carousel>

            <div className="mx-auto p-4 md:p-0 pb-0 py-2 mt-2 md:mt-4 text-white text-justify md:text-lg text-xl" style={{ maxWidth: 600 }}>
              <div className={showMore ? "" : "line-clamp-6"}>
                {renderHTML(animal.long_description)}
              </div>

              {!showMore ?
              <button onClick={() => setShowMore(!showMore)} className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded md:text-lg text-xl">
                Mostrar más
              </button>
              : ""}
            </div>

          </div>
          :
          <div className="text-3xl mt-72 text-white flex justify-center">No hay animales por ahora 🐱</div>
        }
      </main>

    </div>

    {animals.length > 0 ?
    <footer className="flex justify-center bg-slate-900 text-white p-4 mt-6" style={{minWidth: 600}}>
    <p>
      {new Date().getFullYear()} Gatinder. Made with <span className="text-red-500">❤</span> by Cat lovers.
    </p>
    </footer>
    : ""}

    </div>
  )
}

export async function getStaticProps(context) {

  const resp = await fetch(API_URL + "/animals/?format=json")
  const animals = await resp.json()

  return {
    props: {animals},
  }
}