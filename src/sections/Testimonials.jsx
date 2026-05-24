import Container from "../components/Container";

const Testimonials = () => {

  const reviews = [
    {
      name: "Michael Johnson",
      role: "Food Blogger",
      review: "The steak was incredible and the service was exceptional. One of the finest dining experiences I've had."
    },
    {
      name: "Sarah Williams",
      role: "Regular Customer",
      review: "Elegant atmosphere, amazing staff and unforgettable flavors. Highly recommended."
    },
    {
      name: "David Brown",
      role: "Business Executive",
      review: "Perfect place for client meetings and family dinners. Professional service and premium food."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white">

      <Container>

        <div className="text-center mb-16">

          <span className="text-red-500 font-semibold">
            TESTIMONIALS
          </span>

          <h2 className="text-5xl font-bold mt-4">
            What Our Guests Say
          </h2>

          <p className="text-slate-400 mt-4">
            Trusted by thousands of happy customers.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review,index)=>(
            <div
              key={index}
              className="p-8 rounded-3xl bg-black border border-white/10 hover:border-red-500 transition-all duration-300"
            >

              <div className="text-yellow-400 text-xl mb-4">
                ★★★★★
              </div>

              <p className="text-slate-300 leading-7">
                "{review.review}"
              </p>

              <div className="mt-6 pt-6 border-t border-white/10">

                <h3 className="font-bold text-lg">
                  {review.name}
                </h3>

                <p className="text-red-500 text-sm mt-1">
                  {review.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </Container>

    </section>
  );
};

export default Testimonials;
