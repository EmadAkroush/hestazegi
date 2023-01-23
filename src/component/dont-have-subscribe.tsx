import React from 'react';
import { l10n } from '@alwatr/i18n';
import { memberShip } from '@godgiven/data-manager/link.js';
import type { ReactElement } from 'react';

export class YouNeedSubscribe extends React.Component<Record<string, unknown>, Record<string, unknown>>
{
  render(): ReactElement
  {
    return (<>
      <div className="style_box p-3 w-100 mb-5">
        <h5 className="font-weight-bold">{l10n.localize('Restricted_Access')}</h5>
        <div className="d-flex flex-wrap align-items-center">
          <span className="text-dark">{l10n.localize('You_Must_Subscribe_To_Access_This_Section')}</span>
          <span className="d-flex align-items-center ml-auto  mt-4 mt-lg-0">
            <a href={memberShip().link}
              className="btn_site mr-5 btn_beige px-4 py-3 font-weight-bold "
            >
              {memberShip().text}
            </a>
            <span className="cursor d-flex" data-toggle="modal" data-target="#resultModal" style={{ gap: '5px' }}>
              <i className="las la-play-circle color-orange"></i>
              {l10n.localize('Reason_For_Purchasing_Subscription')}
            </span>
          </span>
        </div>
      </div>
    </>);
  }
}
