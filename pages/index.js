import { useEffect, useState } from 'react';
import Modal from '../components/Modal';

export default function Home(props) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpenModal((prev) => !prev);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {props.fakePromiseResult}

      <Modal isOpen={isOpenModal} />
    </div>
  );
}

let fakePromise = new Promise((resolve, reject) => {
  const timeOut = setTimeout(() => {
    resolve('ok');
    clearTimeout(timeOut);
  }, Math.random() * 10000 + 1);
});

export async function getServerSideProps() {
  const fakePromiseResult = await fakePromise;

  return {
    props: {
      fakePromiseResult,
    },
  };
}
