import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Victor Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-800x525.jpg",
  },
  {
    id: 2,
    name: "Satya Narayan",
    text: "Satya Narayan Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR9w0akTd5cXuA6TPUfdUBXxJR9lLX0kmNOINrbU1h4DWYBFO7p9TkoacnHVeSLoMq4kw&usqp=CAU",
  },
  {
    id: 3,
    name: "Sachin Tendulkar",
    text: "Sachin Tendulkar Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_640.jpg",
  },
];

const Testimonial = () => {
  // slider config
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="pb-10">
      <div className="container">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-pirmary to-secondary">
            What our customer says
          </p>
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            necessitatibus pariatur voluptates cumque reiciendis incidunt qui
            soluta maxime amet modi. Distinctio fugiat nisi nobis voluptas
            doloremque fugit deleniti voluptates veritatis!
          </p>
        </div>

        {/* card section */}
        <div>
          <Slider {...settings}>
            {testimonialData.map((testimonial) => (
              <div className="my-6" key={testimonial.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-pirmary/10 relative">
                  <div>
                    <img
                      src={testimonial.img}
                      className="rounded-full w-20 h-20 object-cover"
                      alt={testimonial.name}
                    />
                  </div>
                  <div>
                    <div>
                      <p className="text-gray-500 text-sm">
                        {testimonial.text}
                      </p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-white">
                        {testimonial.name}
                      </h1>
                    </div>
                  </div>
                  <p className="absolute text-black/20 z-10 top-0 right-0 font-serif text-9xl">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
