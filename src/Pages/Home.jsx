import React, { useState } from "react";
import axios from "axios";
import TextType from "../Components/TextType";
import Prism from "../Components/Prism";

function Home() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = async () => {
    if (!search.trim()) {
      alert("Please enter something to search");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${search}`,
        {
          headers: {
            Authorization:
              `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
          },
        }
      );

      console.log(response.data);

      // Store API results
      setResult(response.data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">

      {/* Animated Prism Background */}
    <div className="fixed inset-0 z-0">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>

      {/* Content Above Background */}
      <div className="relative z-10 min-h-screen flex flex-col items-center px-4 pt-32 pb-10">

        {/* Typing Text */}
        <div className="text-center flex   font-mono text-3xl sm:text-4xl font-bold text-white mb-10">
          <TextType
            text={["Welcome To Image Gallery"]}
            typingSpeed={55}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter=""
            deletingSpeed={70}
            cursorBlinkDuration={0.5}
          />
        </div>

        {/* Heading */}
        <p className="text-3xl sm:text-4xl font-bold mt-5 text-white font-mono text-center mb-6">
          IMAGE SEARCH GALLERY
        </p>

        {/* Search Box */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 p-5">
        <input
        type="text"
        placeholder="Search image...."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-80 px-5 py-3 rounded-full bg-transparent border border-white text-white shadow-md outline-none focus:ring-2 focus:ring-blue-500"
        />

     <button
     onClick={handleSubmit}
     className="px-6 py-3 text-xl outline-dotted bg-transparent shadow-lg text-white font-semibold rounded-full hover:bg-gray-500 transition duration-300 active:scale-95"
     >
     🔎 Search
     </button>
     </div>


        {/* Images */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
        {result.map((item) => (
        <div key={item.id} className="flex justify-center">
        <img
        src={item.urls.regular}
        alt={item.alt_description || "Image"}
        className="w-full h-56 object-cover rounded-xl shadow-lg"
        />
        </div>
       ))}
       </div>

     
     
      
    </div>
    
    </div>
  );
}

export default Home;