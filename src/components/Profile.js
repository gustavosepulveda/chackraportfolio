import React from "react";
import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaBootstrap,
	FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { Stack, Flex, Text, Box } from "@chakra-ui/react";

function Profile() {
	return (
		<Stack>
			<Flex>
        <Box>
				<FaHtml5 size="3rem"></FaHtml5>
        <Text>HTML</Text>
				<FaCss3 size="3rem" />
        <Text>CSS</Text>
				<FaJs size="3rem" />
        <Text>JavaScript</Text>
				<FaReact size="3rem" />
        <Text>React</Text>
        </Box>

        <Box>
				<FaNodeJs size="3rem" />
        <Text>NodeJS</Text>
				<SiMongodb size="3rem" />
        <Text>MongoDB</Text>
				<SiExpress size="3rem" />
        <Text>Express</Text>
        </Box>

        <Box>
				<FaBootstrap size="3rem" />
        <Text>BootStrap</Text>
        </Box>
			</Flex>
		</Stack>
	);
}

export default Profile;
