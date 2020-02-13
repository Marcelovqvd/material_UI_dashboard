import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'Center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Box m={1} pl={2} fontFamily="fontFamily" fontSize="h9.fontSize">
        Jones Ferdinand
      </Box>
      <Avatar alt="Remy Sharp" src="#" />
    </div>
  );
}
