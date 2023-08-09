import React from 'react';
import { format } from 'timeago.js';

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publshiedAt } = video.snippet;
  return (
    <li>
      <img
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{format(publshiedAt)}</p>
      </div>
    </li>
  );
}
