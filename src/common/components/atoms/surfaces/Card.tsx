"use client";
    import React from "react";
import {
  Card as MuiCard,
  CardContent,
  CardActions,
  CardMedia,
  CardHeader,
  IconButton,
} from "@mui/material";
import PendingIcon from "@mui/icons-material/Pending";
import { Text } from "../data-display/Text";
import { Button } from "../input/Button";
import s from "./Card.module.scss";
import classNames from "classnames";
import { Title } from "@mui/icons-material";

interface CardProps {
  title?: string;
  type?: "text" | "complex" | "media" | "primaryAction";
  subtitle?: string;
  image?: string;
  description?: string;
  // esto de aqui es mi API por asi decirlo, valida a que tipo de informacion tengo accesos y que informacion puedo dar
}
export const Card: React.FC<CardProps> = (Props) => {
  const { title, subtitle, type, image, description } = Props;

  switch (type) {
    case "text":
      return (
        <MuiCard className={s.card}>
          <CardContent>
            {/* Title--------------------------- */}
            <Text type="h5" className={classNames(s["card__title"])}>
              {title}
            </Text>
            {/* subtitle ----------------------- */}
            <Text className={s.subtitle}>{subtitle}</Text>
          </CardContent>
          {/*actions -------------------------------- */}
          <CardActions>
            <Button>ver más</Button>
          </CardActions>
        </MuiCard>
      );
    case "media":
      return (
        <MuiCard className={s.card}>
          <CardContent>
            <Text type="h5" className={classNames(s["card__title"])}>
              {title}
            </Text>
            <CardMedia image={image} sx={{ height: 140 }}></CardMedia>
            <Text type="body1" className={classNames(s["__"])}>
              {subtitle}
            </Text>
          </CardContent>
        </MuiCard>
      );
    case "complex":
      return (
        <MuiCard className={s.card}>
          <CardHeader
            action={
              <IconButton>
                <PendingIcon />
              </IconButton>
            }
            title={<Text type="subtitle2">{title} </Text>}
            subheader={<Text type="subtitle2">{subtitle}</Text>}
          />
          <CardMedia title={title} image={image} sx={{ height: 350 }} />
          <CardContent>
            <Text>{description}</Text>
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <IconButton>
              ¿ <PendingIcon />
            </IconButton>
            <Button>ola</Button>
          </CardActions>
        </MuiCard>
      );
      case "primaryAction":
        return(
          <MuiCard className={s.card}>
            <CardMedia title={title} image={image} sx= {{height:212}}/>
            <CardContent>{description}</CardContent>
          </MuiCard>
        )
  }
};



