
const FooterCard = () => {
    const cards = [
        {
            id: 1,
            title: "Excepteur sint occaecat cupidatat non proident",
            text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
            img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
        },
        {
            id: 2,
            title: "Quis nostrum exercitationem ullam corporis suscipit laboriosam",
            text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
            img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            text: "Culpa accusantium doloremque laudantium, totam rem aperiam.",
            img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        },
    ];
    return (
        <>


            <section className="bg-cyan-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-xs text-cyan-500 text-center font-semibold mb-2">RESOURCES</p>
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
                                    className="h-48 w-full object-cover"
                                />

                                <div className="p-6">
                                    <h3 className="font-semibold text-lg text-gray-900 mb-3">
                                        {card.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-6">
                                        {card.text}
                                    </p>

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
    )
}

export default FooterCard