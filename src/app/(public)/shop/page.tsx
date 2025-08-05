import { ProductCard, type IProduct } from "@/components/ProductsCard";
import { API_URL } from "@/constants";

// вказуємо цей експорт, якщо використовуємо не fetch(), а наприклад ApoloClient чи Axios
// export const dynamic = 'force-dynamic';

export default async function ShopSSRPage() {
  // SSR (Server-Side Rendering - Рендерінг на сервері)- це чиста динаміка, 
  // формується на сервері і ввідається клієнту готова сторінка: при будь-яких 
  // змінах в таких компонентах сервер буде наново генерувати контент
  const response = await fetch(API_URL, {
    cache: 'no-store' // SSR
  });
  const products = (await response.json()) as IProduct[];

  return (
    <>
    <span>
      SSR (Server-Side Rendering - Рендерінг на сервері)- це чиста динаміка, 
      формується на сервері і ввідається клієнту готова сторінка: при будь-яких 
      змінах в таких компонентах, сервер буде наново генерувати контент
    </span>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product: IProduct) =>
          <ProductCard 
            key={product.id} 
            {... product}
          />
        )}
      </div>
    </>
  );
}