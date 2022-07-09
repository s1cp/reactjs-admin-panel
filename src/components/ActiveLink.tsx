import { useColorModeValue } from "@chakra-ui/react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

export function ActiveLink({children, ...rest}: ActiveLinkProps) {
  const activeLinkColor = useColorModeValue("pink.500", "pink.400");
  const inactiveLinkColor = useColorModeValue("gray.900", "gray.50");
  
  const { asPath } = useRouter();
  
  let isActive = false;

  if (asPath.startsWith(String(rest.href))) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? activeLinkColor : inactiveLinkColor,
      })}
    </Link>
  );
}