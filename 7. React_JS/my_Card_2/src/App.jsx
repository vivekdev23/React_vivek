import "./App.css";
import Card1 from "./assets/Componunts/Card1";

function App() {
  return (
    <>
    <div className="flex items-center w-full h-screen ">
    <Card1 heding='cansole' img='https://c4.wallpaperflare.com/wallpaper/414/915/652/macro-chess-figure-wallpaper-preview.jpg'/>
    <Card1 heding='Playground' img='https://w0.peakpx.com/wallpaper/363/172/HD-wallpaper-lan-party-robots-sci-fi-computers-fantasy.jpg'/>
    <Card1 heding='Advantage' img='https://c4.wallpaperflare.com/wallpaper/888/401/127/ai-art-gamer-computer-pc-gaming-hd-wallpaper-thumb.jpg'/>
    </div>
    </>
  );
}

export default App;
