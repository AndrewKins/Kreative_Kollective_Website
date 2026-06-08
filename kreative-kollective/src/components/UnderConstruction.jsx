
function UnderConstruction() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="text-red-600 text-8xl font-black uppercase">KK</div>
      <h1 className="text-4xl font-black uppercase mt-4">
        Under <span className="text-yellow-500">Kreative</span> Construction
      </h1>
      <p className="text-gray-400 mt-4 text-sm uppercase tracking-widest">
        We're building something dope. Check back soon.
      </p>

        <a href="/" className="mt-8 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold uppercase tracking-wider px-6 py-3 text-sm transition-colors duration-200"> Back to Home
      </a>
    </div>
  );
}

export default UnderConstruction;