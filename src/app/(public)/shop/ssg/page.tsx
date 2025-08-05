import { ProductCard, type IProduct } from "@/components/ProductsCard";
import { API_URL } from "@/constants";

export default async function ShopSSGPage() {
  // SSG (Static Site Generation - Статична генерація)- це чиста статика, вона формується 
  // тільки на етапі збірки проекту, тому і швидко завантажується: при будь-яких змінах 
  // в таких компонентах, необхідно заново перезбирати проект щоб їх відобразити
  const response = await fetch(API_URL);
  const products = (await response.json()) as IProduct[];

  return (
    <>
      <span>
        SSG (Static Site Generation - Статична генерація)- це чиста статика, вона формується 
        тільки на етапі збірки проекту, тому і швидко завантажується: при будь-яких змінах 
        в таких компонентах, необхідно заново перезбирати проект щоб їх відобразити
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