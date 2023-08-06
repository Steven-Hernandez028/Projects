
import { BsMotherboard, BsFillHddNetworkFill } from "react-icons/bs";
import { MdElectricalServices } from "react-icons/md";
import {
  BiLogoGmail
  , BiLogoTwitter, BiLogoFacebook, BiLogoGooglePlus, BiLogoLinkedinSquare
} from "react-icons/bi"

import {MenuItem } from "../Types/Types"

import card2 from "../assets/card2.jpg";

export const ContentData = [
  {
    id: 1,
    title: "Electrical Engineering",
    description: "We only include the most qualifed licensed electricicias",
    link: "http//www.google.com",
    icon: MdElectricalServices,
    image: card2,
  },
  {
    id: 2,
    title: "Domestic Electrician",
    description: "Install wiring, lighting & appliances throughout a property",
    link: "http//www.google.com",
    icon: BsFillHddNetworkFill,
    image: card2,
  },
  {
    id: 3,
    title: "Industrial Electrician",
    description: "Perform variety of functions realted electronic at work site",
    link: "http//www.google.com",
    icon: BsMotherboard,
    image: card2,
  },
];



export const headingIcons = [
  {
    id: 1,
    icon: BiLogoGmail
  },

  {
    id: 2,
    icon: BiLogoFacebook
  },

  {
    id: 3,
    icon: BiLogoGooglePlus
  },

  {
    id: 4,
    icon: BiLogoLinkedinSquare
  },
  {
    id: 5,
    icon: BiLogoTwitter
  },



]


export const HamburgerMenuMenuData : MenuItem[]= [
  {
    id: 1,
    objectName: "aboutus",
    name: "About us",
    menuItems: [
      {
        name: "Download",
        url: ""
      },
      {
        name: "Create",
        url: ""
      }, {
        name: "Delete",
        url: ""
      }
    ]
  },
  {
    id: 2,
    objectName: "Pages",
    name: "Pages",
    menuItems: [
      {
        name: "Download",
        url: ""
      },
      {
        name: "Create",
        url: ""
      }, {
        name: "Delete",
        url: ""
      }
    ]
  },
  {
    id: 3,
    objectName: "Services",
    name: "Services",
    menuItems: [
      {
        name: "Download",
        url: ""
      },
      {
        name: "Create",
        url: ""
      }, {
        name: "Delete",
        url: ""
      }
    ]
  },
  {
    id: 4,
    objectName: "Portfolio",
    name: "Portfolio",
    menuItems: [
      {
        name: "Download",
        url: ""
      },
      {
        name: "Create",
        url: ""
      }, {
        name: "Delete",
        url: ""
      }
    ]
  },
  {
    id: 5,
    objectName: "Blog",
    name: "Blog",
    menuItems: [
      {
        name: "Download",
        url: ""
      },
      {
        name: "Create",
        url: ""
      }, {
        name: "Delete",
        url: ""
      }
    ]
  },
  {
    id: 6,
    objectName: "Contact us",
    name: "Contact us",
    menuItems: [
      {
        name: "Download",
        url: ""
      },
      {
        name: "Create",
        url: ""
      }, {
        name: "Delete",
        url: ""
      }
    ]
  },


]


export const NavBarData = [
  {
      id: 1,
      margin: "-4",

      MenuItemTitle: "About us",
      MenuListItems: [
          {
              Title: "Download",
              url: ""
          },
          {
              Title: "Create a Cop",
              url: ""
          },
          {
              Title: "Mark as Draft",
              url: ""
          },
          {
              Title: "Delete",
              url: ""
          },
          {
              Title: "Attend a Workshop",
              url: ""
          },
          {
              Title: "Download",
              url: ""
          }
      ]
  },
  {
      id: 2,
      MenuItemTitle: "Pages",
      MenuListItems: [
          {
              Title: "Download",
              url: ""
          },
          {
              Title: "Create a Cop",
              url: ""
          },
          {
              Title: "Mark as Draft",
              url: ""
          },
          {
              Title: "Delete",
              url: ""
          },
          {
              Title: "Attend a Workshop",
              url: ""
          },
          {
              Title: "Download",
              url: ""
          }
      ]
  },
  {
      id: 3,

      MenuItemTitle: "Services",
      MenuListItems: [
          {
              Title: "Download",
              url: ""
          },
          {
              Title: "Create a Cop",
              url: ""
          },
          {
              Title: "Mark as Draft",
              url: ""
          },
          {
              Title: "Delete",
              url: ""
          },
          {
              Title: "Attend a Workshop",
              url: ""
          },
          {
              Title: "Download",
              url: ""
          }
      ]
  },
  {
      id: 4,

      MenuItemTitle: "Portfolio",
      MenuListItems: [
          {
              Title: "Download",
              url: ""
          },
          {
              Title: "Create a Cop",
              url: ""
          },
          {
              Title: "Mark as Draft",
              url: ""
          },
          {
              Title: "Delete",
              url: ""
          },
          {
              Title: "Attend a Workshop",
              url: ""
          },
          {
              Title: "Download",
              url: ""
          }
      ]
  },
  {
      id: 5,
      margin: "-4",

      MenuItemTitle: "Blog",
      MenuListItems: [
          {
              Title: "Download",
              url: ""
          },
          {
              Title: "Create a Cop",
              url: ""
          },
          {
              Title: "Mark as Draft",
              url: ""
          },
          {
              Title: "Delete",
              url: ""
          },
          {
              Title: "Attend a Workshop",
              url: ""
          },
          {
              Title: "Download",
              url: ""
          }
      ]
  },
  {
      id: 6,
      margin: "-4",

      MenuItemTitle: "Contact us",
      MenuListItems: [
          {
              Title: "Download",
              url: ""
          },
          {
              Title: "Create a Cop",
              url: ""
          },
          {
              Title: "Mark as Draft",
              url: ""
          },
          {
              Title: "Delete",
              url: ""
          },
          {
              Title: "Attend a Workshop",
              url: ""
          },
          {
              Title: "Download",
              url: ""
          }
      ]
  }
]
