import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="min-h-screen bg-[#0e0e0e] text-[#EDE9DD] py-[70px] px-[20px] ">
        <div className="flex justice-center flex-col items-center  w-1/2 pt-[20px] pb-[40px] ">
          <h1 className="text-[40px]">制作実績</h1>
          <span className="text-[16px]">(Portfolio)</span>
        </div>
        <div className="border-t flex flex-col gap-[20px] py-[20px]">
          <div className="flex justify-between">
            <div>1</div>
            <div>2024</div>
          </div>
          <div>
            {/* image */}
            <div className="w-full h-[200px] border rounded-[6px]"></div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h1>PROJECT TITLE</h1>
            <p className="text-[12px]">HTML | CSS | JAVASCRIPT </p>
          </div>
        </div>

        <div className="border-y flex flex-col gap-[20px] py-[20px]">
          <div className="flex justify-between">
            <div>2</div>
            <div>2024</div>
          </div>
          <div>
            {/* image */}
            <div className="w-full h-[200px] border rounded-[6px]"></div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h1>PROJECT TITLE</h1>
            <p className="text-[12px]">HTML | CSS | JAVASCRIPT </p>
          </div>
        </div>

        <div className="border-y flex flex-col gap-[20px] py-[20px]">
          <div className="flex justify-between">
            <div>3</div>
            <div>2024</div>
          </div>
          <div>
            {/* image */}
            <div className="w-full h-[200px] border rounded-[6px]"></div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h1>PROJECT TITLE</h1>
            <p className="text-[12px]">HTML | CSS | JAVASCRIPT </p>
          </div>
        </div>
      </div>
    </>
  );
}
