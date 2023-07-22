import { useState, useEffect, FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Typography, IconButton, Dialog } from "@material-tailwind/react";
import { NavbarProps } from "@/interfaces/props/NavbarProps";
import {
  ActiveNavLink,
  IConBell,
  IConSettings,
  NavbarContainer,
  Ul,
} from "@/styles/components/ui/Navbar.styles";
import {
  BellNotification,
  CloseMenuMobil,
  LogoMarvel,
  MenuMobil,
  Settings,
} from "@/assets/ui/navbar-svg";

const NavbarApp: FC<NavbarProps> = () => {
  const router = useRouter();

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleOpen = () => {
    setOpenNav(!openNav);
  };
  const handleCloseModal = () => {
    setOpenNav(false);
  };

  const navList = (
    <Ul
      className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row
     lg:items-center lg:gap-6"
    >
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={router.pathname == "/" ? "active" : "inactive"}
      >
        <ActiveNavLink className="flex items-center" onClick={handleCloseModal}>
          <Link href="/">HOME</Link>
        </ActiveNavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={router.pathname == "/characters" ? "active" : "inactive"}
      >
        <ActiveNavLink className="flex items-center" onClick={handleCloseModal}>
          <Link href="/characters">PERSONAJES</Link>
        </ActiveNavLink>
      </Typography>
    </Ul>
  );

  return (
    <NavbarContainer>
      <div className="container mx-auto flex items-center">
        <div className="ml-20">
          <LogoMarvel />
        </div>
        <div className="hidden lg:block ml-20">{navList}</div>
        <div className="hidden lg:block mr-10 flex absolute right-0">
          <IConBell>
            <BellNotification />
          </IConBell>
          <IConSettings className="ml-5">
            <Settings />
          </IConSettings>
        </div>
        <IconButton
          variant="text"
          className="p-20 h-6 w-6 absolute right-0 text-inherit hover:bg-transparent
           focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <CloseMenuMobil /> : <MenuMobil />}
        </IconButton>
      </div>
      <Dialog
        open={openNav}
        size={"sm"}
        handler={handleOpen}
        className="lg:hidden bg-black m-0 h-full absolute top-0 left-0"
        style={{ border: "1px solid #3c3c41" }}
      >
        <button
          className="absolute top-0 right-0 m-8 text-F0E6D2 border-none"
          color="blue"
          onClick={handleCloseModal}
        >
          X
        </button>
        <div className="container mx-auto">{navList}</div>
      </Dialog>
    </NavbarContainer>
  );
};
export default NavbarApp;
