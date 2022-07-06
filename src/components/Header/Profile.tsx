import { Avatar, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  const subtitleColor = useColorModeValue('gray.500', 'gray.300');
  
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Nome Usuario</Text>
          <Text color={subtitleColor} fontSize="small">email@email.com</Text>
        </Box>
      )}

      <Avatar bg="pink.500" color="gray.50" size="md" name="Nome Usuario" />
    </Flex>
  );
}