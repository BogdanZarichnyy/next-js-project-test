type Params = {
  tag?: string
}

export default async function TestPage({
  searchParams
}: {
  searchParams: Promise<Params>
}) { 
  // серверний підхід витягування параметрів
  const { tag } = await searchParams;

  return (
    <h1 className="text-3xl font-bold mb-6">
      Explore {!!tag && `by #${tag}`}
    </h1> 
  );
// в такому разі цей компонент вже буде серверним, і використовувати хуки тут неможливо
}