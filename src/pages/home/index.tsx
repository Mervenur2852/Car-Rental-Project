import type { FC } from "react";
import Filter from "../../components/filter";
import Hero from "../../components/hero";
import List from "../../components/List";

const Home: FC = () => {
  return (
    <div>
      <Hero />

      <Filter />

      <List />
    </div>
  );
};

export default Home;
