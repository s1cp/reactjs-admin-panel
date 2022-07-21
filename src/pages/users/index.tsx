import { Box, Checkbox, Flex, Heading, Table, Tbody, Td, Th, Thead, Tr, Text, useColorModeValue, useBreakpointValue, Spinner, Center } from "@chakra-ui/react";
import { useState } from "react";
import { RiPencilLine, RiUserAddLine } from "react-icons/ri";

import { FormButton } from "../../components/Form/FormButton";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";

export default function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(page);

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
            <Heading size="lg" fontWeight="normal">
              Usuários
              {isFetching &&
              !isLoading &&
              <Spinner size="sm" color="gray.500" ml="2" />}
            </Heading>

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
                  {data.users.map(user => {
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

              <Pagination
                totalRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}

        </Flex>
      </Flex>


    </Box >

  );
}