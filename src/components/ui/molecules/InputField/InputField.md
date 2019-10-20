InputField example:
```jsx
  <InputField inputProps={{ placeholder: 'Default' }} />
```

```jsx
  <InputField
    inputProps={{
      placeholder:'John Doe',
      value: 'invalid input'
    }}
    label='Full Name'
    id='name'
    error='only alphabet are allowed'
    showError
  />
```

```jsx
  <InputField
    inputProps={{
      placeholder:'John Doe',
      width: 'auto'
    }}
    label='Full Name'
    id='name'
    error='only alphabet are allowed'
    flexWrap='nowrap'
  />
```
