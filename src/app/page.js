import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

async function loadData() {
  const { data } = await getClient().query({
    query: gql`
      query {
  characters(page:1) {
    results {
      id
      name
      image
    }
  }
}
    `
  });

  return data.characters.results;
}

export default async function Home() {
  const characters= await loadData();
  return (
    <div className="grid grid-cols-3">
      {characters.map((characters) => (
        <div key={characters.id}>
          <h3>{characters.name}</h3>
          <img src={characters.image} alt={characters.name} />
        </div>
      ))}
    </div>
  );
}
