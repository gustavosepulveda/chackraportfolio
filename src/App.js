import { Flex, VStack, Heading, Button, Spacer } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
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
					<FaLinkedin />Linkedin
				</Button>
				<Button colorScheme="purple" variant="ghost">
					Resume
				</Button>
			</Flex>
			<Header />
			<Profile />
		</VStack>
	);
}

export default App;
