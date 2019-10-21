Flexbox example:
```jsx
  import getFlexbox  from './Flexbox.jsx';
  const Flex = getFlexbox();
  <Flex type='div'>Default</Flex>
```

```jsx
  import getFlexbox  from './Flexbox.jsx';
  const Flex = getFlexbox('header');
  <Flex
  >
    This is an header
  </Flex>
```


```jsx
  import getFlexbox  from './Flexbox.jsx';
  const Flex = getFlexbox();
  <Flex
    hasBottomBorder
  >
    I have a bottom border
  </Flex>
```

```jsx
  import getFlexbox  from './Flexbox.jsx';
  const Flex = getFlexbox();
  <Flex
    justifyContent='space-between'
  >
    <p>I am right</p>
    <p>I am left</p>
  </Flex>
```
