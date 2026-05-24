import Container from "../components/Container";

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-950 text-white">

      <Container>

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Customer Reviews
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            Amazing food and atmosphere.
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            Best restaurant experience ever.
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            Highly recommended for families.
          </div>

        </div>

      </Container>

    </section>
  );
};

export default Testimonials;
