import React, { Component } from 'react';
import type { ReactElement } from 'react';
import { Button, Collapse, Typography, Checkbox, Fab, Box, Drawer, TextField, InputAdornment } from '@mui/material';
// import { styled, alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../../style/recipes.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import { withStyles } from '@mui/styles';
// import AddIcon from '@mui/icons-material/Add';
import type { FilterType } from '@godgiven/data-manager/provider/query-recipe-list.js';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
// interface PropListType{}
// type PropListType = Record<string, unknown >;

interface StateListType extends Record<string, unknown>
{
  loading?: boolean;
  active?: boolean;
  numbers?: number[];
  tabActive: string[];
  right?: boolean;
}
const style = {
  btndisactive: {
    color: '#ACACAC',
    backgroundColor: '#EFEFEF'
  },
  btnactive: {
    color: '#FFFFFF',
    backgroundColor: '#B0BF24'
  },
  deleteactive: {
    color: '#ACACAC'
  },
  deletedisactive: {
    color: '#2EB4FF'
  },
  borderactive: {
    borderBottom: '1px solid #EFEFEF'
  },
  borderdisactive: {
    border: 'none'
  }
};

export class RightBar extends Component<FilterType, StateListType>
{
  numbers: number[];
  constructor(props: FilterType)
  {
    super(props);
    this.state = {
      right: false,
      tabActive: []
    };
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  }

  render(): ReactElement
  {
    return (<div>
        <div className="paper-righbar">
        <div className='up-drawer'>
            <Typography color="primary" onClick={() => this.setState({ checked: false }) } component="p" className='right' style={(this.state.checked === true) ? style.deletedisactive : style.deleteactive} >
              حذف فیلتر
            </Typography>
            <Typography color="primary" component="p" className='left' >
              فیلتر
            </Typography>
            <Button variant="text" className='close-btn' onClick={() => this.setState({ right: false })} >
              <CancelPresentationIcon className='icon'/>
            </Button>
          </div>

          <div className='list-righbar' >
            <Button
              className="btn-rightbar"
              id="btn-rightbar"
              aria-controls={(this.state.open === true) ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={this.state.open === true ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={() => { this.handleClick('CategoryRecipes'); }}

            >
              <div className='btn-text'>
                <Typography color="primary" component="p" className='right' >
                  دسته بندی غذایی
                </Typography>
                {
                  this.props.categoryRecipes != null && this.props.categoryRecipes.length > 0
                    ? <Typography color="primary" component="p" className='counter' >
                      ({this.props.categoryRecipes.length})
                    </Typography>
                    : ''
                }
              </div>
              <div>
                { (this.state.tabActive.includes('CategoryRecipes')) ? <KeyboardArrowDownIcon fontSize="large" color="primary"/> : <KeyboardArrowLeftIcon fontSize="large" color="primary"/> }
              </div>
            </Button>
            <Collapse in={this.state.open === true} timeout="auto" unmountOnExit>
              <div className='drop-rightbar'>
                <Checkbox className='check-lable' sx={{
                  '& .MuiSvgIcon-root': { fontSize: 24 },
                  '&.Mui-checked': { color: '#B0BF24' }
                }} />
                <Typography color="primary" component="p" className='typography' >
                  پلو و دمی
                </Typography>
              </div>
            </Collapse>
          </div>
        <div />
        <Drawer
          anchor="right"
          onClose={(event) => this.setState({ right: false })}
          open={this.state.right}
          className='drawer'
        >
          <div className='up-drawer'>
            <Typography color="primary" onClick={() => this.setState({ checked: false }) } component="p" className='right' style={(this.state.checked === true) ? style.deletedisactive : style.deleteactive} >
              حذف فیلتر
            </Typography>
            <Typography color="primary" component="p" className='left' >
              فیلتر
            </Typography>
            <Button variant="text" onClick={() => this.setState({ right: false })} className="close-btn">
              <CancelPresentationIcon className='icon'/>
            </Button>
          </div>
          <div className='list-righbar' >
            <Button
              className="btn-rightbar"
              id="btn-rightbar"
              aria-controls={(this.state.tabActive.includes('CategoryRecipes')) ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={(this.state.tabActive.includes('CategoryRecipes')) ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={() => { this.handleClick('CategoryRecipes'); }}
              style={(this.state.tabActive.includes('CategoryRecipes')) ? style.borderdisactive : style.borderactive }
            >
              <div className='btn-text'>
                <Typography color="primary" component="p" className='right' >
                  دسته بندی غذایی
                </Typography>
                <Typography color="primary" component="p" className='counter' >
                  (4)
                </Typography>
              </div>
              <div>
                {
                  (this.state.tabActive.includes('CategoryRecipes'))
                    ? <KeyboardArrowDownIcon fontSize="large" color="primary"/>
                    : <KeyboardArrowLeftIcon fontSize="large" color="primary"/>
                }
              </div>
            </Button>
            <Collapse in={(this.state.tabActive.includes('CategoryRecipes'))} timeout="auto" unmountOnExit>
              <TextField
                className='input-drawer'
                id="outlined-select-currency"
                placeholder='جستجوکنید...'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                    <SearchIcon className='drawer-icon-search'/>
                    </InputAdornment>
                  )
                }}
              />
              <div className='body-drop'>
                <div className='drop-rightbar'>
                  <Checkbox className='check-lable' onClick={() => this.setState({ checked: true }) } sx={{
                    '& .MuiSvgIcon-root': { fontSize: 24 },
                    '&.Mui-checked': { color: '#B0BF24' }
                  }} />
                  <Typography color="primary" component="p" className='typography' >
                    پلو و دمی
                  </Typography>
                </div>
              </div>
            </Collapse>
          </div>
          <Button variant="contained" id="drawer-btn" style={(this.state.checked === true) ? style.btnactive : style.btndisactive} >اعمال </Button>
        </Drawer>

      </div>
      <Box sx={{ '& > :not(style)': { m: 1 } }} className="float-icon-btn" onClick={() => this.setState({ right: true }) } >
        <Fab color="primary" aria-label="add">
          <FilterAltIcon />
        </Fab>
      </Box>
    </div>);
  }

  handleClick = (index: string): void =>
  {
    if (this.state.tabActive == null)
    {
      this.setState({ tabActive: [index] });
    }
    else
    {
      if (this.state.tabActive.includes(index))
      {
        this.setState({ tabActive: this.state.tabActive.filter(item => item !== index) });
      }
      else
      {
        this.setState({ tabActive: [...this.state.tabActive, index] });
      }
    }
  };

  changeCat(): void
  {
    this.setState({ active: !(this.state.active ?? false) });
  }
}
