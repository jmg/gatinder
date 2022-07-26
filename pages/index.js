import Card from "../components/card"
import { useState } from "react"
import Image from "next/image";

export default function Home() {

  let animals = [{
      name: "Vitto",
      sex: "macho",
      subtitle: "desparasitado",
      age: "5 Meses",
      desc: "Autoproclamado el gato mas gede 🤣💖",
      desc2: "Trepador, hipermimoso, ronronero.",
      image: "https://instagram.faep4-3.fna.fbcdn.net/v/t51.2885-15/286421712_5191384230949107_5447797788652297604_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.faep4-3.fna.fbcdn.net&_nc_cat=103&_nc_ohc=ISm_FoOyJUwAX9xaUQd&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg1NTc3MzkwNDkzMDg1NDA5NQ%3D%3D.2-ccb7-5&oh=00_AT97yXRMPa9rGieSey0sdL-Su1hY8ptinsx62nG6SHi9Bg&oe=62E6540B&_nc_sid=30a2ef"
  },
  {
    name: "Santana",
    sex: "Hembra",
    subtitle: "desparasitado",
    age: "2 Meses",
    desc: "La mas jueguetona 🙌 💓",
    desc2: "Busca una familia con mucha energía 🌟",
    image: "https://instagram.faep4-3.fna.fbcdn.net/v/t51.2885-15/275261067_1417759962014739_4974578324050560395_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.faep4-3.fna.fbcdn.net&_nc_cat=103&_nc_ohc=5EEsAPTGFScAX_i-DZQ&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjc4ODMwNDQwOTc5ODk2NTM3Ng%3D%3D.2-ccb7-5&oh=00_AT9Rwc03-AguuaTxAPWie0YEC89LQR4gBhi6idd2y5yM6A&oe=62E7E7B5&_nc_sid=30a2ef"
  },
  {
    name: "Blas",
    sex: "macho",
    subtitle: "desparasitado",
    age: "3 Meses",
    desc: "Un peque lleno de energía ⚡",
    desc2: "Hiper juguetón, inquieto, mimoso 🧡",
    image: "https://instagram.faep4-2.fna.fbcdn.net/v/t51.2885-15/289442309_743498513766220_3475808470969604554_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.faep4-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=BeQ7_3gIEpoAX8nb5yC&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2NTY4MzEyNzY3MjA3NzExOQ%3D%3D.2-ccb7-5&oh=00_AT9_wUUabKooir6bGnKzb-sdjzxTHPgxNCaAswTSw-Wkxw&oe=62E6EE49&_nc_sid=30a2ef"
  },
  {
    name: "Gaston(cito)",
    sex: "macho",
    subtitle: "desparasitado",
    age: "2 Meses",
    desc: "Solo disponible en talle XXS 👌",
    desc2: "La pulga mas dulce 🍬",
    image: "https://instagram.faep4-3.fna.fbcdn.net/v/t51.2885-15/288307992_736174480896690_947793976839798896_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.faep4-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=4ecn970FsFQAX8JYgpz&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2MzAxNzA1MjI0MTI4NDI4Mw%3D%3D.2-ccb7-5&oh=00_AT-VjkfrVsmnrB60oiL-0IaS1HLiGrNWTLvM2pMUeWRQ5w&oe=62E6C7CD&_nc_sid=30a2ef"
  }
  ]

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
  }

  const nextAnimal = () => {

      changeAnimal(1)
  }

  const prevAnimal = () => {

      changeAnimal(-1)
  }

  return (

    <div className="container py-12 md:p-12 mx-auto w-100" style={{minWidth: 600, minHeight: 600}}>

        <div className="mt-4 mb-14 flex justify-center">
        <Image
          className="rounded-full"
          height={100}
          width={100}
          src="https://instagram.faep4-3.fna.fbcdn.net/v/t51.2885-19/286644786_1632660317117622_604458887033610174_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.faep4-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=IKdZdrOtw3QAX9TLW1T&edm=ANmP7GQBAAAA&ccb=7-5&oh=00_AT-OCNY4bYlRI57qK8otjEq4IvqUyURJvGTupPxoRlmQsQ&oe=62E6C34C&_nc_sid=276363"
          ></Image>
        </div>

        { animals.length > 0 ?
        <div>
          <Card animal={animals[currentIdx]} nextAnimal={nextAnimal} prevAnimal={prevAnimal}></Card>
        </div>
        : <div className="text-3xl text-white flex justify-center">No hay animales por ahora 🐱</div>}
    </div>
  )
}