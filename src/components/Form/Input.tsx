import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, useColorModeValue } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({ name, label, error = null, ...rest }, ref) => {
    const bgColor = useColorModeValue("gray.50", "gray.900");

    return (
      <FormControl isInvalid={!!error}>
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

        <ChakraInput
          name={name}
          id={name}
          focusBorderColor="pink.500"
          bg={bgColor}
          variant="filled"
          _hover={{
            bgColor: { bgColor }
          }}
          size="lg"
          ref={ref}
          {...rest}
        />

        <FormErrorMessage>{error?.message}</FormErrorMessage>
      </FormControl>
    );
  }

export const Input = forwardRef(InputBase);