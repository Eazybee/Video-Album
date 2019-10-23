import React from 'react';
import PageLayout from '../../ui/layout/Layout';
import Form from '<organisms>/Form/Form';
import getFlexbox from '<atoms>/Flexbox/Flexbox';


const Flexbox = getFlexbox();
const Fieldset = getFlexbox('fieldset');

const mediaQuery = `
  @media screen and (max-width:510px){
    padding-left: .5em;
  }

   @media screen and (max-width:380px){
    padding: .1em;
    width: auto;
  }
`;


const SharePage = () => (
  <PageLayout>
    <Flexbox height='share' justifyContent='center' alignItems='center' >
      <Fieldset padding='nm' leftPadding='xnm' mediaQuery={mediaQuery}>
        <legend>Share a Youtube video</legend>
         <Form
           inputs={[
             {
               label: 'Youtube URL',
               inputProps: {
                 placeholder: 'https://www.youtube.com/watch?v=',
                 name: 'url',
                 required: true,
               },
               id: 9,
               showError: true,
             },
           ]}
            buttonText='Share'
            rules = {{ url: 'required|url' }}
            submit ={e => console.log(e)}
            flexDirection= 'column'
            width='share'
        />
      </Fieldset>
    </Flexbox >
  </PageLayout>
);

export default SharePage;
