import { Box, Checkbox, Flex, Heading, Table, Tbody, Td, Th, Thead, Tr, Text, useColorModeValue, Divider, useBreakpointValue } from "@chakra-ui/react";
import { RiPencilLine, RiUserAddLine } from "react-icons/ri";
import { FormButton } from "../../components/Form/FormButton";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   api.get('/users').then(response => {
  //     setUsers(response.data);
  //   });
  // }, []);

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

        <Box flex="1" borderRadius={8} bg={boxColor} p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <FormButton colorScheme="pink" icon={RiUserAddLine} buttonSize="sm">
              Novo Usuário
            </FormButton>
          </Flex>

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
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Nome Usuario</Text>
                    <Text fontSize="sm" color={tableHeaderColor}>email@email.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>05 de Julho de 2022</Td>}
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
            </Tbody>
          </Table>

          <Pagination />
          {/* <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul> */}
        </Box>
      </Flex>


    </Box>

  );
}