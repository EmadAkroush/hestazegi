import React from 'react';
import { l10n } from '@alwatr/i18n';
import { CarouselSlick, NextArrowFunction, PrevArrowFunction } from '../../component/carousel';
import type { ReactElement } from 'react';
import type { FoodCategoryType } from '@godgiven/data-manager/type/food.js';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { TextField, InputAdornment, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import {
  arrowLeft,
  arrowRight
} from '@godgiven/icons/icons';

import '../../style/aboutfood.css';

interface PropListType extends Record<string, unknown>
{
  itemList?: FoodCategoryType[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  draggable?: boolean;
  tour?: boolean;
}
type StateListType = Record<string, unknown>;

export class Aboutfood extends React.Component<PropListType, StateListType>
{
  keyId: string;
  constructor(props: PropListType)
  {
    super(props);
    this.keyId = 'main-carousel';
  }

  render(): ReactElement
  {
    let numberItem = window.innerWidth >= 760 ? 8 : 4;
    if (window.innerWidth <= 484) { numberItem = 2; }
    const setting = {
      itemList: (this.props.itemList ?? []).map(
        (item) => this.foodCategory(item)
      ),
      slidesToShow: numberItem,
      slidesToScroll: 2,
      autoPlay: this.props.autoplay ?? true,
      nextArrow: <NextArrowFunction />,
      prevArrow: <PrevArrowFunction />
    };
    return (<>

    <section id="food-category-list" className="food-category-list carousel-style-1">
      <div className="container-fulid">
        <h2 className="mb-0 text-5 font-weight-bold">{l10n.localize('About_Iranian_food')}</h2>
        <div className='aboutfood-search-box'>
        <TextField
                        sx={{ width: '464px', height: '48px', borderRadius: '6px' }}
                        id="input-with-icon-textfield"
                        placeholder="شهر مورد نظر خود را جستجو کنید"
                        InputProps={{
                          startAdornment: (
                                <InputAdornment position="start">
                                 <SearchOutlinedIcon className='search-icon'/>
                                </InputAdornment>
                          )
                        }}

                    />
                    <Button variant="contained" className='aboutfood-search-box-btn'> جستوجو <SearchOutlinedIcon className='search-icon-btn'/></Button>
        </div>
        <Swiper
        className="about-food-carousel"
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
            next.classList.toggle('btn_text', true);
          }
          if (prev != null)
          {
            prev.classList.toggle('btn_text', true);
          }
          swiper.navigation.update();
        }}
        modules={[Navigation, Autoplay]}
      >
        {(this.props.itemList ?? []).map(
          (item) => this.foodCategory(item)
        )}
        </Swiper>
      </div>
    </section>
    </>);
  }

  foodCategory(item: FoodCategoryType): ReactElement
  {
    return (
      <SwiperSlide>
      <div className="item">
        <a href="">
          <div className="text-center">
            {
              item.image != null && item.image !== ''
                ? <img
                  alt={item.title}
                  className="img-fluid rounded"
                  width="60"
                  src={`http://statics.hesetazegi.com/Files/common/${item.image}`}
                />
                : ''
            }
          </div>
          <h5
            className="text-center font-weight-normal"
          >
            {item.title}
          </h5>
          <div className="text-center">
            <span className="color-orange">
              + {item.recipeCount} {l10n.localize('Food')}
            </span>
          </div>
        </a>

      </div>
      </SwiperSlide>
    );
  }
}
