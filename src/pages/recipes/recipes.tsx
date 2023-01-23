import React from 'react';
import { router } from '@alwatr/router';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { activePage, headerState } from '@godgiven/data-manager/active-page.js';
import { queryRecipeListData, recipeListChanged } from '@godgiven/data-manager/provider/query-recipe-list.js';
import type { RecipeQuery, RecipeListRequestType, RecipeType } from '@godgiven/data-manager/provider/query-recipe-list.js';
import type { ReactElement } from 'react';
import type { Route } from '@alwatr/router';
import CardComponent from '../../component/card';
import { RightBar } from './right-bar';
import { Grid, List, ListItem, Typography, Button, Pagination } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import '../../style/rightbar.css';

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
  content?: RecipeListRequestType;
  list?: RecipeType[];
  count?: number;
  loading?: boolean;
  active?: boolean;
  option?: RecipeQuery;
  route?: Route;
}

export class RecipesPage extends React.Component<PropListType, StateListType>
{
  classes = {};
  listen = false;
  name = 'recipes';

  constructor(props: PropListType)
  {
    super(props);
    this.listen = false;
    this.state = {
      option: {
        sort: 8,
        filter: {}
      }
    };
  }

  componentDidMount(): void
  {
    if (this.listen === false)
    {
      router.signal.addListener((route) =>
      {
        if (route.sectionList[1] === this.name && route.sectionList[2] !== 'detail')
        {
          this.setState({ route });
          activePage.dispatch({ name: this.name, header: true });
        }
        else if (this.state.active === true)
        {
          this.setState({ active: false });
          this.forceUpdate();
        }
      });

      headerState.addListener((page) =>
      {
        if (page.name === this.name && page.id !== 'detail')
        {
          queryRecipeListData.dispatch({});
          this.setState({ active: true, loading: true });
        }
      });

      recipeListChanged.addListener((data) =>
      {
        this.setState({
          content: data,
          loading: false,
          list: data.items,
          count: data.count
        });
      });

      this.listen = true;
    }
  }

  render(): ReactElement | null
  {
    if (this.state.active !== true) { return (<></>); }
    if (this.state.loading !== false) { return (this.loadingTemplate()); }
    return (<div className="page-recipes page-content">
      <div className="container-fulid">
        {this.itemTemplate()}
      </div>
    </div>);
  }

  itemTemplate(): ReactElement
  {
    if (this.state.content == null) { return <></>; }
    if (this.state.content.length === 0) { return <></>; }
    return (<div>
      <ThemeProvider theme={theme}>
        <Typography color="primary" component="h2" className='recipes-h1'>
          دستور پخت ها
        </Typography>
        <Grid container >
          <Grid item md={3} className="grid-rightbar" >
            <Grid >
              <div className='right'>
                <RightBar ></RightBar>
              </div>
            </Grid>
          </Grid>
          <Grid item md={9} sm={12} className="main-grid">
            <div className='upbar-body'>
              <List className='link-bar-up'>
                <ListItem className='first'>مرتب سازی بر اساس :</ListItem>
                <ListItem
                  onClick={() => { this.sort(8); }}
                  color="secondary"
                  className={this.state.option?.sort === 8 ? 'second' : 'item'}
                >جدیدترین </ListItem>
                <ListItem
                  onClick={() => { this.sort(7); }}
                  color="secondary"
                  className={this.state.option?.sort === 7 ? 'second' : 'item'}
                >قدیمی ترین </ListItem>
                <ListItem
                  color="secondary"
                  onClick={() => { this.sort(21); }}
                  className={this.state.option?.sort === 21 ? 'second' : 'item'}
                >محبوب ترین</ListItem>
                <ListItem
                  color="secondary"
                  onClick={() => { this.sort(20); }}
                  className={this.state.option?.sort === 20 ? 'second' : 'item'}
                > رایگان ها </ListItem>
              </List>

              <div className='resalt'>
                <Typography color="primary" component="p" className='resalt-p'>
                  تعداد نتایج  :
                </Typography>
                <Typography color="primary" component="p" className=''>
                  {this.state.count}
                </Typography>
              </div>
            </div>
            <div className='btn-filter'>
              <List className='link-bar-btn'>
                <ListItem className='first'>فیلتر:</ListItem>
                <ListItem color="secondary" className='second'>
                  <Button
                    variant="contained"
                    disableElevation
                    className="btn-item"
                  >
                    مواد اولیه(3)
                    <HighlightOffIcon className='close-icon' />
                  </Button>
                </ListItem>
                <ListItem
                  color="secondary"
                  className='item'
                >
                  <Button
                    variant="contained"
                    disableElevation
                    className="btn-item"
                  >
                    روش پخت (3)
                    <HighlightOffIcon
                      className='close-icon'
                    />
                  </Button>
                </ListItem>
                <ListItem
                  color="secondary"
                  className='item'
                >
                  <Button
                    variant="contained"
                    disableElevation
                    className="btn-item"
                  >
                    استان(3)
                    <HighlightOffIcon
                      className='close-icon'
                    />
                  </Button>
                </ListItem>
                <ListItem
                  color="secondary"
                  className='item'
                >
                  <Button
                    variant="contained"
                    disableElevation
                    className="btn-item"
                  >
                    کشور (3)
                    <HighlightOffIcon
                      className='close-icon'
                    />
                  </Button>
                </ListItem>
              </List>
              <div className='delete-btn'>
                <Typography color="primary" component="p" className='delete-p'>
                  حذف فیلتر
                </Typography>
              </div>
            </div>

            <Grid container item >
              {
                (this.state.list ?? [])
                  .map(
                    (item) => <Grid
                      item
                      md={4}
                      xs={6}
                      key={item.id}
                    >
                      <CardComponent
                        item={item}
                      ></CardComponent>
                    </Grid>
                  )
              }

            </Grid>
            <div className='Pagination'>
              <Stack spacing={2} >
                <Pagination count={5} shape="rounded" />
              </Stack>
            </div>
          </Grid>

        </Grid>
      </ThemeProvider>
      {/* <div className={classes.root}></div> */}
    </div>);
  }

  sort(num: number): void
  {
    const newOptions: RecipeQuery = {
      filter: {},
      ...this.state.option,
      sort: num
    };
    this.setState({ loading: true, option: newOptions });
    queryRecipeListData.dispatch(newOptions);
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
