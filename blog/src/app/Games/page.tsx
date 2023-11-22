import GamesList from "@/components/games/games-list";
import { Blog } from "@/utils/types";

async function extractAllGames() {
  const res = await fetch(`${process.env.URL}/api/game-post/get-all-post`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  if (data.success) return data.data;
}

export default async function Games() {
  const gamePostsList = await extractAllGames();

  return <GamesList lists={gamePostsList} />;
}