import React from 'react';
import { l10n } from '@alwatr/i18n';
import type { ReactElement } from 'react';

/**
 *
 */
export function groupFoodList(): ReactElement | null
{
  return (<section id="group-food" className="mb-5">
    <div className="container-fulid">
      <div className="row ">
      <div className="col-12">
        <div className=" style_box p-5 ">
          <div className="col-12 ">
            <h2 className="text-5 font-weight-bold mb-5">
              {l10n.localize('Some_Freshness_Service')}
            </h2>
          </div>
          <div className="d-flex w-100 flex-wrap">
            <div className="col-lg-2 col-sm-4 col-4 mb-4">
              <div className="text-center">
                <a
                  href="/cooking"
                  className="d-flex justify-content-center flex-column itemgroup"
                >
                  <div>
                    <img
                      src="/assets/img/group6.png"
                      width="50" alt={l10n.localize('What_Should_I_Cook')}
                    />
                  </div>
                  <span className="text-dark text-2 mt-2">{l10n.localize('What_Should_I_Cook')}</span>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-4 mb-4">
              <div className="text-center">
                <a
                  href="/diseases"
                  className="d-flex justify-content-center flex-column itemgroup"
                >
                  <div>
                    <img
                      src="/assets/img/group1.png"
                      width="50"
                      alt={l10n.localize('Sickness')}
                    />
                  </div>
                  <span className="text-dark text-2 mt-2">{l10n.localize('Sickness')}</span>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-4 mb-4">
              <div className="text-center">
                <a href="/recipes?sw=رایگان" className="d-flex justify-content-center flex-column itemgroup">
                  <div>
                    <img
                      src="/assets/img/group2.png"
                      width="50"
                      alt={l10n.localize('Freebies')}
                    />
                  </div>
                  <span className="text-dark text-2 mt-2">{l10n.localize('Freebies')}</span>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-4 mb-4">
              <div className="text-center">
                <a
                  href="/recipes/?sw=وجترین"
                  className="d-flex justify-content-center flex-column itemgroup"
                >
                  <div>
                    <img
                      src="/assets/img/group3.png"
                      width="50"
                      alt={l10n.localize('Vegetarian')}
                    />
                  </div>
                  <span className="text-dark text-2 mt-2">{l10n.localize('Vegetarian')}</span>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-4 mb-4">
              <div className="text-center">
                <a href="/recipes?page=1&amp;temper_index=3" className="d-flex justify-content-center flex-column itemgroup">
                  <div>
                    <img src="/assets/img/group4.png"
                      width="50"
                      alt={l10n.localize('Traits')}
                    />
                  </div>
                  <span className="text-dark text-2 mt-2">{l10n.localize('Traits')}</span>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-4 mb-4">
              <div className="text-center">
                <a href="/diets" className="d-flex justify-content-center flex-column itemgroup">
                  <div>
                    <img
                      src="/assets/img/group5.png"
                      width="50"
                      alt={l10n.localize('Diets')}
                    />
                  </div>
                  <span className="text-dark text-2 mt-2">{l10n.localize('Diets')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
  );
}
