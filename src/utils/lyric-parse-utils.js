/*
 * @Date: 2021-10-16 17:33:56
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-04 19:23:28
 */
//解析歌词
/*
[00:00.00]风见学园蔚蓝组
[00:04.00]
[00:05.00]歌姬：Wispering
[00:07.00]中文填词：佐久夜之羽
[00:09.00]后期：Mr. Chan
[00:10.00]
[00:11.00]
[00:13.00]
[00:14.00]
[00:16.03]站在这深邃无际的森林
[00:22.28]伴随我最爱的淡淡香气
[00:28.73]曾经用尽全力去寻找岁月的印记
[00:35.11]不经意 碰触你的痕迹
[00:41.07]伸出手 想要感受 你曾经给过的温柔
[00:47.69]无法挽留 那份幸福不再有
[00:54.06]好想念你 在都市的钢铁丛林
[00:59.10]每一个辗转难眠的夜里
[01:04.47]我只能想念你熟悉声音
[01:08.78]你残留下的光与影
[01:12.17]仿佛把我包围在你怀里
[01:18.42]静静拥抱我默默的哭泣
[01:25.02]夕阳抹下的身影 就像是软弱无力的自己
[01:37.19]无法去跨越面前这座爱情的废墟
[01:43.42]只留下点点殷红血迹
[01:49.43]无奈的伸出双手 想要拥住你的温柔
[01:55.93]却只感受 冰冷温度在胸口
[02:02.47]“永远爱你” 这份承诺过的往昔
[02:07.48]早已消失在遥远的森林
[02:12.55]随着狂风远去
[02:15.38]那些曾经 就算用时间来铭记
[02:20.46]也只留住片片残缺回忆
[02:26.73]难道注定是我们的结局
[02:54.44]我的泪滴 化作记忆
[02:57.83]倒映出残留的勇气 无法平息
[03:04.88]永远留在心底
[03:10.90]“无法抹去” 曾经留给我的回忆
[03:16.10]你的眼睛你的呼吸如今 还牵动我的心
[03:24.05]最难放弃 定格在过去的身影
[03:29.01]带我回到你说爱我的那一句
[03:35.30]感受着你永远不再分离
[03:45.05]在曾经有你的椮椮森林
*/
//const lyricReg = /(?<=])(.)*/;
//const timeReg = /(\d|:|\.)*(?=])/;
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/g;
export const parseLyric = (songStr) => {
  //根据回车切分字符串
  const lineArray = songStr.split('\n');
  const lyrics = [];
  for (let line of lineArray) {
    if (line) {
      const result = parseExp.exec(line);
      //如果没有匹配到
      if (result === null) continue;
      //注意 字符串和数字相乘会转为数字
      const time1 = result[1] * 60 * 1000;
      const time2 = result[2] * 1000;
      const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10; //有两位数和三位数的区别
      //根据分秒格式计算毫秒数
      const mseconds = time1 + time2 + time3;
      //获取歌词部分
      const content = line.replace(parseExp, '').trim();
      lyrics.push({
        time: mseconds,
        content: content
      });
    }
  }
  //如果没有歌词就返回默认提示
  if (songStr.length === 0 || lyrics.length === 0) {
    return [
      {
        time: 0,
        content: ''
      },
      {
        time: 0,
        content: ''
      },
      {
        time: 0,
        content: songStr
      },
      {
        time: 0,
        content: '纯音乐，请欣赏'
      }
    ];
  }
  return lyrics;
};

//只提取歌词展示
export const onlyLyric = (songStr) => {
  if (songStr.length === 0) {
    return [
      {
        time: 0,
        content: ''
      },
      {
        time: 0,
        content: ''
      },
      {
        time: 0,
        content: songStr
      },
      {
        time: 0,
        content: '纯音乐，请欣赏'
      }
    ];
  }
  return songStr.replace(parseExp, '').split('\n');
};
