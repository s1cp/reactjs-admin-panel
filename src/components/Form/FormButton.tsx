import { Button, ButtonProps as ChakraButtonProps, Icon, LightMode } from "@chakra-ui/react";
import { ElementType } from "react";

interface FormButtonProps extends ChakraButtonProps {
  colorScheme: string;
  icon: ElementType;
  buttonSize?: string;
  children: string;
}

export function FormButton({ colorScheme, icon, buttonSize = "md", children }: FormButtonProps) {
  return (
    <LightMode>
      <Button
        colorScheme={colorScheme}
        leftIcon={<Icon as={icon} fontSize="20"/>}
        size={buttonSize}
        fontSize={buttonSize}
      >
        {children}
      </Button>
    </LightMode>
  );
}