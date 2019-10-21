InputField example:
```jsx
  <InputField inputProps={{ placeholder: 'Default' }} />
```

```jsx
  <InputField
    inputProps={{
      placeholder:'John Doe',
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
    id='name2'
    error='only alphabet are allowed'
    flexWrap='nowrap'
  />
```

```jsx
  <InputField
    inputProps={{
      placeholder:'John Doe',
      width: 'auto'
    }}
    id='name3'
    error='only alphabet are allowed'
    flexWrap='nowrap'
    showError
  />
```
