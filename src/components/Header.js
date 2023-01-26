import { Flex, Stack, Text, Center } from "@chakra-ui/react";

function Header() {
	return (
		<Stack>
			<Flex>
				<Center width='300px'>
				<Text fontSize='4xl'>
					Hi, I'm Gustavo. <br />A Full Stack Developer specializing in
					front-end web development
				</Text>
				</Center>
			</Flex>
		</Stack>
	);
}

export default Header;
