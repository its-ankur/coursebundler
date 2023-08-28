import React from 'react';
import { Button, Stack } from "@chakra-ui/react"
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return <section className="home">

    <div className="container">

      <Stack
        direction={["column", "row"]}
        height="100%"
        justifyContent={["center", "space-between"]}
        alignItems="center"
        spacing={['16', '56']}
      >
        <VStack width={'full'} alignItem={["center","flex-end"]}>
          <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} />
          <Text children="Find Valuable Content At Reasonable Price" />
          <Link to="/courses">
            <Button size={"lg"} colorScheme='yellow'>
              Explore Now
            </Button>
          </Link>
        </VStack>

        <Image boxSize=
      </Stack>
    </div>
  </section>
};

export default Home;