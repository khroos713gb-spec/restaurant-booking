import Container from "../components/Container";

const Chefs = () => {
  return (
    <section className="py-24 bg-black text-white">

      <Container>

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Meet Our Chefs
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 rounded-3xl p-8 text-center">
            <div className="h-48 rounded-2xl bg-red-500/20 mb-6"></div>
            <h3 className="text-xl font-bold">Chef Marco</h3>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 text-center">
            <div className="h-48 rounded-2xl bg-red-500/20 mb-6"></div>
            <h3 className="text-xl font-bold">Chef Sophia</h3>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 text-center">
            <div className="h-48 rounded-2xl bg-red-500/20 mb-6"></div>
            <h3 className="text-xl font-bold">Chef Daniel</h3>
          </div>

        </div>

      </Container>

    </section>
  );
};

export default Chefs;
