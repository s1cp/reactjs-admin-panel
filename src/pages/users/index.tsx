import Link from "next/link";
import { Box, Checkbox, Flex, Heading, Table, Tbody, Td, Th, Thead, Tr, Text, useColorModeValue, Divider, useBreakpointValue, Spinner, VStack, Center } from "@chakra-ui/react";
import { RiPencilLine, RiUserAddLine } from "react-icons/ri";
import { useEffect } from "react";
import { useQuery } from "react-query";

import { FormButton } from "../../components/Form/FormButton";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const { data, isLoading, error } = useQuery("users", async () => {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();

    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR",{
          day: "2-digit",
          month: "long",
          year: "numeric"
        }),
      };
    });

    return users;
  });

  // Responsive Breakpoints
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  // Colors
  const boxColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const tableHeaderColor = useColorModeValue('gray.500', 'gray.300');

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Flex flex="1" flexFlow="column" borderRadius={8} bg={boxColor} p="8" overflow="hidden">
          <Flex justify="space-between" align="center" mb="8">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <FormButton
              href="/users/create"
              colorScheme="pink"
              icon={RiUserAddLine}
              buttonSize="sm"
            >
              Novo Usuário
            </FormButton>
          </Flex>

          {isLoading ? (
            <Center flex="1">
              <Spinner />
            </Center>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuarios.</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="gray">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color={tableHeaderColor} width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th color={tableHeaderColor}>Usuário</Th>
                    {isWideVersion && <Th color={tableHeaderColor}>Data de cadastro</Th>}
                    <Th width="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map(user => {
                    return (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box width={["28", "64"]}>
                            <Text fontWeight="bold" textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">{user.name}</Text>
                            <Text fontSize="sm" color={tableHeaderColor}>{user.email}</Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.createdAt}</Td>}
                        <Td>
                          <FormButton
                            ariaLabel="Editar Usuário"
                            colorScheme="purple"
                            icon={RiPencilLine}
                            buttonSize="sm"
                            iconOnly={!isWideVersion}
                          >
                            Editar
                          </FormButton>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>

              <Pagination />
            </>
          )}

        </Flex>
      </Flex>


    </Box >

  );
}