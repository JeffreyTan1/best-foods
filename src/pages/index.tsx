import { getOptionsForVote } from "@/utils/getRandomRestaurant";
import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

interface ComparisonItemProps {
  title: string | number | undefined;
  image_path?: string;
}
const ComparisonItem = ({ title }: ComparisonItemProps) => {
  return <div className="w-1/3 text-center">{title ? title : ``}</div>;
};

const Home: NextPage = () => {
  const [first, setFirst] = useState<string | number | undefined>(undefined);
  const [second, setSecond] = useState<string | number | undefined>(undefined);

  useEffect(() => {
    const [f, s] = getOptionsForVote();
    setFirst(f);
    setSecond(s);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl">Which is better?</div>
      <div className="p-4" />
      <div className="w-1/3 p-4 flex justify-between items-center border-2 rounded">
        <ComparisonItem title={first} />
        <ComparisonItem title="VS" />
        <ComparisonItem title={second} />
      </div>
    </div>
  );
};

export default Home;
