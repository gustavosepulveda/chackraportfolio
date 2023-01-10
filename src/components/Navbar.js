import { VStack, Flex, Heading, Spacer, Button } from "@chakra-ui/react";

function Navbar() {
	return (
		<VStack p={5}>
			<Flex w="100%">
				<Heading ml={4} size="md">
					Gustavo Sepulveda
				</Heading>
				<Spacer />
				<Button colorScheme="purple" variant="ghost">
					Projects
				</Button>
				<Button colorScheme="purple" variant="ghost">
					Linkedin
				</Button>
				<Button colorScheme="purple" variant="ghost">
					Resume
				</Button>
			</Flex>
		</VStack>
	);
}

export default Navbar;
