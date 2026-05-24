import Container from "../components/Container";

const Gallery = () => {
  const items = [
    "Private Dining",
    "Rooftop Experience",
    "Business Events",
    "Family Gatherings",
    "Chef Specials",
    "Luxury Interior"
  ];

  return (
    <section className="py-24 bg-black text-white">

      <Container>

        <div className="text-center mb-16">

          <span className="text-red-500 font-semibold">
            GALLERY
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Dining Experiences
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item,index)=>(
            <div
              key={index}
              className="h-56 rounded-3xl bg-slate-900 border border-white/10 flex items-center justify-center text-xl font-bold hover:border-red-500 transition-all"
            >
              {item}
            </div>
          ))}

        </div>

      </Container>

    </section>
  );
};

export default Gallery;
