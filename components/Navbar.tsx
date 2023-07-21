import { useState, useEffect, FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { NavbarProps } from "@/interfaces/props/NavbarProps";
import {
  ActiveNavLink,
  IConBell,
  IConSettings,
  Ul,
} from "@/styles/components/ui/Navbar.styles";
import { BellNotification, LogoMarvel, Settings } from "@/assets/ui/navbar-svg";

const NavbarApp: FC<NavbarProps> = () => {
  const router = useRouter();

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <Ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={router.pathname == "/" ? "active" : "inactive"}
      >
        <ActiveNavLink className="flex items-center">
          <Link href="/">HOME</Link>
        </ActiveNavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={router.pathname == "/personajes" ? "active" : "inactive"}
      >
        <ActiveNavLink className="flex items-center">
          <Link href="/personajes">PERSONAJES</Link>
        </ActiveNavLink>
      </Typography>
    </Ul>
  );

  return (
    <div
      className=""
      style={{
        height: "7.25rem",
        display: "flex",
        alignItems: "center",
        background: "black",
      }}
    >
      <div className="container mx-auto flex items-center ">
        <div className="ml-20">
          <LogoMarvel />
        </div>

        <div className="hidden lg:block ml-20">{navList}</div>

        <div
          className="hidden lg:block mr-10"
          style={{ display: "flex", position: "absolute", right: "0" }}
        >
          <IConBell>
            <BellNotification />
          </IConBell>

          <IConSettings className="ml-5">
            <Settings />
          </IConSettings>
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div style={{ display: "flex" }}>
            <BellNotification />
            <Settings />
          </div>
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </div>
      </MobileNav>
    </div>
  );
};
export default NavbarApp;
