"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathName = usePathname();
  const active = href === pathName;
  return (
    <Link className={active ? "font-bold" : ""} href={href}>
      {children}
    </Link>
  );
}
