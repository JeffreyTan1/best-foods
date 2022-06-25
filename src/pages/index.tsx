import { getOptionsForVote } from "@/utils/getRandomRestaurant";
import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";
import { useMemo } from "react";

interface ComparisonItemProps {
  title: string | number | undefined;
  image_path?: string;
  id: number;
}

const voteForBetter = (selected: number) => {
  // updateIds(selected);
};

const ComparisonItem = ({ title, image_path, id }: ComparisonItemProps) => {
  return (
    <div className="w-1/3 h-full flex flex-col justify-center items-center">
      {image_path && (
        <div className="h-54 flex flex-col grow justify-center bg-white rounded-lg overflow-hidden">
          <img src={image_path} alt="title" />
        </div>
      )}
      <div className="p-2" />
      <div className="text-center text-lg text-black font-semibold">
        {title}
      </div>
      <div className="p-2" />
      <button
        className="bg-amber-600 rounded-lg w-2/3 py-2 px-4 font-bold"
        onClick={() => voteForBetter(id)}
      >
        Better
      </button>
    </div>
  );
};

const Home: NextPage = () => {
  const ids = useMemo(() => getOptionsForVote(), []);
  const [first, second] = ids;

  const firstRestaurant = trpc.useQuery([
    "get-restaurant-by-id",
    { id: first },
  ]);

  const secondRestaurant = trpc.useQuery([
    "get-restaurant-by-id",
    { id: second },
  ]);

  if (firstRestaurant.isLoading || secondRestaurant.isLoading) {
    return (
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl">Which is better?</div>
      <div className="p-4" />
      <div className="min-w-[40%] m-4 p-8 flex justify-center items-center bg-slate-200 rounded-3xl shadow-2x">
        <ComparisonItem
          title={firstRestaurant.data?.name}
          image_path={firstRestaurant.data?.image_path}
          id={firstRestaurant.data?.id}
        />

        <div className="w-1/3 text-center font-bold text-3xl text-black">
          VS
        </div>

        <ComparisonItem
          title={secondRestaurant.data?.name}
          image_path={secondRestaurant.data?.image_path}
          id={secondRestaurant.data?.id}
        />
      </div>
    </div>
  );
};

export default Home;
