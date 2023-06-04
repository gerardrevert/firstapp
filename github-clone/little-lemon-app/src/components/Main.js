import React from "react";
import Card from "./Card";
import greekSalad from "../assets/Salad.jpg";
import bruschetta from "../assets/Bruchetta.svg";
import LemonDessert from "../assets/LemonDessert.jpg";

const specialsData = [
    {
        img: greekSalad,
        title: "Greek Salad",
        price: 49.99,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat venenatis lorem, vel pulvinar eros dapibus .",
    },
    {
        img: bruschetta,
        title: "Bruschetta",
        price: 20.99,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat venenatis lorem, vel pulvinar eros dapibus .",
    },
    {
        img: LemonDessert,
        title: "Lemon Dessert",
        price: 99.00,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat venenatis lorem, vel pulvinar eros dapibus .",
    },
];

function Main() {
    const specialsCards = specialsData.map((item) => {
        return (
            <Card
                key={item.title}
                image={item.img}
                title={item.title}
                price={item.price}
                description={item.description}
            />
        );
    });

    return (
        <main>
            <section className="specials">
                <div className="top">
                    <h1>Specials</h1>
                </div>
                <div className="cards">{specialsCards}</div>
            </section>
            <br></br>
        </main>
    );
}

export default Main;
