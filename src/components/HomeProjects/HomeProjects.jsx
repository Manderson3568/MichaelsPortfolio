import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import js from "../../resources/images/js.png";
import jq from "../../resources/images/jq.png";
import jwt from "../../resources/images/jwt.png";
import firebase from "../../resources/images/firebase.png";
import mongo from "../../resources/images/mongo.png";
import node from "../../resources/images/node.png";
import postgres from "../../resources/images/postgres.png";
import rails from "../../resources/images/rails.png";
import react from "../../resources/images/react.png";
import ruby from "../../resources/images/ruby.png";
import sqlite from "../../resources/images/sqlite.png";
import vue from "../../resources/images/vue.png";
import "./HomeProjectsStyle.css";
import ColouredCircles from "../ColouredCircles";
function HomeProjects() {
  const [pokemon, setPokemon] = useState(false);
  const [trx, setTrx] = useState(false);
  const [atomic, setAtomic] = useState(false);
  function displayContent() {
    if (pokemon) {
      return (
        <div>
          <h2>Pokemon Team Builder</h2>
          <p>
            Pokemon team builder is a solo project I completed week 6 of General
            Assembly's Software Engineering Immersive. The purpose of this site
            is to allow competative Pokemon VGC players plan out their teams or
            pokemon. The site gives instant feedback for the result of
            adjustments to stats.
          </p>
          <p>
            This was built using Ruby on Rails with a PostgreSQL database and
            some Jquery for Dom Manipulation.
          </p>
          <a href="#" className="button projectButton">
            Deployed Project
          </a>
          <a href="#" className="button projectButton">
            Project Repo
          </a>
        </div>
      );
    } else if (trx) {
      return (
        <div>
          <h2>Trx Prescription Tracker</h2>
          <p>
            Trx Prescription Tracker is a 3 person collaboration we completed in
            week 9 of General Assembly's Software Engineering Immersive. The
            purpose of this project was to allow users to track their current
            prescriptions, as well as log any side effects or their general
            feelings on any given day.
          </p>
          <p>
            This was built using React for the front end, and firebase's
            authentication and firestore to act as the database.
          </p>
          <a href="#" className="button projectButton">
            Deployed Project
          </a>
          <a href="#" className="button projectButton">
            Project Repo
          </a>
        </div>
      );
    } else if (atomic) {
      return (
        <div>
          <h2>Atomic Academy</h2>
          <p>
            Atomic Academy is a 2 person collaboration we completed in week 12
            of General Assmbly's Software Engineering Immerssive. The purpose of
            this project was to provide an online teaching platform for the
            sciences.
          </p>
          <p>
            This was built using Vue.js for the front end and Node.js with
            express library for the back end, and MongoDB for the database.{" "}
          </p>
          <a href="#" className="button projectButton">
            Deployed Project
          </a>
          <a href="#" className="button projectButton">
            Project Server Repo
          </a>
          <a href="#" className="button projectButton">
            Project Client Repo
          </a>
        </div>
      );
    } else {
      return (
        <div>
          <h2>All Projects</h2>
          <p>
            This is a sample of my 3 most recent projects. For a full list of
            all the major projects I have worked on please follow the link below
          </p>
        </div>
      );
    }
  }
  return (
    <div className="HomeProjects">
      <h1>
        <ColouredCircles />
        Projects
      </h1>
      <div className="projectSubCont">
        <div className="techStack">
          <img
            src={js}
            alt="javascript"
            className={`tech grey`}
            onClick={() => {
              setAtomic(false);
              setPokemon(false);
              setTrx(false);
            }}
          />
          <img
            src={jq}
            alt="jquery"
            className={`tech grey`}
            onClick={() => {
              setAtomic(false);
              setPokemon(false);
              setTrx(false);
            }}
          />
          <img
            src={ruby}
            alt="ruby"
            className={`tech ${pokemon ? " " : "grey"}`}
            onClick={() => {
              setAtomic(false);
              setPokemon(true);
              setTrx(false);
            }}
          />
          <img
            src={rails}
            alt="ruby on rails"
            className={`tech ${pokemon ? " " : "grey"}`}
            onClick={() => {
              setAtomic(false);
              setPokemon(true);
              setTrx(false);
            }}
          />
          <img
            src={sqlite}
            alt="sqlite3"
            className={`tech ${pokemon ? " " : "grey"}`}
            onClick={() => {
              setAtomic(false);
              setPokemon(true);
              setTrx(false);
            }}
          />
          <img
            src={postgres}
            alt="postgresql"
            className={`tech ${pokemon ? " " : "grey"}`}
            onClick={() => {
              setAtomic(false);
              setPokemon(true);
              setTrx(false);
            }}
          />
          <img
            src={react}
            alt="react.js"
            className={`tech ${trx ? " " : "grey"}`}
            onClick={() => {
              setAtomic(false);
              setPokemon(false);
              setTrx(true);
            }}
          />
          <img
            src={firebase}
            alt="firebase"
            className={`tech ${trx ? " " : "grey"}`}
            onClick={() => {
              setAtomic(false);
              setPokemon(false);
              setTrx(true);
            }}
          />
          <img
            src={vue}
            alt="vue.js"
            className={`tech ${atomic ? " " : "grey"}`}
            onClick={() => {
              setAtomic(true);
              setPokemon(false);
              setTrx(false);
            }}
          />
          <img
            src={node}
            alt="node.js"
            className={`tech ${atomic ? " " : "grey"}`}
            onClick={() => {
              setAtomic(true);
              setPokemon(false);
              setTrx(false);
            }}
          />
          <img
            src={mongo}
            alt="mongoDB"
            className={`tech ${atomic ? " " : "grey"}`}
            onClick={() => {
              setAtomic(true);
              setPokemon(false);
              setTrx(false);
            }}
          />
          <img
            src={jwt}
            alt="JSON web token"
            className={`tech ${atomic ? " " : "grey"}`}
            onClick={() => {
              setAtomic(true);
              setPokemon(false);
              setTrx(false);
            }}
          />
        </div>
        <div className="projects">
          <div className="proList">
            <div
              className="project redSide"
              onClick={() => {
                setAtomic(true);
                setPokemon(false);
                setTrx(false);
              }}
            >
              <h3 className={atomic ? " selected" : ""}>Atomic Academy</h3>
            </div>
            <div
              className="project blueSide"
              onClick={() => {
                setAtomic(false);
                setPokemon(false);
                setTrx(true);
              }}
            >
              <h3 className={trx ? " selected" : ""}>
                Trx Prescription Tracker
              </h3>
            </div>
            <div
              className="project greenSide"
              onClick={() => {
                setAtomic(false);
                setPokemon(true);
                setTrx(false);
              }}
            >
              <h3 className={pokemon ? "  selected" : ""}>
                Pokemon Team Builder
              </h3>
            </div>
          </div>
          <div className="proDisplay">
            {displayContent()}
            <Link to="/projects" className="contact projectButton">
              All Projects <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeProjects;
