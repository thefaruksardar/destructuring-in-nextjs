import React from "react";
import image1 from "@/public/image1.jpeg";
import image2 from "@/public/image2.jpeg";
import image3 from "@/public/image3.webp";
import image4 from "@/public/image4.jpeg";
import image5 from "@/public/image5.jpeg";
import image6 from "@/public/image6.jpeg";

import Image from "next/image";

const data = [
  {
    title: "Consectetur nemo cupiditate at?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab rerum, aperiam magnam dignissimos consectetur nemo cupiditate at distinctio dicta modi?",
    date: "21 Jan, 2023",
    author: "Faruk Sardar",
    imageUrl: image1,
  },
  {
    title: "Dignissimos nemo cupiditate nemo?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab rerum, aperiam magnam dignissimos consectetur nemo cupiditate at distinctio dicta modi?",
    date: "22 Jan, 2023",
    author: "Yasmin Sardar",
    imageUrl: image2,
  },
  {
    title: "Sectetur Aperiam cupiditate dicta?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab rerum, aperiam magnam dignissimos consectetur nemo cupiditate at distinctio dicta modi?",
    date: "25 Jan, 2023",
    author: "Faruk Sardar",
    imageUrl: image3,
  },
  {
    title: "Consectetur nemo aperiam molestias impedit?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab rerum, aperiam magnam dignissimos consectetur nemo cupiditate at distinctio dicta modi?",
    date: "28 Jan, 2023",
    author: "Clementine",
    imageUrl: image4,
  },
  {
    title: "Consectetur molestias impedit velit cupiditate enim ?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab rerum, aperiam magnam dignissimos consectetur nemo cupiditate at distinctio dicta modi?",
    date: "28 Jan, 2023",
    author: "Tenn",
    imageUrl: image5,
  },
  {
    title: "Laboriosam nemo cupiditate nulla alias quae??",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab rerum, aperiam magnam dignissimos consectetur nemo cupiditate at distinctio dicta modi?",
    date: "01 Feb, 2023",
    author: "Yasmin Sardar",
    imageUrl: image6,
  },
];

export default function Blog() {
  return (
    <section className="gap-3 mx-auto lg:max-w-7xl grid md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <article
          key={item.title}
          className="bg-white py-3 px-2 rounded-2xl border shadow "
        >
          <h2 className="text-xl font-medium mb-2 ">{item.title}</h2>
          <p className="text-gray-600">{item.content}</p>
          <Image
            className="my-3 h-[15rem] max-w-full object-cover"
            src={item.imageUrl}
          />

          <div className="flex justify-between items-center px-1 mt-3">
            <p>
              on <span className="font-medium">{item.date}</span>
            </p>
            <p>
              by <span className="font-medium">{item.author}</span>
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}
