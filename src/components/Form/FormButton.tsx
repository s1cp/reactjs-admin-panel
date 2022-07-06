import { Button, ButtonProps as ChakraButtonProps, Icon, IconButton, LightMode } from "@chakra-ui/react";
import { ElementType } from "react";

interface FormButtonProps extends ChakraButtonProps {
  colorScheme: string;
  icon: ElementType;
  buttonSize?: string;
  children: string;
  iconOnly?: boolean;
  ariaLabel?: string;
}

export function FormButton({ colorScheme, icon, buttonSize = "md", children, iconOnly = false, ariaLabel }: FormButtonProps) {
  if (iconOnly) {
    return (
      <LightMode>
        <IconButton
          aria-label={ariaLabel}
          colorScheme={colorScheme}
          icon={<Icon as={icon} fontSize="20" />}
          size={buttonSize}
          fontSize={buttonSize}
        >
        </IconButton>
      </LightMode>
    );
  }

  return (
    <LightMode>
      <Button
        colorScheme={colorScheme}
        leftIcon={<Icon as={icon} fontSize="20" />}
        size={buttonSize}
        fontSize={buttonSize}
      >
        {children}
      </Button>
    </LightMode>
  );
}