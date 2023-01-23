import { SignalInterface } from '@alwatr/signal';

declare global
{
  /**
   * Global signals value type registry.
   */
  interface AlwatrSignals
  {
    readonly 'active-page': {
      name: string;
      header: boolean;
      id?: string;
    };
    readonly 'header-state': {
      name: string;
      header: boolean;
      id?: string;
    };
  }
}

export const activePage = new SignalInterface('active-page');
export const headerState = new SignalInterface('header-state');
