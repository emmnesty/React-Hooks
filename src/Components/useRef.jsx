import { useEffect } from 'react';
import { useRef, useState } from 'react';

const Ref = (props) => {
  const [value1, setValue1] = useState('');
  const count = useRef(0);

  useEffect(
    function () {
      count.current++;
    },
    [value1]
  );

  return (
    <div>
      <div>
        <span>Valor:</span>
        <span>{value1}  |||||| [</span>
        <span>{count.current}   </span>
        <span>]</span>
      </div>

      <input
        type='text'
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
    </div>
  );
};

export default Ref;
