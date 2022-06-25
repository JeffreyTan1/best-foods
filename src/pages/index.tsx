import type { NextPage } from "next";

interface ComparisonItemProps {
  title: string;
  image_path?: string;
}

const Home: NextPage = () => {
  const ComparisonItem = ({ title }: ComparisonItemProps) => {
    return <div className="w-1/3 text-center">{title}</div>;
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl">Which is better?</div>
      <div className="p-4" />
      <div className="w-1/3 p-4 flex justify-between border-2 rounded">
        <ComparisonItem title="Guzman Y Gomez" />
        <ComparisonItem title="VS" />
        <ComparisonItem title="Nandos" />
      </div>
    </div>
  );
};

export default Home;
