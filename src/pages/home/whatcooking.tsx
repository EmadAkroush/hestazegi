import React, { Component } from 'react';
import type { ReactElement } from 'react';
import { Typography, Grid, Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CardComponent from '../../component/card';
import '../../style/whatcooking.css';

type PropListType = Record<string, unknown>;

interface StateListType extends Record<string, unknown>
{
  list: object;
}

export class Whatcooking extends Component<PropListType, StateListType>
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
    return (<div className='whatcooking'>
            <Grid className='custom-container' container spacing={2}>
                <div className='parent-container'>
                    <Grid className='whatcooking-right' item md={4} >
                        <div className='top'>
                            <Typography color="primary" component="h3" className='top-text' >
                                کمپین چی بپزم؟
                            </Typography>

                        </div>
                        <div className="undertop">
                            <Typography color="primary" component="h3" className='undertop-text' >
                                در حال رای گیری برای غذای فردا...
                            </Typography>
                        </div>
                        <div className='body'>
                            <Typography component="p" className='body-text-onvan' >
                                هر روز غذای جدید
                            </Typography>
                            <Typography component="p" className='body-text' >
                                ما در حس تازگی هر روز برای شما برنامه ای ویژه داریم، روال این برنامه به این صورت است که هر روز برای دو وعده نهار و شام فردا از بین دو غذا انتخاب خواهید کرد و فردا آن روز دستورپخت غذایی با بیشترین رای را به صورت رایگان می توانید در اختیار داشته باشید.
                            </Typography>
                            <div className="box-btn">

                                <Button variant="contained" className='btn' disableElevation>
                                    ورود به کمپین <KeyboardArrowLeftIcon className='icon' />
                                </Button>

                            </div>
                        </div>
                    </Grid>
                    <Grid className='whatcooking-left' item md={8} sm={12} >
                        <div className="top">
                            <div className="dinner">
                                <Button variant="contained" className='right-btn' disableElevation> ناهار  </Button>
                                <Button variant="contained" className='left-btn' disableElevation> شام </Button>
                            </div>
                            <div className="share">
                                <ShareOutlinedIcon className='share-icon' />
                            </div>
                        </div>
                        <div className='under-top'>
                            <div className='under-top-right'>
                                <div className="pic">
                                    <RamenDiningOutlinedIcon className='pic-icon' />
                                </div>
                                <div className="text">
                                    <Typography component="p" className='text-text' >
                                        وعده نهار
                                    </Typography>
                                </div>
                            </div>
                            <div className='under-top-left'>
                                <div className="text-tick">
                                    <div className='right'>
                                        <CheckCircleIcon className='icon-right' />
                                    </div>
                                    <div className='left'>
                                        <Typography component="p" className='p-left' >
                                            انتخاب شده توسط 350 نفر
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <Grid container spacing={2}>
                                <Grid item md={6}>
                                <CardComponent item={this.state.list}></CardComponent>
                                </Grid>
                                <Grid item md={6}>
                                <CardComponent item={this.state.list}></CardComponent>
                                </Grid>
                            </Grid>

                        </div>
                    </Grid>

                </div>
            </Grid>
        </div>);
  }
}
