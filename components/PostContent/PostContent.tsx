import SocialBar from "../../components/SocialBar/SocialBar";
import Image from "next/image";

export default async function PostContent({ id }: { id: string }) {
  interface Contenido {
    id: number;
    title: string;
    body: string;
    date: string;
    image_url?: string;
    image?: string;
  }

  const contenidosResponse = await fetch(
    `http://localhost:3000/api/clubes/noticias/${id}`
  );
  const contenidos: Contenido[] = await contenidosResponse.json();
  const noticia = contenidos[0];

  return (
    <div className="">
      <header className="font-bold py-4 px-4">
        <h1 className="text-4xl">{noticia.title}</h1>
        <b>
          {new Date(noticia.date).toLocaleDateString() || "Fecha no disponible"}
        </b>
      </header>

      <hr />

      <SocialBar />

      <hr />

      <div className="w-full flex justify-center py-4">
        <Image
          src={`https://ligaregional.com.ar/files/images/${noticia.image}`}
          alt={noticia.title}
          width={1000}
          height={760}
          className="w-full object-cover"
        />
      </div>

      <div className="w-full px-4 py-4">
        {noticia.body.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}
