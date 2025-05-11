import type { IFetchCarsReturn } from "../types";

export const fetchCars = async (
  make: string,
  model: string,
  year: string,
  page: string
): Promise<IFetchCarsReturn> => {
  let url = `${import.meta.env.VITE_API_URL}/all-vehicles-model/records?`;

  // eğer marka filtresi varsa istek atılan url'e ekle
  if (make) {
    url += `refine=make:"${make}"`;
  }

  // eğer model filtresi varsa  istek atılan url'e ekle
  if (model) {
    url += `&refine=model:"${model}"`;
  }

  // eğer yıl filtresi varsa  istek atılan url'e ekle
  if (year) {
    url += `&refine=year:"${year}"`;
  }

  const limit = 10;
  const offset = (Number(page) - 1) * limit;

  url += `&limit=${limit}`;
  url += `&offset=${offset}`;

  const res = await fetch(url);

  const data = await res.json();

  return data;
};
