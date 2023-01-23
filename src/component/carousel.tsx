import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import {
  arrowLeft,
  arrowRight
} from '@godgiven/icons/icons';
import { l10n } from '@alwatr/i18n';
import type { ReactElement } from 'react';

interface PropListType extends Record<string, unknown>
{
  itemList?: ReactElement[];
  dots?: boolean;
  speed?: number;
  infinite?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  responsive?: unknown;
  variableWidth?: boolean;
  slideWidth?: number;
  rtl?: boolean;
  keyId?: string;
  autoPlay?: boolean;
  nextArrow?: ReactElement;
  prevArrow?: ReactElement;
}
type StateListType = Record<string, unknown>;
export class CarouselSlick extends React.Component<PropListType, StateListType>
{
  keyId: string;
  constructor(props: PropListType)
  {
    super(props);
    this.keyId = 'main-carousel';
  }

  render(): ReactElement | null
  {
    if (this.props.itemList == null) { return null; }
    const settings: {
      nextArrow?: ReactElement;
      prevArrow?: ReactElement;
      slidesToShow?: number;
      slidesToScroll?: number;
      variableWidth?: boolean;
      slideWidth?: number;
      autoplay?: boolean;
      rtl?: boolean;
      responsive?: unknown;
    } = {
      slidesToShow: this.props.slidesToShow ?? 4,
      slidesToScroll: this.props.slidesToScroll ?? 4,
      autoplay: this.props.autoPlay ?? true,
      variableWidth: this.props.variableWidth === true,
      rtl: this.props.rtl === true
    };
    if (this.props.responsive != null) { settings.responsive = this.props.responsive; }
    if (this.props.nextArrow != null) { settings.nextArrow = this.props.nextArrow; }
    if (this.props.prevArrow != null) { settings.prevArrow = this.props.prevArrow; }
    if (this.props.slideWidth != null) { settings.slideWidth = this.props.slideWidth; }
    return (<Slider
      {...settings}
    >
      {
        (this.props.itemList ?? []).map((item, key) =>
        {
          return (
            <div
              key={`${this.props.keyId ?? this.keyId}-${key}-slid`}
              className={'carousel-item'}
            >
              {item}
            </div>
          );
        })
      }
    </Slider>);
  }
}

/**
 *
 */
export function NextArrowFunction(props): ReactElement
{
  const { className, onClick } = props;
  return (
    <button
    className={`btn_text ${l10n.locale?.direction === 'rtl' ? 'fix-left' : 'fix-right'} ${className as string}`}
    onClick={onClick}
    >
      <i
        dangerouslySetInnerHTML={{ __html: arrowRight }}
      ></i>
    </button>
  );
}

/**
 *
 */
export function PrevArrowFunction(props): ReactElement
{
  const { className, onClick } = props;
  return (
    <button
    className={`btn_text ${l10n.locale?.direction === 'rtl' ? 'fix-left' : 'fix-right'} ${className as string}`}
    onClick={onClick}
    >
      <i
        dangerouslySetInnerHTML={{ __html: arrowLeft }}
      ></i>
    </button>
  );
}
