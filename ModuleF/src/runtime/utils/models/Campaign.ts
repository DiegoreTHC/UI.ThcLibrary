import type { Appearance } from "./Appearance";
import type { Media } from "./Media";

export interface Campaign {
  id?: string;
  slug?: string,
  direction?: 'rtl' | 'ltr';
  title?: string;
  subtitle?: string;
  copy?: string;
  disclaimer?: string;
  btnText?: string;
  link?: string;
  media?: Media;
  appearance?: Appearance
}