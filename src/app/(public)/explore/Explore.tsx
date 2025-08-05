'use client'

import { useSearchParams } from "next/navigation";

export default function Explore() {
  // клієнтский підхід витягування параметрів
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag');
  // console.log(tag);
  
  // SHOW SERVER OPTION


  return (
    <h1 className="text-3xl font-bold mb-6">
      Explore {!!tag && `by #${tag}`}
    </h1> 
  );
// при збірці проекту, білдер буде видавати помилку значення useSearchParams(), це специфічний хук,
// тому такі компоненти обов'язково потрібно обгортати в <Suspense>{ наш компонент }</Suspense> реакта
}