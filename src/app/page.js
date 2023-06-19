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
