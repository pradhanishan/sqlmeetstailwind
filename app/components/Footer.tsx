export default function Footer() {
  return (
    <div
      className="
    bg-gradient-to-r
    dark:bg-gradient-conic
    from-gray-600 to-gray-400 
    dark:from-sky-900 dark:to-slate-700
        text-white
     flex flex-col justify-center items-center text-center space-y-2
    pt-4 pb-8
    "
    >
      {/* Credits */}

      <div>
        <h5 className="lowercase text-sm font-mono">Credits</h5>
      </div>
      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-8">
        <div className="space-x-2">
          <span className="lowercase text-sm font-mono">Text: </span>
          <span className="hover:font-bold duration-300 transition-all lowercase text-sm font-mono dark:text-sky-300 text-sky-200">
            <a href="https://chat.openai.com/" target="_blank">
              ChatGPT
            </a>
          </span>
        </div>
        <div className="space-x-2">
          <span className="lowercase text-sm font-mono">Sprites :</span>
          <span className="hover:font-bold duration-300 transition-all lowercase text-sm font-mono dark:text-sky-300 text-sky-200">
            <a href="https://pokemondb.net/sprites" target="_blank">
              pokemondb
            </a>
          </span>
        </div>
        <div className="space-x-2">
          <span className="lowercase text-sm font-mono">Images :</span>
          <span className="hover:font-bold duration-300 transition-all lowercase text-sm font-mono dark:text-sky-300 text-sky-200">
            <a href="https://gencraft.com/" target="_blank">
              gencraft
            </a>
          </span>
        </div>
        <div className="space-x-2">
          <span className="lowercase text-sm font-mono">Everything else :</span>
          <span className="hover:font-bold duration-300 transition-all lowercase text-sm font-mono dark:text-sky-300 text-sky-200">
            Ishan Pradhan
          </span>
        </div>
      </div>
    </div>
  );
}
