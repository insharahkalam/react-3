import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
const FooterCard = () => {
  const cards = [
    {
      id: 1,
      title: "Excepteur sint occaecat cupidatat non proident",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
      text2:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli",
      img: card1,
    },
    {
      id: 2,
      title: "Quis nostrum exercitationem ullam corporis suscipit laboriosam",
      text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      text2:
        "nisi ut aliquid ex ea commodi consequatur autem vel eum iure reprehenderit ",
      img: card2,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      text: "Coluptatem accusantium doloremque laudantium, totam rem aperiam",
      text2:
        "Aaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      img: card3,
    },
  ];
  return (
    <>
      <section className="bg-cyan-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <button className="rounded-full mb-2 bg-sky-100 text-sky-600 font-bold px-5 py-2 text-sm sm:text-base">
            RESOURCES
          </button>
          <h2 className="text-3xl text-center font-bold text-gray-900 mb-10">
            Stay in the know
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-48 font-semibold w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-6">{card.text}</p>

                  <p className=" text-gray-600 text-sm mb-6">{card.text2}</p>

                  <button className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium px-4 py-2 rounded">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterCard;
