import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { SideBarNav } from "./SidebarNav";

export function Sidebar() {
  const drawerBg = useColorModeValue("gray.50", "gray.800");

  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return(
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg={drawerBg} p="4">
          <DrawerCloseButton mt="6" />
          <DrawerHeader>Navegacao</DrawerHeader>

          <DrawerBody>
            <SideBarNav />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SideBarNav />
    </Box>
  );
}