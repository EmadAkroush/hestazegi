import React from 'react';
import { requestNewsLetter, receiveNewsLetter } from '@godgiven/data-manager/provider/request-news-letter.js';
import { l10n } from '@alwatr/i18n';
type PropListType = Record<string, unknown>;

interface StateListType extends Record<string, unknown>
{
  email: string;
  recipes: boolean;
  recipeTips: boolean;
  recipeInfo: boolean;
  message: string | null;
}
export class NewsLetter extends React.Component<PropListType, StateListType>
{
  keyId: string;
  listen = false;
  loading = false;
  messageType: 'invalid' | 'valid' = 'invalid';
  constructor(props: PropListType)
  {
    super(props);
    this.keyId = 'main-carousel';
    this.loading = false;
    this.state = {
      email: '',
      recipes: false,
      recipeTips: false,
      recipeInfo: false,
      message: null
    };
  }

  componentDidMount(): void
  {
    if (this.listen === false)
    {
      receiveNewsLetter.addListener((data) =>
      {
        if (data.status === 1)
        {
          this.messageType = 'valid';
          this.loading = false;
          this.setState({ message: 'Your_Subscription_To_The_Newsletter_Has_Been_Activated' });
        }
        else
        {
          this.messageType = 'invalid';
          this.loading = false;
          this.setState({ message: 'Your_Subscription_To_The_Newsletter_Was_Not_Activated' });
        }
      });
      this.listen = true;
    }
  }

  render(): React.ReactNode
  {
    return (<>
      <div
        id="submit_newsletter"
        className={`px-4 pt-5 submit_newsletter${this.loading === true ? ' loading-news-later' : ''}`}
      >
        <h5 className="text-4 font-weight-semibold text-color-dark mb-4">
          {l10n.localize('Subscribe_To_Newsletter')}
        </h5>
        <p className=" mb-1">
          {l10n.localize('By_Subscribing_To_Newsletter_Description')}
        </p>
        <label
          onClick={() =>
          {
            this.setState({ recipes: !this.state.recipes });
          }}
          className="freshness-input-holder"
        >
          <span className={`freshness-checkbox${this.state.recipes === true ? ' active' : ''}`}></span>
          {l10n.localize('New_Recipes')}
        </label>
        <label
          onClick={() =>
          {
            this.setState({ recipeTips: !this.state.recipeTips });
          }}
          className="freshness-input-holder"
        >
          <span className={`freshness-checkbox${this.state.recipeTips === true ? ' active' : ''}`}></span>
          {l10n.localize('New_Tips_In_Cooking')}
        </label>
        <label
          onClick={() =>
          {
            this.setState({ recipeInfo: !this.state.recipeInfo });
          }}
          className="freshness-input-holder"
        >
          <span className={`freshness-checkbox${this.state.recipeInfo === true ? ' active' : ''}`}></span>
          {l10n.localize('Latest_Nutrition_Information')}
        </label>
        <div className="box_newsletter2 mt-3">
          <div className="d-flex">
            <div className="m-2"><i className="las la-envelope"></i></div>
            <input
              placeholder={l10n.localize('Input_Your_email')}
              className="flex-grow-1"
              type="email"
              onChange={ (e) =>
              {
                const value = e.target.value;
                this.setState({ email: value });
              }}
            />
          </div>

        </div>
        <div
          className="col-12 mt-4 p-0"
        >
          <button
            className="btn_site btn_green px-4 py-2 form_info_submit w-100"
            data-message="#newsletter_text"
            data-server-mod="SubmitNewsLetter"
            type="button"
            onClick={() => { this.sendMessage(); }}
          >
            {l10n.localize('Subscribe')}
          </button>
        </div>
        <br/>
        <div className={`text-center ${this.messageType === 'invalid' ? 'color-red' : 'color-green'}`}>
          {this.state.message != null || this.state.message !== '' ? l10n.localize(this.state.message) : ''}
        </div>
      </div>
    </>);
  }

  sendMessage(): void
  {
    if (this.state.email === '' || this.state.email === null)
    {
      this.messageType = 'invalid';
      this.setState({ message: 'Input_Your_email' });
      return;
    }
    if (this.loading === false)
    {
      this.loading = true;
      requestNewsLetter.dispatch({
        recipes: this.state.recipes,
        recipeTips: this.state.recipeTips,
        recipeInfo: this.state.recipeInfo,
        email: this.state.email
      });
      this.forceUpdate();
    }
  }
}
