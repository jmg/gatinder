import API_URL from "../settings"
import Card from "../components/Card"
import { useEffect, useState } from "react"
import Image from "next/image"
import Carousel from 'react-grid-carousel'

import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {

  const [animals, setAnimals] = useState([])
  const [loading, setLoading] = useState(true)
  const [showMore, setShowMore] = useState(false)
  const [currentIdx, setCurrentIndex] = useState(0)

  useEffect(() => {

    fetch(API_URL + "/animals/?format=json").then((resp) => resp.json()).then((animals) => {
      setAnimals(animals)
      setLoading(false)
    }).catch(rejected => {
      console.log(rejected);
    })

  }, [])

  const changeAnimal = (offset) => {

      if (offset === 1 && currentIdx === animals.length - 1) {
          currentIdx = 0
      } else if (offset === -1 && currentIdx === 0) {
          currentIdx = animals.length - 1
      } else {
          currentIdx = currentIdx + offset
      }
      setCurrentIndex(currentIdx)
  }

  const nextAnimal = () => {

      changeAnimal(1)
  }

  const prevAnimal = () => {

      changeAnimal(-1)
  }

  const animal = animals[currentIdx]

  return (
    <div className="container py-8 max-w-4xl mx-auto w-100" style={{minWidth: 600, minHeight: 600}}>

      <div className="mb-8 flex justify-center">
          <Image
            className="rounded-full"
            height={100}
            width={100}
            src="/gatimanada_logo.jpg"
          ></Image>
      </div>

      {loading ?
        <div className="flex justify-center mt-72 text-white">
          <FontAwesomeIcon icon={faSpinner} spin size="4x" />
        </div>
        :
        <div className="m-auto">
          {animals.length > 0 ?
            <div>
              <Carousel gap={0} mobileBreakpoint={0} key={currentIdx}>
                {animal.images.map((image, idx) => {
                  return <Carousel.Item>
                    <Card animal={animal}
                      image={image}
                      nextAnimal={nextAnimal}
                      prevAnimal={prevAnimal}>
                    </Card>
                  </Carousel.Item>
                })}
              </Carousel>

              <div className="mx-auto p-4 md:p-0 pb-0 py-2 mt-2 md:mt-4 text-white text-justify text-lg" style={{ maxWidth: 600 }}>
                <div className={showMore ? "" : "line-clamp-6"}>
                  {animal.long_description}
                </div>

                <button onClick={() => setShowMore(!showMore)} className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded text-xl">
                  Mostrar {!showMore ? "más" : "menos"}
                </button>
              </div>

            </div>
            :
            <div className="text-3xl mt-72 text-white flex justify-center">No hay animales por ahora 🐱</div>
          }
        </div>
      }
    </div>
  )
}