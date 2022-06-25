import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";

interface ComparisonItemProps {
  title: string;
  image_path?: string;
}
const ComparisonItem = ({ title }: ComparisonItemProps) => {
  return <div className="w-1/3 text-center">{title}</div>;
};

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello", { text: "Jeff" }]);

  if (isLoading) return <div>Loading...</div>;
  if (data) return <div>{data.greeting}</div>;

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl">Which is better?</div>
      <div className="p-4" />
      <div className="w-1/3 p-4 flex justify-between items-center border-2 rounded">
        <ComparisonItem title="Guzman Y Gomez" />
        <ComparisonItem title="VS" />
        <ComparisonItem title="Nandos" />
      </div>
    </div>
  );
};

export default Home;
