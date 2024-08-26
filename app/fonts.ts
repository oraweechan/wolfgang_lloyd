import { Archivo_Black, Archivo_Narrow, Nunito } from "next/font/google";

export const archivo_black = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

export const archivo_narrow = Archivo_Narrow({
  subsets: ["latin"],
});

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Specify the weights you want to use
});