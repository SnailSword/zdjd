/**
 * @author: oldj
 * @homepage: https://oldj.net
 */

import { assert } from 'chai'
import { human2zdjd, isZdjd, zdjd2human } from '../src/trans'

describe('trans test', () => {
  const makeRndString = (len: number): string => {
    const characters =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/=' +
      '`~!@#$%^&*()_+-=[]{}\\|:;\'",./<>?' +
      '余家贫，耕植不足以自给。幼稚盈室，瓶无储粟，生生所资，未见其术。亲故多劝余为长吏，脱然有怀，求之靡途。会有四方之事，诸侯以惠爱为德，家叔以余贫苦，遂见用于小邑。于时风波未静，心惮远役，彭泽去家百里，公田之利，足以为酒。故便求之。及少日，眷然有归欤之情。何则？质性自然，非矫厉所得。饥冻虽切，违己交病。尝从人事，皆口腹自役。于是怅然慷慨，深愧平生之志。犹望一稔，当敛裳宵逝。寻程氏妹丧于武昌，情在骏奔，自免去职。仲秋至冬，在官八十余日。因事顺心，命篇曰《归去来兮》。乙巳岁十一月也。归去来兮，田园将芜胡不归？既自以心为形役，奚惆怅而独悲？悟已往之不谏，知来者之可追。实迷途其未远，觉今是而昨非。舟遥遥以轻飏，风飘飘而吹衣。问征夫以前路，恨晨光之熹微。乃瞻衡宇，载欣载奔。僮仆欢迎，稚子候门。三径就荒，松菊犹存。携幼入室，有酒盈樽。引壶觞以自酌，眄庭柯以怡颜。倚南窗以寄傲，审容膝之易安。园日涉以成趣，门虽设而常关。策扶老以流憩，时矫首而遐观。云无心以出岫，鸟倦飞而知还。景翳翳以将入，抚孤松而盘桓。归去来兮，请息交以绝游。世与我而相违，复驾言兮焉求？悦亲戚之情话，乐琴书以消忧。农人告余以春及，将有事于西畴。或命巾车，或棹孤舟。既窈窕以寻壑，亦崎岖而经丘。木欣欣以向荣，泉涓涓而始流。善万物之得时，感吾生之行休。已矣乎！寓形宇内复几时？曷不委心任去留？胡为乎遑遑欲何之？富贵非吾愿，帝乡不可期。怀良辰以孤往，或植杖而耘耔。登东皋以舒啸，临清流而赋诗。聊乘化以归尽，乐夫天命复奚疑！'
    // + '😀😂😍🐶🐱🐰🍏🍎🍓🍉🥏🏹⛸🚗🚎🚒🕹💿📸❤️💔💘🏳️🏴'
    // + '👶👶🏻👶🏼👶🏽👶🏾👶🏿'
    // @ts-ignore
    const chars = [...characters.split('')]
    const n = chars.length

    let s = ''
    while (s.length < len) {
      s += chars[Math.floor(Math.random() * n)]
    }

    return s
  }

  it('basic test', () => {
    let msg = '尊嘟假嘟'
    let s = human2zdjd(msg)
    assert.notEqual(msg, s)
    assert.equal(msg, zdjd2human(s))

    msg = '愿喵之力与你同在！May the power of Zdjd be with you!'
    s = human2zdjd(msg)
    assert.notEqual(msg, s)
    assert.equal(msg, zdjd2human(s))

    msg = 'with emoji 👶👶🏻👶🏼😺😸😹 123'
    s = human2zdjd(msg)
    assert.notEqual(msg, s)
    assert.equal(msg, zdjd2human(s))
  })

  it('random string test', () => {
    for (let i = 0; i < 500; i++) {
      let len = Math.floor(Math.random() * 1000) + 1
      let msg = makeRndString(len)
      let zdjd_msg = human2zdjd(msg)
      assert.notEqual(msg, zdjd_msg)
      assert.equal(msg, zdjd2human(zdjd_msg))

      assert.isFalse(isZdjd(msg))
      assert.isTrue(isZdjd(zdjd_msg))
    }
  })
})
