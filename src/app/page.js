'use client'

import React from 'react';

import { Image, Stack, Text } from "@chakra-ui/react";
import { BigOutlinedButton, PeopleCard, SimpleTitleAndText, TextAndButton } from '../../devlink';
import { arrayItemsData } from '../constants/itemsData';


export default function Home() {
  return (
    <Stack width="100%" minH={"100vh"} bgColor="#151616">
      <Stack>
        <Stack zIndex={0} position="absolute">
          <Image alt="image-background" src="https://assets.website-files.com/5c837a12af626286ed0fec32/5c906f02a5701dc8919d6a41_BackgroundYellow.svg" />
        </Stack>
        <Stack zIndex={1} className='content' width={"100%"}>
          {/* <Stack marginBottom={20} marginTop={150} marginX="auto" maxW={750} width={"100%"} flexDirection={"column"}>
            <Text 
              fontWeight="extrabold" 
              textAlign={"center"} 
              color={"white"} f
              fontSize="7xl"
            >Grow your people</Text>
            <Text 
              fontSize="3xl"
              textAlign="center"
            >Join some of the world’s leading companies in helping your team grow, by giving them access to any learning resource in the world through Sunlight</Text>
            <Stack marginX="auto" maxW={298}>
              <BigOutlinedButton ctaText="Try it now for free" />
            </Stack>
          </Stack> */}
          <Stack alignItems="center" marginBottom={20} marginTop={150} justifyContent="center" width="100%">
            <TextAndButton />
          </Stack>
          <Stack 
            marginX="auto" 
            maxW={"90%"}  
            gap={10} 
            flexDirection="row" 
            flexWrap="wrap" 
            justifyContent={"center"}
          >
              { arrayItemsData.map((item, index) => (
                <PeopleCard key={index} title={item.title} imageUrl={item.imageUrl} text={item.text} />
              ))}
              <Stack>
                <SimpleTitleAndText 
                  title="The learning you want" 
                  text="Everyone learns in different ways. Just give your team a Sunlight budget and they can use it to access any learning in the world."/>
              </Stack>
            <Stack height={800}></Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
