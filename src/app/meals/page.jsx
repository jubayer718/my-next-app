"use client"
import { useEffect, useState } from "react";


const page = () => {

  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const fetchMeals = async() => {
    try {
      const res =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      const data = await res.json();
      setMeals(data?.meals||[])
      return data.meals;
    } catch(error) {
      console.log(error);
      return []
    }
  }


  useEffect(() => {
    fetchMeals();
  }, [search])
  

  return (
    <div>

      <div className="flex justify-center my-12">
        input:
        <input className="text-black" value={search} onChange={(e)=>setSearch(e.target.value)} type="text" />
</div>

        <div className="grid grid-cols-4 gap-4  ">
      {
        meals.map(singleMeals => {
          return (
            <div className="border rounded-lg p-3" key={singleMeals?.idMeal}>
              <h2 className="text-2xl font-bold">{singleMeals?.strMeal}</h2>
              <p className="font-semibold">{ singleMeals?.strInstructions}</p>
            </div>
          )
        })
     }
    </div>
  </div>
  );
};

export default page;