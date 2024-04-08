import { useState } from 'react';
import allVideos from './videos.json';
import Video from './components/Video';
import VideoThumbnail from './components/VideoThumbnail';

const App = () => {
  const [currentVideo, setCurrentVideo] = useState(allVideos[0]);

  return (
    <main className='flex max-w-[1260px] lg:w-4/5 mx-auto px-6 py-20 gap-10'>
      <section className='w-2/3'>
        <Video currentVideo={currentVideo} />
      </section>
      <section className='w-1/3 min-w-[40ch] bg-base-300 rounded flex flex-col gap-4 flex-wrap'>
        {allVideos.map((video) => (
          <VideoThumbnail
            key={video.title}
            video={video}
            setCurrentVideo={setCurrentVideo}
          />
        ))}
      </section>
    </main>
  );
};

export default App;
