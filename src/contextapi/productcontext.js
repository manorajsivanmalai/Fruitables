import { createContext } from "react";
import { useState } from "react";
import orange from '../img/fruite-item-1.jpg'
import apple from '../img/fruite-item-2.jpg'
import mango from '../img/fruite-item-3.jpg'
import pinaple from '../img/fruite-item-4.jpg'
import banana from '../img/fruite-item-5.jpg'
import straberry from '../img/fruite-item-6.jpg'

export const ProductContext = createContext();

const ProducutProvider = ({ children }) => {
    const [products, setProducts] = useState([
        {
          id: 1,
          price: 40.99,
          quantity: 0,
          name: "Orange",
          imgName: orange,
          card: false,
        },
        {
          id: 2,
          price: 25.50,
          quantity: 0,
          name: "Apple",
          imgName: apple,
          card: false,
        },
        {
          id: 3,
          price: 15.75,
          quantity: 0,
          name: "Banana",
          imgName: mango,
          card: false,
        },
        {
          id: 4,
          price: 12.00,
          quantity: 0,
          name: "Grapes",
          imgName: pinaple,
          card: false,
        },
        {
          id: 5,
          price: 8.99,
          quantity: 0,
          name: "Strawberry",
          imgName: banana,
          card: false,
        },
        {
          id: 6,
          price: 30.49,
          quantity: 0,
          name: "Pineapple",
          imgName: straberry,
          card: false,
        },
        {
          id: 7,
          price: 22.99,
          quantity: 1,
          name: "Mango",
          imgName: straberry,
          card: true,
        },
        {
          id: 8,
          price: 18.75,
          quantity: 0,
          name: "Peach",
          imgName:banana,
          card: false,
        },
        {
          id: 9,
          price: 9.49,
          quantity: 0,
          name: "Kiwi",
          imgName: banana,
          card: false,
        },
        {
          id: 10,
          price: 45.00,
          quantity: 0,
          name: "Watermelon",
          imgName: banana,
          card: false,
        },
        {
          id: 11,
          price: 40.99,
          quantity: 0,
          name: "Orange",
          imgName: orange,
          card: false,
        },
        {
          id: 12,
          price: 40.99,
          quantity: 0,
          name: "Orange",
          imgName: orange,
          card: false,
        },
        {
          id: 13,
          price: 9.49,
          quantity: 0,
          name: "Kiwi",
          imgName: banana,
          card: false,
        },
        {
          id: 14,
          price: 9.49,
          quantity: 0,
          name: "Kiwi",
          imgName: banana,
          card: false,
        },
      ]);
      const [addcardCount, setAddcardCount] = useState(0);
      return <ProductContext.Provider value={{products, setProducts, addcardCount, setAddcardCount}}>{children}</ProductContext.Provider>;
}

export  default ProducutProvider;