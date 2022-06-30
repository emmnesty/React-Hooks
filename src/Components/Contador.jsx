import { useState } from 'react';

const Contador = (props) => {
  const [count, setCount] = useState(0);

  const [name, setName] = useState('');

  return (
    <div>
      <h1>Contador</h1>
      <h2>Contador: {count}</h2>
      <button className='botao' onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className='botao' onClick={() => setCount(count - 1)}>
        -
      </button>
      <button className='botao' onClick={() => setCount(() => count + 1000)}>
        +1000
      </button>
      <button className='botao' onClick={() => setCount(() => count - 1000)}>
        -1000
      </button>
      <hr />
      <section>
        <h1>
          Nome:{' '}
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </h1>
        <span>{name}</span>
      </section>
    </div>
  );
};

export default Contador;
