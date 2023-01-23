import { router, routeChangeSignal } from '@alwatr/router';
import { l10n } from '@alwatr/i18n';

interface linkObject
{
  link: string;
  text: string;
  go: () => void;
}

/**
 *
 */
export function goToInternalLink(link: string): void
{
  const { pathname, search, hash } = new URL(`${window.location.origin}${link}`);
  void routeChangeSignal.request({ pathname, search, hash });
}

/**
 *
 */
export function aboutLink(): linkObject
{
  const lng = l10n.locale?.language ?? 'fa';
  const link = router.makeUrl({ sectionList: [lng, 'about'] });
  return {
    link,
    text: l10n.localize('About_Us'),
    go: () => { goToInternalLink(link); }
  };
}

/**
 *
 */
export function leagueLink(): linkObject
{
  const lng = l10n.locale?.language ?? 'fa';
  const link = router.makeUrl({ sectionList: [lng, 'league'] });
  return {
    link,
    text: l10n.localize('League_Of_Freshness'),
    go: () => { goToInternalLink(link); }
  };
}

/**
 *
 */
export function nutrientLink(): linkObject
{
  const lng = l10n.locale?.language ?? 'fa';
  const link = router.makeUrl({ sectionList: [lng, 'nutrients'] });
  return {
    link,
    text: l10n.localize('Nutrients'),
    go: () => { goToInternalLink(link); }
  };
}

/**
 *
 */
export function nutrientItemLink(id: string, title: string): linkObject
{
  const lng = l10n.locale?.language ?? 'fa';
  const titleWithOutSpace = title.replace(/\s+/g, '-');
  const link = router.makeUrl({ sectionList: [lng, 'nutrients', id, titleWithOutSpace] });
  return {
    link,
    text: l10n.localize('Nutrients'),
    go: () => { goToInternalLink(link); }
  };
}

/**
 *
 */
export function dietLink(): linkObject
{
  const lng = l10n.locale?.language ?? 'fa';
  const link = router.makeUrl({ sectionList: [lng, 'diets'] });
  return {
    link,
    text: l10n.localize('diets'),
    go: () => { goToInternalLink(link); }
  };
}

/**
 *
 */
export function dietItemLink(id: string, title: string): linkObject
{
  const lng = l10n.locale?.language ?? 'fa';
  const titleWithOutSpace = title.replace(/\s+/g, '-');
  const link = router.makeUrl({ sectionList: [lng, 'diets', id, titleWithOutSpace] });
  return {
    link,
    text: l10n.localize('Diets'),
    go: () => { goToInternalLink(link); }
  };
}

/**
 *
 */
export function diseaseLink(): linkObject
{
  const lng = l10n.locale?.language ?? 'fa';
  const link = router.makeUrl({ sectionList: [lng, 'diseases'] });
  return {
    link,
    text: l10n.localize('diets'),
    go: () => { goToInternalLink(link); }
  };
}

/**
 *
 */
export function diseaseItemLink(id: string, title: string): linkObject
{
  const lng = l10n.locale?.language ?? 'fa';
  const titleWithOutSpace = title.replace(/\s+/g, '-');
  const link = router.makeUrl({ sectionList: [lng, 'diseases', id, titleWithOutSpace] });
  return {
    link,
    text: l10n.localize('Diets'),
    go: () => { goToInternalLink(link); }
  };
}

/**
 *
 */
export function memberShip(): linkObject
{
  const lng = l10n.locale?.language ?? 'fa';
  const link = router.makeUrl({ sectionList: [lng, 'membership'] });
  return {
    link,
    text: l10n.localize('Buy_A_Subscription'),
    go: () => { goToInternalLink(link); }
  };
}

/**
 *
 */
export function invoiceItem(id: number): linkObject
{
  const lng = l10n.locale?.language ?? 'fa';
  const link = router.makeUrl({ sectionList: [lng, 'invoice', id] });
  return {
    link,
    text: l10n.localize('diets'),
    go: () => { goToInternalLink(link); }
  };
}

/**
 *
 */
export function recipeListLink(): linkObject
{
  const lng = l10n.locale?.language ?? 'fa';
  const link = router.makeUrl({ sectionList: [lng, 'recipes'] });
  return {
    link,
    text: l10n.localize('Recipes'),
    go: () => { goToInternalLink(link); }
  };
}
