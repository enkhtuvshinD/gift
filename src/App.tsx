'use client';
import { useState } from 'react';

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = ['No'];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  console.log('1');
  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Bear Kiss"
          />
          <div className="my-4 text-4xl font-bold">
            ❤️❤️❤️ I love you ❤️❤️❤️
          </div>
          <button
            onClick={() => (location.href = '/be-my-valentine/gift')}
            className="ml-4 rounded bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700"
          >
            GIFT
          </button>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute Bear with Roses"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? 'No' : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
