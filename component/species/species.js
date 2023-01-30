import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_species } from "../store/allData";

export default function Species() {
  const data = useSelector((state) => state.all_data);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${1 + data.id}`)
      .then((val) =>
        dispatch(
          add_species({
            genera: val.data.genera[7].genus,
            flv_text: val.data["flavor_text_entries"][0]["flavor_text"],
          })
        )
      );
  });
  // val.data["flavor_text_entries"][0]["flavor_text"]
  // https://pokeapi.co/api/v2/pokemon-species/1/

  // console.log(data.species_url);
  return (
    <>
      <p></p>
    </>
  );
}
