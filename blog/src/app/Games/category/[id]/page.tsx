import GameList from "@/components/games/games-list";

async function extractAllGames() {
  const res = await fetch(`${process.env.URL}/api/game-post/get-all-post`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  if (data.success) return data.data;
}

async function getAllListsByCategory(getId: string) {
  const res = await fetch(`${process.env.URL}/api/gamesCategory?gamesCategoryID=${getId}`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  if (data.success) return data.data;
}

export default async function Category({ params }: { params: any }) {
  const { id } = params;
  const getAllList = await getAllListsByCategory(id);

  return <GameList lists={getAllList} />;
}