import Container from "../components/Container";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl text-white border-b border-white/10">

      <Container>

        <div className="h-20 flex items-center justify-between">

          <h2 className="text-3xl font-bold text-red-500">
            TasteHub
          </h2>

          <nav className="hidden md:flex gap-8">
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a href="#">About</a>
            <a href="#">Reservations</a>
            <a href="#">Contact</a>
          </nav>

          <button className="px-5 py-3 bg-red-500 rounded-xl font-semibold">
            Book Table
          </button>

        </div>

      </Container>

    </header>
  );
};

export default Navbar;
