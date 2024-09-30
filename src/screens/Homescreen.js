import React, { useState } from "react";
import requests from "../requests";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Row from "../components/Row";
import "./Homescreen.css";

// Define a mapping of moods to request URLs
const moods = {
  Happy: "fetchComedyMovies",
  Exciting: "fetchActionMovies",
  Romantic: "fetchRomanceMovies",
  Drama: "fetchDramaMovies",
  Scary: "fetchHorrorMovies",
};

function Homescreen() {
  const [selectedMood, setSelectedMood] = useState(""); // State to track the selected mood

  const handleMoodChange = (e) => {
    setSelectedMood(e.target.value);
  };

  return (
    <div className="homeScreen">
      {/* Pass handleMoodChange and selectedMood to Navbar */}
      <Navbar handleMoodChange={handleMoodChange} selectedMood={selectedMood} />
      <Banner />

      {/* Render Rows based on mood */}
      {selectedMood === "" && (
        <>
          {/* Render all rows if no mood is selected */}
          <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </>
      )}

      {/* Render specific row based on mood */}
      {selectedMood !== "" && (
        <Row title={`${selectedMood} Movies`} fetchUrl={requests[moods[selectedMood]]} />
      )}
    </div>
  );
}

export default Homescreen;
