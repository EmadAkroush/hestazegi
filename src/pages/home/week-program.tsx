import React, { Component } from 'react';
import type { ReactElement } from 'react';
import { Typography, Button } from '@mui/material';

import '../../style/Weekprogram.css';

type PropListType = Record<string, unknown>;

interface StateListType extends Record<string, unknown>
{

}

export class Weekprogram extends Component<PropListType, StateListType>
{
  constructor(props: PropListType)
  {
    super(props);
    this.state = {

    };
  }

  render(): ReactElement
  {
    return (<div className='Weekprogram'>
            <div className="img-back">
                <Typography component="h3" className='img-back-p-up' >
                برنامه هفتگی
                </Typography>
                <Typography component="p" className='img-back-p-down' >
                با چند کلیک ساده برنامه غذایی هفتگی خودتو ایجاد کن
                </Typography>
                <Button variant="contained" className="img-back-btn" disableElevation>ایجاد برنامه هفتگی </Button>

            </div>
        </div>);
  }
}
