// import logo from './logo.svg';
import React from 'react';
import { l10n } from '@alwatr/i18n';
import Drawer from '@mui/material/Drawer';
import {
  Divider, List, Collapse,
  ListItemButton, ListItemIcon, ListItemText
} from '@mui/material';
import {
  arrowLeft, arrowDown,
  book, home,
  file, back,
  menu, loginIcon, calculator,
  ranking, heartCircle
} from '@godgiven/icons';
import {
  aboutLink,
  dietLink,
  leagueLink,
  nutrientLink,
  diseaseLink,
  memberShip,
  recipeListLink
} from '@godgiven/data-manager/link.js';
import { getIndexData } from '@godgiven/data-manager/provider/query-index-data.js';
import { user } from '@godgiven/data-manager/controller/user.js';
import { activePage, headerState } from '@godgiven/data-manager/active-page.js';
import { ProfileButton } from './profile-button';
import type { MainRequestType } from '@godgiven/data-manager/provider/query-index-data.js';
import type { ReactElement } from 'react';
import type { Route } from '@alwatr/router';
import { recommendChefAssistant } from './recommend-chef-assistant';
// interface PropListType{}
type PropListType = Record<string, unknown>;
interface StateListType extends Record<string, unknown>
{
  mobileMenu?: boolean;
  mobileSubMenu: Record<string, boolean>;
  route?: Route;
}

export class Header extends React.Component<PropListType, StateListType>
{
  active = false;
  listen = false;
  pageName: string = '';
  content: MainRequestType | null = null;
  constructor(props: PropListType)
  {
    super(props);
    this.listen = false;
    this.active = false;
    this.pageName = '';
    this.content = null;
    this.state = {
      mobileMenu: false,
      mobileSubMenu: {}
    };
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

      activePage.addListener((page) =>
      {
        if (page.name === this.pageName) { return; }
        if (page.header === true)
        {
          this.active = true;
          this.forceUpdate(() => { headerState.dispatch(page); });
        }
        else if (this.active === true)
        {
          this.active = false;
          this.forceUpdate(() => { headerState.dispatch(page); });
        }
      });
      this.listen = true;
    }
  }

  render(): ReactElement
  {
    if (this.active === false) { return (<></>); }
    return (<>
    <header
      className={`main-header container-fulid ${user.checkTheUserLogin() ? 'user-profile' : ''}`}
    >
        <i
          className="button-mobile-menu"
          dangerouslySetInnerHTML={{ __html: menu }}
          onClick={this.toggleDrawer(true)}
        ></i>
        <a href="/" className="logo_img">
          <img
            className='mobile-logo'
            alt={l10n.localize('Freshness')}
            src="/assets/img/logo.svg"
          />
          <img
            className='desktop-menu'
            alt={l10n.localize('Freshness')}
            src="/assets/img/logo.png"
          />
        </a>
        <div className="box_search">
          <div className="btn_search"><i className="las la-search"></i></div>
          <div className="flex-grow-1 input">
            <input
              id="headerSearch"
              name="sw"
              type="search"
              placeholder={l10n.localize('Input_Your_Food_Name')}
            />
          </div>
        </div>
        <div className="box_action">
          <ProfileButton></ProfileButton>
          {
            !user.checkTheUserLogin()
              ? <span
                className={`btn_border ${user.checkTheUserLogin() ? 'button-rotate-icon' : ''}`}
                onClick={this.loginAndLogout}
              >
                <i
                  dangerouslySetInnerHTML={{ __html: loginIcon }}
                ></i>
                {user.checkTheUserLogin() ? l10n.localize('Logout') : l10n.localize('Login_And_Register')}
              </span>
              : ''
          }

          <a
            href={memberShip().link}
            className="buy-subscription btn_site btn_orange"
          >
            {memberShip().text}
          </a>
        </div>
        {
          !user.checkTheUserLogin()
            ? <span className="btn_text mobile_login"
              onClick={this.loginAndLogout}
            >
              <i dangerouslySetInnerHTML={{ __html: loginIcon }}></i>
              {user.checkTheUserLogin() ? l10n.localize('Logout') : l10n.localize('Login')}
            </span>
            : <span className="btn_text mobile_login"> <ProfileButton></ProfileButton> </span>
        }
        <nav className='main-nav-menu'>
          <ul>
            <li><a href="#">{l10n.localize('Home_Page')}</a></li>
            <li>
              <a
                href={recipeListLink().link}
              >
                {recipeListLink().text}
              </a>
            </li>
            <li><a href="#">{l10n.localize('Cooking_Calculator')}</a></li>
            <li>
              <a href="#">
                {l10n.localize('Culinary_Encyclopedia')}
                <i dangerouslySetInnerHTML={{ __html: arrowLeft }}></i>
              </a>
              <ul>
                <li>
                  <a>
                    {l10n.localize('Raw_Material')}
                  </a>
                </li>
                <li>
                  <a>
                    {l10n.localize('Meals')}
                  </a>
                </li>
                <li>
                  <a
                    href={nutrientLink().link}
                  >
                    {nutrientLink().text}
                  </a>
                </li>
                <li>
                  <a>
                    {l10n.localize('Kitchen_Appliances')}
                  </a>
                </li>
                <li>
                  <a
                    href={diseaseLink().link}
                  >
                    {l10n.localize('Diseases_Encyclopedia')}
                  </a>
                </li>
                <li>
                  <a
                    href={dietLink().link}
                  >
                    {l10n.localize('Encyclopedia_Of_Diets')}
                  </a>
                </li>
                <li>
                  <a>
                    {l10n.localize('Iranian_Food_Culture')}
                  </a>
                </li>
                <li>
                  <a>
                    {l10n.localize('Culinary_Terms')}
                  </a>
                </li>

              </ul>
            </li>
            <li>
              <a href={leagueLink().link}>
                {leagueLink().text}
              </a>
            </li>
            <li><a
              href={aboutLink().link}
            >{aboutLink().text}</a></li>
          </ul>
        </nav>
        <Drawer
          className="mobile-menu"
          open={this.state.mobileMenu}
          onClose={this.toggleDrawer(false)}
        >
          <div className='container-fulid'>
            <div className='mobile-menu-logo'>
              <i></i>
              <img
                alt={l10n.localize('Freshness')}
                src="/assets/img/logo.svg"
              />
              <i
                dangerouslySetInnerHTML={{ __html: back }}
                onClick={this.toggleDrawer(false)}
                className='close-mobile-menu rotate-in-ltr'
              ></i>
            </div>
            <Divider></Divider>
            <List>
              <ListItemButton className='hesetazegi-list-item'>
                <ListItemIcon>
                  <i
                    dangerouslySetInnerHTML={{ __html: home }}
                  ></i>
                </ListItemIcon>
                <ListItemText primary={l10n.localize('Home_Page')} />
              </ListItemButton>
              <ListItemButton className='hesetazegi-list-item'>
                <ListItemIcon>
                  <i
                    dangerouslySetInnerHTML={{ __html: file }}
                  ></i>
                </ListItemIcon>
                <ListItemText primary={l10n.localize('Recipes')} />
              </ListItemButton>
              <ListItemButton className='hesetazegi-list-item'>
                <ListItemIcon>
                  <i
                    dangerouslySetInnerHTML={{ __html: calculator }}
                  ></i>
                </ListItemIcon>
                <ListItemText primary={l10n.localize('Cooking_Calculator')} />
              </ListItemButton>
              <ListItemButton
                className='hesetazegi-list-item'
                onClick={this.toggleMenu('commands')}
              >
                <ListItemIcon>
                  <i
                    dangerouslySetInnerHTML={{ __html: book }}
                  ></i>
                </ListItemIcon>
                <ListItemText primary={l10n.localize('Encyclopedia_Of_Diets')} />
                {
                  this.state.mobileSubMenu.commands ?? false
                    ? <i
                      dangerouslySetInnerHTML={{ __html: arrowDown }}
                    ></i>
                    : <i
                      dangerouslySetInnerHTML={{ __html: arrowLeft }}
                    ></i>
                }
              </ListItemButton>
              <Collapse in={this.state.mobileSubMenu.commands ?? false} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    className='hesetazegi-list-item'
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary={l10n.localize('Raw_Material')} />
                  </ListItemButton>
                  <ListItemButton
                    className='hesetazegi-list-item'
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary={l10n.localize('Meals')} />
                  </ListItemButton>
                  <ListItemButton
                    className='hesetazegi-list-item'
                    sx={{ pl: 4 }}
                    href={nutrientLink().link}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary={nutrientLink().text} />
                  </ListItemButton>
                  <ListItemButton
                    className='hesetazegi-list-item'
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary={l10n.localize('Kitchen_Appliances')} />
                  </ListItemButton>
                  <ListItemButton
                    className='hesetazegi-list-item'
                    sx={{ pl: 4 }}
                    href={diseaseLink().link}
                  >
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary={l10n.localize('Diseases_Encyclopedia')} />
                  </ListItemButton>
                  <ListItemButton
                    className='hesetazegi-list-item'
                    sx={{ pl: 4 }}
                    href={dietLink().link}
                  >
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary={l10n.localize('Encyclopedia_Of_Diets')} />
                  </ListItemButton>
                  <ListItemButton
                    className='hesetazegi-list-item'
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary={l10n.localize('Iranian_Food_Culture')} />
                  </ListItemButton>
                  <ListItemButton
                    className='hesetazegi-list-item'
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary={l10n.localize('Culinary_Terms')} />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton
                className='hesetazegi-list-item'
                href={leagueLink().link}
              >
                <ListItemIcon>
                  <i
                    dangerouslySetInnerHTML={{ __html: ranking }}
                  ></i>
                </ListItemIcon>
                <ListItemText primary={l10n.localize('League_Of_Freshness')} />
              </ListItemButton>
              <ListItemButton
                className='hesetazegi-list-item'
                href={aboutLink().link}
              >
                <ListItemIcon>
                  <i
                    dangerouslySetInnerHTML={{ __html: heartCircle }}
                  ></i>
                </ListItemIcon>
                <ListItemText
                  primary={aboutLink().text}
                />
              </ListItemButton>
            </List>
          </div>
        </Drawer>
      </header>
      {recommendChefAssistant()}
     </>
    );
  }

  loginAndLogout = (): void =>
  {
    if (user.checkTheUserLogin())
    {
      user.logout.dispatch(null);
    }
    else
    {
      user.login.dispatch(null);
    }
  };

  toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) =>
    {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      )
      {
        return;
      }

      this.setState({ mobileMenu: open });
    };

  toggleMenu = (id: string) =>
    (event: React.KeyboardEvent | React.MouseEvent) =>
    {
      const mobileSubMenu = {};
      mobileSubMenu[id] = !this.state.mobileSubMenu[id];
      this.setState({ mobileSubMenu });
    };
}
