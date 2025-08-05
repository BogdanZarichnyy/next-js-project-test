import { ProductCard, type IProduct } from "@/components/ProductsCard";
import { API_URL } from "@/constants";

// вказуємо цей експорт, якщо використовуємо не fetch(), а наприклад ApoloClient чи Axios
// export const revalidate = 300;

export default async function ShopISRPage() {
  // ISR - Incremental Static Regeneration (Інкрементна генерація) - сторінки генеруються на льоту, 
  // але кешуються (сторінки при неактуальній інформації перегенеруються в фоні, можна налаштовувати 
  // таймінг обновлення сторінки і кеш), підходить для блогів і маркетплейсів

    const response = await fetch(API_URL, {
      next: { revalidate: 300 } // ISR - ревалідуємо кожні 300 секунд (5 хвилин)
    });
    const products = (await response.json()) as IProduct[];

  return (
    <>
      <span>
        ISR - Incremental Static Regeneration (Інкрементна генерація) - сторінки генеруються на льоту, 
        але кешуються (сторінки при неактуальній інформації перегенеруються в фоні, можна налаштовувати 
        таймінг обновлення сторінки і кеш), підходить для блогів і маркетплейсів
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