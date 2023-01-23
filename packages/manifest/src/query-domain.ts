import { SignalInterface } from '@alwatr/signal';

declare global
{
  /**
   * Global signals value type registry.
   */
  interface AlwatrSignals
  {
    readonly 'query-domain': string;
  }
}

export const queryDomain = new SignalInterface('query-domain');

queryDomain.dispatch('http://api-dev.hesetazegi.com');
