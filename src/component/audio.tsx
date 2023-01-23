import React from 'react';
import type { ReactElement } from 'react';
import Plyr from 'plyr-react';

interface PropListType extends Record<string, unknown>
{
  src: string;
  title?: string;
  autoPlay?: boolean;
}
type StateListType = Record<string, unknown>;
export class PlyrAudio extends React.Component<PropListType, StateListType>
{
  render(): ReactElement
  {
    return (<><Plyr
      title={this.props.title ?? ''}
      source={{
        type: 'audio',
        sources: [
          {
            src: this.props.src ?? '',
            type: 'audio/mpeg'
          }
        ]
      }}
      options={{
        autoplay: this.props.autoPlay === true,
        controls: [
          'play', // Play/pause playback
          'progress', // The progress bar and scrubber for playback and buffering
          'current-time', // The current time of playback
          'volume', // Volume control
          'mute' // Toggle mute
        ]
      }}
    /></>);
  }
}
