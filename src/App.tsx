'use client';
import { useState } from 'react';

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [pressedGift, setPressedGift] = useState(false);

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
      {pressedGift ? (
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzZ3a2docTN5dnY1djN6c24xY29wZ2p3MHhkejJuYzFiaDh0NzV4eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/UWtFTJwnbVj2z3GEeY/giphy.gif"
          alt="Bear Kiss"
        />
      ) : yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Bear Kiss"
          />
          <div className="my-4 text-4xl font-bold">
            ❤️❤️❤️ I love you ❤️❤️❤️
          </div>
          <button
            onClick={() => setPressedGift(true)}
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
