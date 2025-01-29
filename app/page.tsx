import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-wrap justify-between p-4">
      <div className="w-full lg:w-1/2 p-2">
        <div className="h-[600px] bg-blue-500 text-white text-center p-6">1</div>
      </div>

      <div className="w-full lg:w-1/2 p-2">
        <div className="h-[300px] bg-green-500 text-white text-center p-6">2</div>
      </div>

      <div className="w-full px-1 p-8">
        <h2 className="text-2xl font-bold text-center py-3">Noticias</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <Link href="/noticias/1" passHref>
            <div className="cursor-pointer w-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/gatitos-1.webp"
                alt=""
                width={1000}
                height={760}
                className="w-full object-cover" 
                />             
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">
                  MIAU MIAU MIAU MIAU
                </h2>
              </div>
            </div>
          </Link>

          <Link href="/noticias/2" passHref>
            <div className="cursor-pointer w-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/gatitos-2.webp"
                alt=""
                width={1000}
                height={760}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">
                  HOLA HOLA HOLA HOLA
                </h2>
              </div>
            </div>
          </Link>

          <Link href="/noticias/3" passHref>
            <div className="cursor-pointer w-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image
                src="/gatitos-3.jpeg"
                alt=""
                width={1000}
                height={760}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">
                  q rompe huevos q sos julian
                </h2>
              </div>
            </div>
          </Link>

          <Link href="/noticias/4" passHref>
            <div className="cursor-pointer w-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image
                src="/gatitos-4.jpg"
                alt=""
                width={1000}
                height={760}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">
                  blablabalbalablaalb
                </h2>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}