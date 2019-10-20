Rating example:
```jsx
  import React, { useState } from 'react';

  const [count, setCounter] = useState(0);
  const [icon, setIcon] = useState('faRegular/ThumbsUp');

  const onClick = () => {
    setCounter(1);
    setIcon('faSolid/ThumbsUp');
  };

  <Rating  count={count} icon={icon} onClick={onClick}/>
```
