import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, useColorModeValue } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({name, label, ...rest}: InputProps) {
  const bgColor = useColorModeValue("gray.50", "gray.900");

  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bg={bgColor}
        variant="filled"
        _hover={{
          bgColor: {bgColor}
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}