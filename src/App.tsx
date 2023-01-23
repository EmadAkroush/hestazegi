// import logo from './logo.svg';
import React from 'react';
import { l10n } from '@alwatr/i18n';
import { queryIndexData } from '@godgiven/data-manager/provider/query-index-data.js';
import { router, routeChangeSignal } from '@alwatr/router';
import {
  Header,
  Footer,
  Home,
  RecipesPage,
  SampleSlider,
  RecipeDetailsPage
} from './pages/index';
import type { ReactElement } from 'react';

const languageList = {
  fa: {
    code: 'fa-IR',
    direction: 'rtl',
    language: 'fa'
  },
  en: {
    code: 'en-US',
    direction: 'ltr',
    language: 'en'
  }
};

// interface PropListType{}
type PropListType = Record<string, unknown>;

interface StateListType extends Record<string, unknown> {}

class App extends React.Component<PropListType, StateListType>
{
  listen = false;
  constructor(props: PropListType)
  {
    super(props);
    this.listen = false;
  }

  componentDidMount(): void
  {
    if (this.listen === false)
    {
      l10n.resourceChangeSignal.addListener((data) =>
      {
        this.forceUpdate();
      });

      router.initial();
      router.signal.addListener((route) =>
      {
        if (!['fa', 'en'].includes(route.sectionList[0] as string))
        {
          route.sectionList.unshift('fa');
          const link = router.makeUrl(route);
          const { pathname, search, hash } = new URL(`${window.location.origin}${link}`);
          l10n.setLocal({
            code: 'fa-IR',
            direction: 'rtl',
            language: 'fa'
          });
          void routeChangeSignal.request({ pathname, search, hash });
          return;
        }
        else
        {
          if (
            route.sectionList[0] != null &&
            route.sectionList[0] !== l10n.locale?.language
          )
          {
            l10n.setLocal(languageList[route.sectionList[0] as string]);
          }
          if (route.sectionList[1] != null)
          {
            queryIndexData.dispatch(null);
          }
        }
        this.setState({ route });
      });
      window.addEventListener('resize', (event) =>
      {
        this.forceUpdate();
      });
      this.listen = true;
    }
  }

  render(): ReactElement | null
  {
    return (
      <div className={`App${l10n.locale?.direction === 'ltr' ? ' app-ltr' : ''}`}>
        <Header></Header>

        <Home></Home>
        <RecipesPage></RecipesPage>
        <RecipeDetailsPage></RecipeDetailsPage>
        <SampleSlider></SampleSlider>

        <Footer></Footer>
      </div>
    );
  }
}

export default App;
