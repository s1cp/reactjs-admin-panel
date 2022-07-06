import { Button, HStack, Icon, useColorMode } from "@chakra-ui/react";
import { RiMoonLine, RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export default function NotificationsNav() {
  const { colorMode, toggleColorMode } = useColorMode()

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
      <Button onClick={toggleColorMode}><Icon as={RiMoonLine} size="20" /></Button>
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
  );
}