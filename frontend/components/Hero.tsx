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
            <div className="text-[14px] flex flex-col justify-center  items-center ">
              <p>ポ</p>
              <p>ー</p>
              <p>ト</p>
              <p>フ</p>
              <p>ォ</p>
              <p>リ</p>
              <p>オ</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
