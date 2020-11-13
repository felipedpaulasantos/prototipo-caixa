import { AccordionMenu } from './components/accordion/types/accordion-menu';

export const mockedSideMenuItems: AccordionMenu[] = [
  {
    name: 'Início',
    iconClass: 'fas fa-lg fa-home',
    url: '/home',
    isLink: true,
    enabled: true
  },
  {
    name: 'Layout',
    iconClass: 'fas fa-lg fa-layer-group',
    url: '/layout',
    isLink: true,
    enabled: false
  },
  {
    name: 'Componentes',
    url: "/componentes",
    iconClass: 'fas fa-lg fa-toolbox',
    isLink: true,
    enabled: true,
    submenu: [
      {
        name: 'Botões',
        iconClass: 'fa fa-lg fa-dot-circle',
        url: '/componentes/botoes',
        isLink: true,
        active: false,
        enabled: true
      },
      {
        name: 'Cards',
        iconClass: 'fa fa-lg fa-clipboard',
        url: '/componentes/cards',
        isLink: true,
        enabled: true
      },
      {
        name: 'Inputs',
        iconClass: 'fa fa-lg fa-keyboard',
        url: '/componentes/inputs',
        isLink: true,
        enabled: true
      },
      {
        name: 'Mensagens',
        iconClass: 'fa fa-lg fa-comment',
        url: '/componentes/mensagens',
        isLink: true,
        enabled: true
      },
      {
        name: 'Select',
        iconClass: 'fa fa-lg fa-hand-pointer',
        url: '/componentes/select',
        isLink: true,
        enabled: true
      },
      {
        name: 'Tabelas',
        iconClass: 'fa fa-lg fa-table',
        url: '/componentes/tabelas',
        isLink: true,
        enabled: true
      }
    ]
  },
  {
    name: 'Tipografia',
    iconClass: 'fas fa-lg fa-font',
    url: '/tipografia',
    isLink: true,
    enabled: true
  },
  {
    name: 'Cores',
    iconClass: 'fas fa-lg fa-palette',
    url: '/cores',
    isLink: true,
    enabled: true
  },
  {
    name: 'Chat',
    iconClass: 'fas fa-lg fa-comment',
    url: '/chat',
    isLink: true,
    enabled: false
  },
  {
  name: 'Configurações',
  iconClass: 'fas fa-lg fa-wrench',
  url: '/config',
  isLink: false,
  enabled: true,
  submenu: [{
      name: 'Menu',
      iconClass: 'fas fa-lg fa-th-large',
      url: '/config/menu',
      isLink: true,
      enabled: true
    }]
  }
];

export const mockedSideMenuCaixaItems: AccordionMenu[] = [
  {
    name: 'Pessoa Física / Jurídica',
    iconClass: 'fas fa-lg fa-user-alt',
    url: '/home',
    isLink: true,
    enabled: true
  },
  {
    name: 'Serviços ao Cidadão',
    iconClass: 'fas fa-lg fa-users',
    url: '/layout',
    isLink: true,
    enabled: false
  },
  {
    name: 'Investimentos',
    url: "/componentes",
    iconClass: 'fas fa-lg fa-chart-line',
    isLink: true,
    enabled: true,
  },
  {
    name: 'Configurações',
    iconClass: 'fas fa-lg fa-wrench',
    url: '/tipografia',
    isLink: true,
    enabled: true
  }
];