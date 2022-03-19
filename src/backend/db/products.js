import { v4 as uuid } from 'uuid';
import mbprotein from '../../images/mb-protein.png';
import myprotein from '../../images/myprotein.jpeg';
import mygainer from '../../images/my-gainer.jpg';
import dygainer from '../../images/dygainer.png';
import ongainer from '../../images/on-gainer.png';
import c4pre from '../../images/c4-pre.png';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    price: '5000',
    originalPrice: "6000",
    categoryName: 'Whey Protein',
    brand: 'MuscleBlaze',
    stockQuantity: '5',
    img: mbprotein,
    rating: 4,
  },
  {
    _id: uuid(),
    price: '3000',
    originalPrice: "6000",
    categoryName: 'Whey Protein',
    brand: 'MyProtein',
    stockQuantity: '5',
    img: myprotein,
    rating: 1,
  },
  {
    _id: uuid(),
    price: '5000',
    originalPrice: "6000",
    categoryName: 'Mass Gainer',
    brand: 'MyProtein',
    stockQuantity: '5',
    img: mygainer,
    rating: 3,
  },
  {
    _id: uuid(),
    price: '5000',
    originalPrice: "6000",
    categoryName: 'Mass Gainer',
    brand: 'Optimum Nutrition',
    stockQuantity: '5',
    img: ongainer,
    rating: 2,
  },
  {
    _id: uuid(),
    price: '4000',
    originalPrice: "6000",
    categoryName: 'Mass Gainer',
    brand: 'Dynamatize',
    stockQuantity: '5',
    img: dygainer,
    rating: 5,
  },
  {
    _id: uuid(),
    price: '3000',
    originalPrice: "6000",
    categoryName: 'PreWorkout',
    brand: 'Cellucor C4',
    stockQuantity: '5',
    img: c4pre,
    rating: 5,
  },
];
