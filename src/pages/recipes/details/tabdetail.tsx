import React, { Component } from 'react';
import type { ReactElement } from 'react';
import { Button, Typography, ButtonGroup, ListItem, List, Grid, LinearProgress, Box, Divider, ListItemAvatar, Avatar, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import '../../../style/tabdetails.css';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TocIcon from '@mui/icons-material/Toc';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';

import { ShowText } from '../../../component/show-text';
import { PlyrAudio } from '../../../component/audio';
// import { red } from '@mui/material/colors';

type PropListType = Record<string, unknown>;

interface StateListType extends Record<string, unknown>
{
  loading?: boolean;
  active?: boolean;
  numbers?: number[];
  showmore?: boolean;
}

export class TabDetail extends Component<PropListType, StateListType>
{
  numbers: number[];
  constructor(props: PropListType)
  {
    super(props);
    this.state = {
      right: false,
      tab: 1,
      showmore: true
    };
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  }

  render(): ReactElement
  {
    return (<div>
      <div className='tabs-bar'>
        <Button onClick={() => this.handleChange(1)} className={this.state.tab === 1 ? 'activetabs' : 'tabs'}> اطلاعات و دستور پخت </Button>
        <br></br>
        <Button onClick={() => this.handleChange(2)} className={this.state.tab === 2 ? 'activetabs' : 'tabs'}> نظرات <span className='counter'>29+</span></Button>
        <br></br>
        <Button onClick={() => this.handleChange(3)} className={this.state.tab === 3 ? 'activetabs' : 'tabs'}> پرسش و پاسخ ها <span className='counter'>10+</span></Button>
      </div>
      <div className={this.state.tab === 1 ? 'activecontent' : 'content'} id='mobile-content'>
        <div className="show-more" >
          <div className="title">
            <AutoStoriesOutlinedIcon className='icon' />
            <Typography variant="h1" component="h3" className='title-h3' >
              داستان غذا
            </Typography>
          </div>
          <div className="body">
            <ShowText content='اگر برای رنگین تر شدن سفره‌ی شب یلدا به دنبال یک آش خاص می‌گردید، آش انار همان گزینه مناسب است. نگفته از اسمش پیداست که می‌تواند مهمان شب یلدای شما باشد. طعم بی‌نظیر این آش را به خانواده خود هدیه کنیداگر برای رنگین تر شدن سفره‌ی شب یلدا به دنبال یک آش خاص می‌گردید، آش انار همان گزینه مناسب است. نگفته از اسمش پیداست که می‌تواند مهمان شب یلدای شما باشد. طعم بی‌نظیر این آش را به خانواده خود هدیه کنید' countOfWord={204}>

            </ShowText>
          </div>
        </div>
        <div className="raw-material">
          <div className="title">
            <LocalPizzaIcon className='icon' />

            <Typography variant="h1" component="h3" className='title-h3' >
              مواد اولیه
            </Typography>
          </div>
          <div className="person">
            <Typography variant="h1" component="p" className='person-p' >
              تعداد نفرات
            </Typography>
            <ButtonGroup variant="outlined" aria-label="outlined button group" className='btn-group'>
              <Button className='btn-item'>1</Button>
              <Button className='btn-item'>2</Button>
              <Button className='btn-item'>3</Button>
              <Button className='btn-item'>4</Button>
            </ButtonGroup>

          </div>
          <div className="food-needed">
            <div className="title">
              <KeyboardArrowLeftIcon className='icon-food' />

              <Typography variant="h1" component="h4" className='title-h4' >
                غذای اصلی
              </Typography>
            </div>
            <div className="under-title">
              <Typography variant="h1" component="p" className='under-title-p' >
                برای مشاهده میزان مواد اولیه نیاز به خرید اشتراک است.
              </Typography>
              <Button variant="contained" className='btn' disableElevation>خرید اشتراک</Button>
            </div>
            <List>
              <ListItem className='item-list'>
                پیاز
              </ListItem>
              <ListItem className='item-list'>
                لپه
              </ListItem>
              <ListItem className='item-list'>
                برنج نیم دانه
              </ListItem>
              <ListItem className='item-list'>
                سبزی آش
              </ListItem>
              <ListItem className='item-list'>
                نمک
              </ListItem>
              <ListItem className='item-list'>
                ففل سیاه
              </ListItem>

            </List>
            <div className="title">
              <KeyboardArrowLeftIcon className='icon-food' />

              <Typography variant="h1" component="h4" className='title-h4' >
                کوفته قلقلی
              </Typography>
            </div>
            <List>
              <ListItem className='item-list'>
                ففل سیاه
              </ListItem>
              <ListItem className='item-list'>
                ففل سیاه
              </ListItem>
              <ListItem className='item-list'>
                ففل سیاه
              </ListItem>
              <ListItem className='item-list'>
                ففل سیاه
              </ListItem>

            </List>
          </div>
        </div>
        <div className='cooking-instruction'>
          <div className="title">
            <KeyboardVoiceOutlinedIcon className='icon-food' />

            <Typography variant="h1" component="h3" className='title-h3' >
              دستور پخت غذا
            </Typography>
          </div>
          <PlyrAudio src='' ></PlyrAudio>
        </div>
        <div className='cooking-steps'>
          <div className="title">
            <KeyboardVoiceOutlinedIcon className='icon-food' />

            <Typography variant="h1" component="h3" className='title-h3' >
              مراحل پخت غذا
            </Typography>
          </div>
          <div className="title title-cooking">
            <KeyboardArrowLeftIcon className='icon-food' />

            <Typography variant="h1" component="h4" className='title-h4' >
              غذای اصلی
            </Typography>
          </div>
          <div className='steps'>
            <div className="title-steps">
              <ArrowLeftIcon className='icon-food-steps' />

              <Typography variant="h1" component="h4" className='title-steps-p' >
                مرحله 1
              </Typography>
            </div>
            <div className='content-steps'>
              <Typography variant="h1" component="h4" className='content-p' >
                در ابتدا لپه و برنج را خیس دهید بهتر است از آب داغ استفاه کنید و مدتی صبر کنید .
              </Typography>
            </div>
          </div>
          <div className='steps'>
            <div className="title-steps">
              <ArrowLeftIcon className='icon-food-steps' />

              <Typography variant="h1" component="h4" className='title-steps-p' >
                مرحله 2
              </Typography>
            </div>
            <div className='content-steps'>
              <Typography variant="h1" component="h4" className='content-p' >
                پیاز را خورد کرده، با روغن داخل قابلمه به خوبی تفت دهید تا بلوری بشود. نمک، فلفل و زردچوبه را اضافه کرده و لپه و برنج را آبکش کنید و به مخلوط اضافه کنید، کمی تفت دهید تا بوی زهم لپه گرفته شود، سپس به مقدار لازم آب جوش اضافه کنید و اجازه دهید لپه و برنج با حرارت کم به خوبی بپزد.
              </Typography>
            </div>
          </div>
          <div className='steps'>
            <div className="title-steps">
              <ArrowLeftIcon className='icon-food-steps' />

              <Typography variant="h1" component="h4" className='title-steps-p' >
                مرحله 3
              </Typography>
            </div>
            <div className='content-steps'>
              <Typography variant="h1" component="h4" className='content-p' >
                سبزی آش را به همراه آب انار و رب انار اضافه کنید، اگر آش کم آب بود حتما کمی آب جوش اضافه کنید. رب انار را با کمی آب رقیق کنید تا بهتر در آش حل شود، دوباره درب قابلمه را بگذارید تا خوب مزه‌ها به خورد هم برود.
              </Typography>
            </div>
          </div>
          <div className='steps'>
            <div className="title-steps">
              <ArrowLeftIcon className='icon-food-steps' />

              <Typography variant="h1" component="h4" className='title-steps-p' >
                مرحله 4
              </Typography>
            </div>
            <div className='content-steps'>
              <Typography variant="h1" component="h4" className='content-p' >
                کوفته‌ریزه درست کنید و مقداری از آن را برای روی آش کنار بگذارید و بقیه را داخل آش بریزید و اجازه بدهید خوب جا بیافتد و لعاب بیاندازد (شما میتوانید کوفته ریزه ها رو پس از سرخ شدن همزمان با انجام مرحله 3 به آش اضافه کنید ) بعد از پخت با نعنا داغ، پیاز داغ و دانه انار تزیین کنید .
              </Typography>
            </div>
          </div>
          <div className="title title-cooking">
            <KeyboardArrowLeftIcon className='icon-food' />

            <Typography variant="h1" component="h4" className='title-h4' >
              غذای اصلی
            </Typography>

          </div>
          <div className='steps'>
            <div className="title-steps">
              <ArrowLeftIcon className='icon-food-steps' />

              <Typography variant="h1" component="h4" className='title-steps-p' >
                مرحله 1
              </Typography>
            </div>
            <div className='content-steps'>
              <Typography variant="h1" component="h4" className='content-p' >
                در ابتدا لپه و برنج را خیس دهید بهتر است از آب داغ استفاه کنید و مدتی صبر کنید .
              </Typography>
            </div>
          </div>
          <div className='steps'>
            <div className="title-steps">
              <ArrowLeftIcon className='icon-food-steps' />

              <Typography variant="h1" component="h4" className='title-steps-p' >
                مرحله 2
              </Typography>
            </div>
            <div className='content-steps'>
              <Typography variant="h1" component="h4" className='content-p' >
                پیاز را خورد کرده، با روغن داخل قابلمه به خوبی تفت دهید تا بلوری بشود. نمک، فلفل و زردچوبه را اضافه کرده و لپه و برنج را آبکش کنید و به مخلوط اضافه کنید، کمی تفت دهید تا بوی زهم لپه گرفته شود، سپس به مقدار لازم آب جوش اضافه کنید و اجازه دهید لپه و برنج با حرارت کم به خوبی بپزد.
              </Typography>
            </div>
          </div>
        </div>
        <div className="cooking-points">
          <div className="title">
            <RestaurantIcon className='icon-food' />

            <Typography variant="h1" component="h3" className='title-h3' >
              نکات آشپزی
            </Typography>
          </div>
          <div className="body-points">
            <Typography variant="h1" component="p" className='body-points-p' >
              1.
              میزان ترش یا ملس شدن این غذا به رب انار آن بستگی دارد، اگر رب انار شما شیرین باشد مزه غذا هم به نسبت کمی شیرین می شود
            </Typography>
            <Typography variant="h1" component="p" className='body-points-p' >
              2.
              میزان ترش یا ملس شدن این غذا به رب انار آن بستگی دارد، اگر رب انار شما شیرین باشد مزه غذا هم به نسبت کمی شیرین می شود
            </Typography>
            <Typography variant="h1" component="p" className='body-points-p' >
              3.
              میزان ترش یا ملس شدن این غذا به رب انار آن بستگی دارد، اگر رب انار شما شیرین باشد مزه غذا هم به نسبت کمی شیرین می شود
            </Typography>
          </div>
        </div>
        <div className="food-table">
          <div className="first-line">
            <div className="title">
              <TocIcon className='icon-food' />

              <Typography variant="h1" component="h3" className='title-h3' >
                جدول ارزش غذایی
              </Typography>
            </div>
            <Button variant="contained" className='btn' disableElevation><InfoOutlinedIcon className='btn-icon' /> 453 میزان کالری غذا برای هر نفر </Button>

          </div>
          <Grid container spacing={2} className="table-item">
            <Grid item md={4} xs={12} sm={12} className='top-table'>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  چربی
                </Typography>
                <Typography variant="h1" component="p" className='div-item-p-l' >
                  13.24 گرم
                </Typography>
              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  چربی
                </Typography>
                <Typography variant="h1" component="p" className='div-item-p-l' >
                  13.24 گرم
                </Typography>
              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  چربی
                </Typography>
                <Typography variant="h1" component="p" className='div-item-p-l' >
                  13.24 گرم
                </Typography>
              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  چربی
                </Typography>
                <Typography variant="h1" component="p" className='div-item-p-l' >
                  13.24 گرم
                </Typography>
              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  چربی
                </Typography>
                <Typography variant="h1" component="p" className='div-item-p-l' >
                  13.24 گرم
                </Typography>
              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  چربی
                </Typography>
                <Typography variant="h1" component="p" className='div-item-p-l' >
                  13.24 گرم
                </Typography>
              </div>

            </Grid>
            <Grid item md={4} xs={12} sm={12} className='top-table'>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  چربی
                </Typography>
                <Typography variant="h1" component="p" className='div-item-p-l' >
                  13.24 گرم
                </Typography>
              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  چربی
                </Typography>
                <Typography variant="h1" component="p" className='div-item-p-l' >
                  13.24 گرم
                </Typography>
              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  چربی
                </Typography>
                <Typography variant="h1" component="p" className='div-item-p-l' >
                  13.24 گرم
                </Typography>
              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  چربی
                </Typography>
                <Typography variant="h1" component="p" className='div-item-p-l' >
                  13.24 گرم
                </Typography>
              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  چربی
                </Typography>
                <Typography variant="h1" component="p" className='div-item-p-l' >
                  13.24 گرم
                </Typography>
              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  چربی
                </Typography>
                <Typography variant="h1" component="p" className='div-item-p-l' >
                  13.24 گرم
                </Typography>
              </div>
            </Grid>
            <Grid item md={4} xs={12} sm={12} className='top-table'>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  چربی
                </Typography>
                <Typography variant="h1" component="p" className='div-item-p-l' >
                  13.24 گرم
                </Typography>
              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  چربی
                </Typography>
                <Typography variant="h1" component="p" className='div-item-p-l' >
                  13.24 گرم
                </Typography>
              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  چربی
                </Typography>
                <Typography variant="h1" component="p" className='div-item-p-l' >
                  13.24 گرم
                </Typography>
              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  چربی
                </Typography>
                <Typography variant="h1" component="p" className='div-item-p-l' >
                  13.24 گرم
                </Typography>
              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  چربی
                </Typography>
                <Typography variant="h1" component="p" className='div-item-p-l' >
                  13.24 گرم
                </Typography>
              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  چربی
                </Typography>
                <Typography variant="h1" component="p" className='div-item-p-l' >
                  13.24 گرم
                </Typography>
              </div>
            </Grid>

          </Grid>
        </div>
        <div className='Item-equipment'>
          <div className="title">
            <LocalDiningOutlinedIcon className='icon-food' />

            <Typography variant="h1" component="h3" className='title-h3' >
              تجهیزات مورد نیاز
            </Typography>
          </div>
          <Grid container spacing={2} className="table-item">
            <Grid item md={6} xs={12} sm={12} className='top-table'>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  قاشق
                </Typography>

              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  قاشق
                </Typography>

              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  قاشق
                </Typography>

              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  قاشق
                </Typography>

              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  قاشق
                </Typography>

              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  قاشق
                </Typography>

              </div>
            </Grid>
            <Grid item md={6} xs={12} sm={12} className='top-table'>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  قاشق
                </Typography>

              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  قاشق
                </Typography>

              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  قاشق
                </Typography>

              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  قاشق
                </Typography>

              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  قاشق
                </Typography>

              </div>
              <div className="div-item">
                <Typography variant="h1" component="p" className='div-item-p-r' >
                  قاشق
                </Typography>

              </div>
            </Grid>

          </Grid>
        </div>
        <div className='Record-feedback'>
          <div className="title">
            <ThumbUpOutlinedIcon className='icon-food' />

            <Typography variant="h1" component="h3" className='title-h3' >
              ثبت بازخورد
            </Typography>

          </div>
          <div className="body">
            <Typography variant="h1" component="h3" className='feedback-p' >
              آیا این دستور مناسب بود؟
            </Typography>

          </div>
          <div className="btns">
            <Button variant="contained" className='btn-right' disableElevation>بله </Button>
            <Button variant="outlined" className='btn-left'> خیر </Button>
          </div>
        </div>
      </div>
      <div className={this.state.tab === 2 ? 'activecontent' : 'content'} id='mobile-content'>
        <div className='Opinion'>
          <Grid container spacing={2}>
            <Grid item md={4} sm={12} xs={12} className="grid-right-tab">
              <div className="title">
                <ChatBubbleOutlineIcon className='icon-food' />

                <Typography variant="h1" component="h3" className='title-h3' >
                  نظرات
                </Typography>

              </div>
              <div className="under-line">
                <StarIcon className='star-icon' />   <span className='four'>4</span> <span className='voite'>(40 رای ثبت شده)</span>
              </div>
              <div className='list'>
                <div className="up-list-item">
                  <Typography variant="h1" component="p" className='opinion-p' >
                    نظرات
                  </Typography>
                  <Typography variant="h1" component="p" className='opinion-p' >
                    4
                  </Typography>
                </div>

                <Box sx={{ width: '100%' }}>
                  <LinearProgress variant="determinate" value={80}
                  />
                </Box>
                <div className="up-list-item">
                  <Typography variant="h1" component="p" className='opinion-p' >
                    نظرات
                  </Typography>
                  <Typography variant="h1" component="p" className='opinion-p' >
                    4
                  </Typography>
                </div>

                <Box sx={{ width: '100%' }}>
                  <LinearProgress variant="determinate" value={100}
                  />
                </Box>
                <div className="up-list-item">
                  <Typography variant="h1" component="p" className='opinion-p' >
                    نظرات
                  </Typography>
                  <Typography variant="h1" component="p" className='opinion-p' >
                    5
                  </Typography>
                </div>

                <Box sx={{ width: '100%' }}>
                  <LinearProgress variant="determinate" value={100}
                  />
                </Box>
                <div className="up-list-item">
                  <Typography variant="h1" component="p" className='opinion-p' >
                    نظرات
                  </Typography>
                  <Typography variant="h1" component="p" className='opinion-p' >
                    5
                  </Typography>
                </div>

                <Box sx={{ width: '100%' }}>
                  <LinearProgress variant="determinate" value={80}
                  />
                </Box>
                <div className="up-list-item">
                  <Typography variant="h1" component="p" className='opinion-p' >
                    نظرات
                  </Typography>
                  <Typography variant="h1" component="p" className='opinion-p' >
                    3
                  </Typography>
                </div>

                <Box sx={{ width: '100%' }}>
                  <LinearProgress variant="determinate" value={60}
                  />
                </Box>
                <div className='box-btn' >
                  <Button variant="contained" disableElevation className='opinion-btn'>
                    افزودن نظر جدید
                  </Button>
                </div>
              </div>

            </Grid>
            <Grid item md={8} sm={12} xs={12} className="grid-left-tab">
              <div className='opinion-left'>
                <Typography variant="h1" component="h3" className='opinion-left-h3' >
                  29 نظر ثبت شده
                </Typography>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                  <ListItem className='opinion-list' alignItems="flex-start" >
                    <div className='opinion-list-img'>
                      <ListItemAvatar className='avatar-sec'>
                        <Avatar className='avatar-img' alt="Remy Sharp" src=".\assets\img\opinin-img.png" />

                      </ListItemAvatar>
                      <div className='body-text'>
                        <div>
                          <Typography variant="h1" component="p" className='text-up' >
                            سعید صفایی
                          </Typography>
                        </div>
                        <div className='date-text'>
                          <Typography variant="h1" component="p" className='text-down' >
                            18/آذر/1400
                          </Typography>
                        </div>
                        <div className='date-text-horof'>
                          <Typography variant="h1" component="p" className='text-down' >
                            دو روز قبل
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div className='opinion-under-body' >

                      <div className='under-opinion'>
                        <div className='under-opinion-inside' >
                          <ThumbUpOutlinedIcon className='icon-left-left-green' />
                          <Typography variant="h1" component="p" className='opinion-under-left-p-green' >
                            این غذا فوق العادست
                          </Typography>
                        </div>
                        <div className='likedislike-mobile'>
                          <div className='icon-left'>
                            <ThumbUpOutlinedIcon className='icon-op' />
                          </div>
                          <div className='icon-right'>
                            <ThumbDownOffAltOutlinedIcon className='icon-op' />
                          </div>
                        </div>
                      </div>
                      <Typography variant="h1" component="p" className='opinion-under-p' >
                        نظر جناب سعید خان صفایی در رابطه با این غذا اینه که خیلی خوبه... (:
                      </Typography>
                      <div className='likedislike likedislike-mobile'>
                        <div className='icon-left'>
                          <ThumbUpOutlinedIcon className='icon-op' /> 10
                        </div>
                        <div className='icon-right likedislike-mobile'>
                          <ThumbDownOffAltOutlinedIcon className='icon-op' /> 5
                        </div>
                      </div>
                    </div>

                  </ListItem>
                  <ListItem className='opinion-list' alignItems="flex-start" >
                    <div className='opinion-list-img'>
                      <ListItemAvatar className='avatar-sec'>
                        <Avatar className='avatar-img' alt="Remy Sharp" src=".\assets\img\opinin-img.png" />

                      </ListItemAvatar>
                      <div className='body-text'>
                        <div>
                          <Typography variant="h1" component="p" className='text-up' >
                            سعید صفایی
                          </Typography>
                        </div>
                        <div className='date-text'>
                          <Typography variant="h1" component="p" className='text-down' >
                            18/آذر/1400
                          </Typography>
                        </div>
                        <div className='date-text-horof'>
                          <Typography variant="h1" component="p" className='text-down' >
                            دو روز قبل
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div className='opinion-under-body' >

                      <div className='under-opinion'>
                        <div className='under-opinion-inside' >
                          <ThumbDownOffAltOutlinedIcon className='icon-left-left' />
                          <Typography variant="h1" component="p" className='opinion-under-left-p' >
                            نه اصلا خوب نیست
                          </Typography>
                        </div>
                        <div className='likedislike-mobile'>
                          <div className='icon-left'>
                            <ThumbUpOutlinedIcon className='icon-op' />
                          </div>
                          <div className='icon-right'>
                            <ThumbDownOffAltOutlinedIcon className='icon-op' />
                          </div>
                        </div>
                      </div>
                      <Typography variant="h1" component="p" className='opinion-under-p' >
                        نظر جناب سعید خان صفایی در رابطه با این غذا اینه که خیلی خوبه... (:
                      </Typography>
                      <div className='likedislike likedislike-mobile'>
                        <div className='icon-left'>
                          <ThumbUpOutlinedIcon className='icon-op' /> 10
                        </div>
                        <div className='icon-right likedislike-mobile'>
                          <ThumbDownOffAltOutlinedIcon className='icon-op' /> 5
                        </div>
                      </div>
                    </div>

                  </ListItem>
                  <ListItem className='opinion-list' alignItems="flex-start" >
                    <div className='opinion-list-img'>
                      <ListItemAvatar className='avatar-sec'>
                        <Avatar className='avatar-img' alt="Remy Sharp" src=".\assets\img\opinin-img.png" />

                      </ListItemAvatar>
                      <div className='body-text'>
                        <div>
                          <Typography variant="h1" component="p" className='text-up' >
                            سعید صفایی
                          </Typography>
                        </div>
                        <div className='date-text'>
                          <Typography variant="h1" component="p" className='text-down' >
                            18/آذر/1400
                          </Typography>
                        </div>
                        <div className='date-text-horof'>
                          <Typography variant="h1" component="p" className='text-down' >
                            دو روز قبل
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div className='opinion-under-body' >

                      <div className='under-opinion'>
                        <div className='under-opinion-inside' >
                          <ThumbDownOffAltOutlinedIcon className='icon-left-left' />
                          <Typography variant="h1" component="p" className='opinion-under-left-p' >
                            نه اصلا خوب نیست
                          </Typography>
                        </div>
                        <div className='likedislike-mobile'>
                          <div className='icon-left'>
                            <ThumbUpOutlinedIcon className='icon-op' />
                          </div>
                          <div className='icon-right'>
                            <ThumbDownOffAltOutlinedIcon className='icon-op' />
                          </div>
                        </div>
                      </div>
                      <Typography variant="h1" component="p" className='opinion-under-p' >
                        نظر جناب سعید خان صفایی در رابطه با این غذا اینه که خیلی خوبه... (:
                      </Typography>
                      <div className='likedislike likedislike-mobile'>
                        <div className='icon-left'>
                          <ThumbUpOutlinedIcon className='icon-op' /> 10
                        </div>
                        <div className='icon-right likedislike-mobile'>
                          <ThumbDownOffAltOutlinedIcon className='icon-op' /> 5
                        </div>
                      </div>
                    </div>

                  </ListItem>
                </List>
                <Button variant="text" className='btn' >  26 نظر دیگر <ArrowBackIosIcon className='icon-btn' /></Button>
              </div>
            </Grid>

          </Grid>
        </div>
      </div>
      <div className={this.state.tab === 3 ? 'activecontent' : 'content'} id='mobile-content'>
        <div className='question'>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12} sm={12} className="question-right-tab">

              <div className="title">
                <LiveHelpOutlinedIcon className='icon-food' />

                <Typography variant="h1" component="h3" className='title-h3' >
                  پرسش و پاسخ
                </Typography>
              </div>
              <FormGroup className='form-input-cheacked'>
                  <FormControlLabel control={<Checkbox />} label="پرسش و پاسخ های من" />
                  <FormControlLabel control={<Checkbox />} label="جدید ترین پاسخ" />
                </FormGroup>
              <div className='mobile-order'>
                <Typography variant="h1" component="h3" className='qustion-sabt' >
                  10 پرسش ثبت شده
                </Typography>
                <div className='box-btn'>
                  <Button className='question-btn' variant="contained" disableElevation> ثبت پرسش جدید  </Button>
                </div>
              </div>
            </Grid>
            <Grid item md={8} xs={12} sm={12}>
              <ul className='question-linkbar'>
                <li><TocOutlinedIcon className='list-icon' /> مرتب سازی بر اساس </li>
                <li className='second'>پرسش و پاسخ های من </li>
                <li>جدیدترین</li>
                <li> مفیدترین </li>
              </ul>
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem className='question-list' alignItems="flex-start" >
                  <div className='question-list-img'>
                    <ListItemAvatar className='avatar-sec'>
                      <Avatar className='avatar-img' alt="Remy Sharp" src=".\assets\img\opinin-img.png" />

                    </ListItemAvatar>
                    <div>
                      <Typography variant="h1" component="p" className='text-up text-question' >
                        سعید صفایی
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="h1" component="p" className='text-down' >
                        18/آذر/1400
                      </Typography>
                    </div>
                  </div>
                  <div className='opinion-under-body' >
                    <Typography variant="h1" component="p" className='opinion-under-p' >
                      نظر جناب سعید خان صفایی در رابطه با این غذا اینه که خیلی خوبه... (:
                    </Typography>
                    <div className='like-row'>
                      <div className='likedislike'>
                        <div className='icon-right'>
                          <ThumbUpOutlinedIcon className='icon-op' /> 10
                        </div>
                        <div className='icon-left'>
                          <ThumbDownOffAltOutlinedIcon className='icon-op' /> 5
                        </div>
                      </div>

                      <Button variant="text" className='text-re'>  ثبت پاسخ  <KeyboardArrowLeftIcon /></Button>

                    </div>
                  </div>

                </ListItem>
                <ListItem className='question-list' alignItems="flex-start" >
                  <div className='question-list-img question-list-down'>
                    <ListItemAvatar className='avatar-sec'>
                      <Avatar className='avatar-img-down' alt="Remy Sharp" src=".\assets\img\opinin-img.png" />

                    </ListItemAvatar>
                    <div>
                      <Typography variant="h1" component="p" className='text-up text-question' >
                        سعید صفایی
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="h1" component="p" className='text-down' >
                        18/آذر/1400
                      </Typography>
                    </div>
                  </div>
                  <div className='opinion-under-body' >

                    <img src="./assets/img/qustion-img.png" className='opinion-img' alt="" />
                    <Typography variant="h1" component="p" className='opinion-under-p' >
                      نظر جناب سعید خان صفایی در رابطه با این غذا اینه که خیلی خوبه... (:
                    </Typography>
                    <div className='like-row'>
                      <div className='likedislike'>
                        <div className='icon-right'>
                          <ThumbUpOutlinedIcon className='icon-op' /> 10
                        </div>
                        <div className='icon-left'>
                          <ThumbDownOffAltOutlinedIcon className='icon-op' /> 5
                        </div>
                      </div>
                      <Button variant="text" className='text-re'>  ثبت پاسخ  <KeyboardArrowLeftIcon /></Button>
                    </div>
                  </div>
                </ListItem>
                <Button variant="text" className='btn-other-question'> 9 سوال دیگر <ArrowBackIosIcon /></Button>
              </List>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>);
  }

  StringShowMore = 'اگر برای رنگین تر شدن سفره‌ی شب یلدا به دنبال یک آش خاص می‌گردید، آش انار همان گزینه مناسب است. نگفته از اسمش پیداست که می‌تواند مهمان شب یلدای شما باشد. طعم بی‌نظیر این آش را به خانواده خود هدیه کنید.... اگر برای رنگین تر شدن سفره‌ی شب یلدا به دنبال یک آش خاص می‌گردید، آش انار همان گزینه مناسب است. نگفته از اسمش پیداست که می‌تواند مهمان شب یلدای شما باشد. طعم بی‌نظیر این آش را به خانواده خود هدیه کنید....';
  handleChange = (tabs: number): void =>
  {
    this.setState({ tab: tabs });
    console.log('this change', this.state.tab);
  };

  showMoreChange(): void
  {
    this.setState({ showmore: !(this.state.showmore ?? false) });
    console.log('this is ', this.state.showmore);
  }
}
