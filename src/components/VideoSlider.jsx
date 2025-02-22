import { useState, useRef } from 'react';
import Slider from 'react-slick';
import hostProgram from '../assets/videos/OYM-HOST-PROGRAM.mp4';
import publicSpeaking from '../assets/videos/OYM-PUBLIC-SPEAKING.mp4';
import voiceOver from '../assets/videos/OYM-VOICEOVER.mp4';

const videos = [
  {
    title: 'Host Program',
    videoUrl: hostProgram,
  },
  {
    title: 'Public Speaking',
    videoUrl: publicSpeaking,
  },
  {
    title: 'Voiceover Program',
    videoUrl: voiceOver,
  },
];

const VideoSlider = () => {
  const [currentVideo, setCurrentVideo] = useState(0); // Track the current video
  const videoRefs = useRef([]); // Refs for video elements

  const handleBeforeChange = () => {
    // Pause the video before changing slides
    if (videoRefs.current[currentVideo]) {
      videoRefs.current[currentVideo].pause();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
    beforeChange: (current, next) => {
      setCurrentVideo(next); // Update the current video index
      handleBeforeChange(); // Pause the current video
    },
  };

  return (
    <section
      className="py-8 bg-cream border border-solid shadow-md m-8"
      aria-labelledby="video-slider-section"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-2" id="video-slider-section">
          Featured Videos
        </h2>
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div key={index} className="p-4">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                controls
                className="h-96 rounded-lg mb-4 object-contain mx-auto"
                src={video.videoUrl}
                alt={`Video ${index + 1}`}
                style={{ width: 'auto', maxWidth: '100%' }}
              />

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {video.title}
              </h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default VideoSlider;
