import React, { useEffect, useState } from "react";
import "./meal.css";
const Meal = () => {
  const [mealData, setMealData] = useState([]);
  const [area, setArea] = useState('indian');
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();

      console.log(data.meals);

      setMealData(data.meals);
    };
    fetchDataFromApi();
  }, [area]);

  const sumbitHandler = async (e) => {
    e.preventDefault();

    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
    );
    const data = await api.json();

    console.log("search data = ", data.meals);
    setMealData(data.meals);
  };
  return (
    <>
      {/* <form
        onSubmit={sumbitHandler}
        className="mx-10 text-center my-4 text-black"
      >
        <input onChange={(e) => setInputData(e.target.value)} type="text" />
      </form> */}

      <form onSubmit={sumbitHandler} className="mx-10 text-center my-8">
        <div className="relative max-w-2xl mx-auto">
          {/* Search Input Container */}

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-all duration-300"></div>

            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Search Icon */}

              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300"></div>

              {/* Input Field */}

              <input
                onChange={(e) => setInputData(e.target.value)}
                type="text"
                placeholder="Search for cuisines, dishes, or ingredients..."
                className="w-full py-6 pl-16 pr-32 text-lg text-gray-800 placeholder-gray-400 bg-transparent border-none outline-none focus:ring-0"
              />

              {/* Search Button */}

              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* <div className="grid grid-cols-3 sm:gridcols--4 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4"> */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4"> */}
      {/* <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 lg:gap-6 p-4 sm:p-6 lg:p-8"> */}
      {/* <div className="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4"> */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-4">
        <button
          onClick={() => setArea("Indian")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Indian" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Indian
        </button>
        <button
          onClick={() => setArea("Canadian")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Canadian" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Canadian
        </button>
        <button
          onClick={() => setArea("American")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-green-400 to-emerald-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "American" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          American
        </button>
        <button
          onClick={() => setArea("Chinese")}
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Chinese" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Chinese
        </button>
        <button
          onClick={() => setArea("Italian")}
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-red-400 to-pink-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Italian" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Italian
        </button>
        <button
          onClick={() => setArea("Russian")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Russian" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Russian
        </button>
        <button
          onClick={() => setArea("Thai")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-teal-400 to-blue-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Thai" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Thai
        </button>

        <button
          onClick={() => setArea("British")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-orange-400 to-red-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "British" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          British
        </button>
        <button
          onClick={() => setArea("Croatian")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Croatian" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Croatian
        </button>
        <button
          onClick={() => setArea("Dutch")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Dutch" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Dutch
        </button>
        <button
          onClick={() => setArea("Egyptian")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-green-400 to-emerald-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Egyptian" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Egyptian
        </button>
        <button
          onClick={() => setArea("French")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "French" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          French
        </button>
        <button
          onClick={() => setArea("Greek")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-red-400 to-pink-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Greek" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Greek
        </button>
        <button
          onClick={() => setArea("Irish")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Irish" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Irish
        </button>
        <button
          onClick={() => setArea("Jamaican")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-teal-400 to-blue-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Jamaican" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Jamaican
        </button>
        <button
          onClick={() => setArea("Kenyan")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-orange-400 to-red-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Kenyan" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Kenyan
        </button>
        <button
          onClick={() => setArea("Malaysian")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Malaysian" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Malaysian
        </button>
        <button
          onClick={() => setArea("Mexican")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Mexican" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Mexican
        </button>
        <button
          onClick={() => setArea("Moroccan")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-green-400 to-emerald-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Moroccan" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Moroccan
        </button>
        <button
          onClick={() => setArea("Polish")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Polish" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Polish
        </button>
        <button
          onClick={() => setArea("Portuguese")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-red-400 to-pink-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Portuguese" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Portuguese
        </button>
        <button
          onClick={() => setArea("Tunisian")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Tunisian" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Tunisian
        </button>
        <button
          onClick={() => setArea("Turkish")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-teal-400 to-blue-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Turkish" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Turkish
        </button>
        <button
          onClick={() => setArea("Vietnamese")}
          type="button"
          className={`px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-orange-400 to-red-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mx-3 ${
            area === "Vietnamese" ? "ring-4 ring-white ring-opacity-50" : ""
          }`}
        >
          Vietnamese
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {mealData.map((data) => (
          <div key={data.idMeal} style={{ textAlign: "center" }}>
            <div>
              <img
                src={data.strMealThumb}
                alt=""
                style={{
                  width: "230px",
                  borderRadius: "10px",
                  border: "2px solid white",
                }}
              />
            </div>
            <h5>{data.strMeal}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default Meal;
