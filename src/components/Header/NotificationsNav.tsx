import { Button, HStack, Icon, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { RiMoonLine, RiNotificationLine, RiSunLine, RiUserAddLine } from "react-icons/ri";

export default function NotificationsNav() {
  const { colorMode, toggleColorMode } = useColorMode()
  const darkToggleBg = useColorModeValue("gray.200", "gray.700")
  const darkToggleColor = useColorModeValue("gray.600", "gray.200")
  const darkToggleicon = colorMode === "light" ? RiMoonLine : RiSunLine;

  return (
    <HStack
      spacing="8"
      mx="8"
      pr="8"
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Button bg={darkToggleBg} color={darkToggleColor} onClick={toggleColorMode}>
        <Icon as={darkToggleicon} size="20" />
      </Button>
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
  );
}