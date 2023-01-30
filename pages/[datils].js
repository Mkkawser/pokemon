import Species from "@/component/species/species";
import { add_data } from "@/component/store/allData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "public/Img/Logo.png";
import Image from "next/image";

import style from "../component/species/details.module.css";
import SkillBar from "react-skillbars";
import Link from "next/link";

const Graph_ql = `query Query($Name: String!) {
    pokemon(name: $Name) {
      weight
      height
      stats {
        stat {
          name
        }
        base_stat
      }
      types {
        type {
          name
          url
        }
      }
      species{
        url
      }
    }
     pokemons{
      results{
        artwork
        name
      }
    }
  }`;

export default function Datils() {
  const name = useRouter().query.datils;
  const data = useSelector((state) => state.all_data);
  const dispatch = useDispatch();

  const [all, setAll] = useState([]);

  useEffect(() => {
    fetch("https://graphql-pokeapi.graphcdn.app/", {
      credentials: "omit",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: Graph_ql,
        variables: { Name: name },
      }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(add_data(res.data));
        setAll(res.data);
      });
  }, []);

  const {
    id,
    description,
    category,
    height,
    weight,
    pokemon,
    species_url,
    stats,
    types,
    img,
  } = data;

  return (
    <>
      <Species />
      <div className={style.bg}>
        <Link href={"/"}>
          <Image src={logo} alt="Picture" />
        </Link>
      </div>

      <div className={style.full}>
        <div className={style.left}>
          <p className={style.name}>
            {name} #0{id}
          </p>
          <p className={style.des}>{description}</p>
          <p className={style.frame}>
            <p className={style.title}>category</p>
            <p>{category}</p>
            <p className={style.title}>height</p>
            <p>
              {height} <small>Kgs</small>
            </p>
            <p className={style.title}>weight</p>
            <p>
              {weight} <small>ibs</small>
            </p>
          </p>
        </div>
        <div className={style.center}>
          <Image src={img} width={"360"} height={"200"} alt="Pokemon Pic" />
        </div>
        <div className={style.right}>
          <div className={style.type}>
            <p className={style.typeT}>Type</p>
            {types.map((val, i) => (
              <span className={style.typeVal}>{val.type.name}</span>
            ))}
          </div>
          <div className={style.stats}>
            <p className={style.typeT}>Stats</p>
            {stats.map((val, i) => (
              <>
                <small className={style.statsN}>{val.stat.name}</small>
                <p>{val.base_stat}</p>
              </>
            ))}
          </div>
        </div>
      </div>
      <p className={style.homeP}>
        <Link href={"/"}>GO HOME</Link>
      </p>
    </>
  );
}
