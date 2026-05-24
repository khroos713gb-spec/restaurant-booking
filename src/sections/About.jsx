import Container from "../components/Container";

const About = () => {
  return (
    <section className="py-24 bg-slate-950 text-white">

      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="text-red-500 font-semibold">
              ABOUT US
            </span>

            <h2 className="text-5xl font-bold mt-4">
              A Luxury Dining Destination
            </h2>

            <p className="text-slate-400 mt-6 leading-8">
              TasteHub combines world-class chefs, premium ingredients,
              and exceptional hospitality to create unforgettable dining
              experiences for every guest.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-black border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-red-500">10+</h3>
              <p className="mt-3 text-slate-400">Years Experience</p>
            </div>

            <div className="bg-black border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-red-500">50+</h3>
              <p className="mt-3 text-slate-400">Signature Dishes</p>
            </div>

            <div className="bg-black border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-red-500">12</h3>
              <p className="mt-3 text-slate-400">Expert Chefs</p>
            </div>

            <div className="bg-black border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-red-500">10K+</h3>
              <p className="mt-3 text-slate-400">Happy Guests</p>
            </div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default About;
