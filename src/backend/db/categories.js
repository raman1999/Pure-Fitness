import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Whey Protein",
    img: "https://rukminim2.flixcart.com/image/612/612/l0sgyvk0/protein-supplement/b/g/x/whey-protein-iso100-hydrolized-protein-powder-63-ser-2-3kg-5lbs-original-imagcg3ah94anqhn.jpeg?q=70",
  },
  {
    _id: uuid(),
    categoryName: "PreWorkout",
    img: "https://rukminim2.flixcart.com/image/612/612/jzu60sw0/vitamin-supplement/n/t/y/390-c4-original-pre-workout-icy-blue-razz-60-servings-cellucor-original-imafdzqzheanqqeh.jpeg?q=70",
  },
  {
    _id: uuid(),
    categoryName: "Mass Gainer",
    img: "https://m.media-amazon.com/images/I/31NIEZqxwBS._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "BCAAs",
    img: "https://rukminim2.flixcart.com/image/612/612/kbv4fww0/protein-supplement/j/x/u/real-bmnbcaa01-bigmuscles-nutrition-original-imaft4cqznjzshme.jpeg?q=70",
  },
];
