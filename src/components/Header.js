import { Flex, Stack, Text, Box } from "@chakra-ui/react";

function Header() {
	return (
		<Flex
			p={{ base: 4, md: 14 }}
			w="100%"
			direction={{ base: "column-reverse", md: "row" }}
		>
			<Box
				p={{ base: 4, md: 14 }}
				w="100%"
				direction={{ base: "column-reverse", md: "row" }}
			>
				<Text fontSize="4xl">
					Hi, I'm Gustavo. <br />
				</Text>
				<Text fontSize="2xl">Full Stack Developer</Text>
			</Box>
		</Flex>
	);
}

export default Header;
