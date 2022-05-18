/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { Replay } from 'vimond-replay'
// import ShakaVideoStreamer from "vimond-replay/video-streamer/shaka-player";
import 'vimond-replay/index.css'
import HlsjsVideoStreamer from 'vimond-replay/video-streamer/hlsjs'

const replayOptions = {
  videoStreamer: {
    hlsjs: {
      customConfiguration: {
        capLevelToPlayerSize: true,
        maxBufferLength: 45
      }
    }
  }
}
export default function Example() {
  return (
    <div className="relative bg-gray-50 h-[100vh]">
      <Replay
        // source="https://livesim.dashif.org/livesim/chunkdur_1/ato_7/testpic4_8s/Manifest.mpd"
        source="https://mw-stream.azureedge.net/mwvideoraw/videos/kaala/fdfs/hls/master.m3u8"
        initialPlaybackProps={{ isPaused: true }}
        options={replayOptions}>
        {/* <ShakaVideoStreamer /> */}
        <HlsjsVideoStreamer />
      </Replay>
    </div>
  )
}
