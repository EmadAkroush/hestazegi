import React from 'react';
import { router } from '@alwatr/router';
import { activePage, headerState } from '@godgiven/data-manager/active-page.js';
import { queryIndexData, getIndexData } from '@godgiven/data-manager/provider/query-index-data.js';
import { saveReferralCode } from '@godgiven/data-manager/provider/save-referral-code.js';
import { Slider } from '../../component/slider';
import { recommendedDish } from './recommended-dish';
import { groupFoodList } from './ourService';
import { Groupfoodlist } from './group-food-list';
import { Whatcooking } from './whatcooking';
import { Healthfood } from './health-food';
import { Recommendeddishes } from './Recommended-dishes';
import { Weekprogram } from './week-program';
import { Similarfoods } from './Similar-foods';
import { Assistant } from './assistant';
import { Quickaccess } from './quick-access';
import { Aboutfood } from './about-food';

import { Provincialcuisine } from './Provincial-cuisine';

import type { MainRequestType } from '@godgiven/data-manager/provider/query-index-data.js';
import type { ReactElement } from 'react';

// interface PropListType{}
type PropListType = Record<string, unknown>;

interface StateListType extends Record<string, unknown>
{
  content?: MainRequestType;
}

export class Home extends React.Component<PropListType, StateListType>
{
  listen = false;
  active = false;
  content: MainRequestType | null = null;
  name = 'home';
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
      getIndexData.addListener((data) =>
      {
        this.content = data;
        this.forceUpdate();
      });

      router.signal.addListener((route) =>
      {
        // console.log(route.sectionList[1]);
        if (route.sectionList[1] == null)
        {
          // console.log(route, route.sectionList[1], route.sectionList[1] == null);
          queryIndexData.dispatch(null);
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
          const referralCode = router.currentRoute.queryParamList.referralCode;
          if (referralCode != null)
          {
            saveReferralCode.dispatch(referralCode as string);
          }
          this.forceUpdate();
        }
      });

      this.listen = true;
    }
  }

  render(): ReactElement | null
  {
    if (this.active === false) { return (<></>); }
    return (
      <div className="page-home">
        <Slider
          autoPlay
          interval={3000}
          slideList={window.innerWidth > 460
            ? this.content?.sliders?.map((item) =>
            {
              return {
                src: `http://statics.hesetazegi.com/Files/banners/${item.image}`,
                title: `${item.title}`
              };
            })
            : this.content?.sliders?.map((item) =>
            {
              return {
                src: `http://statics.hesetazegi.com/Files/banners/${item.image.replace('.jpg', '_m95.jpg')}`,
                title: `${item.title}`
              };
            })
          }
        ></Slider>
            <Groupfoodlist
          itemList={this.content?.foodcategories}
        >
        </Groupfoodlist>
        {recommendedDish()}
        <br/>
        {groupFoodList()}
        <br/>
         <Whatcooking></Whatcooking>
         <Healthfood></Healthfood>
         <Recommendeddishes></Recommendeddishes>
         <Weekprogram></Weekprogram>
         <Similarfoods></Similarfoods>
         <Assistant></Assistant>
         <Aboutfood itemList={(this.content?.foodcategories ?? [])}></Aboutfood>
         <Provincialcuisine></Provincialcuisine>
         <Quickaccess></Quickaccess>

      </div>
    );
  }
}
