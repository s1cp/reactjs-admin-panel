import { Button, DarkMode } from '@chakra-ui/react';

interface PaginationItemProps {
  isCurrent?: boolean;
  pageNumber: number;
  onPageChange: (pageNumber: number) => void;
}

export default function PaginationItem({
  isCurrent = false,
  pageNumber,
  onPageChange
}: PaginationItemProps) {
  if (isCurrent) {
    return (
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          color="gray.50"
          disabled
          _hover={{
            bg: 'pink.500',
          }}
          _disabled={{
            bg: "pink.500",
            cursor: "default"
          }}
        >
          {pageNumber}
        </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="gray"
      onClick={() => onPageChange(pageNumber)}
    >
      {pageNumber}
    </Button>
  );
}