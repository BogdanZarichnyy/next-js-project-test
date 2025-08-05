type Params = {
  username: string
}

export default async function TestPage({
  params
}: {
  params: Promise<Params>
}) { 
  // серверний підхід витягування параметрів
  const { username } = await params;

  return (
    <h1 className="text-3xl font-bold mb-6">
      Profile @{username}
    </h1> 
  );
// в такому разі цей компонент вже буде серверним, і використовувати хуки тут неможливо
}