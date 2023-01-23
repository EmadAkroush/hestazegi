import { SignalInterface } from '@alwatr/signal';
declare global
{
  /**
   * Global signals value type registry.
   */
  interface AlwatrSignals
  {
    readonly 'save-referral-code': string ;
  }
}

export const saveReferralCode = new SignalInterface('save-referral-code');

saveReferralCode.addListener((data) =>
{
  localStorage.setItem('referral-code', data);
});
