import Container from "../components/Container";

const Reservation = () => {
  return (
    <section className="py-24 bg-slate-950 text-white">

      <Container>

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">

            <span className="text-red-500 font-semibold">
              RESERVATIONS
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Reserve A Luxury Dining Experience
            </h2>

            <p className="text-slate-400 mt-4">
              Instant booking with premium seating options.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">

            <div className="bg-black border border-white/10 rounded-3xl p-6">
              <h3 className="text-4xl font-bold text-red-500">10K+</h3>
              <p className="text-slate-400 mt-2">Happy Guests</p>
            </div>

            <div className="bg-black border border-white/10 rounded-3xl p-6">
              <h3 className="text-4xl font-bold text-red-500">4.9</h3>
              <p className="text-slate-400 mt-2">Average Rating</p>
            </div>

            <div className="bg-black border border-white/10 rounded-3xl p-6">
              <h3 className="text-4xl font-bold text-red-500">50+</h3>
              <p className="text-slate-400 mt-2">Signature Dishes</p>
            </div>

          </div>

          <div className="bg-black border border-white/10 rounded-[40px] p-8">

            <div className="grid md:grid-cols-2 gap-6">

              <input type="text" placeholder="Your Name"
              className="p-4 rounded-xl bg-slate-900 border border-white/10"/>

              <input type="email" placeholder="Email Address"
              className="p-4 rounded-xl bg-slate-900 border border-white/10"/>

              <input type="date"
              className="p-4 rounded-xl bg-slate-900 border border-white/10"/>

              <input type="time"
              className="p-4 rounded-xl bg-slate-900 border border-white/10"/>

            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8 text-center text-sm">

              <div className="text-green-400">
                Instant Confirmation
              </div>

              <div className="text-green-400">
                Free Cancellation
              </div>

              <div className="text-green-400">
                VIP Seating Available
              </div>

            </div>

            <button className="w-full mt-8 py-4 bg-red-500 rounded-xl font-semibold hover:bg-red-600 transition-all">
              Book Your Table
            </button>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default Reservation;
