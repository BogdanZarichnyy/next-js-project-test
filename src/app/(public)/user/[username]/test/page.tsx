import type { Metadata } from "next";

type Params = {
  username: string
}

// http://localhost:3000/user/dkfjng/test
export async function generateMetadata({ // динамічна підгрузка SEO даних
  params
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  return {
    title: '@' + (await params).username
  }
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