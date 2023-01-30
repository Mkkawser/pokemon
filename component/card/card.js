import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./card.module.css";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { add_pokemon } from "../store/allData";

const gqlQuery = `query Query($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    results {
      id
      name
      artwork
    }
  }
}`;

const gqlVariables = {
  limit: 10,
  offset: 0,
};

const Card = () => {
  const [pokemon, setPokemon] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://graphql-pokeapi.graphcdn.app/", {
      credentials: "omit",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: gqlQuery,
        variables: gqlVariables,
      }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => setPokemon(res.data.pokemons.results));
  }, []);

  const send_data = (val) => {
    dispatch(add_pokemon({ val }));
  };

  // console.log(pokemon);
  return (
    <>
      <div className={style.card_Wrap}>
        {pokemon.map((val, i) => {
          return (
            <Link
              onClick={() => send_data(val)}
              href={{ pathname: val.name }}
              key={i}
            >
              <div key={i} className={style.card}>
                <div className={style.card_Img}>
                  <Image
                    src={val.artwork}
                    height={"150"}
                    width={"150"}
                    alt="image"
                  />
                </div>
                <p className={style.card_name}>{val.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Card;
