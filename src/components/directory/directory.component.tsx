import { Key } from 'react';

import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};


const categories = [
  {
    id: 1,
    title: "hoodies",
    imageUrl: "https://images.pexels.com/photos/724499/pexels-photo-724499.jpeg?auto=compress&cs=tinysrgb&w=760&h=250&dpr=2",
    route: "shop/hoodies",
  },
  {
    id: 2,
    title: "sunglasses",
    imageUrl: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=760&h=250&dpr=2",
    route: "shop/sunglasses",
  },
  {
    id: 3,
    title: "shoes",
    imageUrl: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=760&h=250&dpr=2",
    route: "shop/shoes",
  },
  {
    id: 4,
    title: "suits",
    imageUrl: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=760&h=250&dpr=2",
    route: "shop/suits",
  },
  {
    id: 5,
    title: "hats",
    imageUrl: "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=760&h=250&dpr=2",
    route: "shop/hats",
  },
  {
    id: 6,
    title: "sweaters",
    imageUrl: "https://images.pexels.com/photos/3626313/pexels-photo-3626313.jpeg?auto=compress&cs=tinysrgb&w=760&h=250&dpr=2",
    route: "shop/sweaters"
  }
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
