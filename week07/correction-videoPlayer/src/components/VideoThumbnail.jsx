const VideoThumbnail = ({ video, setCurrentVideo }) => {
  return (
    <div
      className='mr-2 flex gap-2 hover:cursor-pointer rounded'
      onClick={() => setCurrentVideo(video)}
    >
      <img
        src={video.thumb}
        alt={video.title}
        className='max-w-[200px] rounded aspect-video object-cover'
      />
      <div className='py-2'>
        <p className='lg:text-lg font-light'>{video.title}</p>
        <p className='text-sm font-light'>{video.subtitle}</p>
      </div>
    </div>
  );
};

export default VideoThumbnail;
