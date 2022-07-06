import { Box, Button, HStack } from "@chakra-ui/react";
import PaginationItem from "./PaginationItem";

export function Pagination() {
  return (
    <HStack
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>1</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PaginationItem pageNumber={1} isCurrent/>
        <PaginationItem pageNumber={2}/>
        <PaginationItem pageNumber={3}/>
        <PaginationItem pageNumber={4}/>
        <PaginationItem pageNumber={5}/>
      </HStack>
    </HStack>
  );
}