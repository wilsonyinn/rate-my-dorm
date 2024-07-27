import React from "react";
import logo from "./logo.svg";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./App.css";
import Review from "./components/Review";

function App() {
  interface ReviewData {
    title: string;
    datePosted: string;
    rating: number;
    review: string;
    numLikes: number;
  }
  const dummy: ReviewData[] = [
    {
      title: "Great Modern Dorm with Minor Noise Issues",
      datePosted: "2024-07-15",
      rating: 4,
      review:
        "I lived at Manzanita Square for a year, and it was a great experience overall. The dorm is modern and well-maintained, with plenty of study spaces and common areas for socializing. The rooms are spacious and come with all the necessary amenities. The location is convenient, with easy access to public transportation and nearby shops and restaurants. My only complaint is that the noise from the street can be a bit loud at times, but it's manageable with earplugs. Overall, I would recommend Manzanita Square to any SFSU student looking for a comfortable and convenient place to live.",
      numLikes: 15,
    },
    {
      title: "Decent Option with Some Drawbacks",
      datePosted: "2024-06-30",
      rating: 3,
      review:
        "Manzanita Square has its pros and cons. The building itself is very new and clean, and the rooms are quite comfortable. The study areas and common rooms are great for meeting other students and getting work done. However, the management can be a bit slow to respond to maintenance requests, which can be frustrating. Additionally, the rent is on the higher side, which might be a concern for some students. If you're looking for a modern living space and are okay with the price, it's a decent option.",
      numLikes: 3,
    },
    {
      title: "Fantastic Living Experience at Manzanita Square",
      datePosted: "2024-07-10",
      rating: 5,
      review:
        "I absolutely loved my time at Manzanita Square! The facilities are top-notch, and the community is vibrant and friendly. The dorms are equipped with everything you need, and the staff is always helpful and responsive. The location is perfect – close to campus and public transportation, making it easy to get around the city. The study rooms are quiet and well-equipped, which is great for focusing on schoolwork. I highly recommend Manzanita Square to anyone looking for a great place to live while studying at SFSU.",
      numLikes: 18,
    },
    {
      title: "Secure and Convenient Living",
      datePosted: "2024-06-25",
      rating: 4,
      review:
        "Manzanita Square offers a fantastic living experience for SFSU students. The rooms are spacious and well-furnished, and the common areas are perfect for socializing and studying. The building is secure, and I always felt safe living here. One of the best things about Manzanita Square is its proximity to campus and various public transport options. My only gripe is that the elevators can be a bit slow during peak hours, but it's a minor inconvenience. Overall, a great place to live!",
      numLikes: 10,
    },
    {
      title: "Excellent Choice for SFSU Students",
      datePosted: "2024-07-05",
      rating: 4,
      review:
        "Living at Manzanita Square was a great decision. The dorm is clean, modern, and offers all the amenities you need as a student. The common areas are well-designed, providing a good balance between socializing and studying. The location is excellent, with easy access to the campus and local eateries. The staff is generally responsive and helpful, although there were a few times when maintenance took longer than expected. Despite that, I would still highly recommend Manzanita Square to fellow students.",
      numLikes: 7,
    },
  ];

  const [data, setData] = useState(dummy);

  function addReview() {
    console.log("Hello");
  }

  const reviews = data.map((val) => {
    return (
      <Review
        title={val.title}
        datePosted={val.datePosted}
        rating={val.rating}
        review={val.review}
        key={uuidv4()}
      />
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={addReview}>Add Review</button>
        <h1>Manzanita Square</h1>
        {reviews}
      </header>
    </div>
  );
}

export default App;
