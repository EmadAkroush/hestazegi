import React from 'react';
import { router } from '@alwatr/router';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { activePage, headerState } from '@godgiven/data-manager/active-page.js';
// import { queryRecipeListData, recipeListChanged } from '@godgiven/data-manager/provider/query-recipe-list.js';
import type { RecipeType } from '@godgiven/data-manager/provider/query-recipe-list.js';
import type { ReactElement } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LeftBarDetail } from './leftbardetail';
import { TabDetail } from './tabdetail';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';
import {
  arrowLeft,
  arrowRight
} from '@godgiven/icons/icons';

import '../../../style/details.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#3A3A3A'

    },
    secondary: {
      // This is green.A700 as hex.
      main: '#868686'
    },
    error: {
      // This is green.A700 as hex.
      main: '#F69427'
    },
    warning: {
      // This is green.A700 as hex.
      main: '#FDA239'
    }
  }

});

// const classes = useStyles();
// interface PropListType{}
type PropListType = Record<string, unknown>;

interface StateListType extends Record<string, unknown>
{
  content?: RecipeType[];
  loading?: boolean;
  active?: boolean;
}

export class RecipeDetailsPage extends React.Component<PropListType, StateListType>
{
  classes = {};
  listen = false;
  name = 'recipes';
  numbercard: number[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thumbsSwiper: any;

  constructor(props: PropListType)
  {
    super(props);
    this.listen = false;
    this.state = {};
    this.numbercard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  componentDidMount(): void
  {
    if (this.listen === false)
    {
      router.signal.addListener((route) =>
      {
        if (route.sectionList[1] === this.name && route.sectionList[2] === 'detail')
        {
          this.setState({ rawMaterialId: route.sectionList[2] as string });
          activePage.dispatch({ name: this.name, header: true, id: 'detail' });
        }
        else if (this.state.active === true)
        {
          this.setState({
            content: undefined,
            active: false,
            loading: true
          });
          this.forceUpdate();
        }
      });

      headerState.addListener((page) =>
      {
        if (page.name === this.name && page.id === 'detail')
        {
          // queryRecipeListData.dispatch(null);
          // queryRecipeListData.dispatch(null);
          this.setState({ active: true, loading: true });
          this.setState({ loading: false });
        }
      });

      // recipeListChanged.addListener((data) =>
      // {
      //   this.setState({ content: data, loading: false });
      // });

      this.listen = true;
    }
  }

  render(): ReactElement | null
  {
    if (this.state.active !== true) { return (<></>); }
    if (this.state.loading !== false) { return (this.loadingTemplate()); }
    return (<div className="page-recipes page-content page-details">
      <div className="container-fulid">
        {this.itemTemplate()}
      </div>
    </div>);
  }

  itemTemplate(): ReactElement
  {
    // if (this.state.content == null) { return <></>; }
    // if (this.state.content.length === 0) { return <></>; }

    return (<div className='back-details'>

      <ThemeProvider theme={theme} >
        <div className='status-bar-details'>
          <div className='status-bar-left'>
            <Typography color="primary" component="h2" className='details-h1'>
              لازانیا مرغ پرتغالی
            </Typography>
            <ul className='link-bar'>
              <li className='link-bar-first'> غذا های ایرانی </li>
              <ArrowBackIosIcon />
              <li> نام غذای مورد نظر</li>
            </ul>
          </div>
          <div className='status-bar-right'>
            <Button variant="contained" className='btn-buy-order'> خرید دستور پخت </Button>
            <Button variant="contained" className='btn-share'>
              <ShareOutlinedIcon className='status-bar-icon' />
            </Button>
            <Button variant="contained" className='btn-like'>
              12+
              <FavoriteBorderOutlinedIcon className='status-bar-icon status-bar-icon-like ' />
            </Button>
          </div>
        </div>
        <Grid container >
          <Grid item md={12} >
            <Grid container>
              <Grid item md={9} sm={12} xs={12} className="right-colum">
                <div className='slider-details'>
                  {this.mainSliderTemplate()}
                  <Swiper
                    onSwiper={
                      (setSwiper): void =>
                      {
                        this.thumbsSwiper = setSwiper;
                        this.forceUpdate();
                      }
                    }
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    onInit={(swiper) =>
                    {
                      const next = swiper.el.querySelector('.swiper-button-next');
                      const prev = swiper.el.querySelector('.swiper-button-prev');
                      if (next != null)
                      {
                        next.innerHTML = `<i>${arrowRight}</i>`;
                        next.classList.toggle('btn_text', true);
                      }
                      if (prev != null)
                      {
                        prev.innerHTML = `<i>${arrowLeft}</i>`;
                        prev.classList.toggle('btn_text', true);
                      }
                      swiper.navigation.update();
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                    </SwiperSlide>
                  </Swiper>

                </div>
              </Grid>
              <Grid item md={3} sm={12} xs={12} className="left-colum">
                <LeftBarDetail className='shadow' />

              </Grid>
            </Grid>
          </Grid>
          <Grid item md={9} sm={12} xs={12} className="body-main-details">
            <TabDetail></TabDetail>
          </Grid>

        </Grid>
      </ThemeProvider>
      {/* <div className={classes.root}></div> */}
    </div>);
  }

  mainSliderTemplate(): ReactElement
  {
    const props = {
      className: 'mySwiper2',
      navigation: true,
      spaceBetween: 10,
      modules: [FreeMode, Navigation, Thumbs],
      thumbs: { swiper: this.thumbsSwiper }
    };
    return (<Swiper
      {...props}
    >
      {this.itemSlideListTemplate()}
    </Swiper>);
  }

  itemSlideListTemplate(): ReactElement
  {
    return (<>
      <SwiperSlide>
        <img src='.\assets\img\img-slider.png' />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
      </SwiperSlide>
    </>);
  }

  loadingTemplate(): ReactElement
  {
    return (<div className="container-fulid">
      <div className='page-encyclopedia-list page-content'>
        <section className="mb-5">
          <Stack spacing={1}>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="text" width={200} sx={{ fontSize: '1rem' }} />
            <Skeleton variant="rectangular" height={60} />
            <br /><br />
            <Skeleton variant="text" width={200} sx={{ fontSize: '1rem' }} />
            <Skeleton variant="rounded" height={60} />
            <br /><br />
            <Skeleton variant="text" width={200} sx={{ fontSize: '1rem' }} />
            <Skeleton variant="rounded" height={60} />
            <br /><br />
            <Skeleton variant="text" width={200} sx={{ fontSize: '1rem' }} />
            <Skeleton variant="rounded" height={60} />
            <br /><br />
            <Skeleton variant="text" width={200} sx={{ fontSize: '1rem' }} />
            <Skeleton variant="rounded" height={60} />
            <br /><br />
            <Skeleton variant="text" width={200} sx={{ fontSize: '1rem' }} />
            <Skeleton variant="rounded" height={60} />
          </Stack>
        </section>
      </div>
    </div>);
  }
}
