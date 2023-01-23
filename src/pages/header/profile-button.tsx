import React from 'react';
import { l10n } from '@alwatr/i18n';
import { user } from '@godgiven/data-manager/controller/user';
import {
  profile, polygonDown
} from '@godgiven/icons';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import type { ApiUserType } from '@godgiven/data-manager/type/user.js';
import type { ReactElement } from 'react';

interface StateListType extends Record<string, unknown>
{
  anchorEl?: HTMLElement | null;
}

interface PropListType extends Record<string, unknown>
{
  content?: ApiUserType | null;
  className?: string;
  type?: 'text' | 'border';
}

export class ProfileButton extends React.Component<PropListType, StateListType>
{
  listen = false;
  active: number = 0;
  keyId: string;
  constructor(props: PropListType)
  {
    super(props);
    this.active = 0;
    this.listen = false;
    this.state = {
      anchorEl: null
    };
  }

  render(): ReactElement | null
  {
    if (!user.checkTheUserLogin()) { return (<div></div>); }
    return (<div className={`hestazegi-profile ${this.props.className ?? ''}`}>
      <span
        onClick={this.handleMenu}
        className={this.props.type === 'text' ? ' btn_border' : ' btn_text'}
      >
        <i dangerouslySetInnerHTML={{ __html: profile }}></i>
        {user.content?.firstname} {user.content?.lastname}
        <i dangerouslySetInnerHTML={{ __html: polygonDown }}></i>
      </span>
      <Menu
        id="menu-app-bar"
        sx={{ mt: '45px' }}
        anchorEl={this.state.anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(this.state.anchorEl)}
        onClose={this.handleClose}
      >
        <MenuItem onClick={this.handleClose}>
          <ListItemText>
            {
              this.props.content != null
                ? this.props.content.phone
                : l10n.localize('Profile')
            }
          </ListItemText>
          <ListItemIcon></ListItemIcon>
        </MenuItem>
        <MenuItem
        onClick={() => { this.handleClose(); user.logout.dispatch(null); }}>{l10n.localize('Logout')}</MenuItem>
      </Menu>
    </div>);
  }

  handleMenu = (event: React.MouseEvent<HTMLElement>): void =>
  {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (): void =>
  {
    this.setState({ anchorEl: null });
  };
}
