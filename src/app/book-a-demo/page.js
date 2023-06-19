'use client';

import { Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { FormInput, FormSubmitButton, Heading, InputHelper, SubHeading } from '../../../devlink';

const BookADemo = () => {
  return (
    <Stack width="100%" minH={"100vh"} bgColor="#151616">
    <Stack>
      <Stack zIndex={0} position="absolute">
        <Image alt="image-background" src="https://assets.website-files.com/5c837a12af626286ed0fec32/5c906f02a5701dc8919d6a41_BackgroundYellow.svg" />
      </Stack>
      <Stack alignItems="center" flexDirection="column" width="100%" zIndex={1} className='content'>
            <Stack alignItems="center" marginTop={300} marginBottom={100} className='form'>
                <Heading />
                <SubHeading />
                <FormInput label="Name"  />
                <FormInput formInputHelperNew={<InputHelper text="Please use your work email" />} />
                <FormInput label="Company Name"  />
                <FormInput label="Phone Number" formInputHelperNew={<InputHelper text="It's optional." />} />
                <FormSubmitButton submit={{ onClick: () => console.log('submit')}} />
            </Stack>
      </Stack>
    </Stack>
  </Stack>
  )
}

export default BookADemo