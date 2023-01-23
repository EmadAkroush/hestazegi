import React from 'react';
import { l10n } from '@alwatr/i18n';
import { user } from '@godgiven/data-manager/controller/user.js';
import type { ReactElement } from 'react';
/**
 *
 */
export function recommendedDish(): ReactElement | null
{
  if (user.checkTheUserLogin() === true) { return null; }
  return (<section id="recommended-dish" className="recommended-dish">
    <div className="container-fulid">
      <div className="p-5 ">
        <div className="col-12 ">
          <h2 className="text-5 font-weight-bold mb-5">
            {l10n.localize('Recommended_Dishes')}
          </h2>
        </div>
        <div className="recommended-dish-card">
          <p
            dangerouslySetInnerHTML={{ __html: l10n.localize('Recommended_Complete_Profile_description') }}
          >
          </p>
          <button
            className='btn_site btn_site_green text-center'
          >{l10n.localize('Complete_Profile')}</button>
        </div>
      </div>
    </div>
  </section>
  );
}
