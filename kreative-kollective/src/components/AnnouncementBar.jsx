function AnnouncementBar() {
  return (
    <div className="bg-red-600 text-white font-['Rye'] px-6 py-3 text-center">
      <p className="text-sm md:text-base font-black uppercase tracking-wider">
        Kreative Kollective was recently featured on PIX11.{" "}
        <a
          href="https://pix11.com/video/kreative-kollective-on-ny-living/11899170/"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 hover:text-yellow-300"
        >
          Watch Here
        </a>
      </p>
    </div>
  );
}

export default AnnouncementBar;