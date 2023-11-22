import GameDetailsHome from "@/components/games/game-details";

interface Param {
  id: string;
}

async function extractGameDetails(id: string) {
  const res = await fetch(
    `${process.env.URL}/api/game-post/game-details?blogID=${id}`,
    {
      method: "GET",
      next : {
        revalidate : 0
      }
    }
  );

  const data = await res.json();

  if (data.success) return data.data;
}

export default async function GameDetails({ params }: { params: Param }) {
  const { id } = params;

  const gameData = await extractGameDetails(id);

  return <GameDetailsHome gameData={gameData} />;
}