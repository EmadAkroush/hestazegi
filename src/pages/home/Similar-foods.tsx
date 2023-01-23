import React, { Component } from 'react';
import type { ReactElement } from 'react';
import { Typography, Button, Grid, TextField, InputAdornment } from '@mui/material';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CardComponent from '../../component/card';
import '../../style/Similarfoods.css';

type PropListType = Record<string, unknown>;

interface StateListType extends Record<string, unknown>
{

}

export class Similarfoods extends Component<PropListType, StateListType>
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
    return (<div className='Similarfoods'>
            <div className="top">
                <Typography component="h3" className='top-text-onvan' >
                    غذاهای مشابه
                </Typography>
                <Typography component="p" className='top-text-under' >
                    غذای موردنظر خود را جستجو کنید و غذاهای مشابه را در سمت چپ ببینید.
                </Typography>

            </div>
            <Grid container spacing={2} className='foods-box'>
                <Grid item md={3} className='foods-box-right'>
                    <Typography component="h3" className='foods-box-right-p' >
                        غذای انتخاب‌شده
                    </Typography>
                    <TextField
                        sx={{ width: '100%', borderRadius: '6px' }}
                        id="input-with-icon-textfield"

                        InputProps={{
                          startAdornment: (
                                <InputAdornment position="start">
                                 <SearchOutlinedIcon className='search-icon'/>
                                </InputAdornment>
                          )
                        }}

                    />
                </Grid>
                <Grid item md={9} className='foods-box-left'>
                    <div className="share">
                        <ShareOutlinedIcon />
                    </div>
                    <div className="similar">
                        <Typography component="h3" className='similar-p' >
                            غذا های مشابه
                        </Typography>
                    </div>
                    <div className="foods-box-body">
                        <Grid container spacing={2}>
                            <Grid item md={5}>
                            <CardComponent item={this.state.list}></CardComponent>
                            </Grid>
                            <Grid item md={5}>
                            <CardComponent item={this.state.list}></CardComponent>
                            </Grid>
                            <Grid item md={2} >
                                <div className='box-btn'>
                                <Button variant="text" className='btn'>  مشاهده همه  <ArrowBackIosNewOutlinedIcon className='btn-icon' /></Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>);
  }
}
