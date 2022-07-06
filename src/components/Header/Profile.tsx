import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex
      align="center"
    >
      <Box mr="4" textAlign="right">
        <Text>Nome Usuario</Text>
        <Text color="gray.300" fontSize="small">email@email.com</Text>
      </Box>

      <Avatar bg="pink.500" size="md" name="Nome Usuario" />
    </Flex>
  );
}