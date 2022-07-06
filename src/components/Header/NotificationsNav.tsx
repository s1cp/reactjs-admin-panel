import { Button, HStack, Icon, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { RiMoonLine, RiNotificationLine, RiSunLine, RiUserAddLine } from "react-icons/ri";

export default function NotificationsNav() {
  const { colorMode, toggleColorMode } = useColorMode()
  const darkToggleBg = useColorModeValue("gray.200", "gray.700")
  const darkToggleColor = useColorModeValue("gray.600", "gray.200")
  const darkToggleicon = colorMode === "light" ? RiMoonLine : RiSunLine;

  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <IconButton
        bg={darkToggleBg}
        color={darkToggleColor}
        onClick={toggleColorMode}
        aria-label="Dark mode toggle"
      >
        <Icon as={darkToggleicon} size="20" />
      </IconButton>
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
  );
}