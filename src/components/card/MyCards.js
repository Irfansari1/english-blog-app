import * as React from "react";
import { useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


import MyCard from "./MyCard";
import data from "../../data/data";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MyCards() {
  const [cards, setCards] = useState([])
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cards.map(card => (
          <Grid item xs={2} sm={4} md={4} key={card.id}>
            <Item>
                <MyCard data={data}/>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

