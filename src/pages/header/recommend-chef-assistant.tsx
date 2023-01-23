import React from 'react';
import { l10n } from '@alwatr/i18n';
import { router, routeChangeSignal } from '@alwatr/router';
import { user } from '@godgiven/data-manager/controller/user.js';
import { chef, steps } from '@godgiven/data-manager/controller/chef-assistant.js';
import {
  userIcon,
  verifyUserIcon,
  medalStar

} from '@godgiven/icons/icons';
import type { ReactElement } from 'react';

/**
 *
 */
export function recommendChefAssistant(): ReactElement | null
{
  if (user.checkTheUserLogin() !== true) { return null; }
  if (user.content == null) { return null; }
  if (user.content.hasChefAssistant === true) { return null; }
  const chefAssistantData = chef.checkLocalStorageChefData();
  const percentage = chefAssistantData.step >= 1 ? (chefAssistantData.step - 1) * 20 : 10;
  return (<section id="recommend-chef-assistant" className="recommend-chef-assistant">
    <div className="container-fulid">
      <strong>
        {l10n.localize('Until_Hiring_An_Assistant_Cook').replace('$1', `${percentage.toString()}%`)}
      </strong>
      <div className="recommend-chef-assistant-process">
        <div
          className="recommend-development"
          style={ { width: `${percentage + 2}%` } }
        ></div>

        {/* Main icon from process */}
        <i
          className="start-icon"
          dangerouslySetInnerHTML={{ __html: userIcon }}
        >
        </i>
        <i
          className="end-icon"
          dangerouslySetInnerHTML={{ __html: medalStar }}
        >
        </i>

        {/* Active icon from process */}
        <i
          className="start-icon-development"
          dangerouslySetInnerHTML={{ __html: userIcon }}
        >
        </i>
        <i
          className="end-icon-development"
          style={ { marginInlineStart: `${percentage}%` } }
          dangerouslySetInnerHTML={{ __html: verifyUserIcon }}
        >
        </i>
      </div>
      <div>
        <button
          className={'btn_site btn_gray_light w-100'}
          onClick={
            () =>
            {
              goToChefAssistant();
            }
          }
        >
          مرحله بعدی:
          <span>{l10n.localize(steps[chefAssistantData.step] ?? '')}</span>
        </button>
      </div>
    </div>
  </section>);
}

/**
 *
 */
function goToChefAssistant(): void
{
  const link = router.makeUrl({ sectionList: [l10n.locale?.language ?? 'fa', 'chef-assistant'] });
  const { pathname, search, hash } = new URL(`${window.location.origin}${link}`);
  void routeChangeSignal.request({ pathname, search, hash });
}
