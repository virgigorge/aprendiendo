import Link from "next/link";
import Image from "next/image";
import HomeBar from "@/components/HomeBar/HomeBar";

export default async function Home() {
  interface Noticia {
    id: number;
    title: string;
    content: string;
    image_url?: string;
    image?: string;
  }

  const noticiasResponse = await fetch(
    "http://localhost:3000/api/clubes/noticias?limit=10"
  );
  const noticias: Noticia[] = await noticiasResponse.json();

  return (
    <div>
      <HomeBar />
      <div className="flex flex-wrap justify-between p-4">
        <div className="w-full lg:w-1/2 p-2">
          <div className="h-[600px] bg-blue-500 text-white text-center p-6">
            1
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-2">
          <div className="h-[300px] bg-green-500 text-white text-center p-6">
            2
          </div>
        </div>

        <div className="w-full px-1 p-8">
          <h1 className="text-3xl font-bold text-center py-3">NOTICIAS</h1>

          <br />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {noticias.map((noticia) => {
              console.log(noticia.image);
              return (
                <Link
                  key={noticia.id}
                  href={`/noticias/${noticia.id}`}
                  passHref
                >
                  <div className="cursor-pointer w-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={`https://ligaregional.com.ar/files/images/${noticia.image}`}
                      alt={noticia.title}
                      width={1000}
                      height={760}
                      className="w-full object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-bold text-gray-800">
                        {noticia.title}
                      </h2>
                      <p className="text-sm text-gray-600"></p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
