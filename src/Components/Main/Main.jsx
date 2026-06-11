import React, {useEffect} from "react";
import "./main.scss";
import img from "../../Assets/bora.jpg";
import img2 from "../../Assets/bora.jpg";
import img3 from "../../Assets/bora.jpg";
import img4 from "../../Assets/bora.jpg";
import img5 from "../../Assets/bora.jpg";
import img6 from "../../Assets/bora.jpg";
import img7 from "../../Assets/bora.jpg";
import img8 from "../../Assets/bora.jpg";
import img9 from "../../Assets/bora.jpg";

import Aos from 'aos'
import 'aos/dist/aos.css'

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "new Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: "Huayna Picchu is a mountain in peru, rising over Machu Picchu, the so-called lost city of Incas. Thus place is popular among tourists as the sunrise from the sun Gate is simply spectacular."
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier reef",
    location: "Australia",
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: "One of the most remarkable Australian natural gifts is the great Barrier reef. The hallmark of this place is 'lavish' and 'beauty', Always interesting to be in this place"
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: "According to the world Tourism ranking, 45 million people visit turkey each year, and from that about 2 million come to visit Cappadocia. This place is known for its luxurious stays and adventurous acticities."
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: 'CULTURAL RELAX',
    fees: '$1700',
    description: "A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in this city are very attractively painted with the most bright colors availiable. Always welcome"
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: "The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get gere. Happy exploring great food!"
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: "An ancient temple complex in Cambodia, Angkor Wat is one of the largest religious monuments in the world. The temple is a symbol of Cambodia and is featured on the country's flag. It is a UNESCO World Heritage Site and attracts millions of visitors each year."
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned by Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal."
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns.  Bali is also known for its yoga and meditation retreats."
  },
];
const Main = () => {
    useEffect(() => {
      Aos.init({duration: 2000})
    }, [])
  
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most Visited Destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div data-aos="fade-up" key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
};

export default Main;
