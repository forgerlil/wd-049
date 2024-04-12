import { useEffect, useState, useRef } from 'react';
import Error from './components/Error';
import Loading from './components/Loading';
import axios from 'axios';
import { toPng } from 'dom-to-image';

const memeUrl = 'https://api.imgflip.com/get_memes';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [allMemes, setAllMemes] = useState(null);
  const [currentMeme, setCurrentMeme] = useState(0);
  const [displayedMeme, setDisplayedMeme] = useState(null);
  const [memeText, setMemeText] = useState({
    topText: '',
    bottomText: '',
  });
  const memeRef = useRef();

  useEffect(() => {
    const getAllMemes = async () => {
      try {
        const { data } = await axios(memeUrl);
        setAllMemes(data.data.memes);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getAllMemes();
  }, []);

  useEffect(() => {
    allMemes && setDisplayedMeme(allMemes[currentMeme]);
  }, [allMemes, currentMeme]);

  const handleMemeText = (e) => {
    const { name, value } = e.target;
    setMemeText((prev) => ({ ...prev, [name]: value }));
  };

  const uploadMeme = (e) => {
    if (!e.target.files.length) return alert('Please upload at least one file');

    const memeUrl = URL.createObjectURL(e.target.files[0]);

    setDisplayedMeme({
      name: e.target.files[0].name,
      url: memeUrl,
    });
  };

  const handleSave = async (element) => {
    try {
      const memeInPng = await toPng(element);
      const downloadLink = document.createElement('a');

      downloadLink.download = `memefied-${displayedMeme.name}.png`;
      downloadLink.href = memeInPng;
      downloadLink.click();
    } catch (error) {
      console.error(error);
    }
  };

  const handleReset = () => {
    setCurrentMeme(0);
    setDisplayedMeme(allMemes[0]);
    setMemeText({
      topText: '',
      bottomText: '',
    });
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <main className='flex gap-20 justify-center items-center mt-24 h-[70vh]'>
      <div className='basis-1/2'>
        <div ref={memeRef} className='relative'>
          <img
            className='max-w-[40vw] max-h-[70vh] border-grey-200 border-2 rounded-lg p-4'
            src={displayedMeme?.url}
            alt={displayedMeme?.name}
          />
          <p className='font-bebas absolute top-10 w-full text-center max-w-[40vw] text-black text-3xl break-words px-6 truncate'>
            {memeText.topText}
          </p>
          <p className='font-bebas absolute bottom-10 w-full text-center max-w-[40vw] text-black text-3xl break-words px-6 truncate'>
            {memeText.bottomText}
          </p>
        </div>
      </div>
      <div className='basis-1/2'>
        <div className='flex flex-col gap-8 mb-10'>
          <h3 className='text-4xl mb-10'>{displayedMeme?.name}</h3>
          <div>
            <label htmlFor='topText-input' className='label'>
              <span className='label-text'>Top text</span>
            </label>
            <input
              id='topText-input'
              name='topText'
              placeholder='Add your top text here'
              className='input input-bordered w-full max-w-xs'
              value={memeText.topText}
              onChange={handleMemeText}
            />
          </div>
          <div>
            <label htmlFor='bottomText-input' className='label'>
              <span className='label-text'>Bottom text</span>
            </label>
            <input
              id='bottomText-input'
              name='bottomText'
              placeholder='Add your bottom text here'
              className='input input-bordered w-full max-w-xs'
              value={memeText.bottomText}
              onChange={handleMemeText}
            />
          </div>
          <div className='flex gap-4'>
            <button
              className='btn btn-primary'
              disabled={currentMeme <= 0}
              aria-disabled={currentMeme <= 0}
              onClick={() => setCurrentMeme((prev) => prev - 1)}
            >
              Previous
            </button>
            <button
              className='btn btn-secondary'
              onClick={() =>
                setCurrentMeme(Math.floor(Math.random() * allMemes.length))
              }
            >
              Random
            </button>
            <button
              className='btn btn-primary'
              disabled={currentMeme >= allMemes.length - 1}
              aria-disabled={currentMeme >= allMemes.length - 1}
              onClick={() => setCurrentMeme((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
          <div className='flex gap-4'>
            <button
              className='btn btn-info'
              onClick={() => handleSave(memeRef.current)}
            >
              Save
            </button>
            <button className='btn btn-warning' onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
        <hr className='w-[40ch] my-10' />
        <div>
          <input
            type='file'
            className='file-input file-input-bordered w-full max-w-xs'
            onChange={uploadMeme}
          />
        </div>
      </div>
    </main>
  );
};

export default App;
