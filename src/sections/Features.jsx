import Container from "../components/Container";

const Features = () => {
  return (
    <section className="bg-slate-950 py-10 border-y border-white/10 text-white">

      <Container>

        <div className="grid md:grid-cols-4 gap-6 text-center">

          <div>
            <h3 className="font-bold text-red-500">Fresh Ingredients</h3>
          </div>

          <div>
            <h3 className="font-bold text-red-500">Master Chefs</h3>
          </div>

          <div>
            <h3 className="font-bold text-red-500">Luxury Dining</h3>
          </div>

          <div>
            <h3 className="font-bold text-red-500">Online Reservations</h3>
          </div>

        </div>

      </Container>

    </section>
  );
};

export default Features;
