import React, { useState } from 'react';
import { commingApi } from '../api/commingApi'; // Ensure this API is properly imported and contains movie data.

const Profile = () => {
  const [search, setSearch] = useState("");

  // Filter movies based on the search query
  const filteredMovies = commingApi.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-secondary pt-[80px] px-4 sm:px-[10%]">
      {/* Search Input */}
      <div className="py-10 flex justify-center">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          className="py-3 rounded-full w-full outline-none pl-5"
          placeholder="Search Here..."
        />
      </div>

      {/* Movie List */}
      <div className="grid grid-cols-7 gap-3">
        {(search === "" ? commingApi : filteredMovies).map((movie, index) => (
          <div key={index}>
            <img src={movie.image} alt={movie.name} className="h-[250px]" />
            <p className="text-white">{movie.name}</p>
          </div>
        ))}

        {/* No Movies Found Message */}
        {search !== "" && filteredMovies.length === 0 && (
          <p className="text-white col-span-7">No movies found!</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
