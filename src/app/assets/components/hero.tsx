export default function Hero() {
  return (
    <div className="bg-Idk flex flex-row">
      <div className="flex min-h-[500px] min-w-[500px] items-center justify-center bg-[url(~/app/assets/images/homepagebanner.png)] bg-cover bg-center bg-no-repeat"></div>

      <div className="flex w-full flex-col items-center justify-center gap-10">
        <div className="font-thin *:font-inria *:text-5xl">
          <h1>Sustainable fashion</h1>
          <h1>Craft for everyone.</h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-16 font-semibold *:h-[50px] *:w-[175px] *:rounded-full *:border-2 *:border-black *:bg-Blue *:font-inria *:text-white">
          <button className="shadow-magenta">Man</button>
          <button className="shadow-magenta">Woman</button>
          <button className="shadow-magenta">Kids & Babys</button>
        </div>
      </div>
    </div>
  );
}
