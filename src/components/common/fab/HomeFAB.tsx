import { Box } from '@chakra-ui/react';
import { Home } from 'lucide-react';
import Link from 'next/link';

export const HomeFAB = () => {
    return (
        <Link href="/">
            <Box
                position="fixed"
                bottom={8}
                right={8}
                bg="black"
                color="white"
                width={12}
                height={12}
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow="lg"
                transition="transform 0.2s"
                _hover={{
                    transform: 'scale(1.1)',
                }}
                zIndex={1000}
            >
                <Home size={24} />
            </Box>
        </Link>
    );
};