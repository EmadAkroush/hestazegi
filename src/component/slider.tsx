import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import {
  arrowLeft,
  arrowRight
} from '@godgiven/icons/icons.js';
import type { ReactElement } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
interface SlideType extends Record<string, unknown>
{
  src?: string;
  html?: ReactElement;
  link?: string;
  transition?: string;
  title?: string;
}

type StateListType = Record<string, unknown>;

interface PropListType extends Record<string, unknown>
{
  slideList?: SlideType[];
  showThumbs?: boolean;
  showStatus?: boolean;
  interval?: number;
  swipeable?: boolean;
  autoPlay?: boolean;
  infiniteLoop?: boolean;
  keyId?: string;
}

export class Slider extends React.Component<PropListType, StateListType>
{
  keyId: string;
  constructor(props: PropListType)
  {
    super(props);
    this.keyId = 'main-slider';
  }

  render(): ReactElement | null
  {
    return (<section className="slider-hesetazegi">
      <div className="carousel slide">
        {
          (this.props.slideList ?? []).length > 0
            ? <Carousel
                showThumbs={this.props.showThumbs ?? false}
                showStatus={this.props.showStatus ?? false}
                autoPlay={this.props.autoPlay ?? false}
                interval={this.props.interval ?? 4000}
                infiniteLoop={this.props.infiniteLoop ?? true}
                swipeable={this.props.swipeable ?? true}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                  hasPrev && (
                    <button
                      type="button"
                      title={label}
                      className="control-arrow control-prev"
                      onClick={onClickHandler}
                    >
                      <i dangerouslySetInnerHTML={{ __html: arrowLeft }}></i>
                    </button>
                  )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                  hasNext && (
                    <button
                      type="button"
                      title={label}
                      className="control-arrow control-next"
                      onClick={onClickHandler}
                    >
                      <i dangerouslySetInnerHTML={{ __html: arrowRight }}></i>
                    </button>
                  )
                }
              >
                {
                  (this.props.slideList ?? []).map((item, key) =>
                  {
                    return (
                      <div
                        key={`${this.keyId}-${key}-slid`}
                        className={'carousel-item'}
                      >
                        {
                          item.link != null
                            ? <a href={item.link}>
                              <img src={item.src} className="d-block" />
                            </a>
                            : <img src={item.src} className="d-block" />
                        }
                      </div>
                    );
                  })
                }
              </Carousel>
            : ''
        }
      </div>
    </section>);
  }
}
