import { Flex, Icon, Input as ChakraInput, useColorModeValue } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export default function SearchBox() {
  const [search, setSearch] = useState("");

  // const searchInputRef = useRef<HTMLInputElement>(null);

  // searchInputRef.current.focus();

  const searchBgColor = useColorModeValue("white", "gray.800");
  const searchTextColor = useColorModeValue("gray.700", "gray.200");
  const searchInputColor = useColorModeValue("gray.900", "gray.50");
  const searchPlaceholderColor = useColorModeValue("gray.700", "gray.400");

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      align="center"
      color={searchTextColor}
      position="relative"
      bg={searchBgColor}
      borderRadius="full"
    >
      <ChakraInput
        color={searchInputColor}
        variant="unstyled"
        px="4"
        mr="4"
        placeholder='Buscar...'
        _placeholder={{ color: searchPlaceholderColor }}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        autoFocus
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}