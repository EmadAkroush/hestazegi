import React, { Component } from 'react';
import type { ReactElement } from 'react';
import { Typography, Button, Grid } from '@mui/material';

import '../../style/Quickaccess.css';

type PropListType = Record<string, unknown>;

interface StateListType extends Record<string, unknown>
{

}

export class Quickaccess extends Component<PropListType, StateListType>
{
  constructor(props: PropListType)
  {
    super(props);
    this.state = {

    };
  }

  render(): ReactElement
  {
    return (<div className='Quickaccess'>
      <Typography component="h3" className='Quickaccess-h3' >
        دسترسی سریع
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={4} className='Quickaccess-card'>
               <img className='Quickaccess-img' src="./assets/img/Quickaccess1.png" alt="" />
        </Grid>
        <Grid item md={4} className='Quickaccess-card'>
        <img className='Quickaccess-img' src="./assets/img/Quickaccess2e.png" alt="" />
        </Grid>
        <Grid item md={4} className='Quickaccess-card'>
        <img className='Quickaccess-img' src="./assets/img/Quickaccess3.png" alt="" />
        </Grid>
      </Grid>
    </div>);
  }
}
