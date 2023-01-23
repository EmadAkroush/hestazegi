import React, { Component } from 'react';
import type { ReactElement } from 'react';
import { Typography } from '@mui/material';
// import { styled, alpha } from '@mui/material/styles';
// interface PropListType{}
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import '../../../style/leftbardetails.css';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

type PropListType = Record<string, unknown>;

interface StateListType extends Record<string, unknown>
{
  loading?: boolean;
  active?: boolean;
  numbers?: number[];

}

export class LeftBarDetail extends Component<PropListType, StateListType>
{
  numbers: number[];
  constructor(props: PropListType)
  {
    super(props);
    this.state = {
      right: false
    };
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  }

  render(): ReactElement
  {
    return (<div>

     <div className='info-food'>
            <div className="head">
              <Typography variant="h1" component="h3" className='text-onvan'>
           <InfoOutlinedIcon color="error" className='info-icon' />  اطلاعات غذا
              </Typography>
            </div>
            { this.numbers.map((item, index) =>
           <div className="info-row">
           <Typography variant="h1" component="p" className='right' color="primary" >
           تعداد نفرات
              </Typography>
              <Typography variant="h1" component="p" className='left' color="secondary">
           3 نفر
              </Typography>
           </div>
            )}
          </div>

          <div className='info-food options'>
            <div className="head">
              <Typography variant="h1" component="h3" className='text-onvan'>
           <LocalOfferOutlinedIcon color="error" className='info-icon' /> مزیت ها
              </Typography>
            </div>
            <div className="body-option">
            { this.numbers.map((item, index) =>
           <div className="info-tag">
           <Typography variant="h1" component="p" className='option-right' color="primary" >
            پاستاهای خوشمزه
              </Typography>

           </div>
            )}
            </div>
          </div>

    </div>);
  }
}
