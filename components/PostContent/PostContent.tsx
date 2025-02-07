"use client";

import { useEffect, useState } from "react";
import SocialBar from "../../components/SocialBar/SocialBar";
import Image from "next/image";

interface Noticia {
  id: number;
  title: string;
  body: string;
  date: string;
  image: string;
}

export default function PostContent({ id }: { id: string }) {
  const [noticia, setNoticia] = useState<Noticia | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNoticia = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/clubes/noticias/${id}`
        );

        if (!response.ok) {
          throw new Error("Noticia no encontrada");
        }

        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setNoticia(data[0]);
        } else {
          throw new Error("Noticia no encontrada");
        }
      } catch (err) {
        setError("Error al cargar la noticia");
      } finally {
        setLoading(false);
      }
    };

    fetchNoticia();
  }, [id]);

  if (!noticia) {
    return <div>Noticia no encontrada</div>;
  }

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
          src={`http://localhost:3000/${noticia.image}`}
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
