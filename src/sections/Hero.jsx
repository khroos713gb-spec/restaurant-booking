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

            <div className="flex gap-4 mt-10">

              <button className="px-8 py-4 bg-red-500 rounded-xl font-semibold">
                Book Now
              </button>

              <button className="px-8 py-4 border border-white/10 rounded-xl">
                View Menu
              </button>

            </div>

          </div>

          <div className="bg-slate-900 border border-white/10 rounded-[40px] p-8">

            <div className="flex justify-between items-center mb-8">

              <div>
                <h3 className="text-2xl font-bold">
                  VIP Reservation
                </h3>

                <p className="text-slate-400">
                  Available Tonight
                </p>
              </div>

              <div className="text-green-400 font-bold">
                OPEN
              </div>

            </div>

            <div className="space-y-5">

              <div className="flex justify-between">
                <span>Available Tables</span>
                <span className="text-red-500 font-bold">12</span>
              </div>

              <div className="flex justify-between">
                <span>Reservations Today</span>
                <span className="text-red-500 font-bold">128</span>
              </div>

              <div className="flex justify-between">
                <span>Average Wait Time</span>
                <span className="text-red-500 font-bold">8 Min</span>
              </div>

              <div className="flex justify-between">
                <span>Guest Rating</span>
                <span className="text-red-500 font-bold">4.9/5</span>
              </div>

            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">

              <div className="bg-black rounded-2xl p-4 text-center">
                <h4 className="text-red-500 font-bold">
                  50+
                </h4>
                <p className="text-xs text-slate-400">
                  Signature Menu
                </p>
              </div>

              <div className="bg-black rounded-2xl p-4 text-center">
                <h4 className="text-red-500 font-bold">
                  12
                </h4>
                <p className="text-xs text-slate-400">
                  Master Chefs
                </p>
              </div>

              <div className="bg-black rounded-2xl p-4 text-center">
                <h4 className="text-red-500 font-bold">
                  18
                </h4>
                <p className="text-xs text-slate-400">
                  Industry Awards
                </p>
              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default Hero;

