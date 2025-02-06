"use client";

import SocialBar from "../../components/SocialBar/SocialBar";
import Image from "next/image";

export default function PostContent({ id }: { id: string }) {
  return (
    <div className="">
      <header className="font-bold py-4 px-4">
        <h1 className="text-4xl">ACA IRÍA EL TÍTULO: {id}</h1>
        <b>21 DE ENERO DE 2025</b>
      </header>

      <hr />

      <p className="px-4 py-2">
        <b>Aca iría aca iría | </b>
        miau miau miau miau miau miau miau miau miau miau miau miau miau miau
        miau miau miau miau miau miau miau miau miau miau miau miau miau miau
      </p>

      <SocialBar />

      <hr />

      <div className="w-full flex justify-center py-4">
        <Image
          src="/gatitos-2.webp"
          alt=""
          width={1000}
          height={760}
          className="w-full object-cover"
        />
      </div>

      <div className="w-full px-4 py-4">
        <p>
          Cultural Gilbert vs El Porvenir. División Reserva: 17:00hs.
          <br />
          Primera División: 19:00hs
          <br />
          Árbitro: Brian Izaguirre.
          <br />
          Asistentes: Juan Ramírez y Eduardo Troncoso.
          <br />
          San Martin vs Atlético Basavilbaso
          <br />
          División Reserva: 18:45hs.
          <br />
          Primera División: 20:45hs.
          <br />
          Árbitro: Sergio Hernández.
          <br />
          Asistentes: Damián Hurtado, Leandro Lescano Guzmán y Candela Mori.
          <br />
        </p>
      </div>
    </div>
  );
}
