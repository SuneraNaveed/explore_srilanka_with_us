import {
  FaUmbrellaBeach,
  FaMountain,
  FaUtensils,
  FaLandmark,
  FaInfoCircle,
} from "react-icons/fa";
import "./AboutSriLanka.css";

function AboutSriLanka() {
  const whyVisit = [
    "Eight UNESCO World Heritage Sites",
    "Diverse landscapes: beaches, hills, forests, wildlife parks",
    "Rich cultural heritage over 2,500 years old",
    "World-famous tea plantations",
    "Friendly locals and authentic travel experiences",
    "Affordable luxury and unique boutique stays",
  ];

  const bestTime = [
    {
      period: "December to April",
      description: "Best for west & south coast, hill country",
    },
    {
      period: "May to September",
      description: "Best for east coast (Arugam Bay)",
    },
    { period: "July to September", description: "Ideal for wildlife viewing" },
  ];

  const dishes = [
    "Rice and Curry",
    "Hoppers & String Hoppers",
    "Kottu Roti",
    "Fresh seafood",
    "Tropical fruits and Ceylon tea",
  ];

  const travelTips = [
    "Dress modestly when visiting temples",
    "Remove shoes before entering religious sites",
    "Carry cash for small vendors",
    "Respect local customs and wildlife",
    "Always stay hydrated in tropical climates",
  ];

  return (
    <div className="about-sri-lanka">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>About Sri Lanka</h1>
          <p>
            Sri Lanka, known as the Pearl of the Indian Ocean, is a compact
            island rich in history, nature, culture, and warm hospitality.
            Within a few hours of travel, visitors can experience golden
            beaches, misty mountains, ancient kingdoms, wildlife safaris, and
            vibrant cities. This diversity makes Sri Lanka an ideal destination
            for both short holidays and extended explorations.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            {/* Why Visit */}
            <div className="content-section">
              <div className="section-header">
                <div className="section-icon">
                  <FaLandmark />
                </div>
                <h2>Why Visit Sri Lanka</h2>
              </div>
              <ul className="feature-list">
                {whyVisit.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Best Time to Visit */}
            <div className="content-section">
              <div className="section-header">
                <div className="section-icon">
                  <FaUmbrellaBeach />
                </div>
                <h2>Best Time to Visit</h2>
              </div>
              <p>
                Sri Lanka is a year-round destination with two distinct monsoon
                systems affecting opposite sides of the island.
              </p>
              <div className="time-grid">
                {bestTime.map((item, index) => (
                  <div key={index} className="time-card">
                    <h4>{item.period}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Culture & Traditions */}
            <div className="content-section">
              <div className="section-header">
                <div className="section-icon">
                  <FaMountain />
                </div>
                <h2>Culture & Traditions</h2>
              </div>
              <p>
                A vibrant blend of spiritual heritage, ancient kingdoms, and
                diverse religious influences.
              </p>
              <h4>Highlights</h4>
              <ul className="feature-list">
                <li>Vesak Festival (Buddhist celebrations)</li>
                <li>Kandy Esala Perahera</li>
                <li>Traditional Kandyan dance forms</li>
                <li>Village lifestyles and customs</li>
              </ul>
            </div>

            {/* Sri Lankan Food */}
            <div className="content-section">
              <div className="section-header">
                <div className="section-icon">
                  <FaUtensils />
                </div>
                <h2>Sri Lankan Food</h2>
              </div>
              <p>Famous for rich spices, fresh coconut, and bold flavors.</p>
              <h4>Popular Dishes</h4>
              <ul className="feature-list">
                {dishes.map((dish, index) => (
                  <li key={index}>{dish}</li>
                ))}
              </ul>
            </div>

            {/* Travel Tips */}
            <div className="content-section">
              <div className="section-header">
                <div className="section-icon">
                  <FaInfoCircle />
                </div>
                <h2>Travel Tips</h2>
              </div>
              <ul className="feature-list">
                {travelTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSriLanka;
