import { Box, Divider, Flex, Heading, HStack, SimpleGrid, useColorModeValue, VStack } from "@chakra-ui/react";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";
import { FormButton } from "../../components/Form/FormButton";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';	// yup is a library to validate forms
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().email("Email invalido").required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória").min(6, "Senha deve ter no mínimo 6 caracteres"),
  password_confirmation: yup.string()
                          .oneOf([yup.ref('password'), null], "Senhas não conferem")
                          .required("Confirmação de senha obrigatória"),
})

export default function UserCreate() {
  const boxColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  
  const { register, handleSubmit, formState} = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(data);
  }


  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg={boxColor}
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

          <Divider my="6" borderColor={borderColor} />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Nome Completo"
                error={errors.name}
                {...register("name")}
              />
              <Input
                name="email"
                label="Email"
                type="email"
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%" >
              <Input
                name="password"
                label="Senha"
                type="password"
                error={errors.password}
                {...register("password")}
              />
              <Input
                name="password_confirmation"
                label="Confirmar senha"
                type="password"
                error={errors.password_confirmation}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <FormButton href="/users" colorScheme="whiteAlpha" icon={RiCloseLine}>
                Cancelar
              </FormButton>

              <FormButton
                type="submit"
                colorScheme="pink"
                icon={RiCheckLine}
                isLoading={formState.isSubmitting}
              >
                Salvar
              </FormButton>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}