import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md ">
        <div className=" p-[20px]  flex justify-between items-center text-white">
          <Link href="/" className="text-[24px] text-[#F9F9F9]">
            SAISEIKYUU
          </Link>
          <div className="space-x-6 hidden lg:flex">
            <Link href="/">HOME</Link>
            <Link href="/projects">ABOUT</Link>
            <Link href="/contact">WORKS</Link>
            <Link href="/contact">CONTACT</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
