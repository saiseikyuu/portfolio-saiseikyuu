import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md text-[#EDE9DD]">
        <div className=" p-[20px] lg:px-[80px] lg:py-[40px] flex justify-between items-center text-white">
          <Link href="/" className="text-[24px] lg:text-[32px] ">
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
