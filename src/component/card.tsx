import React, { Component } from 'react';
import type { ReactElement } from 'react';
import '../style/card.css';
import { Card, CardContent, Typography, CardActions } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import type { RecipeType } from '@godgiven/data-manager/provider/query-recipe-list.js';
import { heart } from '@godgiven/icons/icons.js';
interface PropListType extends Record<string, unknown>
{
  item: RecipeType;
}

class CardComponent extends Component<PropListType>
{
  render(): ReactElement
  {
    const card = this.props.item;
    return (
      <div>
        <Card className="card-hestazegi">
          <a href="" className='link-mobile'>
            <div className="img-card">
              <img
                src={`http://statics.hesetazegi.com/files/recipes/${card.thumbnail}`}
                title={card.title ?? ''}
                className="img-card"
              />
              <div className="img-icon heart-icon">
                <i className='heart-icon-i'
                  dangerouslySetInnerHTML={{ __html: heart }}
                ></i>
              </div>
              <div className="img-icon free-icon">
                <img src="assets/img/card-icon-left.png" alt="" />
              </div>
            </div>

            <CardContent>
              <div className="title-card">

                <Typography color="primary" component="h3" className='title' >
                  {card.title ?? ''}
                </Typography>

                { /* **** Rating **** */}
                <div className="title-card-in" >
                  {this.ratingTemplate()}
                </div>
              </div>
            </CardContent>
          </a>
          <CardActions className='card-ac'></CardActions>
          <CardActions className='card-ac'>
            <div className='body-card-mobile'>
              <div className="right-mobile">
                {this.timeTemplate(false)}
              </div>
              <div className="left-mobile">
                {this.ratingTemplate()}
              </div>
            </div>
            <div className='body-card'>
              {this.timeTemplate()}
            </div>
            <div className='bottom' color="action">
              {this.tagTemplate()}
            </div>
          </CardActions>
        </Card>
      </div>

    );
  }

  tagTemplate(): ReactElement
  {
    if (this.props.item == null) { return <></>; }
    if (this.props.item.tags == null) { return <></>; }
    if (this.props.item.tags.length <= 0) { return <></>; }
    return (<>
      {
        this.props.item.tags.map((tag) => <a key={tag.entityID}>
          <Typography color="action" component="p" className='p-body b-icon' >
            #{tag.title}
          </Typography>
        </a>)
      }
    </>);
  }

  timeTemplate(showMore: boolean = true): ReactElement
  {
    return (<><AccessTimeFilledIcon color="error" className='clock'></AccessTimeFilledIcon>
    <Typography color="secondary" component="p" className='p-body' >
      {this.props.item.bakingTime} الی {
        showMore === true
          ? (this.props.item.bakingTime + this.props.item.watingTime + this.props.item.preparationTime)
          : ''
      } دقیقه
    </Typography></>);
  }

  ratingTemplate(): ReactElement
  {
    return (<>
      <Typography color="secondary" component="p" className='mobile-counter'>
        (+25)
      </Typography>
      <StarIcon className='mobile-rating' color="error" ></StarIcon>
      <Typography color="primary" component="p" className='mobile-sum'>
        4.5
      </Typography>
    </>);
  }
}

export default CardComponent;
