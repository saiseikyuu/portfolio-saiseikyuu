import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="min-h-screen bg-[#0e0e0e] text-[#EDE9DD] flex flex-col justify-end items-start px-[20px] lg:px-[80px] w-full ">
        <div className=" pb-[50px] lg:pb-[40px]  flex flex-col  text-white w-full">
          <div>
            <p className="text-[12px] lg:text-[20px] tracking-wider">
              FULLSTACK / BLOCKCHAIN / DREAM CHASER
            </p>
          </div>
          <div className="flex gap-[20px] lg:justify-between lg:items-between w-full">
            <div className="lg:flex lg:gap-[0px] lg:items-center">
              <h1 className="text-[46px] lg:text-[140px] tracking-normal">
                SAISEIKYUU
              </h1>
              <h1 className="text-[70px] lg:text-[140px] tracking-normal">
                YAGAMI
              </h1>
            </div>
            <div className="text-[14px] lg:text-[24px] flex flex-col justify-center  items-center ">
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
