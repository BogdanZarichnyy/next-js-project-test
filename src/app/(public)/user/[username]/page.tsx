import type { Metadata } from "next";
import Profile from "./Profile";

export const metadata: Metadata= {
  title: 'Profile'
}

export default function ProfilePage() {  //файл page.tsx по замовчуванню являється серверним компонентом
  return <Profile />
}