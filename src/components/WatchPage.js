import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from 'react-router-dom';
import LiveChat from './LiveChat';
import ComentsContainer from './ComentsContainer';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col  w-full">
      {/* Video iframe */}
      <div className="px-5 flex w-full">
        <div className=''>
        <iframe
          width="1100"
          height="600"
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        </div>
     
      <div className="w-full">
        <LiveChat />
      </div>
      </div>
        <ComentsContainer />
    </div>
  );
};

export default WatchPage;
