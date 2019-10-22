import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import getFlexbox from '<atoms>/Flexbox/Flexbox';
import Icon from '<atoms>/Icon/Icon';
import Text from '<atoms>/Text/Text';
import Title from '<atoms>/Title/Title';
import Button from '<atoms>/Button/Button';
import Form from '<organisms>/Form/Form';
import UserContext from '<context>/context';

const Header = getFlexbox('header');
const Flexbox = getFlexbox();

const mediaQuery = `
  @media screen and (max-width:685px){
    padding: .8em;
    // width: calc(100% - 1.6em);
    justify-content: space-between;
    margin: 0 auto;
  }
`;
const Head = () => {
  const [user, setUser] = useContext(UserContext);

  const login = e => setUser(e.email);
  const logout = () => setUser('');

  return (
    <Header
      justifyContent='space-between'
      alignItems='center'
      padding='md'
      hasBottomBorder
    >
      <Flexbox flexWrap='nowrap' alignItems='center'>
         <Icon icon='faSolid/Home' big />
         <Title type='h1' fontSize='xxlarge' > Funny Movies </Title>
      </Flexbox>
      <Flexbox flexDirection='row' justifyContent='space-between'>
        { user
          ? <Flexbox >
              <Flexbox>
                <Flexbox padding='xxsm'>
                  <Text display='inline-block'>Welcome</Text>
                </Flexbox>
                <Flexbox padding='xxsm'>
                  <Text display='inline-block' color='primary'>{user.toLowerCase()}</Text>
                </Flexbox>
              </Flexbox>
              <Flexbox>
                <Flexbox padding='xxsm'>
                  <Button>Share a movie</Button>
                </Flexbox>
                <Flexbox padding='xxsm'>
                  <Button danger onClick={logout}>Logout</Button>
                </Flexbox>
              </Flexbox>
            </Flexbox>
          : <Form
              inputs={[
                {
                  inputProps: {
                    placeholder: 'JohnDoe@mail.com',
                    type: 'email',
                    name: 'email',
                    required: true,
                  },
                  id: 'email',
                },
                {
                  inputProps: {
                    placeholder: '********',
                    type: 'password',
                    name: 'password',
                    required: true,
                  },
                  id: 'password',
                },
              ]}
              buttonText='Login / Register'
              rules = {{
                email: 'required|email',
                password: 'required|string',
              }}
              submit ={login}
            />
      }
      </Flexbox>
    </Header>
  );
};

export default Head;
