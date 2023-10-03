// Importing necessary components and libraries
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";

// Navbar component
const Navbar = () => {
  return (
    <nav
      // Adding styles to the navbar
      className="flex-between background-light900_dark200 
    fixed z-50 w-full gap-5 p-6 shadow-light-300 
    dark:shadow-none sm:px-12"
    >
      {/* Logo and site name section */}
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="EmergingDev"
        />
        <p className="h2-bold font-spaceGrotesk text-purple-700">
          Emerging{" "}
          <span
            className="h2-bold font-spaceGrotesk text-dark-100
         dark:text-light-900 max-sm:hidden"
          >
            Dev
          </span>
        </p>
      </Link>

      {/* Placeholder for a global search component */}
      GlobalSearch
      
      <div className="flex-between gap-5">
        {/* Placeholder for a theme switcher or icon */}
        Theme

        {/* User button that displays when a user is signed in */}
        <SignedIn>
          <UserButton 
            afterSignOutUrl="/" 
            appearance={{
              elements: {
                  avatarBox: 'h-10 w-10'
              },
              variables: {
                  colorPrimary: '#7300ff'
              }
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
};

// Exporting the Navbar component
export default Navbar;

