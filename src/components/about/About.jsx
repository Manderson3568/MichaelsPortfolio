import { useState } from "react";
import card from "../../resources/images/Cardback.jpeg";
import headShot from "../../resources/images/Michael_300_3.jpg";
import dndDragon from "../../resources/images/dnd.png";
import yoda from "../../resources/images/yoda.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./AboutStyle.css";
import PhotoCircle from "../PhotoCircle/PhotoCircle";

function About() {
  const setPokemon = () => {
    setTopic(pokemon);
  };
  const setDnd = () => {
    setTopic(dnd);
  };
  const setStarWars = () => {
    setTopic(starWars);
  };
  const setMe = () => {
    setTopic(me);
  };
  const me = {
    heading: "Michael Anderson",
    content:
      "After nearly 10 years in transport and logistics I am bringing my set of leadership, problem-solving and teamwork skills to the programming industry. I will put my new talents to the test building projects that elevate people's experiences through efficiency and ease of use. Please get in contact if you think I can add something to your team. Look for a bit of colour to see my personal hobbies.",
    image: headShot,
  };
  const pokemon = {
    heading: "Pokemon",
    content:
      "At the age of 10 I got my first pokemon cards, 12 my first pokemon game, and I have been watching the shows ever since. As with many good hobbies even these kids games have taught me a lot, competative trading cards taught me to keep my eye on the end goal, not to get disracted and leave the plan.",
    image: card,
  };
  const dnd = {
    heading: "Dungeons & Dragons",
    content:
      "For over 3 years I have been running dungeons and dragons games for different groups of friends, or complete strangers. Being a cooperative group game it has helped me improve my comunication, problem solving and conflict resolution skills. ",
    image: dndDragon,
  };
  const starWars = {
    heading: "Star Wars",
    content:
      "I first watched Star Wars when Episode I released in cinemas, I saw it 3 times before it stopped playing. These days I read the books, watch the movies and tv shows, play the video games. I don't think there is a medium I dont consume of Star Wars. I cant lie, there isn't really a skill I learned from all this, lightsabers and mind powers are just awesome. ",
    image: yoda,
  };
  const [aboutTopic, setTopic] = useState(me);
  return (
    <div className="flex" id="about">
      <div className="left aboutBox">
        <h1>{aboutTopic.heading}</h1>
        <p>{aboutTopic.content}</p>
        <Link to="/contact" className="contact">
          Get in Touch <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <div className="right">
        <PhotoCircle
          blueFunction={setPokemon}
          redFunction={setDnd}
          greenFunction={setStarWars}
          resetFunction={setMe}
          image={aboutTopic.image}
        />
      </div>
      {/* <div className="right aboutBox">
        <div className="circle4"></div>
        <div
          className="color blue"
          onClick={() => {
            setTopic(pokemon);
          }}
        ></div>
        <div
          className="color red"
          onClick={() => {
            setTopic(dnd);
          }}
        ></div>
        <div
          className="color green"
          onClick={() => {
            setTopic(starWars);
          }}
        ></div>
        <div className="circle3"></div>
        <div className="circle2"></div>
        <div className="circle1">
          <img
            src={aboutTopic.image}
            alt=""
            onClick={() => {
              setTopic(me);
            }}
          />
        </div>
      </div> */}
    </div>
  );
}
export default About;
