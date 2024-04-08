import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Code,
  Heading,
  Text,
} from "@chakra-ui/react";

export const SdkPage = () => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <Heading>
          <AccordionButton>Operation</AccordionButton>
        </Heading>
        <AccordionPanel>
          <Text>lsdf</Text>
          <Code>Lol</Code>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <Heading>
          <AccordionButton>Location</AccordionButton>
        </Heading>
        <AccordionPanel>
          <Code>Lol</Code>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
