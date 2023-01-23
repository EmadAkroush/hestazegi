import React from 'react';
import { router } from '@alwatr/router';
import { activePage, headerState } from '@godgiven/data-manager/active-page.js';
import {
  arrowLeft,
  arrowRight
} from '@godgiven/icons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import type { MainRequestType } from '@godgiven/data-manager/provider/query-index-data.js';
import type { ReactElement } from 'react';
import 'swiper/css';
// interface PropListType{}
type PropListType = Record<string, unknown>;

interface StateListType extends Record<string, unknown>
{
}

export class SampleSlider extends React.Component<PropListType, StateListType>
{
  listen = false;
  active = false;
  content: MainRequestType | null = null;
  name = 'sample-slider';
  constructor(props: PropListType)
  {
    super(props);
    this.listen = false;
    this.active = false;
    this.content = null;
  }

  componentDidMount(): void
  {
    if (this.listen === false)
    {
      router.signal.addListener((route) =>
      {
        if (route.sectionList[1] === this.name)
        {
          activePage.dispatch({ name: this.name, header: true });
        }
        else if (this.active === true)
        {
          this.active = false;
          this.forceUpdate();
        }
      });

      headerState.addListener((page) =>
      {
        if (page.name === this.name)
        {
          this.active = true;
          this.forceUpdate();
        }
      });

      this.listen = true;
    }
  }

  render(): ReactElement | null
  {
    if (this.active === false) { return (<></>); }
    let numberItem = window.innerWidth >= 760 ? 5 : 2;
    if (window.innerWidth <= 484) { numberItem = 1; }
    return (<div className="page-content">
      <Swiper
        className="carousel-style-1"
        slidesPerView={numberItem}
        spaceBetween={9}
        navigation= {{
          enabled: true
        }}
        autoplay={{
          delay: 5000
        }}
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
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide>
          <h1>test 1</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>test 2</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>test 3</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>test 4</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>test 5</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>test 6</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>test 7</h1>
          <br/><br/>
        </SwiperSlide>
      </Swiper>
      <br/><br/><br/>
    </div>);
  }
}
