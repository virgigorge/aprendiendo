import { ClubDetailProps } from "@/components/ClubDetail/interface";
import Image from "next/image";

export default async function ClubesPage() {
  const response = await fetch("http://localhost:3000/api/clubes");
  const clubes: ClubDetailProps[] = await response.json();

  return (
    <div className="text-center py-6">
      <h1 className="text-4xl font-bold mb-6">CLUBES</h1>

      <div className="grid grid-cols-4 gap-6">
        {clubes.map((club, index) => (
          <a
            key={index}
            href={"/clubes/" + club.alias}
            className="flex flex-col items-center"
          >
            <Image
              src={"http://localhost:3000/" + club.alias + ".png"}
              width={200}
              height={200}
              alt={club.name}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
