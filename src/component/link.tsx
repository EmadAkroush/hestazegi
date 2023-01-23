import React from 'react';
import type { ReactElement } from 'react';
import parse from 'html-react-parser';

interface PropListType extends Record<string, unknown>
{
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  className?: string;
  text?: string;
  html?: string;
  children: React.ReactNode;
}
type StateListType = Record<string, unknown>;
export class ALink extends React.Component<PropListType, StateListType>
{
  render(): ReactElement
  {
    const a = document.createElement('a');
    if (this.props.href != null) { a.href = this.props.href; }
    if (this.props.target != null) { a.target = this.props.target; }
    if (this.props.className != null) { a.className = this.props.className; }
    if (this.props.text != null) { a.innerText = this.props.text; }
    if (this.props.html != null) { a.innerHTML = this.props.html; }
    const string = a.outerHTML;
    const objectA = parse(string);
    return (<>{objectA}</>);
  }
}
