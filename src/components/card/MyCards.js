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

export default function MyCards({firstIndex, lastIndex}) {
  const [cards, setCards] = useState(data);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12,}}
      >
        {cards.slice(firstIndex,lastIndex).map((card) => (
          <Grid item xs={12} sm={4} md={4} key={card.id}>
            <Item>
              <MyCard image={card.image} desc={card.desc} alt={card.alt} title={card.title} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
