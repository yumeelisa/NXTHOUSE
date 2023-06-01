"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import Logo from "./Logo";
import BookingButton from "./BookingButton";
import { Globe, AlignJustify } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import CategorySection from "./CategorySection";
import { usePathname, useRouter } from "next/navigation";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import ProfileDropdown from "./ProfileMenu";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  return (
    <div className="flex flex-col sticky bg-white top-0  z-50 right-0">
      <header className="  p-4 border-b">
        <div className="max-w-7xl mx-auto flex  justify-between items-center">
          <Logo />
          <BookingButton />
          <div className="flex items-center gap-x-2 ">
            <button className="hover:bg-secondary rounded-full px-4 py-2 text-sm">
              Host your house
            </button>
            <button className="hover:bg-secondary rounded-full h-10 w-10 grid place-items-center">
              <Globe size={20} />
            </button>

            <ProfileMenu />
          </div>
        </div>
      </header>
      <CategorySection />
    </div>
  );
};

export default Header;
