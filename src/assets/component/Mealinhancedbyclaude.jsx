import React, { useEffect, useState } from "react";
import { Search, Clock, Users, ChefHat } from "lucide-react";

const Mealinhancedbyclaude = () => {
  const [mealData, setMealData] = useState([]);
  const [area, setArea] = useState("Indian");
  const [inputData, setInputData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);

  const cuisines = [
    { name: "Indian", colors: "from-purple-400 to-pink-400" },
    { name: "Chinese", colors: "from-yellow-400 to-orange-400" },
    { name: "Italian", colors: "from-red-400 to-pink-400" },
    { name: "Mexican", colors: "from-green-400 to-emerald-400" },
    { name: "French", colors: "from-blue-400 to-indigo-400" },
    { name: "Thai", colors: "from-teal-400 to-cyan-400" },
    { name: "American", colors: "from-indigo-400 to-purple-400" },
    { name: "British", colors: "from-orange-400 to-red-400" },
    { name: "Japanese", colors: "from-pink-400 to-rose-400" },
    { name: "Greek", colors: "from-cyan-400 to-blue-400" },
  ];

  useEffect(() => {
    fetchDataFromApi();
  }, [area]);

  const fetchDataFromApi = async () => {
    setLoading(true);
    setError("");
    try {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      
      if (!api.ok) {
        throw new Error('Failed to fetch meals');
      }
      
      const data = await api.json();
      setMealData(data.meals || []);
    } catch (err) {
      setError("Failed to load meals. Please try again.");
      setMealData([]);
    } finally {
      setLoading(false);
    }
  };

  const submitHandler = async (e) => {
    if (e) e.preventDefault();
    if (!inputData.trim()) return;

    setLoading(true);
    setError("");
    try {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData.trim()}`
      );
      
      if (!api.ok) {
        throw new Error('Failed to search meals');
      }
      
      const data = await api.json();
      
      if (!data.meals) {
        setError(`No meals found for "${inputData}"`);
        setMealData([]);
      } else {
        setMealData(data.meals);
        setArea(""); // Clear area selection when searching
      }
    } catch (err) {
      setError("Search failed. Please try again.");
      setMealData([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchMealDetails = async (mealId) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const data = await response.json();
      setSelectedMeal(data.meals[0]);
    } catch (err) {
      console.error("Failed to fetch meal details:", err);
    }
  };

  const clearSearch = () => {
    setInputData("");
    setError("");
    if (area) {
      fetchDataFromApi();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <ChefHat className="w-8 h-8 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-800">Meal Discovery</h1>
          </div>
          <p className="text-gray-600 mt-2">Discover delicious recipes from around the world</p>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
                  <Search className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
                </div>
                <input
                  value={inputData}
                  onChange={(e) => setInputData(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && submitHandler(e)}
                  type="text"
                  placeholder="Search for cuisines, dishes, or ingredients..."
                  className="w-full py-6 pl-16 pr-32 text-lg text-gray-800 placeholder-gray-400 bg-transparent border-none outline-none focus:ring-0"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-2">
                  {inputData && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      Clear
                    </button>
                  )}
                  <button
                    onClick={submitHandler}
                    disabled={loading || !inputData.trim()}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Searching..." : "Search"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cuisine Filter Buttons */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Explore by Cuisine</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
            {cuisines.map((cuisine) => (
              <button
                key={cuisine.name}
                onClick={() => setArea(cuisine.name)}
                className={`px-4 py-3 rounded-xl text-white font-semibold bg-gradient-to-r ${cuisine.colors} hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 ${
                  area === cuisine.name ? "ring-4 ring-white ring-opacity-50 scale-105" : ""
                }`}
              >
                {cuisine.name}
              </button>
            ))}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="max-w-2xl mx-auto mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            <span className="ml-3 text-gray-600">Loading delicious meals...</span>
          </div>
        )}

        {/* Results Count */}
        {!loading && mealData.length > 0 && (
          <div className="text-center mb-6">
            <p className="text-gray-600">
              Found <span className="font-semibold text-purple-600">{mealData.length}</span> recipes
              {area && !inputData && (
                <span> from <span className="font-semibold">{area}</span> cuisine</span>
              )}
            </p>
          </div>
        )}

        {/* Meal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {mealData.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1"
              onClick={() => fetchMealDetails(meal.idMeal)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-sm leading-tight line-clamp-2">
                  {meal.strMeal}
                </h3>
                <div className="mt-2 flex items-center text-xs text-gray-500">
                  <ChefHat className="w-3 h-3 mr-1" />
                  <span>Click for recipe</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {!loading && mealData.length === 0 && !error && (
          <div className="text-center py-12">
            <ChefHat className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No meals found</h3>
            <p className="text-gray-500">Try a different search term or select a cuisine above</p>
          </div>
        )}
      </div>

      {/* Modal for meal details */}
      {selectedMeal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedMeal.strMealThumb}
                alt={selectedMeal.strMeal}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedMeal(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedMeal.strMeal}</h2>
              
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>Serves 4</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>30-45 mins</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedMeal.strArea}
                </span>
                {selectedMeal.strCategory && (
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium ml-2">
                    {selectedMeal.strCategory}
                  </span>
                )}
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Instructions</h3>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedMeal.strInstructions}
                </div>
              </div>

              {selectedMeal.strYoutube && (
                <div className="mb-4">
                  <a
                    href={selectedMeal.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Watch Recipe Video
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mealinhancedbyclaude;