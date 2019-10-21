Form example:
```jsx
import useformbee from 'useformbee';

  <Form
    inputs={[
      {
        inputProps: {
          placeholder: 'John Doe',
          type: 'text',
          name: 'firstName',
        },
        id: 5,
      },
      {
        inputProps: {
          placeholder: 'Age',
          type: 'text',
          name: 'age',
          required: true
        },
        id: 7,
      },
    ]}
  buttonText='Submit'
  rules = {{
    firstName: 'required|alpha',
    age: 'number'
  }}
  submit ={e => console.log(e)}
  />
```

```jsx
import useformbee from 'useformbee';

  <Form
    inputs={[
      {
        label: 'Password',
        inputProps: {
          placeholder: '*******',
          type: 'password',
          name: 'pasword',
          required: true,
        },
        id: 6,
        showError: true,
      },
    ]}
  buttonText='Submit'
  rules = {{ password: 'string' }}
  submit ={e => console.log(e)}
  flexDirection= 'column'
  />
```
