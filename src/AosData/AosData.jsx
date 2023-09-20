import React, { useState } from "react";
import NewToyCard from "./NewToyCard";

const AosData = () => {
  const [showAll, setShowAll] = useState(false);

  const newToys = [
    {
      name: "Super Robot Action Figure",
      price: 24.99,
      rating: 4.7,
      description:
        "This action figure is perfect for kids who love robots. It comes with movable limbs and lights up with cool LED effects. Hours of imaginative play await!",
      image: "https://i.ibb.co/ZLqrWJs/10.png",
    },
    {
      name: "Magic Castle Building Blocks",
      price: 39.99,
      rating: 4.9,
      description:
        "Build your own magical castle with these colorful building blocks. Spark creativity and inspire young builders to construct their dream kingdoms.",
      image: "https://i.ibb.co/Q9XgCjZ/11.jpg",
    },
    {
      name: "Puzzle Adventure Board Game",
      price: 29.95,
      rating: 4.5,
      description:
        "Embark on a thrilling adventure with this board game. Solve puzzles, complete quests, and outsmart your opponents in this exciting game for the whole family.",
      image: "https://i.ibb.co/JrVYsxX/12.jpg",
    },
    {
      name: "Cute Plush Teddy Bear",
      price: 19.99,
      rating: 4.8,
      description:
        "This adorable plush teddy bear is the perfect cuddly companion for kids of all ages. Soft, huggable, and oh-so-lovable!",
      image: "https://i.ibb.co/1rJzVWJ/13.jpg",
    },
    {
      name: "Remote-Controlled Speed Car",
      price: 49.99,
      rating: 4.6,
      description:
        "Experience high-speed thrills with this remote-controlled car. Zoom around and perform amazing stunts with ease.",
      image: "https://i.ibb.co/S37jhHh/images-3.jpg",
    },
    {
      name: "Dinosaur Adventure Playset",
      price: 34.95,
      rating: 4.8,
      description:
        "Embark on a prehistoric adventure with this dinosaur playset. Includes lifelike dinosaur figures and a detailed playmat for hours of imaginative play.",
      image: "https://i.ibb.co/zQVSy7f/maxresdefault.jpg",
    },
    {
      name: "Colorful Building Bricks Set",
      price: 19.99,
      rating: 4.7,
      description:
        "Create endless structures and designs with this set of colorful building bricks. Encourages creativity and fine motor skills development.",
      image: "https://i.ibb.co/X4mdb94/images.jpg",
    },
    {
      name: "Robot Learning Kit",
      price: 29.99,
      rating: 4.5,
      description:
        "Inspire STEM learning with this robot kit. Kids can build and program their own robots while having fun and learning valuable skills.",
      image: "https://i.ibb.co/yhN7Fck/3.jpg",
    },
  ];

  return (
    <div className="py-8 container mx-auto">
      <h2 className="text-center text-2xl font-bold py-7">
        New To <span className="text-sky-300">come Toys</span>
      </h2>

      <div className="justify-center grid items-center grid-cols-1 md:grid-cols-3 py-10">
        {showAll
          ? newToys.map((toy, index) => {
              return <NewToyCard toy={toy} key={index} />;
            })
          : newToys.slice(0, 6).map((toy, index) => {
              return <NewToyCard toy={toy} key={index} />;
            })}
      </div>

      <div className="text-center">
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="btn btn-sm btn-secondary my-4"
          >
            Show All
          </button>
        )}
      </div>
    </div>
  );
};

export default AosData;
