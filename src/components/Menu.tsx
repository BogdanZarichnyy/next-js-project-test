'use client'

import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { MENU } from "./menu.data";
import MenuItem from "./MenuItem";
import { match } from "path-to-regexp";

export default function Menu() {
  const pathname = usePathname();
  console.log('pathname', pathname);

  // const segment = useSelectedLayoutSegment();
  // console.log('segment', segment);

  return (
    <nav className="flex gap-6">
      {MENU.map((menu) => (
        <MenuItem 
          key={menu.name}
          menuItem={menu}
          // isActive={pathname === menu.href} // погано працює із вложеними шляхами
          isActive={!!match(menu.href)(pathname)} // тому потрібно використати інший підхід
        />
      ))}
    </nav>
  );
}