import Image from "next/image";
import bwaza1 from "~/app/assets/images/bwazabroek1.png";



export default function Product() {
    return (
      <div className="bg-Idk flex flex-col">
        <h1 className="text-3xl ml-[630px] mt-[50px]">Produvt</h1>
        <div className="flex flex-row">
            <div className="flex w-full flex-row items-center justify-center gap-10">
                <div className="flex flex-col m-[50px]">
                    <span className="bg-[url(~/app/assets/images/bwazabroek2.png)] bg-cover bg-center w-[200px] h-[200px] mb-[20px]" />
                    <span className="bg-[url(~/app/assets/images/bwazabroek3.png)] bg-cover bg-center w-[200px] h-[200px] mb-[20px]" />
                    <span className="bg-[url(~/app/assets/images/bwazabroek4.png)] bg-cover bg-center w-[200px] h-[200px] mb-[20px]" />
                </div>
                <div>
                    <h1 className="text-3xl mb-[20px]">Bwaza Baggy broek</h1>
                    <Image width={400} height={400} src={bwaza1.src} alt="" />
                    <div>
                        <button className="font-inria text-xl bg-Brown w-[200px] h-[30px] m-[20px] ml- rounded-full">Size</button>
                        <button className="font-inria text-xl bg-Brown w-[200px] h-[30px] rounded-full">Quanity</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  