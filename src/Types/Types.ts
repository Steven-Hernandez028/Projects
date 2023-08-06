


// Asumo que openCollapse tiene una estructura similar a esta:
export  interface OpenCollapse {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ToggleMultilineMenuItems : any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    openCollapse: any
    //[key: string]: boolean;
  }
  
  // Asumo que HamburgerMenuMenuData es un array de objetos con propiedades objectName, name y menuItems:
 export interface MenuItem {
    id: number,
    objectName: string;
    name: string;
    menuItems: { name: string; url: string }[];
  }