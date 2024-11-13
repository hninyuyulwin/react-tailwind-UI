import React from "react";
import Img1 from "../assets/books/book2.jpg";
import Img2 from "../assets/books/book1.jpg";
import Img3 from "../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
  {
    id: 1,
    img: Img1,
    title: "His Life",
    description:
      "His life Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas necessitatibus pariatur voluptates cumque reiciendis incidunt quic soluta maxime amet modi. Distinctio fugiat nisi nobis voluptaso loremque fugit deleniti voluptates veritatis!",
  },
  {
    id: 2,
    img: Img2,
    title: "Who's there",
    description:
      "Who's there Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas necessitatibus pariatur voluptates cumque reiciendis incidunt quic soluta maxime amet modi. Distinctio fugiat nisi nobis voluptaso loremque fugit deleniti voluptates veritatis!",
  },
  {
    id: 3,
    img: Img3,
    title: "Lost Boy",
    description:
      "Lost Boy Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas necessitatibus pariatur voluptates cumque reiciendis incidunt quic soluta maxime amet modi. Distinctio fugiat nisi nobis voluptaso loremque fugit deleniti voluptates veritatis!",
  },
];

const BestBook = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-pirmary to-secondary">
              Trending Books
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              necessitatibus pariatur voluptates cumque reiciendis incidunt qui
              soluta maxime amet modi. Distinctio fugiat nisi nobis voluptas
              doloremque fugit deleniti voluptates veritatis!
            </p>
          </div>
          {/* Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
            {/* Card 1 */}
            {BooksData.map((data) => (
              <div
                key={data.id}
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-pirmary dark:hover:bg-pirmary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
                    src={data.img}
                    alt=""
                  />
                </div>
                <div className="p-4 text-center  ">
                  <div className="w-full flex items-center justify-center ">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold mt-2">{data.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {data.description}
                  </p>
                  <button className="bg-pirmary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 group-hover:bg-white group-hover:text-pirmary ">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestBook;
