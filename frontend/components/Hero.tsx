import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="min-h-screen bg-[#0e0e0e] text-[#EDE9DD] flex flex-col justify-end items-start px-[20px]">
        <div className=" pb-[80px]  flex flex-col  text-white ">
          <div>
            <p className="text-[12px] tracking-wider">
              FULLSTACK / BLOCKCHAIN / DREAM CHASER
            </p>
          </div>
          <div className="flex gap-[20px] ">
            <div>
              <h1 className="text-[80px] tracking-normal">SAISEI</h1>
              <h1 className="text-[80px] tracking-normal">KYUU</h1>
            </div>
            <div className="text-[8px] flex flex-col justify-center  items-center ">
              <p>P</p>
              <p>O</p>
              <p>R</p>
              <p>T</p>
              <p>F</p>
              <p>O</p>
              <p>L</p>
              <p>I</p>
              <p>O</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
