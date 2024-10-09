<<<<<<< HEAD
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
=======
'use client';
import React from 'react';
import { Card as MuiCard, CardContent, CardActions, CardMedia, CardHeader, CardActionArea } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Text } from '../data-display/Text';
import { Button } from '../input/Button';
import s from './Card.module.scss';
import classNames from 'classnames';
>>>>>>> a3c8d8b15fcb0fdde596bb72ea88915b17c331fb

interface CardProps {
  title?: string;
  type?: 'text' | 'complex' | 'media' | 'primaryAction';
  subtitle?: string;
  image?: string;
  description?: string;
}
export const Card: React.FC<CardProps> = (Props) => {
  const { title, subtitle, type, image, description } = Props;

  switch (type) {
    case 'text':
      return (
        <MuiCard className={classNames(s['card'], s['card-text'])}>
          <CardContent className={classNames(s['content'])}>
            {/* Title ----------------------------------------------------------------------------- */}
            <Text type='h5' className={classNames(s['content__title'])}>
              {title}
            </Text>
            {/* Subtitle -------------------------------------------------------------------------- */}
            <Text type='subtitle1' className={classNames(s['content__subtitle'])}>
              {subtitle}
            </Text>
            {/* Description ----------------------------------------------------------------------- */}
            <Text className={classNames(s['content__description'])}>{description}</Text>
          </CardContent>
          {/*actions ------------------------------------------------------------------------------ */}
          <CardActions className={classNames(s['actions'])}>
            <Button>ver más</Button>
          </CardActions>
        </MuiCard>
      );
    case 'media':
      return (
        <MuiCard className={classNames(s['card'], s['card-media'])}>
          {/* Media ------------------------------------------------------------------------------- */}
          <CardMedia image={image} className={classNames(s['media'])} />
          <CardContent className={classNames(s['content'])}>
            {/* Title ----------------------------------------------------------------------------- */}
            <Text type='h5' className={classNames(s['content__title'])}>
              {title}
            </Text>
            {/* Description ----------------------------------------------------------------------- */}
            <Text className={classNames(s['content__description'])}>{description}</Text>
          </CardContent>
          {/*actions ------------------------------------------------------------------------------ */}
          <CardActions className={classNames(s['actions'])}>
            <Button>ver más</Button>
          </CardActions>
        </MuiCard>
      );
    case 'complex':
      return (
        <MuiCard className={classNames(s['card'], s['card-complex'])}>
          {/* Header ------------------------------------------------------------------------------ */}
          <CardHeader
            className={classNames(s['header'])}
            // Header-title ----------------------------------------------------------------------- //
            title={
              <Text type='h5' className={classNames(s['header__title'])}>
                {title}
              </Text>
            }
            // Header-subtitle -------------------------------------------------------------------- //
            subheader={
              <Text type='subtitle1' className={classNames(s['header__subtitle'])}>
                {subtitle}
              </Text>
            }
            // Header-action ---------------------------------------------------------------------- //
            action={
              <Button type='icon' className={classNames(s['header__action'])}>
                <MoreVertIcon />
              </Button>
            }
          />
          {/* Media ------------------------------------------------------------------------------- */}
          <CardMedia title={title} image={image} className={classNames(s['media'])} />
          <CardContent>
            {/* Description ----------------------------------------------------------------------- */}
            <Text className={classNames(s['content__description'])}>{description}</Text>
          </CardContent>
          {/* Actions ----------------------------------------------------------------------------- */}
          <CardActions className={classNames(s['actions'])}></CardActions>
        </MuiCard>
      );
    case 'primaryAction':
      return (
        <MuiCard className={classNames(s['card'], s['card-primary_action'])}>
          <CardActionArea>
            {/* Media ----------------------------------------------------------------------------- */}
            <CardMedia title={title} image={image} sx={{ height: 212 }} />
            {/* Title ----------------------------------------------------------------------------- */}
            <CardContent>
              <Text type='h5' className={classNames(s['content__title'])}>
                {title}
              </Text>
              {/* Description --------------------------------------------------------------------- */}
              <Text className={classNames(s['content__description'])}>{description}</Text>
            </CardContent>
          </CardActionArea>
        </MuiCard>
      );
  }
};



