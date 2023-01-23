import React, { Component } from 'react';
import type { ReactElement } from 'react';
import { Typography, Grid, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import CardComponent from '../../component/card';
import '../../style/Recommendeddishes.css';

type PropListType = Record<string, unknown>;

interface StateListType extends Record<string, unknown>
{

}

export class Recommendeddishes extends Component<PropListType, StateListType>
{
  constructor(props: PropListType)
  {
    super(props);
    this.state = {
      right: false,
      list: {
        thumbnail: 'Hesetazegi_Pomegranate_Aash_Thumb_1.jpg',
        title: 'اسم غذایی که دوخطی باشه و دیگه خیلی بخواد طولانی بشه'
      }
    };
  }

  render(): ReactElement
  {
    return (<div className='Recommendeddishes'>
            <div className="top">
                <div className="top-right">
                    <Typography component="p" className='top-text' >
                        غذای پیشنهادی
                    </Typography>
                    <div className="dinner">
                        <Button variant="contained" className='right-btn' disableElevation> صبحانه  </Button>
                        <Button variant="contained" className='left-btn' disableElevation> میان وعده </Button>
                        <Button variant="contained" className='left-btn' disableElevation>  ناهار </Button>
                        <Button variant="contained" className='left-btn' disableElevation> عصرانه  </Button>
                        <Button variant="contained" className='left-btn' disableElevation> شام </Button>
                    </div>
                </div>
                <div className="top-left">
                    <div className="top-left-icon">
                        <ShareOutlinedIcon className='Recommendeddishes-icon' />
                    </div>
                    <div className="top-left-btn">
                        <Button variant="text" className='Recommendeddishes-p'>مشاهده همه<KeyboardArrowLeftOutlinedIcon className='arrow-icon' /> </Button>

                    </div>
                </div>

            </div>
            <div className="body">
                <Grid container >
                    <Grid item md={3}>
                    <CardComponent item={this.state.list}></CardComponent>
                    </Grid>
                    <Grid item md={3}>
                    <CardComponent item={this.state.list}></CardComponent>
                    </Grid>
                    <Grid item md={3}>
                    <CardComponent item={this.state.list}></CardComponent>
                    </Grid>
                    <Grid item md={3}>
                    <CardComponent item={this.state.list}></CardComponent>
                    </Grid>
                </Grid>
            </div>

        </div>);
  }
}
