import Header from "./Header";
import Welcome from "./Welcome";

export default function Background() {


  return (
    <div className="relative w-full h-screen">
      <img
        id="background"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/fundo-imagem.webp"
        alt="Background animation"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#000000]/50 to-[#000000]/100"></div>
      <div className="relative z-10 w-full h-full flex flex-col">
        <Header />
        <Welcome />
      </div>
    </div>
  );
}
