import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-gray-600 text-white">
      <div className="flex justify-between container mx-auto items-center py-4 px-2">
        <div className="text-xl">Fusion Planner</div>

        <ul className="flex space-x-2 ">
          {[
            { label: "Dashboard", link: "/" },
            { label: "Account", link: "#" },
            { label: "Logout", link: "#" },
          ].map(({ link, label }, index) => (
            <li key={index}>
              <Link href={link} className="hover:underline">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;

