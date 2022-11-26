export enum TabName {
  HOME = 'HOME',
  SETTING = 'SETTING',
  ACCOUNT = 'ACCOUNT',
}

export type TabParam = {
  [TabName.HOME]: undefined;
  [TabName.SETTING]: undefined;
  [TabName.ACCOUNT]: undefined;
};

export enum RouteName {
  BOTTOM_TAB = 'BOTTOM_TAB',
  HOME = 'HOME',
  SETTING = 'SETTING',
  ACCOUNT = 'ACCOUNT',
}

export type RouteParam = {
  [RouteName.BOTTOM_TAB]: undefined;
  [RouteName.HOME]: undefined;
  [RouteName.SETTING]: undefined;
  [RouteName.ACCOUNT]: undefined;
};
