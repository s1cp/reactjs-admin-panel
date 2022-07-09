import { Button, ButtonProps, ButtonProps as ChakraButtonProps, Icon, IconButton, LightMode } from "@chakra-ui/react";
import Link from "next/link";
import { type } from "os";
import { ElementType } from "react";

interface FormButtonProps extends ChakraButtonProps {
  icon: ElementType;
  buttonSize?: string;
  iconOnly?: boolean;
  ariaLabel?: string;
  href?: string;
  children: string;
}

export function FormButton({
  icon,
  buttonSize = "md",
  children,
  iconOnly = false,
  ariaLabel,
  href = null,
  ...rest
}: FormButtonProps) {
  if (iconOnly) {
    if (href !== null) {
      return (
        <LightMode>
          <Link href={href} passHref>
            <IconButton
              as="a"
              aria-label={ariaLabel}
              icon={<Icon as={icon} fontSize="20" />}
              size={buttonSize}
              fontSize={buttonSize}
              {...rest}
            >
            </IconButton>
          </Link>
        </LightMode>
      );
    }

    return (
      <LightMode>
        <IconButton
          aria-label={ariaLabel}
          icon={<Icon as={icon} fontSize="20" />}
          size={buttonSize}
          fontSize={buttonSize}
          {...rest}
        >
        </IconButton>
      </LightMode>
    );

  }

  if (href !== null) {
    return (
    <LightMode>
      <Link href={href} passHref>
        <Button
          as="a"
          leftIcon={<Icon as={icon} fontSize="20" />}
          size={buttonSize}
          fontSize={buttonSize}
          {...rest}
        >
          {children}
        </Button>
      </Link>
    </LightMode>
    );
  }

  return (
    <LightMode>
      <Button
        leftIcon={<Icon as={icon} fontSize="20" />}
        size={buttonSize}
        fontSize={buttonSize}
        {...rest}
      >
        {children}
      </Button>
    </LightMode>
  );
}