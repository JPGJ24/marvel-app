import { Hero } from "../Hero";

export interface ModalHeroProps {
  hero: Hero | null;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}
