import Container from "../components/Container";

const Menu = () => {
  const items = [
    { name: "Grilled Steak", price: "$24" },
    { name: "Pasta Alfredo", price: "$18" },
    { name: "Seafood Platter", price: "$32" },
    { name: "Signature Burger", price: "$16" },
  ];

  return (
    <section className="py-24 bg-black text-white">

      <Container>

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Popular Menu
          </h2>

          <p className="text-slate-400 mt-4">
            Customer favorite dishes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {items.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-white/10 rounded-3xl overflow-hidden"
            >

              <div className="h-56 bg-gradient-to-br from-red-500/20 to-slate-800"></div>

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-red-500 text-2xl font-bold mt-3">
                  {item.price}
                </p>

              </div>

            </div>
          ))}

        </div>

      </Container>

    </section>
  );
};

export default Menu;
