import { ROUTER_PATHS } from './router.constants';

export const MenuConfig = [
  {
    id: ROUTER_PATHS.dashboard.root,
    title: 'Dashboard',
    icon: 'pi pi-th-large',
    routerLink: ROUTER_PATHS.dashboard.root,
    isAccessible: true,
    parentRoute: null,
    moduleKeys: ['dashboard'],
    subMenuOptions: []
  },
  {
    id: ROUTER_PATHS.users.root,
    title: 'Management',
    icon: 'pi pi-cog',
    routerLink: ROUTER_PATHS.users.root,
    isAccessible: true,
    parentRoute: null,
    moduleKeys: ['users'],
    subMenuOptions: [
      {
        id: ROUTER_PATHS.users.root,
        title: 'Users',
        icon: 'pi pi-users',
        routerLink: `${ROUTER_PATHS.users.root}`,
        isAccessible: true,
        parentRoute: ROUTER_PATHS.users.root
      }
    ]
  }
];
