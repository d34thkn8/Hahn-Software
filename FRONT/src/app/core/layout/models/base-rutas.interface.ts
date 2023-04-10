import { MyRoute } from './my-route.interface';


export class BaseRutas {
  static rutas: MyRoute[] = [
    {
      isChild: false,
      codigoGrupo1: 1,
      label: 'Replace',
      route: '/replace',
      icon: 'home',
      focused: false,
      esLista: false,
      mostrarDentroDeLista:true,
      codigoGrupo2:0,
      mostrarEnMenuPrincipal:false,
    },
    {
      isChild: false,
      codigoGrupo1: 1,
      label: 'Parameters',
      route: '/params',
      icon: 'home',
      focused: false,
      esLista: false,
      mostrarDentroDeLista:true,
      codigoGrupo2:0,
      mostrarEnMenuPrincipal:false,
    },
    // {
    //   isChild: false,
    //   codigoGrupo1: 3,
    //   label: 'Ventana',
    //   route: '/home/ventana',
    //   icon: 'tune',
    //   focused: false,
    //   esLista: true,
    //   mostrarDentroDeLista:false,
    //   codigoGrupo2:0,
    //   mostrarEnMenuPrincipal:true,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Ventana',
    //   route: '/home/ventana',
    //   icon: 'wysiwyg',
    //   focused: false,
    //   esLista: true,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:1,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Sistema Grupo',
    //   route: '/home/sistemaGrupo',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:1,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Sistema Categoría',
    //   route: '/home/sistemaCategoria',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:1,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Sistema Tipo',
    //   route: '/home/sistemaTipo',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:1,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Módulos',
    //   route: '/home/modulos',
    //   icon: 'view_module',
    //   focused: false,
    //   esLista: true,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:2,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Módulo Grupo',
    //   route: '/home/moduloGrupo',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:2,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Módulo Categoría',
    //   route: '/home/moduloCategoria',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:2,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Módulo Tipo',
    //   route: '/home/moduloTipo',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:2,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Vistas',
    //   route: '/home/vistas',
    //   icon: 'preview',
    //   focused: false,
    //   esLista: true,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:3,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Vista Grupo',
    //   route: '/home/vistaGrupo',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:3,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Vista Categoría',
    //   route: '/home/vistaCategoria',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:3,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Vista Tipo',
    //   route: '/home/vistaTipo',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:3,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Acciones',
    //   route: '/home/acciones',
    //   icon: 'app_registration',
    //   focused: false,
    //   esLista: true,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:4,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Acción Grupo',
    //   route: '/home/accionGrupo',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:4,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Acción Categoría',
    //   route: '/home/accionCategoria',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:4,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Acción Tipo',
    //   route: '/home/accionTipo',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:4,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Roles',
    //   route: '/home/roles',
    //   icon: 'admin_panel_settings',
    //   focused: false,
    //   esLista: true,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:6,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Rol Grupo',
    //   route: '/home/rolGrupo',
    //   icon: 'admin_panel_settings',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:6,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Rol Categoría',
    //   route: '/home/rolCategoria',
    //   icon: 'admin_panel_settings',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:6,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Rol Tipo',
    //   route: '/home/rolTipo',
    //   icon: 'admin_panel_settings',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:6,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Cargos',
    //   route: '/home/cargos',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:0,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Departamentos',
    //   route: '/home/departamentos',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:0,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Empresas',
    //   route: '/home/empresas',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:0,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Funciones',
    //   route: '/home/funciones',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:0,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Lugares',
    //   route: '/home/lugares',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:0,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Paises',
    //   route: '/home/paises',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:0,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Usuarios',
    //   route: '/home/usuarios',
    //   icon: 'group',
    //   focused: false,
    //   esLista: true,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:5,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Usuario Grupo',
    //   route: '/home/usuarioGrupo',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:5,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Usuario Categoría',
    //   route: '/home/usuarioCategoria',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:5,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Usuario Tipo',
    //   route: '/home/usuarioTipo',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:5,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: false,
    //   codigoGrupo1: 2,
    //   label: 'Operación',
    //   route: '/home/usuarioRol',
    //   icon: 'manage_accounts',
    //   focused: false,
    //   esLista: true,
    //   mostrarDentroDeLista:false,
    //   codigoGrupo2:0,
    //   mostrarEnMenuPrincipal:true,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 2,
    //   label: 'Usuario Rol',
    //   route: '/home/usuarioRol',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:0,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 2,
    //   label: 'Creación de Accesos',
    //   route: '/home/accesos',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:0,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 4,
    //   label: 'Lista de Accesos',
    //   route: '/home/listaAccesos',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:0,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 4,
    //   label: 'Lista de Accesos Por Rol',
    //   route: '/home/listaAccesosRol',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:0,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: false,
    //   codigoGrupo1: 4,
    //   label: 'Reportes',
    //   route: '/home',
    //   icon: 'summarize',
    //   focused: false,
    //   esLista: true,
    //   mostrarDentroDeLista:false,
    //   codigoGrupo2:0,
    //   mostrarEnMenuPrincipal:true,
    // },
  ];
  static rutas2: MyRoute[] = [
    {
      isChild: false,
      codigoGrupo1: 1,
      label: 'Inicio',
      route: '/home',
      icon: 'home',
      focused: false,
      esLista: false,
      mostrarDentroDeLista:true,
      codigoGrupo2:0,
      mostrarEnMenuPrincipal:false,
    },
    // {
    //   isChild: false,
    //   codigoGrupo1: 3,
    //   label: 'Parametrización',
    //   route: '/home/sistemas',
    //   icon: 'tune',
    //   focused: false,
    //   esLista: true,
    //   mostrarDentroDeLista:false,
    //   codigoGrupo2:0,
    //   mostrarEnMenuPrincipal:true,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Sistemas',
    //   route: '/home/sistemas',
    //   icon: 'wysiwyg',
    //   focused: false,
    //   esLista: true,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:1,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Sistema Grupo',
    //   route: '/home/sistemaGrupo',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:1,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Sistema Categoría',
    //   route: '/home/sistemaCategoria',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:1,
    //   mostrarEnMenuPrincipal:false,
    // },
    // {
    //   isChild: true,
    //   codigoGrupo1: 3,
    //   label: 'Sistema Tipo',
    //   route: '/home/sistemaTipo',
    //   icon: '',
    //   focused: false,
    //   esLista: false,
    //   mostrarDentroDeLista:true,
    //   codigoGrupo2:1,
    //   mostrarEnMenuPrincipal:false,
    // },
  ];
  
}
