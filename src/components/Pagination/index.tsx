import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import PaginationItem from "./PaginationItem";

interface PaginationProps {
  totalRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (pageNumber: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from + 1)]
  .map((_, index) => from + index)
  .filter(pageNumber => pageNumber > 0);
}

export function Pagination({ 
  totalRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
 }: PaginationProps) {
  const totalPages = Math.ceil(totalRegisters / registersPerPage);

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - siblingsCount, currentPage - 1)
    : [];

  const nextPages = currentPage < totalPages
    ? generatePagesArray(currentPage + 1, Math.min(currentPage + siblingsCount, totalPages))
    : [];

  console.log(totalRegisters);

  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>{((currentPage - 1) * registersPerPage) + 1}</strong> - <strong>{currentPage * registersPerPage}</strong> de <strong>{totalRegisters}</strong>
      </Box>
      <HStack spacing="2">
        {/* First Page */}
        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} pageNumber={1} />
            {currentPage > (2 + siblingsCount) && (
              <Text color="gray.300" width="8" textAlign="center">...</Text>
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(pageNumber => {
          return <PaginationItem onPageChange={onPageChange} key={pageNumber} pageNumber={pageNumber} />
        })}

        <PaginationItem onPageChange={onPageChange} pageNumber={currentPage} isCurrent/>

        {nextPages.length > 0 && nextPages.map(pageNumber => {
          return <PaginationItem onPageChange={onPageChange} key={pageNumber} pageNumber={pageNumber} />
        })}

        {/* Last Page */}
        {currentPage + siblingsCount < totalPages && (
          <>
            {currentPage + siblingsCount < (totalPages - 1) && (
              <Text color="gray.300" width="8" textAlign="center">...</Text>
            )}
            <PaginationItem  onPageChange={onPageChange}pageNumber={totalPages} />
          </>
        )}
      </HStack>
    </Stack>
  );
}