// @ts-nocheck

import React from 'react';
import type { FC } from 'react';
import {
  Box,
  Card,
  CardMedia,
  Divider,
  Link,
  makeStyles,
  Typography,
  SvgIcon,
} from '@material-ui/core';
import PlaceIcon from '@material-ui/icons/Place';
import image from './assets/images/image.png';
import { ReactComponent as FavoriteIcon } from './assets/icons/favorite-default.svg';
import { ReactComponent as ChartIcon } from './assets/icons/chart.svg';
import { ReactComponent as InvoicesIcon } from './assets/icons/invoices.svg';

export enum MyComponentType {
  CNRL_HORIZON_OIL_SANDS = 'CNRL_HORIZON_OIL_SANDS',
}

const myComponents = {
  [MyComponentType.CNRL_HORIZON_OIL_SANDS]: {
    title: 'CNRL Horizon Oil Sands',
    subtitle: 'Lorem Ipsum Dolor Sit Amet',
    address1: '123 Address',
    address2: 'AB, Canada',
    recentSamples: 24,
    siteManager: 'a_adam@email.com',
    favValue1: 122,
    favValue2: 12,
    chartValue: 48,
    invoicesValue: 2,
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: 366,
    height: 428,
    fontFamily: 'Roboto',
    color: '#333333',
    background: '#FFFFFF',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  },
  box: {
    width: 204,
    height: 186,
    margin: '10px 16px 24px',
  },
  image: {
    width: 334,
    height: 140,
    borderRadius: 4,
  },
  title: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
  },
  caption: {
    display: 'block',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
    color: '#808080',
  },
  body2: {
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '24px',
  },
  iconsContainer: {
    width: '246px',
    height: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px 16px',
  },
  iconsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: ' center',
  },
  iconValue: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '22px',
  },
}));

export interface MyComponentProps {
  [key: string]: any;
  myComponentType?: MyComponentType;
  title?: string;
  location?: string;
  recentSamples?: number;
  siteManager?: string;
}

const MyComponent: FC<MyComponentProps> = ({
  className,
  myComponentType,
  title,
  location,
  recentSamples,
  siteManager,
  ...rest
}) => {
  let data = {
    title,
    location,
    recentSamples,
    siteManager,
    ...myComponents[myComponentType],
  };
  const classes = useStyles(data);

  return (
    <Card className={classes.root}>
      <Box mt={'24px'} mx={'15px'}>
        <CardMedia className={classes.image} image={image}>
          <PlaceIcon
            style={{
              margin: '51px 160px 69px',
              color: '#FC3650',
            }}
          />
        </CardMedia>
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.title} data-testid="title" variant="h4">
          {data.title}
        </Typography>
        <Typography
          className={classes.caption}
          variant="caption"
          data-testid="subtitle"
          style={{ paddingBottom: '10px' }}
        >
          {data.subtitle}
        </Typography>
        <Typography
          className={classes.caption}
          variant="caption"
          data-testid="address"
          style={{ paddingBottom: '10px' }}
        >
          {data.address1} <br />
          {data.address2}
        </Typography>
        <Typography className={classes.body2} variant="body2">
          Recent Samples
        </Typography>
        <Typography
          className={classes.caption}
          variant="body2"
          data-testid="recent-samples"
          style={{ paddingBottom: '10px' }}
        >
          {data.recentSamples}
        </Typography>
        <Typography className={classes.body2} variant="body2">
          Site Manager
        </Typography>
        <Typography
          className={classes.caption}
          variant="caption"
          style={{ color: '#FC3650' }}
        >
          <Link
            href={`mailto:${data.siteManager}`}
            variant="inherit"
            color="inherit"
            data-testid="site-manager"
          >
            {data.siteManager}
          </Link>
        </Typography>
      </Box>
      <Divider style={{ height: '1px', background: '#ECEFF1' }} />
      <Box className={classes.iconsContainer}>
        <Box className={classes.iconsWrapper}>
          <SvgIcon>
            <FavoriteIcon fill="#219653" />
          </SvgIcon>
          <span
            className={classes.iconValue}
            data-testid="fav-value-1"
            style={{ color: '#219653' }}
          >
            {data.favValue1}
          </span>
        </Box>
        <Box className={classes.iconsWrapper}>
          <SvgIcon>
            <FavoriteIcon fill="#EB5757" />
          </SvgIcon>
          <span
            className={classes.iconValue}
            data-testid="fav-value-2"
            style={{ color: '#EB5757' }}
          >
            {data.favValue2}
          </span>
        </Box>
        <Box className={classes.iconsWrapper}>
          <SvgIcon>
            <ChartIcon />
          </SvgIcon>
          <span
            className={classes.iconValue}
            data-testid="chart-value"
            style={{ color: '#2F80ED' }}
          >
            {data.chartValue}
          </span>
        </Box>
        <Box className={classes.iconsWrapper}>
          <SvgIcon>
            <InvoicesIcon />
          </SvgIcon>
          <span
            className={classes.iconValue}
            data-testid="invoices-value"
            style={{ color: '#EB5757' }}
          >
            {data.invoicesValue}
          </span>
        </Box>
      </Box>
    </Card>
  );
};

MyComponent.defaultProps = {};

export default MyComponent;
