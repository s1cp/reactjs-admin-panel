import { Button, ButtonProps as ChakraButtonProps, Icon, IconButton, LightMode } from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";

interface FormButtonProps extends ChakraButtonProps {
  colorScheme: string;
  icon: ElementType;
  buttonSize?: string;
  children: string;
  iconOnly?: boolean;
  ariaLabel?: string;
  href?: string;
}

export function FormButton({ colorScheme, icon, buttonSize = "md", children, iconOnly = false, ariaLabel, href = "#" }: FormButtonProps) {
  if (iconOnly) {
    return (
      <LightMode>
        <Link href={href} passHref>
          <IconButton
            as="a"
            aria-label={ariaLabel}
            colorScheme={colorScheme}
            icon={<Icon as={icon} fontSize="20" />}
            size={buttonSize}
            fontSize={buttonSize}
          >
          </IconButton>
        </Link>
      </LightMode>
    );
  }

  return (
    <LightMode>
      <Link href={href} passHref>
        <Button
          as="a"
          colorScheme={colorScheme}
          leftIcon={<Icon as={icon} fontSize="20" />}
          size={buttonSize}
          fontSize={buttonSize}
        >
          {children}
        </Button>
      </Link>
    </LightMode>
  );
}