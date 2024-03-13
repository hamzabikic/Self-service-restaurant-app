export interface Proizvod {
  id:number;
  nazivProizvoda:string;
  cijena:number;
  slika:string;
  nutritivneVrijednosti : nutritivneVrijednosti;
}
export interface nutritivneVrijednosti {
  Dodaci:string;
  Kalorije:number;
  Ugljikohidrati:number;
  Masti:number;
  Proteini:number;
}
export interface korpaProizvod {
  id:number,
  naziv:string;
  cijena:number;
  kolicina:number
}
export class Proizvodi {
  static listaBurgera:Proizvod[] = [
    {
      id:1,
      nazivProizvoda : "Classic Burger",
      cijena:4.00,
      slika:"https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Hamburger-new:1-3-product-tile-desktop?wid=829&hei=515&dpr=off" ,
      nutritivneVrijednosti : {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije: 253,
        Ugljikohidrati: 30.1,
        Masti: 8.5,
        Proteini: 13
      }
    },
    {
      id:2,
      nazivProizvoda : "CheeseBurger",
      cijena:5.00,
      slika: "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Cheeseburger-new:1-3-product-tile-desktop?wid=829&hei=515&dpr=off",
      nutritivneVrijednosti : {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije: 302,
        Ugljikohidrati: 30.9,
        Masti: 12.4,
        Proteini: 15.7
      }
    },
    {
      id:3,
      nazivProizvoda : "JAM! Burger",
      cijena:8,
      slika: "https://s7d1.scene7.com/is/image/mcdonalds/Header_BigMac_832x472:1-3-product-tile-desktop?wid=763&hei=472&dpr=off",
      nutritivneVrijednosti : {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije: 526,
        Ugljikohidrati: 42.6,
        Masti: 26.9,
        Proteini: 26.7
      }
    },
    {
      id:4,
      nazivProizvoda: "Double Cheeseburger",
      cijena: 7.00,
      slika: "https://facts.net/wp-content/uploads/2023/06/McDonalds-Double-Cheeseburger-730x494.jpg",
      nutritivneVrijednosti: {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije: 440,
        Ugljikohidrati: 30.6,
        Masti: 23.1,
        Proteini: 26.4
      }
    },
    {
      id:5,
      nazivProizvoda:"Chickenburger",
      cijena:5.00,
      slika:"https://www.mcdonalds.it/sites/default/files/products/meta/chickenburger--hero-meta.jpg",
      nutritivneVrijednosti: {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije: 253,
        Ugljikohidrati: 30.1,
        Masti: 8.5,
        Proteini: 13
      }
    },
    {
      id:6,
      nazivProizvoda:"Veggie Burger",
      cijena:6.50,
      slika:"https://s7d1.scene7.com/is/image/mcdonalds/mcd-Veggie-burger-deluxe-uae:1-3-product-tile-desktop?wid=829&hei=515&dpr=off",
      nutritivneVrijednosti: {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije: 383,
        Proteini: 17.2,
        Ugljikohidrati: 42.9,
        Masti:16.3
      }
    },
    {
      id:7,
      nazivProizvoda:"Fish Burger",
      cijena:6.00,
      slika:"https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-filet-o-fish-1:1-3-product-tile-desktop?wid=829&hei=515&dpr=off",
      nutritivneVrijednosti: {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije:312,
        Proteini:13,
        Ugljikohidrati: 33.8,
        Masti:13.7
      }
    },
    {
      id:8,
      nazivProizvoda:"Double Fish Burger",
      cijena:8.00,
      slika:"https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-double-filet-o-fish-1:1-3-product-tile-desktop?wid=829&hei=515&dpr=off",
      nutritivneVrijednosti: {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije: 461,
        Proteini:22,
        Ugljikohidrati:43,
        Masti:22
      }
    },
    {
      id:9,
      nazivProizvoda:"Triple Cheeseburger",
      cijena:9,
      slika:"https://www.shutterstock.com/image-photo/triple-burger-cheddar-onion-tomato-600nw-2087903464.jpg",
      nutritivneVrijednosti: {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije: 578,
        Ugljikohidrati: 34,
        Proteini: 37,
        Masti: 32
      }
    }
  ];
  static listaPica : Proizvod[] = [
    {
      id: 11,
      nazivProizvoda: "Coca Cola",
      cijena: 4.00,
      slika: "https://shop.powerdoo.info/wp-content/uploads/2021/04/CC330-1.jpg",
      nutritivneVrijednosti: {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije: 44 * 2.5,
        Ugljikohidrati: 12 * 2.5,
        Proteini: 0,
        Masti: 0
      },
    }, {
    id:12,
  nazivProizvoda: "Coca Cola Zero",
  cijena: 4.00,
  slika:"https://bubblebar.mc/wp-content/uploads/2022/06/COCA-%E2%80%93-COLA-33CL-1.webp",
  nutritivneVrijednosti: {
    Dodaci:"Kecap, majoneza, krastavac, salata, luk",
    Kalorije:1,
    Ugljikohidrati:0,
    Proteini:0,
    Masti:0
  } },
    {
      id:13,
      nazivProizvoda: "Sprite",
      cijena: 4.00,
      slika:"https://www.vivita.hr/wp-content/uploads/2017/03/sprite-330ml.jpg",
      nutritivneVrijednosti: {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije:40*2.5,
        Ugljikohidrati:10.83*2.5,
        Proteini:0,
        Masti:0
      } },

  ];
  static listaAkcija :Proizvod[] = [
    {
      id:21,
      nazivProizvoda: "Tortilja + Pomfrit + Coca Cola",
      cijena:14,
      slika:"assets/kola%20tortilja%20pomfrit.jpeg",
      nutritivneVrijednosti : {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
         Kalorije:990,
         Ugljikohidrati:140,
         Proteini:40,
         Masti:30
      }
    },
    {
      id:22,
      nazivProizvoda: "Cheeseburger + Pomfrit + Coca Cola",
      cijena:12,
      slika:"assets/burger-kola-pomfrit.jpg",
      nutritivneVrijednosti : {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije:790,
        Ugljikohidrati:100,
        Proteini:30,
        Masti:30
      }
    },
    {
      id:23,
      nazivProizvoda: "JAM! Burger + Pomfrit + Coca Cola",
      cijena:13,
      slika:"assets/big-mac-fries.jpg",
      nutritivneVrijednosti : {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije:1015,
        Ugljikohidrati:120,
        Proteini:55,
        Masti:35
      }
    },
    {
      id:24,
      nazivProizvoda: "Chickenburger + Pomfrit + Coca Cola",
      cijena:12,
      slika:"assets/chicken-fries-cola.jpg",
      nutritivneVrijednosti : {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije:895,
        Ugljikohidrati:100,
        Proteini:45,
        Masti:35
      }
    },

  ];
  static listaTortilja : Proizvod []= [
    {
      id:31,
      nazivProizvoda:"JAM!Wrap Grilled Chicken",
      cijena:8,
      slika: "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Crispy-Chicken-Wrap-2:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
      nutritivneVrijednosti: {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije:248,
        Ugljikohidrati:31,
        Proteini:12,
        Masti:8
      }
    },
  ];
  static ListaPomfriti :Proizvod[] = [
    {
      id:41,
      nazivProizvoda:"Mali pomfrit",
      cijena:3.5,
      slika:"https://www.deluxefrenchfries.com/wp-content/uploads/2019/10/Small-Fries.jpg",
      nutritivneVrijednosti : {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije:231,
        Proteini:2.8,
        Ugljikohidrati:29.1,
        Masti:10.9
      }
    }
  ];
  static listaKolaca : Proizvod[] = [
    {
      id:51,
      nazivProizvoda:"Krofna cokolada",
      slika: "https://res.cloudinary.com/flow404/image/upload/f_auto,h_480,q_auto:good/v1/mcdonalds/krafna-coko_cot7dd",
      cijena:4,
      nutritivneVrijednosti: {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije:345,
        Proteini:4.2,
        Ugljikohidrati:32.5,
        Masti:21.7
      }
    },
    {
      id:52,
      nazivProizvoda:"Krofna vanilija",
      slika: "https://mcdonalds.bg/wp-content/uploads/2023/01/BG_CSO_7625-1.png",
      cijena:4,
      nutritivneVrijednosti: {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije:305,
        Proteini:3.4,
        Ugljikohidrati:30,
        Masti:19
      }
    },
    {
      id:53,
      nazivProizvoda:"Palacinke cokolada",
      slika: "https://www.mamagourmand.com/wp-content/uploads/2020/02/chocolate-pancakes1-1-500x500.jpg",
      cijena:8,
      nutritivneVrijednosti: {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije:721,
        Proteini:19.6,
        Ugljikohidrati:105,
        Masti:24.5
      }
    },
    {
      id:54,
      nazivProizvoda:"Proteinski palacinci",
      slika: "https://pinchmegood.com/wp-content/uploads/2022/01/IMG_4194-scaled.jpg",
      cijena:9,
      nutritivneVrijednosti: {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije:440,
        Proteini:42.4,
        Ugljikohidrati:32.8,
        Masti:13.6
      }
    },
    {
      id:55,
      nazivProizvoda:"Jabukovaca",
      slika: "https://www.biobio.hr/upload/catalog/product/14540/4654.jpg",
      cijena:6,
      nutritivneVrijednosti: {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije:220,
        Proteini:2.3,
        Ugljikohidrati:27.9,
        Masti:10.5
      }
    },
    {
      id:56,
      nazivProizvoda:"Cokoladni Brownie",
      slika: "https://pbs.twimg.com/media/C5vklqmWMAEs_FI.jpg",
      cijena:6,
      nutritivneVrijednosti: {
        Dodaci:"Kecap, majoneza, krastavac, salata, luk",
        Kalorije:316,
        Proteini:3.6,
        Ugljikohidrati:33,
        Masti:18
      }
    },
  ];

}
