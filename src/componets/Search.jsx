import  { useState } from 'react';

function Search() {
  const [search, setSearch] = useState('');

  return (
    <div className='flex flex-row    bg-[#759eda] p-4'>
    <div className=" flex  items-center w-40 ">
      <input className="focus:outline-none ml-5 p-2 text-[#ccdbf1] cursor-text "
        type="text"
        placeholder="Type a city name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
    <div className="text-center flex items-center justify-center w-md">
      <button className="bg-[#5879c7] text-[#0a0d53] p-2  focus:outline-none cursor-pointer">
        Find Weather
      </button>
      </div>
    </div>

  );
}

export default Search;


