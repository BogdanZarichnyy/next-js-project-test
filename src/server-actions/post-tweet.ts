'use server'

export async function postTweet(
  formdata: FormData
) {
  const content = formdata.get('content');
  // результат серверних екшенів не показуються в devTools браузерів, а тільки в консолі сервера
  // в нашому випадку результат консолі буде виведений в терміналі редактора
  console.log(content);
}