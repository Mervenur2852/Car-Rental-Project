import type { ICar } from "../types";

const formatData = (car: ICar) => {
  // nesne içerisindeki ekrana basılıcak olanlar
  const accepted = [
    "make",
    "model",
    "cylinders",
    "drive",
    "fueltype",
    "trany",
    "vclass",
    "year",
    "tcharger",
    "startstop",
    "co2",
    "displ",
    "atvtype",
  ];
  // nesneyi diziye çevirdik ve filtreledik
  const arr = Object.entries(car).filter((i) => accepted.includes(i[0]));
  return arr;
};

export default formatData;
