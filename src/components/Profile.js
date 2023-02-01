import React from "react";
import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaBootstrap,
	FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiChakraui } from "react-icons/si";
import { Stack, Flex, Text, Box } from "@chakra-ui/react";

function Profile() {
	return (
		<Stack>
			<Box>
				<Text p="2">
					I specialize in full-stack web development primarally using the MERN
					stack.
				</Text>
			</Box>
			<Flex justify="center">
				<Box p={5}>
					<FaHtml5 size="3rem"></FaHtml5>
					<Text>HTML</Text>
					<FaCss3 size="3rem" />
					<Text>CSS</Text>
					<FaJs size="3rem" />
					<Text>JavaScript</Text>
					<FaReact size="3rem" />
					<Text>React</Text>
				</Box>

				<Box p={5}>
					<FaNodeJs size="3rem" />
					<Text>NodeJS</Text>
					<SiMongodb size="3rem" />
					<Text>MongoDB</Text>
					<SiExpress size="3rem" />
					<Text>Express</Text>
				</Box>

				<Box p={5} >
					<FaBootstrap size="3rem" />
					<Text >BootStrap</Text>
					<SiChakraui size="3rem" />
					<Text>ChakraUI</Text>
				</Box>
			</Flex>
		</Stack>
	);
}

export default Profile;
