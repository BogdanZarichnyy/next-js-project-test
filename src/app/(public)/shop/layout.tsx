'use client'

import type { PropsWithChildren } from "react";
// import { ShopMenu } from "./ShopMenu";
import dynamic from "next/dynamic"; // ця штука потрібна для оптимізації

// якщо не співпадають сторінки на сервері і на клієнті, 
// то Next покаже помилку, інколи таке трапляється в SSR,
// тому необхідно зробити слідуючу маніпуляцію з експортом компонента
const DynamicShopMenu = dynamic(
  () => import('./ShopMenu').then((mod) => mod.ShopMenu),
  { 
    ssr: false, 
    loading: () => <div>Loading...</div> // тут зручно використовувати скелетони поки грузяться дані
  }
);

export default function Layout({ children }: 
  PropsWithChildren<unknown>
) {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      {/* <ShopMenu /> */}
      <DynamicShopMenu />
      {children}
    </div>
  );
}