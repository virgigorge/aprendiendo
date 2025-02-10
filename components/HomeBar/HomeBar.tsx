import Link from "next/link";

const links = [
  {
    href: "/clubes",
    text: "CLUBES",
    bgColor: "bg-cyan-900",
    hoverColor: "hover:bg-cyan-950",
  },
  {
    href: "/campeones",
    text: "CAMPEONES",
    bgColor: "bg-teal-500",
    hoverColor: "hover:bg-teal-600",
  },
  {
    href: "/estadisticas",
    text: "ESTADÍSTICAS",
    bgColor: "bg-yellow-500",
    hoverColor: "hover:bg-yellow-600",
  },
  {
    href: "/colegio",
    text: "COLEGIO",
    bgColor: "bg-red-500",
    hoverColor: "hover:bg-red-600",
  },
];

export default function HomeBar() {
  return (
    <div className="flex items-center justify-center px-4 py-2">
      <nav className="flex flex-nowrap justify-center gap-1 text-white py-8 px-4">
        {links.map((link, index) => (
          <Link key={index} href={link.href} passHref>
            <div
              className={`${link.bgColor} ${link.hoverColor} font-bold flex items-center justify-center w-32 sm:w-72 h-12 px-4 whitespace-nowrap`}
            >
              {link.text}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
