import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const notesRef = useRef(null);
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');

  // Effect to scroll when "scrollToNotes" state is present
  useEffect(() => {
    if (location.state?.scrollToNotes && notesRef.current) {
      notesRef.current.scrollIntoView({ behavior: "smooth" });

      // Reset state in history to prevent scrolling on reload
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div ref={notesRef} className="mt-30 flex flex-col items-center">
      <h1 className="text-7xl font-bold">It's Time</h1>
      <h2 className="text-5xl font-semibold mb-10">
        {location.state?.scrollToNotes ? "Update Notes" : "Create Notes"}
      </h2>

      {/* Scroll target */}
      <div className="w-[80%] border rounded-xl p-5 flex place-content-between">
        <input 
          type="text"
          className="text-lg font-semibold focus:outline-none w-[68%]"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="rounded-full">
          Create My Note
        </button>
      </div>

      <textarea
        className="mt-10 p-5 border rounded-2xl w-[80%] mb-20"
        value={value}
        rows={20}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Notes Here"
      />
    </div>
  );
};

export default Home;
