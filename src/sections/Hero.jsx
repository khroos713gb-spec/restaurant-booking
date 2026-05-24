import Container from "../components/Container";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white pt-24">

      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">

          <div>

            <span className="px-4 py-2 rounded-full bg-red-500/20 text-red-400">
              Fine Dining Experience
            </span>

            <h1 className="text-7xl font-bold mt-8 leading-tight">
              Reserve Your
              <span className="block text-red-500">
                Perfect Table
              </span>
            </h1>

            <p className="text-slate-400 text-xl mt-6">
              Experience world-class dining with exceptional cuisine and unforgettable moments.
            </p>

            <button className="mt-10 px-8 py-4 bg-red-500 rounded-xl font-semibold">
              Book Now
            </button>

          </div>

          <div className="h-[500px] rounded-[40px] bg-gradient-to-br from-red-500/20 to-slate-900 border border-white/10"></div>

        </div>

      </Container>

    </section>
  );
};

export default Hero;
