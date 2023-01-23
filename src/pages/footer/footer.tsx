import React from 'react';
// import { l10n } from '@alwatr/i18n';
import { activePage } from '@godgiven/data-manager/active-page.js';
import { ALink } from '../../component/link';
import { NewsLetter } from './news-letter';
import type { ReactElement } from 'react';
type PropListType = Record<string, unknown>;
type StateListType = Record<string, unknown>;
// interface StateListType extends Record<string, unknown>
// {
//   mobileMenu?: boolean;
//   mobileSubMenu: Record<string, boolean>;
//   route?: Route;
// }

export class Footer extends React.Component<PropListType, StateListType>
{
  active = false;
  listen = false;

  componentDidMount(): void
  {
    if (this.listen === false)
    {
      activePage.addListener((page) =>
      {
        if (page.header === this.active) { return; }
        if (page.header === true)
        {
          this.active = true;
          this.forceUpdate();
        }
        else if (this.active === true)
        {
          this.active = false;
          this.forceUpdate();
        }
      });
      this.listen = true;
    }
  }

  render(): ReactElement
  {
    if (this.active === false) { return (<></>); }
    return (<footer id="footer">
      <div className="container-fulid my-4">
        <div className="row ">
          {/* <div
            className="toppage"
            data-toggle="tooltip"
            data-placement="bottom"
            title="رفتن به اول صفحه"
          >
            <span>
              <i className="las la-angle-up"></i>
            </span>
          </div> */}
          <div className="col-lg-6 col-md-12 pt-5">
            <div className="d-flex flex-wrap col-12 p-0">
              <div className="logo_footer col-12 p-0 ">
                <a href="/">
                  <img
                    alt="لوگو حس تازگی"
                    width="85"
                    src="https://www.hesetazegi.com/themes/default/assets/img/logo.png"
                  />
                </a>
              </div>
              <div className="col-12 p-0">
                <p>
                  مجموعه حس تازگی از سال 1395، با هدف حفظ و انتشار فرهنگ غذایی ایران و ایجاد پیوند با فرهنگ غذایی جهان
                  تشکیل شده است. وبسایت حس تازگی نتیجه تلاش شبانه روزی گروه های متخصصی است، که پس از سال ها ممارست و
                  پشتکار به ثمر رسیده و هدف آن ایجاد شادی و نشاط در قلب یکایک شماست.
                </p>
                <div
                  className="social"
                >
                  <ALink
                    href="https://www.instagram.com/hese.tazegi/"
                    target="_blank"
                    title="instagram"
                    html={'<i class="lab la-instagram text-8"></i>'}
                  >
                  </ALink>
                  <ALink
                    href="https://www.linkedin.com/in/hese-tazegi"
                    formTarget="_blank"
                    title="linkedin"
                    html={'<i class="lab la-linkedin-in text-8"></i>'}
                  >
                  </ALink>
                  <ALink
                    href="https://www.pinterest.com/hesetazegi"
                    target="_blank"
                    title="pinterest"
                    html={'<i class="lab la-pinterest text-8"></i>'}
                  >
                  </ALink>
                  <ALink
                    href="https://www.aparat.com/hesetazegi"
                    target="_blank"
                    title="aparat"
                    html={'<div class="icon_aparat icon_svg d-inline-block"></div>'}
                  >
                  </ALink>
                </div>
              </div>
            </div>
            <hr />
            <div className="col-12 p-0">
              <h5 className="text-4 font-weight-semibold text-color-dark ">
                مجوزها و گواهینامه ها
              </h5>
              <ul className="d-flex flex-wrap mb-0" style={{
                alignItems: 'center'
              }}>
                <li>
                  <img
                    src="/assets/img/enamad.png"
                    alt="اینماد حس تازگی"
                    id="fJa11u2Q5MuRKBJk2Rwh"
                    onClick={
                      () => { window.open('https://trustseal.enamad.ir/?id=269863&amp;Code=fJa11u2Q5MuRKBJk2Rwh', 'Popup', 'toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30'); }
                    }
                    height="85"
                  />
                  <img
                    id="rgvjesgtnbqeapfunbqergvj"
                    onClick={
                      () => { window.open('https://logo.samandehi.ir/Verify.aspx?id=302523&amp;p=xlaoobpduiwkdshwuiwkxlao', 'Popup', 'toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30'); }
                    }
                    alt="logo-samandehi"
                    src="/assets/img/samandehi.png"
                    width="85"
                  />
                </li>
                <li>
                  <img
                    src="https://www.hesetazegi.com/themes/default/assets/img/unesco.png"
                    width="85"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="d-flex flex-wrap ">
              <div className="mb-5 col-sm-4 col-12 mb-lg-0 pt-5">
                <h5 className="text-4 font-weight-semibold text-color-dark mb-4">دسترسی سریع</h5>

                <ul>
                  <li><a href="/about" className="text-4 ">درباره حس تازگی</a></li>
                  <li><a href="/faq" className="text-4 ">سوالات متداول</a></li>
                  <li><a href="/blogs" className="text-4 ">مجله حس تازگی</a></li>
                  <li><a href="/about" className="text-4 ">ارتباط با ما</a></li>
                  <li><a href="/terms" className="text-4 "> قوانین و مقررات </a></li>

                  <li><a href="/membership" className="text-4 "> خرید اشتراک </a></li>
                  <li><a href="/references" className="text-4 ">منابع</a></li>
                </ul>

              </div>
              <div className="col-sm-8 col-12 p-0 ">
                <NewsLetter></NewsLetter>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright ">
        <div className="container py-2">
          <div className="row ">
            <div className="col d-flex align-items-center justify-content-center">
              <p>
                <span className="cg fs12">
                  کلیه حقوق مادی و معنوی این سایت متعلق به
                  <span className="font-weight-bold ">شرکت حس تازگی سفره خانواده </span>
                  میباشد.
                  <br />
                  <span className="cg fs12">
                    استفاده از مطالب سایت حس تازگی فقط برای مقاصد غیر تجاری و با ذکر منبع بلامانع
                      است.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
  }
}
