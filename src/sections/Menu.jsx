import Container from "../components/Container";

const Menu = () => {

  const items = [
    {
      name: "Grilled Steak",
      price: "$24",
      desc: "Premium grilled steak with herbs",
      rating: "4.9"
    },
    {
      name: "Pasta Alfredo",
      price: "$18",
      desc: "Creamy Italian pasta recipe",
      rating: "4.8"
    },
    {
      name: "Seafood Platter",
      price: "$32",
      desc: "Fresh seafood special",
      rating: "5.0"
    },
    {
      name: "Signature Burger",
      price: "$16",
      desc: "Chef special gourmet burger",
      rating: "4.7"
    }
  ];

  return (
    <section className="py-24 bg-black text-white">
      <Container>

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">Popular Menu</h2>
          <p className="text-slate-400 mt-4">
            Customer favorite dishes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {items.map((item,index)=>(
            <div
              key={index}
              className="bg-slate-900 border border-white/10 rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm mb-5">
                Chef Special
              </div>

              <h3 className="text-xl font-bold">
                {item.name}
              </h3>

              <p className="text-slate-400 mt-3">
                {item.desc}
              </p>

              <div className="text-yellow-400 mt-4">
                Rating: {item.rating}
              </div>

              <div className="text-red-500 text-2xl font-bold mt-4">
                {item.price}
              </div>

              <button className="w-full mt-5 py-3 bg-red-500 rounded-xl">
                View Details
              </button>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default Menu;
