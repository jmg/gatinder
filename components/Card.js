import Image from "next/image";
import { faCheck, faCrosshairs, faTimes, faHeart, faRotateLeft, faCertificate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card({ animal, image, nextAnimal, prevAnimal }) {

    return <div className="relative mx-auto" style={{width: 600, height: 600}}>

        <Image
          src={image}
          alt={animal.name}
          layout="responsive"
          width={600}
          height={600}
        ></Image>

        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 text-white z-10">

            <div className="mb-2">
              <h2 className="text-5xl font-bold inline">{animal.name} </h2>
              <div className="text-4xl inline text-blue-600 relative bottom-1">
                <FontAwesomeIcon icon={faCertificate}/>
                <div className="relative text-sm fa-bold text-white inline right-6 bottom-1.5">
                  <FontAwesomeIcon icon={faCheck}/>
                </div>
              </div>
            </div>

            <div className="bg-white text-black p-1 px-2 w-fit rounded-md mix-blend-screen">
              <div className="text-l inline mr-1"><FontAwesomeIcon icon={faCrosshairs}/></div>
              <div className="mt-2 text-l uppercase inline">{animal.subtitle}</div>
            </div>

            <p className="mt-2 text-md uppercase">{animal.sex}, {animal.age}</p>

            <div className="mt-1 leading-5">
              <p className="text-md">{animal.description}</p>
              <p className="text-md">{animal.description_2}</p>
            </div>

            <div className="w-100 flex items-center">

              <div className="mt-4 mb-2 mx-auto gap-16 flex">

                <div onClick={nextAnimal} className="text-red-500 border-red-500 border-2 flex w-20 h-20 rounded-full items-center cursor-pointer">
                  <div className="text-5xl font-bold mx-auto"><FontAwesomeIcon icon={faTimes}/></div>
                </div>

                <div onClick={prevAnimal} className="text-yellow-500 border-yellow-500 border-2 flex w-16 h-16 rounded-full items-center relative top-2 cursor-pointer">
                  <div className="text-3xl font-bold mx-auto"><FontAwesomeIcon icon={faRotateLeft}/></div>
                </div>

                <div onClick={nextAnimal} className="text-green-300 border-green-500 border-2 flex w-20 h-20 rounded-full items-center cursor-pointer">
                  <div className="text-4xl font-bold mx-auto"><FontAwesomeIcon icon={faHeart}/></div>
                </div>

              </div>
            </div>

        </div>

        <div className="bg-black h-20 absolute bottom-0 left-0 right-0 opacity-85">
        </div>
        <div className="bg-black h-4 absolute bottom-20 left-0 right-0" style={
          {"-webkit-mask-image": "-webkit-gradient(linear, left bottom, left top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))"}}>
        </div>

    </div>
}