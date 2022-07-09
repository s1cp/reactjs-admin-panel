import { border, Box, Button, Divider, Flex, Heading, HStack, Icon, LightMode, SimpleGrid, useColorModeValue, VStack } from "@chakra-ui/react";
import { RiCheckLine, RiCloseLine, RiDiscLine, RiUserAddLine, RiXingLine } from "react-icons/ri";
import { FormButton } from "../../components/Form/FormButton";
import { Input } from "../../components/Form/Input";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function UserCreate() {
  const boxColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg={boxColor} p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

          <Divider my="6" borderColor={borderColor} />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="name" label="Nome Completo" />
              <Input name="email" label="Email" type="email" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%" >
              <Input name="password" label="Senha" type="password" />
              <Input name="password_confirmation" label="Confirmar senha" type="password" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <FormButton href="/users" colorScheme="whiteAlpha" icon={RiCloseLine}>
                Cancelar
              </FormButton>

              <FormButton colorScheme="pink" icon={RiCheckLine}>
                Salvar
              </FormButton>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}