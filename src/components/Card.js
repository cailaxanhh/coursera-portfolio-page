import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg='white' justifyContent='center' borderRadius='10px' p={5}>
       <Image src={imageSrc} alt='project image' />
      <Heading as='h4' size='md' align='left' color="black" width="100%" >{title}</Heading>
      <Text align='left' color="gray">{description}</Text>
      <HStack style={{width: '100%'}}>
        <Text color='black'>See more</Text>
      <FontAwesomeIcon icon={faArrowRight} size='1x' color='black' />
      </HStack>
    </VStack>
  );
};

export default Card;
