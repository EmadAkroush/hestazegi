import React from 'react';
import { l10n } from '@alwatr/i18n';
import type { ReactElement } from 'react';

interface PropListType extends Record<string, unknown>
{
  content?: string;
  countOfWord?: number;
}
interface StateListType extends Record<string, unknown>
{
  open?: boolean;
}

export class ShowText extends React.Component<PropListType, StateListType>
{
  constructor(props: PropListType)
  {
    super(props);
    this.state = { open: false };
  }

  render(): ReactElement
  {
    if (this.props.content == null) { return this.simple(); }
    if (this.props.countOfWord == null) { return this.simple(); }
    if (this.props.countOfWord === 0) { return this.simple(); }
    if (
      this.props.countOfWord > 0 &&
      this.props.content.length > this.props.countOfWord
    )
    {
      return (<>
        {
          this.state.open === false
            ? this.props.content.slice(0, this.props.countOfWord)
            : this.props.content
        }
        <div className="text-center text-1 show-more-button">
          <span
            className="color-orange cursor text-1 "
            onClick={() =>
            {
              this.setState({ open: !(this.state.open ?? false) });
            }}
          >
            {this.contentButtonTemplate()}
          </span>
        </div>
      </>);
    }
    return this.simple();
  }

  contentButtonTemplate(): ReactElement
  {
    if (this.state.open !== true)
    {
      return (<>
        {l10n.localize('Read_More')}
        <i className="las la-angle-down text-1" />
      </>);
    }
    else
    {
      return (<>
        {l10n.localize('Back')}
        <i className="las la-angle-up text-1" />
      </>);
    }
  }

  simple(): ReactElement
  {
    return (<>
      {this.props.content ?? ''}
    </>);
  }
}
