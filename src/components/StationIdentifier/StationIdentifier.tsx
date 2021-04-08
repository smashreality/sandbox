// @ts-nocheck

import React, { useEffect } from 'react';
import type { FC } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { darken } from '@material-ui/core/styles';
import clsx from 'clsx';

export enum StationIdentifierType {
  PROCESSING_INVENTORY_QUEUE = 'PROCESSING_INVENTORY_QUEUE',
  WEIGH_PROCESSING = 'WEIGH_PROCESSING',
  PA_PROCESSING = 'PA_PROCESSING',
  ENUMERATION = 'ENUMERATION',
  INCUBATOR = 'INCUBATOR',
  NONE = 'NONE'
}

const stationsIdentifiers = {
  [StationIdentifierType.PROCESSING_INVENTORY_QUEUE]: {
    color: '#333333',
    station: 'Process Inventory Queue'
  },
  [StationIdentifierType.WEIGH_PROCESSING]: {
    color: '#F2994A',
    station: 'Weigh Processing'
  },
  [StationIdentifierType.PA_PROCESSING]: {
    color: '#9B51E0',
    station: 'P-A Processing'
  },
  [StationIdentifierType.ENUMERATION]: {
    color: '#219653',
    station: 'Enumeration'
  },
  [StationIdentifierType.INCUBATOR]: {
    color: '#BA0909',
    station: 'Incubator Inventory'
  }
};

const useStyles = makeStyles((theme) => ({
  root: {},
  station: {
    backgroundColor: (props) => props?.color,
    boxShadow: (props) =>
      `0px 0px 2px ${darken(props?.color ?? '#CCC', 0.5)}, 0px 1px 5px ${
        props?.color
      };`,
    borderRadius: 4,
    padding: '7px 16px',
    color: '#fff',
    display: 'inline-flex'
  },
  location: {
    color: '#808080',
    fontSize: 12,
    fontWeight: 500,
    textTransform: 'uppercase'
  }
}));

export interface StationIdentifierProps {
  [key: string]: any;
  stationIdentifierType?: StationIdentifierType;
  station?: string;
  location?: string;
  color?: string;
}

const StationIdentifier: FC<StationIdentifierProps> = ({
  className,
  stationIdentifierType,
  color,
  station,
  location,
  ...rest
}) => {
  let data = {
    color,
    station,
    location,
    ...stationsIdentifiers[stationIdentifierType]
  };

  const classes = useStyles(data);

  console.log(darken('#ffffcc', 0, 5));

  return (
    <Box className={clsx(className, classes.root)}>
      <Box className={classes.station}>
        <Typography variant="h3">{data.station}</Typography>
      </Box>
      <Box mt={1}>
        <Typography className={classes.location}>{data.location}</Typography>
      </Box>
    </Box>
  );
};

StationIdentifier.defaultProps = {};

export default StationIdentifier;
