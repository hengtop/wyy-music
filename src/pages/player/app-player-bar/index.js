import React, { memo, useEffect, useRef, useState, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {
  getSongDetailAction,
  changeSequenceAction,
  changeCurrentSongPlayAction,
  changeCurrentLyricIndexAction
} from '../store';
import {
  getSizeImg,
  formatTimestamp,
  getPlaySongUrl
} from '@/utils/format-utils';

import { Slider } from 'antd';

import { PlayerWrapper, Content, LyricTip } from './style';

export default memo(function index() {
  //props and state
  //记录播放的时间
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  //是否正在拖动进度条
  const [isDrag, setIsDrag] = useState(false);
  //当前歌曲播放状态
  const [isPlay, setIsPlay] = useState(false);
  //不同模式展示不同的图标
  const modeIcon = [
    {
      mode: '顺序播放',
      showPosition: '-5px -345px',
      hoverPosition: '-35px -345px'
    },
    {
      mode: '随机播放',
      showPosition: '-70px -250px',
      hoverPosition: '-97px -250px'
    },
    {
      mode: '单曲循环',
      showPosition: '-68px -345px',
      hoverPosition: '-95px -345px'
    }
  ];
  //redux hooks
  const dispatch = useDispatch();
  const { currentSong, sequence, lyricList, currentLyricIndex } = useSelector(
    (state) => ({
      currentSong: state.getIn(['player', 'currentSong']),
      sequence: state.getIn(['player', 'sequence']),
      lyricList: state.getIn(['player', 'lyricList']),
      currentLyricIndex: state.getIn(['player', 'currentLyricIndex'])
    }),
    shallowEqual
  );
  //其他hooks
  const audioRef = useRef();

  useEffect(() => {
    dispatch(getSongDetailAction(31256837));
  }, [dispatch]);
  //设置歌曲的src，只需要设置一次
  useEffect(() => {
    //当歌曲的src改变的时候设置src，所以当歌曲切换我们就要播放新的歌曲
    audioRef.current.src = getPlaySongUrl(currentSong.id);
    //从头播放
    setCurrentTime(audioRef.current.currentTime);
    //这里是audio的一个维问题，当我们第一次进入浏览器或者刷新，audio是不会播放的，而且会报错。需要我们手动执行播放，这个主要是谷歌浏览器的问题为了保证进入页面不自动播放
    //另外play()函数执行返回一个promise，所以我们可以根据是否报错来修改播放状态。
    audioRef.current
      .play()
      .then((res) => {
        setIsPlay(true);
      })
      .catch((err) => {
        setIsPlay(false);
        console.warn(err);
      });
  }, [currentSong]);

  //其他逻辑
  const picUrl = (currentSong.al && currentSong.al.picUrl) || '';
  const songAuthor = (currentSong.ar && currentSong.ar[0].name) || '未知歌手';
  const songDuration = (currentSong.dt && currentSong.dt) || 0;
  const lyricContent =
    (lyricList.length && lyricList[currentLyricIndex].content) || '';

  //播放/暂停 按钮
  const playMusic = () => {
    isPlay ? audioRef.current.pause() : audioRef.current.play();
    setIsPlay(!isPlay);
  };
  //更新播放时间
  const updateTime = (e) => {
    if (!isDrag) {
      setCurrentTime(e.target.currentTime * 1000);
      setProgress((currentTime / songDuration) * 100);
    }
    //获取当前歌词
    let i = 0;
    const _currentTime = e.target.currentTime * 1000;
    for (; i < lyricList.length; i++) {
      if (_currentTime < lyricList[i].time) {
        break;
      }
    }
    if (lyricList.length !== 0) {
      //保存当前播放歌词的索引，优化下性能，当索引改变的时候载dispatch
      if (currentLyricIndex !== i - 1) {
        dispatch(changeCurrentLyricIndexAction(i - 1));
        console.log(lyricList[i - 1].content);
      }
    }
  };
  //拖动进度条控制播放时间
  const sliderChange = useCallback(
    (value) => {
      setIsDrag(true);
      setCurrentTime((value / 100) * songDuration);
      setProgress(value);
    },
    [songDuration]
  );
  const sliderAfterChange = useCallback(
    (value) => {
      //设置开始播放时间, 注意audio的时间是秒，我保存的时间都是毫秒
      setCurrentTime((value / 100) * songDuration);
      audioRef.current.currentTime = currentTime / 1000;
      setIsDrag(false);
    },
    [currentTime, songDuration]
  );

  //修改播放模式
  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if (currentSequence > 2) {
      currentSequence = 0;
    }
    dispatch(changeSequenceAction(currentSequence));
  };
  //重新播放
  const replay = () => {
    setCurrentTime(0);
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  //切换歌曲
  const changeSongPlay = (tag) => {
    //单曲循环
    if (sequence === 2) {
      replay();
    } else {
      dispatch(changeCurrentSongPlayAction(tag));
    }
  };
  //歌曲播放结束处理
  const handleEnded = () => {
    //如果是单曲循环
    if (sequence === 2) {
      replay();
    } else {
      //切换歌曲
      changeSongPlay(+1);
    }
  };
  return (
    <PlayerWrapper className="sprite_player">
      <div className="lock-bar sprite_player">
        <div className="control-btn sprite_player"></div>
      </div>
      <Content isPlay={isPlay} sequence={sequence} modeIcon={modeIcon}>
        <div className="player-left-control">
          <div
            className="play-prev sprite_player"
            onClick={(e) => changeSongPlay(-1)}
          ></div>
          <div
            className="play-stop sprite_player"
            onClick={(e) => playMusic()}
          ></div>
          <div
            className="play-next sprite_player"
            onClick={(e) => changeSongPlay(+1)}
          ></div>
        </div>
        <div className="play-slider">
          <div className="song-cover">
            <NavLink to="/discover/player">
              <a className="mask sprite_player"></a>
              <img src={getSizeImg(picUrl, 34)}></img>
            </NavLink>
          </div>
          <div className="slider-wrapper">
            <div className="song-info text-nowrap">
              <a className="name text-nowrap">{currentSong.name}</a>
              <a className="author text-nowrap">{songAuthor}</a>
            </div>
            <div className="slider">
              <div className="slider-item">
                <Slider
                  value={progress}
                  onChange={sliderChange}
                  onAfterChange={sliderAfterChange}
                  tooltipVisible={false}
                />
              </div>
              <div className="time">
                <span className="played">{formatTimestamp(currentTime)}</span>
                &nbsp;/&nbsp;
                <span className="duration">
                  {formatTimestamp(songDuration)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="player-right-control">
          <div className="show-words"></div>
          <div className="collection sprite_player"></div>
          <div className="share sprite_player"></div>
          <div className="set-voice sprite_player"></div>
          <div
            className="change-mode sprite_player"
            onClick={changeSequence}
            title={modeIcon[sequence].mode}
          ></div>
          <div className="show-lists sprite_player text-nowrap" title="121">
            11111111
          </div>
        </div>
      </Content>
      {lyricContent.length && (
        <LyricTip>
          <span className="lyric">{lyricContent}</span>
        </LyricTip>
      )}

      <audio
        ref={audioRef}
        onTimeUpdate={(e) => updateTime(e)}
        onEnded={handleEnded}
      ></audio>
    </PlayerWrapper>
  );
});
