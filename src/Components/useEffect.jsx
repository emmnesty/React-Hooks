import { useEffect, useState } from 'react';

function calcFatorial(num) {
  const n = parseInt(num);

  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

const Fatorial = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState('');

  useEffect(
    function () {
      if (number === null || number == '') setFatorial('Digitar um número');
      else setFatorial(calcFatorial(number));
    },
    [number]
  );

  useEffect(
    function () {
      if (fatorial > 1000000) {
        document.title = 'Eita!!!';
      }
    },
    [fatorial]
  );

  const [status, setStatus] = useState('Ímpar');

  useEffect(function () {
    setStatus(number % 2 === 0 ? 'Par' : 'Ímpar');
  }, []);

  return (
    <div>
      <div>
        <div>
          <span>Fatorial: </span>
          <span>{fatorial === -1 ? 'Não existe' : fatorial}</span>
        </div>
        <input
          type='number'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <div>
        <div>
          <span>Status: </span>
          <span>{status}</span>
        </div>
      </div>
    </div>
  );
};

export default Fatorial;
