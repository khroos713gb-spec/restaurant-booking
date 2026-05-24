import Container from "../components/Container";

const Chefs = () => {

  const chefs = [
    ["Chef Marco","Italian Cuisine Expert","10+ Years"],
    ["Chef Sophia","French Cuisine Expert","8+ Years"],
    ["Chef Daniel","Grill Master","12+ Years"]
  ];

  return (
    <section className="py-24 bg-black text-white">

      <Container>

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Meet Our Chefs
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {chefs.map((chef,index)=>(
            <div
              key={index}
              className="bg-slate-900 rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-6xl mb-5">
                ?????
              </div>

              <h3 className="text-2xl font-bold">
                {chef[0]}
              </h3>

              <p className="text-red-500 mt-2">
                {chef[1]}
              </p>

              <p className="text-slate-400 mt-3">
                {chef[2]}
              </p>

            </div>
          ))}

        </div>

      </Container>

    </section>
  );
};

export default Chefs;
