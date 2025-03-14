import { useEffect, useState } from "react";
import MealsItem from "./MealsItem";
import Error from "./Error";
import useHttp from "../hooks/useHttp";

const requestConfig = {};

export default function Meals() {
  // const [loadedMeals, setLoadedMeals] = useState([]);
  // 상태값을 사용하여 음식 데이터를 저장
  // 이는 비동기로 처리되기 때문에 초기에는 데이터를 표기할 수 없어 상태 변경 시 다시 렌더링되도록 함

  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">fetching ...</p>;
  }

  if (error) {
    return <Error title="failed to fetch meals" message={error} />;
  }

  // useEffect(() => {
  //   async function fetchMeals() {
  //     const response = await fetch("http://localhost:3000/meals");
  //     if (!response.ok) {
  //       // throw new Error("Something went wrong!");
  //     }
  //     const meals = await response.json();

  //     setLoadedMeals(meals);
  //   }

  //   fetchMeals();
  // }, []);
  // useEffect를 사용하지 않으면 fetchMeals 함수가 렌더링될 때마다 호출되어 무한 반복됨

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealsItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
