import Container from "../components/Container";

const Reservation = () => {
  return (
    <section className="py-24 bg-slate-950 text-white">

      <Container>

        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold">
              Reserve A Table
            </h2>

            <p className="text-slate-400 mt-4">
              Book your dining experience in seconds.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl bg-slate-900 border border-white/10"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="p-4 rounded-xl bg-slate-900 border border-white/10"
            />

            <input
              type="date"
              className="p-4 rounded-xl bg-slate-900 border border-white/10"
            />

            <input
              type="time"
              className="p-4 rounded-xl bg-slate-900 border border-white/10"
            />

          </div>

          <button className="w-full mt-6 py-4 bg-red-500 rounded-xl font-semibold">
            Book Table
          </button>

        </div>

      </Container>

    </section>
  );
};

export default Reservation;
