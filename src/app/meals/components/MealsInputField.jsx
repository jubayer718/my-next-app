"use client"
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MealsInputField = () => {
  //  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  const pathname = usePathname();
  const router = useRouter();


  useEffect(() => {

    const searchQuery = { search };
    const urlQueryParams = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParams}`;
    router.push(url)
  }, [search])
  
  return (
    <div>
       input:
        <input className="text-black" value={search} onChange={(e)=>setSearch(e.target.value)} type="text" />
    </div>
  );
};

export default MealsInputField;