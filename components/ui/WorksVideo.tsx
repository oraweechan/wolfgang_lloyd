type VideoItemProps = {
  src: string;
};

const WorksVideo = ({ src }: VideoItemProps) => {
  return (
    <div>
      <video
        controls
        muted
        playsInline
        aria-hidden="true"
        className="w-full rounded"
      >
        <source
          src={src}
          type="video/mp4"
        />
      </video>
      <div className="p-4 md:p-8 text-center">
        <h3 className="text-lg font-semibold">Video </h3>
      </div>
    </div>
  );
};

export default WorksVideo;
