import React, { useContext, useState } from "react";
import { Container } from "./style";
import HouseCard from "../Generic/Card";
import Loading from "../Generic/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { PropertiesContext } from "../../context/properties";
const { REACT_APP_BASE_URL } = process.env;

export const Favourite = () => {
  const { search } = useLocation();
  const [load,setLoad] = useState(true)
  const navigate = useNavigate();
  const [, dispatch] = useContext(PropertiesContext);

  const { refetch, data } = useQuery([search], async () => {
      const res = await fetch(
        `${REACT_APP_BASE_URL}/houses/getAll/favouriteList`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      return await res.json();
    },
    {
      onSuccess: (res) => {
        dispatch({ type: "refetch", payload: refetch });
        setLoad(false);
      },
    }
  );

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <React.Fragment>
      <div className="title" style={{marginTop:'48px'}}>Favourite</div>
      <div className="info" style={{ textAlign: "center" }}>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      {load?<Loading></Loading>:

        <Container>
        {data?.data?.length ? (
          data?.data.map((value) => {
            return (
              <HouseCard
              key={value.id}
              onClick={() => onSelect(value.id)}
              data={value}
              favorite={value.favorite}
              />
              );
            })
            ) : (
              <h1>You have not favourite house</h1>
              )}
      </Container>
  }
    </React.Fragment>
  );
};

export default Favourite;