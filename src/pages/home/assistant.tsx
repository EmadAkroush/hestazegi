import React, { Component } from 'react';
import type { ReactElement } from 'react';
import { Typography, Button } from '@mui/material';

import '../../style/Assistant.css';

type PropListType = Record<string, unknown>;

interface StateListType extends Record<string, unknown>
{

}

export class Assistant extends Component<PropListType, StateListType>
{
  constructor(props: PropListType)
  {
    super(props);
    this.state = {

    };
  }

  render(): ReactElement
  {
    return (<div className='Assistant'>
            <div className="img-back">
                <Typography component="h3" className='img-back-p-up' >
                دستیار حس تازگی
                </Typography>
                <Typography component="p" className='img-back-p-down' >
                استخدام دستیار آشپزی
                </Typography>
                <Button variant="contained" className="img-back-btn" disableElevation> ادامه </Button>

            </div>
        </div>);
  }
}
