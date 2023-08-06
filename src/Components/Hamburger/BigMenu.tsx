import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FiChevronDown } from "react-icons/fi";
import { NavBarData } from '../../Data';



export const NavBar = () => {
    return (
        <>

            {NavBarData.map(({ id, margin, MenuItemTitle, MenuListItems }) => (

                <>
                    <Menu isLazy
                        key={id}

                    >
                        <MenuButton
                            _hover={{ background: "transparent" }}
                            _active={{ background: "transparent", color: "#FF4C01" }}
                            margin={margin}
                            bg="transparent"
                            as={Button}
                            rightIcon={<FiChevronDown />}
                        >
                            {MenuItemTitle}
                        </MenuButton>
                        <MenuList
                        
                        
                        >
                            {MenuListItems.map(({ Title }) => (
                                <MenuItem fontFamily="font"  >{Title}</MenuItem>

                            ))}

                        </MenuList>
                    </Menu>
                </>

            ))}

        </>
    );
};


