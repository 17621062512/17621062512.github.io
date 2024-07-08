var f = function () {
    var g = !![];
    return function (h, i) {
        var j = g ? function () {
            if (i) {
                var k = i['apply'](h, arguments);
                i = null;
                return k;
            }
        } : function () {
        };
        g = ![];
        return j;
    };
}();
var e = f(this, function () {
    var g = function () {
        var h = g['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['compile']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');
        return !h['test'](e);
    };
    return g();
});
e();
var d = function () {
    var g = !![];
    return function (h, i) {
        var j = g ? function () {
            if (i) {
                var k = i['apply'](h, arguments);
                i = null;
                return k;
            }
        } : function () {
        };
        g = ![];
        return j;
    };
}();
(function () {
    d(this, function () {
        var g = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var h = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var i = c('init');
        if (!g['test'](i + 'chain') || !h['test'](i + 'input')) {
            i('0');
        } else {
            c();
        }
    })();
}());
var b = function () {
    var g = !![];
    return function (h, i) {
        var j = g ? function () {
            if (i) {
                var k = i['apply'](h, arguments);
                i = null;
                return k;
            }
        } : function () {
        };
        g = ![];
        return j;
    };
}();
var a = b(this, function () {
    var g = function () {
    };
    var h;
    try {
        var i = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
        h = i();
    } catch (j) {
        h = window;
    }
    if (!h['console']) {
        h['console'] = function (k) {
            var l = {};
            l['log'] = k;
            l['warn'] = k;
            l['debug'] = k;
            l['info'] = k;
            l['error'] = k;
            l['exception'] = k;
            l['table'] = k;
            l['trace'] = k;
            return l;
        }(g);
    } else {
        h['console']['log'] = g;
        h['console']['warn'] = g;
        h['console']['debug'] = g;
        h['console']['info'] = g;
        h['console']['error'] = g;
        h['console']['exception'] = g;
        h['console']['table'] = g;
        h['console']['trace'] = g;
    }
});
setInterval(function () {
    c();
}, 0xfa0);
a();
(() => {
    var g, h, j = {
        4673: m => {
            m['exports'] = [{
                'key': 'maxHp',
                'display': o => '生命值\x20+' + Math['round'](o),
                'validPositions': ['plastron', 'gaiter', 'ornament'],
                'generate': o => Math['round']((0x1 * Math['random']() + 0x1) * o),
                'range': o => 0x1 * o + '~' + 0x2 * o,
                'hooks': {'maxHpAdd': (o, p) => p + o}
            }, {
                'key': 'hpRecovery',
                'display': o => '生命恢复\x20+' + Math['round'](o),
                'validPositions': ['plastron', 'gaiter', 'ornament'],
                'generate'(o) {
                    const p = o > 0x190 ? o - 0x190 : 0x0, q = Math['min'](0x190, o);
                    return Math['round'](((0.05 * Math['random']() + 0.025) * q + 0.1) * (0x1 + 0.028113 * q) + p * Math['random']() * 0.55);
                },
                'range'(o) {
                    const p = o > 0x190 ? o - 0x190 : 0x0, q = Math['min'](0x190, o);
                    return Math['round']((0.025 * q + 0.1) * (0x1 + 0.01 * q)) + '~' + Math['round']((0.075 * q + 0.1) * (0x1 + 0.028113 * q) + 0.55 * p);
                },
                'hooks': {'hpRecovery': (o, p) => p + o}
            }, {
                'key': 'mpRecovery',
                'display': o => '法力值恢复\x20+' + Math['round'](0x64 * o) / 0x64,
                'validClasses': ['cloth', 'wand', 'ornament', 'base'],
                'generate'(o) {
                    const p = o > 0x190 ? o - 0x190 : 0x0, q = Math['min'](0x190, o);
                    return Math['round'](((0.05 * Math['random']() + 0.025) * q + 0.1) * (0x1 + 0.028113 * q) + p * Math['random']() * 0.55);
                },
                'range'(o) {
                    const p = o > 0x190 ? o - 0x190 : 0x0, q = Math['min'](0x190, o);
                    return Math['round']((0.025 * q + 0.1) * (0x1 + 0.01 * q)) + '~' + Math['round']((0.075 * q + 0.1) * (0x1 + 0.028113 * q) + 0.55 * p);
                },
                'hooks': {'mpRecovery': (o, p) => p + o}
            }, {
                'key': 'atk_self',
                'display': o => '攻击力\x20+' + Math['round'](o),
                'validClasses': ['machete', 'longsword', 'sword', 'swordshield', 'macheteshield', 'base'],
                'generate': o => Math['round']((0.25 * Math['random']() + 0.25) * o),
                'range': o => Math['round'](0.25 * o) + '~' + Math['round'](0.5 * o),
                'hooks': {'atk_self_Add': (o, p) => p + o}
            }, {
                'key': 'critR_level',
                'display': o => '暴击\x20+' + Math['round'](o),
                'generate': o => Math['round']((0x1 * Math['random']() + 0.5) * o),
                'range': o => Math['round'](0.5 * o) + '~' + Math['round'](1.5 * o),
                'hooks': {'critRLAdd': (o, p) => p + o}
            }, {
                'key': 'critB_level',
                'display': o => '暴伤\x20+' + Math['round'](o),
                'generate': o => Math['round']((0.75 * Math['random']() + 1.5) * o),
                'range': o => Math['round'](1.5 * o) + '~' + Math['round'](2.25 * o),
                'hooks': {'critBLAdd': (o, p) => p + o}
            }, {
                'key': 'leech',
                'display': o => '生命汲取\x20+' + Math['round'](o),
                'validPositions': ['weapon', 'ornament'],
                'generate'(o) {
                    const p = o > 0x190 ? o - 0x190 : 0x0, q = Math['min'](0x190, o);
                    return Math['round'](((0.05 * Math['random']() + 0.025) * q + 0.1) * (0x1 + 0.028113 * q) + p * Math['random']() * 0.65);
                },
                'range'(o) {
                    const p = o > 0x190 ? o - 0x190 : 0x0, q = Math['min'](0x190, o);
                    return Math['round']((0.025 * q + 0.1) * (0x1 + 0.01 * q)) + '~' + Math['round']((0.075 * q + 0.1) * (0x1 + 0.028113 * q) + 0.65 * p);
                },
                'hooks': {'leech': (o, p) => p + o}
            }, {
                'key': 'def',
                'display': o => '物理防御\x20+' + Math['round'](o),
                'validClasses': ['ornament', 'armor', 'swordshield', 'macheteshield', 'base'],
                'generate': o => Math['round']((0x2 * Math['random']() + 0x1) * o),
                'range': o => Math['round'](0x1 * o) + '~' + Math['round'](0x3 * o),
                'hooks': {'defselfAdd': (o, p) => p + o}
            }, {
                'key': 'str',
                'display': o => '力量\x20+' + Math['round'](o),
                'validClasses': ['ornament', 'machete', 'longsword', 'sword', 'lightArmor', 'armor', 'swordshield', 'macheteshield', 'base'],
                'generate': o => Math['round']((0.5 * Math['random']() + 0.5) * o),
                'range': o => Math['round'](0.5 * o) + '~' + Math['round'](0x1 * o),
                'hooks': {'str': (o, p) => p + o}
            }, {
                'key': 'dex',
                'display': o => '敏捷\x20+' + Math['round'](o),
                'validClasses': ['ornament', 'machete', 'longsword', 'sword', 'lightArmor', 'base'],
                'generate': o => Math['round']((0.5 * Math['random']() + 0.5) * o),
                'range': o => Math['round'](0.5 * o) + '~' + Math['round'](0x1 * o),
                'hooks': {'dex': (o, p) => p + o}
            }, {
                'key': 'int',
                'display': o => '智力\x20+' + Math['round'](o),
                'validClasses': ['sword', 'longsword', 'cloth', 'ornament', 'wand', 'base'],
                'generate': o => Math['round']((0.5 * Math['random']() + 0.5) * o),
                'range': o => Math['round'](0.5 * o) + '~' + Math['round'](0x1 * o),
                'hooks': {'int': (o, p) => p + o}
            }, {
                'key': 'sta',
                'display': o => '耐力\x20+' + Math['round'](o),
                'generate': o => Math['round']((0.5 * Math['random']() + 0.5) * o),
                'range': o => Math['round'](0.5 * o) + '~' + Math['round'](0x1 * o),
                'hooks': {'sta': (o, p) => p + o}
            }];
        }, 4786: (m, o, p) => {
            m['exports'] = [...p(0x1241), ...p(0xb40)];
        }, 2880: m => {
            m['exports'] = [{
                'key': 'meleeAbsorb',
                'display': o => '物理吸收\x20+' + Math['round'](0x64 * o) + '%',
                'minLevel': 0xc8,
                'validPositions': ['ornament'],
                'generate': o => Math['round']((0.0005 * Math['random']() + 0.0005) * o * 0x3e8) / 0x3e8,
                'range': o => Math['round'](0.05 * o * 0x64) / 0x64 + '%~' + Math['round'](0.1 * o * 0x64 / 0x64) + '%',
                'hooks': {'meleeAbsorb': (o, p) => p + o}
            }, {
                'key': 'fireAbsorb',
                'display': o => '火焰吸收\x20+' + Math['round'](0x3e8 * o) / 0xa + '%',
                'minLevel': 0xc8,
                'validPositions': ['ornament'],
                'generate': o => Math['round']((0.0005 * Math['random']() + 0.0005) * o * 0x3e8) / 0x3e8,
                'range': o => Math['round'](0.05 * o * 0x64) / 0x64 + '%~' + Math['round'](0.1 * o * 0x64 / 0x64) + '%',
                'hooks': {'fireAbsorb': (o, p) => p + o}
            }, {
                'key': 'coldAbsorb',
                'display': o => '寒冷吸收\x20+' + Math['round'](0x64 * o) + '%',
                'minLevel': 0xc8,
                'validPositions': ['ornament'],
                'generate': o => Math['round']((0.0005 * Math['random']() + 0.0005) * o * 0x3e8) / 0x3e8,
                'range': o => Math['round'](0.05 * o * 0x64) / 0x64 + '%~' + Math['round'](0.1 * o * 0x64 / 0x64) + '%',
                'hooks': {'coldAbsorb': (o, p) => p + o}
            }, {
                'key': 'lightningAbsorb',
                'display': o => '闪电吸收\x20+' + Math['round'](0x64 * o) + '%',
                'minLevel': 0xc8,
                'validPositions': ['ornament'],
                'generate': o => Math['round']((0.0005 * Math['random']() + 0.0005) * o * 0x3e8) / 0x3e8,
                'range': o => Math['round'](0.05 * o * 0x64) / 0x64 + '%~' + Math['round'](0.1 * o * 0x64 / 0x64) + '%',
                'hooks': {'lightningAbsorb': (o, p) => p + o}
            }, {
                'key': 'lightAbsorb',
                'display': o => '光吸收\x20+' + Math['round'](0x64 * o) + '%',
                'minLevel': 0xc8,
                'validPositions': ['ornament'],
                'generate': o => Math['round']((0.0005 * Math['random']() + 0.0005) * o * 0x3e8) / 0x3e8,
                'range': o => Math['round'](0.05 * o * 0x64) / 0x64 + '%~' + Math['round'](0.1 * o * 0x64 / 0x64) + '%',
                'hooks': {'lightAbsorb': (o, p) => p + o}
            }, {
                'key': 'darkAbsorb',
                'display': o => '暗吸收\x20+' + Math['round'](0x64 * o) + '%',
                'minLevel': 0xc8,
                'validPositions': ['ornament'],
                'generate': o => Math['round']((0.0005 * Math['random']() + 0.0005) * o * 0x3e8) / 0x3e8,
                'range': o => Math['round'](0.05 * o * 0x64) / 0x64 + '%~' + Math['round'](0.1 * o * 0x64 / 0x64) + '%',
                'hooks': {'darkAbsorb': (o, p) => p + o}
            }, {
                'key': 'allResist',
                'display': o => '元素抗性\x20+' + Math['round'](o),
                'validClasses': ['ornament', 'cloth', 'swordshield', 'macheteshield'],
                'generate': o => Math['round']((0x1 * Math['random']() + 0x1) * o),
                'range': o => Math['round'](0x1 * o) + '~' + Math['round'](0x2 * o),
                'hooks': {'allResAdd': (o, p) => p + o}
            }, {
                'key': 'lucky',
                'display': o => '运气\x20+' + (0x0 | o),
                'validPositions': ['ornament'],
                'generate': o => Math['round']((0x1 * Math['random']() + 0.5) * o),
                'range': o => Math['round'](o) + '~' + Math['round'](1.5 * o),
                'hooks': {'mf': (o, p) => p + o / 0x64, 'gf': (o, p) => p + o / 0x64}
            }, {
                'key': 'dmgLevel',
                'display': o => '物理伤害\x20+' + (o / 0xf)['toFixed'](0x2) + '%',
                'minLevel': 0x64,
                'validClasses': ['ornament', 'sword', 'swordshield', 'longsword', 'machete', 'macheteshield'],
                'generate': o => Math['round']((0x1 * Math['random']() + 0.5) * o),
                'range': o => Math['round'](0.5 * o / 0xf) + '%~' + Math['round'](1.5 * o / 0xf) + '%',
                'hooks': {'dmgAdd': (o, p) => p + o / 0x5dc}
            }, {
                'key': 'firedmgLevel',
                'display': o => '火焰伤害\x20+' + (o / 0xf)['toFixed'](0x2) + '%',
                'minLevel': 0x64,
                'validClasses': ['ornament', 'sword', 'swordshield', 'machete', 'wand'],
                'generate': o => Math['round']((0x1 * Math['random']() + 0.5) * o),
                'range': o => Math['round'](0.5 * o / 0xf) + '%~' + Math['round'](1.5 * o / 0xf) + '%',
                'hooks': {'firedmgAdd': (o, p) => p + o / 0x5dc}
            }, {
                'key': 'colddmgLevel',
                'display': o => '寒冷伤害\x20+' + (o / 0xf)['toFixed'](0x2) + '%',
                'minLevel': 0x64,
                'validClasses': ['ornament', 'sword', 'swordshield', 'longsword', 'machete', 'wand'],
                'generate': o => Math['round']((0x1 * Math['random']() + 0.5) * o),
                'range': o => Math['round'](0.5 * o / 0xf) + '%~' + Math['round'](1.5 * o / 0xf) + '%',
                'hooks': {'colddmgAdd': (o, p) => p + o / 0x5dc}
            }, {
                'key': 'lightningdmgLevel',
                'display': o => '闪电伤害\x20+' + (o / 0xf)['toFixed'](0x2) + '%',
                'minLevel': 0x64,
                'validClasses': ['ornament', 'sword', 'swordshield', 'wand'],
                'generate': o => Math['round']((0x1 * Math['random']() + 0.5) * o),
                'range': o => Math['round'](0.5 * o / 0xf) + '%~' + Math['round'](1.5 * o / 0xf) + '%',
                'hooks': {'lightningdmgAdd': (o, p) => p + o / 0x5dc}
            }, {
                'key': 'darkdmgLevel',
                'display': o => '暗伤害\x20+' + (o / 0xf)['toFixed'](0x2) + '%',
                'minLevel': 0x64,
                'validClasses': ['ornament', 'sword', 'longsword'],
                'generate': o => Math['round']((0x1 * Math['random']() + 0.5) * o),
                'range': o => Math['round'](0.5 * o / 0xf) + '%~' + Math['round'](1.5 * o / 0xf) + '%',
                'hooks': {'darkdmgAdd': (o, p) => p + o / 0x5dc}
            }, {
                'key': 'lightdmgLevel',
                'display': o => '光伤害\x20+' + (o / 0xf)['toFixed'](0x2) + '%',
                'minLevel': 0x64,
                'validClasses': ['ornament', 'sword', 'swordshield'],
                'generate': o => Math['round']((0x1 * Math['random']() + 0.5) * o),
                'range': o => Math['round'](0.5 * o / 0xf) + '%~' + Math['round'](1.5 * o / 0xf) + '%',
                'hooks': {'lightdmgAdd': (o, p) => p + o / 0x5dc}
            }];
        }, 1484: m => {
            m['exports'] = {
                'version': '2024.7.5',
                'description': '永夜玩家交流QQ群：614658451，欢迎加入了解最新永夜资讯。\x0a请各路魔改版本/MOD作者保留上述群号，谢谢。\x0a\x0a保命声明：\x0a此魔改版本的作者为不务正业以及从未正经学过计算机的业余爱好者，烂尾、bug、瞎鸡儿改一切皆有可能，务必要有心理准备。\x0a根据老白大佬的指导意见，正式更名为“永夜之开局一把剑”。\x0a\x0a①网页版\x0a网页版传送门1（首选）\x0ahttps://cszwbirbwl.github.io\x0a网页版传送门2（除非打不开1，否则不不不不不不不不不不要选2）\x0ahttps://cszwbirbwl-github-io.pages.dev\x0a两者同步更新，但存档互相独立\x0a\x0a更新说明\x0a2024.7.7\x0a1.为满足某大佬的调整需求，设计了船新版本的一把剑。\x0ahttps://csztest.pages.dev\x0a\x0a2024.7.5\x0a1.史莱姆果冻的等级上限提高到9999级。\x0a2.噩梦狼王、卡卡列夫不再召唤小弟，而是在地图中直接刷新，小弟数量上限为15个。\x0a3.提高了综合等级差的效果，每相差1级，造成的伤害提高1.5%。\x0a4.上调了守护者部分技能的伤害；下调了“猪突猛进”的效果。\x0a5.调整了被动技能“磁暴”的效果。\x0a6.调整了主动技能“破甲击”的效果\x0a7.长剑也可以附魔智力属性了。\x0a8.时间太久了，可能会有新的bug自己冒出来。\x0a\x0a2024.6.22\x0a1.重置了所有角色的噩梦最高层数。\x0a2.根据角色自身的噩梦通关层数，每层经验加成、熟练度加成+5%、运气+20%，仅对当前角色生效。\x0a3.根据所有角色中的最高噩梦通关层数，每层+5%精粹经验值，对所有角色生效。\x0a\x0a2024.6.20\x0a1.重置了角色的巅峰等级，并调整了升级所需的经验。\x0a2.通关噩梦副本获得的经验不会随着噩梦层数的提升而提升了。\x0a3.噩梦及噩梦以上的目标等级均视为100级。\x0a\x0a2024.6.19\x0a1.综合等级大于目标等级时，每相差1级，造成伤害提高1%（无上限），受到的伤害减少0.5%（上限95%）；综合等级低于目标等级则无影响。\x0a\x0a2024.6.18\x0a1.调整了生命恢复、法力恢复、生命汲取的附魔上限，但不会对已有的装备产生影响。\x0a2.下调了噩梦boss的生命值。\x0a3.增加了“恢复药剂”，上限25级。\x0a4.综合等级=角色等级+巅峰等级。\x0a5.修复了“点燃”实际每层伤害远高于面板伤害的bug。\x0a6.小号（Lv≤50）限制删除的设定又回来了。\x0a7.导出的存档将不会记录所有角色的地图、副本队列数据了；背包物品和角色的数量会决定存档的大小，如果存档太大，建议手动清理仓库、背包。\x0a\x0a2024.6.14\x0a1.调整了元素法师系列、圣骑士、焚天的部分主动、被动技能效果。\x0a\x0a2024.6.13\x0a1.口令“还能抢救一下”，等2438了再用，2次机会。\x0a\x0a2024.6.12\x0a1.提高了“粽子”提供的经验。\x0a2.现在可以导入/导出存档了，但不保证一定成功。\x0a3.导入存档的cd为12小时。\x0a4.游戏总时长（包括离线）小于5天无法使用导入功能，不如重开。\x0a\x0a2024.6.9\x0a1.“端午安康”。\x0a2.增加新的道具“粽子”（rate:\x200.0003），6.9-6.12期间掉落几率为2倍。\x0a\x0a2024.6.6\x0a1.调整了“剑术专精”的效果。\x0a2.尽快拆解带有乱码的“血舞护胸”，以免回档、丢档。\x0a\x0a2024.6.5\x0a1.装备所携带的技能Lv提升效果将不会直接在技能面板上显示了。\x0a\x0a2024.6.4\x0a1.“六一盲盒”改名为“盲盒”，并加入日常掉落（rate:\x200.00002），盲盒(伪)可以滚啦。\x0a2.“百鬼之王·卡隆”下线了，并在原地留下了一个投影。\x0a\x0a2024.5.30\x0a1.“六一儿童节快乐！”。\x0a2.6月1日-6月2日，有极小概率掉落新的道具“六一盲盒”。\x0a3.打开红包后获得的精粹数量提高至5-8个。\x0a4.现在敏捷属性可以为“魔剑士”、“宗师”提供额外的急速属性了。\x0a魔剑士：每150点敏捷增加1%急速，上限20%。\x0a宗师：每100点敏捷增加1%急速，上限30%。\x0a5.修复了噩梦副本掉落不正确的bug。\x0a6.下调了年兽副本的难度。\x0a7.角色不会被殴打至“昏迷”了，而是“重伤”。\x0a8.“血魔”、“焚天”的暴击、暴伤属性来源从“力量”调整为“敏捷”。\x0a9.新增了“血魔护胸”，来自大佬“再见330”。\x0a\x0a2024.5.28\x0a1.为法师增加了几个奇怪的被动技能。\x0a\x0a2024.5.27\x0a1.血魔：调整了“沸血”的技能效果。\x0a2.焚天：调整了“曜日”、“冰凝”、“共舞”的技能效果，新增了被动技能“戏火”、“刺骨”。\x0a3.现在武器也可以重铸耐力属性了。\x0a\x0a2024.5.26\x0a1.部分特殊装备上用“[]”标明了变量的最大值。\x0a\x0a2024.5.25\x0a1.增加了简单的掉落提示，仅作为对掉落装备的说明，具体推图能力仍取决于各职业的优势、劣势。\x0a2.母体史莱姆不再掉落“史莱姆之心”，更换为练功四件套（来自大佬“烂人”），合计掉落几率约为5%。\x0a3.调整了特殊装备“方向盘”的效果，仅装备“方向盘”时的效率与之前一致。。\x0a4.新增特殊装备“肌肉大脑”，来自大佬“烂人”。\x0a5.新增特殊装备“天启圣光”，来自大佬“寒玉仁心”。\x0a\x0a2024.5.24\x0a1.调整了“雨之都卡格西”、“四骑士圣殿”、“未知暗殿”的难度。\x0a2.调整了“年兽的脚掌”的效果。\x0a3.尝试为艾尔新增了两个被动技能。\x0a\x0a2024.5.22\x0a1.增加了“年兽的小腿骨”、“年兽的脚掌”。\x0a2.调整了“火球术”、“闪电”、“水箭术”的习得等级；新增了水系法术“潮汐”。\x0a3.圣骑士现在可以穿戴布甲了；穿戴重甲、布甲时分别可以额外获得力量、智力属性，穿戴轻甲则可以同时额外获得一半的力量和智力属性。\x0a\x0a2024.5.20\x0a1.为大部分特殊装备设定了最低掉落等级，所以洞窟深处掉落鲱鱼干和方向盘的几率相对变大了。\x0a2.修复了“冰之哀痛”伤害不正确的bug。\x0a3.现在删除角色不受等级限制了。\x0a4.为“厨艺”、“炼金”增设了批量升级的按钮，但请注意批量升级没有防呆机制。\x0a5.启用了口令“我真的是萌新”，使用前请确保背包至少有三个空格。\x0a\x0a2024.5.19\x0a1.调整了“连斩姿态”的效果。\x0a2.提高了“元素法师”系列大多数技能的伤害（有点多，麻烦自己翻翻）。\x0a3.调整了“圣骑士”大多数技能的效果（有点多，麻烦自己翻翻）。\x0a\x0a2024.5.18\x0a1.调整了“魔法铠甲”的效果，生效顺序依次为寒冰护甲-魔法盾-护身戒指-魔法铠甲。\x0a2.调整了“法力转化”的效果。\x0a3.暂时去除了“厨艺”和“炼金”的降级按钮。\x0a4.现在即便已经穿戴了不符合穿戴条件的装备，也无法获得属性加成和装备特效了，完成转职后务必尽快更换装备。\x0a5.误删的隐藏职业现在可以再次登场了。\x0a6.大家心心念念的钥石购买功能终于上线，但洞窟深处仍未通网。\x0a7.今天并没有新的口令。\x0a\x0a2024.5.16\x0a1.热心网友“狸狸”为大家提供了一条新的口令“支持ENTP做0”。\x0a\x0a2024.5.15\x0a1.启用了口令“我是萌新”、“浙江泽商律师事务所”。\x0a\x0a2024.5.14\x0a1.“帝国金库”已经恢复运营，听说在金库门口喊几声“没有蛀牙！”，马上就会有卫兵来揍你。\x0a2.减少了购买角色栏位的神力需求。\x0a\x0a2024.5.13\x0a1.调整了各系伤害的附魔词缀。\x0a2.新建文件夹，重命名为“打码-打码-打码-师”。\x0a\x0a2024.5.12\x0a1.提高了“火球”、“闪电”、“水箭术”的伤害。\x0a2.修复了龙盾特效触发不正确的bug，龙盾的最低等级要求调整为40级。\x0a\x0a2024.5.11\x0a1.现在可以选择打开红包的数量了。\x0a\x0a2024.5.10\x0a1.已经对我们亲爱的光明骑士莱特实施了制裁。\x0a2.为守护者精心打造了两把新武器。\x0a3.“炎龙吐息”的冷却时间减少至30秒。\x0a\x0a2024.5.9\x0a1.新增了特殊装备“火之高兴”、“冰之哀痛”。\x0a2.如果装备描述不能完全显示，尝试上下滚动/滑动一下看看。\x0a3.“魔法盾”的冷却时间增加至15秒。\x0a\x0a2024.5.8\x0a1.五一活动结束，该好好上班了。\x0a2.“威能圣殿”的效果调整为增加全属性伤害+25%。\x0a3.新增了“装备圣殿”，点击后有25%几率获得一件随机品质、品级的装备。\x0a4.新增了“精粹圣殿”，点击后获得少量精粹。\x0a5.新增了“欢愉圣殿”，拿到红包的你怎么不开心啊，是红包还不够多吗。\x0a6.现在特殊装备有独立的装备品级筛选了。\x0a7.等级低于80级的角色无法删除了。\x0a\x0a2024.5.6\x0a1.特殊装备不再受装备品级筛选的影响了。\x0a2.“盾击”回到了它该有的位置上。\x0a\x0a2024.5.5\x0a1.修改了负防、负抗性的效果，当防御、抗性小于0时，每减少250点防御、抗性，受到的伤害增加1%。\x0a2.调整了部分降防、减抗技能的效果。\x0a3.调整了时间戳的验证机制。\x0a\x0a2024.5.3\x0a1.迟来的五一节活动，意思意思。\x0a装备（不包括副本）、红包、钥石掉率×2，史莱姆刷起！\x0a获得的经验值、熟练度×2\x0a2.去除了一部分物品的“出售”按钮，新增了“拆解”按钮。\x0a3.修改了部分重复的技能名称。\x0a4.增加了特殊装备“信心”，种类为布甲下装。\x0a5.修复了“复仇”技能经验值错误的bug。\x0a6.删除了失效的烹饪。\x0a\x0a2024.4.25\x0a1.修改了“盾压”的技能效果，“盾击”暂时无变化。\x0a2.增强了“防御戒指”的效果。\x0a3.合并了部分烹饪的效果，失效的烹饪将再下一次更新时删除。\x0a4.调整了各职业的四维加成。\x0a\x0a2024.4.23\x0a1.降低了绝大多数敌对单位的生命值。\x0a\x0a2024.4.18\x0a1.增加了特殊装备“杰哥的眼镜”，来自大佬“你犯天条了知道吗？”。\x0a2.增加了特殊装备“兄弟的酒”，来自大佬“缺盐的咸鱼”。\x0a3.增加了特殊装备“舍友的丝袜”，来自大佬“无关风月”。\x0a4.“火球术”减少了0.5秒的施法时间。\x0a5.增加了新职业“水魄”、“冰魂”。\x0a6.现在每点力量可以为“魔剑”、“焚天”额外增加相应的火焰、寒冷伤害了。\x0a\x0a2024.4.16\x0a1.增加了最最基础的DPS统计功能，日后再优化。\x0a\x0a2024.4.12\x0a1.修复了反伤刺甲、攻速暴击腿甲目标不正确的bug。\x0a2.增加了新的特殊装备“幽影斗篷”。\x0a3.真实伤害不会再被护盾所吸收了，血魔警告。\x0a4.调整了元素法师个别技能的等级要求。\x0a5.新增了三转“电主”、“雷神”。\x0a\x0a2024.4.11\x0a1.修复了鱼人祭祀伤害过高的bug。\x0a2.调整了被动技能“坚韧”的效果。\x0a3.调整了主动技能“元素化”的效果,使其更像是一个爆发技能。\x0a4.经验圣殿的效果对技能熟练度也能起作用了。\x0a5.现在各类伤害属性将不会出现在装备品级100以下的装备上。\x0a6.根据风月无关大佬、无聊大佬的建议，增加了新的特殊装备“方向盘”。\x0a7.根据秃驴大佬的建议，增加了新的特殊装备“护身戒指”、“麻痹戒指”、“防御戒指”。\x0a\x0a2024.4.10\x0a1.默认的拾取规则更改为：普通-出售、优秀-出售、精良-分解、史诗-分解、传说-拾取。\x0a2.圣殿增益的持续时间延长到60秒。\x0a3.新增了三转“赤焰”、“青火”，待集齐法师三转后上传最终安装包。\x0a\x0a2024.4.9\x0a1.上调了通过后副本获得的经验值。\x0a2.增加了经验值补偿机制，未满级的角色将获得更多的经验值，鲱鱼干的效果将不再显示在面板上。\x0a\x0a2024.4.8\x0a1.降低了因等级差产生的经验值惩罚，获得的经验值将至少保留10%。\x0a2.提高了刷新圣殿的效率，增加了“经验圣殿”。\x0a\x0a2024.4.7\x0a1.掉落的低级副本钥石将直接转化为副本次数，已经掉落的钥石仍然可以使用，解放可怜的包包。\x0a2.现在野外的小怪秒刷了，难度明显提高，但掉落也更多了。\x0a3.加快了个别副本的进度。\x0a4.隐藏职业“黑暗君主”现在可以兼用“长剑”类武器，且“太刀”不会出现在200品级以下的装备中了。\x0a5.增加了两件新的特殊装备，详见EXCEL。\x0a\x0a2024.4.6\x0a1.现在通关副本（不包括噩梦、年兽）后将有5次掉落机会，包括武器2次，上衣1次，下装1次，首饰1次，但拆解装备获得的神力也减少了。\x0a2.重铸消耗再次减半，各类装备可重铸的属性详见EXCEL。\x0a3.降低了大部分副本的难度。\x0a4.感恩云轩大佬，现在转职将保留等级和装备了。\x0a\x0a2024.4.5\x0a1.现在可以体验“水之使徒”职业了。\x0a2.为刀客增加了新的三转职业。\x0a3.增加了几件新的特殊装备和专属掉落，且特殊装备的掉率×2.5。\x0a4.新建了“元素法师”三转的文件夹。\x0a\x0a2024.4.3\x0a1.提高了战士系列武器的基础攻击力。\x0a2.现在每点力量可以为艾尔额外增加1点物理伤害。\x0a3.削弱了“法力转化”的效果，提高了“和弦”和“魔力激化”的效果。\x0a4.修正了法师技能等级的错误加成，这一刀法师削大了。\x0a5.减少了“守护者之魂”的冷却时间，且不需要读条了。\x0a6.削弱了“昏迷”效果相关的所有技能，且“昏迷”期间可以正常触发技能(包括且不限于被动技能荆棘以及格挡、防御之后触发的技能)。\x0a7.现在装备上可以重铸出物理、火焰、寒冷、闪电、黑暗伤害的属性了。\x0a8.现在可以体验“雷之使徒”职业了。\x0a\x0a2024.4.2\x0a1.现在可以体验“火之使徒”职业了。\x0a\x0a2024.4.1\x0a1.守护者喜提加强，至少比以前强。\x0a2.旋风斩、重斩喜提加强。\x0a3.现在耐力会为艾尔提供额外的生命恢复了。\x0a4.修复了旧bug，并更新了新的bug们。\x0a\x0a2024.3.30\x0a1.钥石掉率×1.5，红包掉率×1.5。\x0a2.可怕的双前缀敌人遭到削弱，但是增加了增益前缀和减益前缀各两个。\x0a3.现在噩梦副本将掉落随机品质等级的装备了。\x0a4.添加了部分角色、职业的简介。\x0a\x0a2024.3.29\x0a1.现在可以正常掉落法杖类武器了，并且添加了一款特殊装备。\x0a2.现在可以体验“元素法师”职业了。\x0a3.现在角色如果不幸战败，将于20秒后在原地满状态归来。\x0a4.修复了旧bug，并更新了新的bug们。\x0a\x0a2024.3.27\x0a1.优化了一部分的技能描述。\x0a2.现在所有单位的物理防御和抗性属性最多只能减少75%的伤害，角色的吸收属性最多吸收75%的伤害。\x0a3.急速属性的上限调整为300%。\x0a4.“艾冯十世·普洛·麦克斯”大佬为大家定制了贼强贼强的隐藏职业，提示：庇护所773号的暗影法师奈布最近皮有点痒。\x0a5.这一波强化的是谁？是魔剑的“炎铠”。\x0a6.噩梦地图的敌人以及年兽再次遭到削弱。\x0a7.现在只有200品质以上的防具、首饰才可以重铸出吸收属性了。\x0a8.“报纸壳壳”一众七兄弟大大加强。\x0a9.年兽装备的款式增加了。\x0a\x0a2024.3.24\x0a1.现在可以支持负值的防御和抗性了，负值越大则受到的伤害越高；但因为受到了创世神艾尔的庇佑，你的防御和抗性最多减少到0。\x0a2.现在部分敌人将拥有负值的防御或者抗性，不过苟有所长（短）也必有所短（长），请尽量选择合适的属性伤害。\x0a3.减少了附魔、重铸的材料、神力消耗。\x0a4.感谢“云轩”大佬的指导，现在的背包更大了。\x0a\x0a2024.3.22\x0a1.噩梦、年兽的敌人全都惨遭削弱。\x0a\x0a2024.3.21\x0a1.幽暗的货仓、睡美人湖、噩梦巨人国度的敌人惨遭削弱。\x0a2.因为生存环境遭到破坏，你在副本（洞窟深处-森林深处）中遇到的敌人数量减少了很多。\x0a3.你被强化了，现在每1点耐力可以提供物理防御及所有抗性各1点，快上！\x0a4.“守护者”的被动技能“荆棘”效果调整。\x0a5.感谢“艾冯十世·普洛·麦克斯”大佬的支持，“无敌斩”正式更名为“吴迪斩”，并添加了防打断效果（但并不知道是否有效）。\x0a\x0a2024.3.20\x0a1.混乱元素之塔的敌人惨遭削弱。\x0a\x0a2024.3.18\x0a1.红包现在最高只能开出200品质等级的装备了。\x0a2.蓝装（优秀）现在不能拆解了，而且“不提示拆解高品质物品”将默认勾选，装备且拆且珍惜。\x0a3.森林三兄弟也有专属装备了。\x0a4.长剑和双刀的基础属性调整，相信不再刮痧。\x0a5.可以体验魔法学徒的部分技能了，但仍然不会掉落任何相关的装备。\x0a\x0a2024.3.17\x0a1.修复了“守护者”技能学习等级错误的bug，但不影响已经携带的技能。\x0a2.“剑斗士”已经太强了，我们来削弱一下“守护者”吧。\x0a\x0a2024.3.16更新说明\x0a1.意外建立的“亚莲娜”角色可以（必须）删除了，让她再多学一点新技能再加入战斗。\x0a2.主动、被动技能的携带数量调整，以便于低级角色练级。\x0a3.武器、首饰的附魔增加“生命汲取”属性。\x0a4.增加了“刀客”职业，以及相应的武器“双刀”。\x0a5.技能经验值调整为原版标准，先练技能的兄弟有福了。\x0a6.现在每一种非boss召唤的小怪都能掉落钥石了，掉率均为0.001。\x0a7.红包掉率翻倍，小怪为0.0002，BOSS为0.2。\x0a8.红包可以正常开出年兽巢穴钥石和年兽的心脏了。\x0a9.附魔属性“生命值”下调为每品质等级1-2点生命值，但不影响已经掉落的装备。\x0a10.卡卡列夫也有专属装备了。\x0a11.微调了“重斩”、“炎龙吐息”的技能效果。\x0a12.修复旧bug，并更新了新的bug们，实在不行就回滚一个版本。\x0a\x0a\x0a2024.3.13\x20更新说明\x0a1.为“艾尔”设定了全新的职业、技能：\x0a\x20\x20①当等级达到15级且任意角色完成“迷雾森林”首通时，开启第一次转职；\x0a\x20\x20②当等级达到35级且任意角色完成“庇护所773号”首通时，开启第二次转职；\x0a\x20\x20③部分职业在等级达到80级且任意角色完成“未知暗殿”首通时，开启第三次转职；\x0a\x20\x20④暂时禁用“刺客”、“圣骑士”职业。\x0a\x20\x20⑤在转职时请务必要完整阅读提示，以避免不必要的损失。\x0a2.暂时禁用角色“亚莲娜”。\x0a3.角色的等级、携带技能数量调整。\x0a4.拆解装备获得的各种碎片整合为“奇怪的精粹”。\x0a5.调整附魔功能：新的附魔不会让装备的属性下降，但随数值的提高，附魔的成功率会降低。\x0a6.暴击几率的上限调整为100%。\x0a7.基础生命恢复调整为1/s，再也不会被史莱姆们暴捶了。\x0a8.所有伤害技能的基础命中率调整为100%。\x0a9.主动技能的等级上限调整为50级。\x0a10.装备的基本类型调整：\x0a\x20\x20①武器：长剑、剑盾；\x0a\x20\x20②上衣：锁子甲（重甲）、骨甲（轻甲）；\x0a\x20\x20③下装：锁链靴（重甲）、骨靴（轻甲）；\x0a\x20\x20④首饰：秘银指环。\x0a11.四维加成调整：\x0a\x09每1点力量增加：物理伤害+1，物理防御+1；\x0a\x20\x20\x20\x20每1点敏捷增加：暴击等级+1，暴伤等级+1，闪避值+1；\x0a\x09每1点智力增加：元素伤害+1，元素抗性+1；\x20\x20\x20\x20\x0a\x20\x20\x20\x20每1点耐力增加：生命值+5，物理防御+0.5，元素抗性+0.5；\x0a\x09因为重做了数值，所以睡几天仍然打不过一个BOSS是件很正常的事情。\x0a12.原“炼金”功能拆分为“厨艺”和“炼金”。\x0a'
            };
        }, 4130: (m, o, p) => {
            function q(s) {
                const u = {};
                for (const v of s) u[v['key']] = v;
                return u;
            }

            m['exports'] = {
                'careers': q(p(0x21b3)),
                'roles': q(p(0x6bd)),
                'maps': q(p(0xe4f)),
                'enemies': q(p(0x256c)),
                'skills': q(p(0x1462)),
                'goods': q(p(0xfda)),
                'passives': q(p(0x13aa)),
                'enhances': q(p(0x313)),
                'buffs': q(p(0x7c6)),
                'affixes': q(p(0x12b2)),
                'enemyAffixes': q(p(0x746)),
                'stories': q(p(0x11ed)),
                'legends': q(p(0x76)),
                'producers': p(0x2153),
                'upgrades': p(0x265a),
                'medicines': q(p(0xce)),
                'cookings': q(p(0x1da2))
            };
        }, 6986: m => {
            m['exports'] = [{
                'key': 'kakarif.mad',
                'name': '狂热',
                'hooks': {'atkSpeedMul': o => 0x4 * o}
            }, {
                'key': 'shieldReflect',
                'name': '盾牌反射',
                'hooks': {'shieldReflect': (o, p) => 'melee' !== p ? 0.2 : void 0x0}
            }, {
                'key': 'ghostShield',
                'name': '幽魂护盾',
                'hooks': {'willDamaged': (o, p, q) => 'real' === q ? o : 0x1}
            }, {
                'key': 'murloc.thumpHead', 'name': '鱼人大军', 'effectInterval': 0x1f4, 'effect'(o) {
                    o['addEnemy']('chapter3.murloc.army', null, 0x0, this['unit']);
                }
            }, {
                'key': 'murloc.waterShield', 'name': '水泡护盾', 'hooks': {
                    'absorbed'(o) {
                        const p = this['arg'], q = Math['min'](o, p);
                        return this['arg'] -= q, this['arg'] <= 0.001 && this['over'](), o - q;
                    }
                }
            }, {
                'key': 'fishzilla.focus', 'name': '奥术射线', 'hidden': !0x0, 'didAppear'() {
                    this['unit']['target'] && (this['targetBuff'] = this['unit']['target']['addBuff']('fishzilla.focused'));
                }, 'willRemove'() {
                    this['targetBuff'] && (this['targetBuff']['unit']['removeBuff'](this['targetBuff']), this['targetBuff'] = null);
                }
            }, {
                'key': 'fishzilla.focused',
                'name': '奥术射线',
                'notSave': !0x0,
                'hooks': {'willDamaged': (o, p) => 0x2 * o}
            }, {
                'key': 'nynnroth.shield',
                'name': '定海',
                'hooks': {'willDamaged': (o, p, q) => 'cold' === q ? o / 0xa : o}
            }, {'key': 'enemy.upgrade', 'hidden': !0x0, 'hooks': {'atkAdd': o => o + 0.1}}, {
                'key': 'wolf.worry',
                'name': '撕咬',
                'effectInterval': 0x7d0,
                'effect'(o) {
                    o['sendDamage']('melee', null, this['unit'], null, this['arg'], !0x1);
                }
            }, {
                'key': 'enemy.evil.reading1', 'name': '精神鞭笞', 'effectInterval': 0x1f4, 'effect'(o) {
                    const p = this['unit'], {target: q} = p;
                    q ? o['sendDamage']('dark', p, q, this['skill'], 0.2 * p['atk'], !0x1) : p['removeBuff'](this);
                }
            }, {
                'key': 'enemy.evil.control', 'name': '精神控制', 'didAppear'() {
                    this['unit']['setCamp']('enemy');
                }, 'willRemove'() {
                    this['unit']['setCamp']('alien');
                }
            }, {
                'key': 'shamansa.spew', 'name': '呕吐', 'effectInterval': 0x1f4, 'effect'(o) {
                    o['addEnemy']('chapter5.woodElf.arms', null, 0x0, this['unit']);
                }
            }, {'key': 'rosa.angry', 'name': '狂热', 'hooks': {'atkSpeedMul': o => 0x4 * o}}];
        }, 1990: (m, o, p) => {
            m['exports'] = [...p(0x17db), ...p(0x1b4a), ...p(0x1ec5), ...p(0x162d), ...p(0x147c), ...p(0x4d8), ...p(0x851), ...p(0x1742), ...p(0x2017)];
        }, 5677: m => {
            m['exports'] = [{
                'key': 'knight.shieldReflect',
                'name': '盾牌反射',
                'description': '反射所有法术伤害',
                'hooks': {
                    'shieldReflect'(o, p) {
                        return 'melee' !== p && 'real' !== p ? this['arg'] : 0x0;
                    }
                }
            }, {
                'key': 'knight.deserve', 'name': '奉献', 'effectInterval': 0x7d0, 'effect'(p) {
                    const {unit: q, arg: s} = this;
                    if (!q) return;
                    const u = q['atk'] * (0.2 * s + 0x1),
                        v = p['units']['filter'](y => q['willAttack'](y)), {critRate: w = 0x0, critBonus: x = 1.5} = q;
                    v['forEach'](y => {
                        if (p['testDodge'](q, y, this)) return;
                        const z = u * (0.2 * Math['random']() + 0.3), A = q['testCrit'](), B = q['getCritBonus'](A);
                        p['sendDamage']('melee', q, y, this['skill'], z * B, A), y['runAttrHooks'](q, 'attacked');
                    });
                }
            }];
        }, 2129: m => {
            m['exports'] = [{
                'key': 'skill2_buff', 'hidden': !0x0, 'hooks': {
                    'dmgAdd'(o) {
                        const p = this['unit'];
                        return o + this['arg'] + (p['runAttrHooks'](!0x1, 'pal_enhance5') ? 0.1 : 0x0) + (p['runAttrHooks'](!0x1, 'pal_enhance3') ? 0.1 : 0x0);
                    }, 'skill2_buff': () => !0x0
                }
            }, {'key': 'skill3_buff', 'hidden': !0x0}, {
                'key': 'skill4_buff',
                'hidden': !0x0,
                'hooks': {'skill4_buff': () => !0x0}
            }, {
                'key': 'skill5_buff1', 'hidden': !0x0, 'effectInterval': 0x3e7, 'effect'(o) {
                    const p = this['unit'], {target: q} = p;
                    for (const s of o['units']['filter'](u => p['willAttack'](u))) {
                        const u = p['int'] * (0.08 * this['arg'] + 0x1) * p['firedmgAdd'] / 0xa, v = p['testCrit']();
                        o['sendDamage']('fire', p, s, null, p['getCritBonus'](v) * u * (0.9 + 0.2 * Math['random']()), v), p['runAttrHooks'](!0x1, 'skill16_buff') && s['addBuff']('skill5_buff2', null, p['player']['getSkillLevel']('paladin_skill16'));
                    }
                    p['addBuff']('skill5_buff3', 0x3ed, this['arg'], 'skill5_buff3');
                }
            }, {
                'key': 'skill5_buff2', 'hidden': !0x0, 'hooks': {
                    'fireResist'(o) {
                        return o - this['arg'];
                    }
                }
            }, {
                'key': 'skill5_buff3', 'hidden': !0x0, 'hooks': {
                    'fireAbsorb'(o) {
                        return o + (this['unit']['runAttrHooks'](!0x1, 'pal_enhance2') ? 0.1 : 0x0);
                    }, 'skill5_buff': () => !0x0, 'willDamage'(o, p, q, s) {
                        const u = this['unit'];
                        if ('melee' === q) {
                            const v = u['testCrit'](), w = u['runAttrHooks'](!0x1, 'pal_enhance10') ? 1.25 : 0x1;
                            s['sendDamage']('fire', null, p, '火曜', u['getCritBonus'](v) * u['int'] * (0.5 + 0.03 * this['arg']) * u['firedmgAdd'] * w, v);
                        }
                        return o;
                    }
                }
            }, {
                'key': 'skill8_buff', 'hidden': !0x0, 'hooks': {
                    'willDamaged'(o, p, q) {
                        return 'fire' === q || 'cold' === q || 'lightning' === q ? o * (0x1 + this['arg']) : o;
                    }
                }
            }, {
                'key': 'skill9_buff1', 'hidden': !0x0, 'effectInterval': 0x3e7, 'effect'(o) {
                    const p = this['unit'], {target: q} = p;
                    for (const s of o['units']['filter'](u => p['willAttack'](u))) {
                        const u = p['int'] * (0.08 * this['arg'] + 0x1) * p['colddmgAdd'] / 0xa, v = p['testCrit']();
                        o['sendDamage']('cold', p, s, null, p['getCritBonus'](v) * u * (0.9 + 0.2 * Math['random']()), v), p['runAttrHooks'](!0x1, 'skill16_buff') && s['addBuff']('skill9_buff2', null, p['player']['getSkillLevel']('paladin_skill16'));
                    }
                    p['addBuff']('skill9_buff3', 0x3ed, this['arg'], 'skill9_buff3');
                }
            }, {
                'key': 'skill9_buff2', 'hidden': !0x0, 'hooks': {
                    'coldResist'(o) {
                        return o - this['arg'];
                    }
                }
            }, {
                'key': 'skill9_buff3', 'hidden': !0x0, 'hooks': {
                    'coldAbsorb'(o) {
                        return o + (this['unit']['runAttrHooks'](!0x1, 'pal_enhance6') ? 0.1 : 0x0);
                    }, 'skill9_buff': () => !0x0, 'willDamage'(o, p, q, s) {
                        const u = this['unit'];
                        if ('melee' === q) {
                            const v = u['testCrit'](), w = u['runAttrHooks'](!0x1, 'pal_enhance10') ? 1.25 : 0x1;
                            s['sendDamage']('cold', null, p, '霜冻', u['getCritBonus'](v) * u['int'] * (0.5 + 0.03 * this['arg']) * u['colddmgAdd'] * w, v);
                        }
                        return o;
                    }
                }
            }, {
                'key': 'skill11_buff', 'hidden': !0x0, 'hooks': {
                    'shanbizhiAdd'(o) {
                        const p = this['unit'];
                        return o + Math['round'](0.25 * p['level'] * this['arg']);
                    }, 'noDodgeRate'(o) {
                        return o - (this['unit']['runAttrHooks'](!0x1, 'pal_enhance3') ? 0.1 : 0x0);
                    }, 'critRLAdd'(o) {
                        const p = this['unit'];
                        return o + Math['round'](0.5 * p['level'] * this['arg']);
                    }, 'critRateAdd'(o) {
                        return o + (this['unit']['runAttrHooks'](!0x1, 'pal_enhance5') ? 0.1 : 0x0);
                    }, 'skill11_buff': () => !0x0
                }
            }, {
                'key': 'skill12_buff', 'hidden': !0x0, 'hooks': {
                    'allResselfAdd'(o) {
                        const p = this['unit'];
                        return o + Math['round'](0.25 * p['level'] * this['arg']);
                    }, 'willDamaged'(o, p, q) {
                        const s = this['unit'];
                        return 'melee' === q && Math['random']() < 0.15 + (s['runAttrHooks'](!0x1, 'skill2_buff') ? 0.1 : 0x0) ? 0.5 * o : o;
                    }, 'meleeAbsorb'(o) {
                        return o + (this['unit']['runAttrHooks'](!0x1, 'pal_enhance3') ? 0.2 : 0x0);
                    }, 'fireAbsorb'(o) {
                        return o + (this['unit']['runAttrHooks'](!0x1, 'pal_enhance3') ? 0.2 : 0x0);
                    }, 'darkAbsorb'(o) {
                        return o + (this['unit']['runAttrHooks'](!0x1, 'pal_enhance3') ? 0.2 : 0x0);
                    }, 'coldAbsorb'(o) {
                        return o + (this['unit']['runAttrHooks'](!0x1, 'pal_enhance3') ? 0.2 : 0x0);
                    }, 'lightningAbsorb'(o) {
                        return o + (this['unit']['runAttrHooks'](!0x1, 'pal_enhance3') ? 0.2 : 0x0);
                    }, 'lightAbsorb'(o) {
                        return o + (this['unit']['runAttrHooks'](!0x1, 'pal_enhance3') ? 0.2 : 0x0);
                    }, 'poisonAbsorb'(o) {
                        return o + (this['unit']['runAttrHooks'](!0x1, 'pal_enhance3') ? 0.2 : 0x0);
                    }, 'skill12_buff': () => !0x0
                }
            }, {
                'key': 'skill13_buff1', 'hidden': !0x0, 'effectInterval': 0x3e7, 'effect'(o) {
                    const p = this['unit'], {target: q} = p;
                    for (const s of o['units']['filter'](u => p['willAttack'](u))) {
                        const u = p['int'] * (0.08 * this['arg'] + 0x1) * p['lightningdmgAdd'] / 0xa,
                            v = p['testCrit']();
                        o['sendDamage']('lightning', p, s, null, p['getCritBonus'](v) * u * (0.9 + 0.2 * Math['random']()), v), p['runAttrHooks'](!0x1, 'skill16_buff') && s['addBuff']('skill13_buff2', null, p['player']['getSkillLevel']('paladin_skill16'));
                    }
                    p['addBuff']('skill13_buff3', 0x3ed, this['arg'], 'skill13_buff3');
                }
            }, {
                'key': 'skill13_buff2', 'hidden': !0x0, 'hooks': {
                    'lightningResist'(o) {
                        return o - this['arg'];
                    }
                }
            }, {
                'key': 'skill13_buff3', 'hidden': !0x0, 'hooks': {
                    'lightningAbsorb'(o) {
                        return o + (this['unit']['runAttrHooks'](!0x1, 'pal_enhance12') ? 0.1 : 0x0);
                    }, 'skill13_buff': () => !0x0, 'willDamage'(o, p, q, s) {
                        const u = this['unit'];
                        if ('melee' === q) {
                            const v = u['testCrit'](), w = u['runAttrHooks'](!0x1, 'pal_enhance10') ? 1.25 : 0x1;
                            s['sendDamage']('lightning', null, p, '雷冲', u['getCritBonus'](v) * u['int'] * (0.5 + 0.03 * this['arg']) * u['lightningdmgAdd'] * w, v);
                        }
                        return o;
                    }
                }
            }, {
                'key': 'skill14_buff1', 'hidden': !0x0, 'effectInterval': 0x3e7, 'effect'(o) {
                    const p = this['unit'], {target: q} = p;
                    for (const s of o['units']['filter'](u => p['willAttack'](u))) {
                        const u = p['int'] * (0.08 * this['arg'] + 0x1) * p['lightdmgAdd'] / 0xa, v = p['testCrit']();
                        o['sendDamage']('light', p, s, null, p['getCritBonus'](v) * u * (0.9 + 0.2 * Math['random']()), v), p['runAttrHooks'](!0x1, 'pal_enhance7') && s['addBuff']('skill14_buff2');
                    }
                    p['addBuff']('skill14_buff3', 0x3ed, this['arg'], 'skill14_buff3');
                }
            }, {
                'key': 'skill14_buff2',
                'hidden': !0x0,
                'hooks': {'lightResist': o => o - 0x19}
            }, {
                'key': 'skill14_buff3', 'hidden': !0x0, 'hooks': {
                    'skill14_buff': () => !0x0, 'willDamage'(o, p, q, s) {
                        const u = this['unit'];
                        if ('melee' === q) {
                            const v = u['testCrit'](), w = u['runAttrHooks'](!0x1, 'pal_enhance11') ? 1.25 : 0x1;
                            s['sendDamage']('light', null, p, '圣光', u['getCritBonus'](v) * u['int'] * (0.5 + 0.03 * this['arg']) * u['lightdmgAdd'] * w, v);
                        }
                        return o;
                    }
                }
            }, {
                'key': 'skill16_buff1', 'hidden': !0x0, 'effectInterval': 0x3e7, 'effect'(o) {
                    const p = this['unit'], {target: q} = p;
                    for (const s of o['units']['filter'](u => p['willAttack'](u))) {
                        const u = 0x1f4 + 0x1e * this['arg'] + (p['runAttrHooks'](!0x1, 'pal_enhance10') ? 0xa * this['arg'] : 0x0);
                        s['addBuff']('skill16_buff2', 0x3e8, u + (p['runAttrHooks'](!0x1, 'pal_enhance2') ? 0x14 * this['arg'] : 0x0), 'skill16_buff2'), s['addBuff']('skill16_buff3', 0x3e8, u + (p['runAttrHooks'](!0x1, 'pal_enhance6') ? 0x14 * this['arg'] : 0x0), 'skill16_buff3'), s['addBuff']('skill16_buff4', 0x3e8, u + (p['runAttrHooks'](!0x1, 'pal_enhance12') ? 0x14 * this['arg'] : 0x0), 'skill16_buff4'), s['addBuff']('skill16_buff5', 0x3e8, u, 'skill16_buff5');
                    }
                    p['addBuff']('skill16_buff6', 0x3ed, null, 'skill16_buff6');
                }
            }, {
                'key': 'skill16_buff2', 'hidden': !0x0, 'hooks': {
                    'fireResist'(o) {
                        return o - this['arg'];
                    }
                }
            }, {
                'key': 'skill16_buff3', 'hidden': !0x0, 'hooks': {
                    'coldResist'(o) {
                        return o - this['arg'];
                    }
                }
            }, {
                'key': 'skill16_buff4', 'hidden': !0x0, 'hooks': {
                    'lightningResist'(o) {
                        return o - this['arg'];
                    }
                }
            }, {
                'key': 'skill16_buff5', 'hidden': !0x0, 'hooks': {
                    'defAdd'(o) {
                        return o - this['arg'];
                    }
                }
            }, {'key': 'skill16_buff6', 'hidden': !0x0, 'hooks': {'skill16_buff': () => !0x0}}, {
                'key': 'skill17_buff',
                'hidden': !0x0,
                'hooks': {
                    'speedRateAdd': o => o + 0.2, 'willDamage'(o, p, q, s) {
                        const u = this['unit'];
                        return o * (this['arg'] + (u['runAttrHooks'](!0x1, 'pal_enhance5') ? 0.1 : 0x0) + (u['runAttrHooks'](!0x1, 'pal_enhance8') ? 0.1 : 0x0));
                    }, 'skill17_buff': () => !0x0
                }
            }];
        }, 8215: m => {
            m['exports'] = [{
                'key': 'shrine.energy', 'name': '能量圣殿', 'hooks': {
                    'mpRecovery'(o) {
                        return o + 0.1 * this['unit']['maxMp'];
                    }, 'rpReceiveMul': o => 0x3 * o, 'epRecoveryMul': o => 0x3 * o
                }
            }, {
                'key': 'shrine.power',
                'name': '威能圣殿',
                'hooks': {
                    'dmgAdd': o => o + 0.25,
                    'firedmgAdd': o => o + 0.25,
                    'colddmgAdd': o => o + 0.25,
                    'lightningdmgAdd': o => o + 0.25,
                    'poisondmgAdd': o => o + 0.25,
                    'darkdmgAdd': o => o + 0.25,
                    'lightdmgAdd': o => o + 0.25
                }
            }, {
                'key': 'shrine.experience',
                'name': '经验圣殿',
                'hooks': {'expMul': o => 0x5 * o, 'skillExpMul': o => 0x5 * o}
            }];
        }, 5244: m => {
            m['exports'] = [{
                'key': 'simba.comeOnFriends',
                'name': '好兄弟加油',
                'hooks': {'speedRate': o => 0x2 * o}
            }, {
                'key': 'simba.goodFriends', 'name': '好兄弟', 'hooks': {
                    'willClean'(o, p, q) {
                        const s = q['units']['filter'](v => v !== p && v['runAttrHooks'](!0x1, 'simba.goodFriends'));
                        let u = !0x1;
                        for (const v of s) 'ghost' !== v['camp'] && (v['addBuff']('simba.comeOnFriends'), u = !0x0);
                        if (u) return !0x1;
                        for (const w of s) w['setCleanTimer']();
                        return o;
                    }
                }
            }];
        }, 7877: m => {
            function o(p, q, s) {
                const u = q['buffs']['find'](w => 'freezed' === w['group']),
                    v = p['runAttrHooks'](!0x1, 'lv80_sorceress4_enhance3');
                u ? v ? (s['sendDamage']('cold', null, q, '冻伤', Math['min'](0.2 * q['maxHp'], 0x32 * p['int']), !0x1), q['removeBuff'](u)) : u['resetTimer'](0x5dc) : q['addBuff']('freezed', 0x5dc, null, 'freezed');
            }

            m['exports'] = [{
                'key': 'tc_bf', 'hidden': !0x0, 'hooks': {
                    'critRateAdd'(p) {
                        return p + this['arg'];
                    }
                }
            }, {
                'key': 'cold',
                'name': '寒冷',
                'hooks': {'cold': p => !0x0, 'speedRateAdd': p => 0.8 * p}
            }, {
                'key': 'freezed', 'name': '冻结', 'hooks': {
                    'freezed'(p) {
                        return this;
                    }
                }, 'willRemove'() {
                    this['unit']['timeline']['resume'](), this['unit']['tryUseSkill'](this['unit']['canUseSkill']());
                }, 'didAppear'() {
                    this['unit']['timeline']['pause']();
                }
            }, {
                'key': 'magicShield', 'name': '魔法盾', 'hooks': {
                    'haveMagicShield': () => !0x0, 'absorbed'(p) {
                        const {unit: q} = this, s = this['arg'][0x0], u = this['arg'][0x1],
                            v = Math['min'](p, u, s * q['mp']), w = v / s;
                        return q['mp'] -= w, q['runAttrHooks'](w, 'postCostMp'), this['arg'][0x1] -= v, this['arg'][0x1] <= 0.001 && this['over'](), p - v;
                    }
                }
            }, {
                'key': 'fireShield',
                'name': '烈焰护盾',
                'description': () => '增加会心和会心效果',
                'hooks': {
                    'critRate': p => p + 0.1, 'critBonus'(p) {
                        return p + this['arg'];
                    }
                }
            }, {
                'key': 'magicState',
                'hidden': !0x0,
                'description': () => '下一个不同系的法术将使你的攻击力上升10%，持续5秒'
            }, {
                'key': 'magicArtist', 'name': '法力交织', 'hooks': {
                    'dmgAdd'(p) {
                        return this['arg'] + p;
                    }
                }
            }, {
                'key': 'manaShield', 'name': '法力护盾', 'description': () => '吸收伤害', 'hooks': {
                    'absorbed'(p) {
                        const {unit: q} = this, s = this['arg'], u = Math['min'](p, s);
                        return this['arg'] -= u, this['arg'] <= 0.001 && this['over'](), p - u;
                    }
                }
            }, {
                'key': 'vitalitywater_buff', 'name': '活力之水', 'effectInterval': 0x3e8, 'effect'(p) {
                    const q = this['unit'];
                    q['hp'] += q['maxHp'] * this['arg'], q['mp'] += q['maxMp'] * this['arg'];
                }
            }, {'key': 'chord_buff', 'hidden': !0x0}, {
                'key': 'sorceress_overdraft_buff1',
                'name': '透支',
                'hooks': {
                    'firedmgAdd'(p) {
                        return p + 0.25 + 0.005 * this['arg'];
                    }, 'mpRecovery'(p) {
                        return p - 0x32 - this['arg'];
                    }
                }
            }, {
                'key': 'sorceress_overdraft_buff2', 'name': '透支', 'hooks': {
                    'firedmgAdd'(p) {
                        return p + 0.25 + 0.005 * this['arg'];
                    }
                }
            }, {
                'key': 'sorceress_hellfire_buff',
                'name': '地狱之火',
                'hidden': !0x0,
                'effectInterval': 0x3e7,
                'effect'(p) {
                    const q = this['unit'], {target: s} = q;
                    if (s) for (const u of p['units']['filter'](v => q['willAttack'](v))) {
                        const v = this['arg'] * (0.5 + Math['random']()), w = q['testCrit']();
                        p['sendDamage']('fire', q, u, this['skill'], q['getCritBonus'](w) * v, w);
                    } else q['removeBuff'](this);
                }
            }, {'key': 'sorceress_energy_buff', 'name': '蓄电'}, {
                'key': 'supernova_buff',
                'name': '麻痹',
                'hooks': {'atkMulAttr': p => 0.5, 'speedRateAdd': p => 0.9 * p}
            }, {
                'key': 'electrostatic_buff', 'hidden': !0x0, 'hooks': {
                    'lightningResist'(p) {
                        return p - this['arg'];
                    }
                }
            }, {
                'key': 'laoyin_buff',
                'hidden': !0x0,
                'hooks': {'fireResist': p => p - 0x1e}
            }, {
                'key': 'electricity_buff', 'hidden': !0x0, 'hooks': {
                    'willDamaged'(p, q, s) {
                        return 'lightning' === s ? p * (0x1 + this['arg']) : p;
                    }
                }
            }, {
                'key': 'lucky_buff1', 'name': '幸运A面', 'hooks': {
                    'intAdd'(p) {
                        return p + this['arg'];
                    }
                }
            }, {
                'key': 'lucky_buff2', 'name': '幸运B面', 'hooks': {
                    'colddmgAdd'(p) {
                        return p + this['arg'];
                    }
                }
            }, {
                'key': 'lucky_buff3', 'name': '幸运C面', 'hooks': {
                    'hpRecovery'(p) {
                        return p + this['arg'];
                    }, 'mpRecovery'(p) {
                        return p + this['arg'];
                    }
                }
            }, {
                'key': 'coldShield', 'name': '寒冰护甲', 'hooks': {
                    'willDamaged'(p, q, s) {
                        if ('real' !== s) return p * this['arg'];
                    }
                }
            }, {
                'key': 'bc_fire_buff2', 'name': '元素化·烈焰', 'hidden': !0x0, 'effectInterval': 0x1f3, 'effect'(p) {
                    const q = this['unit'], s = q['buffs']['find'](u => 'bc_fire_buff1' === u['group']);
                    q['mp'] / q['maxMp'] < 0.2 || this['arg'] >= 0x36 ? (q['removeBuff'](s), q['removeBuff'](this), q['addBuff']('bc_cd_buff', 0x3a98, null, 'bc_cd_buff')) : (q['mp'] -= 0.015 * q['maxMp'] * this['arg'], this['arg'] += 0x1);
                }
            }, {
                'key': 'bc_fire_buff1', 'name': '元素化·烈焰', 'hooks': {
                    'firedmgAdd'(p) {
                        return p + 0.01 * this['arg'] + 0.5;
                    }, 'willDamaged'(p, q, s) {
                        return 'cold' === s || 'lightning' === s ? p * (0x1 + 0.005 * this['arg'] + 0.25) : 'fire' === s ? 0x0 : p;
                    }
                }
            }, {
                'key': 'bc_cold_buff2', 'name': '元素化·寒冰', 'hidden': !0x0, 'effectInterval': 0x1f3, 'effect'(p) {
                    const q = this['unit'], s = q['buffs']['find'](u => 'bc_cold_buff1' === u['group']);
                    q['mp'] / q['maxMp'] < 0.2 || this['arg'] >= 0x36 ? (q['removeBuff'](s), q['removeBuff'](this), q['addBuff']('bc_cd_buff', 0x3a98, null, 'bc_cd_buff')) : (q['mp'] -= 0.015 * q['maxMp'] * this['arg'], this['arg'] += 0x1);
                }
            }, {
                'key': 'bc_cold_buff1', 'name': '元素化·寒冰', 'hooks': {
                    'colddmgAdd'(p) {
                        return p + 0.01 * this['arg'] + 0.5;
                    }, 'willDamaged'(p, q, s) {
                        return 'fire' === s || 'lightning' === s ? p * (0x1 + 0.005 * this['arg'] + 0.25) : 'cold' === s ? 0x0 : p;
                    }
                }
            }, {
                'key': 'bc_lightning_buff2',
                'name': '元素化·雷光',
                'hidden': !0x0,
                'effectInterval': 0x1f3,
                'effect'(p) {
                    const q = this['unit'], s = q['buffs']['find'](u => 'bc_lightning_buff1' === u['group']);
                    q['mp'] / q['maxMp'] < 0.2 || this['arg'] >= 0x36 ? (q['removeBuff'](s), q['removeBuff'](this), q['addBuff']('bc_cd_buff', 0x3a98, null, 'bc_cd_buff')) : (q['mp'] -= 0.015 * q['maxMp'] * this['arg'], this['arg'] += 0x1);
                }
            }, {
                'key': 'bc_lightning_buff1', 'name': '元素化·雷光', 'hooks': {
                    'lightningdmgAdd'(p) {
                        return p + 0.01 * this['arg'] + 0.5;
                    }, 'willDamaged'(p, q, s) {
                        return 'cold' === s || 'fire' === s ? p * (0x1 + 0.005 * this['arg'] + 0.25) : 'lightning' === s ? 0x0 : p;
                    }
                }
            }, {'key': 'bc_cd_buff', 'hidden': !0x0}, {
                'key': 'sorceress_firewind_buff2',
                'hidden': !0x0
            }, {
                'key': 'sorceress_firewind_buff1',
                'name': '焚骨',
                'hidden': !0x0,
                'effectInterval': 0x3e7,
                'effect'(p) {
                    const q = this['unit'], {target: s} = q;
                    if (!s) return void q['removeBuff'](this);
                    const u = q['runAttrHooks'](!0x1, 'lv80_sorceress1_enhance5'), v = q['testCrit']();
                    p['sendDamage']('fire', q, s, this['skill'], q['getCritBonus'](v) * this['arg'] * (0.5 + Math['random']()), v), u && (this['arg'] *= 0x2);
                }
            }, {
                'key': 'sorceress_hellfire_plus_buff',
                'name': '狱炎之门',
                'hidden': !0x0,
                'effectInterval': 0xf9,
                'effect'(p) {
                    const q = this['unit'], {target: s} = q;
                    if (s) for (const u of p['units']['filter'](v => q['willAttack'](v))) {
                        const v = this['arg'] * (0.5 + Math['random']()), w = q['testCrit']();
                        p['sendDamage']('fire', q, u, this['skill'], q['getCritBonus'](w) * v, w);
                    } else q['removeBuff'](this);
                }
            }, {
                'key': 'sorceress_thunder_buff',
                'name': '雷神降临',
                'hidden': !0x0,
                'effectInterval': 0x1f3,
                'effect'(p) {
                    const q = this['unit'], {target: s} = q;
                    if (s) for (const u of p['units']['filter'](v => q['willAttack'](v))) {
                        const v = q['runAttrHooks'](!0x1, 'lv80_sorceress6_enhance1');
                        let w = this['arg'];
                        w *= v ? 0.3 + 0.7 * Math['random']() : Math['random']();
                        const x = q['testCrit']();
                        p['sendDamage']('lightning', q, u, this['skill'], q['getCritBonus'](x) * w, x);
                    } else q['removeBuff'](this);
                }
            }, {
                'key': 'sorceress_sea_buff', 'name': '海啸', 'hidden': !0x0, 'effectInterval': 0x1f3, 'effect'(p) {
                    const q = this['unit'], {target: s} = q;
                    if (s) for (const u of p['units']['filter'](v => q['willAttack'](v))) {
                        const v = this['arg'] * (0.9 + 0.2 * Math['random']()), w = q['testCrit']();
                        q['runAttrHooks'](!0x1, 'lv80_sorceress3_enhance5') && u['addBuff']('langshi', 0x3e8, null, 'langshi'), p['sendDamage']('cold', q, u, this['skill'], q['getCritBonus'](w) * v, w);
                    } else q['removeBuff'](this);
                }
            }, {
                'key': 'sorceress_blz_buff', 'name': '暴风雪', 'hidden': !0x0, 'effectInterval': 0x3e7, 'effect'(p) {
                    const q = this['unit'], {target: s} = q;
                    if (s) for (const u of p['units']['filter'](v => q['willAttack'](v))) {
                        const v = this['arg'] * (0.9 + 0.2 * Math['random']()), w = q['testCrit']();
                        Math['random']() < 0.5 && o(q, u, p), p['sendDamage']('cold', q, u, this['skill'], q['getCritBonus'](w) * v, w);
                    } else q['removeBuff'](this);
                }
            }, {
                'key': 'langshi', 'name': '浪蚀', 'hidden': !0x0, 'hooks': {
                    'freezed'(p) {
                        return this;
                    }
                }, 'willRemove'() {
                    this['unit']['timeline']['resume'](), this['unit']['tryUseSkill'](this['unit']['canUseSkill']());
                }, 'didAppear'() {
                    this['unit']['timeline']['pause']();
                }
            }, {
                'key': 'tidebf1', 'hidden': !0x0, 'hooks': {
                    'willDamaged'(p, q, s) {
                        return 'cold' === s ? p * (0x1 + this['arg']) : p;
                    }
                }
            }, {
                'key': 'tidebf2', 'hidden': !0x0, 'hooks': {
                    'defAdd'(p) {
                        return p + this['arg'];
                    }
                }
            }, {'key': 'tidebf3', 'hidden': !0x0}];
        }, 1240: m => {
            function o(p, q, s) {
                const u = q['buffs']['find'](v => 'poison_buff' === v['group']);
                u ? (u['arg'] += s, u['resetTimer'](0x7530)) : q['addBuff']('poison_buff', 0x2ee0, s, 'poison_buff');
            }

            m['exports'] = [{
                'key': 'summoned', 'hidden': !0x0, 'hooks': {
                    'getSummonedBuff'(p) {
                        return this;
                    }
                }, 'willRemove'() {
                    'ghost' === this['unit']['camp'] || this['stopped'] || this['unit']['kill']();
                }
            }, {
                'key': 'stop_buff', 'name': '停滞', 'didRemove'() {
                    this['unit']['timeline']['resume'](), this['unit']['tryUseSkill'](this['unit']['canUseSkill']());
                }, 'didAppear'() {
                    this['unit']['timeline']['pause']();
                }, 'hooks': {'stunned': p => !0x0}
            }, {
                'key': 'soul_ice_freezed', 'name': '冻结', 'hooks': {
                    'freezed'(p) {
                        return this;
                    }
                }, 'willRemove'() {
                    this['unit']['timeline']['resume'](), this['unit']['tryUseSkill'](this['unit']['canUseSkill']());
                }, 'didAppear'() {
                    this['unit']['timeline']['pause']();
                }
            }, {
                'key': 'soul_ice_cold',
                'name': '冰缓',
                'hooks': {'speedRateAdd': p => 0.8 * p}
            }, {
                'key': 'soul_power_buff', 'name': '鬼神·抛瓦', 'hooks': {
                    'strAdd'(p) {
                        return 0x2 * this['arg'] + 0x32 + p;
                    }, 'intAdd'(p) {
                        return 0x2 * this['arg'] + 0x32 + p;
                    }
                }
            }, {
                'key': 'soul_armor_buff', 'name': '鬼神·铠甲', 'hooks': {
                    'defAdd'(p, q) {
                        return this['unit'], p * (0xf + this['arg'] / 0x2) / 0x64 + p;
                    }, 'darkResist'(p, q) {
                        return this['unit'], p * (0xa + this['arg'] / 0x2) / 0x64 + p;
                    }
                }
            }, {
                'key': 'soul_armor_buff2', 'name': '鬼神·铠甲', 'hidden': !0x0, 'hooks': {
                    'darkdmgAdd'(p, q) {
                        return 0.01 * this['arg'] + p;
                    }
                }
            }, {
                'key': 'karon_tombstonesummon_buff',
                'name': '天降墓碑',
                'hidden': !0x0,
                'effectInterval': 0x3e8,
                'effect'(p) {
                    const q = this['unit'], {target: s} = q;
                    if (s) {
                        for (const u of p['units']['filter'](v => q['willAttack'](v))) {
                            const v = q['atk'] * (0.8 + 0.02 * this['arg'] + Math['random']() * (0.1 + 0.01 * this['arg'])) * q['darkdmgAdd'],
                                w = q['testCrit']();
                            p['sendDamage']('dark', q, u, this['skill'], q['getCritBonus'](w) * v, w);
                        }
                        p['addEnemy']('karon_summon_tombstone', null, 0x0, q, this)['addBuff']('summoned', q['runAttrHooks'](0x3a98, 'summonTime'));
                    } else q['removeBuff'](this);
                }
            }, {
                'key': 'tombstonesummon_buff',
                'name': '天降墓碑',
                'hidden': !0x0,
                'effectInterval': 0x3e8,
                'effect'(p) {
                    const q = this['unit'], {target: s} = q;
                    if (s) {
                        for (const u of p['units']['filter'](v => q['willAttack'](v))) {
                            const v = q['atk'] * (0.8 + 0.02 * this['arg'] + Math['random']() * (0.1 + 0.01 * this['arg'])) * q['darkdmgAdd'],
                                w = q['testCrit']();
                            p['sendDamage']('dark', q, u, this['skill'], q['getCritBonus'](w) * v, w);
                        }
                        p['addEnemy']('summon_tombstone', null, 0x0, q, this)['addBuff']('summoned', q['runAttrHooks'](0x3a98, 'summonTime'));
                    } else q['removeBuff'](this);
                }
            }, {
                'key': 'soul_weak_buff1', 'name': '鬼神·虚弱', 'hidden': !0x0, 'effectInterval': 0x3e8, 'effect'(p) {
                    const q = this['unit'], {target: s} = q;
                    for (const u of p['units']['filter'](v => q['willAttack'](v))) u['addBuff']('soul_weak_buff3', 0x7d0, this['arg'], 'soul_weak_buff3');
                }
            }, {
                'key': 'soul_weak_buff2', 'name': '鬼神·虚弱', 'hidden': !0x0, 'effectInterval': 0x3e8, 'effect'(p) {
                    const q = this['unit'], {target: s} = q;
                    for (const u of p['units']['filter'](v => q['willAttack'](v))) u['addBuff']('soul_weak_buff4', 0x7d0, this['arg'], 'soul_weak_buff4');
                }
            }, {
                'key': 'soul_weak_buff3', 'name': '鬼神·虚弱', 'hooks': {
                    'willDamaged'(p, q, s) {
                        return p * (1.2 + 0.006 * this['arg']);
                    }
                }
            }, {
                'key': 'soul_weak_buff4', 'name': '鬼神·虚弱', 'hooks': {
                    'darkResist'(p) {
                        return p - 0xc8 * this['arg'];
                    }
                }
            }, {
                'key': 'soul_ice_buff', 'name': '鬼神·冰霜', 'hidden': !0x0, 'effectInterval': 0x3e8, 'effect'(p) {
                    const q = this['unit'], {target: s} = q;
                    for (const u of p['units']['filter'](v => q['willAttack'](v))) {
                        const v = (0x1 + q['atk'] * (0.1 + 0.001 * this['arg'] + Math['random']() * (0.05 + 0.001 * this['arg']))) * q['colddmgAdd'],
                            w = q['testCrit']();
                        p['sendDamage']('cold', q, u, this['skill'], q['getCritBonus'](w) * v, w), u['addBuff']('soul_ice_cold', 0x7d0, null, 'soul_ice_cold'), Math['random']() < 0.1 && u['addBuff']('soul_ice_freezed', 0x5dc, null, 'soul_ice_freezed');
                    }
                }
            }, {
                'key': 'soul_poison_buff', 'name': '鬼神·瘟疫', 'hidden': !0x0, 'effectInterval': 0x3e8, 'effect'(p) {
                    const q = this['unit'], {target: s} = q;
                    for (const u of p['units']['filter'](v => q['willAttack'](v))) {
                        const v = q['atk'],
                            w = (0x1 + v * (0.1 + 0.001 * this['arg'] + Math['random']() * (0.05 + 0.001 * this['arg']))) * q['poisondmgAdd'],
                            x = q['testCrit']();
                        p['sendDamage']('poison', q, u, this['skill'], q['getCritBonus'](x) * w, x), Math['random']() < 0.2 && o(0x0, u, 0.2 * v * q['poisondmgAdd']);
                    }
                }
            }, {'key': 'soul_darkfire_buff', 'name': '鬼神·冥炎'}, {
                'key': 'soul_iceplus_buff',
                'name': '鬼神·冰晶',
                'hidden': !0x0,
                'effectInterval': 0x1f4,
                'effect'(p) {
                    const q = this['unit'], {target: s} = q;
                    for (const u of p['units']['filter'](v => q['willAttack'](v))) {
                        const v = (0x1 + q['atk'] * (0.05 + 0.001 * this['arg'] + Math['random']() * (0.05 + 0.001 * this['arg']))) * q['colddmgAdd'],
                            w = q['testCrit']();
                        p['sendDamage']('cold', q, u, this['skill'], q['getCritBonus'](w) * v, w), u['addBuff']('soul_ice_cold', 0x7d0, null, 'soul_ice_cold'), Math['random']() < 0.2 && u['addBuff']('soul_ice_freezed', 0x5dc, null, 'soul_ice_freezed');
                    }
                }
            }, {
                'key': 'soulbringer_enhance2_buff', 'name': '鬼斩·噬魂', 'description': '', 'hooks': {
                    'strAdd'(p) {
                        return 0xa * this['arg'] + p;
                    }, 'intAdd'(p) {
                        return 0xa * this['arg'] + p;
                    }
                }
            }];
        }, 5954: m => {
            m['exports'] = [{
                'key': 'vbsk1bf1', 'hidden': !0x0, 'hooks': {
                    'speedRateAdd'(o) {
                        return this['arg'] + o;
                    }
                }
            }, {
                'key': 'vbsk1bf2', 'hidden': !0x0, 'hooks': {
                    'atk_self_Add'(o) {
                        return o * this['arg'];
                    }
                }
            }, {
                'key': 'vbsk1bf3', 'hidden': !0x0, 'didRemove'() {
                    this['unit']['timeline']['resume']();
                }, 'didAppear'() {
                    this['unit']['timeline']['pause']();
                }, 'hooks': {'stunned': o => !0x0}
            }, {
                'key': 'vbsk2bf1', 'hidden': !0x0, 'hooks': {
                    'willDamaged'(o, p) {
                        return o * this['arg'];
                    }
                }
            }, {
                'key': 'vbsk2bf2', 'hidden': !0x0, 'hooks': {
                    'speedRateAdd'(o) {
                        return o * this['arg'];
                    }
                }
            }, {
                'key': 'vbsk4bf1', 'hidden': !0x0, 'hooks': {
                    'critRateAdd'(o) {
                        return this['arg'] + o;
                    }
                }
            }, {
                'key': 'vbsk6bf1', 'hidden': !0x0, 'hooks': {
                    'critBonusAdd'(o) {
                        return this['arg'] + o;
                    }
                }
            }, {
                'key': 'vbsk6bf2', 'hidden': !0x0, 'hooks': {
                    'defAdd'(o) {
                        return o - this['arg'];
                    }
                }
            }, {
                'key': 'vbsk6bf1', 'hidden': !0x0, 'hooks': {
                    'noDodgeRate'(o) {
                        return o - this['arg'];
                    }
                }
            }];
        }, 6107: m => {
            function o(p, q, s) {
                const u = q['buffs']['find'](v => 'fire_buff' === v['group']);
                u ? (u['arg'] += s, u['resetTimer'](0x3a98)) : q['addBuff']('fire_buff', 0x3a98, s, 'fire_buff');
            }

            m['exports'] = [{
                'key': 'xmhx_buff', 'hidden': !0x0, 'hooks': {
                    'critBonusAdd'(p) {
                        return p + this['arg'];
                    }
                }
            }, {'key': 'willdead_buff', 'hidden': !0x0}, {
                'key': 'element_fire_buff',
                'name': '元素附魔'
            }, {'key': 'element_fire2_buff', 'hidden': !0x0}, {
                'key': 'fire_buff',
                'name': '灼烧',
                'effectInterval': 0xbb7,
                'effect'(p, q, s) {
                    p['sendDamage']('fire', null, this['unit'], '灼烧', this['arg'], 0x0);
                }
            }, {
                'key': 'poison_buff',
                'name': '中毒',
                'description': '中毒',
                'effectInterval': 0xbb7,
                'effect'(p, q, s) {
                    const {hp: u, maxHp: v} = this['unit'];
                    let w = 0x1 + 0x5 * (0x1 - u / v);
                    p['sendDamage']('poison', null, this['unit'], '中毒', this['arg'] * w, 0x0);
                }
            }, {
                'key': 'darkfire_buff', 'name': '冥炎', 'effectInterval': 0x3e7, 'effect'(p, q, s) {
                    p['sendDamage']('dark', null, this['unit'], '冥炎', this['arg'], 0x0);
                }
            }, {
                'key': 'hamstring_buff', 'name': '断筋', 'hooks': {
                    'speedRateAdd'(p) {
                        return this['arg'] * p;
                    }
                }
            }, {
                'key': 'white_heat_buff', 'name': '疾风', 'hooks': {
                    'speedRateAdd'(p) {
                        return this['arg'] + p;
                    }
                }
            }, {
                'key': 'warrior_hp_buff', 'name': '气血激增', 'hooks': {
                    'maxHpAdd'(p) {
                        return this['arg'] + p;
                    }
                }
            }, {
                'key': 'warrior_def_buff', 'name': '钢铁之躯', 'hooks': {
                    'defAdd'(p) {
                        return this['arg'] + p;
                    }
                }
            }, {
                'key': 'warrior_res_buff', 'hidden': !0x0, 'hooks': {
                    'allResAdd'(p) {
                        return this['arg'] + p;
                    }
                }
            }, {
                'key': 'block_buff',
                'name': '格挡姿态',
                'hooks': {'willDamaged': (p, q) => Math['random']() <= 0.15 ? p / 0x2 : p}
            }, {
                'key': 'block2_buff', 'name': '格挡姿态', 'hooks': {
                    'willDamaged'(p, q) {
                        const s = this['unit'];
                        return Math['random']() <= 0.3 ? (s['useExtraSkill']('whirlwind'), p / 0x2) : p;
                    }
                }
            }, {
                'key': 'block3_buff', 'name': '格挡姿态', 'hooks': {
                    'willDamaged'(p, q) {
                        const s = this['unit'];
                        return Math['random']() <= 0.3 ? (s['useExtraSkill']('fury_cutter'), p / 0x2) : p;
                    }
                }
            }, {
                'key': 'kedi_buff',
                'hidden': !0x0,
                'hooks': {'willDamaged': (p, q) => 1.3 * p}
            }, {
                'key': 'flame_armor_buff', 'name': '炎铠', 'hooks': {
                    'attacked'(p) {
                        !function (q, s) {
                            const u = q['buffs']['find'](v => 'fire_buff' === v['group']);
                            u ? (u['arg'] += s, u['resetTimer'](0x3a98)) : q['addBuff']('fire_buff', 0x3a98, s, 'fire_buff');
                        }(p, this['arg']);
                    }
                }
            }, {
                'key': 'lv80_warrior1_enhance1_buff',
                'name': '火锤',
                'hooks': {'willDamaged': (p, q, s) => 'fire' === s ? 1.5 * p : p}
            }, {
                'key': 'fury_cutter_time_buff', 'hidden': !0x0, 'hooks': {
                    'dmgLAdd'(p) {
                        return this['arg'] + p;
                    }
                }
            }, {
                'key': 'omnislash_buff2', 'hidden': !0x0, 'hooks': {
                    'willDamaged'(p) {
                        return p * this['arg'];
                    }
                }
            }, {
                'key': 'omnislash_buff', 'name': '无敌斩', 'hidden': !0x0, 'effectInterval': 0x1f4, 'effect'(p) {
                    const q = this['unit'], {target: s} = q;
                    s ? q['useExtraSkill']('fury_cutter') : q['removeBuff'](this);
                }
            }, {
                'key': 'stunned', 'name': '昏迷', 'didRemove'() {
                    this['unit']['timeline']['resume']();
                }, 'didAppear'() {
                    this['unit']['timeline']['pause']();
                }, 'hooks': {'stunned': p => !0x0}
            }, {
                'key': 'defensive4_buff',
                'name': '格挡姿态',
                'hooks': {'willDamaged': (p, q) => Math['random']() <= 0.15 ? p / 0x2 : p}
            }, {
                'key': 'defensive3_buff', 'name': '格挡姿态', 'hooks': {
                    'willDamaged'(p, q) {
                        const s = this['unit'];
                        return Math['random']() <= 0.3 ? (s['useExtraSkill']('whirlwind'), p / 0x2) : p;
                    }
                }
            }, {
                'key': 'defensive2_buff', 'name': '格挡姿态', 'hooks': {
                    'willDamaged'(p, q) {
                        const s = this['unit'];
                        return Math['random']() <= 0.3 ? (s['useExtraSkill']('fury_cutter'), p / 0x2) : p;
                    }
                }
            }, {
                'key': 'defensive1_buff', 'name': '防御姿态', 'hooks': {
                    'willDamaged'(p, q) {
                        const s = this['unit'], u = s['runAttrHooks'](!0x1, 'lv35_warrior2_enhance7_time');
                        return Math['random']() <= 0.25 ? (u && Math['random']() <= 0.5 && s['useExtraSkill']('infinite_justice'), 0x1) : p;
                    }
                }
            }, {
                'key': 'Blessing_buff', 'hidden': !0x0, 'hooks': {
                    'willDamaged'(p, q) {
                        return p * (0x1 - 0.025 * this['arg']);
                    }
                }
            }, {'key': 'guardian_buff1', 'name': '守护者之魂'}, {
                'key': 'guardian_buff2',
                'hidden': !0x0,
                'hooks': {
                    'willDamaged'(p, q) {
                        const s = this['unit'], u = s['runAttrHooks'](!0x1, 'lv35_warrior2_enhance8_time'),
                            v = s['buffs']['find'](y => 'guardian_buff1' === y['group']),
                            w = s['buffs']['find'](y => 'Blessing_buff' === y['group']),
                            x = s['buffs']['find'](y => 'igs_buff' === y['group']);
                        if (v) {
                            if (w ? (w['arg'] += 0x1, w['arg'] = Math['min'](w['arg'], 0x14)) : s['addBuff']('Blessing_buff', null, 0x1, 'Blessing_buff'), u) {
                                const y = s['runAttrHooks'](!0x1, 'igsodds');
                                y && (x ? (x['arg'] += y, x['resetTimer'](0x1388)) : s['addBuff']('igs_buff', 0x1388, y, 'igs_buff')), s['useExtraSkill']('jingji_skill_pro');
                            }
                        } else w && s['removeBuff'](w);
                        return p;
                    }
                }
            }, {'key': 'igs_buff', 'hidden': !0x0}, {
                'key': 'sunder_armor_buff',
                'name': '碎甲',
                'hooks': {
                    'willDamaged'(p, q) {
                        return p * this['arg'][0x0];
                    }, 'defselfAdd'(p) {
                        return p > 0x0 ? p * (0x1 - this['arg'][0x1]) : p;
                    }
                }
            }, {
                'key': 'shield_wall_buff', 'name': '护盾', 'hooks': {
                    'absorbed'(p) {
                        const q = this['arg'], s = Math['min'](p, q);
                        return this['arg'] -= s, this['arg'] <= 0.001 && this['over'](), p - s;
                    }
                }
            }, {
                'key': 'fanatical_buff', 'name': '血怒', 'hooks': {
                    'atk_Add'(p) {
                        return p + this['arg'];
                    }
                }
            }, {
                'key': 'flame_armor_buff2', 'name': '炎铠', 'hidden': !0x0, 'effectInterval': 0x3e7, 'effect'(p) {
                    const q = this['unit'], {target: s} = q;
                    for (const u of p['units']['filter'](v => q['willAttack'](v))) o(0x0, u, this['arg']);
                }
            }, {
                'key': 'ghost_shuffle_buff', 'name': '鬼步', 'hooks': {
                    'shanbizhiAdd'(p, q) {
                        const s = this['unit'];
                        return p + (s['maxHp'] - s['hp']);
                    }
                }
            }, {
                'key': 'hacking_time_buff', 'name': '血魔乱舞', 'hidden': !0x0, 'effectInterval': 0x3e8, 'effect'(p) {
                    const q = this['unit'], {target: s} = q;
                    s ? q['useExtraSkill']('hacking_plus_double') : q['removeBuff'](this);
                }
            }, {
                'key': 'fanatical_buff2', 'name': '狂热', 'hidden': !0x0, 'hooks': {
                    'rpRecovery'(p) {
                        return p + 0x2 + (this['unit']['runAttrHooks'](!0x1, 'mcyh') ? 0x2 : 0x0);
                    }
                }
            }, {'key': 'energy_fire_buff'}, {'key': 'energy_cold_buff'}, {
                'key': 'bingning_buff',
                'hidden': !0x0,
                'hooks': {'coldResist': p => p - 0x50}
            }, {'key': 'yaori_buff', 'hidden': !0x0, 'hooks': {'fireResist': p => p - 0x50}}, {
                'key': 'gsbj_buff',
                'hidden': !0x0,
                'hooks': {'speedRateAdd': p => 0x2 * p, 'atkMul': p => 0.5 * p}
            }, {
                'key': 'mabijiezhi_buff',
                'name': '麻痹',
                'hooks': {'speedRateAdd': p => 0.01 * p}
            }, {
                'key': 'swordSkill', 'name': '狂热', 'hooks': {
                    'atkAdd'(p) {
                        return this['arg'] + p;
                    }
                }
            }, {
                'key': 'shout', 'name': '战斗怒吼', 'hooks': {
                    'defAdd'(p) {
                        return this['arg'] + p;
                    }
                }
            }, {
                'key': 'commandShout', 'name': '命令怒吼', 'hooks': {
                    'maxHpAdd'(p) {
                        return this['arg'] + p;
                    }
                }
            }, {
                'key': 'shoutShake', 'name': '震慑怒吼', 'hooks': {
                    'atkMul'(p) {
                        return this['arg'] * p;
                    }
                }
            }];
        }, 8627: (m, o, p) => {
            m['exports'] = [...p(0x24c6), ...p(0x165f), ...p(0x148), p(0x531), p(0x10fc)];
        }, 4348: m => {
            m['exports'] = {
                'key': 'paladin',
                'name': '圣骑士',
                'description': '圣骑士',
                'requirement': {'role': 'Ariel'},
                'equipments': {'weapon': 'SwordShield'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'skills': {
                    'paladin_skill1': 0x1,
                    'paladin_skill2': 0x1,
                    'paladin_skill3': 0x6,
                    'paladin_skill5': 0x6,
                    'paladin_skill4': 0xc,
                    'paladin_skill9': 0xc,
                    'paladin_skill6': 0x12,
                    'paladin_skill13': 0x12,
                    'paladin_skill7': 0x18,
                    'paladin_skill14': 0x18,
                    'paladin_skill8': 0x24,
                    'paladin_skill11': 0x24,
                    'paladin_skill10': 0x2a,
                    'paladin_skill16': 0x30,
                    'paladin_skill12': 0x30,
                    'paladin_skill15': 0x3c,
                    'paladin_skill17': 0x3c
                },
                'passives': {'pla_passive1': 0x1},
                'enhances': {
                    'pal_enhance1': 0x1,
                    'pal_enhance3': 0x1,
                    'pal_enhance4': 0x6,
                    'pal_enhance5': 0xc,
                    'pal_enhance6': 0x12,
                    'pal_enhance2': 0x12,
                    'pal_enhance12': 0x12,
                    'pal_enhance7': 0x18,
                    'pal_enhance8': 0x24,
                    'pal_enhance9': 0x2a,
                    'pal_enhance11': 0x30,
                    'pal_enhance10': 0x3c
                },
                'availableClasses': {
                    'base': !0x0,
                    'sword': !0x0,
                    'swordshield': !0x0,
                    'lightArmor': !0x0,
                    'armor': !0x0,
                    'cloth': !0x0,
                    'ornament': !0x0
                },
                'attrGrow': {'str': 1.5, 'dex': 0.5, 'int': 1.5, 'sta': 0.5}
            };
        }, 5727: (m, o, p) => {
            m['exports'] = [p(0x17b4), p(0x15e7), p(0x26ad), p(0xb77), p(0x3ab), p(0x138d), p(0xc54), p(0x44b), p(0x252), p(0x2021), p(0x22f8)];
        }, 5607: m => {
            m['exports'] = {
                'key': 'lv15.sorceress1',
                'name': '元素法师',
                'description': '与精灵签订契约就职魔法少女，掌握超自然的力量以击败魔族。',
                'requirement': {'career': 'sorceress', 'level': 0xf, 'stories': ['eyer-stories-10']},
                'equipments': {'weapon': 'stickWand'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'skills': {
                    'sorceress_atk': 0x1,
                    'wind_blade': 0x1,
                    'summon_slime': 0x1,
                    'sorceress_fireBall': 0xf,
                    'sorceress_lightning': 0xf,
                    'sorceress_coldBall': 0xf,
                    'sorceress_magicShield': 0x14,
                    'sorceress_igniting': 0x19,
                    'sorceress_vitalitywater': 0x23
                },
                'passives': {'magic': 0x1},
                'enhances': {
                    'sorceress_enhance1': 0x5,
                    'sorceress_enhance2': 0xa,
                    'ss_ee3': 0xa,
                    'lv15_sorceress1_enhance1': 0xf,
                    'lv15_ss1_ee2': 0xf,
                    'lv15_ss1_ee3': 0xf,
                    'lv15_sorceress1_enhance2': 0x19,
                    'lv15_sorceress1_enhance3': 0x23
                },
                'availableClasses': {'base': !0x0, 'wand': !0x0, 'cloth': !0x0, 'ornament': !0x0},
                'attrGrow': {'str': 0x0, 'dex': 0x0, 'int': 1.5, 'sta': 0.5}
            };
        }, 9901: m => {
            m['exports'] = {
                'key': 'lv35.sorceress1',
                'name': '火之使徒',
                'description': '与精灵签订契约就职魔法少女，掌握超自然的力量以击败魔族。',
                'requirement': {'career': 'lv15.sorceress1', 'level': 0x23, 'stories': ['chapter3-5']},
                'equipments': {'weapon': 'stickWand'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'skills': {
                    'sorceress_atk': 0x1,
                    'wind_blade': 0x1,
                    'summon_slime': 0x1,
                    'sorceress_fireBall': 0xf,
                    'sorceress_lightning': 0xf,
                    'sorceress_coldBall': 0xf,
                    'sorceress_magicShield': 0x14,
                    'sorceress_igniting': 0x19,
                    'sorceress_vitalitywater': 0x23,
                    'sorceress_fireBall_ex': 0x28,
                    'sorceress_overdraft': 0x32,
                    'sorceress_hellfire': 0x3c,
                    'sorceress_fireShield': 0x46
                },
                'passives': {'magic': 0x1},
                'enhances': {
                    'sorceress_enhance1': 0x5,
                    'sorceress_enhance2': 0xa,
                    'ss_ee3': 0xa,
                    'lv15_sorceress1_enhance1': 0xf,
                    'lv15_ss1_ee2': 0xf,
                    'lv15_ss1_ee3': 0xf,
                    'lv15_sorceress1_enhance2': 0x19,
                    'lv15_sorceress1_enhance3': 0x23,
                    'lv35_sorceress1_enhance1': 0x2d,
                    'lv35_sorceress1_enhance2': 0x37,
                    'lv35_sorceress1_enhance3': 0x41
                },
                'availableClasses': {'base': !0x0, 'wand': !0x0, 'cloth': !0x0, 'ornament': !0x0},
                'attrGrow': {'str': 0x0, 'dex': 0x0, 'int': 0x2, 'sta': 0.5}
            };
        }, 2935: m => {
            m['exports'] = {
                'key': 'lv35.sorceress2',
                'name': '水之使徒',
                'description': '与精灵签订契约就职魔法少女，掌握超自然的力量以击败魔族。',
                'requirement': {'career': 'lv15.sorceress1', 'level': 0x23, 'stories': ['chapter3-5']},
                'equipments': {'weapon': 'stickWand'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'skills': {
                    'sorceress_atk': 0x1,
                    'wind_blade': 0x1,
                    'summon_slime': 0x1,
                    'sorceress_fireBall': 0xf,
                    'sorceress_lightning': 0xf,
                    'sorceress_coldBall': 0xf,
                    'sorceress_magicShield': 0x14,
                    'sorceress_igniting': 0x19,
                    'sorceress_vitalitywater': 0x23,
                    'sorceress_tide': 0x28,
                    'sorceress_lucky': 0x32,
                    'sorceress_torrent': 0x3c,
                    'sorceress_coldShield': 0x46
                },
                'passives': {'magic': 0x1},
                'enhances': {
                    'sorceress_enhance1': 0x5,
                    'sorceress_enhance2': 0xa,
                    'ss_ee3': 0xa,
                    'lv15_sorceress1_enhance1': 0xf,
                    'lv15_ss1_ee2': 0xf,
                    'lv15_ss1_ee3': 0xf,
                    'lv15_sorceress1_enhance2': 0x19,
                    'lv15_sorceress1_enhance3': 0x23,
                    'lv35_sorceress2_enhance1': 0x2d,
                    'lv35_sorceress2_enhance2': 0x37,
                    'lv35_sorceress1_enhance3': 0x41
                },
                'availableClasses': {'base': !0x0, 'wand': !0x0, 'cloth': !0x0, 'ornament': !0x0},
                'attrGrow': {'str': 0x0, 'dex': 0x0, 'int': 0x2, 'sta': 0.5}
            };
        }, 939: m => {
            m['exports'] = {
                'key': 'lv35.sorceress3',
                'name': '雷之使徒',
                'description': '与精灵签订契约就职魔法少女，掌握超自然的力量以击败魔族。',
                'requirement': {'career': 'lv15.sorceress1', 'level': 0x23, 'stories': ['chapter3-5']},
                'equipments': {'weapon': 'stickWand'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'skills': {
                    'sorceress_atk': 0x1,
                    'wind_blade': 0x1,
                    'summon_slime': 0x1,
                    'sorceress_fireBall': 0xf,
                    'sorceress_lightning': 0xf,
                    'sorceress_coldBall': 0xf,
                    'sorceress_magicShield': 0x14,
                    'sorceress_igniting': 0x19,
                    'sorceress_vitalitywater': 0x23,
                    'sorceress_chainingLightning': 0x28,
                    'sorceress_energy': 0x32,
                    'sorceress_supernova': 0x3c,
                    'sorceress_electrostatic': 0x46
                },
                'passives': {'magic': 0x1},
                'enhances': {
                    'sorceress_enhance1': 0x5,
                    'sorceress_enhance2': 0xa,
                    'ss_ee3': 0xa,
                    'lv15_sorceress1_enhance1': 0xf,
                    'lv15_ss1_ee2': 0xf,
                    'lv15_ss1_ee3': 0xf,
                    'lv15_sorceress1_enhance2': 0x19,
                    'lv15_sorceress1_enhance3': 0x23,
                    'lv35_sorceress3_enhance1': 0x2d,
                    'lv35_sorceress3_enhance2': 0x37,
                    'lv35_sorceress1_enhance3': 0x41
                },
                'availableClasses': {'base': !0x0, 'wand': !0x0, 'cloth': !0x0, 'ornament': !0x0},
                'attrGrow': {'str': 0x0, 'dex': 0x0, 'int': 0x2, 'sta': 0.5}
            };
        }, 5005: m => {
            m['exports'] = {
                'key': 'lv80.sorceress1',
                'name': '赤焰',
                'description': '与精灵签订契约就职魔法少女，掌握超自然的力量以击败魔族。',
                'requirement': {'career': 'lv35.sorceress1', 'level': 0x50, 'stories': ['career-lv80']},
                'equipments': {'weapon': 'stickWand'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'skills': {
                    'sorceress_atk': 0x1,
                    'wind_blade': 0x1,
                    'summon_slime': 0x1,
                    'sorceress_fireBall': 0xf,
                    'sorceress_lightning': 0xf,
                    'sorceress_coldBall': 0xf,
                    'sorceress_magicShield': 0x14,
                    'sorceress_igniting': 0x19,
                    'sorceress_vitalitywater': 0x23,
                    'sorceress_fireBall_ex': 0x1,
                    'sorceress_overdraft': 0x1,
                    'sorceress_hellfire': 0x1,
                    'sorceress_fireShield': 0x1,
                    'sorceress_bc_fire': 0x50,
                    'sorceress_fire_wind': 0x5a
                },
                'passives': {'magic': 0x1},
                'enhances': {
                    'sorceress_enhance1': 0x5,
                    'sorceress_enhance2': 0xa,
                    'ss_ee3': 0xa,
                    'lv15_sorceress1_enhance1': 0xf,
                    'lv15_ss1_ee2': 0xf,
                    'lv15_ss1_ee3': 0xf,
                    'lv15_sorceress1_enhance2': 0x19,
                    'lv15_sorceress1_enhance3': 0x23,
                    'lv35_sorceress1_enhance1': 0x1,
                    'lv35_sorceress1_enhance2': 0x1,
                    'lv35_sorceress1_enhance3': 0x1,
                    'lv80_sorceress1_enhance1': 0x50,
                    'lv80_sorceress1_enhance2': 0x55,
                    'lv80_sorceress1_enhance3': 0x5a,
                    'lv80_sorceress1_enhance4': 0x5f,
                    'lv80_sorceress1_enhance5': 0x64
                },
                'availableClasses': {'base': !0x0, 'wand': !0x0, 'cloth': !0x0, 'ornament': !0x0},
                'attrGrow': {'str': 0x0, 'dex': 0x0, 'int': 2.5, 'sta': 0.5}
            };
        }, 3156: m => {
            m['exports'] = {
                'key': 'lv80.sorceress2',
                'name': '青火',
                'description': '与精灵签订契约就职魔法少女，掌握超自然的力量以击败魔族。',
                'requirement': {'career': 'lv35.sorceress1', 'level': 0x50, 'stories': ['career-lv80']},
                'equipments': {'weapon': 'stickWand'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'skills': {
                    'sorceress_atk': 0x1,
                    'wind_blade': 0x1,
                    'summon_slime': 0x1,
                    'sorceress_fireBall': 0xf,
                    'sorceress_lightning': 0xf,
                    'sorceress_coldBall': 0xf,
                    'sorceress_magicShield': 0x14,
                    'sorceress_igniting': 0x19,
                    'sorceress_vitalitywater': 0x23,
                    'sorceress_fireBall_ex': 0x1,
                    'sorceress_overdraft': 0x1,
                    'sorceress_hellfire': 0x1,
                    'sorceress_fireShield': 0x1,
                    'sorceress_bc_fire': 0x50,
                    'sorceress_hellfire_plus': 0x5a
                },
                'passives': {'magic': 0x1},
                'enhances': {
                    'sorceress_enhance1': 0x5,
                    'sorceress_enhance2': 0xa,
                    'ss_ee3': 0xa,
                    'lv15_sorceress1_enhance1': 0xf,
                    'lv15_ss1_ee2': 0xf,
                    'lv15_ss1_ee3': 0xf,
                    'lv15_sorceress1_enhance2': 0x19,
                    'lv15_sorceress1_enhance3': 0x23,
                    'lv35_sorceress1_enhance1': 0x1,
                    'lv35_sorceress1_enhance2': 0x1,
                    'lv35_sorceress1_enhance3': 0x1,
                    'lv80_sorceress2_enhance1': 0x50,
                    'lv80_sorceress1_enhance2': 0x55,
                    'lv80_sorceress2_enhance3': 0x5a,
                    'lv80_sorceress1_enhance4': 0x5f,
                    'lv80_sorceress2_enhance5': 0x64
                },
                'availableClasses': {'base': !0x0, 'wand': !0x0, 'cloth': !0x0, 'ornament': !0x0},
                'attrGrow': {'str': 0x0, 'dex': 0x0, 'int': 2.5, 'sta': 0.5}
            };
        }, 1099: m => {
            m['exports'] = {
                'key': 'lv80.sorceress3',
                'name': '水魄',
                'description': '与精灵签订契约就职魔法少女，掌握超自然的力量以击败魔族。',
                'requirement': {'career': 'lv35.sorceress2', 'level': 0x50, 'stories': ['career-lv80']},
                'equipments': {'weapon': 'stickWand'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'skills': {
                    'sorceress_atk': 0x1,
                    'wind_blade': 0x1,
                    'summon_slime': 0x1,
                    'sorceress_fireBall': 0xf,
                    'sorceress_lightning': 0xf,
                    'sorceress_coldBall': 0xf,
                    'sorceress_magicShield': 0x14,
                    'sorceress_igniting': 0x19,
                    'sorceress_vitalitywater': 0x23,
                    'sorceress_tide': 0x28,
                    'sorceress_lucky': 0x32,
                    'sorceress_torrent': 0x3c,
                    'sorceress_coldShield': 0x46,
                    'sorceress_bc_cold': 0x50,
                    'sorceress_sea': 0x5a
                },
                'passives': {'magic': 0x1},
                'enhances': {
                    'sorceress_enhance1': 0x5,
                    'sorceress_enhance2': 0xa,
                    'ss_ee3': 0xa,
                    'lv15_sorceress1_enhance1': 0xf,
                    'lv15_ss1_ee2': 0xf,
                    'lv15_ss1_ee3': 0xf,
                    'lv15_sorceress1_enhance2': 0x19,
                    'lv15_sorceress1_enhance3': 0x23,
                    'lv35_sorceress2_enhance1': 0x1,
                    'lv35_sorceress2_enhance2': 0x1,
                    'lv35_sorceress1_enhance3': 0x1,
                    'lv80_sorceress3_enhance1': 0x50,
                    'lv80_sorceress3_enhance2': 0x55,
                    'lv80_sorceress3_enhance3': 0x5a,
                    'lv80_sorceress1_enhance4': 0x5f,
                    'lv80_sorceress3_enhance5': 0x64
                },
                'availableClasses': {'base': !0x0, 'wand': !0x0, 'cloth': !0x0, 'ornament': !0x0},
                'attrGrow': {'str': 0x0, 'dex': 0x0, 'int': 2.5, 'sta': 0.5}
            };
        }, 594: m => {
            m['exports'] = {
                'key': 'lv80.sorceress4',
                'name': '冰魂',
                'description': '与精灵签订契约就职魔法少女，掌握超自然的力量以击败魔族。',
                'requirement': {'career': 'lv35.sorceress2', 'level': 0x50, 'stories': ['career-lv80']},
                'equipments': {'weapon': 'stickWand'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'skills': {
                    'sorceress_atk': 0x1,
                    'wind_blade': 0x1,
                    'summon_slime': 0x1,
                    'sorceress_fireBall': 0xf,
                    'sorceress_lightning': 0xf,
                    'sorceress_coldBall': 0xf,
                    'sorceress_magicShield': 0x14,
                    'sorceress_igniting': 0x19,
                    'sorceress_vitalitywater': 0x23,
                    'sorceress_tide': 0x28,
                    'sorceress_lucky': 0x32,
                    'sorceress_torrent': 0x3c,
                    'sorceress_coldShield': 0x46,
                    'sorceress_bc_cold': 0x50,
                    'sorceress_blizzard': 0x5a
                },
                'passives': {'magic': 0x1},
                'enhances': {
                    'sorceress_enhance1': 0x5,
                    'sorceress_enhance2': 0xa,
                    'ss_ee3': 0xa,
                    'lv15_sorceress1_enhance1': 0xf,
                    'lv15_ss1_ee2': 0xf,
                    'lv15_ss1_ee3': 0xf,
                    'lv15_sorceress1_enhance2': 0x19,
                    'lv15_sorceress1_enhance3': 0x23,
                    'lv35_sorceress2_enhance1': 0x1,
                    'lv35_sorceress2_enhance2': 0x1,
                    'lv35_sorceress1_enhance3': 0x1,
                    'lv80_sorceress4_enhance1': 0x50,
                    'lv80_sorceress3_enhance2': 0x55,
                    'lv80_sorceress4_enhance3': 0x5a,
                    'lv80_sorceress1_enhance4': 0x5f,
                    'lv80_sorceress4_enhance5': 0x64
                },
                'availableClasses': {'base': !0x0, 'wand': !0x0, 'cloth': !0x0, 'ornament': !0x0},
                'attrGrow': {'str': 0x0, 'dex': 0x0, 'int': 2.5, 'sta': 0.5}
            };
        }, 8225: m => {
            m['exports'] = {
                'key': 'lv80.sorceress5',
                'name': '电主',
                'description': '与精灵签订契约就职魔法少女，掌握超自然的力量以击败魔族。',
                'requirement': {'career': 'lv35.sorceress3', 'level': 0x50, 'stories': ['career-lv80']},
                'equipments': {'weapon': 'stickWand'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'skills': {
                    'sorceress_atk': 0x1,
                    'wind_blade': 0x1,
                    'summon_slime': 0x1,
                    'sorceress_fireBall': 0xf,
                    'sorceress_lightning': 0xf,
                    'sorceress_coldBall': 0xf,
                    'sorceress_magicShield': 0x14,
                    'sorceress_igniting': 0x19,
                    'sorceress_vitalitywater': 0x23,
                    'sorceress_chainingLightning': 0x1,
                    'sorceress_energy': 0x1,
                    'sorceress_supernova': 0x1,
                    'sorceress_electrostatic': 0x1,
                    'sorceress_bc_lightning': 0x50,
                    'sorceress_impulse': 0x5a
                },
                'passives': {'magic': 0x1, 'elect': 0x1},
                'enhances': {
                    'sorceress_enhance1': 0x5,
                    'sorceress_enhance2': 0xa,
                    'ss_ee3': 0xa,
                    'lv15_sorceress1_enhance1': 0xf,
                    'lv15_ss1_ee2': 0xf,
                    'lv15_ss1_ee3': 0xf,
                    'lv15_sorceress1_enhance2': 0x19,
                    'lv15_sorceress1_enhance3': 0x23,
                    'lv35_sorceress3_enhance1': 0x1,
                    'lv35_sorceress3_enhance2': 0x1,
                    'lv35_sorceress1_enhance3': 0x1,
                    'lv80_sorceress5_enhance1': 0x50,
                    'lv80_sorceress5_enhance2': 0x55,
                    'lv80_sorceress5_enhance3': 0x5a,
                    'lv80_sorceress1_enhance4': 0x5f,
                    'lv80_sorceress5_enhance5': 0x64
                },
                'availableClasses': {'base': !0x0, 'wand': !0x0, 'cloth': !0x0, 'ornament': !0x0},
                'attrGrow': {'str': 0x0, 'dex': 0x0, 'int': 2.5, 'sta': 0.5}
            };
        }, 8952: m => {
            m['exports'] = {
                'key': 'lv80.sorceress6',
                'name': '雷神',
                'description': '与精灵签订契约就职魔法少女，掌握超自然的力量以击败魔族。',
                'requirement': {'career': 'lv35.sorceress3', 'level': 0x50, 'stories': ['career-lv80']},
                'equipments': {'weapon': 'stickWand'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'skills': {
                    'sorceress_atk': 0x1,
                    'wind_blade': 0x1,
                    'summon_slime': 0x1,
                    'sorceress_fireBall': 0xf,
                    'sorceress_lightning': 0xf,
                    'sorceress_coldBall': 0xf,
                    'sorceress_magicShield': 0x14,
                    'sorceress_igniting': 0x19,
                    'sorceress_vitalitywater': 0x23,
                    'sorceress_chainingLightning': 0x1,
                    'sorceress_energy': 0x1,
                    'sorceress_supernova': 0x1,
                    'sorceress_electrostatic': 0x1,
                    'sorceress_bc_lightning': 0x50,
                    'sorceress_thunder': 0x5a
                },
                'passives': {'magic': 0x1},
                'enhances': {
                    'sorceress_enhance1': 0x5,
                    'sorceress_enhance2': 0xa,
                    'ss_ee3': 0xa,
                    'lv15_sorceress1_enhance1': 0xf,
                    'lv15_ss1_ee2': 0xf,
                    'lv15_ss1_ee3': 0xf,
                    'lv15_sorceress1_enhance2': 0x19,
                    'lv15_sorceress1_enhance3': 0x23,
                    'lv35_sorceress3_enhance1': 0x1,
                    'lv35_sorceress3_enhance2': 0x1,
                    'lv35_sorceress1_enhance3': 0x1,
                    'lv80_sorceress6_enhance1': 0x50,
                    'lv80_sorceress5_enhance2': 0x55,
                    'lv80_sorceress6_enhance3': 0x5a,
                    'lv80_sorceress1_enhance4': 0x5f,
                    'lv80_sorceress6_enhance5': 0x64
                },
                'availableClasses': {'base': !0x0, 'wand': !0x0, 'cloth': !0x0, 'ornament': !0x0},
                'attrGrow': {'str': 0x0, 'dex': 0x0, 'int': 2.5, 'sta': 0.5}
            };
        }, 6068: m => {
            m['exports'] = {
                'key': 'sorceress',
                'name': '魔法学徒',
                'description': '与精灵签订契约就职魔法少女，掌握超自然的力量以击败魔族。',
                'requirement': {'role': 'Aleanor', 'level': 0x65},
                'equipments': {'weapon': 'stickWand'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'skills': {'sorceress_atk': 0x1, 'wind_blade': 0x2, 'summon_slime': 0x5},
                'passives': {'magic': 0x1},
                'enhances': {'sorceress_enhance1': 0x5, 'sorceress_enhance2': 0xa, 'ss_ee3': 0xa},
                'availableClasses': {'base': !0x0, 'wand': !0x0, 'cloth': !0x0, 'ornament': !0x0},
                'attrGrow': {'str': 0x0, 'dex': 0x0, 'int': 0x1, 'sta': 0.5}
            };
        }, 1329: m => {
            m['exports'] = {
                'key': 'soulbringer',
                'name': '黑暗君主',
                'description': '黑暗君主',
                'requirement': {'role': 'iPhone14promax'},
                'equipments': {'weapon': 'LongSword'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'skills': {
                    'soulbringer_atk': 0x1,
                    'onikiri': 0x2,
                    'soul_power': 0x5,
                    'moonlight_slash': 0xa,
                    'ghost_whip': 0xf,
                    'soul_armor': 0xf,
                    'tombstone': 0x14,
                    'soul_weak': 0x14,
                    'ghost_fury': 0x19,
                    'soul_shadow': 0x1e,
                    'soul_ice': 0x1e,
                    'soul_poison': 0x23,
                    'ghost_puncture': 0x28,
                    'soul_darkfire': 0x2d,
                    'tombstoneplus': 0x32,
                    'ghost_pidi': 0x3c,
                    'dark_jige': 0x46,
                    'soul_iceplus': 0x50,
                    'soul_7': 0x5a
                },
                'passives': {'soulbringer_passive': 0x1},
                'enhances': {
                    'soulbringer_enhance1': 0x5,
                    'soulbringer_enhance2': 0xa,
                    'soulbringer_enhance3': 0x14,
                    'soulbringer_enhance4': 0x28,
                    'soulbringer_enhance5': 0x3c,
                    'soulbringer_enhance6': 0x5a
                },
                'availableClasses': {'base': !0x0, 'sword': !0x0, 'longsword': !0x0, 'cloth': !0x0, 'ornament': !0x0},
                'attrGrow': {'str': 1.5, 'dex': 0.5, 'int': 1.5, 'sta': 0.5}
            };
        }, 328: (m, o, p) => {
            m['exports'] = [p(0x199f)];
        }, 6559: m => {
            m['exports'] = {
                'key': 'villagelv1',
                'name': '拳师',
                'description': '1',
                'requirement': {'role': 'villageH', 'level': 0x65},
                'equipments': {},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'skills': {
                    'vbsk1': 0x1,
                    'vbsk2': 0x1,
                    'vbsk3': 0x1,
                    'vbsk4': 0x1,
                    'vbsk5': 0x1,
                    'vbsk6': 0x1,
                    'vbsk7': 0x1,
                    'vbsk8': 0x1,
                    'vbsk9': 0x1
                },
                'passives': {'vbps1': 0x1},
                'enhances': {},
                'availableClasses': {'base': !0x0, 'armor': !0x0, 'cloth': !0x0, 'ornament': !0x0},
                'attrGrow': {'str': 0x2, 'dex': 0.5, 'int': 0x0, 'sta': 1.5}
            };
        }, 9414: (m, o, p) => {
            m['exports'] = [p(0x2408), p(0x1729), p(0x2037), p(0xb6b), p(0x16be), p(0x1b3f), p(0x4d3), p(0x1e56), p(0xf89), p(0x18c4)];
        }, 5929: m => {
            m['exports'] = {
                'key': 'warrior1.lv15',
                'name': '剑斗士',
                'description': '好用的炮灰(?)职业，用肌肉来解决问题。',
                'requirement': {'career': 'warrior', 'level': 0xf, 'stories': ['eyer-stories-10']},
                'equipments': {'weapon': 'stickSword'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'attrGrow': {'str': 0.5, 'dex': 0x0, 'int': 0x0, 'sta': 0.5},
                'skills': {
                    'warrior_atk': 0x1,
                    'save_oneself': 0x1,
                    'thump': 0x1,
                    'fury_cutter': 0xf,
                    'warrior_hp': 0x14,
                    'whirlwind': 0x19,
                    'warrior_def': 0x1e,
                    'hamstring': 0x23
                },
                'passives': {'warrior_passive1': 0x1},
                'enhances': {
                    'warrior_enhance1': 0x5,
                    'wree2': 0x5,
                    'wree3': 0x5,
                    'warrior_enhance2': 0x1,
                    'lv15_warrior_enhance1': 0xf,
                    'lv15_warrior_enhance2': 0x19,
                    'lv15_warrior_enhance3': 0x23
                },
                'availableClasses': {
                    'base': !0x0,
                    'sword': !0x0,
                    'swordshield': !0x0,
                    'lightArmor': !0x0,
                    'armor': !0x0,
                    'ornament': !0x0
                }
            };
        }, 8247: m => {
            m['exports'] = {
                'key': 'warrior3.lv15',
                'name': '刀客',
                'description': '好用的炮灰(?)职业，用肌肉来解决问题。',
                'requirement': {'career': 'warrior', 'level': 0xf, 'stories': ['eyer-stories-10']},
                'equipments': {'weapon': 'Machete'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'attrGrow': {'str': 0.5, 'dex': 0x0, 'int': 0x0, 'sta': 0.5},
                'skills': {
                    'warrior_atk': 0x1,
                    'save_oneself': 0x1,
                    'thump': 0x1,
                    'hacking': 0xf,
                    'warrior_hp': 0x14,
                    'shield_wall': 0x19,
                    'warrior_def': 0x1e,
                    'sunder_armor': 0x23
                },
                'passives': {'warrior_passive1': 0x1},
                'enhances': {
                    'warrior_enhance1': 0x5,
                    'wree2': 0x5,
                    'wree3': 0x5,
                    'warrior_enhance2': 0x1,
                    'lv15_warrior_enhance1': 0xf,
                    'lv15_warrior_enhance2': 0x19,
                    'lv15_warrior_enhance3': 0x1e
                },
                'availableClasses': {
                    'base': !0x0,
                    'machete': !0x0,
                    'macheteshield': !0x0,
                    'lightArmor': !0x0,
                    'armor': !0x0,
                    'ornament': !0x0
                }
            };
        }, 2923: m => {
            m['exports'] = {
                'key': 'warrior1.lv35',
                'name': '大剑士',
                'description': '好用的炮灰(?)职业，用肌肉来解决问题。',
                'requirement': {'career': 'warrior1.lv15', 'level': 0x23, 'stories': ['chapter3-5']},
                'equipments': {'weapon': 'stickSword'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'attrGrow': {'str': 0x1, 'dex': 0.5, 'int': 0x0, 'sta': 0x1},
                'skills': {
                    'warrior_atk': 0x1,
                    'save_oneself': 0x1,
                    'thump': 0x1,
                    'fury_cutter': 0x1,
                    'warrior_hp': 0x1,
                    'whirlwind': 0x1,
                    'warrior_def': 0x1,
                    'hamstring': 0x1,
                    'element_fire': 0x28,
                    'white_heat': 0x32,
                    'fury_cutter_plus': 0x3c,
                    'block': 0x46
                },
                'passives': {'warrior_passive1': 0x1},
                'enhances': {
                    'warrior_enhance1': 0x5,
                    'wree2': 0x5,
                    'wree3': 0x5,
                    'warrior_enhance2': 0x1,
                    'lv15_warrior_enhance1': 0x1,
                    'lv15_warrior_enhance2': 0x1,
                    'lv15_warrior_enhance3': 0x1,
                    'lv35_warrior1_enhance1': 0x2d,
                    'lv35_warrior1_enhance2': 0x37,
                    'lv35_warrior1_enhance3': 0x41
                },
                'availableClasses': {'base': !0x0, 'sword': !0x0, 'lightArmor': !0x0, 'ornament': !0x0}
            };
        }, 5822: m => {
            m['exports'] = {
                'key': 'warrior2.lv35',
                'name': '守护者',
                'description': '好用的炮灰(?)职业，用肌肉来解决问题。',
                'requirement': {'career': 'warrior1.lv15', 'level': 0x23, 'stories': ['chapter3-5']},
                'equipments': {'weapon': 'SwordShield'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'attrGrow': {'str': 1.5, 'dex': 0x1, 'int': 0x0, 'sta': 0x2},
                'skills': {
                    'warrior_atk': 0x1,
                    'save_oneself': 0x1,
                    'thump': 0x1,
                    'fury_cutter': 0x1,
                    'warrior_hp': 0x1,
                    'whirlwind': 0x1,
                    'warrior_def': 0x1,
                    'hamstring': 0x1,
                    'guardian': 0x28,
                    'shield_charge': 0x32,
                    'fury_cutter_plus': 0x3c,
                    'defensive_stance': 0x46,
                    'first_aid': 0x50,
                    'infinite_justice': 0x5a
                },
                'passives': {'warrior_passive1': 0x1, 'warrior_passive4': 0x1},
                'enhances': {
                    'warrior_enhance1': 0x5,
                    'wree2': 0x5,
                    'wree3': 0x5,
                    'warrior_enhance2': 0x1,
                    'lv15_warrior_enhance1': 0x1,
                    'lv15_warrior_enhance2': 0x1,
                    'lv15_warrior_enhance3': 0x1,
                    'lv35_warrior2_enhance1': 0x2d,
                    'lv35_warrior2_enhance2': 0x37,
                    'lv35_warrior2_enhance3': 0x41,
                    'lv35_warrior2_enhance8': 0x50,
                    'lv35_warrior2_enhance5': 0x55,
                    'lv35_warrior2_enhance6': 0x5a,
                    'lv35_warrior2_enhance7': 0x5f,
                    'lv35_warrior2_enhance4': 0x64
                },
                'availableClasses': {'base': !0x0, 'swordshield': !0x0, 'armor': !0x0, 'ornament': !0x0}
            };
        }, 6975: m => {
            m['exports'] = {
                'key': 'warrior5.lv35',
                'name': '勇士',
                'description': '好用的炮灰(?)职业，用肌肉来解决问题。',
                'requirement': {'career': 'warrior3.lv15', 'level': 0x23, 'stories': ['chapter3-5']},
                'equipments': {'weapon': 'Machete'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'attrGrow': {'str': 0x1, 'dex': 0.5, 'int': 0x0, 'sta': 0x1},
                'skills': {
                    'warrior_atk': 0x1,
                    'save_oneself': 0x1,
                    'thump': 0x1,
                    'hacking': 0x1,
                    'warrior_hp': 0x1,
                    'shield_wall': 0x1,
                    'warrior_def': 0x1,
                    'sunder_armor': 0x1,
                    'element_cold_fire': 0x28,
                    'fanatical': 0x32,
                    'hacking_plus_double': 0x3c,
                    'block': 0x46
                },
                'passives': {'warrior_passive1': 0x1},
                'enhances': {
                    'warrior_enhance1': 0x5,
                    'wree2': 0x5,
                    'wree3': 0x5,
                    'warrior_enhance2': 0x1,
                    'lv15_warrior_enhance1': 0x1,
                    'lv15_warrior_enhance2': 0x1,
                    'lv15_warrior_enhance3': 0x1,
                    'lv35_warrior2_enhance1': 0x2d,
                    'lv35_warrior5_enhance2': 0x37,
                    'lv35_warrior5_enhance3': 0x41
                },
                'availableClasses': {'base': !0x0, 'machete': !0x0, 'lightArmor': !0x0, 'ornament': !0x0}
            };
        }, 1235: m => {
            m['exports'] = {
                'key': 'warrior1.lv80',
                'name': '魔剑士',
                'description': '好用的炮灰(?)职业，用肌肉来解决问题。',
                'requirement': {'career': 'warrior1.lv35', 'level': 0x50, 'stories': ['career-lv80']},
                'equipments': {'weapon': 'stickSword'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'attrGrow': {'str': 1.5, 'dex': 0x0, 'int': 0x1, 'sta': 1.5},
                'skills': {
                    'warrior_atk': 0x1,
                    'save_oneself': 0x1,
                    'thump': 0x1,
                    'fury_cutter': 0x1,
                    'warrior_hp': 0x1,
                    'whirlwind': 0x1,
                    'warrior_def': 0x1,
                    'hamstring': 0x1,
                    'element_fire': 0x28,
                    'white_heat': 0x32,
                    'fury_cutter_plus': 0x3c,
                    'block': 0x46,
                    'flame_armor': 0x50,
                    'dragon_breath': 0x5a
                },
                'passives': {'warrior_passive1': 0x1, 'warrior_passive2': 0x1},
                'enhances': {
                    'warrior_enhance1': 0x5,
                    'wree2': 0x5,
                    'wree3': 0x5,
                    'warrior_enhance2': 0x1,
                    'lv15_warrior_enhance1': 0x1,
                    'lv15_warrior_enhance2': 0x1,
                    'lv15_warrior_enhance3': 0x1,
                    'lv35_warrior1_enhance1': 0x2d,
                    'lv35_warrior1_enhance2': 0x37,
                    'lv35_warrior1_enhance3': 0x41,
                    'lv80_warrior1_enhance1': 0x50,
                    'lv80_warrior1_enhance2': 0x55,
                    'lv80_warrior1_enhance3': 0x5a,
                    'lv80_warrior1_enhance4': 0x5f,
                    'lv80_warrior1_enhance5': 0x64
                },
                'availableClasses': {'base': !0x0, 'sword': !0x0, 'lightArmor': !0x0, 'ornament': !0x0}
            };
        }, 7766: m => {
            m['exports'] = {
                'key': 'warrior2.lv80',
                'name': '宗师',
                'description': '好用的炮灰(?)职业，用肌肉来解决问题。',
                'requirement': {'career': 'warrior1.lv35', 'level': 0x50, 'stories': ['career-lv80']},
                'equipments': {'weapon': 'stickSword'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'attrGrow': {'str': 1.5, 'dex': 0x1, 'int': 0x0, 'sta': 1.5},
                'skills': {
                    'warrior_atk': 0x1,
                    'save_oneself': 0x1,
                    'thump': 0x1,
                    'fury_cutter': 0x1,
                    'warrior_hp': 0x1,
                    'whirlwind': 0x1,
                    'warrior_def': 0x1,
                    'hamstring': 0x1,
                    'element_fire': 0x1,
                    'white_heat': 0x1,
                    'fury_cutter_plus': 0x1,
                    'block': 0x1,
                    'fury_cutter_time': 0x50,
                    'omnislash': 0x5a
                },
                'passives': {'warrior_passive1': 0x1, 'warrior_passive3': 0x1},
                'enhances': {
                    'warrior_enhance1': 0x5,
                    'wree2': 0x5,
                    'wree3': 0x5,
                    'warrior_enhance2': 0x1,
                    'lv15_warrior_enhance1': 0x1,
                    'lv15_warrior_enhance2': 0x1,
                    'lv15_warrior_enhance3': 0x1,
                    'lv35_warrior1_enhance1': 0x1,
                    'lv35_warrior1_enhance2': 0x1,
                    'lv35_warrior1_enhance3': 0x1,
                    'lv80_warrior2_enhance1': 0x50,
                    'lv80_warrior2_enhance2': 0x55,
                    'lv80_warrior2_enhance3': 0x5a,
                    'lv80_warrior2_enhance4': 0x5f,
                    'lv80_warrior2_enhance5': 0x64
                },
                'availableClasses': {'base': !0x0, 'sword': !0x0, 'lightArmor': !0x0, 'ornament': !0x0}
            };
        }, 3977: m => {
            m['exports'] = {
                'key': 'warrior7.lv80',
                'name': '血魔',
                'description': '好用的炮灰(?)职业，用肌肉来解决问题。',
                'requirement': {'career': 'warrior5.lv35', 'level': 0x50, 'stories': ['career-lv80']},
                'equipments': {'weapon': 'Machete'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'attrGrow': {'str': 1.5, 'dex': 0x1, 'int': 0x0, 'sta': 1.5},
                'skills': {
                    'warrior_atk': 0x1,
                    'save_oneself': 0x1,
                    'thump': 0x1,
                    'hacking': 0x1,
                    'warrior_hp': 0x1,
                    'shield_wall': 0x1,
                    'warrior_def': 0x1,
                    'sunder_armor': 0x1,
                    'element_cold_fire': 0x1,
                    'fanatical': 0x1,
                    'hacking_plus_double': 0x1,
                    'block': 0x1,
                    'ghost_shuffle': 0x50,
                    'hacking_time': 0x5a
                },
                'passives': {'warrior_passive1': 0x1, 'warrior_passive5': 0x1},
                'enhances': {
                    'warrior_enhance1': 0x5,
                    'wree2': 0x5,
                    'wree3': 0x5,
                    'warrior_enhance2': 0x1,
                    'lv15_warrior_enhance1': 0x1,
                    'lv15_warrior_enhance2': 0x1,
                    'lv15_warrior_enhance3': 0x1,
                    'lv35_warrior2_enhance1': 0x1,
                    'lv35_warrior5_enhance2': 0x1,
                    'lv35_warrior5_enhance3': 0x1,
                    'lv80_warrior5_enhance1': 0x50,
                    'lv80_warrior5_enhance2': 0x55,
                    'lv80_warrior5_enhance3': 0x5a,
                    'lv80_warrior5_enhance4': 0x5f,
                    'lv80_warrior5_enhance5': 0x64
                },
                'availableClasses': {'base': !0x0, 'machete': !0x0, 'lightArmor': !0x0, 'ornament': !0x0}
            };
        }, 6340: m => {
            m['exports'] = {
                'key': 'warrior8.lv80',
                'name': '焚天',
                'description': '好用的炮灰(?)职业，用肌肉来解决问题。',
                'requirement': {'career': 'warrior5.lv35', 'level': 0x50, 'stories': ['career-lv80']},
                'equipments': {'weapon': 'Machete'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'attrGrow': {'str': 1.5, 'dex': 0x0, 'int': 0x1, 'sta': 1.5},
                'skills': {
                    'warrior_atk': 0x1,
                    'save_oneself': 0x1,
                    'thump': 0x1,
                    'hacking': 0x1,
                    'warrior_hp': 0x1,
                    'shield_wall': 0x1,
                    'warrior_def': 0x1,
                    'sunder_armor': 0x1,
                    'element_cold_fire': 0x1,
                    'fanatical': 0x1,
                    'hacking_plus_double': 0x1,
                    'block': 0x1,
                    'warrior_deadline': 0x50,
                    'warrior_con_energy': 0x5a
                },
                'passives': {'warrior_passive1': 0x1, 'warrior_passive6': 0x1},
                'enhances': {
                    'warrior_enhance1': 0x5,
                    'wree2': 0x5,
                    'wree3': 0x5,
                    'warrior_enhance2': 0x1,
                    'lv15_warrior_enhance1': 0x1,
                    'lv15_warrior_enhance2': 0x1,
                    'lv15_warrior_enhance3': 0x1,
                    'lv35_warrior2_enhance1': 0x1,
                    'lv35_warrior5_enhance2': 0x1,
                    'lv35_warrior5_enhance3': 0x1,
                    'lv80_warrior1_enhance3': 0x50,
                    'lv80_warrior8_enhance1': 0x55,
                    'lv80_warrior8_enhance1_2': 0x55,
                    'lv80_warrior8_enhance2': 0x5a,
                    'lv80_wr8_ee2_2': 0x5a,
                    'lv80_wr8_ee2_3': 0x5a,
                    'lv80_warrior8_enhance3': 0x5f,
                    'lv80_warrior8_enhance3_2': 0x5f,
                    'lv80_warrior8_enhance4': 0x64
                },
                'availableClasses': {'base': !0x0, 'machete': !0x0, 'lightArmor': !0x0, 'ornament': !0x0}
            };
        }, 9224: m => {
            m['exports'] = {
                'key': 'warrior',
                'name': '战士',
                'description': '好用的炮灰(?)职业，用肌肉来解决问题。',
                'requirement': {'role': 'Eyer', 'level': 0x65},
                'equipments': {'weapon': 'stickSword'},
                'expFormula': [0x2, 0xa, -0x4, 0x2, 0.3],
                'attrGrow': {'str': 0x0, 'dex': 0x0, 'int': 0x0, 'sta': 0.5},
                'skills': {'warrior_atk': 0x1, 'save_oneself': 0x2, 'thump': 0x5},
                'passives': {'warrior_passive1': 0x1},
                'enhances': {'warrior_enhance1': 0x5, 'wree2': 0x5, 'wree3': 0x5, 'warrior_enhance2': 0xa},
                'availableClasses': {
                    'base': !0x0,
                    'sword': !0x0,
                    'swordshield': !0x0,
                    'spear': !0x0,
                    'spearshield': !0x0,
                    'machete': !0x0,
                    'macheteshield': !0x0,
                    'lightArmor': !0x0,
                    'armor': !0x0,
                    'ornament': !0x0
                }
            };
        }, 7586: m => {
            m['exports'] = [{
                'key': 'fotiaoqiang',
                'name': '史莱姆果冻',
                'description': o => '力量、敏捷、智力、耐力分别增加' + 0x5 * o + '点',
                'Max_level': 0x270f,
                'hooks': {
                    'str': (o, p) => p + 0x5 * Math['min'](o, 0x270f),
                    'dex': (o, p) => p + 0x5 * Math['min'](o, 0x270f),
                    'int': (o, p) => p + 0x5 * Math['min'](o, 0x270f),
                    'sta': (o, p) => p + 0x5 * Math['min'](o, 0x270f)
                }
            }, {
                'key': 'huangguajianzirou',
                'name': '艾尔秘制面包',
                'description': o => '物理防御增加' + 0x19 * o + '点',
                'Max_level': 0x270f,
                'hooks': {'defAdd': (o, p) => p + 0x19 * o}
            }, {
                'key': 'cuigualijisi',
                'name': '酒心巧克力',
                'description': o => '元素抗性增加' + 0x19 * o + '点',
                'Max_level': 0x270f,
                'hooks': {'allResAdd': (o, p) => p + 0x19 * o}
            }, {
                'key': 'tangcupaigu',
                'name': '小饼干',
                'description': o => '闪避增加' + 0x1e * o + '点',
                'Max_level': 0x270f,
                'hooks': {'shanbizhiAdd': (o, p) => p + 0x1e * o}
            }, {
                'key': 'suanxiangbairou',
                'name': '幻想森林果派',
                'description': o => '生命值恢复增加' + o + '点',
                'Max_level': 0x270f,
                'hooks': {'hpRecovery': (o, p) => p + o}
            }, {
                'key': 'jintangsuancaiyu',
                'name': '金汤酸菜鱼',
                'description': o => '法力值恢复增加' + o + '点',
                'Max_level': 0x270f,
                'hooks': {'mpRecovery': (o, p) => p + o}
            }, {
                'key': 'lianyushuizhuyu',
                'name': '炼狱海鲜烩',
                'description': o => '生命值上限' + 0x28 * o + '点',
                'Max_level': 0x270f,
                'hooks': {'maxHpAdd': (o, p) => p + 0x28 * o}
            }, {
                'key': 'bingzhenxiaolongxia',
                'name': '冰镇小龙虾',
                'description': o => '法力值上限' + 0x28 * o + '点',
                'Max_level': 0x270f,
                'hooks': {'maxMpAdd': (o, p) => p + 0x28 * o}
            }];
        }, 5353: m => {
            m['exports'] = [{
                'key': 'chapter3.beast.wildpig',
                'name': '豪猪',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x5dc,
                'def': 0x64,
                'atk': 0x28,
                'exp': 0x41,
                'level': 0x54,
                'skills': [{'key': 'melee', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x5, 0x23], 'rate': 0.1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {'type': 'ticket', 'rate': 0.001, 'dungeons': {'chapter3.shelter773': 0x2, 'chapter3.wood1': 0x1}}]
            }, {
                'key': 'chapter3.beast.lion',
                'name': '雄狮',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'exp': 0x55,
                'maxHp': 0x384,
                'def': 0x32,
                'atk': 0x3c,
                'level': 0x56,
                'skills': [{'key': 'melee', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x5, 0x23], 'rate': 0.1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {'type': 'ticket', 'rate': 0.001, 'dungeons': {'chapter3.shelter773': 0x2, 'chapter3.wood1': 0x1}}]
            }, {
                'key': 'chapter3.beast.pengpeng',
                'name': '彭彭',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x3a98,
                'exp': 0x320,
                'def': 0x64,
                'allResist': -0x1388,
                'atk': 0x50,
                'level': 0x5a,
                'skills': [{'key': 'simba.thumpHead', 'level': 0x0}, {'key': 'melee', 'level': 0x0}],
                'hooks': {'simba.goodFriends': o => !0x0},
                'buffs': [{'type': 'simba.goodFriends'}],
                'loots': [{'type': 'equip', 'rate': 0x1, 'mfRate': 0x2}]
            }, {
                'key': 'chapter3.beast.simba',
                'name': '辛巴',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x1b58,
                'def': 0x32,
                'allResist': -0x1388,
                'exp': 0x320,
                'atk': 0x82,
                'level': 0x5a,
                'skills': [{'key': 'melee', 'level': 0x0}],
                'hooks': {'simba.goodFriends': o => !0x0},
                'buffs': [{'type': 'simba.goodFriends'}],
                'loots': []
            }, {
                'key': 'chapter3.beast.dingman',
                'name': '丁满',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x1f40,
                'atk': 0x46,
                'def': -0x1388,
                'exp': 0x320,
                'level': 0x5a,
                'skills': [{'key': 'simba.heal', 'level': 0x0}, {'key': 'melee', 'level': 0x0}],
                'hooks': {'simba.goodFriends': o => !0x0},
                'buffs': [{'type': 'simba.goodFriends'}],
                'loots': [{'key': 'gold', 'count': [0x96, 0xfa], 'rate': 0x1}]
            }];
        }, 3973: m => {
            m['exports'] = [{
                'key': 'chapter3.element.fire',
                'name': '火焰精灵',
                'description': '一团跳动的火焰',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'skills': [{'key': 'fireElement.fireball', 'level': 0x0}],
                'maxHp': 0x1388,
                'def': 0x96,
                'atk': 0x78,
                'fireResist': 0x7d0,
                'coldResist': -0x4e20,
                'exp': 0xb4,
                'level': 0x72,
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x14, 0x32], 'rate': 0.1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {
                    'type': 'ticket',
                    'rate': 0.001,
                    'dungeons': {'chapter3.auran1': 0x4, 'chapter3.auran2': 0x2, 'chapter3.tower2': 0x1}
                }]
            }, {
                'key': 'chapter3.element.water',
                'name': '水元素',
                'description': '一团跳动的火焰',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'skills': [{'key': 'waterElement.waterArrow', 'level': 0x0}, {'key': 'iceNova', 'level': 0x0}],
                'maxHp': 0x1388,
                'def': 0x96,
                'atk': 0x78,
                'coldResist': 0x7d0,
                'fireResist': -0x4e20,
                'exp': 0xb4,
                'level': 0x74,
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x14, 0x32], 'rate': 0.1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {
                    'type': 'ticket',
                    'rate': 0.001,
                    'dungeons': {'chapter3.auran1': 0x4, 'chapter3.auran2': 0x2, 'chapter3.tower2': 0x1}
                }]
            }, {
                'key': 'chapter3.element.earth',
                'name': '岩石傀儡',
                'description': '一团跳动的火焰',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'skills': [{'key': 'melee', 'level': 0x0}],
                'maxHp': 0x1b58,
                'def': 0x7d0,
                'allResist': -0x4e20,
                'atk': 0x96,
                'exp': 0xb4,
                'level': 0x76,
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x14, 0x32], 'rate': 0.1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {
                    'type': 'ticket',
                    'rate': 0.001,
                    'dungeons': {'chapter3.auran1': 0x4, 'chapter3.auran2': 0x2, 'chapter3.tower2': 0x1}
                }]
            }, {
                'key': 'chapter3.element.azathoth.fire',
                'name': '阿撒托斯[火]',
                'description': '一团跳动的混沌元素',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'skills': [{'key': 'fireElement.fireball', 'level': 0x0}, {
                    'key': 'azathoth.transformIce',
                    'level': 0x0
                }],
                'stunResist': 0xbb8,
                'boss': !0x0,
                'maxHp': 0x30d40,
                'coldResist': -0x4e20,
                'fireResist': 0x7d0,
                'def': -0x1f4,
                'atk': 0x226,
                'exp': 0x1b58,
                'level': 0x78,
                'loots': [{'key': 'gold', 'count': [0xfa, 0x1f4], 'rate': 0x1}]
            }, {
                'key': 'chapter3.element.azathoth.ice',
                'name': '阿撒托斯[冰]',
                'description': '一团跳动的混沌元素',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'skills': [{'key': 'waterElement.waterArrow', 'level': 0x0}, {
                    'key': 'iceNova',
                    'level': 0x0
                }, {'key': 'azathoth.transformEarth', 'level': 0x0}],
                'stunResist': 0xbb8,
                'boss': !0x0,
                'maxHp': 0x30d40,
                'def': -0x1f4,
                'atk': 0x190,
                'coldResist': 0x7d0,
                'fireResist': -0x4e20,
                'exp': 0x1f40,
                'level': 0x78,
                'loots': [{'key': 'gold', 'count': [0xfa, 0x1f4], 'rate': 0x1}]
            }, {
                'key': 'chapter3.element.azathoth.earth',
                'name': '阿撒托斯[土]',
                'description': '一团跳动的混沌元素',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'skills': [{'key': 'azathoth.transformDark', 'level': 0x0}, {'key': 'melee', 'level': 0x0}],
                'boss': !0x0,
                'maxHp': 0x30d40,
                'def': 0x7d0,
                'allResist': -0x4e20,
                'atk': 0x1f4,
                'exp': 0x1f40,
                'level': 0x78,
                'stunResist': 0xbb8,
                'loots': [{'key': 'gold', 'count': [0xfa, 0x1f4], 'rate': 0x1}]
            }, {
                'key': 'chapter3.element.azathoth.dark',
                'name': '阿撒托斯[混乱]',
                'description': '一团跳动的混沌元素',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'skills': [{'key': 'azathoth.explode', 'level': 0x0}],
                'boss': !0x0,
                'maxHp': 0x30d40,
                'def': 0x1f4,
                'allResist': 0x1f4,
                'atk': 0x1f4,
                'exp': 0x1f40,
                'level': 0x78,
                'stunResist': 0xbb8,
                'loots': [{'key': 'gold', 'count': [0xfa, 0x1f4], 'rate': 0x1}]
            }, {
                'key': 'chapter3.element.azathoth.none',
                'name': '阿撒托斯的灰烬',
                'description': '一团跳动的混沌元素',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'skills': [],
                'boss': !0x0,
                'maxHp': 0x3e8,
                'atk': 0x1c2,
                'exp': 0x1388,
                'level': 0x78,
                'loots': [{'key': 'gold', 'count': [0xfa, 0x1f4], 'rate': 0x1}]
            }];
        }, 6720: m => {
            m['exports'] = [{
                'key': 'chapter3.fishzilla.magician',
                'name': '湖畔镇魔法师',
                'camp': 'alien',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xbb8,
                'atk': 0x96,
                'atkSpeed': 0.4,
                'level': 0x6e,
                'skills': [{'key': 'fishzilla.focus', 'level': 0x0}],
                'affixes': {'stronger': 0x2, 'faster': 0x1, 'recover': 0x1}
            }, {
                'key': 'chapter3.murloc.slaves',
                'name': '鱼人奴隶',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xfa0,
                'atk': 0xc8,
                'coldResist': 0x3e8,
                'fireResist': -0x2710,
                'exp': 0x64,
                'level': 0x6e,
                'skills': [{'key': 'melee', 'level': 0x0}],
                'loots': [{'key': 'gold', 'count': [0xa, 0x28], 'rate': 0.1}]
            }, {
                'key': 'chapter3.fishzilla',
                'name': '鱼斯拉',
                'description': '狗头人的大王，最萌了~\x20🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x1e8480,
                'hpRecovery': 0xfa,
                'exp': 0x1388,
                'atk': 0x258,
                'def': 0x190,
                'allResist': -0x2710,
                'coldResist': 0x7d0,
                'level': 0x6e,
                'skills': [{'key': 'fishzilla.summonSlaves', 'level': 0x0}, {
                    'key': 'fishzilla.bomb',
                    'level': 0xc
                }, {'key': 'melee', 'level': 0x0}],
                'stunResist': 0xbb8,
                'loots': [{'key': 'gold', 'count': [0xc8, 0x190], 'rate': 0x1}]
            }];
        }, 8110: m => {
            m['exports'] = [{
                'key': 'chapter3.murloc.minions',
                'name': '鱼人战士',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x898,
                'atk': 0x41,
                'exp': 0x96,
                'level': 0x5e,
                'skills': [{'key': 'melee', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0xa, 0x28], 'rate': 0.1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {
                    'type': 'ticket',
                    'rate': 0.001,
                    'dungeons': {'chapter3.wood1': 0x4, 'chapter3.auran1': 0x2, 'chapter3.auran2': 0x1}
                }]
            }, {
                'key': 'chapter3.murloc.shaman',
                'name': '鱼人祭祀',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'exp': 0x7d,
                'maxHp': 0x708,
                'def': 0x32,
                'atk': 0x50,
                'level': 0x60,
                'skills': [{'key': 'shaman.iceball', 'level': 0x0}, {'key': 'melee', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x14, 0x28], 'rate': 0.1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {
                    'type': 'ticket',
                    'rate': 0.001,
                    'dungeons': {'chapter3.wood1': 0x4, 'chapter3.auran1': 0x2, 'chapter3.auran2': 0x1}
                }]
            }, {
                'key': 'chapter3.murloc.army',
                'name': '鱼人大军',
                'camp': 'neutral',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x3e8,
                'def': 0x32,
                'atk': 0x32,
                'level': 0x1,
                'skills': [{'key': 'murloc.army.thumpHead', 'level': 0x0}]
            }, {
                'key': 'chapter3.murloc.warlord',
                'name': '鱼人督军',
                'description': '狗头人的大王，最萌了~\x20🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0xc350,
                'hpRecovery': 0x32,
                'exp': 0xbb8,
                'atk': 0x118,
                'level': 0x64,
                'skills': [{'key': 'melee', 'level': 0x0}, {
                    'key': 'murloc.thumpHead',
                    'level': 0x0
                }, {'key': 'murloc.shieldShout', 'level': 0x0}],
                'loots': [{'key': 'gold', 'count': [0xb4, 0x12c], 'rate': 0x1}]
            }];
        }, 5000: m => {
            m['exports'] = [{
                'key': 'chapter3.undead.ghost',
                'name': '不安的冤魂',
                'description': '',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x320,
                'atk': 0x23,
                'exp': 0x32,
                'level': 0x4a,
                'skills': [{'key': 'shaman.darkball', 'level': 0x0}, {'key': 'melee', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x1, 0xf], 'rate': 0x1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {
                    'type': 'ticket',
                    'rate': 0.001,
                    'dungeons': {
                        'town.mine.2': 0x2,
                        'town.mine.3': 0x1,
                        'town.neighbourTown.2': 0x2,
                        'town.neighbourTown.3': 0x1,
                        'chapter3.shelter773': 0x1
                    }
                }]
            }, {
                'key': 'chapter3.undead.zombie',
                'name': '行尸',
                'description': '会玩火的狗头人，还是好萌。🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x3e8,
                'exp': 0x32,
                'atk': 0x2d,
                'level': 0x4c,
                'skills': [{'key': 'melee', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x5, 0x14], 'rate': 0x1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {
                    'type': 'ticket',
                    'rate': 0.001,
                    'dungeons': {
                        'town.mine.2': 0x2,
                        'town.mine.3': 0x1,
                        'town.neighbourTown.2': 0x2,
                        'town.neighbourTown.3': 0x1,
                        'chapter3.shelter773': 0x1
                    }
                }]
            }, {
                'key': 'chapter3.undead.ghostShield',
                'name': '幽魂护卫',
                'description': '',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x190,
                'atkSpeed': 0.4,
                'level': 0x40,
                'skills': [{'key': 'ghostShield', 'level': 0x0}],
                'loots': []
            }, {
                'key': 'chapter3.necromancer',
                'name': '暗影法师奈布',
                'description': '狗头人的大王，最萌了~\x20🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x3a98,
                'hpRecovery': 0xf,
                'exp': 0x708,
                'atk': 0x96,
                'def': -0x1388,
                'allResist': 0xc8,
                'darkResist': 0x7d0,
                'lightResist': -0x4e20,
                'level': 0x50,
                'skills': [{'key': 'melee', 'level': 0x0}, {
                    'key': 'shaman.darkball',
                    'level': 0x0
                }, {'key': 'necromancer.ghostShield', 'level': 0x0}],
                'loots': [{'key': 'gold', 'count': [0x64, 0xc8], 'rate': 0x1}]
            }];
        }, 7072: m => {
            m['exports'] = [{
                'key': 'chapter3.waterElement.nagaHero',
                'name': '娜迦勇士',
                'description': '一团跳动的火焰',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'skills': [{'key': 'melee', 'level': 0x0}],
                'maxHp': 0x1f40,
                'def': 0x96,
                'atk': 0xb4,
                'exp': 0xdc,
                'level': 0x7c,
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x14, 0x32], 'rate': 0x1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {'type': 'ticket', 'rate': 0.001, 'dungeons': {'chapter3.tower2': 0x2, 'chapter3.auran4': 0x1}}]
            }, {
                'key': 'chapter3.waterElement',
                'name': '水元素',
                'description': '一团跳动的火焰',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'skills': [{'key': 'waterElement.waterArrow', 'level': 0x0}, {'key': 'iceNova', 'level': 0x0}],
                'maxHp': 0x1f40,
                'def': 0x96,
                'atk': 0x96,
                'coldResist': 0x7d0,
                'fireResist': -0x4e20,
                'exp': 0xdc,
                'level': 0x7e,
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x14, 0x32], 'rate': 0.1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {'type': 'ticket', 'rate': 0.001, 'dungeons': {'chapter3.tower2': 0x2, 'chapter3.auran4': 0x1}}]
            }, {
                'key': 'chapter3.waterElement.giants',
                'name': '深海巨人',
                'description': '一团跳动的火焰',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'skills': [{'key': 'cleave', 'level': 0x0}],
                'maxHp': 0x2710,
                'def': 0xfa,
                'atk': 0xc8,
                'exp': 0x1c2,
                'level': 0x80,
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x14, 0x32], 'rate': 0.1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {'type': 'ticket', 'rate': 0.001, 'dungeons': {'chapter3.tower2': 0x2, 'chapter3.auran4': 0x1}}]
            }, {
                'key': 'chapter3.waterElement.Nynnroth',
                'name': '奈因洛斯的分身',
                'description': '一团跳动的水元素',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'skills': [{'key': 'waterElement.waterArrow', 'level': 0x0}, {
                    'key': 'waterElement.waterFlow',
                    'level': 0x0
                }, {'key': 'enemy.upgrade', 'level': 0x0}],
                'stunResist': 0xbb8,
                'boss': !0x0,
                'maxHp': 0x493e0,
                'coldResist': 0x7d0,
                'fireResist': -0x4e20,
                'atk': 0x2ee,
                'exp': 0x2710,
                'level': 0x82,
                'loots': [{'key': 'gold', 'count': [0x190, 0x258], 'rate': 0x1}]
            }, {
                'key': 'shrine.nynnroth.shield',
                'name': '定海圣殿',
                'description': '增加怒气、能量、法力恢复速度3秒。',
                'camp': 'shrine',
                'race': 'unknown',
                'career': 'melee',
                'onPress'(o) {
                    for (const p of o['units']['filter'](q => 'player' === q['camp'] || 'alien' === q['camp'])) p['addBuff']('nynnroth.shield', 0x1388);
                    return this['kill'](), !0x1;
                }
            }];
        }, 329: m => {
            m['exports'] = [{
                'key': 'chapter4.humans.thief',
                'name': '小偷',
                'description': '',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x4e20,
                'atk': 0x15e,
                'exp': 0x1c2,
                'level': 0x8c,
                'skills': [{'key': 'melee', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x32, 0x64], 'rate': 0x1}]
            }, {
                'key': 'chapter4.humans.rogue',
                'name': '流氓',
                'description': '会玩火的狗头人，还是好萌。🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x4e20,
                'exp': 0x1c2,
                'atk': 0x15e,
                'level': 0x8c,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'shaman.fireball', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x32, 0x64], 'rate': 0x1}]
            }, {
                'key': 'chapter4.humans.monster',
                'name': '虚空行者',
                'description': '',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x30d40,
                'atk': 0x320,
                'darkResist': 0x7d0,
                'lightResist': -0x7d0,
                'level': 0x91,
                'skills': [{'key': 'darkElement.darkball', 'level': 0x0}, {
                    'key': 'summon.earth.comeToMe',
                    'level': 0x0
                }],
                'loots': []
            }, {
                'key': 'chapter4.humans.seck',
                'name': '罗兰·赛克',
                'description': '手黑党的领袖',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x7a120,
                'maxMp': 0x3e8,
                'mpRecovery': 0x14,
                'hpRecovery': 0x1f4,
                'exp': 0x5dc,
                'atk': 0x3e8,
                'darkResist': 0x7d0,
                'lightResist': -0x4e20,
                'def': 0x1f4,
                'level': 0x96,
                'skills': [{'key': 'melee', 'level': 0x0}, {
                    'key': 'shaman.darkball',
                    'level': 0x0
                }, {'key': 'chapter4.humans.seck.summonDarkSoul', 'level': 0x0}, {
                    'key': 'enemy.upgrade',
                    'level': 0x0
                }],
                'loots': [{'key': 'gold', 'count': [0x1f4, 0x3e8], 'rate': 0x1}]
            }, {
                'key': 'chapter4.humans.women',
                'name': '魅魔',
                'description': '',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x30d40,
                'atk': 0x320,
                'darkResist': 0x7d0,
                'lightResist': -0x7d0,
                'level': 0x91,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'chapter4.humans.women.thumpHead', 'level': 0x0}],
                'loots': []
            }, {
                'key': 'chapter4.humans.seck1',
                'name': '罗兰·赛克',
                'description': '手黑党的领袖，丫用灵魂石复活了',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x7a120,
                'maxMp': 0x3e8,
                'mpRecovery': 0x14,
                'hpRecovery': 0x1f4,
                'exp': 0x5dc,
                'atk': 0x3e8,
                'darkResist': 0x7d0,
                'lightResist': -0x4e20,
                'def': 0x1f4,
                'level': 0x96,
                'skills': [{'key': 'melee', 'level': 0x0}, {
                    'key': 'shaman.darkball',
                    'level': 0x0
                }, {
                    'key': 'chapter4.humans.seck.summonWomen',
                    'level': 0x0
                }, {'key': 'chapter4.humans.seck.healthDrill', 'level': 0x0}, {'key': 'enemy.upgrade', 'level': 0x0}],
                'loots': [{'key': 'gold', 'count': [0x1f4, 0x3e8], 'rate': 0x1}]
            }];
        }, 3526: m => {
            m['exports'] = [{
                'key': 'chapter4.humans.soldier',
                'name': '士兵',
                'description': '',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x7530,
                'atk': 0x1f4,
                'exp': 0x1c2,
                'level': 0x9a,
                'skills': [{'key': 'melee', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x32, 0x64], 'rate': 0x1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {
                    'type': 'ticket',
                    'rate': 0.0015,
                    'dungeons': {
                        'chapter4.westRolan1': 0x4,
                        'chapter4.westRolan2': 0x2,
                        'chapter4.sanAnthony1': 0x2,
                        'chapter4.sanAnthony2': 0x1
                    }
                }]
            }, {
                'key': 'chapter4.humans.musketeer',
                'name': '火枪手',
                'description': '',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x4e20,
                'atk': 0x1f4,
                'critRate': 0.3,
                'critBonus': 2.5,
                'exp': 0x1c2,
                'level': 0x9c,
                'skills': [{'key': 'melee', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x32, 0x64], 'rate': 0x1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {
                    'type': 'ticket',
                    'rate': 0.0015,
                    'dungeons': {
                        'chapter4.westRolan1': 0x4,
                        'chapter4.westRolan2': 0x2,
                        'chapter4.sanAnthony1': 0x2,
                        'chapter4.sanAnthony2': 0x1
                    }
                }]
            }, {
                'key': 'chapter4.humans.mortar',
                'name': '迫击炮',
                'description': '会玩火的狗头人，还是好萌。🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x9c40,
                'exp': 0x1c2,
                'atk': 0x226,
                'level': 0x9e,
                'skills': [{'key': 'melee.aoe', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x32, 0x64], 'rate': 0x1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {
                    'type': 'ticket',
                    'rate': 0.0015,
                    'dungeons': {
                        'chapter4.westRolan1': 0x4,
                        'chapter4.westRolan2': 0x2,
                        'chapter4.sanAnthony1': 0x2,
                        'chapter4.sanAnthony2': 0x1
                    }
                }]
            }, {
                'key': 'chapter4.humans.knights.dare',
                'name': '英勇骑士达尔',
                'description': '手黑党的领袖，丫用灵魂石复活了',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x7a120,
                'hpRecovery': 0x5dc,
                'maxRp': 0x64,
                'rpOnAttack': 0x5,
                'rpOnAttacked': 0x1,
                'exp': 0x5dc,
                'atk': 0x4b0,
                'def': 0x1f4,
                'allResist': 0x1f4,
                'level': 0xa0,
                'skills': [{'key': 'meleeForRage', 'level': 0x0}, {
                    'key': 'thump',
                    'level': 0x0
                }, {'key': 'mortalStrike', 'level': 0x0}, {'key': 'enemy.upgrade', 'level': 0x0}],
                'stunResist': 0xfa0,
                'loots': [{'key': 'gold', 'count': [0x1f4, 0x3e8], 'rate': 0x1}]
            }, {
                'key': 'chapter4.humans.knights.light',
                'name': '光明骑士莱特',
                'description': '手黑党的领袖，丫用灵魂石复活了',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x7a120,
                'hpRecovery': 0x5dc,
                'exp': 0x5dc,
                'atk': 0x4b0,
                'def': 0x1f4,
                'allResist': 0x1f4,
                'level': 0xa0,
                'skills': [{'key': 'knight.melee', 'level': 0x0}, {
                    'key': 'knight.glory.enemy',
                    'level': 0x0
                }, {'key': 'knight.thump', 'level': 0x0}, {'key': 'enemy.upgrade', 'level': 0x0}],
                'hooks': {'displayCpBar': (o, p) => !0x0},
                'stunResist': 0xfa0,
                'loots': [{'key': 'gold', 'count': [0x1f4, 0x3e8], 'rate': 0x1}]
            }, {
                'key': 'chapter4.humans.knights.blood',
                'name': '鲜血骑士布莱德',
                'description': '手黑党的领袖，丫用灵魂石复活了',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x7a120,
                'hpRecovery': 0x5dc,
                'exp': 0x5dc,
                'atk': 0x4b0,
                'def': 0x1f4,
                'allResist': 0x1f4,
                'level': 0xa0,
                'skills': [{'key': 'knight.sacrifice', 'level': 0x0}, {
                    'key': 'knight.thump',
                    'level': 0x0
                }, {'key': 'enemy.upgrade', 'level': 0x0}],
                'stunResist': 0xfa0,
                'hooks': {'displayCpBar': (o, p) => !0x0},
                'loots': [{'key': 'gold', 'count': [0x1f4, 0x3e8], 'rate': 0x1}]
            }, {
                'key': 'chapter4.humans.knights.sanction',
                'name': '制裁骑士山新',
                'description': '手黑党的领袖，丫用灵魂石复活了',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x7a120,
                'hpRecovery': 0x5dc,
                'exp': 0x5dc,
                'atk': 0x4b0,
                'def': 0x1f4,
                'allResist': 0x1f4,
                'level': 0xa0,
                'skills': [{'key': 'swordSkill', 'level': 0x0}, {
                    'key': 'knight.thumpHead.enemy',
                    'level': 0x0
                }, {'key': 'enemy.upgrade', 'level': 0x0}],
                'stunResist': 0xfa0,
                'loots': [{'key': 'gold', 'count': [0x1f4, 0x3e8], 'rate': 0x1}]
            }, {
                'key': 'chapter4.humans.knights.rage',
                'name': '全能骑士雷格',
                'description': '手黑党的领袖，丫用灵魂石复活了',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x7a120,
                'hpRecovery': 0x5dc,
                'maxRp': 0x64,
                'rpRecovery': 0x1,
                'rpOnAttack': 0xa,
                'rpOnAttacked': 0x3,
                'exp': 0x5dc,
                'atk': 0x708,
                'def': 0x1f4,
                'allResist': 0x1f4,
                'level': 0xa0,
                'skills': [{'key': 'cleave', 'level': 0x0}, {'key': 'thump', 'level': 0x0}, {
                    'key': 'shockWave',
                    'level': 0x0
                }, {'key': 'commandShout', 'level': 0x0}, {'key': 'enemy.upgrade', 'level': 0x0}],
                'stunResist': 0xfa0,
                'loots': [{'key': 'gold', 'count': [0x1f4, 0x3e8], 'rate': 0x1}]
            }];
        }, 7347: m => {
            m['exports'] = [{
                'key': 'chapter4.humans.trigger.1',
                'name': '神秘的把手',
                'description': '生命圣殿。',
                'camp': 'shrine',
                'race': 'unknown',
                'career': 'melee',
                'onPress'(o) {
                    return this['kill'](!0x1), o['sendGeneralMsg']('机关被触动了。一阵令人牙酸的声音之后，下水道的入口显现了出来。'), !0x1;
                }
            }, {
                'key': 'chapter4.humans.trigger.2',
                'name': '下水道',
                'description': '生命圣殿。',
                'camp': 'shrine',
                'race': 'unknown',
                'career': 'melee',
                'onPress'(o) {
                    return this['kill'](!0x1), !0x1;
                }
            }, {
                'key': 'chapter4.humans.trigger.3.1',
                'name': '未知的机关',
                'description': '真正通过的机关。',
                'camp': 'shrine',
                'race': 'unknown',
                'career': 'melee',
                'onPress'(o) {
                    for (const p of o['units']) p['type'] && p['type']['indexOf']('chapter4.humans.trigger.3') >= 0x0 && p['kill'](!0x1);
                    return o['sendGeneralMsg']('你触发了一个看起来很危险的机关，所有其它的机关都消失了。'), !0x1;
                }
            }, {
                'key': 'chapter4.humans.trigger.3.2',
                'name': '未知的机关',
                'description': '生命圣殿。',
                'camp': 'shrine',
                'race': 'unknown',
                'career': 'melee',
                'onPress'(o) {
                    return this['kill'](), o['sendGeneralMsg']('这个机关看起来没有任何作用。'), !0x1;
                }
            }, {
                'key': 'chapter4.humans.trigger.3.3',
                'name': '未知的机关',
                'description': '生命圣殿。',
                'camp': 'shrine',
                'race': 'unknown',
                'career': 'melee',
                'onPress'(o) {
                    this['kill']();
                    for (const p of o['units']) p['type'] && p['type']['indexOf']('chapter4.humans.trigger') >= 0x0 || o['sendDamage']('real', this, p, {'name': '爆炸'}, 0.4 * p['maxHp']);
                    return !0x1;
                }
            }, {
                'key': 'chapter4.humans.trigger.3.4',
                'name': '未知的机关',
                'description': '生命圣殿。',
                'camp': 'shrine',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x9c40,
                'onPress'(o) {
                    return this['transformType']('chapter4.humans.trigger.4'), !0x1;
                }
            }, {
                'key': 'chapter4.humans.trigger.4',
                'name': '活动的机关',
                'description': '',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x9c40,
                'atk': 0x7d0,
                'level': 0x9c,
                'skills': [{'key': 'melee', 'level': 0x0}]
            }, {
                'key': 'chapter4.humans.boss.fearas',
                'name': '菲尔斯男爵',
                'description': '地精刺客',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x7a120,
                'hpRecovery': 0x9c4,
                'exp': 0x708,
                'atk': 0x708,
                'level': 0xaa,
                'skills': [{'key': 'melee', 'level': 0x0}, {
                    'key': 'enemy.fearas.summonTrigger',
                    'level': 0x0
                }, {'key': 'enemy.upgrade', 'level': 0x0}],
                'stunResist': 0xfa0,
                'affixes': {'stronger': 0x1},
                'loots': [{'key': 'gold', 'count': [0x1f4, 0x3e8], 'rate': 0x1}]
            }, {
                'key': 'chapter4.humans.trigger.5.1',
                'name': '安全牌地雷',
                'description': '将在3秒后爆炸。',
                'camp': 'neutral',
                'race': 'unknown',
                'career': 'melee',
                'atk': 0x3e8,
                'skills': [{'key': 'enemy.fearas.bomb', 'level': 0x0}],
                'onPress'(o) {
                    for (const p of o['units']) this['canAttack'](p) && o['sendDamage']('fire', this, p, {'name': '爆炸'}, 0xdac);
                    return this['kill'](!0x1), o['sendGeneralMsg']('你试图解除安全牌地雷的时候，地雷反而爆炸的更厉害了。'), !0x1;
                }
            }, {
                'key': 'chapter4.humans.trigger.5.2',
                'name': '哑炮牌地雷',
                'description': '将在3秒后爆炸。',
                'camp': 'neutral',
                'race': 'unknown',
                'career': 'melee',
                'atk': 0x3e8,
                'skills': [{'key': 'enemy.fearas.bomb1', 'level': 0x0}],
                'onPress'(o) {
                    for (const p of o['units']) this['canAttack'](p) && (p['breakCasting'](), p['stun'](0x1, 'stunned'));
                    return this['kill'](!0x1), o['sendGeneralMsg']('哑炮牌地雷释放了一阵烟雾，你一时动弹不得。'), !0x1;
                }
            }, {
                'key': 'chapter4.humans.trigger.5.3',
                'name': '科学牌地雷',
                'description': '将在3秒后爆炸。',
                'camp': 'neutral',
                'race': 'unknown',
                'career': 'melee',
                'atk': 0x9c4,
                'skills': [{'key': 'enemy.fearas.bomb', 'level': 0x0}],
                'onPress'(o) {
                    return this['kill'](!0x1), o['sendGeneralMsg']('科学牌地雷被解除后，很科学的停止了工作。'), !0x1;
                }
            }, {
                'key': 'chapter4.humans.trigger.5.4',
                'name': '机械松鼠',
                'description': '额，拿错了。',
                'camp': 'alien',
                'race': 'unknown',
                'career': 'melee',
                'skills': [{'key': 'enemy.fearas.bomb2', 'level': 0x0}]
            }, {
                'key': 'chapter4.humans.trigger.6',
                'name': '牢笼控制台',
                'description': '真正通过的机关。',
                'camp': 'shrine',
                'race': 'unknown',
                'career': 'melee',
                'onPress'(o) {
                    return o['addEnemy']('chapter4.humans.boss.milhous', null, 0x0, self), this['kill'](!0x1), !0x1;
                }
            }, {
                'key': 'chapter4.humans.trigger.7',
                'name': '牢笼控制台',
                'description': '真正通过的机关。',
                'camp': 'shrine',
                'race': 'unknown',
                'career': 'melee',
                'onPress'(o) {
                    return this['kill'](!0x1), !0x1;
                }
            }, {
                'key': 'chapter4.humans.boss.milhous',
                'name': '米尔豪斯·法力风暴',
                'description': '侏儒法师',
                'camp': 'alien',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0xf4240,
                'exp': 0x708,
                'atk': 0x2ee,
                'level': 0xaa,
                'maxMp': 0x1388,
                'mpRecovery': 0x1f4,
                'skills': [{'key': 'fireBall', 'level': 0x0}, {'key': 'iceArrow', 'level': 0x0}, {
                    'key': 'windBlade',
                    'level': 0x0
                }, {'key': 'burning', 'level': 0x0}, {'key': 'iceNova', 'level': 0x0}],
                'stunResist': 0xfa0,
                'loots': [{'key': 'gold', 'count': [0x1f4, 0x3e8], 'rate': 0x1}],
                'onPress'(o) {
                    const p = this['buffs']['find'](q => 'enemy.evil.control' === q['type']);
                    p && this['removeBuff'](p);
                }
            }, {
                'key': 'chapter4.humans.boss.evil',
                'name': '上古邪恶',
                'description': '地精刺客',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x124f80,
                'exp': 0x708,
                'atk': 0x7d0,
                'def': -0x30d4,
                'allResist': -0x30d4,
                'darkResist': 0x1f40,
                'lightResist': -0x61a8,
                'hpRecovery': 0x9c4,
                'level': 0xaa,
                'skills': [{'key': 'melee', 'level': 0x0}, {
                    'key': 'darkElement.darkball',
                    'level': 0x0
                }, {'key': 'enemy.evil.reading1', 'level': 0x0}, {
                    'key': 'enemy.evil.control',
                    'level': 0x0
                }, {'key': 'enemy.upgrade', 'level': 0x0}],
                'stunResist': 0xfa0,
                'loots': [{'key': 'gold', 'count': [0x1f4, 0x3e8], 'rate': 0x1}]
            }];
        }, 1088: m => {
            m['exports'] = [{
                'key': 'chapter4.orcs.warrior',
                'name': '兽人战士',
                'description': '',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x3a98,
                'atk': 0xf0,
                'exp': 0x12c,
                'level': 0x86,
                'skills': [{'key': 'melee', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x1e, 0x50], 'rate': 0x1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {
                    'type': 'ticket',
                    'rate': 0.001,
                    'dungeons': {'chapter3.auran4': 0x4, 'chapter4.westRolan1': 0x2, 'chapter4.westRolan2': 0x1}
                }]
            }, {
                'key': 'chapter4.orcs.hunter',
                'name': '兽人驯狼师',
                'description': '会玩火的狗头人，还是好萌。🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x61a8,
                'maxEp': 0x32,
                'epRecovery': 0x2,
                'exp': 0x1c2,
                'atk': 0xc8,
                'level': 0x88,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'orcs.summonWolf', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x1e, 0x50], 'rate': 0x1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {
                    'type': 'ticket',
                    'rate': 0.001,
                    'dungeons': {'chapter3.auran4': 0x4, 'chapter4.westRolan1': 0x2, 'chapter4.westRolan2': 0x1}
                }]
            }, {
                'key': 'chapter3.orcs.wolf',
                'name': '野狼',
                'description': '',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x1f40,
                'atk': 0x96,
                'level': 0x82,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'wolf.worry', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': []
            }, {
                'key': 'chapter3.orcs.totem',
                'name': '治疗图腾',
                'description': '',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xbb8,
                'atk': 0x4b0,
                'level': 0x7e,
                'skills': [{'key': 'totem.heal', 'level': 0x0}],
                'loots': []
            }, {
                'key': 'chapter3.orcs.shaman',
                'name': '萨布罗·霜狼',
                'description': '兽人霜狼氏族领袖',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x61a80,
                'hpRecovery': 0x96,
                'exp': 0x708,
                'atk': 0x384,
                'level': 0x8c,
                'lightningResist': 0x7d0,
                'skills': [{'key': 'melee', 'level': 0x0}, {
                    'key': 'shaman.chainingLightning',
                    'level': 0x0
                }, {'key': 'orcs.summonHealToken', 'level': 0x0}, {'key': 'enemy.upgrade', 'level': 0x0}],
                'stunResist': 0xfa0,
                'loots': [{'key': 'gold', 'count': [0x1f4, 0x3e8], 'rate': 0x1}]
            }];
        }, 6242: m => {
            m['exports'] = [{
                'key': 'chapter5.daughter.monster1',
                'name': '黑暗之灵',
                'description': '',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x186a0,
                'atk': 0x258,
                'exp': 0x2bc,
                'level': 0xc2,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'shaman.darkball', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0xb4, 0xfa], 'rate': 0.5}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {'type': 'ticket', 'rate': 0.001, 'dungeons': {'chapter5.byer6': 0x1}}]
            }, {
                'key': 'chapter5.daughter.monster2',
                'name': '孤独之灵',
                'description': '会玩火的狗头人，还是好萌。🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x186a0,
                'exp': 0x2bc,
                'atk': 0x5dc,
                'level': 0xc2,
                'atkSpeed': 0.4,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'chapter5.daughter.monster2', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0xb4, 0xfa], 'rate': 0.5}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {'type': 'ticket', 'rate': 0.001, 'dungeons': {'chapter5.byer6': 0x1}}]
            }, {
                'key': 'chapter5.daughter.monster3',
                'name': '疼痛之灵',
                'description': '会玩火的狗头人，还是好萌。🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x186a0,
                'exp': 0x2bc,
                'atk': 0x5dc,
                'level': 0xc4,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'enemy.evil.reading1', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0xb4, 0xfa], 'rate': 0.5}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {'type': 'ticket', 'rate': 0.001, 'dungeons': {'chapter5.byer6': 0x1}}]
            }, {
                'key': 'chapter5.daughter.monster4',
                'name': '惊悸之灵',
                'description': '会玩火的狗头人，还是好萌。🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x186a0,
                'exp': 0x2bc,
                'atk': 0x5dc,
                'level': 0xc4,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'chapter5.daughter.monster4', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0xb4, 0xfa], 'rate': 0.5}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {'type': 'ticket', 'rate': 0.001, 'dungeons': {'chapter5.byer6': 0x1}}]
            }, {
                'key': 'chapter5.daughter.monster5',
                'name': '寒冷之灵',
                'description': '会玩火的狗头人，还是好萌。🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x186a0,
                'exp': 0x2bc,
                'atk': 0x5dc,
                'level': 0xc6,
                'atkSpeed': 0.4,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'shaman.iceball', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0xb4, 0xfa], 'rate': 0.5}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {'type': 'ticket', 'rate': 0.001, 'dungeons': {'chapter5.byer6': 0x1}}]
            }, {
                'key': 'chapter5.daughter.monster6',
                'name': '饥饿之灵',
                'description': '会玩火的狗头人，还是好萌。🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x186a0,
                'exp': 0x2bc,
                'atk': 0x5dc,
                'level': 0xc6,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'chapter4.humans.seck.healthDrill', 'level': 0x14}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0xb4, 0xfa], 'rate': 0.5}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {'type': 'ticket', 'rate': 0.001, 'dungeons': {'chapter5.byer6': 0x1}}]
            }, {
                'key': 'chapter5.daughter.badGiant',
                'name': '吃小孩的巨人',
                'description': '狗头人的大王，最萌了~\x20🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x16e360,
                'exp': 0xbb8,
                'atk': 0x9c4,
                'level': 0xc8,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'slime.swallow', 'level': 0x0}, {
                    'key': 'shockWave',
                    'level': 0x0
                }, {'key': 'enemy.upgrade', 'level': 0x0}],
                'stunResist': 0x1388,
                'loots': [{'key': 'gold', 'count': [0x352, 0x708], 'rate': 0x1}]
            }, {
                'key': 'chapter5.daughter.amira',
                'name': '艾米拉',
                'description': '狗头人的大王，最萌了~\x20🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x1e8480,
                'darkResist': 0x3e8,
                'lightResist': -0x2710,
                'exp': 0xbb8,
                'atk': 0xfa0,
                'level': 0xc8,
                'skills': [{'key': 'melee', 'level': 0x0}, {
                    'key': 'shaman.darkball',
                    'level': 0x0
                }, {'key': 'chapter5.daughter.monster2', 'level': 0x0}, {
                    'key': 'enemy.evil.reading1',
                    'level': 0x0
                }, {'key': 'chapter5.daughter.monster4', 'level': 0x0}, {
                    'key': 'shaman.iceball',
                    'level': 0x0
                }, {'key': 'chapter4.humans.seck.healthDrill', 'level': 0x0}, {'key': 'enemy.upgrade', 'level': 0x0}],
                'stunResist': 0x1388,
                'loots': [{'key': 'gold', 'count': [0x352, 0x708], 'rate': 0x1}]
            }];
        }, 8002: m => {
            m['exports'] = [{
                'key': 'chapter5.undead.ghost',
                'name': '受折磨的灵魂',
                'description': '',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xc350,
                'atk': 0x190,
                'exp': 0x1f4,
                'level': 0xae,
                'skills': [{'key': 'shaman.darkball', 'level': 0x0}, {'key': 'melee', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x4b, 0xc8], 'rate': 0x1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {'type': 'ticket', 'rate': 0.001, 'dungeons': {'chapter5.byer2': 0x1}}]
            }, {
                'key': 'chapter5.undead.zombie',
                'name': '不安份的尸体',
                'description': '会玩火的狗头人，还是好萌。🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xc350,
                'exp': 0x226,
                'atk': 0x3e8,
                'level': 0xb0,
                'skills': [{'key': 'melee', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x5, 0x14], 'rate': 0x1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {'type': 'ticket', 'rate': 0.001, 'dungeons': {'chapter5.byer2': 0x1}}]
            }, {
                'key': 'chapter5.necromancer',
                'name': '邪恶法师奈布',
                'description': '狗头人的大王，最萌了~\x20🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x124f80,
                'hpRecovery': 0x1f4,
                'exp': 0x708,
                'atk': 0x9c4,
                'darkResist': 0x7d0,
                'lightResist': -0xc350,
                'level': 0xb4,
                'skills': [{'key': 'melee', 'level': 0x0}, {
                    'key': 'shaman.darkball',
                    'level': 0x0
                }, {'key': 'chapter4.humans.seck.healthDrill', 'level': 0x0}, {
                    'key': 'enemy.upgrade',
                    'level': 0x0
                }, {'key': 'zombie.hide', 'level': 0x0}],
                'stunResist': 0x1388,
                'loots': [{'key': 'gold', 'count': [0x2bc, 0x5dc], 'rate': 0x1}]
            }];
        }, 4102: m => {
            m['exports'] = [{
                'key': 'chapter5.woodElf.crazy',
                'name': '发疯的木灵',
                'description': '',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x13880,
                'atk': 0x4b0,
                'exp': 0x226,
                'level': 0xb8,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'simba.thumpHead', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x96, 0xc8], 'rate': 0x1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {'type': 'ticket', 'rate': 0.001, 'dungeons': {'chapter5.byer4': 0x1}}]
            }, {
                'key': 'chapter5.woodElf.sad',
                'name': '悲痛过度的木灵',
                'description': '会玩火的狗头人，还是好萌。🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x13880,
                'exp': 0x28a,
                'atk': 0x5dc,
                'level': 0xba,
                'skills': [{'key': 'melee', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x96, 0x12c], 'rate': 0x1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {'type': 'ticket', 'rate': 0.001, 'dungeons': {'chapter5.byer4': 0x1}}]
            }, {
                'key': 'chapter5.woodElf.shamansa',
                'name': '暴食的萨曼莎',
                'description': '狗头人的大王，最萌了~\x20🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x16e360,
                'hpRecovery': 0x9c4,
                'exp': 0x960,
                'atk': 0x7d0,
                'level': 0xbe,
                'skills': [{'key': 'melee', 'level': 0x0}, {
                    'key': 'slime.swallow',
                    'level': 0x0
                }, {'key': 'shamansa.spew', 'level': 0x0}, {'key': 'enemy.upgrade', 'level': 0x0}],
                'stunResist': 0x1388,
                'loots': [{'key': 'gold', 'count': [0x2bc, 0x5dc], 'rate': 0x1}]
            }, {
                'key': 'chapter5.woodElf.arms',
                'name': '恐怖的残肢',
                'description': '',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x4e20,
                'atk': 0x4b0,
                'level': 0xb4,
                'skills': [{'key': 'melee', 'level': 0x0}]
            }, {
                'key': 'chapter5.woodElf.rosa',
                'name': '懒惰的罗莎',
                'description': '狗头人的大王，最萌了~\x20🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x16e360,
                'hpRecovery': 0x9c4,
                'exp': 0x960,
                'atk': 0xbb8,
                'level': 0xbe,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'rosa.sleepy', 'level': 0x0}, {
                    'key': 'rosa.angry',
                    'level': 0x0
                }, {'key': 'enemy.upgrade', 'level': 0x0}],
                'stunResist': 0x1388,
                'loots': [{'key': 'gold', 'count': [0x2bc, 0x5dc], 'rate': 0x1}]
            }];
        }, 7635: m => {
            m['exports'] = [{
                'key': 'kakarif.generations',
                'name': '卡卡列夫的后代',
                'description': '一团燃烧着的火元素',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x258,
                'exp': 0x1e,
                'atk': 0x14,
                'fireResist': 0x7d0,
                'coldResist': -0x1770,
                'level': 0x2d,
                'skills': [{'key': 'fireElement.fireball', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x5, 0x19], 'rate': 0.1}]
            }, {
                'key': 'kakarif.servants',
                'name': '卡卡列夫的仆从',
                'description': '一种来自火元素位面的蛇形生物',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'fireResist': 0x7d0,
                'coldResist': -0x1770,
                'maxHp': 0x2ee,
                'exp': 0x1e,
                'atk': 0x19,
                'level': 0x2d,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'fireElement.fireball', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x5, 0x23], 'rate': 0.1}]
            }, {
                'key': 'kakarif.illusion',
                'name': '卡卡列夫的幻象',
                'description': '一人高的元素生物，灼热的气浪迎面而来',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x1388,
                'fireResist': 0x7d0,
                'coldResist': -0xea60,
                'hpRecovery': 0x14,
                'exp': 0x4b0,
                'atk': 0x28,
                'level': 0x32,
                'skills': [{'key': 'kakarif.melee', 'level': 0x0}, {'key': 'kakarif.mad', 'level': 0x0}],
                'loots': [{'key': 'gold', 'count': [0x32, 0x96], 'rate': 0.25}]
            }];
        }, 9580: (m, o, p) => {
            m['exports'] = [...p(0x1f1c), ...p(0x8c5), ...p(0x786), ...p(0x1dd3), ...p(0x528), ...p(0x8ea), ...p(0x3f3), ...p(0x1388), ...p(0x14e9), ...p(0x1fae), ...p(0x1a40), ...p(0xf85), ...p(0x1ba0), ...p(0x440), ...p(0x149), ...p(0xdc6), ...p(0x1cb3), ...p(0x24d7), ...p(0x2131), ...p(0x1259), ...p(0x1f42), ...p(0x1006), ...p(0x1862), ...p(0xbcf)];
        }, 2282: m => {
            m['exports'] = [{
                'key': 'knight.normal',
                'name': '圣殿骑士',
                'description': '一团燃烧着的火元素',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x258,
                'exp': 0x1e,
                'atk': 0x14,
                'def': 0x64,
                'level': 0x41,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'shieldShock', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x5, 0x19], 'rate': 0.1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }]
            }, {
                'key': 'knight.prayer',
                'name': '圣殿牧师',
                'description': '一种来自火元素位面的蛇形生物',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x2ee,
                'exp': 0x1e,
                'atk': 0xa,
                'level': 0x41,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'knight.heal', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x5, 0x23], 'rate': 0.1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }]
            }, {
                'key': 'knight.leader',
                'name': '骑士队长卡罗',
                'description': '一人高的元素生物，灼热的气浪迎面而来',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x1b58,
                'def': 0x12c,
                'exp': 0x4b0,
                'atk': 0x46,
                'level': 0x46,
                'skills': [{'key': 'melee', 'level': 0x0}, {
                    'key': 'knight.shout',
                    'level': 0x0
                }, {'key': 'knight.reflect', 'level': 0x0}],
                'loots': [{'key': 'gold', 'count': [0x32, 0x96], 'rate': 0.25}]
            }];
        }, 1926: m => {
            m['exports'] = [{
                'key': 'kobold.miner',
                'name': '狗头人矿工',
                'description': '狗头人居然长这么多的胡子，有点萌。😊',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x12c,
                'atk': 0xa,
                'exp': 0x14,
                'level': 0x22,
                'skills': [{'key': 'melee', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x1, 0xa], 'rate': 0.2}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {
                    'type': 'ticket',
                    'rate': 0.001,
                    'dungeons': {'town.woods': 0x4, 'town.mine.2': 0x2, 'town.mine.3': 0x1}
                }]
            }, {
                'key': 'kobold.shaman',
                'name': '狗头人萨满',
                'description': '会玩火的狗头人，还是好萌。🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x190,
                'exp': 0x28,
                'atk': 0xa,
                'level': 0x24,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'shaman.fireball', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x5, 0xa], 'rate': 0.2}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {
                    'type': 'ticket',
                    'rate': 0.001,
                    'dungeons': {'town.woods': 0x4, 'town.mine.2': 0x2, 'town.mine.3': 0x1}
                }]
            }, {
                'key': 'kobold.candle',
                'name': '安全牌蜡烛',
                'description': '一根蜡烛。',
                'camp': 'neutral',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xa,
                'exp': 0x0,
                'atk': 0x50,
                'level': 0x1,
                'atkSpeed': 0.4,
                'skills': [{'key': 'bomb', 'level': 0x0}],
                'onPress'(o) {
                    return this['kill'](), !0x1;
                },
                'loots': []
            }, {
                'key': 'kobold.goldteeth',
                'name': '金牙',
                'description': '狗头人的大王，最萌了~\x20🔥',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0xdac,
                'hpRecovery': 0x5,
                'exp': 0x320,
                'atk': 0x32,
                'level': 0x28,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'candle.call', 'level': 0x0}],
                'loots': [{'key': 'gold', 'count': [0x5, 0x64], 'rate': 0x1}]
            }];
        }, 1011: m => {
            m['exports'] = [{
                'key': 'muzhuang1',
                'name': '训练木桩',
                'description': '\x20\x20\x20',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x1fffffffffffff,
                'atk': 0x1,
                'atkSpeed': 0.2,
                'exp': 0x1,
                'level': 0x98967f,
                'skills': [],
                'loots': []
            }, {
                'key': 'muzhuang2',
                'name': '凶狠的训练木桩',
                'description': '\x20\x20\x20',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x3333333333333,
                'atk': 0x1,
                'atkSpeed': 0.2,
                'exp': 0x1,
                'level': 0x98967f,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'mz2skill2', 'level': 0x0}],
                'hooks': {'speed_nochange': (o, p, q) => 0x1},
                'loots': []
            }];
        }, 4697: m => {
            m['exports'] = [{
                'key': 'shrine.heal',
                'name': '生命圣殿',
                'description': '生命圣殿。',
                'camp': 'shrine',
                'race': 'unknown',
                'career': 'melee',
                'onPress'(o) {
                    for (const p of o['units']['filter'](q => 'player' === q['camp'] || 'alien' === q['camp'])) p['hp'] += 0x1 * p['maxHp'];
                    return this['kill'](), !0x1;
                }
            }, {
                'key': 'shrine.energy',
                'name': '能量圣殿',
                'description': '增加怒气、能量、法力恢复速度30秒。',
                'camp': 'shrine',
                'race': 'unknown',
                'career': 'melee',
                'onPress'(o) {
                    for (const p of o['units']['filter'](q => 'player' === q['camp'] || 'alien' === q['camp'])) p['addBuff']('shrine.energy', 0xea60);
                    return this['kill'](), !0x1;
                }
            }, {
                'key': 'shrine.power',
                'name': '威能圣殿',
                'description': '增加所有造成的伤害30秒。',
                'camp': 'shrine',
                'race': 'unknown',
                'career': 'melee',
                'onPress'(o) {
                    for (const p of o['units']['filter'](q => 'player' === q['camp'] || 'alien' === q['camp'])) p['addBuff']('shrine.power', 0xea60);
                    return this['kill'](), !0x1;
                }
            }, {
                'key': 'shrine.experience',
                'name': '经验圣殿',
                'description': '增加所有造成的伤害30秒。',
                'camp': 'shrine',
                'race': 'unknown',
                'career': 'melee',
                'onPress'(o) {
                    for (const p of o['units']['filter'](q => 'player' === q['camp'] || 'alien' === q['camp'])) p['addBuff']('shrine.experience', 0xea60);
                    return this['kill'](), !0x1;
                }
            }, {
                'key': 'shrine.equip',
                'name': '装备圣殿',
                'description': '增加所有造成的伤害30秒。',
                'camp': 'shrine',
                'race': 'unknown',
                'career': 'melee',
                'loots': [{'type': 'equip', 'rate': 0.25, 'mfRate': 0x1}],
                'onPress'(o) {
                    return this['kill'](), !0x1;
                }
            }, {
                'key': 'shrine.wuxingshi',
                'name': '精粹圣殿',
                'description': '增加所有造成的伤害30秒。',
                'camp': 'shrine',
                'race': 'unknown',
                'career': 'melee',
                'loots': [{'key': 'wuxingshi', 'rate': 0x1, 'count': [0x3, 0x5]}],
                'onPress'(o) {
                    return this['kill'](), !0x1;
                }
            }, {
                'key': 'shrine.redbag',
                'name': '欢愉圣殿',
                'description': '增加所有造成的伤害30秒。',
                'camp': 'shrine',
                'race': 'unknown',
                'career': 'melee',
                'loots': [{'key': 'year2018.redbag', 'rate': 0x1, 'count': [0x1, 0x1]}],
                'onPress'(o) {
                    return this['kill'](), !0x1;
                }
            }];
        }, 7964: m => {
            m['exports'] = [{
                'key': 'slime.minimal',
                'name': '小史莱姆',
                'description': '黏糊糊的一团，是被黑暗之力操控的最原始的生物，不断吞噬周遭的物体。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xf,
                'atk': 0.5,
                'exp': 0x2,
                'level': 0x8,
                'skills': [{'key': 'melee', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x1, 0x5], 'rate': 0.1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {'type': 'ticket', 'rate': 0.001, 'dungeons': {'town.cave2': 0x1}}]
            }, {
                'key': 'slime.giant',
                'name': '大史莱姆',
                'description': '黏糊糊的一大团，缓慢的蠕动着，透过身体还能看到未消化的东西。',
                'camp': 'neutral',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x1e,
                'exp': 0x3,
                'atk': 0x2,
                'level': 0xc,
                'skills': [{'key': 'melee', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x1, 0x14], 'rate': 0.1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {'type': 'ticket', 'rate': 0.001, 'dungeons': {'town.cave2': 0x1}}]
            }, {
                'key': 'slime.giant.enemy',
                'name': '大史莱姆',
                'description': '黏糊糊的一大团，缓慢的蠕动着，透过身体还能看到未消化的杂物。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x1e,
                'exp': 0x3,
                'atk': 0x1,
                'level': 0x10,
                'skills': [{'key': 'melee', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x1, 0x14], 'rate': 0.1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {'type': 'ticket', 'rate': 0.001, 'dungeons': {'town.cave2': 0x1}}]
            }, {
                'key': 'slime.queen',
                'name': '母体史莱姆',
                'description': '不断变形着的黏液，会吞食周围的其它史莱姆。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x1f4,
                'def': 0x64,
                'exp': 0x32,
                'atk': 0x5,
                'level': 0x14,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'slime.swallow', 'level': 0x0}],
                'loots': [{'key': 'gold', 'count': [0x1, 0x64], 'rate': 0.25}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0x2
                }]
            }];
        }, 3023: m => {
            m['exports'] = [{
                'key': 'soul_karon',
                'name': '卡隆的投影',
                'description': '百鬼之王·卡隆',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0xf4240,
                'hpRecovery': 0x320,
                'maxMp': 0x2540be3ff,
                'mpRecovery': 0x2540be3ff,
                'darkResist': 0x1869f,
                'lightResist': -0xf423f,
                'exp': 0x1,
                'atk': 0x7d0,
                'level': 0x12c,
                'atkSpeed': 0x1,
                'stunResist': 0x9c40,
                'skills': [{'key': 'soul_7', 'level': 0x0}, {
                    'key': 'soul_iceplus',
                    'level': 0x0
                }, {'key': 'karon_dark_jige', 'level': 0x0}, {
                    'key': 'karon_tombstoneplus',
                    'level': 0x0
                }, {'key': 'soul_darkfire', 'level': 0x0}, {
                    'key': 'ghost_puncture',
                    'level': 0x0
                }, {'key': 'soul_poison', 'level': 0x0}, {'key': 'soul_ice', 'level': 0x0}, {
                    'key': 'soul_shadow',
                    'level': 0x0
                }, {'key': 'ghost_fury', 'level': 0x0}, {'key': 'soul_weak', 'level': 0x0}, {
                    'key': 'karon_tombstone',
                    'level': 0x0
                }, {'key': 'soul_armor', 'level': 0x0}, {'key': 'ghost_whip', 'level': 0x0}, {
                    'key': 'moonlight_slash',
                    'level': 0x0
                }, {'key': 'soul_power', 'level': 0x0}, {'key': 'onikiri', 'level': 0x0}, {
                    'key': 'jige_atk',
                    'level': 0x0
                }],
                'loots': [{'key': 'gold', 'count': [0x1, 0x1], 'rate': 0x1}]
            }, {
                'key': 'paladin_ariel',
                'name': '圣骑士·伊瑞尔',
                'description': '圣骑士·伊瑞尔',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x1f40,
                'exp': 0x1,
                'atk': 0x96,
                'level': 0x1e,
                'atkSpeed': 0x1,
                'skills': [{'key': 'ariel_skill1', 'level': 0x0}, {'key': 'ariel_skill2', 'level': 0x0}],
                'loots': [{'key': 'gold', 'count': [0x1, 0x1], 'rate': 0x1}]
            }];
        }, 9431: m => {
            function o(s) {
                return s <= 0x3c ? 0.3 * s + 0x1 : s <= 0x46 ? 0.5 * s + 0x1 - 0x6 : void 0x0;
            }

            const p = [{
                'key': 'summon.element.slime',
                'name': '~史莱姆~',
                'description': '一团跳动的火焰',
                'camp': 'player',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xa,
                'def': 0x7d0,
                'fireResist': -0x7d0,
                'meleeAbsorb': 0.5,
                'skills': [{'key': 'melee', 'level': 0x0}],
                'v2Skills': [{'key': 'melee', 'level': 0x0}],
                'hooks': {
                    'speedRateAdd'(s, u, v) {
                        return this['summoner'] ? this['summoner']['runAttrHooks'](u, 'speedRateAdd') : u;
                    }, 'willAttack': (s, u, v) => u && v['meleeAbsorb'] < 0x1, 'willDamage'(s, u, v, w) {
                        return this['summoner'] ? this['summoner']['runAttrHooks'](u, 'summonerWillDamage', this, v, w) : u;
                    }, 'elementType': (s, u) => 'melee', 'maxHp'(s, u) {
                        if (!this['summoner']) return 0x0;
                        const {player: v} = this['summoner'], w = v['getSkillLevel']('summon_slime');
                        return this['summoner']['maxHp'] ** (0x1 + w / 0xa);
                    }, 'atk'(s, u) {
                        if (!this['summoner']) return 0x0;
                        const {player: v} = this['summoner'], w = v['getSkillLevel']('summon_slime');
                        return Math['round'](this['summoner']['int'] / 0x2 + w);
                    }
                }
            }, {
                'key': 'summon.element.fire',
                'name': '火焰精灵',
                'description': '一团跳动的火焰',
                'camp': 'player',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xa,
                'fireAbsorb': 1.2,
                'skills': [{'key': 'fireElement.fireball', 'level': 0x0}],
                'v2Skills': [{'key': 'fireElement.flameStrike', 'level': 0x0}],
                'hooks': {
                    'speedRateAdd'(s, u, v) {
                        return this['summoner'] ? this['summoner']['runAttrHooks'](u, 'speedRateAdd') : u;
                    }, 'willAttack': (s, u, v) => u && v['fireAbsorb'] < 0x1, 'willDamage'(s, u, v, w) {
                        return this['summoner'] ? this['summoner']['runAttrHooks'](u, 'summonerWillDamage', this, v, w) : u;
                    }, 'elementType': (s, u) => 'fire', 'maxHp'(s, u) {
                        if (!this['summoner']) return 0x0;
                        const {player: v} = this['summoner'], w = v['getSkillLevel']('summonFire');
                        return 0.2 * this['summoner']['maxHp'] * (0x1 + w / 0xa);
                    }, 'critRate'(s, u) {
                        return this['summoner'] ? this['summoner']['critRate'] : 0x0;
                    }, 'critBonus'(s, u) {
                        return this['summoner'] ? this['summoner']['critBonus'] : 0x0;
                    }, 'atk'(s, u) {
                        if (!this['summoner']) return 0x0;
                        const {player: v} = this['summoner'], w = v['getSkillLevel']('summonFire');
                        return 0x5 * o(v['level']) * (0.01 * this['summoner']['int'] + 0x1) * (0.3 * w + 0x1) * this['summoner']['dmgAdd'];
                    }, 'def'(s, u) {
                        return this['summoner']['def'];
                    }
                }
            }, {
                'key': 'summon.element.water',
                'name': '水元素',
                'description': '一团滚动的水元素',
                'camp': 'player',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xa,
                'iceAbsorb': 1.2,
                'skills': [{'key': 'waterElement.waterArrow', 'level': 0x0}, {'key': 'iceNova', 'level': 0x0}],
                'v2Skills': [{'key': 'fishzilla.bomb', 'level': 0x0}],
                'hooks': {
                    'speedRateAdd'(s, u, v) {
                        return this['summoner'] ? this['summoner']['runAttrHooks'](u, 'speedRateAdd') : u;
                    }, 'willAttack': (s, u, v) => u && v['coldAbsorb'] < 0x1, 'willDamage'(s, u, v, w) {
                        return this['summoner'] ? this['summoner']['runAttrHooks'](u, 'summonerWillDamage', this, v, w) : u;
                    }, 'elementType': (s, u) => 'water', 'maxHp'(s, u) {
                        if (!this['summoner']) return 0x0;
                        const {player: v} = this['summoner'], w = v['getSkillLevel']('summonWater');
                        return 0.2 * this['summoner']['maxHp'] * (0x1 + w / 0xa);
                    }, 'critRate'(s, u) {
                        return this['summoner'] ? this['summoner']['critRate'] : 0x0;
                    }, 'critBonus'(s, u) {
                        return this['summoner'] ? this['summoner']['critBonus'] : 0x0;
                    }, 'atk'(s, u) {
                        if (!this['summoner']) return 0x0;
                        const {player: v} = this['summoner'], w = v['getSkillLevel']('summonWater');
                        return 0x4 * o(v['level']) * (0.01 * this['summoner']['int'] + 0x1) * (0.3 * w + 0x1) * this['summoner']['dmgAdd'];
                    }, 'def'(s, u) {
                        return this['summoner'] ? 0x2 * this['summoner']['def'] : 0x0;
                    }
                }
            }, {
                'key': 'summon.element.earth',
                'name': '岩石傀儡',
                'description': '坚固的岩石傀儡',
                'camp': 'player',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xa,
                'atkSpeed': 0.666,
                'def': 0x64,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'summon.earth.comeToMe', 'level': 0x0}],
                'v2Skills': [{'key': 'earthElement.recovery', 'level': 0x0}],
                'hooks': {
                    'speedRateAdd'(s, u, v) {
                        return this['summoner'] ? this['summoner']['runAttrHooks'](u, 'speedRateAdd') : u;
                    }, 'willDamage'(s, u, v, w) {
                        return this['summoner'] ? this['summoner']['runAttrHooks'](u, 'summonerWillDamage', this, v, w) : u;
                    }, 'elementType': (s, u) => 'melee', 'maxHp'(s, u) {
                        if (!this['summoner']) return 0x0;
                        const {player: v} = this['summoner'], w = v['getSkillLevel']('summonEarth');
                        return 0.4 * this['summoner']['maxHp'] * (0x1 + w / 0xa);
                    }, 'critRate'(s, u) {
                        return this['summoner'] ? this['summoner']['critRate'] : 0x0;
                    }, 'critBonus'(s, u) {
                        return this['summoner'] ? this['summoner']['critBonus'] : 0x0;
                    }, 'atk'(s, u) {
                        if (!this['summoner']) return 0x0;
                        const {player: v} = this['summoner'], w = v['getSkillLevel']('summonEarth');
                        return 0x6 * o(v['level']) * (0.01 * this['summoner']['int'] + 0x1) * (0.3 * w + 0x1) * this['summoner']['dmgAdd'];
                    }, 'def'(s, u) {
                        return this['summoner'] ? 0x5 * this['summoner']['def'] : 0x0;
                    }
                }
            }, {
                'key': 'summon.element.lightning',
                'name': '闪电风暴',
                'description': '一团跳动的闪电',
                'camp': 'player',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xa,
                'lightningAbsorb': 1.2,
                'skills': [{'key': 'lightningElement.chainingLightning', 'level': 0x0}],
                'v2Skills': [{'key': 'lightningElement.stunAll', 'level': 0x0}],
                'hooks': {
                    'speedRateAdd'(s, u, v) {
                        return this['summoner'] ? this['summoner']['runAttrHooks'](u, 'speedRateAdd') : u;
                    }, 'willAttack': (s, u, v) => u && v['lightningAbsorb'] < 0.5, 'willDamage'(s, u, v, w) {
                        return this['summoner'] ? this['summoner']['runAttrHooks'](u, 'summonerWillDamage', this, v, w) : u;
                    }, 'elementType': (s, u) => 'lightning', 'maxHp'(s, u) {
                        if (!this['summoner']) return 0x0;
                        const {player: v} = this['summoner'], w = v['getSkillLevel']('summonLightning');
                        return 0.2 * this['summoner']['maxHp'] * (0x1 + w / 0xa);
                    }, 'critRate'(s, u) {
                        return this['summoner'] ? this['summoner']['critRate'] : 0x0;
                    }, 'critBonus'(s, u) {
                        return this['summoner'] ? this['summoner']['critBonus'] : 0x0;
                    }, 'atk'(s, u) {
                        if (!this['summoner']) return 0x0;
                        const {player: v} = this['summoner'], w = v['getSkillLevel']('summonLightning');
                        return 0x5 * o(v['level']) * (0.01 * this['summoner']['int'] + 0x1) * (0.3 * w + 0x1) * this['summoner']['dmgAdd'];
                    }, 'def'(s, u) {
                        return 0x2 * this['summoner']['def'];
                    }
                }
            }], q = p['map'](s => ({
                ...s,
                'key': s['key'] + '.2',
                'name': 'II型' + s['name'],
                'skills': [...s['skills'], ...s['v2Skills']]
            }));
            m['exports'] = [...p, ...q];
        }, 8497: m => {
            m['exports'] = [{
                'key': 'summon_tombstone',
                'name': '墓碑',
                'description': '哈哈哈哈，来打我啊',
                'camp': 'alien',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xa,
                'skills': [{'key': 'tombstone_boom', 'level': 0x0}],
                'hooks': {
                    'atk'(o, p) {
                        return this['summoner'] ? this['summoner']['atk'] : 0x0;
                    }, 'def'(o, p) {
                        if (!this['summoner']) return 0x1;
                        const {player: q} = this['summoner'];
                        return q['getSkillLevel']('tombstone');
                    }, 'speedRateAdd'(o, p, q) {
                        return this['summoner'] ? this['summoner']['runAttrHooks'](p, 'speedRateAdd') : p;
                    }, 'critRate'(o, p) {
                        return this['summoner'] ? this['summoner']['critRate'] : 0x0;
                    }, 'critBonus'(o, p) {
                        return this['summoner'] ? this['summoner']['critBonus'] : 0x0;
                    }, 'darkdmgAdd'(o, p) {
                        return this['summoner'] ? this['summoner']['darkdmgAdd'] : 0x0;
                    }, 'maxHp'(o, p) {
                        return this['summoner'] ? 0.05 * this['summoner']['maxHp'] : 0x1;
                    }
                }
            }, {
                'key': 'summon_tombstoneplus',
                'name': '坟头',
                'description': '哈哈哈哈，来打我啊',
                'camp': 'alien',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xa,
                'allResist': 0x7d0,
                'poisonResist': 0x1869f,
                'darkResist': 0x1869f,
                'lightResist': -0x1869f,
                'skills': [{'key': 'tombstoneplus_skill1', 'level': 0x0}, {
                    'key': 'tombstoneplus_skill2',
                    'level': 0x0
                }],
                'hooks': {
                    'atk'(o, p) {
                        return this['summoner'] ? this['summoner']['atk'] : 0x0;
                    }, 'def'(o, p) {
                        if (!this['summoner']) return 0x1;
                        const {player: q} = this['summoner'];
                        return q['getSkillLevel']('tombstoneplus');
                    }, 'speedRateAdd'(o, p, q) {
                        return this['summoner'] ? this['summoner']['runAttrHooks'](p, 'speedRateAdd') : p;
                    }, 'critRate'(o, p) {
                        return this['summoner'] ? this['summoner']['critRate'] : 0x0;
                    }, 'critBonus'(o, p) {
                        return this['summoner'] ? this['summoner']['critBonus'] : 0x0;
                    }, 'darkdmgAdd'(o, p) {
                        return this['summoner'] ? this['summoner']['darkdmgAdd'] : 0x0;
                    }, 'maxHp'(o, p) {
                        return this['summoner'] ? 0.1 * this['summoner']['maxHp'] : 0x1;
                    }
                }
            }, {
                'key': 'summon_jige',
                'name': '神官吉哥',
                'description': '哈哈哈哈，来打我啊',
                'camp': 'alien',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xa,
                'maxMp': 0x98967f,
                'mpRecovery': 0x1869f,
                'poisonResist': 0x1869f,
                'darkResist': 0x1869f,
                'lightResist': -0x1869f,
                'skills': [{'key': 'jige_atk', 'level': 0x19}, {'key': 'onikiri', 'level': 0x19}, {
                    'key': 'tombstone',
                    'level': 0x19
                }, {'key': 'tombstoneplus_skill2', 'level': 0x0}],
                'hooks': {
                    'atk'(o, p) {
                        return this['summoner'] ? this['summoner']['atk'] : 0x0;
                    }, 'def'(o, p) {
                        if (!this['summoner']) return 0x1;
                        const {player: q} = this['summoner'];
                        return q['getSkillLevel']('dark_jige');
                    }, 'speedRateAdd'(o, p, q) {
                        return this['summoner'] ? this['summoner']['runAttrHooks'](p, 'speedRateAdd') : p;
                    }, 'critRate'(o, p) {
                        return this['summoner'] ? this['summoner']['critRate'] : 0x0;
                    }, 'critBonus'(o, p) {
                        return this['summoner'] ? this['summoner']['critBonus'] : 0x0;
                    }, 'darkdmgAdd'(o, p) {
                        return this['summoner'] ? this['summoner']['darkdmgAdd'] : 0x0;
                    }, 'maxHp'(o, p) {
                        return this['summoner'] ? this['summoner']['maxHp'] : 0x1;
                    }
                }
            }, {
                'key': 'karon_summon_tombstone',
                'name': '墓碑',
                'description': '哈哈哈哈，来打我啊',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xa,
                'def': 0x32,
                'skills': [{'key': 'tombstone_boom', 'level': 0x32}],
                'hooks': {
                    'atk'(o, p) {
                        return this['summoner'] ? this['summoner']['atk'] : 0x0;
                    }, 'speedRateAdd'(o, p, q) {
                        return this['summoner'] ? this['summoner']['runAttrHooks'](p, 'speedRateAdd') : p;
                    }, 'critRate'(o, p) {
                        return this['summoner'] ? this['summoner']['critRate'] : 0x0;
                    }, 'critBonus'(o, p) {
                        return this['summoner'] ? this['summoner']['critBonus'] : 0x0;
                    }, 'darkdmgAdd'(o, p) {
                        return this['summoner'] ? this['summoner']['darkdmgAdd'] : 0x0;
                    }, 'maxHp'(o, p) {
                        return this['summoner'] ? 0.05 * this['summoner']['maxHp'] : 0x1;
                    }
                }
            }, {
                'key': 'karon_summon_tombstoneplus',
                'name': '坟头',
                'description': '哈哈哈哈，来打我啊',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xa,
                'def': 0x32,
                'allResist': 0x7d0,
                'poisonResist': 0x1869f,
                'darkResist': 0x1869f,
                'lightResist': -0x1869f,
                'skills': [{'key': 'tombstoneplus_skill1', 'level': 0x32}, {
                    'key': 'tombstoneplus_skill2',
                    'level': 0x32
                }],
                'hooks': {
                    'atk'(o, p) {
                        return this['summoner'] ? this['summoner']['atk'] : 0x0;
                    }, 'speedRateAdd'(o, p, q) {
                        return this['summoner'] ? this['summoner']['runAttrHooks'](p, 'speedRateAdd') : p;
                    }, 'critRate'(o, p) {
                        return this['summoner'] ? this['summoner']['critRate'] : 0x0;
                    }, 'critBonus'(o, p) {
                        return this['summoner'] ? this['summoner']['critBonus'] : 0x0;
                    }, 'darkdmgAdd'(o, p) {
                        return this['summoner'] ? this['summoner']['darkdmgAdd'] : 0x0;
                    }, 'maxHp'(o, p) {
                        return this['summoner'] ? 0.1 * this['summoner']['maxHp'] : 0x1;
                    }
                }
            }, {
                'key': 'karon_summon_jige',
                'name': '神官吉哥',
                'description': '哈哈哈哈，来打我啊',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xa,
                'def': 0x32,
                'maxMp': 0x98967f,
                'mpRecovery': 0x1869f,
                'poisonResist': 0x1869f,
                'darkResist': 0x1869f,
                'lightResist': -0x1869f,
                'skills': [{'key': 'jige_atk', 'level': 0x32}, {
                    'key': 'onikiri',
                    'level': 0x32
                }, {'key': 'karon_tombstone', 'level': 0x32}, {'key': 'tombstoneplus_skill2', 'level': 0x32}],
                'hooks': {
                    'atk'(o, p) {
                        return this['summoner'] ? this['summoner']['atk'] : 0x0;
                    }, 'speedRateAdd'(o, p, q) {
                        return this['summoner'] ? this['summoner']['runAttrHooks'](p, 'speedRateAdd') : p;
                    }, 'critRate'(o, p) {
                        return this['summoner'] ? this['summoner']['critRate'] : 0x0;
                    }, 'critBonus'(o, p) {
                        return this['summoner'] ? this['summoner']['critBonus'] : 0x0;
                    }, 'darkdmgAdd'(o, p) {
                        return this['summoner'] ? this['summoner']['darkdmgAdd'] : 0x0;
                    }, 'maxHp'(o, p) {
                        return this['summoner'] ? this['summoner']['maxHp'] : 0x1;
                    }
                }
            }];
        }, 2245: m => {
            m['exports'] = [{
                'key': 'wolf.minimal',
                'name': '幼狼',
                'description': '山里的狼有这么多？看来大人们真的没有骗人。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x64,
                'atk': 1.5,
                'exp': 0x5,
                'level': 0x18,
                'skills': [{'key': 'melee', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x1, 0xa], 'rate': 0.1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {'type': 'ticket', 'rate': 0.001, 'dungeons': {'town.cave2': 0x2, 'town.woods': 0x1}}]
            }, {
                'key': 'wolf.giant',
                'name': '母狼',
                'description': '你问我怎么分清是公是母的？小孩子不要问太多……',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xc8,
                'exp': 0xa,
                'atk': 0x6,
                'level': 0x1a,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'wolf.heal', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x1, 0x14], 'rate': 0.1}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {'type': 'ticket', 'rate': 0.001, 'dungeons': {'town.cave2': 0x2, 'town.woods': 0x1}}]
            }, {
                'key': 'wolf.king',
                'name': '狼王',
                'description': '头顶有一撮白毛。据说这是最好的品种的象征',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0xbb8,
                'def': 0x32,
                'exp': 0xc8,
                'atk': 0xc,
                'level': 0x1e,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'wolf.call', 'level': 0x0}],
                'loots': [{'key': 'gold', 'count': [0x1, 0xc8], 'rate': 0.25}]
            }];
        }, 1320: m => {
            m['exports'] = [{
                'key': 'zombies.farmer',
                'name': '农夫发狂',
                'description': '两眼发红，口水流了一嘴，看起来极其可怕',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x1c2,
                'atk': 0xa,
                'exp': 0x14,
                'level': 0x36,
                'skills': [{'key': 'melee', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x1, 0xa], 'rate': 0.2}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {
                    'type': 'ticket',
                    'rate': 0.001,
                    'dungeons': {'town.woods': 0x4, 'town.neighbourTown.2': 0x3, 'town.neighbourTown.3': 0x1}
                }]
            }, {
                'key': 'zombies.hammersmith',
                'name': '铁匠发狂',
                'description': '大哥，放下你手里的锤子！有话好好说！',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x258,
                'exp': 0x28,
                'atk': 0x1e,
                'level': 0x38,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'zombie.thumpHead', 'level': 0x0}],
                'affixes': {
                    'stronger': 0x2,
                    'faster': 0x1,
                    'recover': 0x1,
                    'yingpi': 0x1,
                    'dead': 0x1,
                    'magic': 0x1,
                    'old': 0x1
                },
                'loots': [{'key': 'gold', 'count': [0x5, 0xa], 'rate': 0.2}, {
                    'type': 'equip',
                    'rate': 0.05,
                    'mfRate': 0x1
                }, {
                    'type': 'ticket',
                    'rate': 0.001,
                    'dungeons': {'town.woods': 0x4, 'town.neighbourTown.2': 0x3, 'town.neighbourTown.3': 0x1}
                }]
            }, {
                'key': 'zombie.necromancer',
                'name': '死灵法师奈布',
                'description': '死灵法师头目',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x1770,
                'hpRecovery': 0xf,
                'exp': 0x320,
                'atk': 0x0,
                'level': 0x3c,
                'skills': [{'key': 'zombie.heal', 'level': 0x0}, {'key': 'zombie.hide', 'level': 0x0}],
                'loots': [{'key': 'gold', 'count': [0x5, 0x64], 'rate': 0x1}]
            }];
        }, 77: m => {
            m['exports'] = [{
                'key': 'stronger',
                'name': '强壮的',
                'hooks': {'maxHpMul': (o, p) => 1.5 * p}
            }, {'key': 'faster', 'name': '快速的', 'hooks': {'atkSpeedMul': (o, p) => 0x2 * p}}, {
                'key': 'recover',
                'name': '自愈的',
                'hooks': {
                    'hpRecovery'(o, p) {
                        return p + 0.005 * this['maxHp'];
                    }
                }
            }, {'key': 'yingpi', 'name': '硬皮的', 'hooks': {'defAdd': (o, p) => p + 0x1869f}}, {
                'key': 'dead',
                'name': '快嘎的',
                'hooks': {'maxHpMul': (o, p) => 0.1 * p}
            }, {
                'key': 'magic',
                'name': '抗魔的',
                'hooks': {
                    'fireResist': (o, p) => p + 0x1869f,
                    'coldResist': (o, p) => p + 0x1869f,
                    'lightningResist': (o, p) => p + 0x1869f,
                    'darkResist': (o, p) => p + 0x1869f,
                    'lightResist': (o, p) => p + 0x1869f
                }
            }, {'key': 'old', 'name': '年迈的', 'hooks': {'atkSpeedMul': (o, p) => 0.1 * p}}];
        }, 1862: (m, o, p) => {
            m['exports'] = [...p(0x4d)];
        }, 787: (m, o, p) => {
            m['exports'] = [...p(0x190d), ...p(0x1728), ...p(0x1f31), ...p(0x1c1c)];
        }, 7196: m => {
            m['exports'] = [{
                'key': 'pal_enhance1',
                'name': '祈祷',
                'description': '每综合等级+2生命恢复。',
                'hooks': {
                    'hpRecovery'(o, p) {
                        return p + 0x2 * (this['level'] + this['player']['peakLevel']);
                    }, 'pal_enhance1': () => !0x0
                }
            }, {
                'key': 'pal_enhance2',
                'name': '火焰抵抗',
                'description': '火焰吸收+20%，火焰吸收上限+5%。',
                'hooks': {
                    'fireAbsorb': (o, p) => p + 0.2,
                    'fireAbsorbmax': (o, p) => p + 0.05,
                    'pal_enhance2': () => !0x0
                }
            }, {
                'key': 'pal_enhance3',
                'name': '反抗',
                'description': '自身受到的物理伤害减少35%，每综合等级+0.35%物理防御。',
                'hooks': {
                    'willDamaged': (o, p, q, s) => 'melee' === s ? 0.65 * p : p, 'defAdd'(o, p) {
                        return p + (this['level'] + this['player']['peakLevel']) * this['def_self'] * 0.0035;
                    }, 'pal_enhance3': () => !0x0
                }
            }, {
                'key': 'pal_enhance4',
                'name': '荆棘',
                'description': '受到物理伤害时，对攻击你的目标反弹（实际受到伤害×综合等级×50%）点物理伤害。',
                'hooks': {
                    'pla_jingji'(o, p, q, s) {
                        return 'melee' === q && s * (this['level'] + this['player']['peakLevel']) * 0.5;
                    }, 'pal_enhance4': () => !0x0
                }
            }, {
                'key': 'pal_enhance5',
                'name': '祝福瞄准',
                'description': '每综合等级+1%暴击伤害。',
                'hooks': {
                    'critBonusAdd'(o, p) {
                        return p + 0.01 * (this['level'] + this['player']['peakLevel']);
                    }, 'pal_enhance5': () => !0x0
                }
            }, {
                'key': 'pal_enhance6',
                'name': '寒冷抵抗',
                'description': '寒冷吸收+20%，寒冷吸收上限+5%。',
                'hooks': {
                    'coldAbsorb': (o, p) => p + 0.2,
                    'coldAbsorbmax': (o, p) => p + 0.05,
                    'pal_enhance6': () => !0x0
                }
            }, {
                'key': 'pal_enhance7',
                'name': '净化',
                'description': '暗、毒素吸收+30%，暗、毒素吸收上限+5%。',
                'hooks': {
                    'darkAbsorb': (o, p) => p + 0.3,
                    'dakrAbsorbmax': (o, p) => p + 0.05,
                    'poisonAbsorb': (o, p) => p + 0.3,
                    'poisonAbsorbmax': (o, p) => p + 0.05,
                    'pal_enhance7': () => !0x0
                }
            }, {
                'key': 'pal_enhance8', 'name': '精力', 'description': '每综合等级+2耐力。', 'hooks': {
                    'staAdd'(o, p) {
                        return p + 0x2 * (this['level'] + this['player']['peakLevel']);
                    }, 'pal_enhance8': () => !0x0
                }
            }, {
                'key': 'pal_enhance9',
                'name': '冥思',
                'description': '每综合等级+2智力，每秒恢复1%的法力值。',
                'hooks': {
                    'mpRecovery'(o, p) {
                        return p + 0.01 * this['maxMp'];
                    }, 'intAdd'(o, p) {
                        return p + 0x2 * (this['level'] + this['player']['peakLevel']);
                    }, 'pal_enhance9': () => !0x0
                }
            }, {
                'key': 'pal_enhance10',
                'name': '救助',
                'description': '自身受到的火焰、寒冷、闪电伤害减少35%。',
                'hooks': {
                    'willDamaged': (o, p, q, s) => 'fire' === s || 'cold' === s || 'lightning' === s ? 0.65 * p : p,
                    'pal_enhance10': () => !0x0
                }
            }, {
                'key': 'pal_enhance11',
                'name': '救赎',
                'description': '每次完成击杀，恢复自身5%的生命值和法力值。',
                'hooks': {
                    'hpFromKill'(o, p) {
                        return p + 0.05 * this['maxHp'];
                    }, 'mpFromKill'(o, p) {
                        return p + 0.05 * this['maxMp'];
                    }, 'pal_enhance11': () => !0x0
                }
            }, {
                'key': 'pal_enhance12',
                'name': '闪电抵抗',
                'description': '闪电吸收+20%，闪电吸收上限+5%。',
                'hooks': {
                    'lightningAbsorb': (o, p) => p + 0.2,
                    'lightningAbsorbmax': (o, p) => p + 0.05,
                    'pal_enhance12': () => !0x0
                }
            }];
        }, 5928: m => {
            m['exports'] = [{
                'key': 'sorceress_enhance1',
                'name': '能量亲和',
                'description': '每秒恢复0.5%的法力值。',
                'hooks': {
                    'mpRecovery'(o, p) {
                        return p + 0.005 * this['maxMp'];
                    }
                }
            }, {
                'key': 'sorceress_enhance2',
                'name': '魔法铠甲',
                'description': '受到伤害时，消耗1点法力来抵消1点伤害（至多抵消80%的伤害）。',
                'hooks': {
                    'mgd_hook'(o, p, q, s) {
                        const {unit: u} = this;
                        let v = 0.8 * p;
                        return this['mp'] > 0x0 && (v >= this['mp'] ? (this['mp'] = 0x0, v -= this['mp']) : (this['mp'] -= v, v = 0x0)), 0.2 * p + v;
                    }
                }
            }, {
                'key': 'ss_ee3',
                'name': '织网',
                'description': '增加25%元素抗性的物理防御。',
                'hooks': {
                    'defselfAdd'(o, p) {
                        return p + 0.25 * this['allResist_self'];
                    }
                }
            }, {
                'key': 'lv15_sorceress1_enhance1',
                'name': '和弦·Ⅰ',
                'group': 0xf,
                'description': '释放“魔法连弹”将使你下一个元素法术的伤害提高30%，但任何类型的持续伤害不受影响。',
                'hooks': {'lv15_sorceress1_enhance1': () => !0x0}
            }, {
                'key': 'lv15_ss1_ee2',
                'name': '和弦·Ⅱ',
                'group': 0xf,
                'description': '“魔法连弹”每次命中，若伤害未暴击，则为自身添加一层“和弦”效果，持续3秒。\x0a\x09\x09和弦：暴击几率+8%，每次触发将叠加层数并刷新持续时间，但任意伤害暴击后减少一半的层数。',
                'hooks': {
                    'testCrit1'(p, q, s, u, v, w) {
                        const x = this['buffs']['find'](y => 'tc_bf' === y['group']);
                        return v > 0x0 ? x && (x['arg'] /= 0x2) : 'wind_blade' === w['type'] && (x ? (x['arg'] += 0.08, x['resetTimer'](0x1388)) : this['addBuff']('tc_bf', 0xbb8, 0.08, 'tc_bf')), q;
                    }
                }
            }, {
                'key': 'lv15_ss1_ee3',
                'name': '和弦·Ⅲ',
                'group': 0xf,
                'description': '“魔法连弹”每次命中将恢复自身0.15%的生命值和法力值。',
                'hooks': {
                    'testCrit1'(o, p, q, s, u, v) {
                        return 'wind_blade' === v['type'] && (this['mp'] += 0.0015 * this['maxMp'], this['hp'] += 0.0015 * this['maxHp']), p;
                    }
                }
            }, {
                'key': 'lv15_sorceress1_enhance2',
                'name': '法力转化',
                'description': '增加相当于法力值上限25%的元素伤害等级。',
                'hooks': {
                    'firedmgLAdd'(o, p) {
                        return p + 0.25 * this['maxMp'];
                    }, 'colddmgLAdd'(o, p) {
                        return p + 0.25 * this['maxMp'];
                    }, 'lightningdmgLAdd'(o, p) {
                        return p + 0.25 * this['maxMp'];
                    }
                }
            }, {
                'key': 'lv15_sorceress1_enhance3',
                'name': '魔力激化',
                'description': '每次释放伤害类的法术将额外消耗法力值上限2%的法力值，每额外消耗10点法力则造成的伤害提高2%，该效果在法力值低于20%时无法生效。',
                'hooks': {'lv15_sorceress1_enhance3': () => !0x0}
            }, {
                'key': 'lv35_sorceress1_enhance1',
                'name': '元素重置',
                'description': '火焰伤害+30%，寒冷、闪电伤害-30%。',
                'hooks': {
                    'firedmgAdd': (o, p) => p + 0.3,
                    'colddmgAdd': (o, p) => p - 0.3,
                    'lightningdmgAdd': (o, p) => p - 0.3
                }
            }, {
                'key': 'lv35_sorceress1_enhance2',
                'name': '连珠火球',
                'description': '释放“火球术”有50%几率额外生成第二颗火球，25%几率额外生成第三颗火球，10%几率额外生成第四颗火球，1%几率额外生成第五颗火球。',
                'hooks': {'lv35_sorceress1_enhance2': () => !0x0}
            }, {
                'key': 'lv35_sorceress1_enhance3',
                'name': '咒语改良',
                'description': '急速+15%。',
                'hooks': {'speedRateAdd': (o, p) => 0.15 + p}
            }, {
                'key': 'lv35_sorceress3_enhance1',
                'name': '元素重置',
                'description': '闪电伤害+30%，火焰、寒冷伤害-30%。',
                'hooks': {
                    'firedmgAdd': (o, p) => p - 0.3,
                    'colddmgAdd': (o, p) => p - 0.3,
                    'lightningdmgAdd': (o, p) => p + 0.3
                }
            }, {
                'key': 'lv35_sorceress3_enhance2',
                'name': '击穿电压',
                'description': '每次造成闪电伤害都有50%几率使目标获得一层“感电”效果。感电：受到的闪电伤害增加2%，持续10秒，每次触发将叠加效果并刷新持续时间。',
                'hooks': {'lv35_sorceress3_enhance2': () => !0x0}
            }, {
                'key': 'lv35_sorceress2_enhance1',
                'name': '元素重置',
                'description': '寒冷伤害+30%，火焰、闪电伤害-30%。',
                'hooks': {
                    'firedmgAdd': (o, p) => p - 0.3,
                    'colddmgAdd': (o, p) => p + 0.3,
                    'lightningdmgAdd': (o, p) => p - 0.3
                }
            }, {
                'key': 'lv35_sorceress2_enhance2',
                'name': '入微',
                'description': '“活力之水”的效果+150%。',
                'hooks': {'lv35_sorceress2_enhance2': () => 2.5}
            }, {
                'key': 'lv80_sorceress1_enhance1',
                'name': '殉爆',
                'description': '对受到“灼烧”效果影响的目标造成火焰伤害时，有50%几率触发“殉爆”效果。殉爆：对所有目标造成（智力×2）点火焰伤害，持续伤害无法触发“殉爆”效果。',
                'hooks': {
                    'willDamage'(o, p, q, s) {
                        const {target: u} = this, v = u['buffs']['find'](w => 'fire_buff' === w['group']);
                        return 'fire' === s && v && Math['random']() < 0.5 && this['useExtraSkill']('xunbao_skill'), p;
                    }
                }
            }, {
                'key': 'lv80_sorceress1_enhance2',
                'name': '汇源',
                'description': '释放“透支”将不再获得法力值恢复减少的负面效果。',
                'hooks': {'lv80_sorceress1_enhance1': () => !0x0}
            }, {
                'key': 'lv80_sorceress1_enhance3',
                'name': '毁灭之握',
                'description': '“爆炎术”只对主目标造成伤害，但伤害提高400%。',
                'hooks': {'lv80_sorceress1_enhance3': () => 0x4}
            }, {
                'key': 'lv80_sorceress1_enhance4',
                'name': '咒语进阶',
                'description': '急速+30%。',
                'hooks': {'speedRateAdd': (o, p) => 0.3 + p}
            }, {
                'key': 'lv80_sorceress1_enhance5',
                'name': '灰烬',
                'description': '“焚骨”每段伤害递增100%。',
                'hooks': {'lv80_sorceress1_enhance5': () => !0x0}
            }, {
                'key': 'lv80_sorceress2_enhance1',
                'name': '燃尽',
                'description': '造成火焰伤害时有20%几率释放一次“点燃”，但“点燃”的伤害减少50%。持续伤害无法触发“燃尽”效果。',
                'hooks': {
                    'willDamage'(o, p, q, s) {
                        const {target: u} = this;
                        return 'fire' === s && Math['random']() < 0.2 && this['useExtraSkill']('sorceress_igniting'), p;
                    }, 'lv80_sorceress2_enhance1': () => 0.5
                }
            }, {
                'key': 'lv80_sorceress2_enhance3',
                'name': '烙印',
                'description': '每次为目标添加“灼烧”效果将使其火焰抗性永久减少30点。',
                'hooks': {'lv80_sorceress2_enhance3': () => !0x0}
            }, {
                'key': 'lv80_sorceress2_enhance5',
                'name': '传火者',
                'description': '每次释放“点燃”时，有60%的几率额外释放一次“点燃”；触发效果后将再次判定，直至未触发为止。',
                'hooks': {'lv80_sorceress2_enhance5': () => !0x0}
            }, {
                'key': 'lv80_sorceress5_enhance1',
                'name': '电压波动',
                'description': '闪电法术的伤害上限提高50%。',
                'hooks': {'lv80_sorceress5_enhance1': () => 1.5}
            }, {
                'key': 'lv80_sorceress5_enhance2',
                'name': '快充',
                'description': '“蓄电”的冷却时间减少3秒。',
                'hooks': {'lv80_sorceress5_enhance2': () => 0xbb8}
            }, {
                'key': 'lv80_sorceress5_enhance3',
                'name': '磁暴',
                'description': '“闪电”的冷却时间提高至1秒，但每次必定造成最大值伤害。\x0a\x09\x09每次释放“闪电”，有50%的几率获得1格电能。',
                'hooks': {'lv80_sorceress5_enhance3': () => 0x3e8, 'lv80_sorceress5_enhance33': () => !0x0}
            }, {
                'key': 'lv80_sorceress5_enhance5',
                'name': '电能回收',
                'description': '“雷蛇”每命中一个目标则额外获得一格“电能”。',
                'hooks': {'lv80_sorceress5_enhance5': () => !0x0}
            }, {
                'key': 'lv80_sorceress6_enhance1',
                'name': '稳定电压',
                'description': '闪电法术的伤害下限提高至上限的30%。',
                'hooks': {'lv80_sorceress6_enhance1': () => !0x0}
            }, {
                'key': 'lv80_sorceress6_enhance3',
                'name': '回流',
                'description': '释放“静电力场”将为目标额外添加一层感电。',
                'hooks': {'lv80_sorceress6_enhance3': () => !0x0}
            }, {
                'key': 'lv80_sorceress6_enhance5',
                'name': '电击流',
                'description': '造成闪电伤害时，有50%几率再次对所有目标造成（智力×2）点闪电伤害。',
                'hooks': {
                    'willDamage'(o, p, q, s) {
                        const {target: u} = this;
                        return 'lightning' === s && Math['random']() < 0.5 && this['useExtraSkill']('dianjiliu_skill'), p;
                    }
                }
            }, {
                'key': 'lv80_sorceress3_enhance1',
                'name': '水射流',
                'description': '“水箭术”伤害+30%，目标数+5。',
                'hooks': {'lv80_sorceress3_enhance1': () => !0x0}
            }, {
                'key': 'lv80_sorceress3_enhance2',
                'name': '坚冰',
                'description': '释放“寒冰护甲”时将额外释放一次“魔法盾”。',
                'hooks': {'lv80_sorceress3_enhance2': () => !0x0}
            }, {
                'key': 'lv80_sorceress3_enhance3',
                'name': '狂澜',
                'description': '“湍流”每命中一个目标，则额外释放一次“水箭术”。',
                'hooks': {'lv80_sorceress3_enhance3': () => !0x0}
            }, {
                'key': 'lv80_sorceress3_enhance5',
                'name': '浪涌',
                'description': '“海啸”命中后使目标停止行动1秒，每次命中刷新持续时间。',
                'hooks': {'lv80_sorceress3_enhance5': () => !0x0}
            }, {
                'key': 'lv80_sorceress4_enhance1',
                'name': '冰刺',
                'description': '“水箭术”伤害+150%，15%几率冻结目标1.5秒。',
                'hooks': {'lv80_sorceress4_enhance1': () => !0x0}
            }, {
                'key': 'lv80_sorceress4_enhance3',
                'name': '冻伤',
                'description': '受“冻结”效果影响的目标再次触发“冻结”效果时，立即移除“冻结”效果并额外造成其生命值20%的寒冷伤害，该伤害最大不超过自身智力的50倍。',
                'hooks': {'lv80_sorceress4_enhance3': () => !0x0}
            }, {
                'key': 'lv80_sorceress4_enhance5',
                'name': '绝对零度',
                'description': '对boss单位造成的寒冷伤害提高25%；对非boss单位造成的寒冷伤害提高50%，且有5%几率触发即死效果。',
                'hooks': {'willDamage': (o, p, q, s) => ('cold' === s && (q['boss'] && (p *= 1.25), !q['boss'] && Math['random']() < 0.05 ? q['kill']() : p *= 1.5), p)}
            }];
        }, 7985: m => {
            m['exports'] = [{
                'key': 'soulbringer_enhance1',
                'name': '黑暗君主·布甲精通',
                'description': '根据穿戴的布甲品质等级提升属性。每级提升0.5智力、4闪避值、0.05法力值恢复、3暗抗性，但自身的光抗性同时减少2。',
                'hooks': {
                    'intAdd'(o, p) {
                        let q = 0x0;
                        const {plastron: s, gaiter: u} = this['player']['equipments'];
                        return s['empty'] || (q += s['level']), u['empty'] || (q += u['level']), p + 0.5 * q;
                    }, 'shanbizhiAdd'(o, p) {
                        let q = 0x0;
                        const {plastron: s, gaiter: u} = this['player']['equipments'];
                        return s['empty'] || (q += s['level']), u['empty'] || (q += u['level']), p + 0x4 * q;
                    }, 'mpRecovery'(o, p) {
                        let q = 0x0;
                        const {plastron: s, gaiter: u} = this['player']['equipments'];
                        return s['empty'] || (q += s['level']), u['empty'] || (q += u['level']), p + 0.05 * q;
                    }, 'darkResist'(o, p) {
                        let q = 0x0;
                        const {plastron: s, gaiter: u} = this['player']['equipments'];
                        return s['empty'] || (q += s['level']), u['empty'] || (q += u['level']), p + 0x3 * q;
                    }, 'lightResist'(o, p) {
                        let q = 0x0;
                        const {plastron: s, gaiter: u} = this['player']['equipments'];
                        return s['empty'] || (q += s['level']), u['empty'] || (q += u['level']), Math['max'](p - 0x2 * q, 0x0);
                    }
                }
            }, {
                'key': 'soulbringer_enhance2',
                'name': '鬼斩·噬魂',
                'description': '“鬼斩”的伤害+30%，造成伤害后提高（技能等级×10）力量、智力，持续4秒。',
                'hooks': {'soulbringer_enhance2': (o, p) => 1.3}
            }, {
                'key': 'soulbringer_enhance3',
                'name': '凭依',
                'description': '普通攻击转变为暗属性伤害，且伤害提高50%，攻击目标数+2。',
                'hooks': {'soulbringer_enhance3': (o, p) => !0x0}
            }, {
                'key': 'soulbringer_enhance4',
                'name': '黑暗降临',
                'description': '鬼神·虚弱的力量将使所有目标额外减少（技能等级×200）暗抗性。',
                'hooks': {'soulbringer_enhance4': (o, p) => !0x0}
            }, {
                'key': 'soulbringer_enhance5',
                'name': '黑暗光环',
                'description': '鬼神·铠甲的力量将使自身暗伤害+（技能等级×1%）。',
                'hooks': {'soulbringer_enhance5': (o, p) => !0x0}
            }, {
                'key': 'soulbringer_enhance6',
                'name': '封印解除',
                'description': '鬼神系列技能的技能效果提高10级，可突破等级上限的限制。',
                'hooks': {'soulbringer_enhance6': (o, p) => 0xa}
            }];
        }, 6413: m => {
            m['exports'] = [{
                'key': 'warrior_enhance1',
                'name': '壁垒',
                'group': 0x5,
                'description': '每角色等级使自身受到的伤害减少0.35%，最多不超过35%。',
                'hooks': {
                    'willDamaged'(o, p, q, s) {
                        return 'real' !== s ? p * (0x1 - Math['min'](0.0035 * this['level'], 0.35)) : p;
                    }
                }
            }, {
                'key': 'wree2',
                'name': '拙技',
                'group': 0x5,
                'description': '“普通攻击”的伤害+100%',
                'hooks': {'lv5_wree2': (o, p) => !0x0}
            }, {
                'key': 'wree3',
                'name': '坚韧',
                'group': 0x5,
                'description': '每秒额外恢复1%的生命值',
                'hooks': {
                    'hpRecovery'(o, p) {
                        return p + 0.01 * this['maxHp'];
                    }
                }
            }, {
                'key': 'warrior_enhance2',
                'name': '奋勇',
                'description': '攻击力+20',
                'hooks': {'atk_self_Add': (o, p) => p + 0x14}
            }, {
                'key': 'lv15_warrior_enhance1',
                'name': '生存技巧',
                'description': '“伤口包扎”恢复的生命值×2',
                'hooks': {'lv15_warrior_enhance1_time': (o, p) => 0x2}
            }, {
                'key': 'lv15_warrior_enhance2',
                'name': '武器掌握',
                'description': '攻击力+20%',
                'hooks': {
                    'atk_Add'(o, p) {
                        return p + 0.2 * this['atk_self'];
                    }
                }
            }, {
                'key': 'lv15_warrior_enhance3',
                'name': '联防',
                'description': '释放“钢铁之躯”时，额外增加等量的元素抗性',
                'hooks': {'lv15_warrior_enhance3_time': (o, p) => !0x0}
            }, {
                'key': 'lv35_warrior1_enhance1',
                'name': '剑花',
                'description': '释放“斩击”有20%几率触发“剑花”效果，对目标额外造成80%的物理伤害',
                'hooks': {'lv35_warrior1_enhance1_time': (o, p) => !0x0}
            }, {
                'key': 'lv35_warrior1_enhance2',
                'name': '克敌',
                'description': '对受“断筋”效果影响的目标造成的伤害提高30%',
                'hooks': {'lv35_warrior1_enhance2_time': (o, p) => !0x0}
            }, {
                'key': 'lv35_warrior1_enhance3',
                'name': '火焰之舞',
                'description': '释放“元素附魔”额外使下一个“旋风斩”变为火焰伤害，并对目标添加一层“灼烧”效果。灼烧：每3秒受到35%攻击力的火焰伤害，持续15秒，可叠加。',
                'hooks': {'lv35_warrior1_enhance3_time': (o, p) => !0x0}
            }, {
                'key': 'lv80_warrior1_enhance1',
                'name': '火锤',
                'description': '释放“重斩”将使目标受到的火焰伤害+50%，持续12秒。',
                'hooks': {'lv80_warrior1_enhance1_time': (o, p) => !0x0}
            }, {
                'key': 'lv80_warrior1_enhance2',
                'name': '借力打力',
                'description': '格挡概率提高至30%，成功格挡后将释放一次“旋风斩”。',
                'hooks': {'lv80_warrior1_enhance2_time': (o, p) => !0x0}
            }, {
                'key': 'lv80_warrior1_enhance3',
                'name': '元素掌控',
                'description': '“元素附魔”的效果不再因为释放技能而被消耗，且可以维持10秒。',
                'hooks': {'lv80_warrior1_enhance3_time': (o, p) => !0x0}
            }, {
                'key': 'lv80_warrior1_enhance4',
                'name': '越战越勇',
                'description': '每点怒气使“重斩”、“炎龙吐息”造成的伤害增加0.5%。',
                'hooks': {'lv80_warrior1_enhance4_time': (o, p) => !0x0}
            }, {
                'key': 'lv80_warrior1_enhance5',
                'name': '星火',
                'description': '每次释放“斩击”造成火焰伤害，可以额外获得2点怒气，并使“炎龙吐息”的冷却时间减少1秒。',
                'hooks': {'lv80_warrior1_enhance5_time': (o, p) => !0x0}
            }, {
                'key': 'lv80_warrior2_enhance1',
                'name': '追击',
                'description': '“重斩”命中目标后，有50%立即对目标释放一次额外的“斩击”。',
                'hooks': {'lv80_warrior2_enhance1_time': (o, p) => !0x0}
            }, {
                'key': 'lv80_warrior2_enhance2',
                'name': '借力打力',
                'description': '格挡概率提高至30%，成功格挡后将立即释放一次额外的“斩击”。',
                'hooks': {'lv80_warrior2_enhance2_time': (o, p) => !0x0}
            }, {
                'key': 'lv80_warrior2_enhance3',
                'name': '剑术专精',
                'description': '释放“斩击”造成伤害后，有20%的几率再释放一次额外的“斩击”，可重复触发。',
                'hooks': {'lv80_warrior2_enhance3_time': (o, p) => !0x0}
            }, {
                'key': 'lv80_warrior2_enhance4',
                'name': '冷静',
                'description': '当怒气小于50点时，攻击力+30%',
                'hooks': {
                    'atk_Add'(o, p) {
                        return this['rp'] < 0x32 ? p + 0.3 * this['atk_self'] : p;
                    }
                }
            }, {
                'key': 'lv80_warrior2_enhance5',
                'name': '蓄剑势',
                'description': '释放“连斩姿态”将立即重置“无敌斩”的冷却时间。',
                'hooks': {'lv80_warrior2_enhance5_time': (o, p) => !0x0}
            }, {
                'key': 'lv35_warrior2_enhance1',
                'name': '生生不息',
                'description': '“气血激增”的效果提高100%。',
                'hooks': {'lv35_warrior2_enhance1_time': (o, p) => 0x2}
            }, {
                'key': 'lv35_warrior2_enhance2',
                'name': '金石之躯',
                'description': '“钢铁之躯”的效果提高100%。',
                'hooks': {'lv35_warrior2_enhance2_time': (o, p) => 0x2}
            }, {
                'key': 'lv35_warrior2_enhance3',
                'name': '以攻代守',
                'description': '“断筋”的减速效果提高至50%。',
                'hooks': {'lv35_warrior2_enhance3_time': (o, p) => 0.5}
            }, {
                'key': 'lv35_warrior2_enhance4',
                'name': '不屈意志',
                'description': '每损失1点气血值，增加1点物理防御、1点元素（火焰、寒冷、闪电）抗性。',
                'hooks': {
                    'defselfAdd'(o, p) {
                        return p + (this['maxHp'] - this['hp']);
                    }, 'allResselfAdd'(o, p) {
                        return p + (this['maxHp'] - this['hp']);
                    }
                }
            }, {
                'key': 'lv35_warrior2_enhance5',
                'name': '创世神的守护',
                'description': '吸收上限+5%。',
                'hooks': {
                    'meleeAbsorbmax': (o, p) => p + 0.05,
                    'fireAbsorbmax': (o, p) => p + 0.05,
                    'coldAbsorbmax': (o, p) => p + 0.05,
                    'lightningAbsorbmax': (o, p) => p + 0.05,
                    'darkAbsorbmax': (o, p) => p + 0.05,
                    'lightAbsorbmax': (o, p) => p + 0.05,
                    'poisonAbsorbmax': (o, p) => p + 0.05
                }
            }, {
                'key': 'lv35_warrior2_enhance6',
                'name': '猪突猛进',
                'description': '“盾冲”造成的昏迷效果延长1秒。',
                'hooks': {'lv35_warrior2_enhance6_time': (o, p) => 0xfa0}
            }, {
                'key': 'lv35_warrior2_enhance7',
                'name': '以守待攻',
                'description': '成功防御后有50%的几率立即释放一次额外的“无限正义之剑”。',
                'hooks': {'lv35_warrior2_enhance7_time': (o, p) => !0x0}
            }, {
                'key': 'lv35_warrior2_enhance8',
                'name': '绝对领域',
                'description': '受到攻击时“守护者之魂”会自动反击所有敌人，造成（物理防御×10%）点真实伤害。',
                'hooks': {'lv35_warrior2_enhance8_time': (o, p) => !0x0}
            }, {
                'key': 'lv35_warrior5_enhance2',
                'name': '浴血奋战',
                'description': '每损失1%生命值，提高0.5%物理伤害。',
                'hooks': {
                    'dmgAdd'(o, p) {
                        return p + (this['maxHp'] - this['hp']) / this['maxHp'] * 0.5;
                    }
                }
            }, {
                'key': 'lv35_warrior5_enhance3',
                'name': '瓦解',
                'description': '“碎甲”效果从30%提升至45%。',
                'hooks': {'lv35_warrior5_enhance3_time': (o, p) => 0.15}
            }, {
                'key': 'lv80_warrior5_enhance1',
                'name': '力量训练',
                'description': '“劈砍”和“致命劈砍”的伤害提高30%，但每次释放“劈砍”和“致命劈砍”都会损失当前5%/10%的生命值。',
                'hooks': {'lv80_warrior5_enhance1_time': (o, p) => 1.3}
            }, {
                'key': 'lv80_warrior5_enhance2',
                'name': '沸血',
                'description': '“血怒”效果持续期间，以2点/秒的速度获得怒气。',
                'hooks': {'lv80_warrior5_enhance2_time': (o, p) => !0x0}
            }, {
                'key': 'lv80_warrior5_enhance3',
                'name': '双刀专精',
                'description': '暴击几率+10%，暴击伤害+20%。',
                'hooks': {'critRateAdd': (o, p) => p + 0.1, 'critBonusAdd': (o, p) => p + 0.2}
            }, {
                'key': 'lv80_warrior5_enhance4',
                'name': '挣扎',
                'description': '每损失1%生命值，提高0.25%急速。',
                'hooks': {
                    'speedRateAdd'(o, p) {
                        return p + (this['maxHp'] - this['hp']) / this['maxHp'] * 0.25;
                    }
                }
            }, {
                'key': 'lv80_warrior5_enhance5',
                'name': '破釜沉舟',
                'description': '释放“血甲缚”获得的护盾以及护盾上限+100%，但释放后仅保留1点生命值。',
                'hooks': {'lv80_warrior5_enhance5_time': (o, p) => 0x2}
            }, {
                'key': 'lv80_warrior8_enhance1',
                'name': '曜日',
                'description': '“劈砍”造成火焰伤害时，将使目标的火焰抗性永久减少100点。',
                'hooks': {'lv80_wr8_ee1t': (o, p) => !0x0}
            }, {
                'key': 'lv80_warrior8_enhance1_2',
                'name': '冰凝',
                'description': '“劈砍”造成寒冷伤害时，将使目标的寒冷抗性永久减少100点。',
                'hooks': {'lv80_wr8_ee1_2t': (o, p) => !0x0}
            }, {
                'key': 'lv80_warrior8_enhance2',
                'name': '共舞',
                'group': 0x5a,
                'description': '“元素附魔”状态下释放“劈砍”将同时附魔寒冷和火焰效果，但造成的伤害减少50%。',
                'hooks': {'lv80_warrior8_enhance2_time': (o, p) => !0x0}
            }, {
                'key': 'lv80_wr8_ee2_2',
                'name': '戏火',
                'group': 0x5a,
                'description': '“元素附魔”状态下释放“劈砍”必定附魔火焰效果，且造成的伤害额外增加20%。',
                'hooks': {'lv80_wr8_ee2_2t': (o, p) => !0x0}
            }, {
                'key': 'lv80_wr8_ee2_3',
                'name': '刺骨',
                'group': 0x5a,
                'description': '“元素附魔”状态下释放“劈砍”必定附魔寒冷效果，且造成的伤害额外增加20%。',
                'hooks': {'lv80_wr8_ee2_3t': (o, p) => !0x0}
            }, {
                'key': 'lv80_warrior8_enhance3',
                'name': '余热',
                'description': '“劈砍”获得的火能提高至20点。',
                'hooks': {'lv80_warrior8_enhance3_time': (o, p) => 0x14}
            }, {
                'key': 'lv80_warrior8_enhance3_2',
                'name': '余寒',
                'description': '“劈砍”获得的冰能提高至20点。',
                'hooks': {'lv80_warrior8_enhance3_2_time': (o, p) => 0x14}
            }, {
                'key': 'lv80_warrior8_enhance4',
                'name': '交相辉映',
                'description': '释放“末日”将同时触发两种效果，但消耗的能量不会因此而增加。',
                'hooks': {'lv80_warrior8_enhance4_time': (o, p) => !0x0}
            }];
        }, 6304: m => {
            m['exports'] = [{
                'key': 'lgpt',
                'type': 'equip',
                'class': 'base',
                'position': 'plastron',
                'name': '布衣',
                'description': '朴素的长剑。',
                'minLevel': 0x5f5e0ff
            }, {
                'key': 'lggt',
                'type': 'equip',
                'class': 'base',
                'position': 'gaiter',
                'name': '布裤',
                'description': '朴素的长剑。',
                'minLevel': 0x5f5e0ff
            }, {
                'key': 'copperArmor',
                'type': 'equip',
                'position': 'plastron',
                'class': 'armor',
                'name': '锁子甲',
                'description': '铜环串联而成的胸甲，远远看去像身上挂满了铜钱，很是炫富。'
            }, {
                'key': 'copperShinGuard',
                'type': 'equip',
                'position': 'gaiter',
                'class': 'armor',
                'name': '锁链靴',
                'minLevel': 0x174876e7ff,
                'description': '木质的鞋底，铜环串联而成鞋面，防御力很不错。'
            }, {
                'key': 'copperShinGuard1',
                'type': 'equip',
                'position': 'gaiter',
                'class': 'armor',
                'name': '锁链靴',
                'description': '木质的鞋底，铜环串联而成鞋面，防御力很不错。'
            }, {
                'key': 'boneArmor',
                'type': 'equip',
                'position': 'plastron',
                'class': 'lightArmor',
                'name': '骨甲',
                'description': '烧焦的人骨紧密排列，不但防御良好而且轻便，但是敢穿的人真不多……'
            }, {
                'key': 'boneShinGuard',
                'type': 'equip',
                'position': 'gaiter',
                'class': 'lightArmor',
                'name': '骨靴',
                'description': '用骨片雕琢而成的靴子，已经看不出骨头来自哪个部位了。'
            }, {
                'key': 'shoes',
                'type': 'equip',
                'position': 'gaiter',
                'class': 'lightArmor',
                'name': '皮靴',
                'description': '',
                'minLevel': 0xe8d4a50fff
            }, {
                'key': 'boneArmor1',
                'type': 'equip',
                'position': 'plastron',
                'class': 'lightArmor',
                'name': '骨甲',
                'description': '烧焦的人骨紧密排列，不但防御良好而且轻便，但是敢穿的人真不多……',
                'minLevel': 0x174876e7ff
            }, {
                'key': 'mithrilDress',
                'type': 'equip',
                'position': 'plastron',
                'class': 'cloth',
                'name': '秘银衬衫',
                'description': '布料掺杂秘银制造的衬衫，不过到处是镂空，不知道是为了美观还是为了节约成本。'
            }, {
                'key': 'mithrilSkirt',
                'type': 'equip',
                'position': 'gaiter',
                'class': 'cloth',
                'name': '秘银长裤',
                'description': '一层布料一层秘银叠加而成的长裤，款式男女皆宜。'
            }];
        }, 4058: (m, o, p) => {
            m['exports'] = [...p(0x1b10), ...p(0x211f), ...p(0x18a0), ...p(0x1ebc)];
        }, 7868: m => {
            m['exports'] = [{
                'key': 'lgjq',
                'type': 'equip',
                'class': 'base',
                'position': 'ornament',
                'name': '技巧项链',
                'description': '就是普通的首饰。',
                'item': 'sta',
                'minLevel': 0xe8d4a50fff
            }, {
                'key': 'ornament',
                'type': 'equip',
                'class': 'ornament',
                'position': 'ornament',
                'name': '首饰',
                'description': '就是普通的首饰。',
                'item': 'sta',
                'minLevel': 0xe8d4a50fff
            }, {
                'key': 'mithrilStannumRing',
                'type': 'equip',
                'class': 'ornament',
                'position': 'ornament',
                'name': '秘银指环',
                'description': '按当前的市场价，铜其实也不便宜。',
                'item': 'sta'
            }];
        }, 6928: m => {
            m['exports'] = [{
                'key': 'wuxingshi',
                'type': 'material',
                'name': '奇怪的精粹',
                'quality': 0x2,
                'stack': 0xf423f,
                'price': 0x1,
                'energy': 0x1,
                'description': '拆解装备留下的不明物，闪耀着奇怪的光彩。'
            }, {
                'key': '61box',
                'type': 'box',
                'name': '盲盒(伪)',
                'description': '明明是个假货，但和真货一毛一样，或许是能开出点东西来的。\x0a\x09\x09使用等级：100级。',
                'stack': 0x1869f,
                'price': 0x1,
                'requireInventory': 0x2,
                'backgroundColor': '#ff215b',
                'nameColor': 'white',
                'loots': [{'type': 'equip', 'rate': 0.000001, 'mfRate': 0x270f}]
            }, {
                'key': '61boxt',
                'type': 'box',
                'name': '盲盒',
                'description': '这是个真货，看看能开点啥呗。\x0a\x09\x09开盒结果受所有角色中已通关的最高噩梦副本难度影响。\x0a\x09\x09使用等级：100级。',
                'stack': 0x1869f,
                'price': 0x1,
                'requireInventory': 0x2,
                'backgroundColor': '#ff215b',
                'nameColor': 'white',
                'loots': [{'type': 'equip', 'rate': 0x1, 'mfRate': 0x270f}]
            }, {
                'key': 'exp_zz',
                'type': 'exp',
                'name': '粽子',
                'description': '这是鱼斯....鱼肉馅的粽子。\x0a\x09\x09吃过之后会获得神秘的力量。\x0a\x09\x09说是神秘的力量，其实就是一点微薄的经验罢了。\x0a\x09\x09每综合等级获得250~750点经验。',
                'stack': 0x1869f,
                'price': 0x1,
                'backgroundColor': '#FF8C00',
                'nameColor': 'white'
            }];
        }, 8479: m => {
            m['exports'] = [{
                'key': 'lgwp',
                'type': 'equip',
                'class': 'base',
                'position': 'weapon',
                'name': '木剑',
                'description': '朴素的长剑。',
                'minLevel': 0x5f5e0ff
            }, {
                'key': 'stickSword',
                'type': 'equip',
                'class': 'sword',
                'position': 'weapon',
                'name': '长剑',
                'description': '朴素的长剑。'
            }, {
                'key': 'SwordShield',
                'type': 'equip',
                'class': 'swordshield',
                'position': 'weapon',
                'name': '剑盾',
                'description': '外加朴素的圆盾。'
            }, {
                'key': 'LongSword',
                'type': 'equip',
                'class': 'longsword',
                'position': 'weapon',
                'name': '太刀',
                'description': '用木头制作的长刀，有传言说这是萨菲罗斯小时候使用过的。',
                'minLevel': 0xc8
            }, {
                'key': 'Machete',
                'type': 'equip',
                'class': 'machete',
                'position': 'weapon',
                'name': '双刀',
                'description': '左手一把菜刀，右手还是一把菜刀。'
            }, {
                'key': 'MacheteShield',
                'type': 'equip',
                'class': 'macheteshield',
                'position': 'weapon',
                'name': '刀盾',
                'description': '左手是朴素的圆盾。',
                'minLevel': 0xe8d4a50fff
            }, {
                'key': 'stickWand',
                'type': 'equip',
                'class': 'wand',
                'position': 'weapon',
                'name': '铁木法杖',
                'description': '搬不动，真的搬不动，不是开玩笑的。'
            }];
        }, 7615: (m, o, p) => {
            m['exports'] = p(0x1022), p(0x151b), p(0x5a8);
        }, 118: (m, o, p) => {
            m['exports'] = [...p(0x16cc), ...p(0xae5)];
        }, 5836: m => {
            m['exports'] = [{
                'key': 'ornament-1',
                'type': 'ornament',
                'itemName': '沉思的鲱鱼干',
                'itemDescription': '作为一条鱼干，人生的大部分就是找个地方挂着……',
                'display': o => '获得的经验值×1.5',
                'generate': o => 1.5,
                'range': o => '无法附魔',
                'hooks': {'expMul': (o, p) => 1.5}
            }, {
                'key': 'ornament-fxp',
                'type': 'ornament',
                'itemName': '方向盘',
                'itemDescription': '双马尾，才是老司机的方向盘。\x0a\x09\x09\x20\x20\x20\x20\x20\x20————风月无关',
                'display': o => '获得的技能熟练度+1',
                'generate': o => 0x1,
                'range': o => '无法附魔',
                'hooks': {'skExpadd': (o, p) => p + 0x1}
            }, {
                'key': 'ornament-melee',
                'type': 'ornament',
                'itemName': '报纸壳壳',
                'itemDescription': 'Vehicle\x20ready...奇怪的东西，对物理伤害似乎有很好的防御效果。',
                'display': o => '物理吸收+15%，物理吸收上限+15%',
                'generate': o => [0.15, 0.15],
                'range': o => '无法附魔',
                'hooks': {'meleeAbsorb': (o, p) => p + 0.15, 'meleeAbsorbmax': (o, p) => p + 0.15}
            }, {
                'key': 'ornament-fire',
                'type': 'ornament',
                'itemName': '凉宝宝',
                'itemDescription': '奇怪的东西，对火焰伤害似乎有很好的防御效果。',
                'display': o => '火焰吸收+15%，火焰吸收上限+15%',
                'generate': o => [0.15, 0.15],
                'range': o => '无法附魔',
                'hooks': {'fireAbsorb': (o, p) => p + 0.15, 'fireAbsorbmax': (o, p) => p + 0.15}
            }, {
                'key': 'ornament-cold',
                'type': 'ornament',
                'itemName': '暖宝宝',
                'itemDescription': '奇怪的东西，对寒冷伤害似乎有很好的防御效果。',
                'display': o => '寒冷吸收+15%，寒冷吸收上限+15%',
                'generate': o => [0.15, 0.15],
                'range': o => '无法附魔',
                'hooks': {'coldAbsorb': (o, p) => p + 0.15, 'coldAbsorbmax': (o, p) => p + 0.15}
            }, {
                'key': 'ornament-lightning',
                'type': 'ornament',
                'itemName': '绝缘楔子',
                'itemDescription': '奇怪的东西，对闪电伤害似乎有很好的防御效果。',
                'minLevel': 0xf423f,
                'display': o => '闪电吸收+15%，闪电吸收上限+15%',
                'generate': o => [0.15, 0.15],
                'range': o => '无法附魔',
                'hooks': {'lightningAbsorb': (o, p) => p + 0.15, 'lightningAbsorbmax': (o, p) => p + 0.15}
            }, {
                'key': 'ornament-dark',
                'type': 'ornament',
                'itemName': '黑暗守护',
                'itemDescription': '一团五彩斑斓的黑色，对暗属性伤害似乎有很好的防御效果。',
                'display': o => '暗吸收+15%，暗吸收上限+15%',
                'generate': o => [0.15, 0.15],
                'range': o => '无法附魔',
                'hooks': {'darkAbsorb': (o, p) => p + 0.15, 'darkAbsorbmax': (o, p) => p + 0.15}
            }, {
                'key': 'ornament-light',
                'type': 'ornament',
                'itemName': '光明守护',
                'itemDescription': '一团耀眼的光芒，对光属性伤害似乎有很好的防御效果。',
                'minLevel': 0xf423f,
                'display': o => '光吸收+15%，光吸收上限+15%',
                'generate': o => [0.15, 0.15],
                'range': o => '无法附魔',
                'hooks': {'lightAbsorb': (o, p) => p + 0.15, 'lightAbsorbmax': (o, p) => p + 0.15}
            }, {
                'key': 'ornament-poison',
                'type': 'ornament',
                'itemName': '腐肉之风',
                'itemDescription': '一枚奇怪的戒指，但对毒素伤害有很好的防御效果。',
                'minLevel': 0xf423f,
                'display': o => '毒素吸收+15%，毒素吸收上限+15%',
                'generate': o => [0.15, 0.15],
                'range': o => '无法附魔',
                'hooks': {'poisonAbsorb': (o, p) => p + 0.15, 'poisonAbsorbmax': (o, p) => p + 0.15}
            }, {
                'key': 'stickWand-1',
                'type': 'stickWand',
                'itemName': '锟斤拷',
                'itemDescription': '手持两把锟斤拷。',
                'minLevel': 0x1e,
                'display': o => '火球术的伤害提高100%',
                'generate': o => 0x2,
                'range': o => '无法附魔',
                'hooks': {'two_kjk': (o, p) => 0x2}
            }, {
                'key': 'stickWand-2',
                'type': 'stickWand',
                'itemName': '避雷针',
                'itemDescription': '对游离的闪电元素有着莫大的吸引力，一点都不“避”。',
                'minLevel': 0x50,
                'display': o => '“雷蛇”伤害不再衰减，而是每次递增5%',
                'generate': o => 1.05,
                'range': o => '无法附魔',
                'hooks': {'blz_buff': (o, p) => 1.05}
            }, {
                'key': 'ornament-goldapple',
                'type': 'ornament',
                'itemName': '金苹果',
                'itemDescription': '我全都要.jpg。',
                'minLevel': 0x64,
                'display': o => '释放“幸运祝福”将额外获得一种祝福效果',
                'generate': o => 0x1,
                'range': o => '无法附魔',
                'hooks': {'goldapple_buff': (o, p) => !0x0}
            }, {
                'key': 'copperArmor-sscj',
                'type': 'copperArmor',
                'itemName': '反伤刺甲',
                'itemDescription': '点子扎手，风紧扯呼。\x0a\x09\x09人称“小荆棘”。',
                'display': o => '对攻击你的目标造成（物理防御×20%）点魔法伤害,无法暴击。',
                'generate': o => 0.2,
                'range': o => '无法附魔',
                'hooks': {
                    'jingji_small'(o) {
                        return 0.2 * this['def'];
                    }
                }
            }, {
                'key': 'copperShinGuard1-gsbj',
                'type': 'copperShinGuard1',
                'itemName': '攻速暴击腿甲',
                'itemDescription': '前身叫“攻速暴击裙”，是为了照顾重甲职业特地改造而成的，有着特殊的效果。',
                'display': o => '攻击你的目标急速×2，但攻击力×0.5',
                'generate': o => 0x2,
                'range': o => '无法附魔',
                'hooks': {'attacked': (o, p) => (p['addBuff']('gsbj_buff', 0x1388, null, 'gsbj_buff'), p)}
            }, {
                'key': 'ornament-hsjz',
                'type': 'ornament',
                'itemName': '护身戒指',
                'itemDescription': 'Mana，is\x20power。\x0a\x09\x09除非.....你不是法爷。',
                'display': o => '消耗1点法力来抵消3点伤害',
                'generate': o => 0x3,
                'range': o => '无法附魔',
                'hooks': {
                    'hsjz_hook'(o, p, q, s) {
                        const {unit: u} = this;
                        return 'real' !== s && this['mp'] > 0x0 && (p / 0x3 >= this['mp'] ? (this['mp'] = 0x0, p -= 0x3 * this['mp']) : (this['mp'] -= p / 0x3, p = 0x0)), p;
                    }
                }
            }, {
                'key': 'ornament-mabi',
                'type': 'ornament',
                'itemName': '麻痹戒指',
                'itemDescription': '代表战士，击痹你。',
                'display': o => '造成物理伤害时，有5%几率使目标获得“麻痹”效果，1秒内无法行动',
                'generate': o => 0x5,
                'range': o => '无法附魔',
                'hooks': {
                    'willDamage'(o, p, q, s) {
                        return 'melee' === s && Math['random']() < 0.05 && this['useExtraSkill']('mabi_skill'), p;
                    }
                }
            }, {
                'key': 'ornament-def',
                'type': 'ornament',
                'itemName': '防御戒指',
                'itemDescription': '防御，是最好的进攻。',
                'display': o => '受到的伤害减少25%，包扎伤口、急救、活力之水的冷却时间减少20%',
                'generate': o => [0x19, 0x14],
                'range': o => '无法附魔',
                'hooks': {'willDamaged': (o, p, q, s) => ('real' !== s && (p *= 0.75), p), 'defring': (o, p) => 0.8}
            }, {
                'key': 'mithrilDress-yydt',
                'type': 'mithrilDress',
                'itemName': '幽影斗篷',
                'itemDescription': '墨丘利在临嘎之前，留了一件斗篷给你。',
                'display': o => '有20%的几率将对你的攻击折射给你的当前目标，折射伤害无法暴击。',
                'generate': o => 0x14,
                'range': o => '无法附魔',
                'hooks': {'zhesheReflect': (o, p, q, s) => Math['random']() < 0.2 && 'real' !== q && s}
            }, {
                'key': 'ornament-jg',
                'type': 'ornament',
                'itemName': '杰哥的眼镜',
                'itemDescription': '鬼知道这是啥，戴上就完事了。',
                'display': o => '每综合等级+3点力量',
                'generate': o => 0x3,
                'range': o => '无法附魔',
                'hooks': {
                    'strAdd'(o, p) {
                        return p + 0x3 * (this['level'] + this['player']['peakLevel']);
                    }
                }
            }, {
                'key': 'ornament-xddj',
                'type': 'ornament',
                'itemName': '兄弟的酒',
                'itemDescription': '这一刀有亿点痛。',
                'display': o => '造成的物理伤害+50%，受到的物理伤害+50%',
                'generate': o => [0x32, 0x32],
                'range': o => '无法附魔',
                'hooks': {
                    'willDamage': (o, p, q, s) => 'melee' === s ? 1.5 * p : p,
                    'willDamaged': (o, p, q, s) => 'melee' === s ? 1.5 * p : p
                }
            }, {
                'key': 'mithrilSkirt-sydsw',
                'type': 'mithrilSkirt',
                'itemName': '舍友的丝袜',
                'itemDescription': '长驱直入。\x0a\x09\x20\x20\x20\x20\x20\x20\x20\x20————风月无关',
                'display': o => '造成的火焰、寒冷、闪电伤害+25%',
                'generate': o => 0x19,
                'range': o => '无法附魔',
                'hooks': {'willDamage': (o, p, q, s) => 'fire' === s || 'cold' === s || 'lightning' === s ? 1.25 * p : p}
            }, {
                'key': 'mithrilSkirt-xinxin',
                'type': 'mithrilSkirt',
                'itemName': '信心',
                'itemDescription': '在你看来，这个世界变小了。',
                'minLevel': 0x60,
                'display': o => '赋予等级' + o + '[40]的“信念”光环',
                'generate': o => 0xa + Math['round'](0x1e * Math['random']()),
                'range': o => '无法附魔',
                'hooks': {
                    'willDamage'(o, p, q, s) {
                        return this['useExtraSkill']('paladin_skill16', o), p;
                    }
                }
            }, {
                'key': 'stickSword-fire',
                'type': 'stickSword',
                'itemName': '火之高兴',
                'itemDescription': '嘿嘿，战士没有蓝条。\x0a\x09\x09但圣骑士有。',
                'minLevel': 0x64,
                'display': o => '造成伤害时有10%几率释放' + o + '[30]级“透支”',
                'generate': o => 0xa + Math['round'](0x14 * Math['random']()),
                'range': o => '无法附魔',
                'hooks': {
                    'willDamage'(o, p, q, s) {
                        return Math['random']() < 0.1 && this['useExtraSkill']('sorceress_overdraft', o), p;
                    }
                }
            }, {
                'key': 'stickWand-bzat',
                'type': 'stickWand',
                'itemName': '冰之哀痛',
                'itemDescription': '考虑到诸多精修水系法术的法师的需求，\x0a\x09\x09法师协会以“霜之哀伤”为蓝本，特别定制了一批不太一样的法杖。',
                'minLevel': 0x28,
                'display': o => '造成寒冷伤害时，' + o + '[10]%的伤害转化为“魔法盾”的吸收量\x0a\x09\x09在携带“魔法盾”效果的状态下释放“魔法盾”时，会根据剩余的吸收量对所有目标造成寒冷伤害',
                'generate': o => 0x5 + Math['round'](0x5 * Math['random']()),
                'range': o => '无法附魔',
                'hooks': {
                    'willDamage'(o, p, q, s) {
                        if ('cold' === s) {
                            const u = this['buffs']['find'](v => 'magicShield' === v['group']);
                            u && (u['arg'][0x1] += p * o / 0x64);
                        }
                        return p;
                    }, 'bzat_buff': (o, p) => !0x0
                }
            }, {
                'key': 'SwordShield-dg',
                'type': 'SwordShield',
                'itemName': '龙盾',
                'itemDescription': '之所以叫龙盾，\x0a\x09\x09是因为你在盾面上画了一副龙图，\x0a\x09\x09以至于谁看见了都忍不住想揍你一顿。',
                'minLevel': 0x50,
                'display': o => '“守护者之魂”Lv+' + o[0x0] + '[10]\x0a\x09\x09“斩击”命中后有' + o[0x1] + '[20]%的几率触发一次“绝对领域”效果',
                'generate': o => [0x5 + Math['round'](0x5 * Math['random']()), 0xa + Math['round'](0xa * Math['random']())],
                'range': o => '无法附魔',
                'hooks': {'guardianLv': (o, p) => o[0x0], 'guardianodds': (o, p) => o[0x1] / 0x64}
            }, {
                'key': 'SwordShield-js',
                'type': 'SwordShield',
                'itemName': '正义',
                'itemDescription': '虽迟但到。',
                'minLevel': 0xb4,
                'display': o => '“无限正义之剑”Lv+' + o[0x0] + '[10]\x0a\x09\x09触发“绝对领域”效果时会获得1层“正义”效果，持续5秒\x0a\x09\x09正义：每层使下一个“无限正义之剑”的伤害+' + o[0x1] + '[50]%，叠加时刷新持续时间',
                'generate': o => [0x5 + Math['round'](0x5 * Math['random']()), 0x19 + Math['round'](0x19 * Math['random']())],
                'range': o => '无法附魔',
                'hooks': {'igsLv': (o, p) => o[0x0], 'igsodds': (o, p) => o[0x1] / 0x64}
            }, {
                'key': 'stickSword-gzjd',
                'type': 'stickSword',
                'itemName': '光之军刀',
                'itemDescription': '强只是暂时的，\x0a\x09\x09好看才是一辈子的。',
                'minLevel': 0xa0,
                'display': o => '每综合等级+' + o[0x0]['toFixed'](0x2) + '[2]点攻击力\x0a\x09\x09每综合等级+' + o[0x1]['toFixed'](0x2) + '[1]点生命汲取\x0a\x09\x09力量+' + o[0x6] + '[200]\x0a\x09\x09智力+' + o[0x7] + '[200]\x0a\x09\x09急速+' + o[0x2] + '[15]%\x0a\x09\x09闪电伤害+' + o[0x3] + '[30]%\x0a\x09\x09造成伤害时有' + o[0x4] + '[5]%几率对目标释放等级' + o[0x5] + '[20]的“雷蛇”',
                'generate'(o) {
                    let p = [];
                    return p['push'](0x1 + Math['round'](0x64 * Math['random']()) / 0x64), p['push'](0.5 + Math['round'](0x32 * Math['random']()) / 0x64), p['push'](0x5 + Math['round'](0xa * Math['random']())), p['push'](0xf + Math['round'](0xf * Math['random']())), p['push'](0x1 + Math['round'](0x4 * Math['random']())), p['push'](0xa + Math['round'](0xa * Math['random']())), p['push'](0x64 + Math['round'](0x64 * Math['random']())), p['push'](0x64 + Math['round'](0x64 * Math['random']())), p;
                },
                'range': o => '无法附魔',
                'hooks': {
                    'willDamage'(o, p, q, s) {
                        return Math['random']() <= o[0x4] / 0x64 && this['useExtraSkill']('sorceress_chainingLightning', o[0x5]), p;
                    },
                    'atk_self_Add'(o, p) {
                        return p + (this['level'] + this['player']['peakLevel']) * o[0x0];
                    },
                    'leech'(o, p) {
                        return p + (this['level'] + this['player']['peakLevel']) * o[0x1];
                    },
                    'speedRateAdd': (o, p) => p + o[0x2] / 0x64,
                    'lightningdmgAdd': (o, p) => p + o[0x3] / 0x64,
                    'intAdd': (o, p) => p + o[0x7],
                    'strAdd': (o, p) => p + o[0x6]
                }
            }, {
                'key': 'ornament_jrdn',
                'type': 'ornament',
                'itemName': '肌肉大脑',
                'itemDescription': '啊，脑子好痒，感觉要长肌肉辣。',
                'display': o => '增加相当于' + o[0x0] + '[20]%力量的智力\x0a\x09\x09增加相当于' + o[0x1] + '[20]%耐力的智力',
                'generate'(o) {
                    let p = [];
                    return p['push'](0xa + Math['round'](0xa * Math['random']())), p['push'](0xa + Math['round'](0xa * Math['random']())), p;
                },
                'range': o => '无法附魔',
                'hooks': {
                    'intAdd'(o, p) {
                        let q = 0x0;
                        return q += this['str'] * o[0x0] / 0x64, q += this['sta'] * o[0x1] / 0x64, p + q;
                    }
                }
            }, {
                'key': 'ss_tqsg',
                'type': 'SwordShield',
                'itemName': '圣光天启',
                'itemDescription': '圣光会保佑你，请不要失去你的虔诚之心。',
                'minLevel': 0x78,
                'display': o => '智力+' + o[0x0] + '[250]\x0a\x09\x09运气+' + o[0x1] + '[150]\x0a\x09\x09光伤害+' + o[0x2] + '[30]%\x0a\x09\x09“圣光弹”Lv+' + o[0x3] + '[10]\x0a\x09\x09“庇护之光”Lv+' + o[0x4] + '[10]\x0a\x09\x09受到的伤害减少' + o[0x5] + '[15]%\x0a\x09\x09受到伤害时有' + o[0x6] + '[10]%的几率释放等级' + o[0x7] + '[20]的“神圣之盾”\x0a\x09\x09受到伤害时有' + o[0x8] + '[5]%的几率释放等级' + o[0x9] + '[20]的“天堂之拳”\x0a\x09\x09赋予“祈祷”光环',
                'generate'(o) {
                    let p = [];
                    return p['push'](0x96 + Math['round'](0x64 * Math['random']())), p['push'](0x64 + Math['round'](0x32 * Math['random']())), p['push'](0x14 + Math['round'](0xa * Math['random']())), p['push'](0x5 + Math['round'](0x5 * Math['random']())), p['push'](0x5 + Math['round'](0x5 * Math['random']())), p['push'](0xa + Math['round'](0x5 * Math['random']())), p['push'](0x5 + Math['round'](0x5 * Math['random']())), p['push'](0xa + Math['round'](0xa * Math['random']())), p['push'](0x1 + Math['round'](0x4 * Math['random']())), p['push'](0xa + Math['round'](0xa * Math['random']())), p;
                },
                'range': o => '无法附魔',
                'hooks': {
                    'intAdd': (o, p) => p + o[0x0],
                    'gf': (o, p) => p + o[0x1] / 0x64,
                    'mf': (o, p) => p + o[0x1] / 0x64,
                    'lightdmgAdd': (o, p) => p + o[0x2] / 0x64,
                    'pdsk4': (o, p) => o[0x3],
                    'pdsk14': (o, p) => o[0x4],
                    'willDamaged'(o, p, q, s) {
                        return 'real' !== s && (p *= 0x1 - o[0x5] / 0x64), Math['random']() <= o[0x6] / 0x64 && this['useExtraSkill']('paladin_skill12', o[0x7]), Math['random']() <= o[0x8] / 0x64 && this['useExtraSkill']('paladin_skill15', o[0x9]), p;
                    },
                    'hpRecovery'(o, p) {
                        return this['player']['careerInfo']['selectedEnhances']['find'](q => 'pal_enhance1' === q) ? p : p + 0x2 * this['level'];
                    },
                    'pal_enhance1': (o, p) => !0x0
                }
            }, {
                'key': 'bA_xwhx',
                'type': 'boneArmor',
                'itemName': '血舞护胸',
                'itemDescription': '',
                'minLevel': 0x32,
                'display': o => '力量+' + o[0x0] + '[150]\x0a\x09\x09敏捷+' + o[0x1] + '[150]\x0a\x09\x09物理伤害+' + o[0x2] + '[20]%\x0a\x09\x09“' + decodeURIComponent(o[0x3]['name']) + '”Lv+' + o[0x3]['value'] + '[10]\x0a\x09\x09“' + decodeURIComponent(o[0x4]['name']) + '”Lv+' + o[0x4]['value'] + '[10]\x0a\x09\x09“致命劈砍”每命中一个目标，自身暴击伤害+1.5%，持续2秒。\x0a\x09\x09免予重伤，并立即释放一次“血甲缚”，该效果的冷却时间为40秒，且不受急速影响。\x0a\x09\x09',
                'generate'(o) {
                    const p = [{'key': 'hacking', 'name': '%E5%8A%88%E7%A0%8D', 'value': 0x0}, {
                        'key': 'sunder_armor',
                        'name': '%E7%A0%B4%E7%94%B2%E5%87%BB',
                        'value': 0x0
                    }, {
                        'key': 'shield_wall',
                        'name': '%E8%A1%80%E7%94%B2%E7%BC%9A',
                        'value': 0x0
                    }, {
                        'key': 'element_cold_fire',
                        'name': '%E5%85%83%E7%B4%A0%E9%99%84%E9%AD%94%C2%B7%E2%85%A1',
                        'value': 0x0
                    }, {'key': 'fanatical', 'name': '%E8%A1%80%E6%80%92', 'value': 0x0}, {
                        'key': 'hacking_plus_double',
                        'name': '%E8%87%B4%E5%91%BD%E5%8A%88%E7%A0%8D',
                        'value': 0x0
                    }];
                    let q = [];
                    return q['push'](0x4b + Math['round'](0x4b * Math['random']())), q['push'](0x4b + Math['round'](0x4b * Math['random']())), q['push'](0xa + Math['round'](0xa * Math['random']())), q['push'](p['splice'](Math['floor'](Math['random']() * p['length']), 0x1)[0x0]), q[0x3]['value'] += 0x5 + Math['round'](0x5 * Math['random']()), q['push'](p['splice'](Math['floor'](Math['random']() * p['length']), 0x1)[0x0]), q[0x4]['value'] += 0x5 + Math['round'](0x5 * Math['random']()), q;
                },
                'range': o => '无法附魔',
                'hooks': {
                    'strAdd': (o, p) => p + o[0x0],
                    'dexAdd': (o, p) => p + o[0x1],
                    'dmgAdd': (o, p) => p + o[0x2] / 0x64,
                    'whksk': (o, p) => 'hacking' === o[0x3]['key'] ? o[0x3]['value'] : 'hacking' === o[0x4]['key'] ? o[0x4]['value'] : 0x0,
                    'wsask': (o, p) => 'sunder_armor' === o[0x3]['key'] ? o[0x3]['value'] : 'sunder_armor' === o[0x4]['key'] ? o[0x4]['value'] : 0x0,
                    'wswsk': (o, p) => 'shield_wall' === o[0x3]['key'] ? o[0x3]['value'] : 'shield_wall' === o[0x4]['key'] ? o[0x4]['value'] : 0x0,
                    'wecfsk': (o, p) => 'element_cold_fire' === o[0x3]['key'] ? o[0x3]['value'] : 'element_cold_fire' === o[0x4]['key'] ? o[0x4]['value'] : 0x0,
                    'wftsk': (o, p) => 'fanatical' === o[0x3]['key'] ? o[0x3]['value'] : 'fanatical' === o[0x4]['key'] ? o[0x4]['value'] : 0x0,
                    'whkpsk': (o, p) => 'hacking_plus_double' === o[0x3]['key'] ? o[0x3]['value'] : 'hacking_plus_double' === o[0x4]['key'] ? o[0x4]['value'] : 0x0,
                    'willDead'(o, p, q, s) {
                        const u = this['buffs']['find'](v => 'willdead_buff' === v['group']);
                        return 'real' !== s && p > this['hp'] && !u ? (this['useExtraSkill']('shield_wall'), this['addBuff']('willdead_buff', 0x9c40, null, 'willdead_buff'), 0x0) : p;
                    },
                    'testCrit1'(p, q, s, u, v, w) {
                        const x = this['buffs']['find'](y => 'xmhx_buff' === y['group']);
                        return w['type'] && 'hacking_plus_double' === w['type'] && (x ? (x['arg'] += 0.015, x['resetTimer'](0x7d0)) : this['addBuff']('xmhx_buff', 0x7d0, 0.015, 'xmhx_buff')), q;
                    }
                }
            }, {
                'key': 'bA_zsqj',
                'type': 'boneArmor',
                'itemName': '制式轻甲',
                'itemDescription': '时下最流行的款式\x0a\x09\x09魅力+999',
                'display': o => '耐力+' + o[0x0] + '[50]\x0a\x09\x09“包扎伤口”Lv+' + o[0x1][0x0]['value'] + '[10]\x0a\x09\x09“气血激增”Lv+' + o[0x1][0x1]['value'] + '[10]\x0a\x09\x09“钢铁之躯”Lv+' + o[0x1][0x2]['value'] + '[10]\x0a\x09\x09套装-战场新秀：穿戴2件后，攻击力+100',
                'generate'(o) {
                    const p = [{'key': 'save_oneself', 'value': 0x0}, {
                        'key': 'warrior_hp',
                        'value': 0x0
                    }, {'key': 'warrior_def', 'value': 0x0}];
                    p[0x0]['value'] += 0x5 + Math['round'](0x5 * Math['random']()), p[0x1]['value'] += 0x5 + Math['round'](0x5 * Math['random']()), p[0x2]['value'] += 0x5 + Math['round'](0x5 * Math['random']());
                    let q = [];
                    return q['push'](0x19 + Math['round'](0x19 * Math['random']())), q['push'](p), q;
                },
                'range': o => '无法附魔',
                'hooks': {
                    'staAdd': (o, p) => p + o[0x0], 'skillLv2': o => o[0x1], 'atk_self_Add'(o, p) {
                        return this['runAttrHooks'](!0x1, 'zcxx') ? p + 0x64 : p;
                    }
                }
            }, {
                'key': 'bA_zsbt',
                'type': 'boneShinGuard',
                'itemName': '制式绑腿',
                'itemDescription': '时下最流行的款式\x0a\x09\x09魅力+999',
                'display': o => '耐力+' + o[0x0] + '[50]\x0a\x09\x09“包扎伤口”Lv+' + o[0x1][0x0]['value'] + '[10]\x0a\x09\x09“气血激增”Lv+' + o[0x1][0x1]['value'] + '[10]\x0a\x09\x09“钢铁之躯”Lv+' + o[0x1][0x2]['value'] + '[10]\x0a\x09\x09套装-战场新秀：穿戴2件后，攻击力+100',
                'generate'(o) {
                    const p = [{'key': 'save_oneself', 'value': 0x0}, {
                        'key': 'warrior_hp',
                        'value': 0x0
                    }, {'key': 'warrior_def', 'value': 0x0}];
                    p[0x0]['value'] += 0x5 + Math['round'](0x5 * Math['random']()), p[0x1]['value'] += 0x5 + Math['round'](0x5 * Math['random']()), p[0x2]['value'] += 0x5 + Math['round'](0x5 * Math['random']());
                    let q = [];
                    return q['push'](0x19 + Math['round'](0x19 * Math['random']())), q['push'](p), q;
                },
                'range': o => '无法附魔',
                'hooks': {'staAdd': (o, p) => p + o[0x0], 'skillLv3': o => o[0x1], 'zcxx': () => !0x0}
            }, {
                'key': 'bA_zstj',
                'type': 'copperArmor',
                'itemName': '制式铁甲',
                'itemDescription': '时下最流行的款式\x0a\x09\x09魅力+999',
                'display': o => '耐力+' + o[0x0] + '[50]\x0a\x09\x09“包扎伤口”Lv+' + o[0x1][0x0]['value'] + '[10]\x0a\x09\x09“气血激增”Lv+' + o[0x1][0x1]['value'] + '[10]\x0a\x09\x09“钢铁之躯”Lv+' + o[0x1][0x2]['value'] + '[10]\x0a\x09\x09套装-战场新秀：穿戴2件后，攻击力+100',
                'generate'(o) {
                    const p = [{'key': 'save_oneself', 'value': 0x0}, {
                        'key': 'warrior_hp',
                        'value': 0x0
                    }, {'key': 'warrior_def', 'value': 0x0}];
                    p[0x0]['value'] += 0x5 + Math['round'](0x5 * Math['random']()), p[0x1]['value'] += 0x5 + Math['round'](0x5 * Math['random']()), p[0x2]['value'] += 0x5 + Math['round'](0x5 * Math['random']());
                    let q = [];
                    return q['push'](0x19 + Math['round'](0x19 * Math['random']())), q['push'](p), q;
                },
                'range': o => '无法附魔',
                'hooks': {
                    'staAdd': (o, p) => p + o[0x0], 'skillLv2': o => o[0x1], 'atk_self_Add'(o, p) {
                        return this['runAttrHooks'](!0x1, 'zcxx') ? p + 0x64 : p;
                    }
                }
            }, {
                'key': 'bA_zsqj2',
                'type': 'copperShinGuard1',
                'itemName': '制式裙甲',
                'itemDescription': '时下最流行的款式\x0a\x09\x09魅力+999',
                'display': o => '耐力+' + o[0x0] + '[50]\x0a\x09\x09“包扎伤口”Lv+' + o[0x1][0x0]['value'] + '[10]\x0a\x09\x09“气血激增”Lv+' + o[0x1][0x1]['value'] + '[10]\x0a\x09\x09“钢铁之躯”Lv+' + o[0x1][0x2]['value'] + '[10]\x0a\x09\x09套装-战场新秀：穿戴2件后，攻击力+100',
                'generate'(o) {
                    const p = [{'key': 'save_oneself', 'value': 0x0}, {
                        'key': 'warrior_hp',
                        'value': 0x0
                    }, {'key': 'warrior_def', 'value': 0x0}];
                    p[0x0]['value'] += 0x5 + Math['round'](0x5 * Math['random']()), p[0x1]['value'] += 0x5 + Math['round'](0x5 * Math['random']()), p[0x2]['value'] += 0x5 + Math['round'](0x5 * Math['random']());
                    let q = [];
                    return q['push'](0x19 + Math['round'](0x19 * Math['random']())), q['push'](p), q;
                },
                'range': o => '无法附魔',
                'hooks': {'staAdd': (o, p) => p + o[0x0], 'skillLv3': o => o[0x1], 'zcxx': () => !0x0}
            }, {
                'key': 'bA_jsbf',
                'type': 'boneShinGuard',
                'itemName': '金色包袱',
                'itemDescription': '这是一条奇特的腰带。',
                'display': o => '闪避值+' + o[0x0] + '[500]\x0a\x09\x09急速+' + o[0x1] + '[10]%\x0a\x09\x09运气+' + o[0x2] + '[100]\x0a\x09\x09每开启一格背包，造成的伤害提高0.5%。',
                'generate'(o) {
                    let p = [];
                    return p['push'](0xfa + Math['round'](0xfa * Math['random']())), p['push'](0x1 + Math['round'](0x9 * Math['random']())), p['push'](0x32 + Math['round'](0x32 * Math['random']())), p;
                },
                'range': o => '无法附魔',
                'hooks': {
                    'miss_shanbizhi': (o, p) => p + o[0x0],
                    'speedRateAdd': (o, p) => p + o[0x1] / 0x64,
                    'gf': (o, p) => p + o[0x2] / 0x64,
                    'mf': (o, p) => p + o[0x2] / 0x64,
                    'willDamage': (o, p, q, s, u) => p * (0x1 + u['player']['inventory']['length'] / 0xc8)
                }
            }, {
                'key': 'ornament-jdzs',
                'type': 'ornament',
                'itemName': '乔丹之石',
                'itemDescription': '某著名的货币单位。',
                'display': o => '所有技能Lv+' + o[0x0][0x0]['value'] + '[3]\x0a\x09\x09法力值+' + o[0x1] + '[15]%\x0a\x09\x09闪电伤害+' + o[0x2] + '[20]%',
                'generate'(o) {
                    let p = [];
                    return p['push']([{
                        'key': 'allsk',
                        'value': 0x1 + (Math['random']() > 0.75 ? 0x1 : 0x0) + (Math['random']() > 0.99 ? 0x1 : 0x0)
                    }]), p['push'](0xa + Math['round'](0x5 * Math['random']())), p['push'](0xa + Math['round'](0xa * Math['random']())), p;
                },
                'range': o => '无法附魔',
                'hooks': {
                    'skillLv4': o => o[0x0],
                    'maxMpMul': (o, p) => 0x1 + o[0x1] / 0x64,
                    'lightningdmgAdd': (o, p) => p + o[0x2] / 0x64
                }
            }, {
                'key': 'bA_zsfp',
                'type': 'mithrilDress',
                'itemName': '制式法袍',
                'itemDescription': '时下最流行的款式\x0a\x09\x09魅力+999',
                'display': o => '耐力+' + o[0x0] + '[50]\x0a\x09\x09“火球术”Lv+' + o[0x1][0x0]['value'] + '[10]\x0a\x09\x09“闪电”Lv+' + o[0x1][0x1]['value'] + '[10]\x0a\x09\x09“水箭术”Lv+' + o[0x1][0x2]['value'] + '[10]\x0a\x09\x09套装-优秀学徒：穿戴2件后，智力+100',
                'generate'(o) {
                    const p = [{'key': 'sorceress_fireBall', 'value': 0x0}, {
                        'key': 'sorceress_lightning',
                        'value': 0x0
                    }, {'key': 'sorceress_coldBall', 'value': 0x0}];
                    p[0x0]['value'] += 0x5 + Math['round'](0x5 * Math['random']()), p[0x1]['value'] += 0x5 + Math['round'](0x5 * Math['random']()), p[0x2]['value'] += 0x5 + Math['round'](0x5 * Math['random']());
                    let q = [];
                    return q['push'](0x19 + Math['round'](0x19 * Math['random']())), q['push'](p), q;
                },
                'range': o => '无法附魔',
                'hooks': {
                    'staAdd': (o, p) => p + o[0x0], 'skillLv2': o => o[0x1], 'intAdd'(o, p) {
                        return this['runAttrHooks'](!0x1, 'yxxt') ? p + 0x64 : p;
                    }
                }
            }, {
                'key': 'bA_zsck',
                'type': 'mithrilSkirt',
                'itemName': '制式长裤',
                'itemDescription': '时下最流行的款式\x0a\x09\x09魅力+999',
                'display': o => '耐力+' + o[0x0] + '[50]\x0a\x09\x09“魔法盾”Lv+' + o[0x1][0x0]['value'] + '[10]\x0a\x09\x09“点燃”Lv+' + o[0x1][0x1]['value'] + '[10]\x0a\x09\x09“活力之水”Lv+' + o[0x1][0x2]['value'] + '[10]\x0a\x09\x09套装-优秀学徒：穿戴2件后，智力+100',
                'generate'(o) {
                    const p = [{'key': 'sorceress_magicShield', 'value': 0x0}, {
                        'key': 'sorceress_igniting',
                        'value': 0x0
                    }, {'key': 'sorceress_vitalitywater', 'value': 0x0}];
                    p[0x0]['value'] += 0x5 + Math['round'](0x5 * Math['random']()), p[0x1]['value'] += 0x5 + Math['round'](0x5 * Math['random']()), p[0x2]['value'] += 0x5 + Math['round'](0x5 * Math['random']());
                    let q = [];
                    return q['push'](0x19 + Math['round'](0x19 * Math['random']())), q['push'](p), q;
                },
                'range': o => '无法附魔',
                'hooks': {'staAdd': (o, p) => p + o[0x0], 'skillLv3': o => o[0x1], 'yxxt': () => !0x0}
            }, {
                'key': 'sos_dykb',
                'type': 'shoes',
                'itemName': '地狱阔步',
                'itemDescription': '穿了这双魔皮靴，反而觉得地板更烫脚了。',
                'display': o => '急速+' + o[0x0] + '[5]%\x0a\x09\x09火焰吸收+' + o[0x1] + '[25]%\x0a\x09\x09火焰伤害+' + o[0x2] + '[25]%\x0a\x09\x09受到的火焰伤害减少' + o[0x3] + '[20]%\x0a\x09\x09受到伤害时，有' + o[0x4] + '[5]%几率释放等级' + o[0x5] + '[15]的“烈焰护盾”',
                'generate'(o) {
                    let p = [];
                    return p['push'](0x1 + Math['round'](0x4 * Math['random']())), p['push'](0xf + Math['round'](0xa * Math['random']())), p['push'](0xf + Math['round'](0xa * Math['random']())), p['push'](0xa + Math['round'](0xa * Math['random']())), p['push'](0x1 + Math['round'](0x4 * Math['random']())), p['push'](0xa + Math['round'](0x5 * Math['random']())), p;
                },
                'range': o => '无法附魔',
                'hooks': {
                    'speedRateAdd': (o, p) => p + o[0x0] / 0x64,
                    'fireAbsorb': (o, p) => p + o[0x1] / 0x64,
                    'firedmgAdd': (o, p) => p + o[0x2] / 0x64,
                    'willDamaged'(o, p, q, s) {
                        return 'fire' === s && (p *= 0x1 - o[0x3] / 0x64), Math['random']() <= o[0x4] / 0x64 && this['useExtraSkill']('sorceress_fireShield', o[0x5]), p;
                    }
                }
            }, {
                'key': 'Mc_yh',
                'type': 'Machete',
                'itemName': '嫣红',
                'itemDescription': '上一任持有者常年使用猪血进行保养，以至于刀身都泛着红光。\x0a\x09\x09没错，不能因为人家是杀猪刀就觉得它不配拥有姓名。',
                'display': o => '力量+' + o[0x0] + '[150]\x0a\x09\x09敏捷+' + o[0x1] + '[150]\x0a\x09\x09每次造成物理伤害，有50%的几率额外获得1点怒气。\x0a\x09\x09强化：“沸血”的效果提高至4点/秒。',
                'generate'(o) {
                    let p = [];
                    return p['push'](0x64 + Math['round'](0x32 * Math['random']())), p['push'](0x64 + Math['round'](0x32 * Math['random']())), p;
                },
                'range': o => '无法附魔',
                'hooks': {
                    'strAdd': (o, p) => p + o[0x0], 'dexAdd': (o, p) => p + o[0x1], 'willDamage'(o, p, q, s, u) {
                        return 'melee' === s && Math['random']() > 0.5 && (this['rp'] += 0x1), p;
                    }, 'mcyh': () => !0x0
                }
            }];
        }, 2789: m => {
            m['exports'] = [{
                'key': 'ornament-2',
                'type': 'ornament',
                'itemName': '史莱姆之心',
                'itemDescription': '用史莱姆核心制作的挂坠，似乎有着不太一样的效果。',
                'special': !0x0,
                'display': o => '生命值恢复+5，法力值恢复+2',
                'generate'(o) {
                },
                'range': o => '无法附魔',
                'hooks': {'hpRecovery': (o, p) => p + 0x5, 'mpRecovery': (o, p) => p + 0x2}
            }, {
                'key': 'ot_slmzx',
                'type': 'ornament',
                'itemName': '史莱姆之心',
                'itemDescription': '用史莱姆核心制作的挂坠，似乎有着不太一样的效果。\x0a\x09\x09很难评价到底是你拥有了史莱姆的一部分能力，还是史莱姆拥有了你的全部能力。',
                'special': !0x0,
                'display': o => '生命恢复×' + Math['round'](0x64 * o[0x0]) / 0x64 + '[1.5]\x0a\x09\x09法力恢复×' + Math['round'](0x64 * o[0x1]) / 0x64 + '[1.5]\x0a\x09\x09受到boss单位的攻击时，有' + o[0x2] + '[50]%的几率使本次伤害随机减少25%~50%。\x0a\x09\x09受到非boss单位的攻击时，有' + o[0x3] + '[10]%的几率吞噬目标，同时自身恢复2%生命值。',
                'generate'(o) {
                    let p = [];
                    return p['push'](Math['round'](0x7d + 0x19 * Math['random']()) / 0x64), p['push'](Math['round'](0x7d + 0x19 * Math['random']()) / 0x64), p['push'](Math['round'](0x19 + 0x19 * Math['random']())), p['push'](Math['round'](0x5 + 0x5 * Math['random']())), p;
                },
                'range': o => '无法附魔',
                'hooks': {
                    'hpRecovery': (o, p) => p * o[0x0],
                    'mpRecovery': (o, p) => p * o[0x1],
                    'willDamaged'(o, p, q, s) {
                        return q ? (q['boss'] && Math['random']() < o[0x2] / 0x64 ? p *= 0.5 + 0.25 * Math['random']() : !q['boss'] && Math['random']() < o[0x3] / 0x64 && (q['kill'](), this['hp'] += 0.02 * this['maxHp'], p = 0x0), p) : p;
                    }
                }
            }, {
                'key': 'stickSword-1',
                'type': 'stickSword',
                'itemName': '狼牙剑',
                'itemDescription': '虽然叫做狼牙剑，但很显然并不是用狼牙做的。',
                'special': !0x0,
                'display': o => '攻击力+15',
                'generate': o => 0.5,
                'range': o => '无法附魔',
                'hooks': {'atk_self_Add': (o, p) => p + 0xf}
            }, {
                'key': 'ornament-3',
                'type': 'ornament',
                'itemName': '大“金”牙',
                'itemDescription': '金牙之所以是叫金牙......',
                'special': !0x0,
                'display': o => '火焰抗性+500',
                'generate': o => 0.5,
                'range': o => '无法附魔',
                'hooks': {'fireResist': (o, p) => p + 0x1f4}
            }, {
                'key': 'Machete-1',
                'type': 'Machete',
                'itemName': '卡卡列夫的爱抚',
                'itemDescription': '在卡卡列夫看来，你和狗头人好像没有很大的区别。',
                'special': !0x0,
                'display': o => '“重击”有40%的几率造成50%的额外火焰伤害',
                'generate': o => 0x3,
                'range': o => '无法附魔',
                'hooks': {'kklf_love': (o, p) => !0x0}
            }, {
                'key': 'boneArmor-1',
                'type': 'boneArmor',
                'itemName': '吉祥三宝',
                'itemDescription': '你最喜欢的歌词——哎，对啦，在天上，他回家啦。',
                'special': !0x0,
                'display': o => '每秒获得2点怒气',
                'generate': o => 0x2,
                'range': o => '无法附魔',
                'hooks': {'rpRecovery': (o, p) => p + 0x2}
            }, {
                'key': 'mithrilDress-yulin',
                'type': 'mithrilDress',
                'itemName': '鱼鳞衣',
                'itemDescription': '利用鱼人身上的鳞片制作的内甲，这可比秘银便宜多啦。',
                'special': !0x0,
                'display': o => '智力+200，耐力+100',
                'generate': o => 0x1,
                'range': o => '无法附魔',
                'hooks': {'intAdd': (o, p) => p + 0xc8, 'staAdd': (o, p) => p + 0x64}
            }, {
                'key': 'ornament-yusila',
                'type': 'ornament',
                'itemName': '黑色鳞片',
                'itemDescription': '鱼斯拉身上的一块鳞片，带着一股奇怪的海鲜味儿。',
                'special': !0x0,
                'display': o => '物理伤害+1000，元素伤害+1000',
                'generate': o => 0x1,
                'range': o => '无法附魔',
                'hooks': {
                    'dmgLAdd': (o, p) => p + 0x3e8,
                    'firedmgLAdd': (o, p) => p + 0x3e8,
                    'colddmgLAdd': (o, p) => p + 0x3e8,
                    'lightningdmgLAdd': (o, p) => p + 0x3e8
                }
            }, {
                'key': 'ornament-ceshi',
                'type': 'ornament',
                'itemName': '测试首饰',
                'itemDescription': '穿上之后会有奇怪的效果。\x0a\x09\x09但是，如果你看到了这件装备，反倒是你比较奇怪。',
                'special': !0x0,
                'display': o => '每角色等级+' + o + '点攻击力',
                'generate': o => 0x1,
                'range': o => '无法附魔',
                'hooks': {'meleeAbsorb': (o, p) => p + 0xf, 'meleeAbsorbmax': (o, p) => p + 0.15}
            }, {
                'key': 'copperShinGuard1-ceshi',
                'type': 'copperShinGuard1',
                'itemName': '测试重甲下装',
                'itemDescription': '穿上之后会有奇怪的效果。\x0a\x09\x09但是，如果你看到了这件装备，反倒是你比较奇怪。',
                'special': !0x0,
                'display': o => '穿上之后会有奇怪的效果',
                'generate': o => 0x1 + Math['floor'](0xf * Math['random']()),
                'range': o => '无法附魔',
                'hooks': {}
            }, {
                'key': 'year2018.yearBeastWeapon-4',
                'type': 'SwordShield',
                'itemName': '年兽的脚掌',
                'itemDescription': '非常厚实的肉垫，手感好到爆了。',
                'minLevel': 0x1,
                'special': !0x0,
                'display': o => '所有伤害吸收+10%\x0a\x09\x09受到的伤害减少10%',
                'generate': o => 0x1,
                'range': o => '无法附魔',
                'hooks': {
                    'fireAbsorb': (o, p) => p + 0.1,
                    'meleeAbsorb': (o, p) => p + 0.1,
                    'darkAbsorb': (o, p) => p + 0.1,
                    'coldAbsorb': (o, p) => p + 0.1,
                    'lightningAbsorb': (o, p) => p + 0.1,
                    'lightAbsorb': (o, p) => p + 0.1,
                    'poisonAbsorb': (o, p) => p + 0.1,
                    'willDamaged': (o, p, q, s) => ('real' !== s && (p *= 0.9), p)
                }
            }, {
                'key': 'lg_1',
                'type': 'lgwp',
                'itemName': '木剑',
                'itemDescription': '洞窟剑神必备套装之一，谁都可以使用。',
                'special': !0x0,
                'display': o => '获得的技能熟练度+0.25\x0a\x09\x09套装-熟能生巧：穿戴4件后，获得的技能熟练度×2',
                'generate': o => 0.5,
                'range': o => '无法附魔',
                'hooks': {
                    'skExpadd': (o, p) => p + 0.25, 'skillExpMul'(o, p) {
                        return this['runAttrHooks'](!0x1, 'lg_2') && this['runAttrHooks'](!0x1, 'lg_3') && this['runAttrHooks'](!0x1, 'lg_4') ? 0x2 : 0x1;
                    }
                }
            }, {
                'key': 'lg_2',
                'type': 'lgpt',
                'itemName': '布衣',
                'itemDescription': '洞窟剑神必备套装之二，谁都可以使用。',
                'special': !0x0,
                'display': o => '获得的技能熟练度+0.25\x0a\x09\x09套装-熟能生巧：穿戴4件后，获得的技能熟练度×2',
                'generate': o => 0.5,
                'range': o => '无法附魔',
                'hooks': {'skExpadd': (o, p) => p + 0.25, 'lg_2': () => !0x0}
            }, {
                'key': 'lg_3',
                'type': 'lggt',
                'itemName': '布裤',
                'itemDescription': '洞窟剑神必备套装之三，谁都可以使用。',
                'special': !0x0,
                'display': o => '获得的技能熟练度+0.25\x0a\x09\x09套装-熟能生巧：穿戴4件后，获得的技能熟练度×2',
                'generate': o => 0.5,
                'range': o => '无法附魔',
                'hooks': {'skExpadd': (o, p) => p + 0.25, 'lg_3': () => !0x0}
            }, {
                'key': 'lg_4',
                'type': 'lgjq',
                'itemName': '技巧项链',
                'itemDescription': '洞窟剑神必备套装之四，谁都可以使用。',
                'special': !0x0,
                'display': o => '获得的技能熟练度+0.25\x0a\x09\x09套装-熟能生巧：穿戴4件后，获得的技能熟练度×2',
                'generate': o => 0.5,
                'range': o => '无法附魔',
                'hooks': {'skExpadd': (o, p) => p + 0.25, 'lg_4': () => !0x0}
            }];
        }, 7443: (m, o, p) => {
            m['exports'] = [p(0x1af1), p(0xa2c)];
        }, 2604: m => {
            m['exports'] = {
                'key': 'paladin_map',
                'name': '邻村村口-2',
                'hint': '邻村村口-2',
                'isDungeon': !0x0,
                'outside': 'home',
                'requirement': {'stories': ['pal-1'], 'beforeStories': ['pal-2']},
                'phases': [{
                    'description': '击败圣骑士·伊瑞尔',
                    'monsters': [{'type': 'paladin_ariel', 'max': 0x1, 'delay': 0x1388, 'total': 0x1}]
                }],
                'monsters': [],
                'resetPrice': -0x1,
                'level': 0x12c,
                'exp': 0x1,
                'loots': []
            };
        }, 6897: m => {
            m['exports'] = {
                'key': 'soulbringer_map',
                'name': '庇护所深处',
                'hint': '庇护所深处',
                'isDungeon': !0x0,
                'outside': 'home',
                'requirement': {'stories': ['soulbringer-1']},
                'phases': [{
                    'description': '击败百鬼之王·卡隆的投影',
                    'monsters': [{'type': 'soul_karon', 'max': 0x1, 'delay': 0x2710, 'total': 0x1}]
                }],
                'monsters': [],
                'resetPrice': -0x1,
                'level': 0x12c,
                'exp': 0x1,
                'loots': []
            };
        }, 4877: m => {
            m['exports'] = {
                'key': 'chapter3.auran',
                'name': '奥兰境内',
                'hint': '抵达奥兰帝国的必经之路。',
                'requirement': {'stories': ['chapter3-7']},
                'monsters': [{
                    'type': 'chapter3.murloc.minions',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x5,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'type': 'chapter3.murloc.shaman',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x2,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'types': {
                        'shrine.heal': 0x1,
                        'shrine.energy': 0x1,
                        'shrine.power': 0x1,
                        'shrine.experience': 0x1,
                        'shrine.equip': 0x1,
                        'shrine.wuxingshi': 0x1,
                        'shrine.redbag': 0x1
                    }, 'warmup': 0xea60, 'delay': 0xea60, 'max': 0x1
                }]
            };
        }, 8850: m => {
            m['exports'] = {
                'key': 'chapter3.auran1',
                'name': '湖畔镇',
                'hint': '小湖边的镇子，到处都是鱼人。',
                'isDungeon': !0x0,
                'outside': 'chapter3.auran',
                'requirement': {'stories': ['chapter3-7']},
                'phases': [{
                    'description': '击败鱼人督军，拯救被鱼人袭击的当地村民。',
                    'monsters': [{'type': 'chapter3.murloc.warlord', 'total': 0x1}]
                }],
                'monsters': [{
                    'type': 'chapter3.murloc.minions',
                    'warmup': 0x3e8,
                    'delay': 0x2710,
                    'max': 0x3,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'chapter3.murloc.minions',
                    'warmup': 0x3e8,
                    'delay': 0x2710,
                    'max': 0x3,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'chapter3.murloc.shaman',
                    'warmup': 0x1770,
                    'delay': 0x4e20,
                    'max': 0x2,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'chapter3.murloc.shaman',
                    'warmup': 0x36b0,
                    'delay': 0x4e20,
                    'max': 0x2,
                    'quality': [0x19, 0x5, 0x1]
                }],
                'coolDown': 0x5265c00,
                'maxCoolDownStack': 0x1,
                'coolDownOffset': -0xdbba00,
                'resetPrice': 0x64,
                'level': 0x64,
                'exp': 0x61a80,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x4650, 0x7530]}, {
                    'type': 'specialEquip',
                    'rate': 0.1,
                    'items': ['mithrilDress-yulin']
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'weapon'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'weapon'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'plastron'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'gaiter'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'ornament'}]
            };
        }, 9391: m => {
            m['exports'] = {
                'key': 'chapter3.auran2',
                'name': '闪光湖',
                'hint': '小湖边的镇子，到处都是鱼人。',
                'isDungeon': !0x0,
                'outside': 'chapter3.auran',
                'requirement': {'stories': ['chapter3-7']},
                'phases': [{
                    'description': '击败巨型海怪鱼斯拉。',
                    'monsters': [{'type': 'chapter3.fishzilla', 'warmup': 0x61a8, 'total': 0x1}]
                }],
                'monsters': [{'type': 'chapter3.fishzilla.magician', 'warmup': 0x1388, 'delay': 0x2710, 'max': 0x5}],
                'coolDown': 0x5265c00,
                'maxCoolDownStack': 0x1,
                'coolDownOffset': -0xdbba00,
                'resetPrice': 0x6e,
                'level': 0x6e,
                'exp': 0x7a120,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x4e20, 0x9c40]}, {
                    'type': 'specialEquip',
                    'rate': 0.1,
                    'items': ['ornament-yusila']
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'weapon'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'weapon'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'plastron'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'gaiter'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'ornament'}]
            };
        }, 6232: m => {
            m['exports'] = {
                'key': 'chapter3.auran3',
                'name': '卡格西城',
                'hint': '小湖边的镇子，到处都是鱼人。',
                'requirement': {'stories': ['chapter3-7']},
                'monsters': [{
                    'type': 'chapter3.waterElement.nagaHero',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x3,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'chapter3.waterElement',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x2,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'chapter3.waterElement.giants',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x1
                }, {
                    'types': {
                        'shrine.heal': 0x1,
                        'shrine.energy': 0x1,
                        'shrine.power': 0x1,
                        'shrine.experience': 0x1,
                        'shrine.equip': 0x1,
                        'shrine.wuxingshi': 0x1,
                        'shrine.redbag': 0x1
                    }, 'warmup': 0xea60, 'delay': 0xea60, 'max': 0x1
                }]
            };
        }, 5021: m => {
            m['exports'] = {
                'key': 'chapter3.auran4',
                'name': '雨之都卡格西',
                'hint': '小湖边的镇子，到处都是鱼人。',
                'isDungeon': !0x0,
                'outside': 'chapter3.auran3',
                'requirement': {'stories': ['chapter3-7']},
                'phases': [{
                    'description': '击败奈因洛斯降临的分身',
                    'monsters': [{
                        'type': 'chapter3.waterElement.Nynnroth',
                        'total': 0x1
                    }, {'type': 'shrine.nynnroth.shield', 'max': 0x1, 'warmup': 0x3a98, 'delay': 0x7530}]
                }],
                'monsters': [{
                    'type': 'chapter3.waterElement.nagaHero',
                    'warmup': 0x3e8,
                    'delay': 0x3a98,
                    'max': 0x3,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'chapter3.waterElement',
                    'warmup': 0x1770,
                    'delay': 0x61a8,
                    'max': 0x2,
                    'quality': [0x19, 0x5, 0x1]
                }, {'type': 'chapter3.waterElement.giants', 'warmup': 0x7530, 'delay': 0xc350, 'max': 0x1}],
                'coolDown': 0x5265c00,
                'maxCoolDownStack': 0x1,
                'coolDownOffset': -0xdbba00,
                'resetPrice': 0x82,
                'level': 0x82,
                'exp': 0xf4240,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x9c40, 0xea60]}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'weapon'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'weapon'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'plastron'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'gaiter'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'ornament'
                }]
            };
        }, 3578: (m, o, p) => {
            m['exports'] = [p(0x2492), p(0xff8), p(0xa9d), p(0x182), p(0x130d), p(0x2292), p(0x24af), p(0x1368), p(0x521), p(0x1858), p(0x139d)];
        }, 9362: m => {
            m['exports'] = {
                'key': 'chapter3.road',
                'name': '大路',
                'hint': '很宽的马路。',
                'requirement': {'stories': ['chapter3-1']},
                'monsters': [{
                    'type': 'chapter3.undead.ghost',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x5,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'type': 'chapter3.undead.zombie',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x2,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'types': {
                        'shrine.heal': 0x1,
                        'shrine.energy': 0x1,
                        'shrine.power': 0x1,
                        'shrine.experience': 0x1,
                        'shrine.equip': 0x1,
                        'shrine.wuxingshi': 0x1,
                        'shrine.redbag': 0x1
                    }, 'warmup': 0xea60, 'delay': 0xea60, 'max': 0x1
                }]
            };
        }, 4088: m => {
            m['exports'] = {
                'key': 'chapter3.shelter773',
                'name': '庇护所773号',
                'hint': '一个被亡灵化了的庇护所',
                'isDungeon': !0x0,
                'outside': 'chapter3.road',
                'requirement': {'stories': ['chapter3-3']},
                'phases': [{
                    'description': '击败暗影法师奈布。',
                    'monsters': [{'type': 'chapter3.necromancer', 'total': 0x1}]
                }],
                'monsters': [{
                    'type': 'chapter3.undead.ghost',
                    'warmup': 0x3e8,
                    'delay': 0x2710,
                    'max': 0x2,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'chapter3.undead.ghost',
                    'warmup': 0x3e8,
                    'delay': 0x2710,
                    'max': 0x2,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'chapter3.undead.zombie',
                    'warmup': 0x1770,
                    'delay': 0x4e20,
                    'max': 0x1,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'chapter3.undead.zombie',
                    'warmup': 0x36b0,
                    'delay': 0x4e20,
                    'max': 0x1,
                    'quality': [0x19, 0x5, 0x1]
                }],
                'coolDown': 0x5265c00,
                'maxCoolDownStack': 0x1,
                'coolDownOffset': -0xdbba00,
                'resetPrice': 0x50,
                'level': 0x50,
                'exp': 0x2bf20,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x2710, 0x4e20]}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'weapon'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'weapon'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'plastron'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'gaiter'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'ornament'
                }]
            };
        }, 4968: m => {
            m['exports'] = {
                'key': 'chapter3.tower1',
                'name': '混乱元素之塔',
                'hint': '小湖边的镇子，到处都是鱼人。',
                'requirement': {'stories': ['chapter3-7']},
                'monsters': [{
                    'type': 'chapter3.element.fire',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x2,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'chapter3.element.water',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x2,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'chapter3.element.earth',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x2,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'types': {
                        'shrine.heal': 0x1,
                        'shrine.energy': 0x1,
                        'shrine.power': 0x1,
                        'shrine.experience': 0x1,
                        'shrine.equip': 0x1,
                        'shrine.wuxingshi': 0x1,
                        'shrine.redbag': 0x1
                    }, 'warmup': 0xea60, 'delay': 0xea60, 'max': 0x1
                }]
            };
        }, 1313: m => {
            m['exports'] = {
                'key': 'chapter3.tower2',
                'name': '混乱元素王座',
                'isDungeon': !0x0,
                'outside': 'chapter3.tower1',
                'hint': '小湖边的镇子，到处都是鱼人。',
                'requirement': {'stories': ['chapter3-7']},
                'phases': [{
                    'description': '击败失去控制的阿撒托斯的分身',
                    'monsters': [{'type': 'chapter3.element.azathoth.fire', 'total': 0x1}]
                }],
                'monsters': [{
                    'type': 'chapter3.element.fire',
                    'warmup': 0x1388,
                    'delay': 0xea60,
                    'max': 0x1,
                    'quality': [0x19, 0x2]
                }, {
                    'type': 'chapter3.element.water',
                    'warmup': 0x61a8,
                    'delay': 0xea60,
                    'max': 0x1,
                    'quality': [0x19, 0x2]
                }, {
                    'type': 'chapter3.element.earth',
                    'warmup': 0xafc8,
                    'delay': 0xea60,
                    'max': 0x1,
                    'quality': [0x19, 0x2]
                }],
                'coolDown': 0x5265c00,
                'maxCoolDownStack': 0x1,
                'coolDownOffset': -0xdbba00,
                'resetPrice': 0x78,
                'level': 0x78,
                'exp': 0xb71b0,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x61a8, 0xc350]}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'weapon'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'weapon'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'plastron'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'gaiter'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'ornament'
                }]
            };
        }, 2717: m => {
            m['exports'] = {
                'key': 'chapter3.wood',
                'name': '边界森林',
                'hint': '抵达奥兰帝国的必经之路。',
                'requirement': {'stories': ['chapter3-5']},
                'monsters': [{
                    'type': 'chapter3.beast.wildpig',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x5,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'type': 'chapter3.beast.lion',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x2,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'types': {
                        'shrine.heal': 0x1,
                        'shrine.energy': 0x1,
                        'shrine.power': 0x1,
                        'shrine.experience': 0x1,
                        'shrine.equip': 0x1,
                        'shrine.wuxingshi': 0x1,
                        'shrine.redbag': 0x1
                    }, 'warmup': 0xea60, 'delay': 0xea60, 'max': 0x1
                }]
            };
        }, 386: m => {
            m['exports'] = {
                'key': 'chapter3.wood1',
                'name': '森林深处',
                'hint': '抵达奥兰帝国的必经之路。',
                'isDungeon': !0x0,
                'outside': 'chapter3.wood',
                'requirement': {'stories': ['chapter3-6']},
                'phases': [{
                    'description': '击败辛巴、彭彭和丁满。',
                    'monsters': [{'type': 'chapter3.beast.pengpeng', 'total': 0x1}, {
                        'type': 'chapter3.beast.simba',
                        'total': 0x1
                    }, {'type': 'chapter3.beast.dingman', 'total': 0x1}]
                }],
                'monsters': [{
                    'type': 'chapter3.beast.wildpig',
                    'warmup': 0x3e8,
                    'delay': 0x2710,
                    'max': 0x3,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'type': 'chapter3.beast.lion',
                    'warmup': 0x1770,
                    'delay': 0x3a98,
                    'max': 0x1,
                    'quality': [0x31, 0x7, 0x1]
                }],
                'coolDown': 0x5265c00,
                'maxCoolDownStack': 0x1,
                'coolDownOffset': -0xdbba00,
                'resetPrice': 0x5a,
                'level': 0x5a,
                'exp': 0x493e0,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x3a98, 0x61a8]}, {
                    'type': 'specialEquip',
                    'rate': 0.1,
                    'items': ['boneArmor-1']
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'weapon'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'weapon'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'plastron'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'gaiter'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'ornament'}]
            };
        }, 7707: (m, o, p) => {
            m['exports'] = [p(0x2128), p(0x1199), p(0x1ec0), p(0x112c), p(0x1bf5), p(0xcc)];
        }, 4396: m => {
            m['exports'] = {
                'key': 'chapter4.sanAnthony',
                'name': '圣安东尼帝国',
                'requirement': {'stories': ['chapter3-7']},
                'monsters': [{
                    'type': 'chapter4.humans.soldier',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x5,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'type': 'chapter4.humans.musketeer',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x2,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'type': 'chapter4.humans.mortar',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x1,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'types': {
                        'shrine.heal': 0x1,
                        'shrine.energy': 0x1,
                        'shrine.power': 0x1,
                        'shrine.experience': 0x1,
                        'shrine.equip': 0x1,
                        'shrine.wuxingshi': 0x1,
                        'shrine.redbag': 0x1
                    }, 'warmup': 0xea60, 'delay': 0xea60, 'max': 0x1
                }]
            };
        }, 7157: m => {
            m['exports'] = {
                'key': 'chapter4.sanAnthony1',
                'name': '四骑士圣殿',
                'hint': '小湖边的镇子，到处都是鱼人。',
                'isDungeon': !0x0,
                'outside': 'chapter4.sanAnthony',
                'requirement': {'stories': ['chapter3-7']},
                'phases': [{
                    'description': '抵挡迫击炮的齐射。',
                    'monsters': [{
                        'type': 'chapter4.humans.mortar',
                        'max': 0x1,
                        'warmup': 0x3e8,
                        'delay': 0x3e8,
                        'total': 0x2
                    }, {
                        'type': 'chapter4.humans.mortar',
                        'max': 0x1,
                        'warmup': 0x3e8,
                        'delay': 0x3e8,
                        'total': 0x2
                    }, {
                        'type': 'chapter4.humans.mortar',
                        'max': 0x1,
                        'warmup': 0x3e8,
                        'delay': 0x3e8,
                        'total': 0x2
                    }, {
                        'type': 'chapter4.humans.mortar',
                        'max': 0x1,
                        'warmup': 0x3e8,
                        'delay': 0x3e8,
                        'total': 0x2
                    }, {
                        'type': 'chapter4.humans.mortar',
                        'max': 0x1,
                        'warmup': 0x3e8,
                        'delay': 0x3e8,
                        'total': 0x2
                    }, {'type': 'chapter4.humans.mortar', 'max': 0x1, 'warmup': 0x3e8, 'delay': 0x3e8, 'total': 0x2}]
                }, {
                    'description': '击败英勇骑士达尔。',
                    'monsters': [{
                        'type': 'chapter4.humans.knights.dare',
                        'max': 0x1,
                        'warmup': 0x1f40,
                        'delay': 0x1f40,
                        'total': 0x1
                    }]
                }, {
                    'description': '击败光明骑士莱特和鲜血骑士布莱德。',
                    'monsters': [{
                        'type': 'chapter4.humans.knights.blood',
                        'max': 0x1,
                        'warmup': 0x1f40,
                        'delay': 0x1f40,
                        'total': 0x1
                    }, {
                        'type': 'chapter4.humans.knights.light',
                        'max': 0x1,
                        'warmup': 0x1f40,
                        'delay': 0x1f40,
                        'total': 0x1
                    }]
                }, {
                    'description': '击败制裁骑士山新和全能骑士雷格。没错，四骑士组合有五个人。',
                    'monsters': [{
                        'type': 'chapter4.humans.knights.sanction',
                        'max': 0x1,
                        'warmup': 0x1f40,
                        'delay': 0x1f40,
                        'total': 0x1
                    }, {
                        'type': 'chapter4.humans.knights.rage',
                        'max': 0x1,
                        'warmup': 0x1f40,
                        'delay': 0x1f40,
                        'total': 0x1
                    }]
                }],
                'monsters': [{
                    'type': 'chapter4.humans.soldier',
                    'warmup': 0x3e8,
                    'delay': 0x4e20,
                    'max': 0x3,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'chapter4.humans.musketeer',
                    'warmup': 0x3e8,
                    'delay': 0x7530,
                    'max': 0x3,
                    'quality': [0x19, 0x5, 0x1]
                }],
                'coolDown': 0x5265c00,
                'maxCoolDownStack': 0x1,
                'coolDownOffset': -0xdbba00,
                'resetPrice': 0xa0,
                'level': 0xa0,
                'exp': 0x3d0900,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x124f8, 0x249f0]}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'weapon'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'weapon'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'plastron'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'gaiter'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'ornament'
                }]
            };
        }, 204: m => {
            m['exports'] = {
                'key': 'chapter4.sanAnthony2',
                'name': '未知暗殿',
                'hint': '小湖边的镇子，到处都是鱼人。',
                'isDungeon': !0x0,
                'outside': 'chapter4.sanAnthony',
                'requirement': {'stories': ['chapter3-7']},
                'phases': [{
                    'description': '触动把手，打开秘密的通道。',
                    'monsters': [{'type': 'chapter4.humans.trigger.1', 'max': 0x1, 'delay': 0x1388, 'total': 0x1}]
                }, {
                    'description': '进入下水道，揭开未知暗殿的奥秘。',
                    'monsters': [{'type': 'chapter4.humans.trigger.2', 'max': 0x1, 'delay': 0x1388, 'total': 0x1}]
                }, {
                    'description': '通过陷阱阵。',
                    'monsters': [{
                        'type': 'chapter4.humans.trigger.3.1',
                        'max': 0x1,
                        'randomPosition': !0x0,
                        'delay': 0xa,
                        'total': 0x1
                    }, {
                        'type': 'chapter4.humans.trigger.3.2',
                        'max': 0x3,
                        'randomPosition': !0x0,
                        'delay': 0xa,
                        'total': 0x3
                    }, {
                        'type': 'chapter4.humans.trigger.3.3',
                        'max': 0x3,
                        'randomPosition': !0x0,
                        'delay': 0xa,
                        'total': 0x3
                    }, {
                        'type': 'chapter4.humans.trigger.3.4',
                        'max': 0x3,
                        'randomPosition': !0x0,
                        'delay': 0xa,
                        'total': 0x3
                    }]
                }, {
                    'description': '击败守门人菲尔斯男爵',
                    'monsters': [{'type': 'chapter4.humans.boss.fearas', 'max': 0x1, 'delay': 0xa, 'total': 0x1}]
                }, {
                    'description': '打开监狱的牢笼，释放强大的邪恶',
                    'monsters': [{
                        'type': 'chapter4.humans.trigger.6',
                        'max': 0x1,
                        'warmup': 0x3e8,
                        'delay': 0xa,
                        'total': 0x1
                    }]
                }, {
                    'description': '击败……哈？',
                    'monsters': [{
                        'type': 'chapter4.humans.trigger.7',
                        'max': 0x1,
                        'warmup': 0x7d0,
                        'delay': 0xa,
                        'total': 0x1
                    }]
                }, {
                    'description': '击败解除封印的上古邪恶。',
                    'monsters': [{'type': 'chapter4.humans.boss.evil', 'max': 0x1, 'delay': 0xa, 'total': 0x1}]
                }],
                'monsters': [],
                'coolDown': 0x5265c00,
                'maxCoolDownStack': 0x1,
                'coolDownOffset': -0xdbba00,
                'resetPrice': 0xaa,
                'level': 0xaa,
                'exp': 0x4c4b40,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x186a0, 0x249f0]}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'weapon'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'weapon'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'plastron'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'gaiter'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'ornament'
                }]
            };
        }, 8488: m => {
            m['exports'] = {
                'key': 'chapter4.westRolan',
                'name': '东罗兰帝国',
                'requirement': {'stories': ['chapter3-7']},
                'monsters': [{
                    'type': 'chapter4.orcs.warrior',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x5,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'type': 'chapter4.orcs.hunter',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x2,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'types': {
                        'shrine.heal': 0x1,
                        'shrine.energy': 0x1,
                        'shrine.power': 0x1,
                        'shrine.experience': 0x1,
                        'shrine.equip': 0x1,
                        'shrine.wuxingshi': 0x1,
                        'shrine.redbag': 0x1
                    }, 'warmup': 0xea60, 'delay': 0xea60, 'max': 0x1
                }]
            };
        }, 4505: m => {
            m['exports'] = {
                'key': 'chapter4.westRolan1',
                'name': '卡尔要塞',
                'hint': '小湖边的镇子，到处都是鱼人。',
                'isDungeon': !0x0,
                'outside': 'chapter4.westRolan',
                'requirement': {'stories': ['chapter3-7']},
                'phases': [{
                    'description': '击败汹涌的狼群。',
                    'monsters': [{
                        'type': 'chapter3.orcs.wolf',
                        'max': 0x2,
                        'delay': 0x3e8,
                        'total': 0x4
                    }, {
                        'type': 'chapter3.orcs.wolf',
                        'max': 0x2,
                        'delay': 0x3e8,
                        'total': 0x4
                    }, {
                        'type': 'chapter3.orcs.wolf',
                        'max': 0x2,
                        'delay': 0x3e8,
                        'total': 0x4
                    }, {'type': 'chapter3.orcs.wolf', 'max': 0x2, 'delay': 0x3e8, 'total': 0x4}]
                }, {
                    'description': '击败兽人酋长萨布罗·霜狼。',
                    'monsters': [{'type': 'chapter3.orcs.shaman', 'max': 0x1, 'delay': 0x1f40, 'total': 0x1}]
                }],
                'monsters': [{
                    'type': 'chapter4.orcs.warrior',
                    'warmup': 0x3e8,
                    'delay': 0x3e8,
                    'max': 0x3,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'chapter4.orcs.warrior',
                    'warmup': 0x3e8,
                    'delay': 0x3e8,
                    'max': 0x3,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'chapter4.orcs.hunter',
                    'warmup': 0x3e8,
                    'delay': 0x3e8,
                    'max': 0x2,
                    'quality': [0x19, 0x5, 0x1]
                }],
                'coolDown': 0x5265c00,
                'maxCoolDownStack': 0x1,
                'coolDownOffset': -0xdbba00,
                'resetPrice': 0x8c,
                'level': 0x8c,
                'exp': 0x16e360,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0xc350, 0x186a0]}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'weapon'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'weapon'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'plastron'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'gaiter'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'ornament'
                }]
            };
        }, 7872: m => {
            m['exports'] = {
                'key': 'chapter4.westRolan2',
                'name': '司璐登监狱',
                'hint': '小湖边的镇子，到处都是鱼人。',
                'isDungeon': !0x0,
                'outside': 'chapter4.westRolan',
                'requirement': {'stories': ['chapter3-7']},
                'phases': [{
                    'description': '击败流氓和小偷的偷袭。',
                    'monsters': [{
                        'type': 'chapter4.humans.thief',
                        'max': 0x2,
                        'delay': 0x3e8,
                        'total': 0x4
                    }, {
                        'type': 'chapter4.humans.thief',
                        'max': 0x2,
                        'warmup': 0x3e8,
                        'delay': 0x3e8,
                        'total': 0x4
                    }, {
                        'type': 'chapter4.humans.rogue',
                        'max': 0x2,
                        'warmup': 0x3e8,
                        'delay': 0x3e8,
                        'total': 0x4
                    }, {'type': 'chapter4.humans.rogue', 'max': 0x2, 'warmup': 0x3e8, 'delay': 0x3e8, 'total': 0x4}]
                }, {
                    'description': '击败手黑党的领袖罗兰·赛克。',
                    'monsters': [{'type': 'chapter4.humans.seck', 'max': 0x1, 'delay': 0x1f40, 'total': 0x1}]
                }, {
                    'description': '再次击败手黑党的领袖罗兰·赛克。这货绑了灵魂石。',
                    'monsters': [{'type': 'chapter4.humans.seck1', 'max': 0x1, 'delay': 0x1f40, 'total': 0x1}]
                }],
                'monsters': [],
                'coolDown': 0x5265c00,
                'maxCoolDownStack': 0x1,
                'coolDownOffset': -0xdbba00,
                'resetPrice': 0x96,
                'level': 0x96,
                'exp': 0x2dc6c0,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x124f8, 0x186a0]}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'weapon'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'weapon'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'plastron'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'gaiter'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'ornament'
                }]
            };
        }, 4933: m => {
            m['exports'] = {
                'key': 'chapter5.byer1',
                'name': '西拜尔港',
                'requirement': {'stories': ['chapter3-7'], 'atLeastMaxLevel': 0x46},
                'monsters': [{
                    'type': 'chapter5.undead.ghost',
                    'warmup': 0x3e8,
                    'delay': 0x3e8,
                    'max': 0x5,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'type': 'chapter5.undead.zombie',
                    'warmup': 0x3e8,
                    'delay': 0x3e8,
                    'max': 0x2,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'types': {
                        'shrine.heal': 0x1,
                        'shrine.energy': 0x1,
                        'shrine.power': 0x1,
                        'shrine.experience': 0x1,
                        'shrine.equip': 0x1,
                        'shrine.wuxingshi': 0x1,
                        'shrine.redbag': 0x1
                    }, 'warmup': 0xea60, 'delay': 0xea60, 'max': 0x1
                }]
            };
        }, 7468: m => {
            m['exports'] = {
                'key': 'chapter5.byer2',
                'name': '幽暗的货仓',
                'hint': '一个亡灵法师在这里布置了一个招魂阵法。',
                'isDungeon': !0x0,
                'outside': 'chapter5.byer1',
                'requirement': {'stories': ['chapter3-7'], 'atLeastMaxLevel': 0x46},
                'phases': [{
                    'description': '击败亡灵法师，阻止他的邪恶魔法。',
                    'monsters': [{'type': 'chapter5.necromancer', 'warmup': 0x2710, 'total': 0x1}]
                }],
                'monsters': [{
                    'type': 'chapter5.undead.ghost',
                    'warmup': 0x3e8,
                    'delay': 0x1f40,
                    'max': 0x3,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'chapter5.undead.zombie',
                    'warmup': 0x3e8,
                    'delay': 0x1f40,
                    'max': 0x3,
                    'quality': [0x19, 0x5, 0x1]
                }],
                'coolDown': 0x5265c00,
                'maxCoolDownStack': 0x1,
                'coolDownOffset': -0xdbba00,
                'resetPrice': 0xb4,
                'level': 0xb4,
                'exp': 0x5b8d80,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0xc350, 0x186a0]}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'weapon'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'weapon'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'plastron'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'gaiter'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'ornament'
                }]
            };
        }, 6339: m => {
            m['exports'] = {
                'key': 'chapter5.byer3',
                'name': '梦境之森',
                'requirement': {'stories': ['chapter3-7'], 'atLeastMaxLevel': 0x46},
                'monsters': [{
                    'type': 'chapter5.woodElf.crazy',
                    'warmup': 0x3e8,
                    'delay': 0x3e8,
                    'max': 0x5,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'type': 'chapter5.woodElf.crazy',
                    'warmup': 0x3e8,
                    'delay': 0x3e8,
                    'max': 0x5,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'type': 'chapter5.woodElf.sad',
                    'warmup': 0x3e8,
                    'delay': 0x3e8,
                    'max': 0x2,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'types': {
                        'shrine.heal': 0x1,
                        'shrine.energy': 0x1,
                        'shrine.power': 0x1,
                        'shrine.experience': 0x1,
                        'shrine.equip': 0x1,
                        'shrine.wuxingshi': 0x1,
                        'shrine.redbag': 0x1
                    }, 'warmup': 0xea60, 'delay': 0xea60, 'max': 0x1
                }]
            };
        }, 8826: m => {
            m['exports'] = {
                'key': 'chapter5.byer4',
                'name': '睡美人湖',
                'hint': '一个亡灵法师在这里布置了一个招魂阵法。',
                'isDungeon': !0x0,
                'outside': 'chapter5.byer1',
                'requirement': {'stories': ['chapter3-7'], 'atLeastMaxLevel': 0x46},
                'phases': [{
                    'description': '击败并安抚节制的萨曼莎。',
                    'monsters': [{'type': 'chapter5.woodElf.shamansa', 'warmup': 0x2710, 'total': 0x1}]
                }, {
                    'description': '击败并安抚勤勉的罗莎。',
                    'monsters': [{'type': 'chapter5.woodElf.rosa', 'warmup': 0x2710, 'total': 0x1}]
                }],
                'monsters': [{
                    'type': 'chapter5.woodElf.crazy',
                    'warmup': 0x3e8,
                    'delay': 0x3e8,
                    'max': 0x3,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'type': 'chapter5.woodElf.crazy',
                    'warmup': 0x3e8,
                    'delay': 0x3e8,
                    'max': 0x3,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'type': 'chapter5.woodElf.sad',
                    'warmup': 0x3e8,
                    'delay': 0x3e8,
                    'max': 0x2,
                    'quality': [0x31, 0x7, 0x1]
                }],
                'coolDown': 0x5265c00,
                'maxCoolDownStack': 0x1,
                'coolDownOffset': -0xdbba00,
                'resetPrice': 0xbe,
                'level': 0xbe,
                'exp': 0x6acfc0,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x124f8, 0x1d4c0]}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'weapon'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'weapon'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'plastron'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'gaiter'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'ornament'
                }]
            };
        }, 9081: m => {
            m['exports'] = {
                'key': 'chapter5.byer5',
                'name': '噩梦边境',
                'requirement': {'stories': ['chapter3-7'], 'atLeastMaxLevel': 0x46},
                'monsters': [{
                    'types': {
                        'chapter5.daughter.monster1': 0x1,
                        'chapter5.daughter.monster2': 0x1,
                        'chapter5.daughter.monster3': 0x1,
                        'chapter5.daughter.monster4': 0x1,
                        'chapter5.daughter.monster5': 0x1,
                        'chapter5.daughter.monster6': 0x1
                    }, 'warmup': 0x3e8, 'delay': 0x3e8, 'max': 0x5, 'quality': [0x31, 0x7, 0x1]
                }, {
                    'types': {
                        'chapter5.daughter.monster1': 0x1,
                        'chapter5.daughter.monster2': 0x1,
                        'chapter5.daughter.monster3': 0x1,
                        'chapter5.daughter.monster4': 0x1,
                        'chapter5.daughter.monster5': 0x1,
                        'chapter5.daughter.monster6': 0x1
                    }, 'warmup': 0x3e8, 'delay': 0x3e8, 'max': 0x5, 'quality': [0x31, 0x7, 0x1]
                }, {
                    'types': {
                        'shrine.heal': 0x1,
                        'shrine.energy': 0x1,
                        'shrine.power': 0x1,
                        'shrine.experience': 0x1,
                        'shrine.equip': 0x1,
                        'shrine.wuxingshi': 0x1,
                        'shrine.redbag': 0x1
                    }, 'warmup': 0xea60, 'delay': 0xea60, 'max': 0x1
                }]
            };
        }, 4784: m => {
            m['exports'] = {
                'key': 'chapter5.byer6',
                'name': '噩梦巨人国度',
                'hint': '一个亡灵法师在这里布置了一个招魂阵法。',
                'isDungeon': !0x0,
                'outside': 'chapter5.byer1',
                'requirement': {'stories': ['chapter3-7'], 'atLeastMaxLevel': 0x46},
                'phases': [{
                    'description': '击败拦路的噩梦之灵，找到好心的巨人',
                    'monsters': [{
                        'types': {
                            'chapter5.daughter.monster1': 0x1,
                            'chapter5.daughter.monster2': 0x1,
                            'chapter5.daughter.monster3': 0x1,
                            'chapter5.daughter.monster4': 0x1,
                            'chapter5.daughter.monster5': 0x1,
                            'chapter5.daughter.monster6': 0x1
                        }, 'warmup': 0x3e8, 'delay': 0x3e8, 'max': 0x5, 'total': 0xa
                    }]
                }, {
                    'description': '击败吃小孩的巨人',
                    'monsters': [{
                        'type': 'chapter5.daughter.badGiant',
                        'warmup': 0x3e8,
                        'total': 0x1
                    }, {
                        'type': 'chapter5.woodElf.crazy',
                        'warmup': 0x3e8,
                        'delay': 0x3e8,
                        'max': 0x3,
                        'quality': [0x31, 0x7, 0x1]
                    }, {
                        'type': 'chapter5.woodElf.crazy',
                        'warmup': 0x3e8,
                        'delay': 0x3e8,
                        'max': 0x3,
                        'quality': [0x31, 0x7, 0x1]
                    }, {
                        'type': 'chapter5.woodElf.sad',
                        'warmup': 0x3e8,
                        'delay': 0x3e8,
                        'max': 0x2,
                        'quality': [0x31, 0x7, 0x1]
                    }]
                }, {
                    'description': '唤醒不安的艾米拉',
                    'monsters': [{'type': 'chapter5.daughter.amira', 'warmup': 0x2710, 'total': 0x1}]
                }],
                'monsters': [],
                'resetPrice': 0xc8,
                'level': 0xc8,
                'exp': 0x7a1200,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x17318, 0x249f0]}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'weapon'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'weapon'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'plastron'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'gaiter'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'ornament'
                }, {'type': 'ticket', 'rate': 0x1, 'dungeons': {'nightmare.1': 0x1}}]
            };
        }, 5652: (m, o, p) => {
            m['exports'] = [p(0x1345), p(0x1d2c), p(0x18c3), p(0x227a), p(0x2379), p(0x12b0)];
        }, 9520: m => {
            m['exports'] = {'key': 'home', 'name': '自宅', 'hint': '安全的避难所。休息够了就可以再度出发。'};
        }, 3663: (m, o, p) => {
            m['exports'] = [p(0xbaa), p(0xf7), p(0x2530), ...p(0x18b8), ...p(0xdfa), ...p(0x1e1b), ...p(0x1614), ...p(0x1d13)];
        }, 7759: m => {
            m['exports'] = {
                'key': 'town.cave',
                'name': '洞窟一层',
                'hint': '边境之村通往邻村的一条小路旁的洞窟，里面阴森且潮湿。',
                'requirement': {'stories': ['eyer-stories-4']},
                'monsters': [{
                    'type': 'slime.minimal',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x2,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'type': 'slime.minimal',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x2,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'type': 'slime.giant.enemy',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x2,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'types': {
                        'shrine.heal': 0x1,
                        'shrine.energy': 0x1,
                        'shrine.power': 0x1,
                        'shrine.experience': 0x1,
                        'shrine.equip': 0x1,
                        'shrine.wuxingshi': 0x1,
                        'shrine.redbag': 0x1
                    }, 'warmup': 0xea60, 'delay': 0xea60, 'max': 0x1
                }]
            };
        }, 1433: m => {
            m['exports'] = {
                'key': 'town.cave2',
                'name': '洞窟深处',
                'hint': '洞穴的底层，让人隐隐赶到不安。',
                'isDungeon': !0x0,
                'outside': 'town.cave',
                'requirement': {'stories': ['eyer-stories-4']},
                'phases': [{
                    'description': '击败母体史莱姆，拯救亚莲娜。',
                    'monsters': [{'type': 'slime.queen', 'total': 0x1}]
                }],
                'monsters': [{
                    'type': 'slime.minimal',
                    'warmup': 0x3e8,
                    'delay': 0x2710,
                    'max': 0x1
                }, {
                    'type': 'slime.minimal',
                    'warmup': 0x1770,
                    'delay': 0x2710,
                    'max': 0x1
                }, {'type': 'slime.giant.enemy', 'warmup': 0x2710, 'delay': 0x7530, 'max': 0x1}],
                'coolDown': 0x5265c00,
                'maxCoolDownStack': 0x1,
                'coolDownOffset': -0xdbba00,
                'resetPrice': 0x14,
                'level': 0x14,
                'exp': 0x1388,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x3e8, 0x7d0]}, {
                    'type': 'specialEquip',
                    'rate': 0.05,
                    'items': ['lg_1', 'lg_2', 'lg_3', 'lg_4']
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'weapon'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'weapon'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'plastron'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'gaiter'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'ornament'}]
            };
        }, 6328: (m, o, p) => {
            m['exports'] = [p(0x2371), p(0x1e4f), p(0x599), p(0x24fd), p(0x253a), p(0x2377), p(0x1dca), p(0x199), p(0x2283), p(0x89), p(0x1230)];
        }, 9079: m => {
            m['exports'] = {
                'key': 'town.mine.1',
                'name': '矿洞入口',
                'hint': '一个看似废弃已久的矿洞，被附近的狗头人霸占了。',
                'requirement': {'stories': ['eyer-stories-10']},
                'monsters': [{
                    'type': 'kobold.miner',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x4,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'type': 'kobold.shaman',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x1,
                    'quality': [0x64, 0xa]
                }, {
                    'types': {
                        'shrine.heal': 0x1,
                        'shrine.energy': 0x1,
                        'shrine.power': 0x1,
                        'shrine.experience': 0x1,
                        'shrine.equip': 0x1,
                        'shrine.wuxingshi': 0x1,
                        'shrine.redbag': 0x1
                    }, 'warmup': 0xea60, 'delay': 0xea60, 'max': 0x1
                }]
            };
        }, 7626: m => {
            m['exports'] = {
                'key': 'town.mine.2',
                'name': '矿洞深处',
                'hint': '金牙居住之处。',
                'isDungeon': !0x0,
                'outside': 'town.mine.1',
                'requirement': {'stories': ['eyer-grow-2']},
                'phases': [{
                    'description': '击败金牙，探听村长的情报。',
                    'monsters': [{'type': 'kobold.goldteeth', 'total': 0x1}]
                }],
                'monsters': [{
                    'type': 'kobold.miner',
                    'warmup': 0x3e8,
                    'delay': 0x2710,
                    'max': 0x1,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'kobold.miner',
                    'warmup': 0x3e8,
                    'delay': 0x2710,
                    'max': 0x1,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'kobold.shaman',
                    'warmup': 0x2710,
                    'delay': 0x7530,
                    'max': 0x1,
                    'quality': [0x19, 0x5, 0x1]
                }],
                'coolDown': 0x5265c00,
                'maxCoolDownStack': 0x1,
                'coolDownOffset': -0xdbba00,
                'resetPrice': 0x28,
                'level': 0x28,
                'exp': 0x13880,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0xfa0, 0x1b58]}, {
                    'type': 'specialEquip',
                    'rate': 0.1,
                    'items': ['ornament-3']
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0x12c
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0x1f4}]
            };
        }, 409: m => {
            m['exports'] = {
                'key': 'town.mine.3',
                'name': '神秘祭坛',
                'hint': '矿洞深处的祭坛，通往下位面的传送门。',
                'isDungeon': !0x0,
                'outside': 'town.mine.1',
                'requirement': {'stories': ['eyer-grow-4']},
                'phases': [{
                    'description': '击败卡卡列夫的幻象，找回村长',
                    'monsters': [{'type': 'kakarif.illusion', 'total': 0x1}]
                }],
                'monsters': [{
                    'type': 'kakarif.generations',
                    'warmup': 0x3e8,
                    'delay': 0x2710,
                    'max': 0x1,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'kakarif.generations',
                    'warmup': 0x3e8,
                    'delay': 0x2710,
                    'max': 0x1,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'kakarif.servants',
                    'warmup': 0x2710,
                    'delay': 0x7530,
                    'max': 0x1,
                    'quality': [0x19, 0x5, 0x1]
                }],
                'coolDown': 0x5265c00,
                'maxCoolDownStack': 0x1,
                'coolDownOffset': -0xdbba00,
                'resetPrice': 0x32,
                'level': 0x32,
                'exp': 0x1d4c0,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x1388, 0x2710]}, {
                    'type': 'specialEquip',
                    'rate': 0.1,
                    'items': ['Machete-1']
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'weapon'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'weapon'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'plastron'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'gaiter'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'ornament'}]
            };
        }, 137: m => {
            m['exports'] = {
                'key': 'town.neighbourTown.2',
                'name': '幽暗的地窖',
                'hint': '一个亡灵法师在这里布置了一个招魂阵法。',
                'isDungeon': !0x0,
                'outside': 'town.neighbourTown',
                'requirement': {'stories': ['aleanor-stories-4']},
                'phases': [{
                    'description': '击败亡灵法师，阻止他的邪恶魔法。',
                    'monsters': [{'type': 'zombie.necromancer', 'total': 0x1}]
                }],
                'monsters': [{
                    'type': 'zombies.farmer',
                    'warmup': 0x3e8,
                    'delay': 0x2710,
                    'max': 0x2,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'zombies.farmer',
                    'warmup': 0x3e8,
                    'delay': 0x2710,
                    'max': 0x2,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'zombies.hammersmith',
                    'warmup': 0x2710,
                    'delay': 0x7530,
                    'max': 0x1,
                    'quality': [0x19, 0x5, 0x1]
                }],
                'coolDown': 0x5265c00,
                'maxCoolDownStack': 0x1,
                'coolDownOffset': -0xdbba00,
                'resetPrice': 0x3c,
                'level': 0x3c,
                'exp': 0x13880,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0xfa0, 0x1b58]}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'weapon'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'weapon'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'plastron'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'gaiter'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'ornament'
                }]
            };
        }, 4656: m => {
            m['exports'] = {
                'key': 'town.neighbourTown.3',
                'name': '邻村村口',
                'hint': '闻讯赶来的圣殿骑士团保卫了整个村子。',
                'isDungeon': !0x0,
                'outside': 'town.neighbourTown',
                'requirement': {'stories': ['aleanor-stories-5']},
                'phases': [{
                    'description': '阻止骑士团对村民的屠杀。',
                    'monsters': [{'type': 'knight.leader', 'total': 0x1}]
                }],
                'monsters': [{
                    'type': 'knight.normal',
                    'warmup': 0x3e8,
                    'delay': 0x2710,
                    'max': 0x1,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'knight.normal',
                    'warmup': 0x3e8,
                    'delay': 0x2710,
                    'max': 0x1,
                    'quality': [0x19, 0x5, 0x1]
                }, {
                    'type': 'knight.prayer',
                    'warmup': 0x2710,
                    'delay': 0x7530,
                    'max': 0x1,
                    'quality': [0x19, 0x5, 0x1]
                }],
                'coolDown': 0x5265c00,
                'maxCoolDownStack': 0x1,
                'coolDownOffset': -0xdbba00,
                'resetPrice': 0x46,
                'level': 0x46,
                'exp': 0x2bf20,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x1388, 0x2710]}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'weapon'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'weapon'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'plastron'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'gaiter'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'ornament'
                }]
            };
        }, 8835: m => {
            m['exports'] = {
                'key': 'town.neighbourTown',
                'name': '邻村',
                'hint': '隔壁的村子。当亚莲娜赶到时，所有的村民都发狂了。',
                'requirement': {'stories': ['aleanor-stories-2']},
                'monsters': [{
                    'type': 'zombies.farmer',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x4,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'type': 'zombies.hammersmith',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x1,
                    'quality': [0x64, 0xa]
                }, {
                    'types': {
                        'shrine.heal': 0x1,
                        'shrine.energy': 0x1,
                        'shrine.power': 0x1,
                        'shrine.experience': 0x1,
                        'shrine.equip': 0x1,
                        'shrine.wuxingshi': 0x1,
                        'shrine.redbag': 0x1
                    }, 'warmup': 0xea60, 'delay': 0xea60, 'max': 0x1
                }]
            };
        }, 9073: m => {
            m['exports'] = {
                'key': 'town.street',
                'name': '村间小路',
                'hint': '边境之村通往邻村的一条小路。',
                'requirement': {'stories': ['eyer-stories-1']},
                'monsters': [{
                    'type': 'slime.minimal',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x2,
                    'quality': [0x51, 0x9, 0x1]
                }, {
                    'type': 'slime.giant',
                    'warmup': 0x1d4c0,
                    'delay': 0x1d4c0,
                    'max': 0x1,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'types': {
                        'shrine.heal': 0x1,
                        'shrine.energy': 0x1,
                        'shrine.power': 0x1,
                        'shrine.experience': 0x1,
                        'shrine.equip': 0x1,
                        'shrine.wuxingshi': 0x1,
                        'shrine.redbag': 0x1
                    }, 'warmup': 0xea60, 'delay': 0xea60, 'max': 0x1
                }]
            };
        }, 9469: m => {
            m['exports'] = {
                'key': 'town.valley',
                'name': '山谷',
                'hint': '靠近邻村的山谷，有各种各样的野兽。',
                'requirement': {'stories': ['eyer-stories-6']},
                'monsters': [{
                    'type': 'wolf.minimal',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x4,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'type': 'wolf.giant',
                    'warmup': 0x3e8,
                    'delay': 0xbb8,
                    'max': 0x1,
                    'quality': [0x64, 0xa]
                }, {
                    'types': {
                        'shrine.heal': 0x1,
                        'shrine.energy': 0x1,
                        'shrine.power': 0x1,
                        'shrine.experience': 0x1,
                        'shrine.equip': 0x1,
                        'shrine.wuxingshi': 0x1,
                        'shrine.redbag': 0x1
                    }, 'warmup': 0xea60, 'delay': 0xea60, 'max': 0x1
                }]
            };
        }, 9530: m => {
            m['exports'] = {
                'key': 'town.woods',
                'name': '迷雾森林',
                'hint': '山谷底部的森林，笼罩在雾气之中。',
                'isDungeon': !0x0,
                'outside': 'town.valley',
                'requirement': {'stories': ['eyer-stories-8']},
                'phases': [{'description': '击败狼王。', 'monsters': [{'type': 'wolf.king', 'total': 0x1}]}],
                'monsters': [{
                    'type': 'wolf.minimal',
                    'warmup': 0x3e8,
                    'delay': 0x7530,
                    'max': 0x1,
                    'quality': [0x31, 0x7, 0x1]
                }, {
                    'type': 'wolf.minimal',
                    'warmup': 0x1770,
                    'delay': 0x7530,
                    'max': 0x1,
                    'quality': [0x31, 0x7, 0x1]
                }, {'type': 'wolf.giant', 'warmup': 0x2710, 'delay': 0x7530, 'max': 0x1, 'quality': [0x19, 0x5, 0x1]}],
                'coolDown': 0x5265c00,
                'maxCoolDownStack': 0x1,
                'coolDownOffset': -0xdbba00,
                'resetPrice': 0x1e,
                'level': 0x1e,
                'exp': 0x4e20,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x19, 0x1388]}, {
                    'type': 'specialEquip',
                    'rate': 0.1,
                    'items': ['stickSword-1']
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'weapon'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'weapon'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'plastron'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0xc8,
                    'position': 'gaiter'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8, 'position': 'ornament'}]
            };
        }, 2986: m => {
            m['exports'] = {
                'key': 'training_ground1',
                'name': '1号训练场',
                'hint': '这里有你的挚爱——训练木桩。',
                'monsters': [{'type': 'muzhuang1', 'warmup': 0x3e8, 'delay': 0x3e8, 'max': 0x3}]
            };
        }, 247: m => {
            m['exports'] = {
                'key': 'training_ground2',
                'name': '2号训练场',
                'hint': '这里有你的挚爱——凶狠的训练木桩。',
                'monsters': [{'type': 'muzhuang2', 'warmup': 0x2710, 'delay': 0x7530, 'max': 0x1}]
            };
        }, 206: m => {
            m['exports'] = [{
                'key': 'zhengqiwan',
                'name': '幸运药剂',
                'description': o => '运气增加' + 0x5 * o + '点',
                'Max_level': 0x270f,
                'hooks': {'gf': (o, p) => p + 0.05 * o, 'mf': (o, p) => p + 0.05 * o}
            }, {
                'key': 'nayuandan',
                'name': '知识药剂',
                'description': o => '经验获得增加' + 0x5 * o + '%',
                'Max_level': 0x270f,
                'hooks': {'expInc': (o, p) => p + 0.05 * o}
            }, {
                'key': '\x20xiaoyaosan',
                'name': '训练药剂',
                'description': o => '熟练度获得增加' + 0x5 * o + '%',
                'Max_level': 0x270f,
                'hooks': {'skillExpInc': (o, p) => p + 0.05 * o}
            }, {
                'key': 'fengshenlu',
                'name': '急速药剂',
                'description': o => '急速+' + o + '%',
                'Max_level': 0x64,
                'hooks': {'speedRateAdd': (o, p) => p + 0.01 * Math['min'](o, 0x64)}
            }, {
                'key': 'rdmdc',
                'name': '恢复药剂',
                'description': o => '每秒恢复' + 0.2 * o + '%的生命值与法力值',
                'Max_level': 0x19,
                'hooks': {
                    'hpRecovery'(o, p) {
                        return p + Math['min'](o, 0x19) * this['maxHp'] * 0.002;
                    }, 'mpRecovery'(o, p) {
                        return p + Math['min'](o, 0x19) * this['maxMp'] * 0.002;
                    }
                }
            }];
        }, 8230: (m, o, p) => {
            const {define: q, extend: s} = p(0x19ed);
            q('buffs', 'bossState', {
                'hidden': !0x0, 'hooks': {
                    'bossState'(u) {
                        return this['arg'];
                    }
                }
            }), q('skills', 'bossState', {
                'name': '转换阶段',
                'group': 'boss',
                'coolDown': 0x1,
                'maxExp': u => 0x0,
                'canUse': (u, v, w) => !(v['runAttrHooks'](0x64, 'bossState') <= w) && v['hp'] / v['maxHp'] * 0x64 <= w,
                'effect'(u, v, w) {
                    v['addBuff']('bossState', null, w, 'bossState');
                }
            });
        }, 3459: (m, o, p) => {
            p(0x2026);
            const {define: q, extend: s} = p(0x19ed);
            q('skills', 'nightmare.fire.kakarif.1', {
                'name': '地震',
                'coolDown': 0x3a98,
                'castTime': 0x3e8,
                'notBreakable': !0x0,
                'canUse': (u, v) => !0x0,
                'effect'(u, v, w) {
                    for (const x of u['units']['filter'](y => v['willAttack'](y))) u['sendDamage']('melee', v, x, this, v['atk'], !0x0);
                }
            }), q('skills', 'nightmare.fire.kakarif.2', {
                'name': '火狱之楔',
                'coolDown': 0x7530,
                'castTime': 0x3e8,
                'notBreakable': !0x0,
                'canUse': (u, v) => !(v['runAttrHooks'](0x64, 'bossState') > 0x4b),
                'effect'(u, v, w) {
                    let x = v['atk'];
                    for (const y of u['units']['filter'](z => 'nightmare.fire.minimal' === z['type'])) y['kill'](), x += v['atk'];
                    for (let z = 0x0; z < 0x8; z++) u['addEnemy']('nightmare.fire.minimal', null, 0x0, v);
                    for (const A of u['units']['filter'](B => v['willAttack'](B))) u['sendDamage']('fire', v, A, this, x / 0x2, !0x0);
                }
            }), q('buffs', 'nightmare.fire.kakarif.3', {
                'name': '烈焰之子', 'effectInterval': 0x1f4, 'effect'(u) {
                    u['addEnemy']('nightmare.fire.minimal1', null, 0x0, this['unit']);
                }
            }), q('skills', 'nightmare.fire.kakarif.3', {
                'name': '烈焰之子',
                'coolDown': 0x7530,
                'notBreakable': !0x0,
                'canUse': (u, v) => !(v['runAttrHooks'](0x64, 'bossState') > 0x32),
                'effect'(u, v, w) {
                    v['startRead']('nightmare.fire.kakarif.3', 0x2710, null, this);
                }
            }), q('buffs', 'nightmare.fire.kakarif.4', {
                'name': '元素怒火', 'effectInterval': 0x3e8, 'effect'(u) {
                    u['sendDamage']('fire', null, this['unit'], null, this['arg'], !0x1);
                }
            }), q('skills', 'nightmare.fire.kakarif.4', {
                'name': '元素怒火',
                'coolDown': 0x7530,
                'castTime': 0x3e8,
                'notBreakable': !0x0,
                'canUse': (u, v) => !(v['runAttrHooks'](0x64, 'bossState') > 0x32 || !v['target']),
                'effect'(u, v, w) {
                    const {target: x} = v;
                    u['sendSkillUsage'](v, [x], this), x['addBuff']('nightmare.fire.kakarif.4', 0x2710, v['atk'], null);
                }
            }), q('skills', 'nightmare.fire.kakarif.5', {
                'name': '卡卡列夫之怒',
                'description': '增加300%攻击速度，持续6秒。',
                'targetType': 'target',
                'castTime': 0x7d0,
                'coolDown': 0x7530,
                'nonBreakable': !0x0,
                'canUse': (u, v) => !(v['runAttrHooks'](0x64, 'bossState') > 0x19 || !v['target']),
                'effect'(u, v, w) {
                    v['addBuff']('kakarif.mad', 0xbb8, null, 'kakarif.mad');
                }
            }), q('enemies', 'nightmare.fire.minimal', {
                'name': '火狱之楔',
                'description': '不断变形着的黏液，会吞食周围的其它史莱姆。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x7a120,
                'fireResist': 0x7d0,
                'coldResist': -0x3a98,
                'exp': 0x960,
                'atk': 0x5dc,
                'level': 0x12c,
                'atkSpeed': 0.6,
                'skills': []
            }), q('enemies', 'nightmare.fire.minimal1', {
                'name': '卡卡列夫之子',
                'description': '不断变形着的黏液，会吞食周围的其它史莱姆。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x7a120,
                'fireResist': 0x7d0,
                'coldResist': -0x3a98,
                'exp': 0x960,
                'atk': 0x5dc,
                'level': 0xfa,
                'atkSpeed': 0.6,
                'skills': [{'key': 'fireElement.fireball', 'level': 0x0}]
            }), q('enemies', 'nightmare.fire.kakarif', {
                'name': '烈焰领主卡卡列夫',
                'description': '不断变形着的黏液，会吞食周围的其它史莱姆。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x3d0900,
                'fireResist': 0x7d0,
                'coldResist': -0x3a98,
                'exp': 0x960,
                'atk': 0x1770,
                'level': 0xfa,
                'skills': [{'key': 'kakarif.melee', 'level': 0x0}, {
                    'key': 'nightmare.fire.kakarif.1',
                    'level': 0x0
                }, {'key': 'nightmare.fire.kakarif.2', 'level': 0x0}, {
                    'key': 'nightmare.fire.kakarif.4',
                    'level': 0x0
                }, {'key': 'nightmare.fire.kakarif.5', 'level': 0x0}, {
                    'key': 'enemy.upgrade',
                    'level': 0x0
                }, {'key': 'bossState', 'level': 0x4b}, {'key': 'bossState', 'level': 0x32}, {
                    'key': 'bossState',
                    'level': 0x14
                }],
                'stunResist': 0x9c40,
                'loots': [{'key': 'gold', 'count': [0x1, 0x64], 'rate': 0.25}]
            }), q('maps', 'nightmare.fire', {
                'name': '噩梦-卡卡列夫',
                'isDungeon': !0x0,
                'isEndless': !0x0,
                'outside': 'home',
                'group': 'nightmare.2',
                'requirement': {},
                'phases': [{
                    'description': '击败噩梦中再次出现的烈焰领主卡卡列夫。',
                    'monsters': [{
                        'type': 'nightmare.fire.minimal1',
                        'max': 0xf,
                        'warmup': 0x2ee0,
                        'delay': 0xbb8
                    }, {'type': 'nightmare.fire.kakarif', 'warmup': 0x2710, 'total': 0x1}]
                }],
                'stunResist': 0x2710,
                'resetPrice': 0x12c,
                'level': 0xfa,
                'exp': 0x989680,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x3d090, 0x7a120]}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0x1f4
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0x1f4}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0x1f4
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0x1f4}, {
                    'key': 'year2018.redbag',
                    'count': [0x1, 0x1],
                    'rate': 0.02
                }]
            });
        }, 5403: (m, o, p) => {
            p(0x151c), p(0xf97), p(0x1626), p(0x1f16), p(0xd83), p(0x102e);
        }, 4142: (m, o, p) => {
            p(0x2026);
            const {define: q, extend: s} = p(0x19ed);
            s('buffs', 'nightmare.knight.buff.1', 'manaShield', {
                'name': '盾墙',
                'hooks': {
                    'hasShield': () => function (v) {
                        return !0x0;
                    }
                }
            }), q('buffs', 'nightmare.knight.buff.2', {
                'name': '盾姿',
                'hooks': {'hasShield': () => !0x0, 'willDamaged': (v, w, x) => 'melee' === x ? v / 0x4 : v}
            }), q('buffs', 'nightmare.knight.buff.3', {
                'name': '盾反',
                'hooks': {'hasShield': () => !0x0, 'willDamaged': (v, w, x) => 'melee' !== x ? v / 0x4 : v}
            });
            const u = ['盾墙', '盾姿', '盾反'];
            for (let v = 0x1; v <= 0x3; v++) q('skills', 'nightmare.knight.' + v, {
                'name': u[v],
                'castTime': 0x12c,
                'coolDown': 0x7530,
                'antiBreak': 0.5,
                'canUse': (w, x) => !(x['runAttrHooks'](0x64, 'bossState') > 0x4b || x['runAttrHooks'](!0x1, 'hasShield')),
                'effect'(w, x, y) {
                    x['addBuff']('nightmare.knight.buff.' + v, 0x2710, x['hp'] / 0x8);
                }
            });
            s('skills', 'nightmare.knight.4', 'knight.melee1', {
                'canUse': w => function (x, y) {
                    return !(y['runAttrHooks'](0x64, 'bossState') > 0x32) && w(x, y);
                }
            }), s('skills', 'nightmare.knight.5', 'knight.deserve', {
                'canUse': w => function (x, y) {
                    return !(y['runAttrHooks'](0x64, 'bossState') > 0x32) && w(x, y);
                }
            }), s('skills', 'nightmare.knight.6', 'knight.heal', {
                'antiBreak': 0.5, 'canUse': w => function (x, y) {
                    return !(y['runAttrHooks'](0x64, 'bossState') > 0x32) && w(x, y);
                }, 'effect': () => function (w, x, y) {
                    w['sendSkillUsage'](x, [x], this), x['hp'] += x['maxHp'] / 0x10;
                }
            }), s('skills', 'nightmare.knight.7', 'knight.thumpHead.enemy', {
                'canUse': w => function (x, y) {
                    return !(y['runAttrHooks'](0x64, 'bossState') > 0x19) && w(x, y);
                }
            }), s('skills', 'nightmare.knight.8', 'shockWave', {
                'name': '神圣愤怒',
                'castTime': 0xbb8,
                'antiBreak': 0.5,
                'canUse': w => function (x, y) {
                    return !(y['runAttrHooks'](0x64, 'bossState') > 0x19) && w(x, y);
                }
            }), q('enemies', 'nightmare.knight.boss', {
                'name': '皇家骑士队长卡罗',
                'description': '不断变形着的黏液，会吞食周围的其它史莱姆。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x3d0900,
                'def': 0x7d0,
                'allResist': -0x1388,
                'darkResist': -0x1388,
                'lightResist': -0x9c4,
                'exp': 0x960,
                'atk': 0x1770,
                'level': 0xfa,
                'skills': [{'key': 'melee', 'level': 0x0}, {
                    'key': 'enemy.upgrade',
                    'level': 0x0
                }, {'key': 'nightmare.knight.1', 'level': 0x0}, {
                    'key': 'nightmare.knight.2',
                    'level': 0x0
                }, {'key': 'nightmare.knight.3', 'level': 0x0}, {
                    'key': 'nightmare.knight.4',
                    'level': 0x0
                }, {'key': 'nightmare.knight.5', 'level': 0x0}, {
                    'key': 'nightmare.knight.6',
                    'level': 0x0
                }, {'key': 'nightmare.knight.7', 'level': 0x0}, {
                    'key': 'nightmare.knight.8',
                    'level': 0x6
                }, {'key': 'bossState', 'level': 0x4b}, {'key': 'bossState', 'level': 0x32}, {
                    'key': 'bossState',
                    'level': 0x14
                }],
                'stunResist': 0x9c40,
                'loots': [{'key': 'gold', 'count': [0x1, 0x64], 'rate': 0.25}]
            }), q('maps', 'nightmare.knight', {
                'name': '噩梦-卡罗',
                'isDungeon': !0x0,
                'isEndless': !0x0,
                'outside': 'home',
                'group': 'nightmare.2',
                'requirement': {},
                'phases': [{
                    'description': '击败噩梦中再次出现的皇家骑士队长卡罗。',
                    'monsters': [{'type': 'nightmare.knight.boss', 'warmup': 0x2710, 'total': 0x1}]
                }],
                'stunResist': 0x2710,
                'resetPrice': 0x12c,
                'level': 0xfa,
                'exp': 0x989680,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x3d090, 0x7a120]}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0x1f4
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0x1f4}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0x1f4
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0x1f4}, {
                    'key': 'year2018.redbag',
                    'count': [0x1, 0x1],
                    'rate': 0.02
                }]
            });
        }, 5670: (m, o, p) => {
            p(0x2026);
            const {define: q, extend: s} = p(0x19ed);
            q('enemies', 'nightmare.kobold.candle', {
                'name': '安全牌蜡烛',
                'description': '一根蜡烛。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xf424,
                'exp': 0x0,
                'atk': 0xfa0,
                'level': 0x1,
                'atkSpeed': 0.4,
                'skills': [{'key': 'nightmare.kobold.bomb', 'level': 0x0}]
            }), s('skills', 'nightmare.kobold.bomb', 'bomb', {'notBreakable': !0x0}), s('skills', 'nightmare.kobold.bomb1', 'bomb', {
                'notBreakable': !0x0,
                'effect': u => function (v, w, x) {
                    v['units']['filter'](y => w['canAttack'](y))['forEach'](y => {
                        v['testDodge'](w, y, this) || (v['sendDamage']('fire', w, y, this, w['atk'], !0x1), y['stun'](0x5));
                    }), w['kill']();
                }
            }), q('enemies', 'nightmare.kobold.candle.1', {
                'name': '安全牌大蜡烛',
                'description': '一根蜡烛。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xf424,
                'exp': 0x0,
                'atk': 0xfa0,
                'level': 0x1,
                'atkSpeed': 0.4,
                'skills': [{'key': 'nightmare.kobold.bomb1', 'level': 0x0}]
            }), s('skills', 'nightmare.kobold.1', 'candle.call', {
                'coolDown': 0x7530, 'canUse': u => function (v, w) {
                    return !(w['runAttrHooks'](0x64, 'bossState') <= 0x32) && u['call'](this, v, w);
                }, 'effect': u => function (v, w, x) {
                    v['sendSkillUsage'](w, null, this), v['addEnemy']('nightmare.kobold.candle', null, 0x0, w);
                }
            }), s('skills', 'nightmare.kobold.3', 'candle.call', {
                'name': '驱散更多暗影',
                'coolDown': 0x7530,
                'canUse': u => function (v, w) {
                    return !(w['runAttrHooks'](0x64, 'bossState') > 0x32) && u['call'](this, v, w);
                },
                'effect': u => function (v, w, x) {
                    v['sendSkillUsage'](w, null, this), v['addEnemy']('nightmare.kobold.candle.1', null, 0x0, w);
                }
            }), q('enemies', 'nightmare.kobold.altar', {
                'name': '火焰祭坛',
                'camp': 'shrine',
                'race': 'unknown',
                'career': 'melee',
                'atk': 0xfa0,
                'onPress'(u) {
                    for (const v of u['units']) 'player' !== v['camp'] && 'alien' !== v['camp'] || u['sendDamage']('fire', this, v, null, this['atk']);
                    this['kill']();
                }
            }), q('buffs', 'nightmare.kobold.2.1', {'name': '火焰献祭'}), q('buffs', 'nightmare.kobold.2.3', {'name': '更多火焰献祭'}), q('buffs', 'nightmare.kobold.2.2', {
                'name': '火焰献祭',
                'didRemove'(u) {
                    for (const v of u['units']) 'player' !== v['camp'] && 'alien' !== v['camp'] || u['sendDamage']('fire', this['unit'], v, null, 0x5 * this['unit']['atk']);
                    this['unit']['kill']();
                }
            }), q('skills', 'nightmare.kobold.2', {
                'name': '火焰献祭',
                'coolDown': 0x3a98,
                'notBreakable': !0x0,
                'canUse'(u, v) {
                    const w = v['runAttrHooks'](0x64, 'bossState');
                    return !(w <= 0x14 || w > 0x4b || !u['units']['find'](x => 'nightmare.kobold.altar' === x['key']));
                },
                'effect'(u, v, w) {
                    u['units']['find'](x => 'nightmare.kobold.altar' === x['type'])['startRead']('nightmare.kobold.2.2', 0x1388, null, this), v['startRead']('nightmare.kobold.2.1', 0x1388, null, this);
                }
            }), q('skills', 'nightmare.kobold.4', {
                'name': '更多火焰献祭',
                'coolDown': 0x3a98,
                'notBreakable': !0x0,
                'canUse': (u, v) => !(v['runAttrHooks'](0x64, 'bossState') > 0x14 || !u['units']['find'](w => 'nightmare.kobold.altar' === w['type'])),
                'effect'(u, v, w) {
                    for (const x of u['units']['filter'](y => 'nightmare.kobold.altar' === y['type'])) x['startRead']('nightmare.kobold.2.2', 0x1388, null, this);
                    v['startRead']('nightmare.kobold.2.3', 0x1388, null, this);
                }
            }), q('enemies', 'nightmare.kobold.king', {
                'name': '金牙大王',
                'description': '不断变形着的黏液，会吞食周围的其它史莱姆。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x2dc6c0,
                'fireResist': 0x3e8,
                'coldResist': -0x1d4c,
                'exp': 0x960,
                'atk': 0x1388,
                'level': 0xfa,
                'skills': [{'key': 'melee', 'level': 0x0}, {
                    'key': 'nightmare.kobold.1',
                    'level': 0x0
                }, {'key': 'nightmare.kobold.2', 'level': 0x0}, {
                    'key': 'nightmare.kobold.3',
                    'level': 0x0
                }, {'key': 'nightmare.kobold.4', 'level': 0x0}, {
                    'key': 'enemy.upgrade',
                    'level': 0x0
                }, {'key': 'bossState', 'level': 0x4b}, {'key': 'bossState', 'level': 0x32}, {
                    'key': 'bossState',
                    'level': 0x14
                }],
                'stunResist': 0x4e20,
                'loots': [{'key': 'gold', 'count': [0x1, 0x64], 'rate': 0.25}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0x2
                }]
            }), q('maps', 'nightmare.kobold', {
                'name': '噩梦-金牙',
                'isDungeon': !0x0,
                'isEndless': !0x0,
                'outside': 'home',
                'group': 'nightmare.1',
                'requirement': {'stories': ['chapter3-7'], 'atLeastMaxLevel': 0x46},
                'phases': [{
                    'description': '击败噩梦中再次出现的狗头人金牙。',
                    'monsters': [{
                        'type': 'nightmare.kobold.altar',
                        'max': 0x5,
                        'delay': 0xbb8
                    }, {'type': 'nightmare.kobold.king', 'warmup': 0x2710, 'total': 0x1}]
                }],
                'stunResist': 0x2710,
                'resetPrice': 0xfa,
                'level': 0xfa,
                'exp': 0x989680,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x249f0, 0x3d090]}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0x1f4,
                    'position': 'ornament'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0x1f4, 'position': 'ornament'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0x1f4,
                    'position': 'ornament'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0x1f4, 'position': 'ornament'}, {
                    'key': 'year2018.redbag',
                    'count': [0x1, 0x1],
                    'rate': 0.02
                }]
            });
        }, 5404: (m, o, p) => {
            p(0x2026);
            const {define: q, extend: s} = p(0x19ed);
            q('buffs', 'nightmare.slime.queen.debuff.1', {
                'name': '粘液',
                'description': '所有行动减缓20%。',
                'hooks': {'speedRateAdd': u => 0.8 * u}
            }), s('buffs', 'nightmare.slime.queen.buff.1', 'manaShield', {
                'name': '黏性外壳',
                'hooks': {
                    'hasShield': () => function (u) {
                        return !0x0;
                    }
                }
            }), q('skills', 'nightmare.slime.queue.1', {
                'name': '粘液',
                'coolDown': 0x2710,
                'castTime': 0x12c,
                'canUse': (u, v) => !0x0,
                'effect'(u, v, w) {
                    for (const x of u['units']['filter'](y => v['willAttack'](y))) u['sendDamage']('melee', v, x, this, 0x1388, !0x0), x['addBuff']('nightmare.slime.queen.debuff.1', 0x1388);
                }
            }), q('buffs', 'nightmare.slime.queue.2', {
                'name': '组合', 'hooks': {}, 'willRemove'(u) {
                    let v = 0x61a80;
                    for (const w of u['units']) 'nightmare.slime.minium' === w['type'] && (w['kill'](), v += 0x4e20);
                    this['unit']['addBuff']('nightmare.slime.queen.buff.1', null, v);
                }
            }), q('skills', 'nightmare.slime.queue.2', {
                'name': '分裂',
                'castTime': 0x12c,
                'notBreakable': !0x0,
                'canUse': (u, v) => !v['runAttrHooks'](!0x1, 'hasShield'),
                'effect'(u, v, w) {
                    for (let x = 0x0; x < 0xa; x++) u['addEnemy']('nightmare.slime.minium', null, 0x0, v);
                    v['startRead']('nightmare.slime.queue.2', 0x3a98);
                }
            }), q('skills', 'nightmare.slime.queue.3', {
                'name': '召唤组合体',
                'castTime': 0x12c,
                'coolDown': 0x3a98,
                'notBreakable': !0x0,
                'canUse': (u, v) => v['runAttrHooks'](0x64, 'bossState') <= 0x32,
                'effect'(u, v, w) {
                    u['addEnemy']('nightmare.slime.minium1', null, 0x0, v);
                }
            }), q('skills', 'nightmare.slime.queue.3.1', {
                'name': '组合',
                'castTime': 0x2710,
                'notBreakable': !0x0,
                'effect'(u, v, w) {
                    for (const x of u['units']) 'nightmare.slime.queen' === x['type'] && (x['hp'] += x['maxHp'] / 0x4);
                    v['kill']();
                }
            }), q('skills', 'nightmare.slime.queue.4', {
                'name': '召唤不稳定的组合体',
                'castTime': 0x12c,
                'coolDown': 0x3a98,
                'notBreakable': !0x0,
                'canUse': (u, v) => 0x14 === v['runAttrHooks'](0x64, 'bossState'),
                'effect'(u, v, w) {
                    u['addEnemy']('nightmare.slime.minium2', null, 0x0, v);
                }
            }), q('skills', 'nightmare.slime.queue.4.1', {
                'name': '不稳定的组合',
                'castTime': 0x2710,
                'notBreakable': !0x0,
                'effect'(u, v, w) {
                    for (const x of u['units']) 'nightmare.slime.queen' === x['type'] && (x['hp'] += x['maxHp'] / 0x4, v['addBuff']('enemy.upgrade'), v['addBuff']('enemy.upgrade'));
                    v['kill']();
                }
            }), q('enemies', 'nightmare.slime.minium', {
                'name': '巨型史莱姆',
                'description': '不断变形着的黏液，会吞食周围的其它史莱姆。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x1e848,
                'exp': 0x960,
                'atk': 0x5dc,
                'level': 0xfa,
                'atkSpeed': 0.6,
                'skills': [{'key': 'melee', 'level': 0x0}]
            }), q('enemies', 'nightmare.slime.minium1', {
                'name': '史莱姆组合体',
                'description': '不断变形着的黏液，会吞食周围的其它史莱姆。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xc3500,
                'exp': 0x960,
                'atk': 0x3e8,
                'level': 0xfa,
                'atkSpeed': 0.6,
                'skills': [{'key': 'nightmare.slime.queue.3.1', 'level': 0x0}]
            }), q('enemies', 'nightmare.slime.minium2', {
                'name': '史莱姆组合体',
                'description': '不断变形着的黏液，会吞食周围的其它史莱姆。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xc3500,
                'exp': 0x960,
                'atk': 0x3e8,
                'level': 0xfa,
                'skills': [{'key': 'nightmare.slime.queue.4.1', 'level': 0x0}]
            }), q('enemies', 'nightmare.slime.queen', {
                'name': '史莱姆王后',
                'description': '不断变形着的黏液，会吞食周围的其它史莱姆。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x2dc6c0,
                'def': 0x7d0,
                'allResist': -0x1388,
                'darkResist': -0x9c4,
                'lightResist': -0x9c4,
                'exp': 0x960,
                'atk': 0x1388,
                'level': 0xfa,
                'skills': [{'key': 'melee', 'level': 0x0}, {
                    'key': 'enemy.upgrade',
                    'level': 0x0
                }, {'key': 'nightmare.slime.queue.1', 'level': 0x0}, {
                    'key': 'nightmare.slime.queue.2',
                    'level': 0x0
                }, {'key': 'nightmare.slime.queue.3', 'level': 0x0}, {
                    'key': 'nightmare.slime.queue.4',
                    'level': 0x0
                }, {'key': 'bossState', 'level': 0x32}, {'key': 'bossState', 'level': 0x14}],
                'hooks': {
                    'appeared'(u, v) {
                        this['addBuff']('nightmare.slime.queen.buff.1', null, 0xc3500);
                    }
                },
                'stunResist': 0x4e20,
                'loots': [{'key': 'gold', 'count': [0x1, 0x64], 'rate': 0.25}]
            }), q('maps', 'nightmare.slime', {
                'name': '噩梦-母体史莱姆',
                'isDungeon': !0x0,
                'isEndless': !0x0,
                'outside': 'home',
                'group': 'nightmare.1',
                'requirement': {},
                'phases': [{
                    'description': '击败噩梦中再次出现的母体史莱姆。',
                    'monsters': [{'type': 'nightmare.slime.queen', 'warmup': 0x2710, 'total': 0x1}]
                }],
                'stunResist': 0x2710,
                'resetPrice': 0xfa,
                'level': 0xfa,
                'exp': 0x989680,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x249f0, 0x3d090]}, {
                    'type': 'specialEquip',
                    'rate': 0.005,
                    'items': ['ot_slmzx']
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0x1f4, 'position': 'plastron'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0x1f4,
                    'position': 'plastron'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0x1f4, 'position': 'plastron'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0x1f4,
                    'position': 'plastron'
                }, {'key': 'year2018.redbag', 'count': [0x1, 0x1], 'rate': 0.02}]
            });
        }, 7958: (m, o, p) => {
            p(0x2026);
            const {define: q, extend: s} = p(0x19ed);
            q('enemies', 'nightmare.undead.minimal', {
                'name': '重生的僵尸',
                'description': '不断变形着的黏液，会吞食周围的其它史莱姆。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xc3500,
                'exp': 0x960,
                'atk': 0x5dc,
                'level': 0xfa,
                'skills': [{'key': 'melee', 'level': 0x0}]
            }), q('skills', 'nightmare.undead.1', {
                'name': '毒爆',
                'coolDown': 0x3a98,
                'castTime': 0x1388,
                'antiBreak': 0.8,
                'canUse': (u, v) => !(v['runAttrHooks'](0x64, 'bossState') > 0x4b || !u['units']['find'](w => 'nightmare.undead.minimal' === w['type'])),
                'effect'(u, v, w) {
                    const x = u['units']['find'](z => 'nightmare.undead.minimal' === z['type']);
                    if (!x) return;
                    const y = x['hp'] / 0x3e8;
                    x['kill']();
                    for (const z of u['units']['filter'](A => v['willAttack'](A))) u['sendDamage']('dark', v, z, this, y, !0x1);
                }
            }), q('skills', 'nightmare.undead.2', {
                'name': '暗影治疗',
                'coolDown': 0x3a98,
                'castTime': 0x1388,
                'antiBreak': 0.8,
                'canUse': (u, v) => !(v['runAttrHooks'](0x64, 'bossState') > 0x32 || !u['units']['find'](w => 'nightmare.undead.minimal' === w['type'])),
                'effect'(u, v, w) {
                    for (const x of u['units']['filter'](y => 'nightmare.undead.minimal' === y['type'])) u['sendHeal'](v, x, this, x['maxHp'] / 0xa);
                }
            }), q('skills', 'nightmare.undead.3', {
                'name': '死亡一指',
                'coolDown': 0x9c40,
                'castTime': 0x61a8,
                'antiBreak': 0.8,
                'canUse': (u, v) => !(v['runAttrHooks'](0x64, 'bossState') > 0x14),
                'effect'(u, v, w) {
                    const x = u['playerUnit'];
                    'ghost' !== x['camp'] && u['sendDamage']('dark', v, x, this, x['maxHp'], !0x1);
                }
            }), q('enemies', 'nightmare.undead.king', {
                'name': '亡者统帅奈布',
                'description': '不断变形着的黏液，会吞食周围的其它史莱姆。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x2dc6c0,
                'def': -0x1388,
                'allResist': 0x1f4,
                'darkResist': 0x7d0,
                'lightResist': -0x61a8,
                'exp': 0x960,
                'atk': 0x1388,
                'level': 0xfa,
                'skills': [{'key': 'melee', 'level': 0x0}, {
                    'key': 'shaman.darkball',
                    'level': 0x0
                }, {'key': 'nightmare.undead.1', 'level': 0x0}, {
                    'key': 'nightmare.undead.2',
                    'level': 0x0
                }, {'key': 'nightmare.undead.3', 'level': 0x0}, {
                    'key': 'enemy.upgrade',
                    'level': 0x0
                }, {'key': 'bossState', 'level': 0x4b}, {'key': 'bossState', 'level': 0x32}, {
                    'key': 'bossState',
                    'level': 0x14
                }],
                'stunResist': 0x4e20,
                'loots': [{'key': 'gold', 'count': [0x1, 0x64], 'rate': 0.25}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0x2
                }]
            }), q('maps', 'nightmare.undead', {
                'name': '噩梦-奈布',
                'isDungeon': !0x0,
                'isEndless': !0x0,
                'outside': 'home',
                'group': 'nightmare.1',
                'requirement': {},
                'phases': [{
                    'description': '击败噩梦中再次出现的死灵法师奈布。',
                    'monsters': [{
                        'type': 'nightmare.undead.minimal',
                        'max': 0xa,
                        'delay': 0x1388
                    }, {'type': 'nightmare.undead.king', 'warmup': 0x2710, 'total': 0x1}]
                }],
                'stunResist': 0x2710,
                'resetPrice': 0xfa,
                'level': 0xfa,
                'exp': 0x989680,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x249f0, 0x3d090]}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0x1f4,
                    'position': 'gaiter'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0x1f4, 'position': 'gaiter'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0x1f4,
                    'position': 'gaiter'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0x1f4, 'position': 'gaiter'}, {
                    'key': 'year2018.redbag',
                    'count': [0x1, 0x1],
                    'rate': 0.02
                }]
            });
        }, 3991: (m, o, p) => {
            p(0x2026);
            const {define: q, extend: s} = p(0x19ed);
            q('skills', 'nightmare.wolf.hunter', {
                'name': '召唤陷阱',
                'castTime': 0x61a8,
                'canUse': (u, v) => !u['units']['find'](w => 'nightmare.wolf.hunter.trigger' === w['type']),
                'effect'(u, v, w) {
                    u['addEnemy']('nightmare.wolf.hunter.trigger', null, 0x0, v);
                }
            }), q('enemies', 'nightmare.wolf.hunter', {
                'name': '老练的猎人',
                'description': '的',
                'camp': 'shrine',
                'race': 'unknown',
                'career': 'melee',
                'skills': [{'key': 'nightmare.wolf.hunter', 'level': 0x0}]
            }), q('enemies', 'nightmare.wolf.hunter.trigger', {
                'name': '陷阱',
                'description': '的',
                'camp': 'shrine',
                'race': 'unknown',
                'career': 'melee',
                'onPress'(u) {
                    for (const v of u['units']) 'nightmare.wolf.king' === v['type'] && v['stun'](0x5, 'stunned', !0x0);
                    this['kill']();
                }
            }), q('enemies', 'nightmare.wolf.healer', {
                'name': '母狼',
                'description': '不断变形着的黏液，会吞食周围的其它史莱姆。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xc3500,
                'def': 0x1f4,
                'allResist': -0x1388,
                'fireResist': -0x1388,
                'exp': 0x960,
                'atk': 0x3e8,
                'level': 0xfa,
                'atkSpeed': 0.6,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'wolf.heal', 'level': 0xc3500}]
            }), q('enemies', 'nightmare.wolf.minium', {
                'name': '公狼',
                'description': '不断变形着的黏液，会吞食周围的其它史莱姆。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0xc3500,
                'def': 0x1f4,
                'allResist': -0x1388,
                'fireResist': -0x1388,
                'exp': 0x960,
                'atk': 0x3e8,
                'level': 0xfa,
                'atkSpeed': 0.6,
                'skills': [{'key': 'melee', 'level': 0x0}, {'key': 'wolf.worry', 'level': 0x0}]
            }), s('skills', 'nightmare.wolf.1', 'wolf.call', {
                'coolDown': 0x7530,
                'notBreakable': !0x0,
                'canUse': u => function (v, w) {
                    return !(w['runAttrHooks'](0x64, 'bossState') > 0x4b) && u['call'](this, v, w);
                },
                'effect': () => function (u, v, w) {
                    u['sendSkillUsage'](v, null, this), u['addEnemy']('nightmare.wolf.healer', null, 0x0, v), u['addEnemy']('nightmare.wolf.minium', null, 0x0, v), u['addEnemy']('nightmare.wolf.minium', null, 0x0, v);
                }
            }), s('skills', 'nightmare.wolf.2', 'knight.melee1', {
                'name': '爪击',
                'coolDown': 0x7d0,
                'canUse': u => function (v, w) {
                    return !(w['runAttrHooks'](0x64, 'bossState') > 0x32) && u['call'](this, v, w);
                }
            }), s('skills', 'nightmare.wolf.3', 'rosa.angry', {
                'name': '嗜血', 'canUse': u => function (v, w) {
                    return !(w['runAttrHooks'](0x64, 'bossState') > 0x19) && u['call'](this, v, w);
                }
            }), q('enemies', 'nightmare.wolf.king', {
                'name': '白鬃狼王',
                'description': '不断变形着的黏液，会吞食周围的其它史莱姆。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x2dc6c0,
                'def': 0x3e8,
                'allResist': -0x1388,
                'fireResist': -0x1388,
                'exp': 0x960,
                'atk': 0x1388,
                'level': 0xfa,
                'skills': [{'key': 'melee', 'level': 0x0}, {
                    'key': 'enemy.upgrade',
                    'level': 0x0
                }, {'key': 'nightmare.wolf.2', 'level': 0x0}, {
                    'key': 'nightmare.wolf.3',
                    'level': 0x0
                }, {'key': 'bossState', 'level': 0x4b}, {'key': 'bossState', 'level': 0x32}, {
                    'key': 'bossState',
                    'level': 0x14
                }],
                'stunResist': 0x4e20,
                'loots': [{'key': 'gold', 'count': [0x1, 0x64], 'rate': 0.25}]
            }), q('maps', 'nightmare.wolf', {
                'name': '噩梦-狼王',
                'isDungeon': !0x0,
                'isEndless': !0x0,
                'outside': 'home',
                'group': 'nightmare.1',
                'requirement': {},
                'phases': [{
                    'description': '击败噩梦中再次出现的狼王。',
                    'monsters': [{
                        'type': 'nightmare.wolf.hunter',
                        'max': 0x1,
                        'delay': 0x5
                    }, {
                        'type': 'nightmare.wolf.healer',
                        'max': 0x5,
                        'warmup': 0x2ee0,
                        'delay': 0xbb8
                    }, {
                        'type': 'nightmare.wolf.minium',
                        'max': 0x5,
                        'warmup': 0x2ee0,
                        'delay': 0xbb8
                    }, {'type': 'nightmare.wolf.king', 'warmup': 0x2710, 'total': 0x1}]
                }],
                'stunResist': 0x2710,
                'resetPrice': 0xfa,
                'level': 0xfa,
                'exp': 0x989680,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x249f0, 0x3d090]}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0x1f4,
                    'position': 'weapon'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0x1f4, 'position': 'weapon'}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0x1f4,
                    'position': 'weapon'
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0x1f4, 'position': 'weapon'}, {
                    'key': 'year2018.redbag',
                    'count': [0x1, 0x1],
                    'rate': 0.02
                }]
            });
        }, 6637: (m, o, p) => {
            const q = p(0x1022);

            function s(v, w, x) {
                x['key'] = w, q[v][w] = x;
            }

            function u(v, w) {
                const x = {...v};
                for (const y of Object['keys'](w)) 'object' != typeof w[y] || Array['isArray'](w[y]) ? 'function' == typeof w[y] ? x[y] = w[y](x[y], x) : x[y] = w[y] : x[y] = u(x[y], w[y]);
                return x;
            }

            o['define'] = s, o['extend'] = function (v, w, x, y) {
                s(v, w, u(q[v][x], y));
            };
        }, 1654: (m, o, p) => {
            const {define: q, extend: s} = p(0x19ed);
            s('skills', 'year2018.heal', 'wolf.heal', {
                'canUse': v => function (w, x) {
                    const {summoner: y} = x;
                    return !(!y || y['hp'] > 0.25 * y['maxHp']);
                }, 'effect': () => function (v, w, x) {
                    const y = this['summoner'];
                    y && (v['sendSkillUsage'](w, [y], this), y['hp'] += 0xc350);
                }
            }), q('enemies', 'year2018.minimal.fire', {
                'name': '火·年兽幼崽',
                'description': '不断变形着的黏液，会吞食周围的其它史莱姆。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x1e848,
                'exp': 0xbb8,
                'atk': 0x4e2,
                'level': 0x12c,
                'skills': [{'key': 'melee', 'level': 0x0}, {
                    'key': 'shaman.fireball',
                    'level': 0x3
                }, {'key': 'year2018.heal', 'level': 0x0}]
            }), q('enemies', 'year2018.minimal.cold', {
                'name': '冰·年兽幼崽',
                'description': '不断变形着的黏液，会吞食周围的其它史莱姆。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x1e848,
                'exp': 0xbb8,
                'atk': 0x4e2,
                'level': 0x12c,
                'skills': [{'key': 'melee', 'level': 0x0}, {
                    'key': 'shaman.iceball',
                    'level': 0x3
                }, {'key': 'year2018.heal', 'level': 0x0}]
            }), q('enemies', 'year2018.minimal.lightning', {
                'name': '电·年兽幼崽',
                'description': '不断变形着的黏液，会吞食周围的其它史莱姆。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'maxHp': 0x1e848,
                'exp': 0xbb8,
                'atk': 0x4e2,
                'level': 0x12c,
                'skills': [{'key': 'melee', 'level': 0x0}, {
                    'key': 'shaman.chainingLightning',
                    'level': 0x3
                }, {'key': 'year2018.heal', 'level': 0x0}]
            }), s('skills', 'year2018.shockWave', 'shockWave', {
                'coolDown': 0x7530, 'canUse': v => function (w, x) {
                    return !(x['runAttrHooks'](0x64, 'bossState') > 0x4b) && !(x['hp'] < 0.25 * x['maxHp']) && (!v || v(w, x));
                }
            });
            const u = ['year2018.minimal.fire', 'year2018.minimal.cold', 'year2018.minimal.lightning'];
            s('buffs', 'year2018.summonMinimal', 'murloc.thumpHead', {
                'name': '呼唤幼崽', 'effect': () => function (v) {
                    const w = u[Math['floor'](0x3 * Math['random']())];
                    v['addEnemy'](w, null, 0x0, this['unit']);
                }
            }), s('skills', 'year2018.summonMinimal', 'murloc.thumpHead', {
                'name': '呼唤幼崽',
                'castTime': 0x0,
                'antiBreak': 0.9,
                'canUse': v => function (w, x) {
                    return !(x['runAttrHooks'](0x64, 'bossState') > 0x32) && (!v || v(w, x));
                },
                'effect': () => function (v, w, x) {
                    w['startRead']('year2018.summonMinimal', 0x1389, null, this);
                }
            }), q('enemies', 'year2018.boss', {
                'name': '三头年兽',
                'description': '不断变形着的黏液，会吞食周围的其它史莱姆。',
                'camp': 'enemy',
                'race': 'unknown',
                'career': 'melee',
                'boss': !0x0,
                'maxHp': 0x3d0900,
                'exp': 0xc80,
                'atk': 0x1388,
                'level': 0x12c,
                'stunResist': 0x9c40,
                'skills': [{'key': 'melee', 'level': 0x0}, {
                    'key': 'wolf.worry',
                    'level': 0x0
                }, {'key': 'year2018.summonMinimal', 'level': 0x0}, {
                    'key': 'year2018.shockWave',
                    'level': 0xa
                }, {'key': 'bossState', 'level': 0x4b}, {'key': 'bossState', 'level': 0x32}],
                'hooks': {
                    'onSummonDeath'() {
                        this['addBuff']('swordSkill', void 0x0, 0.01);
                    }, 'atkSpeedMul'(v, w) {
                        return this['hp'] < 0.25 * this['maxHp'] ? 0.25 * w : w;
                    }
                }
            }), q('maps', 'year2018.dungeon', {
                'name': '年兽巢穴',
                'isDungeon': !0x0,
                'outside': 'home',
                'requirement': {'level': 0x64},
                'phases': [{
                    'description': '沿着阴森的小路前进，寻找年兽的踪迹。',
                    'monsters': [{
                        'types': {
                            'year2018.minimal.fire': 0x1,
                            'year2018.minimal.cold': 0x1,
                            'year2018.minimal.lightning': 0x1
                        }, 'warmup': 0x3e8, 'delay': 0x1770, 'max': 0x4, 'total': 0xa
                    }]
                }, {
                    'description': '击败洞穴中的三头巨兽。',
                    'monsters': [{'type': 'year2018.boss', 'warmup': 0x3a98, 'delay': 0x3b9aca00, 'total': 0x1}]
                }],
                'level': 0x12c,
                'exp': 0xe4e1c0,
                'loots': [{'key': 'gold', 'rate': 0x1, 'count': [0x493e0, 0x927c0]}, {
                    'type': 'specialEquip',
                    'rate': 0x1,
                    'items': ['year2018.yearBeastWeapon-1X', 'year2018.yearBeastWeapon-1', 'year2018.yearBeastWeapon-2', 'year2018.yearBeastWeapon-3', 'year2018.yearBeastWeapon-4', 'year2018.yearBeastPlastron-1', 'year2018.yearBeastPlastron-2', 'year2018.yearBeastPlastron-3', 'year2018.yearBeastTrousers-1', 'year2018.yearBeastTrousers-22', 'year2018.yearBeastTrousers-3', 'year2018.yearBeastHeart']
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0xc8}, {
                    'type': 'equip',
                    'rate': 0x1,
                    'mfRate': 0x12c
                }, {'type': 'equip', 'rate': 0x1, 'mfRate': 0x1f4}]
            });
        }, 1448: (m, o, p) => {
            p(0xbe6), p(0xc05), p(0x676);
        }, 3046: (m, o, p) => {
            const {define: q, extend: s} = p(0x19ed);
            q('buffs', 'year2018.yearBeastWeapon-1-Buff', {
                'name': '蓄能',
                'description': '蓄能3次后的下一次技能增加100%会心和伤害'
            }), q('buffs', 'year2018.yearBeastWeapon-1-Buff2', {
                'name': '充能完毕',
                'description': '下一次技能增加100%会心和伤害',
                'hooks': {
                    'critRate': u => u + 0x1, 'critBonus': u => u + 0x1, 'postSkillEffect'() {
                        const {unit: u} = this;
                        u['removeBuff'](this);
                    }
                }
            }), q('legends', 'year2018.yearBeastWeapon-1X', {
                'type': 'stickWand',
                'itemName': '年兽的小腿骨',
                'itemDescription': '上面的肉去哪儿了？',
                'special': !0x0,
                'minLevel': 0x1,
                'display': u => '暴击几率+20%',
                'generate': u => 0x1,
                'range': u => 0x1,
                'hooks': {'critRate': (u, v) => v + 0.2}
            }), q('legends', 'year2018.yearBeastWeapon-1', {
                'type': 'stickSword',
                'itemName': '年兽的利齿',
                'itemDescription': '虽然是利齿，但更像是长剑。',
                'minLevel': 0x1,
                'special': !0x0,
                'display': u => '暴击几率+20%',
                'generate': u => 0x1,
                'range': u => '无法附魔',
                'hooks': {'critRate': (u, v) => v + 0.2}
            }), q('legends', 'year2018.yearBeastWeapon-2', {
                'type': 'Machete',
                'itemName': '年兽的利齿',
                'itemDescription': '虽然是利齿，但其实是双刀。',
                'minLevel': 0x1,
                'special': !0x0,
                'display': u => '暴击几率+20%',
                'generate': u => 0x1,
                'range': u => '无法附魔',
                'hooks': {'critRate': (u, v) => v + 0.2}
            }), q('legends', 'year2018.yearBeastWeapon-3', {
                'type': 'LongSword',
                'itemName': '年兽的利齿',
                'itemDescription': '虽然是利齿，但其实是太刀。',
                'minLevel': 0xc8,
                'special': !0x0,
                'display': u => '暴击几率+20%',
                'generate': u => 0x1,
                'range': u => '无法附魔',
                'hooks': {'critRate': (u, v) => v + 0.2}
            }), q('legends', 'year2018.yearBeastWeapon-44', {
                'type': 'SwordShield',
                'itemName': '年兽的脚掌',
                'itemDescription': '非常厚实的肉垫，手感好到爆了。',
                'minLevel': 0x1,
                'special': !0x0,
                'display': u => '暴击几率+20%',
                'generate': u => 0x1,
                'range': u => '无法附魔',
                'hooks': {'critRate': (u, v) => v + 0.2}
            }), q('legends', 'year2018.yearBeastWeapon-XX', {
                'type': 'wolfTeethMace',
                'itemName': '年兽的大腿骨',
                'itemDescription': '上面的肉去哪儿了？嗝儿……',
                'minLevel': 0x1,
                'display': u => '每层暴击使你接下来5秒内伤害增加10%。',
                'special': !0x0,
                'generate': u => 0x1,
                'range': u => 0x1,
                'hooks': {
                    'testCrit'(u, v) {
                        return v > 0x0 && this['addBuff']('swordSkill', 0x1388, 0.1 * v), v;
                    }
                }
            }), q('legends', 'year2018.yearBeastPlastron-1', {
                'type': 'copperArmor',
                'itemName': '年兽的硬甲',
                'itemDescription': '散发着硝烟的气息。',
                'minLevel': 0x1,
                'display': u => '所有伤害吸收+15%。',
                'special': !0x0,
                'generate': u => 0x1,
                'range': u => '无法附魔',
                'hooks': {
                    'meleeAbsorb': (u, v) => v + 0.15,
                    'fireAbsorb': (u, v) => v + 0.15,
                    'darkAbsorb': (u, v) => v + 0.15,
                    'coldAbsorb': (u, v) => v + 0.15,
                    'lightningAbsorb': (u, v) => v + 0.15,
                    'lightAbsorb': (u, v) => v + 0.15,
                    'poisonAbsorb': (u, v) => v + 0.15
                }
            }), q('legends', 'year2018.yearBeastTrousers-1', {
                'type': 'copperShinGuard1',
                'itemName': '年兽的鬃毛',
                'itemDescription': '比钢铁还硬的鬃毛。',
                'minLevel': 0x1,
                'display': u => '所有伤害吸收+10%。',
                'special': !0x0,
                'generate': u => 0x1,
                'range': u => '无法附魔',
                'hooks': {
                    'meleeAbsorb': (u, v) => v + 0.1,
                    'fireAbsorb': (u, v) => v + 0.1,
                    'darkAbsorb': (u, v) => v + 0.1,
                    'coldAbsorb': (u, v) => v + 0.1,
                    'lightningAbsorb': (u, v) => v + 0.1,
                    'lightAbsorb': (u, v) => v + 0.1,
                    'poisonAbsorb': (u, v) => v + 0.1
                }
            }), q('legends', 'year2018.yearBeastPlastron-2', {
                'type': 'boneArmor',
                'itemName': '年兽的厚皮',
                'itemDescription': '散发着硝烟的气息。',
                'minLevel': 0x1,
                'display': u => '所有伤害吸收+15%。',
                'special': !0x0,
                'generate': u => 0x1,
                'range': u => '无法附魔',
                'hooks': {
                    'meleeAbsorb': (u, v) => v + 0.15,
                    'fireAbsorb': (u, v) => v + 0.15,
                    'darkAbsorb': (u, v) => v + 0.15,
                    'coldAbsorb': (u, v) => v + 0.15,
                    'lightningAbsorb': (u, v) => v + 0.15,
                    'lightAbsorb': (u, v) => v + 0.15,
                    'poisonAbsorb': (u, v) => v + 0.15
                }
            }), q('legends', 'year2018.yearBeastTrousers-2', {
                'type': 'boneArmor1',
                'itemName': '年兽的厚皮',
                'itemDescription': '散发着硝烟的气息。',
                'minLevel': 0x1,
                'display': u => '所有伤害吸收+15%。',
                'special': !0x0,
                'generate': u => 0x1,
                'range': u => '无法附魔',
                'hooks': {
                    'meleeAbsorb': (u, v) => v + 0.15,
                    'fireAbsorb': (u, v) => v + 0.15,
                    'darkAbsorb': (u, v) => v + 0.15,
                    'coldAbsorb': (u, v) => v + 0.15,
                    'lightningAbsorb': (u, v) => v + 0.15,
                    'lightAbsorb': (u, v) => v + 0.15,
                    'poisonAbsorb': (u, v) => v + 0.15
                }
            }), q('legends', 'year2018.yearBeastTrousers-22', {
                'type': 'boneShinGuard',
                'itemName': '年兽的皮裤',
                'itemDescription': '再胖的人都穿得上。',
                'minLevel': 0x1,
                'display': u => '所有伤害吸收+10%。',
                'special': !0x0,
                'generate': u => 0x1,
                'range': u => '无法附魔',
                'hooks': {
                    'meleeAbsorb': (u, v) => v + 0.1,
                    'fireAbsorb': (u, v) => v + 0.1,
                    'darkAbsorb': (u, v) => v + 0.1,
                    'coldAbsorb': (u, v) => v + 0.1,
                    'lightningAbsorb': (u, v) => v + 0.1,
                    'lightAbsorb': (u, v) => v + 0.1,
                    'poisonAbsorb': (u, v) => v + 0.1
                }
            }), q('legends', 'year2018.yearBeastPlastron-3', {
                'type': 'mithrilDress',
                'itemName': '年兽的毛衣',
                'itemDescription': '散发着硝烟的气息。',
                'minLevel': 0x1,
                'display': u => '所有伤害吸收+15%。',
                'special': !0x0,
                'generate': u => 0x1,
                'range': u => '无法附魔',
                'hooks': {
                    'meleeAbsorb': (u, v) => v + 0.15,
                    'fireAbsorb': (u, v) => v + 0.15,
                    'darkAbsorb': (u, v) => v + 0.15,
                    'coldAbsorb': (u, v) => v + 0.15,
                    'lightningAbsorb': (u, v) => v + 0.15,
                    'lightAbsorb': (u, v) => v + 0.15,
                    'poisonAbsorb': (u, v) => v + 0.15
                }
            }), q('legends', 'year2018.yearBeastTrousers-3', {
                'type': 'mithrilSkirt',
                'itemName': '年兽的毛裤',
                'itemDescription': '再胖的人都穿得上。',
                'minLevel': 0x1,
                'display': u => '所有伤害吸收+10%。',
                'special': !0x0,
                'generate': u => 0x1,
                'range': u => '无法附魔',
                'hooks': {
                    'meleeAbsorb': (u, v) => v + 0.1,
                    'fireAbsorb': (u, v) => v + 0.1,
                    'darkAbsorb': (u, v) => v + 0.1,
                    'coldAbsorb': (u, v) => v + 0.1,
                    'lightningAbsorb': (u, v) => v + 0.1,
                    'lightAbsorb': (u, v) => v + 0.1,
                    'poisonAbsorb': (u, v) => v + 0.1
                }
            }), q('legends', 'year2018.yearBeastHeart', {
                'type': 'ornament',
                'itemName': '年兽的心脏',
                'itemDescription': '蕴含着时间的力量。',
                'minLevel': 0x1,
                'display': u => '急速+20%。',
                'special': !0x0,
                'generate': u => 0x1,
                'range': u => '无法附魔',
                'hooks': {'speedRateAdd': (u, v) => v + 0.2}
            });
        }, 3077: (m, p, q) => {
            const {define: s, extend: u} = q(0x19ed);
            s('goods', 'year2018.redbag', {
                'type': 'package',
                'name': '红包',
                'description': '龙年吉祥，新年快乐！\x0a\x09打开后获得少量神力、精粹！',
                'stack': 0x1869f,
                'price': 0x1,
                'requireInventory': 0x2,
                'backgroundColor': '#ff215b',
                'nameColor': 'white',
                'loots': [{'key': 'diamonds', 'rate': 0x1, 'count': [0xa, 0x1e]}, {
                    'key': 'wuxingshi',
                    'rate': 0x1,
                    'count': [0x5, 0x8]
                }, {'type': 'ticket', 'rate': 0.1, 'dungeons': {'year2018.dungeon': 0x1}}, {
                    'type': 'specialEquip2',
                    'rate': 0.1,
                    'items': ['year2018.yearBeastWeapon-1X', 'year2018.yearBeastWeapon-1', 'year2018.yearBeastWeapon-2', 'year2018.yearBeastWeapon-4', 'year2018.yearBeastPlastron-1', 'year2018.yearBeastPlastron-2', 'year2018.yearBeastPlastron-3', 'year2018.yearBeastTrousers-1', 'year2018.yearBeastTrousers-22', 'year2018.yearBeastTrousers-3', 'year2018.yearBeastHeart']
                }]
            });
            const {enemies: v, maps: w} = q(0x1022);
            for (const x of Object['keys'](v)) {
                const y = v[x];
                y['loots'] && y['loots']['push']({'key': 'year2018.redbag', 'count': [0x1, 0x1], 'rate': 0.0002});
            }
            for (const z of Object['keys'](v)) {
                const A = v[z];
                A['loots'] && A['loots']['push']({'key': '61boxt', 'count': [0x1, 0x1], 'rate': 0.00002});
            }
            for (const B of Object['keys'](v)) {
                const C = v[B];
                C['loots'] && C['loots']['push']({'key': 'exp_zz', 'count': [0x1, 0x1], 'rate': 0.001});
            }
            for (const D of Object['keys'](w)) {
                const E = w[D];
                E['loots'] && E['loots']['push']({'key': 'year2018.redbag', 'count': [0x1, 0x1], 'rate': 0.2});
            }
        }, 9497: m => {
            m['exports'] = [{
                'key': 'atkByDex', 'name': '强力攻击', 'hooks': {
                    'atkAdd'(o, p) {
                        return p + this['dex'] / 0x64;
                    }
                }
            }, {
                'key': 'energy',
                'name': '能量',
                'hooks': {'maxEp': (o, p) => p + 0x64, 'epRecovery': (o, p) => p + 0x5}
            }];
        }, 5034: (m, o, p) => {
            m['exports'] = [...p(0xca4), ...p(0x20f9), ...p(0x2519), ...p(0x1b4), ...p(0x17f5), ...p(0x1756)];
        }, 6133: m => {
            m['exports'] = [{
                'key': 'pla_passive1', 'name': '神圣力量', 'description': '', 'hooks': {
                    'maxMpAdd'(o, p) {
                        return p + 0x64 + 0x4 * this['level'];
                    }, 'mpRecovery'(o, p) {
                        return p + 0x1 + 0.09 * this['level'];
                    }, 'intAdd'(o, p) {
                        let q = 0x0;
                        const {weapon: s, plastron: u, gaiter: v} = this['player']['equipments'];
                        return s['empty'] || 'sword' !== s['goodData']['class'] || (q += s['level']), u['empty'] || ('cloth' === u['goodData']['class'] ? q += u['level'] : 'lightArmor' === u['goodData']['class'] && (q += 0.5 * u['level'])), v['empty'] || ('cloth' === v['goodData']['class'] ? q += v['level'] : 'lightArmor' === v['goodData']['class'] && (q += 0.5 * v['level'])), p + Math['ceil'](0.5 * q);
                    }, 'strAdd'(o, p) {
                        let q = 0x0;
                        const {weapon: s, plastron: u, gaiter: v} = this['player']['equipments'];
                        return s['empty'] || 'swordshield' !== s['goodData']['class'] || (q += s['level']), u['empty'] || ('armor' === u['goodData']['class'] ? q += u['level'] : 'lightArmor' === u['goodData']['class'] && (q += 0.5 * u['level'])), v['empty'] || ('armor' === v['goodData']['class'] ? q += v['level'] : 'lightArmor' === v['goodData']['class'] && (q += 0.5 * v['level'])), p + Math['ceil'](0.5 * q);
                    }, 'defselfAdd'(o, p) {
                        return p + 0.8 * this['sta'];
                    }, 'allResselfAdd'(o, p) {
                        return p + 0.6 * this['sta'];
                    }, 'speResAdd'(o, p) {
                        return p + 0.6 * this['sta'];
                    }, 'maxHp_Add'(o, p) {
                        return p + 0x4 * this['sta'];
                    }, 'dmgLAdd'(o, p) {
                        return p + this['str'];
                    }, 'lightdmgLAdd'(o, p) {
                        return p + 1.2 * this['int'];
                    }, 'lightResist'(o, p) {
                        return p + this['int'];
                    }, 'firedmgLAdd'(o, p) {
                        return p + 0.8 * this['int'];
                    }, 'colddmgLAdd'(o, p) {
                        return p + 0.8 * this['int'];
                    }, 'lightningdmgLAdd'(o, p) {
                        return p + 0.8 * this['int'];
                    }
                }
            }];
        }, 8441: m => {
            m['exports'] = [{
                'key': 'magic', 'name': '法力', 'description': '', 'hooks': {
                    'maxMpAdd'(o, p) {
                        return p + 0x32 + 0x5 * this['int'];
                    }, 'mpRecovery'(o, p) {
                        return p + 0x1 + 0.1 * this['int'];
                    }, 'defselfAdd'(o, p) {
                        return p + 0.3 * this['sta'];
                    }, 'allResselfAdd'(o, p) {
                        return p + 0.3 * this['sta'] + this['int'];
                    }, 'speResAdd'(o, p) {
                        return p + 0.3 * this['sta'];
                    }, 'maxHp_Add'(o, p) {
                        return p + 2.5 * this['sta'];
                    }, 'firedmgLAdd'(o, p) {
                        return p + this['int'];
                    }, 'colddmgLAdd'(o, p) {
                        return p + this['int'];
                    }, 'lightningdmgLAdd'(o, p) {
                        return p + this['int'];
                    }
                }
            }, {'key': 'elect', 'name': '电能', 'description': '', 'hooks': {'maxComboPoint': (o, p) => p + 0x5}}];
        }, 436: m => {
            m['exports'] = [{
                'key': 'soulbringer_passive',
                'name': '鬼泣封印',
                'description': '',
                'hooks': {
                    'maxMpAdd'(o, p) {
                        return p + 0x32 + 0x5 * this['int'];
                    }, 'darkResist'(o, p) {
                        return p + 0x1 * this['int'];
                    }, 'darkdmgLAdd'(o, p) {
                        return p + 0x1 * this['int'];
                    }, 'atk_self_Add'(o, p) {
                        return p + 0.2 * this['int'] + 0.2 * this['str'];
                    }, 'defselfAdd'(o, p) {
                        return p + 0.5 * this['sta'];
                    }, 'allResselfAdd'(o, p) {
                        return p + 0.5 * this['sta'];
                    }, 'speResAdd'(o, p) {
                        return p + 0.5 * this['sta'];
                    }, 'maxHp_Add'(o, p) {
                        return p + 2.5 * this['sta'];
                    }
                }
            }];
        }, 5974: m => {
            m['exports'] = [{
                'key': 'vbps1', 'name': '拳师', 'description': '', 'hooks': {
                    'atk_self_Add'(o, p) {
                        return p + 0.5 * this['str'];
                    }, 'dmgLAdd'(o, p) {
                        return p + 0.45 * this['str'];
                    }, 'defselfAdd'(o, p) {
                        return p + 0.5 * this['str'] + 0.8 * this['sta'];
                    }, 'allResselfAdd'(o, p) {
                        return p + 0.6 * this['sta'];
                    }, 'speResAdd'(o, p) {
                        return p + 0.45 * this['sta'];
                    }, 'maxHp_Add'(o, p) {
                        return p + 3.5 * this['sta'];
                    }, 'maxMpMul': (o, p) => 0x0, 'hpRecovery'(o, p) {
                        return p + 0.08 * this['sta'];
                    }
                }
            }];
        }, 3236: m => {
            m['exports'] = [{
                'key': 'warrior_passive1',
                'name': '战士通用',
                'description': '',
                'hooks': {
                    'atk_self_Add'(o, p) {
                        return p + 0.5 * this['str'];
                    },
                    'dmgLAdd'(o, p) {
                        return p + 0.85 * this['str'];
                    },
                    'defselfAdd'(o, p) {
                        return p + 0.85 * this['str'] + this['sta'];
                    },
                    'allResselfAdd'(o, p) {
                        return p + this['sta'];
                    },
                    'speResAdd'(o, p) {
                        return p + this['sta'];
                    },
                    'maxHp_Add'(o, p) {
                        return p + 0x4 * this['sta'];
                    },
                    'maxRp': (o, p) => p + 0x64,
                    'rpOnAttacked': (o, p) => p + 0x1,
                    'nomp': (o, p) => 0x0,
                    'hpRecovery'(o, p) {
                        return p + 0.1 * this['sta'];
                    }
                }
            }, {
                'key': 'warrior_passive2',
                'name': '魔剑',
                'description': '',
                'hooks': {
                    'firedmgAdd': (o, p) => p + 0.1, 'firedmgLAdd'(o, p) {
                        return p + 0.5 * this['str'] + 0.5 * this['int'];
                    }, 'shanbizhiAdd'(o, p) {
                        return p + 0x2 * this['dex'];
                    }, 'speedRateAdd'(o, p) {
                        return p + Math['min'](0.2, Math['round'](this['dex'] / 0x96) / 0x64);
                    }
                }
            }, {
                'key': 'warrior_passive3', 'name': '宗师', 'description': '', 'hooks': {
                    'dmgLAdd'(o, p) {
                        return p + this['str'];
                    }, 'shanbizhiAdd'(o, p) {
                        return p + 0x4 * this['dex'];
                    }, 'speedRateAdd'(o, p) {
                        return p + Math['min'](0.3, Math['round'](this['dex'] / 0x64) / 0x64);
                    }
                }
            }, {
                'key': 'warrior_passive4', 'name': '守护者', 'description': '', 'hooks': {
                    'atk_self_Add'(o, p) {
                        return p + this['maxHp'] / 0x32;
                    }, 'defselfAdd'(o, p) {
                        return p + this['str'] + 0.5 * this['sta'];
                    }, 'allResselfAdd'(o, p) {
                        return p + 0.5 * this['sta'];
                    }, 'maxHp_Add'(o, p) {
                        return p + 0x2 * this['sta'];
                    }
                }
            }, {
                'key': 'warrior_passive5', 'name': '血魔', 'description': '', 'hooks': {
                    'critRLAdd'(o, p) {
                        return p + 0x1 * this['dex'];
                    }, 'critBLAdd'(o, p) {
                        return p + 0x2 * this['dex'];
                    }
                }
            }, {
                'key': 'warrior_passive6',
                'name': '焚天',
                'description': '',
                'hooks': {
                    'firedmgAdd': (o, p) => p + 0.1, 'colddmgAdd': (o, p) => p + 0.1, 'firedmgLAdd'(o, p) {
                        return p + 0.5 * this['str'] + 0.5 * this['int'];
                    }, 'colddmgLAdd'(o, p) {
                        return p + 0.5 * this['str'] + 0.5 * this['int'];
                    }, 'critRLAdd'(o, p) {
                        return p + 0.5 * this['dex'];
                    }, 'critBLAdd'(o, p) {
                        return p + this['dex'];
                    }, 'maxCpAdd': (o, p) => p + 0x64, 'maxFpAdd': (o, p) => p + 0x64
                }
            }];
        }, 8531: m => {
            m['exports'] = {};
        }, 1675: m => {
            m['exports'] = {
                'key': 'Aleanor',
                'name': '亚莲娜',
                'description': '艾尔的童年好友，一名蓝发的少女。似乎有些不同寻常的地方……\x0a\x20\x20\x20\x0a\x20\x20职业：\x20魔法学徒\x0a\x20\x20职业特性：\x20\x0a\x20\x20①法力值上限+50，法力值恢复+1\x0a\x20\x20②每点智力额外增加5点法力值上限和0.1法力值恢复\x0a\x20\x20\x20\x0a\x20\x20可以使用的武器：\x20法杖\x0a\x20\x20可以穿戴的防具：\x20布甲\x0a\x20\x20\x20\x20\x0a\x20\x20可以习得的主动技能：\x20杖击、魔法连弹、召唤术·史莱姆\x0a\x20\x20可以习得的被动技能：\x20能量亲和、魔法铠甲\x0a\x20\x20\x20\x0a\x20\x20当角色等级达到15级且任意一个角色完成副本“迷雾森林”的首通时，可以进行第一次转职。',
                'defaultCareer': 'sorceress',
                'atk': 0x0,
                'atkSpeed': 0x1,
                'requirement': {'stories': ['aleanor-startup']},
                'attrBase': {'str': 0x4, 'dex': 0x8, 'int': 0xc, 'sta': 0x8}
            };
        }, 662: m => {
            m['exports'] = {
                'key': 'Ariel',
                'name': '伊瑞尔',
                'description': '这是一名来自庇护之地的圣骑士。',
                'defaultCareer': 'paladin',
                'atk': 0x1,
                'atkSpeed': 0.5,
                'requirement': {'stories': ['pal-2'], 'unplayer': ['Ariel']},
                'attrBase': {'str': 0xa, 'dex': 0x5, 'int': 0xa, 'sta': 0x5}
            };
        }, 4564: m => {
            m['exports'] = {
                'key': 'Eyer',
                'name': '艾尔',
                'description': '边境之村的一名普通少年，熟读数百本勇者传，头发染成了勇者专用的金色。\x0a\x20\x20\x20\x0a\x20\x20职业：\x20战士\x0a\x20\x20职业特性：\x20\x0a\x20\x20①每点力量额外增加0.2攻击力\x0a\x20\x20②被攻击时获得1点怒气\x0a\x20\x20\x0a\x20\x20可以使用的武器：\x20长剑、剑盾、双刀\x0a\x20\x20可以穿戴的防具：\x20轻甲、重甲\x0a\x20\x20\x20\x0a\x20\x20可以习得的主动技能：\x20普通攻击、包扎伤口、重击\x0a\x20\x20可以习得的被动技能：\x20坚韧、奋勇\x0a\x20\x20\x0a\x20\x20当角色等级达到15级且任意一个角色完成副本“迷雾森林”的首通时，可以进行第一次转职。\x0a\x20\x20',
                'defaultCareer': 'warrior',
                'atk': 0x1,
                'atkSpeed': 0.5,
                'attrBase': {'str': 0xa, 'dex': 0x8, 'int': 0x4, 'sta': 0xa}
            };
        }, 2334: m => {
            m['exports'] = {
                'key': 'iPhone14promax',
                'name': '恶魔五月哭',
                'description': 'I\x20am\x20the\x20storm\x20that\x20is\x20approaching\x0a\x09\x20\x0a\x09Provoking\x20black\x20clouds\x20in\x20isolation\x0a\x09\x20\x0a\x09I\x20am\x20reclaimer\x20of\x20my\x20name\x0a\x09\x20\x0a\x09Born\x20in\x20flames,\x20I\x20have\x20been\x20blessed\x0a\x09\x20\x0a\x09My\x20family\x20crest\x20is\x20a\x20demon\x20of\x20death!\x0a\x09\x20\x0a\x09\x20\x0a\x09职业：\x20黑暗君主\x0a\x09职业特性：\x20\x0a\x09①法力值上限+50\x0a\x09②每点力量额外增加0.2攻击力\x0a\x09③每点智力额外增加0.2攻击力、1点暗伤害、1点暗抗性、5点法力值上限\x0a\x09\x20\x0a\x09可以使用的武器：\x20太刀，长剑\x0a\x09可以穿戴的防具：\x20布甲\x0a\x09\x20\x20\x0a\x09艾冯十世·普洛·麦克斯大佬为大家定制的超强（？）角色。\x0a\x09',
                'defaultCareer': 'soulbringer',
                'atk': 0x1,
                'atkSpeed': 0x1,
                'requirement': {'stories': ['soulbringer-2'], 'unplayer': ['iPhone14promax']},
                'attrBase': {'str': 0xa, 'dex': 0x8, 'int': 0xa, 'sta': 0x8}
            };
        }, 1725: (m, o, p) => {
            m['exports'] = [p(0x11d4), p(0x68b), p(0x91e), p(0x296), p(0xe0d)];
        }, 3597: m => {
            m['exports'] = {
                'key': 'villageH',
                'name': '村长',
                'description': '边境之村的村长，没有人能知道他的姓名\x0a\x09如果没有这场灾难，他可能永远过着悠哉游哉看黄色书籍、调戏中年熟妇的生活\x0a\x20\x20\x20\x0a\x09职业：\x20拳师\x0a\x09职业特性：\x20\x0a\x09①每点力量+0.2攻击力\x0a\x20\x20\x20\x0a\x09可以使用的武器：\x20无\x0a\x09可以穿戴的防具：\x20重甲、布甲\x0a\x09\x09\x0a\x09可以习得的主动技能：\x20直拳、推掌\x0a\x09可以习得的被动技能：\x20赤手空拳',
                'defaultCareer': 'villagelv1',
                'atk': 0x0,
                'atkSpeed': 0x1,
                'requirement': {'stories': ['villageboss-ceshi']},
                'attrBase': {'str': 0xa, 'dex': 0x4, 'int': 0x4, 'sta': 0x8}
            };
        }, 7249: m => {
            m['exports'] = [{
                'key': 'mz_st',
                'name': '昏迷',
                'group': 'melee',
                'description': o => {
                    const p = 0x1 + 0.2 * o;
                    return '普普通通的一击。对目标造成攻击力的' + (0x0 | 0.75 * p * 0x64) + '%-' + (0x0 | 1.25 * p * 0x64) + '%伤害。';
                },
                'coolDown': 0xbb8,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    const y = x * (0.5 * Math['random']() + 0.75) * (0.2 * u + 0x1), z = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](z) * y, z), w && (q['hp'] += w), v['addBuff']('cold', 0x1f4, null, 'cold'), q['rp'] += q['rpOnAttack'], v['rp'] += v['rpOnAttacked'], v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'melee',
                'name': '攻击',
                'group': 'melee',
                'description': o => {
                    const p = 0x1 + 0.2 * o;
                    return '普普通通的一击。对目标造成攻击力的' + (0x0 | 0.75 * p * 0x64) + '%-' + (0x0 | 1.25 * p * 0x64) + '%伤害。';
                },
                'coolDown': 0x1388,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    const y = x * (0.5 * Math['random']() + 0.75) * (0.2 * u + 0x1), z = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](z) * y, z), w && (q['hp'] += w), q['rp'] += q['rpOnAttack'], v['rp'] += v['rpOnAttacked'], v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'melee.aoe',
                'name': '炮击',
                'group': 'melee',
                'castTime': 0x1f4,
                'description': o => {
                    const p = 0x1 + 0.2 * o;
                    return '普普通通的一击。对目标造成攻击力的' + (0x0 | 0.75 * p * 0x64) + '%-' + (0x0 | 1.25 * p * 0x64) + '%伤害。';
                },
                'isAttack': !0x0,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {leech: s = 0x0, atk: u} = p, v = u * (0.5 * Math['random']() + 0.75) * (0.2 * q + 0x1);
                    for (const w of o['units']['filter'](x => p['willAttack'](x))) {
                        if (o['testDodge'](p, w, this)) return;
                        const x = p['testCrit']();
                        o['sendDamage']('melee', p, w, this, p['getCritBonus'](x) * v, x), w['rp'] += w['rpOnAttacked'], w['runAttrHooks'](p, 'attacked');
                    }
                    s && (p['hp'] += s), p['rp'] += p['rpOnAttack'];
                }
            }, {
                'key': 'mz2skill2',
                'name': '自我了结',
                'coolDown': 0x7530,
                'description': '',
                'maxExp': o => o ** 0x2 * 0x64 + 0x12c * o + 0xc8,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {target: s} = p;
                    let u = 0x0;
                    u += p['maxHp'] - p['hp'], p['kill'](), o['sendGeneralMsg']('你的厨艺等级为' + o['cklv']() + '级,炼金等级为' + o['mdlv']() + '级。而你在本次测试期间只输出了' + Math['round'](u) + '点伤害，秒伤约' + Math['round'](u / 0x1e) + '点/s，没吃饭？');
                }
            }];
        }, 5422: m => {
            function o(p) {
                return p <= 0x3c ? 0.3 * p + 0x1 : 0.5 * p + 0x1 - 0x6;
            }

            m['exports'] = [{
                'key': 'healthDrill',
                'name': '生命汲取',
                'castTime': 0x5dc,
                'coolDown': 0x2710,
                'description': (p, q) => {
                    const {int: s} = q;
                    return '对目标造成' + (0x0 | 0xa * o(q['level']) * (0.01 * s + 0x1) * (0.3 * p + 0x1)) + '伤害，为你恢复' + (0xa + p) + '%生命值。';
                },
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, v) {
                    const {critRate: w, critBonus: x, target: y, int: z} = q;
                    if (p['testDodge'](q, y, this)) return;
                    const A = q['testCrit'](),
                        B = 0xa * o(q['level']) * (0.01 * z + 0x1) * (0.3 * v + 0x1) * q['dmgAdd'];
                    p['sendHeal'](q, q, this, q['maxHp'] * (0.1 + 0.01 * v)), p['sendDamage']('magic', q, y, this, q['getCritBonus'](A) * B, A);
                }
            }, {
                'key': 'summon.earth.comeToMe',
                'name': '嘲讽',
                'castTime': 0x1f4,
                'coolDown': 0x1388,
                'canUse': (p, q) => !!q['target'] && q['target']['target'] !== q,
                'effect'(p, q, s) {
                    q['target']['target'] = q;
                }
            }];
        }, 4586: m => {
            m['exports'] = [{
                'key': 'slime.swallow',
                'name': '吞噬',
                'description': '吞噬一个小型史莱姆，获取对方的所有生命值。',
                'coolDown': 0x61a8,
                'castTime': 0x3e8,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!o['units']['find'](q => q !== p && p['willAssist'](q) && p['maxHp'] - p['hp'] > q['maxHp']),
                'effect'(o, p, q) {
                    const s = o['units']['find'](v => v !== p && p['willAssist'](v));
                    o['sendSkillUsage'](p, [s], this);
                    const u = s['maxHp'] * (0.2 + 0.1 * q);
                    o['sendHeal'](p, p, this, u), o['removeUnit'](s);
                }
            }, {
                'key': 'wolf.heal',
                'name': '舔舐伤口',
                'castTime': 0x7d0,
                'description': '用心舔舐同伴的伤口，恢复100点生命值',
                'coolDown': 0x3a98,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!o['units']['find'](q => q !== p && p['willAssist'](q) && q['maxHp'] - q['hp'] >= 0x14),
                'effect'(o, p, q) {
                    const s = o['units']['filter'](u => u !== p && p['willAssist'](u) && u['maxHp'] - u['hp'] >= 0x14)['sort']((u, v) => v['maxHp'] - v['hp'] - (u['maxHp'] - u['hp']))[0x0];
                    s && (o['sendSkillUsage'](p, [s], this), s['hp'] += 0x1e);
                }
            }, {
                'key': 'wolf.call',
                'name': '召唤狼群',
                'description': '召唤伙伴来共同作战',
                'castTime': 0x1f4,
                'coolDown': 0xafc8,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => o['units']['filter'](q => q['camp'] === p['camp'])['length'] < 0x28,
                'effect'(o, p, q) {
                    o['sendSkillUsage'](p, null, this), o['addEnemy']('wolf.giant', null, 0x0, p), o['addEnemy']('wolf.minimal', null, 0x0, p), o['addEnemy']('wolf.minimal', null, 0x0, p);
                }
            }, {
                'key': 'shaman.fireball',
                'name': '火球术',
                'description': '造成50点火焰伤害',
                'coolDown': 0x2710,
                'castTime': 0x7d0,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {target: s, atk: u} = p;
                    o['testDodge'](p, s, this) || o['sendDamage']('fire', p, s, this, 2.5 * u, !0x1);
                }
            }, {
                'key': 'bomb',
                'name': '爆裂',
                'description': '对全体造成100点火焰伤害',
                'castTime': 0x4e20,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !0x0,
                'effect'(o, p, q) {
                    o['units']['filter'](s => p['canAttack'](s))['forEach'](s => {
                        o['testDodge'](p, s, this) || o['sendDamage']('fire', p, s, this, p['atk'], !0x1);
                    }), p['kill']();
                }
            }, {
                'key': 'candle.call',
                'name': '驱散暗影',
                'description': '召唤一大堆蜡烛',
                'castTime': 0x1f4,
                'coolDown': 0x9c40,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => o['units']['filter'](q => q['camp'] === p['camp'])['length'] < 0x32,
                'effect'(o, p, q) {
                    o['sendSkillUsage'](p, null, this);
                    for (let s = 0x0; s < 0x8; s++) o['addEnemy']('kobold.candle', null, 0x0, p);
                }
            }, {
                'key': 'fireElement.fireball',
                'name': '火球术',
                'description': '造成30点火焰伤害',
                'castTime': 0xfa0,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {target: s, atk: u} = p;
                    if (o['testDodge'](p, s, this)) return;
                    const v = p['testCrit']();
                    o['sendDamage']('fire', p, s, this, p['getCritBonus'](v) * u, v);
                }
            }, {
                'key': 'kakarif.melee',
                'name': '火焰冲击',
                'group': 'melee',
                'description': '造成巨额的火焰伤害',
                'targetType': 'target',
                'isAttack': !0x0,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {atk: s, target: u} = p;
                    o['testDodge'](p, u, this) || o['sendDamage']('fire', p, u, this, s);
                }
            }, {
                'key': 'kakarif.mad',
                'name': '卡卡列夫之怒',
                'description': '增加300%攻击速度，持续4秒。',
                'targetType': 'target',
                'castTime': 0x7d0,
                'coolDown': 0x7530,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    p['addBuff']('kakarif.mad', 0xfa0);
                }
            }, {
                'key': 'zombie.thumpHead',
                'name': '击颅',
                'group': 'thump',
                'description': o => {
                    const p = 0x1 + 0.1 * o;
                    return '对目标造成攻击力的' + (0x0 | 0xc8 * p) + '%-' + (0x0 | 0x118 * p) + '%伤害，并使目标昏迷' + (o + 0x1) / 0x2 + '秒。';
                },
                'coolDown': 0x3a98,
                'maxExp': o => o ** 0x2 * 0x96 + 0x1c2 * o + 0x12c,
                'canUse': (o, p) => !!p['target'],
                'effect'(p, q, v) {
                    const {target: w, atk: x, leech: y = 0x0, critRate: z = 0x0, critBonus: A = 1.5} = q;
                    if (p['testDodge'](q, w, this)) return;
                    const B = x * (0.8 * Math['random']() + 0x2), C = q['testCrit']();
                    p['sendDamage']('melee', q, w, this, q['getCritBonus'](C) * B, C), y && (q['hp'] += y), w['breakCasting'](), w['stun'](0.5), w['rp'] += w['rpOnAttacked'], w['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'zombie.heal',
                'name': '暗影治疗',
                'description': '治疗所有盟友100点生命。每治疗一个盟友，就对所有敌人造成10点暗影伤害',
                'castTime': 0x7d0,
                'coolDown': 0x4e20,
                'maxExp': o => o ** 0x2 * 0x96 + 0x1c2 * o + 0x12c,
                'canUse': (o, p) => !0x0,
                'effect'(o, p, q) {
                    const s = o['units']['filter'](u => p['willAssist'](u));
                    if (s['length'] > 0x0) {
                        for (const w of s) w['hp'] += 0x64;
                        const u = 0xa * s['length'], v = o['units']['filter'](x => p['willAttack'](x));
                        for (const x of v) {
                            if (o['testDodge'](p, x, this)) return;
                            o['sendDamage']('dark', p, x, this, u, !0x1);
                        }
                    }
                }
            }, {
                'key': 'zombie.hide',
                'name': '驱使亡灵',
                'description': '将自己的位置移动到最后，并调整所有目标为自己的敌人',
                'castTime': 0x3e8,
                'coolDown': 0x777d,
                'effect'(o, p, q) {
                    o['units']['remove'](p), o['units']['push'](p), o['units']['forEach'](s => {
                        s['target'] === p && (s['setTarget'](null), s['findTarget']());
                    });
                }
            }, {
                'key': 'shieldShock',
                'name': '盾击',
                'description': o => '反制一个目标，打断其正在释放的技能，并阻止其' + (o + 0x5) + '秒内释放相同的技能',
                'coolDown': o => 0x2710 + 0x3e8 * o,
                'maxExp': o => o ** 0x2 * 0xc8 + 0x258 * o + 0x190,
                'canUse': (o, p) => !!o['units']['find'](q => p['willAttack'](q) && (null !== q['casting'] && !q['casting']['notBreakable'] || null !== q['reading'] && q['reading']['skill'] && !q['reading']['skill']['notBreakable'])),
                'effect'(o, p, q) {
                    const s = o['units']['find'](u => p['willAttack'](u) && (null !== u['casting'] && !u['casting']['notBreakable'] || null !== u['reading'] && u['reading']['skill'] && !u['reading']['skill']['notBreakable']));
                    o['testDodge'](p, s, this) || (o['sendSkillUsage'](p, null, this), s['breakCasting'](0x1388 + 0x3e8 * q));
                }
            }, {
                'key': 'knight.heal',
                'name': '圣光术',
                'description': '治疗一个队友',
                'castTime': 0xbb8,
                'coolDown': 0x7530,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!o['units']['find'](q => q !== p && p['willAssist'](q) && q['maxHp'] - q['hp'] >= 0x64),
                'effect'(o, p, q) {
                    const s = o['units']['filter'](u => u !== p && p['willAssist'](u) && u['maxHp'] - u['hp'] >= 0x64)['sort']((u, v) => v['maxHp'] - v['hp'] - (u['maxHp'] - u['hp']))[0x0];
                    s && (o['sendSkillUsage'](p, [s], this), s['hp'] += p['maxHp'] / 0x5);
                }
            }, {
                'key': 'knight.shout',
                'name': '战斗怒吼',
                'description': o => '在未来30秒内增加所有同伴' + (0xa + 0xa * o | 0x0) + '%护甲。',
                'coolDown': 0x7530,
                'maxExp': o => o ** 0x2 * 0x64 + 0x12c * o + 0xc8,
                'canUse': (o, p) => 'home' !== o['map'],
                'effect'(o, p, q) {
                    o['sendSkillUsage'](p, null, this), o['units']['filter'](s => s === p || p['willAssist'](s))['forEach'](s => {
                        s['addBuff']('shout', 0x7530, 0x1, 'shout');
                    });
                }
            }, {
                'key': 'necromancer.ghostShield',
                'name': '幽魂护卫',
                'description': '召唤伙伴来共同作战',
                'coolDown': 0xafc8,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !o['units']['find'](q => 'chapter3.undead.ghostShield' === q['type']),
                'effect'(o, p, q) {
                    o['sendSkillUsage'](p, null, this), o['addEnemy']('chapter3.undead.ghostShield', null, 0x0, p), o['addEnemy']('chapter3.undead.ghostShield', null, 0x0, p), o['addEnemy']('chapter3.undead.ghostShield', null, 0x0, p);
                }
            }, {
                'key': 'ghostShield',
                'name': '幽魂护卫',
                'description': '使奈布免疫所有伤害',
                'castTime': 0x1f4,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!o['units']['find'](q => 'chapter3.necromancer' === q['type']),
                'effect'(o, p, q) {
                    o['units']['find'](s => 'chapter3.necromancer' === s['type'])['addBuff']('ghostShield', 0x3e8, null, 'ghostShield');
                }
            }, {
                'key': 'shaman.darkball',
                'name': '暗影箭',
                'description': '造成50点暗影伤害',
                'coolDown': 0x2710,
                'castTime': 0x7d0,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {target: s, atk: u} = p;
                    o['testDodge'](p, s, this) || o['sendDamage']('dark', p, s, this, 0.45 * u, !0x1);
                }
            }, {
                'key': 'darkElement.darkball',
                'name': '暗影箭',
                'description': '造成50点暗影伤害',
                'castTime': 0x7d0,
                'coolDown': 0x3e8,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {target: s, atk: u} = p;
                    o['testDodge'](p, s, this) || o['sendDamage']('dark', p, s, this, 0.45 * u, !0x1);
                }
            }, {
                'key': 'simba.heal',
                'name': '治疗波',
                'description': '治疗一个队友',
                'castTime': 0xdac,
                'coolDown': 0x61a8,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!o['units']['find'](q => p['willAssist'](q) && q['maxHp'] - q['hp'] >= 0xbb8),
                'effect'(o, p, q) {
                    const s = o['units']['filter'](u => p['willAssist'](u) && u['maxHp'] - u['hp'] >= 0xbb8)['sort']((u, v) => v['maxHp'] - v['hp'] - (u['maxHp'] - u['hp']))[0x0];
                    s && (o['sendSkillUsage'](p, [s], this), s['hp'] += 0xbb8);
                }
            }, {
                'key': 'simba.thumpHead',
                'name': '冲撞',
                'group': 'thump',
                'description': o => {
                    const p = 0x1 + 0.1 * o;
                    return '对目标造成攻击力的' + (0x0 | 0xc8 * p) + '%-' + (0x0 | 0x118 * p) + '%伤害，并使目标昏迷' + (o + 0x5) / 0x2 + '秒。';
                },
                'coolDown': 0x61a8,
                'maxExp': o => o ** 0x2 * 0x96 + 0x1c2 * o + 0x12c,
                'canUse': (o, p) => !!p['target'],
                'effect'(p, q, v) {
                    const {target: w, atk: x, leech: y = 0x0, critRate: z = 0x0, critBonus: A = 1.5} = q;
                    if (p['testDodge'](q, w, this)) return;
                    const B = x * (0.8 * Math['random']() + 0.5), C = q['testCrit']();
                    p['sendDamage']('melee', q, w, this, q['getCritBonus'](C) * B, C), y && (q['hp'] += y), w['breakCasting'](), w['stun'](0x1), w['rp'] += w['rpOnAttacked'], w['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'shaman.iceball',
                'name': '寒冰箭',
                'description': '造成50点寒冷呢伤害',
                'coolDown': 0x2710,
                'castTime': 0x7d0,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {target: s, atk: u} = p;
                    o['testDodge'](p, s, this) || o['sendDamage']('cold', p, s, this, u, !0x1);
                }
            }, {
                'key': 'murloc.thumpHead',
                'name': '鱼人大军',
                'description': '召唤大量悍不畏死的小鱼人，向敌人发起冲锋',
                'coolDown': 0x7530,
                'effect'(o, p, q) {
                    p['startRead']('murloc.thumpHead', 0x1389, null, this);
                }
            }, {
                'key': 'murloc.army.thumpHead',
                'name': '冰霜冲锋',
                'castTime': 0xbb8,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !0x0,
                'effect'(p, q, s) {
                    const {atk: u} = q, v = p['units']['filter'](y => 'player' === y['camp']),
                        w = v[Math['floor'](Math['random']() * v['length'])];
                    if (!w || p['testDodge'](q, w, this)) return void q['kill']();
                    const x = u * (0.5 * Math['random']() + 0x1);
                    p['sendDamage']('cold', q, w, this, x, !0x1), w['breakCasting'](), w['stun'](0x1), w['rp'] += w['rpOnAttacked'], w['runAttrHooks'](q, 'attacked'), q['kill']();
                }
            }, {
                'key': 'murloc.shieldShout',
                'name': '水之庇护',
                'description': o => '为所有同伴增加一个护盾，吸收3000点伤害。',
                'coolDown': 0x7530,
                'castTime': 0x7d0,
                'maxExp': o => o ** 0x2 * 0x64 + 0x12c * o + 0xc8,
                'canUse': (o, p) => 'home' !== o['map'],
                'effect'(o, p, q) {
                    o['sendSkillUsage'](p, null, this), o['units']['filter'](s => s === p || p['willAssist'](s))['forEach'](s => {
                        s['addBuff']('murloc.waterShield', 0x7530, 0xbb8);
                    });
                }
            }, {
                'key': 'fishzilla.summonSlaves',
                'name': '召唤奴隶',
                'description': '召唤伙伴来共同作战',
                'coolDown': 0x2710,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => o['units']['filter'](q => q['camp'] === p['camp'])['length'] < 0x14,
                'effect'(o, p, q) {
                    o['sendSkillUsage'](p, null, this), o['addEnemy']('chapter3.murloc.slaves', null, 0x0, p);
                }
            }, {
                'key': 'fishzilla.focus',
                'name': '奥术射线',
                'coolDown': 0xa,
                'canUse': (o, p) => !!o['units']['find'](q => 'chapter3.fishzilla' === q['type']),
                'effect'(o, p, q) {
                    const s = o['units']['find'](u => 'chapter3.fishzilla' === u['type']);
                    p['target'] !== s && (p['target'] = s), p['startRead']('fishzilla.focus', 0x186a0, null, this);
                }
            }, {
                'key': 'fishzilla.bomb',
                'name': '冰箭乱射',
                'description': '对全体敌人造成300点冰霜伤害',
                'castTime': 0x7d0,
                'coolDown': o => 0x4e20 - 0x3e8 * o,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !0x0,
                'effect'(o, p, q) {
                    const {atk: s, critRate: u = 0x0, critBonus: v = 1.5} = p;
                    o['units']['filter'](w => p['willAttack'](w))['forEach'](w => {
                        if (o['testDodge'](p, w, this)) return;
                        const x = p['testCrit']();
                        o['sendDamage']('cold', p, w, this, p['getCritBonus'](x) * s, x);
                    });
                }
            }, {
                'key': 'waterElement.waterArrow',
                'name': '水箭术',
                'description': '造成30点冰冷伤害',
                'castTime': 0x7d0,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {target: s, atk: u} = p;
                    if (o['testDodge'](p, s, this)) return;
                    const v = p['testCrit']();
                    o['sendDamage']('cold', p, s, this, p['getCritBonus'](v) * u, v);
                }
            }, {
                'key': 'waterElement.waterArrow.notBreakable',
                'name': '水箭术',
                'description': '造成30点冰冷伤害',
                'castTime': 0x7d0,
                'notBreakable': !0x0,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {target: s, atk: u} = p;
                    if (o['testDodge'](p, s, this)) return;
                    const v = p['testCrit']();
                    o['sendDamage']('cold', p, s, this, p['getCritBonus'](v) * u, v);
                }
            }, {
                'key': 'azathoth.transformIce',
                'name': '形态转换',
                'castTime': 0xbb8,
                'notBreakable': !0x0,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => p['hp'] < 0.7 * p['maxHp'],
                'effect'(o, p, q) {
                    p['transformType']('chapter3.element.azathoth.ice');
                }
            }, {
                'key': 'azathoth.transformEarth',
                'name': '形态转换',
                'castTime': 0xbb8,
                'notBreakable': !0x0,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => p['hp'] < 0.4 * p['maxHp'],
                'effect'(o, p, q) {
                    p['transformType']('chapter3.element.azathoth.earth');
                }
            }, {
                'key': 'azathoth.transformDark',
                'name': '形态转换',
                'castTime': 0xbb8,
                'notBreakable': !0x0,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => p['hp'] < 0.2 * p['maxHp'],
                'effect'(o, p, q) {
                    p['transformType']('chapter3.element.azathoth.dark');
                }
            }, {
                'key': 'azathoth.explode',
                'name': '同归于尽',
                'castTime': 0x7530,
                'notBreakable': !0x0,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !0x0,
                'effect'(o, p, q) {
                    for (const s of o['units']['filter'](u => p['willAttack'](u))) o['sendDamage']('real', p, s, this, 0x7a120, !0x0);
                    p['transformType']('chapter3.element.azathoth.none'), p['kill']();
                }
            }, {
                'key': 'enemy.upgrade',
                'name': '愤怒',
                'description': '增加10%攻击力',
                'coolDown': 0x7530,
                'effect'(o, p, q) {
                    p['addBuff']('enemy.upgrade');
                }
            }, {
                'key': 'waterElement.waterFlow',
                'name': '激流',
                'description': '造成30点冰冷伤害',
                'notBreakable': !0x0,
                'castTime': 0xfa0,
                'coolDown': 0x7530,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {target: s, atk: u} = p;
                    o['sendDamage']('cold', p, s, this, 0xf * u, !0x1);
                }
            }, {
                'key': 'orcs.summonWolf',
                'cost': {'ep': 0x32},
                'name': '召唤狼群',
                'description': '召唤伙伴来共同作战',
                'castTime': 0x3e8,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => o['units']['filter'](q => q['camp'] === p['camp'])['length'] < 0x14,
                'effect'(o, p, q) {
                    o['sendSkillUsage'](p, null, this), o['addEnemy']('chapter3.orcs.wolf', null, 0x0, p);
                }
            }, {
                'key': 'wolf.worry',
                'name': '撕咬',
                'coolDown': 0x4e20,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {target: s} = p;
                    o['sendSkillUsage'](p, [s], this), s['addBuff']('wolf.worry', 0x2710, p['atk'], 'wolf.worry');
                }
            }, {
                'key': 'shaman.chainingLightning',
                'name': '闪电链',
                'description': '对随机5个敌人造成伤害，伤害依次减少20%',
                'castTime': 0x3e8,
                'coolDown': 0x1f40,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'] && p['hp'] <= 0.6 * p['maxHp'],
                'effect'(o, p, q) {
                    const s = o['units']['filter'](v => p['canAttack'](v));
                    let u = p['atk'];
                    for (let v = 0x0; v < 0x5 && !(s['length'] < 0x1); v++) {
                        const w = Math['floor'](Math['random']() * s['length']), x = s['splice'](w, 0x1)[0x0];
                        o['testDodge'](p, x, this) || (o['sendDamage']('lightning', p, x, this, u, !0x1), u *= 0.8);
                    }
                }
            }, {
                'key': 'lightningElement.chainingLightning',
                'name': '闪电链',
                'description': '对随机3个敌人造成伤害，伤害依次减少20%',
                'castTime': 0x7d0,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(p, q, u) {
                    const {atk: v, critRate: w = 0x0, critBonus: x = 1.5} = q, y = Math['random']() < w,
                        z = p['units']['filter'](B => q['canAttack'](B));
                    let A = y ? v * x : v;
                    for (let B = 0x0; B < 0x3 && !(z['length'] < 0x1); B++) {
                        const C = Math['floor'](Math['random']() * z['length']), D = z['splice'](C, 0x1)[0x0];
                        p['testDodge'](q, D, this) || (p['sendDamage']('lightning', q, D, this, A, y), A *= 0.8);
                    }
                }
            }, {
                'key': 'lightningElement.stunAll',
                'name': '乱雷',
                'coolDown': 0x2710,
                'castTime': 0x3e8,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {atk: s, critRate: u = 0x0, critBonus: v = 1.5} = p;
                    o['units']['filter'](w => p['willAttack'](w))['forEach'](w => {
                        if (o['testDodge'](p, w, this)) return;
                        const x = s * (0.4 * Math['random']() + 0.6) * (0x1 + 0.2 * q), y = p['testCrit']();
                        o['sendDamage']('lightning', p, w, this, p['getCritBonus'](y) * x, y), w['stun'](0x1), w['breakCasting'](), w['rp'] += w['rpOnAttacked'], w['runAttrHooks'](p, 'attacked');
                    });
                }
            }, {
                'key': 'orcs.summonHealToken',
                'name': '治疗图腾',
                'description': '召唤伙伴来共同作战',
                'castTime': 0x3e8,
                'coolDown': 0x3a98,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => o['units']['filter'](q => q['camp'] === p['camp'])['length'] < 0x14 && p['hp'] <= 0.3 * p['maxHp'],
                'effect'(o, p, q) {
                    o['sendSkillUsage'](p, null, this), o['addEnemy']('chapter3.orcs.totem', null, 0x0, p);
                }
            }, {
                'key': 'totem.heal',
                'name': '治愈之雨',
                'description': '治疗所有盟友100点生命。',
                'castTime': 0x3e8,
                'maxExp': o => o ** 0x2 * 0x96 + 0x1c2 * o + 0x12c,
                'canUse': (o, p) => !0x0,
                'effect'(o, p, q) {
                    const s = o['units']['filter'](u => p !== u && p['willAssist'](u));
                    for (const u of s) u['hp'] += 0x3e8;
                }
            }, {
                'key': 'chapter4.humans.seck.summonDarkSoul',
                'name': '召唤虚空行者',
                'coolDown': 0x5dc,
                'cost': {'mp': 0x3e8},
                'description': (o, p) => {
                    const {int: q} = p;
                    return '召唤一个火焰精灵，使用火球术攻击你的敌人，每次攻击造成' + (0x0 | 0x5 * (p['level'] * UNIT_LEVEL_RATE + 0x1) * (0.01 * q + 0x1) * (0.3 * o + 0x1)) + '伤害，持续15秒。';
                },
                'maxExp': o => o ** 0x2 * 0xc8 + 0x258 * o + 0x190,
                'canUse': (o, p) => o['units']['filter'](q => 'chapter4.humans.monster' === q['type'])['length'] < 0x1,
                'effect'(o, p, q) {
                    const s = o['addEnemy']('chapter4.humans.monster', null, 0x0, p, this);
                    p['runAttrHooks'](s, 'summonedUnit');
                }
            }, {
                'key': 'chapter4.humans.seck.healthDrill',
                'name': '生命汲取',
                'castTime': 0xbb8,
                'coolDown': 0x4e20,
                'description': (o, p) => {
                    const {int: q} = p;
                    return '对目标造成' + (0x0 | 0xa * (p['level'] * UNIT_LEVEL_RATE + 0x1) * (0.01 * q + 0x1) * (0.3 * o + 0x1)) + '伤害，为你恢复' + (0xa + o) + '%生命值。';
                },
                'maxExp': o => o ** 0x2 * 0xc8 + 0x258 * o + 0x190,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {atk: s, target: u} = p;
                    if (o['testDodge'](p, u, this)) return;
                    const v = s / 0x2;
                    o['sendHeal'](p, p, this, p['maxHp'] * (0.05 + 0.01 * q)), o['sendDamage']('dark', p, u, this, v);
                }
            }, {
                'key': 'chapter4.humans.women.thumpHead',
                'name': '魅惑',
                'group': 'thump',
                'description': o => {
                    const p = 0x1 + 0.1 * o;
                    return '对目标造成攻击力的' + (0x0 | 0xc8 * p) + '%-' + (0x0 | 0x118 * p) + '%伤害，并使目标昏迷' + (o + 0x5) / 0x2 + '秒。';
                },
                'coolDown': 0x61a8,
                'maxExp': o => o ** 0x2 * 0x96 + 0x1c2 * o + 0x12c,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {target: s} = p;
                    o['testDodge'](p, s, this) || (s['breakCasting'](), s['stun'](0x3));
                }
            }, {
                'key': 'chapter4.humans.seck.summonWomen',
                'name': '召唤魅魔',
                'coolDown': 0x5dc,
                'cost': {'mp': 0x3e8},
                'description': (o, p) => {
                    const {int: q} = p;
                    return '召唤一个火焰精灵，使用火球术攻击你的敌人，每次攻击造成' + (0x0 | 0x5 * (p['level'] * UNIT_LEVEL_RATE + 0x1) * (0.01 * q + 0x1) * (0.3 * o + 0x1)) + '伤害，持续15秒。';
                },
                'maxExp': o => o ** 0x2 * 0xc8 + 0x258 * o + 0x190,
                'canUse': (o, p) => o['units']['filter'](q => 'chapter4.humans.women' === q['type'])['length'] < 0x2,
                'effect'(o, p, q) {
                    const s = o['addEnemy']('chapter4.humans.women', null, 0x0, p, this);
                    p['runAttrHooks'](s, 'summonedUnit');
                }
            }, {
                'key': 'knight.glory.enemy',
                'name': '荣耀',
                'description': o => '荣耀的力量。为自己恢复' + (0xa + o) + '%生命值。需要三点圣能。',
                'coolDown': 0x4e20,
                'cost': {'comboPoint': 0x3},
                'maxExp': o => o ** 0x2 * 0xc8 + 0x258 * o + 0x190,
                'canUse': (o, p) => !0x0,
                'effect'(o, p, q) {
                    const s = o['units']['filter'](u => p['willAssist'](u))['sort']((u, v) => v['maxHp'] - v['hp'] - (u['maxHp'] - u['hp']))[0x0];
                    s && (o['sendHeal'](p, s, this, p['maxHp'] * (0.1 + 0.01 * q)), o['sendSkillUsage'](p, null, this));
                }
            }, {
                'key': 'knight.thumpHead.enemy',
                'name': '制裁之锤',
                'expGroup': 'knight.thumpHead',
                'description': o => '使目标昏迷' + (o + 0x3) + '秒。',
                'coolDown': 0x2710,
                'maxExp': o => o ** 0x2 * 0x12c + 0x1f4 * o + 0x258,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {target: s} = p;
                    s['stun'](0x2);
                }
            }, {
                'key': 'enemy.fearas.summonTrigger',
                'name': '召唤陷阱',
                'description': o => '召唤一个随机品牌的地雷。当心！',
                'coolDown': 0x7d0,
                'maxExp': o => o ** 0x2 * 0x12c + 0x1f4 * o + 0x258,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    o['sendSkillUsage'](p, null, this);
                    const s = ['chapter4.humans.trigger.5.1', 'chapter4.humans.trigger.5.2', 'chapter4.humans.trigger.5.3', 'chapter4.humans.trigger.5.4'],
                        u = s[Math['floor'](Math['random']() * s['length'])];
                    o['addEnemy'](u, null, 0x0, p), u === s[0x3] ? o['sendGeneralMsg']('额，拿错了。') : o['sendGeneralMsg']('菲尔斯放置了一个地雷，快拆掉它！');
                }
            }, {
                'key': 'enemy.fearas.bomb',
                'name': '爆裂',
                'description': '对全体造成100点火焰伤害',
                'castTime': 0x1388,
                'notBreakable': !0x0,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !0x0,
                'effect'(o, p, q) {
                    o['units']['filter'](s => p['canAttack'](s))['forEach'](s => {
                        o['testDodge'](p, s, this) || o['sendDamage']('fire', p, s, this, p['atk'], !0x1);
                    }), p['kill']();
                }
            }, {
                'key': 'enemy.fearas.bomb1',
                'name': '爆裂',
                'description': '对全体造成100点火焰伤害',
                'castTime': 0x1388,
                'notBreakable': !0x0,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !0x0,
                'effect'(o, p, q) {
                    o['sendGeneralMsg']('这是一颗哑炮。'), p['kill']();
                }
            }, {
                'key': 'enemy.fearas.bomb2',
                'name': '损坏',
                'description': '一会就坏了',
                'castTime': 0x1388,
                'notBreakable': !0x0,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !0x0,
                'effect'(o, p, q) {
                    p['kill']();
                }
            }, {
                'key': 'enemy.evil.reading1',
                'name': '精神鞭笞',
                'description': '造成持续的伤害',
                'notBreakable': !0x0,
                'coolDown': 0x3a98,
                'effect'(o, p, q) {
                    p['startRead']('enemy.evil.reading1', 0x1389, null, this);
                }
            }, {
                'key': 'enemy.evil.control',
                'name': '精神控制',
                'description': '造成持续的伤害',
                'notBreakable': !0x0,
                'coolDown': 0x2710,
                'castTime': 0x1f4,
                'canUse': (o, p) => !!o['units']['find'](q => 'chapter4.humans.boss.milhous' === q['type']),
                'effect'(o, p, q) {
                    const s = o['units']['find'](u => 'chapter4.humans.boss.milhous' === u['type']);
                    s && s['addBuff']('enemy.evil.control', null, null, 'control'), o['sendGeneralMsg']('米尔豪斯晕了头！快让他恢复正常！');
                }
            }, {
                'key': 'shamansa.spew',
                'name': '呕吐',
                'maxExp': o => 0x56bc75e2d63100000,
                'coolDown': 0x61a8,
                'notBreakable': !0x0,
                'canUse': (o, p) => !!p['target'],
                'description': '将刚吃下去的吐出来',
                'effect'(o, p, q) {
                    p['startRead']('shamansa.spew', 0x1389, null, this);
                }
            }, {
                'key': 'rosa.sleepy',
                'name': '昏昏欲睡',
                'description': o => {
                    const p = 0x1 + 0.1 * o;
                    return '对目标造成攻击力的' + (0x0 | 0xc8 * p) + '%-' + (0x0 | 0x118 * p) + '%伤害，并使目标昏迷' + (o + 0x5) / 0x2 + '秒。';
                },
                'coolDown': 0x61a8,
                'maxExp': o => o ** 0x2 * 0x96 + 0x1c2 * o + 0x12c,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const s = o['units']['filter'](u => p['canAttack'](u));
                    for (const u of s) u['breakCasting'](), u['stun'](0x3);
                }
            }, {
                'key': 'rosa.angry',
                'name': '起床气',
                'description': '增加300%攻击速度，持续4秒。',
                'targetType': 'target',
                'castTime': 0xbb8,
                'coolDown': 0x7530,
                'notBreakable': !0x0,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    p['addBuff']('rosa.angry', 0x1388);
                }
            }, {
                'key': 'chapter5.daughter.monster2',
                'name': '幽闭',
                'description': o => '使目标昏迷' + (o + 0x3) + '秒。',
                'coolDown': 0x7530,
                'castTime': 0xbb8,
                'maxExp': o => o ** 0x2 * 0x12c + 0x1f4 * o + 0x258,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {target: s} = p;
                    s['breakCasting'](), s['stun'](0x2);
                }
            }, {
                'key': 'chapter5.daughter.monster4',
                'name': '惊慌失措',
                'description': '增加300%攻击速度，持续4秒。',
                'targetType': 'target',
                'castTime': 0xbb8,
                'coolDown': 0x7530,
                'notBreakable': !0x0,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    p['addBuff']('rosa.angry', 0x1388);
                }
            }, {
                'key': 'ariel_skill1',
                'name': '圣光弹',
                'description': '',
                'coolDown': 0x1f40,
                'castTime': 0x1f4,
                'maxExp': o => o ** 0x2 * 0xc8 + 0x258 * o + 0x190,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {target: s} = p, u = (0.5 * p['atk'] + 3.5) * (0.9 + 0.2 * Math['random']());
                    o['sendDamage']('light', p, s, this, u, !0x1);
                }
            }, {
                'key': 'ariel_skill2',
                'name': '白热',
                'coolDown': 0x5dc,
                'description': (o, p) => {
                    const q = (0.9 * p['atk'] + p['str'] * (0.25 + 0.005 * o)) * (0.06 * o + 0x1) / 0x4;
                    return '连续攻击2次，根据自身攻击力和力量，每次对随机目标造成' + Math['round'](0.9 * q) + '-' + Math['round'](1.1 * q) + '点物理伤害。\x0a\x20\x20\x09\x09每“牺牲”技能等级，伤害提高1%。\x0a\x20\x20\x09\x09携带“狂热”时，伤害提高25%。\x0a\x20\x20\x09\x09携带“救赎”时，攻击次数+1。';
                },
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {target: s} = p, u = o['units']['filter'](v => v !== s && p['willAttack'](v));
                    for (let v = 0x0; v < 0x2; v++) {
                        let w = s;
                        u['length'] > 0x0 && (!p['target'] || Math['random']() < 0.8) && (w = u[Math['floor'](Math['random']() * u['length'])]);
                        let x = (0.9 * p['atk'] + 2.5) * (0.9 + 0.2 * Math['random']()) / 0x4;
                        o['sendDamage']('melee', p, w, this, x, !0x1), w['runAttrHooks'](p, 'attacked');
                    }
                }
            }];
        }, 5218: (m, o, p) => {
            m['exports'] = [...p(0x1c51), ...p(0xfac), ...p(0x20e1), ...p(0x1621), ...p(0x152e), ...p(0xc0), ...p(0x26d1), ...p(0x11ea), ...p(0x1bec), ...p(0x2049), ...p(0x12ad), ...p(0xcae)];
        }, 8265: m => {
            m['exports'] = [{
                'key': 'karon_tombstone',
                'name': '天降墓碑',
                'coolDown': 0x4650,
                'notBreakable': !0x0,
                'description': (o, p) => '每秒召唤一块墓碑，持续5秒。\x0a\x09\x09\x09墓碑：墓碑入场时立即对所有目标造成' + Math['round']((0x50 + 0x2 * o) / 0x64 * p['atk']) + '-' + Math['round']((0x5a + 0x3 * o) / 0x64 * p['atk']) + '点暗属性伤害；自爆后再次对所有目标造成' + Math['round']((0x14 + 0x1 * o) / 0x64 * p['atk']) + '-' + Math['round']((0x19 + 0x1 * o) / 0x64 * p['atk']) + '点暗属性伤害',
                'cost': {'mp': 0x2d},
                'maxExp': o => o ** 0x2 * 0x64 + 0x12c * o + 0xc8,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    p['startRead']('karon_tombstonesummon_buff', 0x138d, null, this);
                }
            }, {
                'key': 'karon_tombstoneplus',
                'name': '坟头蹦迪',
                'coolDown': 0x9c40,
                'notBreakable': !0x0,
                'description': (o, p) => (Math['round']((0x190 + 0x28 * o) / 0x64 * p['atk']), Math['round']((0x1f4 + 0x32 * o) / 0x64 * p['atk']), '召唤一个坟头上场。\x0a\x09\x09\x09坟头：携带“蹦迪”、“自爆”技能。'),
                'cost': {'mp': 0x96},
                'maxExp': o => o ** 0x2 * 0x64 + 0x12c * o + 0xc8,
                'canUse': (o, p) => !o['units']['find'](q => 'karon_summon_tombstoneplus' === q['type']),
                'effect'(o, p, q) {
                    o['addEnemy']('karon_summon_tombstoneplus', null, 0x0, p, this);
                }
            }, {
                'key': 'karon_dark_jige',
                'name': '吉哥降临',
                'coolDown': 0x4e20,
                'castTime': 0x1388,
                'description': (o, p) => (Math['round']((0x190 + 0x28 * o) / 0x64 * p['atk']), Math['round']((0x1f4 + 0x32 * o) / 0x64 * p['atk']), '召唤神官吉哥上场。\x0a\x09\x09\x09吉哥：携带“鬼斩”、“天降墓碑”、“自爆”技能。'),
                'cost': {'mp': 0x1c2},
                'maxExp': o => o ** 0x2 * 0x64 + 0x12c * o + 0xc8,
                'canUse': (o, p) => !o['units']['find'](q => 'karon_summon_jige' === q['type']),
                'effect'(o, p, q) {
                    o['addEnemy']('karon_summon_jige', null, 0x0, p, this);
                }
            }];
        }, 5665: m => {
            function o(p) {
                let q = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : 0x1;
                const s = p['runAttrHooks'](0x3, 'maxComboPoint');
                p['runAttrHooks'](q, 'holyCombo'), p['comboPoint'] = Math['min'](s, p['comboPoint'] + q);
            }

            m['exports'] = [{
                'key': 'knight.melee',
                'name': '攻击',
                'group': 'melee',
                'expGroup': 'melee',
                'description': p => {
                    const q = 0x1 + 0.2 * p;
                    return '正义的一击。对目标造成攻击力的' + (0x0 | 0.75 * q * 0x64) + '%-' + (0x0 | 1.25 * q * 0x64) + '%伤害，产生一点圣能。';
                },
                'coolDown': 0x9c4,
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    const y = x * (0.5 * Math['random']() + 0.75) * (0.2 * u + 0x1), z = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](z) * y, z), w && (q['hp'] += w), o(q), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'knight.thump',
                'group': 'thump',
                'name': '重击',
                'expGroup': 'thump',
                'description': p => {
                    const q = 0x1 + 0.2 * p;
                    return '审判的一击。造成巨额的伤害。对目标造成攻击力的' + (0x0 | 0xfa * q) + '%-' + (0x0 | 0x15e * q) + '%伤害。需要三点圣能。';
                },
                'cost': {'comboPoint': 0x3},
                'coolDown': 0x1f4,
                'maxExp': p => p ** 0x2 * 0x258 + 0x708 * p + 0x4b0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, v) {
                    const {target: w, atk: x, leech: y = 0x0, critRate: z = 0x0, critBonus: A = 1.5} = q;
                    if (p['testDodge'](q, w, this)) return;
                    const B = x * (0.5 * Math['random']() + 0.8) * (v / 0x5 + 0x1), C = q['testCrit']();
                    p['sendDamage']('melee', q, w, this, q['getCritBonus'](C) * B, C), y && (q['hp'] += y), w['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'knight.cleave',
                'name': '顺劈斩',
                'group': 'melee',
                'description': (p, q) => {
                    const s = (0x1 + 0.2 * p) * q['runAttrHooks'](0x1, 'cleaveDamageRate');
                    return '制裁的一击。对最多三个目标分别造成(' + (0x0 | 0x1e * s) + '%-' + (0x0 | 0x2a * s) + '%)倍攻击力伤害，产生一点圣能。';
                },
                'coolDown': 0x9c4,
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, v) {
                    const {atk: w, target: x, leech: y = 0x0} = q, z = q['runAttrHooks'](0x1, 'cleaveDamageRate'),
                        A = w * (0.12 * Math['random']() + 0.3) * (v / 0x5 + 0x1) * z, B = q['testCrit']();
                    p['sendDamage']('melee', q, x, this, q['getCritBonus'](B) * A, B);
                    let C = 0.4;
                    p['units']['filter'](D => D !== x && q['willAttack'](D))['slice'](0x0, 0x2)['forEach'](D => {
                        if (p['testDodge'](q, D, this)) return;
                        const E = w * (0.12 * Math['random']() + 0.3) * (v / 0xa + 0x1);
                        C += 0.4, p['sendDamage']('melee', q, D, this, q['getCritBonus'](B) * E, B), D['runAttrHooks'](q, 'attacked');
                    }), y && (q['hp'] += y * C), o(q), x['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'knight.whirlwind',
                'name': '破邪斩',
                'description': p => {
                    const q = 0x1 + 0.2 * p;
                    return '荣耀的一击。对全体目标造成造成攻击力的' + (0x0 | 0x3c * q) + '%-' + (0x0 | 0x50 * q) + '%伤害。需要三点圣能。';
                },
                'coolDown': 0x320,
                'cost': {'comboPoint': 0x3},
                'maxExp': p => p ** 0x2 * 0x258 + 0x708 * p + 0x4b0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const v = q['atk'] * (0.2 * u + 0x1), w = p['units']['filter'](A => q['willAttack'](A)), {
                        critRate: x = 0x0,
                        critBonus: y = 1.5,
                        leech: z
                    } = q;
                    z && (q['hp'] += z), w['forEach'](A => {
                        if (p['testDodge'](q, A, this)) return;
                        const B = v * (0.2 * Math['random']() + 0.6), C = q['testCrit']();
                        p['sendDamage']('melee', q, A, this, q['getCritBonus'](C) * B, C), A['runAttrHooks'](q, 'attacked');
                    });
                }
            }, {
                'key': 'knight.holySign',
                'name': '圣光圣印',
                'group': 'sign',
                'coolDown': 0x1f40,
                'description': p => '在目标身上印上光明的圣印，每个伤害目标的人恢复其造成伤害的' + (0xa + 0x2 * p) + '%生命值，持续10秒。',
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    const u = 0.1 + 0.02 * s, {target: v} = q;
                    v['addBuff']('knight.holySign', 0x2710, u, 'knight.sign');
                }
            }, {
                'key': 'knight.damageSign',
                'name': '审判圣印',
                'group': 'sign',
                'coolDown': 0x1f40,
                'description': p => '在目标身上印上审判的圣印，当其攻击或释放技能时对周围所有你的敌人造成你攻击力的' + (0x0 | 0x64 * (0x1 + 0.2 * p) * 0.4) + '%伤害，持续10秒。',
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    const u = 0.4 * (0x1 + 0.2 * s), {target: v} = q;
                    v['addBuff']('knight.damageSign', 0x2710, u, 'knight.sign');
                }
            }, {
                'key': 'knight.thumpHead',
                'name': '制裁之锤',
                'expGroup': 'knight.thumpHead',
                'description': p => '使目标昏迷' + (p + 0x5) + '秒。',
                'coolDown': 0x4e20,
                'maxExp': p => p ** 0x2 * 0x12c + 0x1f4 * p + 0x258,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    const {target: u} = q;
                    u['stun'](s + 0x5);
                }
            }, {
                'key': 'knight.sacrifice',
                'name': '牺牲',
                'group': 'melee',
                'expGroup': 'sacrifice',
                'description': p => {
                    const q = 0x1 + 0.2 * p;
                    return '绝望的一击。对目标造成攻击力的' + (0x0 | 0x1 * q * 0x64) + '%-' + (0x0 | 1.75 * q * 0x64) + '%伤害，你自己受到' + (0xf / q)['toFixed'](0x1) + '%的总伤害，产生一点圣能。';
                },
                'coolDown': 0x9c4,
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    let y = x * (0.75 * Math['random']() + 0x1);
                    const z = q['testCrit']();
                    p['sendDamage']('melee', q, q, this, q['getCritBonus'](z) * y * 0.15, z), y *= 0.2 * u + 0x1, p['sendDamage']('melee', q, v, this, q['getCritBonus'](z) * y, z), w && (q['hp'] += w), o(q), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'knight.glory',
                'name': '荣耀',
                'description': p => '荣耀的力量。为自己恢复' + (0xa + p) + '%生命值。需要三点圣能。',
                'coolDown': 0x2710,
                'cost': {'comboPoint': p => p['runAttrHooks'](!0x1, 'cheapGlory') ? 0x0 : 0x3},
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'effect'(p, q, s) {
                    p['sendHeal'](q, q, this, q['maxHp'] * (0.1 + 0.01 * s)), p['sendSkillUsage'](q, null, this);
                }
            }, {
                'key': 'knight.reflect',
                'name': '盾牌反射',
                'description': p => '受到法术伤害时，抵挡其伤害，并对伤害来源造成' + (0x14 + 0x4 * p) + '%的伤害，持续' + (p + 0x5) + '秒。',
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'castTime': 0x7d0,
                'coolDown': p => 0x4e20 + 0x7d0 * p,
                'effect'(p, q, s) {
                    q['addBuff']('knight.shieldReflect', 0x3e8 * (s + 0x5), 0.2 + 0.04 * s);
                }
            }, {
                'key': 'knight.holyShield',
                'name': '保护祝福',
                'description': p => '在未来' + (p + 0x3) + '秒内，免疫所有的物理伤害。只会在生命值小于50%时使用。同时获得三点圣能。',
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'coolDown': p => 0x7530 + 0x7d0 * p,
                'shouldUse': (p, q) => q['hp'] < q['maxHp'] / 0x2,
                'effect'(p, q, s) {
                    q['addBuff']('holyShield', 0x3e8 * (s + 0x3)), o(q, 0x3);
                }
            }, {
                'key': 'knight.kick',
                'name': '盾击',
                'description': p => '用盾牌冲撞敌人，打断其正在释放的技能，并阻止其5秒内释放相同的技能',
                'coolDown': p => 0x2710 / (0x1 + 0.1 * p),
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => !!p['units']['find'](s => q['willAttack'](s) && (null !== s['casting'] && !s['casting']['notBreakable'] || null !== s['reading'] && s['reading']['skill'] && !s['reading']['skill']['notBreakable'])),
                'effect'(p, q, s) {
                    const u = p['units']['find'](v => q['willAttack'](v) && (null !== v['casting'] && !v['casting']['notBreakable'] || null !== v['reading'] && v['reading']['skill'] && !v['reading']['skill']['notBreakable']));
                    p['sendSkillUsage'](q, null, this), u['breakCasting'](0x1388);
                }
            }, {
                'key': 'knight.pray',
                'name': '祈祷',
                'coolDown': 0x4e20,
                'description': p => '在战斗的同时念诵祈祷的颂词，在接下来10秒内每' + (0x5 / (0x1 + 0.2 * p))['toFixed'](0x1) + '秒获得一点圣能',
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    q['addBuff']('knight.pray', 0x2715, 0x1388 / (0x1 + 0.2 * s), 'knight.pray');
                }
            }, {
                'key': 'knight.melee1',
                'name': '驱邪术',
                'coolDown': 0xbb8,
                'description': p => {
                    const q = 0x1 + 0.2 * p;
                    return '用圣光的力量驱散邪恶。对目标造成攻击力的' + (0x0 | 0x1 * q * 0x64) + '%-' + (0x0 | 1.5 * q * 0x64) + '%伤害。';
                },
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, v) {
                    const {target: w, leech: x = 0x0, atk: y} = q;
                    if (p['testDodge'](q, w, this)) return;
                    const z = y * (0.5 * Math['random']() + 0x1) * (0.2 * v + 0x1), {
                        critRate: A = 0x0,
                        critBonus: B = 1.5
                    } = q, C = q['testCrit']();
                    p['sendDamage']('melee', q, w, this, q['getCritBonus'](C) * z, C), x && (q['hp'] += x), w['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'knight.deserve',
                'name': '奉献',
                'coolDown': 0x2710,
                'description': p => {
                    const q = 0x1 + 0.2 * p;
                    return '将圣光灌注到脚下的土地，在接下来的8秒内每2秒对所有敌人造成攻击力的' + (0x0 | 0x1e * q) + '%-' + (0x0 | 0x32 * q) + '%伤害。';
                },
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    q['addBuff']('knight.deserve', 0x2715, s, 'knight.deserve');
                }
            }];
        }, 4781: m => {
            m['exports'] = [{
                'key': 'paladin_skill1',
                'name': '牺牲',
                'group': '1',
                'coolDown': 0x5dc,
                'cost': {'mp': 0x1},
                'description': (o, p) => {
                    const q = (p['atk'] + p['str'] * (0.25 + 0.005 * o)) * (0.06 * o + 0x1);
                    return '以生命为代价,根据自身攻击力和力量，对目标造成' + Math['round'](0.9 * q) + '-' + Math['round'](1.1 * q) + '点物理伤害，自身损失当前生命值的5%。\x0a\x09\x09\x09每“白热”技能等级，伤害+1%。\x0a\x09\x09\x09同时携带“狂热”光环，造成的伤害+25%。\x0a\x09\x09\x09同时携带“救赎”，免除自身损失生命值的效果。';
                },
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w} = q, x = q['buffs']['find'](B => 'skill3_buff' === B['group']),
                        y = 0x1 + 0.01 * (q['player']['getSkillLevel']('paladin_skill6') || 0x0) + (q['runAttrHooks'](!0x1, 'skill17_buff') ? 0.25 : 0x0);
                    let z = (q['atk'] + q['str'] * (0.25 + 0.005 * u)) * (0.06 * u + 0x1) * q['dmgAdd'] * y * (0.9 + 0.2 * Math['random']()) * (x ? 0x2 : 0x1);
                    const A = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](A) * z, A), 0x1 === q['runAttrHooks'](0x1, 'pal_enhance11') && (q['hp'] = 0.95 * q['hp']), w && (q['hp'] += w), q['removeBuff'](x), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'paladin_skill2',
                'name': '力量',
                'group': '2',
                'halo': !0x0,
                'coolDown': 0x1388,
                'description': o => '物理伤害+' + Math['round'](0x64 + 0x2 * o) / 0xa + '%。\x0a\x09\x09\x09同时携带“祝福瞄准”，额外+10%物理伤害。\x0a\x09\x09\x09同时携带“反抗”，额外+10%物理伤害。\x0a\x09\x09\x09每5秒增加1点技能熟练度。',
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    p['removeBuff'](p['buffs']['find'](s => 'skill2_buff' === s['group'])), p['addBuff']('skill2_buff', 0x1388, 0.1 + 0.002 * q, 'skill2_buff');
                }
            }, {
                'key': 'paladin_skill3',
                'name': '盾击',
                'group': '4',
                'description': (o, p) => '虽然我会炖鸡，但兄弟你记得要带盾啊。\x0a\x09\x09\x09用盾牌猛击敌人，根据自身物理防御，对目标造成' + Math['round'](p['def'] * (0.5 + 0.01 * o)) + '点物理伤害，并使其昏迷1秒。\x0a\x09\x09\x09同时携带“力量”，昏迷时间增加0.5秒。\x0a\x09\x09\x09同时携带“荆棘”，下一个“牺牲”伤害+100%。\x0a\x09\x09\x09同时携带“反抗”，盾击的伤害+' + Math['round'](p['def'] / (p['def'] + 0x1388) * 0x64 + 0x2 * o) + '%。',
                'coolDown': 0x1f40,
                'cost': {'mp': 0x5},
                'maxExp': o => o ** 0x2 * 0xc8 + 0x258 * o + 0x190,
                'canUse'(o, p) {
                    const {weapon: q} = p['player']['equipments'];
                    return !!p['target'] && 'swordshield' === q['goodData']['class'];
                },
                'effect'(p, q, u) {
                    const {target: v, def: w, leech: x = 0x0} = q,
                        y = Math['round'](q['def'] * (0.5 + 0.01 * u) * q['dmgAdd']) * (0x1 + (q['runAttrHooks'](!0x1, 'pal_enhance3') ? q['def'] / (q['def'] + 0x1388) + u / 0x32 : 0x0)),
                        z = q['testCrit']();
                    v['breakCasting'](), v['addBuff']('stunned', 0x3e8 + (q['runAttrHooks'](!0x1, 'skill2_buff') ? 0x1f4 : 0x0), null, 'stunned'), p['sendDamage']('melee', q, v, this, q['getCritBonus'](z) * y, z), q['runAttrHooks'](!0x1, 'pal_enhance4') && q['addBuff']('skill3_buff', null, null, 'skill3_buff'), x && (q['hp'] += x), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'paladin_skill4',
                'name': '圣光弹',
                'description': (o, p) => {
                    const q = o + p['runAttrHooks'](0x0, 'allskillLv') + p['runAttrHooks'](0x0, 'pdsk4'),
                        s = (0.8 * p['atk'] + (p['int'] + p['str']) * (0.35 + 0.006 * q)) * (0.06 * q + 0x1);
                    return '将神圣能量凝聚成飞弹，根据自身攻击力和力量、智力，对目标造成' + Math['round'](0.9 * s) + '-' + Math['round'](1.1 * s) + '点光伤害。\x0a\x09\x09\x09每“天堂之拳”技能等级，伤害+2%。\x0a\x09\x09\x09同时携带“祈祷”，治疗自身5%的生命值。\x0a\x09\x09\x09同时携带“净化”，冷却时间减少2秒。';
                },
                'coolDown': (o, p, q) => 0x2710 - (p['runAttrHooks'](!0x1, 'pal_enhance7') ? 0x7d0 : 0x0),
                'castTime': 0x1f4,
                'cost': {'mp': 0x5},
                'maxExp': o => o ** 0x2 * 0xc8 + 0x258 * o + 0x190,
                'canUse': (o, p) => !!p['target'],
                'effect'(p, q, u) {
                    const {target: v} = q,
                        w = u + q['runAttrHooks'](0x0, 'allskillLv') + q['runAttrHooks'](0x0, 'pdsk4'),
                        x = 0x1 + 0.02 * (q['player']['getSkillLevel']('paladin_skill5') || 0x0),
                        y = (0.8 * q['atk'] + (q['int'] || 0xa + q['str'] || 0xa) * (0.35 + 0.006 * w)) * (0.06 * w + 0x1) * x * (0.9 + 0.2 * Math['random']()) * (q['lightdmgAdd'] || 0x1),
                        z = q['testCrit']();
                    p['sendDamage']('light', q, v, this, q['getCritBonus'](z) * y, z), q['runAttrHooks'](!0x1, 'pal_enhance1') && p['sendHeal'](q, q, this, 0.05 * q['maxHp']), q['addBuff']('skill4_buff', 0x2710, null, 'skill4_buff');
                }
            }, {
                'key': 'paladin_skill5',
                'name': '神圣之火',
                'group': '3',
                'halo': !0x0,
                'coolDown': 0x1388,
                'description': (o, p) => {
                    const q = p['int'] * (0.08 * o + 0x1) / 0xa;
                    return '根据自身智力，每秒对所有目标造成' + Math['round'](0.9 * q) + '-' + Math['round'](1.1 * q) + '点火焰伤害。\x0a\x09\x09\x09每次造成物理伤害时，将额外附加' + Math['round'](p['int'] * (0.5 + 0.03 * o)) + '点火焰伤害。\x0a\x09\x09\x09同时携带“信念”，每秒使目标的火焰抗性永久减少' + p['player']['getSkillLevel']('paladin_skill16') + '点。\x0a\x09\x09\x09同时携带“救助”，额外附加的火焰伤害提高25%。\x0a\x09\x09\x09同时携带“火焰抵抗”，额外增加10%火焰吸收。\x0a\x09\x09\x09每5秒增加1点技能熟练度。';
                },
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    p['addBuff']('skill5_buff1', 0x1388, q, 'skill5_buff1');
                }
            }, {
                'key': 'paladin_skill6',
                'name': '白热',
                'group': '1',
                'coolDown': 0x5dc,
                'cost': {'mp': 0x2},
                'description': (o, p) => {
                    const q = (0.9 * p['atk'] + p['str'] * (0.25 + 0.005 * o)) * (0.06 * o + 0x1) / 0x4;
                    return '连续攻击3次，根据自身攻击力和力量，每次对随机目标造成' + Math['round'](0.9 * q) + '-' + Math['round'](1.1 * q) + '点物理伤害。\x0a\x09\x09\x09每“牺牲”技能等级，伤害提高1%。\x0a\x09\x09\x09携带“狂热”时，伤害提高25%。\x0a\x09\x09\x09携带“救赎”时，攻击次数+1。';
                },
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(p, q, u) {
                    const {target: v} = q, w = p['units']['filter'](x => x !== v && q['willAttack'](x));
                    for (let x = 0x0; x < 0x3 + (q['runAttrHooks'](!0x1, 'pal_enhance11') ? 0x1 : 0x0); x++) {
                        let y = v;
                        w['length'] > 0x0 && (!q['target'] || Math['random']() < 0.8) && (y = w[Math['floor'](Math['random']() * w['length'])]);
                        const z = 0x1 + 0.01 * q['player']['getSkillLevel']('paladin_skill1') + (q['runAttrHooks'](!0x1, 'skill17_buff') ? 0.25 : 0x0);
                        let A = (0.9 * q['atk'] + (q['str'] || 0xa) * (0.25 + 0.005 * u)) * (0.06 * u + 0x1) * (q['dmgAdd'] || 0x1) * z * (0.9 + 0.2 * Math['random']()) / 0x4;
                        const B = q['testCrit']();
                        p['sendDamage']('melee', q, y, this, q['getCritBonus'](B) * A, B), q['hp'] += 0.5 * (q['leech'] || 0x0), y['runAttrHooks'](q, 'attacked');
                    }
                }
            }, {
                'key': 'paladin_skill7',
                'name': '盾压',
                'group': '4',
                'description': (o, p) => '虽然我会炖鸭，但兄弟你记得要带盾啊。\x0a\x09\x09\x09用盾牌拍击敌人，根据自身物理防御，对目标造成' + Math['round'](p['def'] * (0x1 + 0.03 * o)) + '点物理伤害，10%几率触发“压碎性打击”。\x0a\x09\x09\x09压碎性打击：对目标造成其当前生命值25%的物理伤害，但最大不能超过自身物理防御的' + Math['round'](0x1f4 + 0xa * o) + '%。\x0a\x09\x09\x09携带“力量”时，“压碎性打击”的触发几率增加至25%。\x0a\x09\x09\x09携带“荆棘”时，下一个“牺牲”伤害+100%。\x0a\x09\x09\x09携带“反抗”时，“压碎性打击”的伤害上限×2。',
                'coolDown': 0x3a98,
                'cost': {'mp': 0xa},
                'maxExp': o => o ** 0x2 * 0xc8 + 0x258 * o + 0x190,
                'canUse'(o, p) {
                    const {weapon: q} = p['player']['equipments'];
                    return !!p['target'] && 'swordshield' === q['goodData']['class'];
                },
                'effect'(p, q, s) {
                    const {target: u, leech: v = 0x0} = q, w = q['def'] * (0x1 + 0.03 * s) * q['dmgAdd'],
                        x = q['testCrit']();
                    p['sendDamage']('melee', q, u, this, q['getCritBonus'](x) * w, x), Math['random']() < 0.1 + (q['runAttrHooks'](!0x1, 'skill2_buff') ? 0.15 : 0x0) && p['sendDamage']('melee', null, u, '压碎性打击', Math['min'](0.25 * u['hp'], q['def'] * (0x5 + 0.1 * s) * (q['runAttrHooks'](!0x1, 'pal_enhance3') ? 0x2 : 0x1)), !0x1), q['runAttrHooks'](!0x1, 'pal_enhance4') && q['addBuff']('skill3_buff', null, null, 'skill3_buff'), v && (q['hp'] += v), u['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'paladin_skill8',
                'name': '复仇',
                'group': '1',
                'description': (o, p) => {
                    const q = (p['atk'] + (p['int'] + p['str']) * (0.35 + 0.003 * o)) * (0.04 * o + 0x1) / 0x3;
                    return '根据自身攻击力、力量、智力，对目标分别造成' + Math['round'](0.9 * q) + '-' + Math['round'](1.1 * q) + '点火焰、寒冷、闪电伤害。\x0a\x09\x09\x09每“神圣之火”等级，造成的火焰伤害提高5%。\x0a\x09\x09\x09每“神圣冰冻”等级，造成的寒冷伤害提高5%。\x0a\x09\x09\x09每“神圣冲击”等级，造成的闪电伤害提高5%。\x0a\x09\x09\x09同时携带“信念”，每次命中使目标的火焰、寒冷、闪电抗性永久减少' + p['player']['getSkillLevel']('paladin_skill16') + '点。\x0a\x09\x09\x09同时携带“救助”，每次命中有50%的几率使目标受到的火焰、寒冷、闪电伤害+1%，可叠加。';
                },
                'coolDown': 0x5dc,
                'cost': {'mp': 0x5},
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(p, q, s) {
                    const {target: u, leech: v = 0x0} = q,
                        w = (q['atk'] + (q['int'] + q['str']) * (0.35 + 0.003 * s)) * (0.04 * s + 0x1) * (0.9 + 0.2 * Math['random']()) / 0x3,
                        x = q['testCrit']();
                    p['sendDamage']('fire', q, u, this, q['getCritBonus'](x) * w * (0x1 + 0.05 * q['player']['getSkillLevel']('paladin_skill5')) * q['firedmgAdd'], x), p['sendDamage']('cold', q, u, this, q['getCritBonus'](x) * w * (0x1 + 0.05 * q['player']['getSkillLevel']('paladin_skill9')) * q['colddmgAdd'], x), p['sendDamage']('lightning', q, u, this, q['getCritBonus'](x) * w * (0x1 + 0.05 * q['player']['getSkillLevel']('paladin_skill13')) * q['lightningdmgAdd'], x), q['runAttrHooks'](!0x1, 'skill16_buff') && (u['addBuff']('skill13_buff2', null, q['player']['getSkillLevel']('paladin_skill16')), u['addBuff']('skill9_buff2', null, q['player']['getSkillLevel']('paladin_skill16')), u['addBuff']('skill5_buff2', null, q['player']['getSkillLevel']('paladin_skill16'))), q['runAttrHooks'](!0x1, 'pal_enhance10') && Math['random']() < 0.5 && function (y, z) {
                        const A = z['buffs']['find'](B => 'skill8_buff' === B['group']);
                        A ? A['arg'] += 0.01 : z['addBuff']('skill8_buff', null, 0.01, 'skill8_buff');
                    }(0x0, u), v && (q['hp'] += v), u['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'paladin_skill9',
                'name': '神圣冰冻',
                'group': '3',
                'halo': !0x0,
                'coolDown': 0x1388,
                'description': (o, p) => {
                    const q = p['int'] * (0.08 * o + 0x1) / 0xa;
                    return '根据自身智力，每秒对所有目标造成' + Math['round'](0.9 * q) + '-' + Math['round'](1.1 * q) + '点寒冷伤害。\x0a\x09\x09\x09每次造成物理伤害时，将额外附加' + Math['round'](p['int'] * (0.5 + 0.03 * o)) + '点寒冷伤害。\x0a\x09\x09\x09同时携带“信念”，每秒使目标的寒冷抗性永久减少' + p['player']['getSkillLevel']('paladin_skill16') + '点。\x0a\x09\x09\x09同时携带“救助”，额外附加的寒冷伤害提高25%。\x0a\x09\x09\x09同时携带“寒冷抵抗”，额外增加10%寒冷吸收。\x0a\x09\x09\x09每5秒增加1点技能熟练度。';
                },
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    p['addBuff']('skill9_buff1', 0x1388, q, 'skill9_buff1');
                }
            }, {
                'key': 'paladin_skill10',
                'name': '祝福之锤',
                'description': (o, p) => {
                    const q = (p['atk'] + (p['int'] + p['str']) * (0.55 + 0.005 * o)) * (0.06 * o + 0x1);
                    return '大锤八十，小锤四十。\x0a\x09\x09\x09将神圣能量凝聚成一柄祝福之锤，根据自身攻击力、力量、智力，对所有目标造成' + Math['round'](0.9 * q) + '-' + Math['round'](1.1 * q) + '点光伤害。\x0a\x09\x09\x09同时携带“祝福瞄准”，技能暴击几率+25%。\x0a\x09\x09\x09同时携带“精力”，冷却时间减少3秒。\x0a\x09\x09\x09同时携带“专注”，额外对主目标造成一次350%的伤害。';
                },
                'coolDown': (o, p, q) => 0x3a98 - (p['runAttrHooks'](!0x1, 'pal_enhance8') ? 0xbb8 : 0x0),
                'cost': {'mp': 0xc},
                'castTime': 0x1f4,
                'maxExp': o => o ** 0x2 * 0xc8 + 0x258 * o + 0x190,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {target: s, leech: u = 0x0} = p;
                    for (const v of o['units']['filter'](w => p['willAttack'](w))) {
                        const w = (p['atk'] + (p['int'] + p['str']) * (0.55 + 0.005 * q)) * (0.06 * q + 0x1) * p['lightdmgAdd'] * (0.9 + 0.2 * Math['random']()),
                            x = p['testCrit'](critRate = Math['min'](p['critRate'] + (p['runAttrHooks'](!0x1, 'skill11_buff') ? 0.25 : 0x0), 0x1));
                        o['sendDamage']('light', p, v, this, p['getCritBonus'](x) * w, x);
                    }
                    if (p['runAttrHooks'](!0x1, 'skill11_buff')) {
                        const y = (p['atk'] + (p['int'] + p['str']) * (0.55 + 0.005 * q)) * (0.06 * q + 0x1) * p['lightdmgAdd'] * (0.9 + 0.2 * Math['random']()),
                            z = p['testCrit'](critRate = Math['min'](p['critRate'] + (p['runAttrHooks'](!0x1, 'skill11_buff') ? 0.25 : 0x0), 0x1));
                        o['sendDamage']('light', p, s, this, p['getCritBonus'](z) * y * 3.5, z);
                    }
                    s['runAttrHooks'](p, 'attacked');
                }
            }, {
                'key': 'paladin_skill11',
                'name': '专注',
                'group': '2',
                'halo': !0x0,
                'coolDown': 0x1388,
                'description': (o, p) => '暴击等级+' + 0.5 * p['level'] * o + '点，闪避值+' + 0.25 * p['level'] * o + '点。\x0a\x09\x09\x09同时携带“祝福瞄准”，暴击几率+10%。\x0a\x09\x09\x09同时携带“反抗”，闪避几率+10%。\x0a\x09\x09\x09每5秒增加1点技能熟练度。',
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    p['addBuff']('skill11_buff', 0x4e20, q, 'skill11_buff');
                }
            }, {
                'key': 'paladin_skill12',
                'name': '神圣之盾',
                'description': (o, p) => '虽然我不会炖猪脚，但兄弟你记得要带盾啊。\x0a\x09\x09\x09用神圣的力量强化你的盾牌，火焰、寒冷、闪电抗性+' + 0.25 * p['level'] * o + '点，受到物理伤害时有15%几率格挡。\x0a\x09\x09\x09格挡：使受到的物理伤害减少50%。\x0a\x09\x09\x09同时携带“力量”，格挡几率提高至25%。\x0a\x09\x09\x09同时携带“反抗”，所有伤害吸收+20%。',
                'coolDown': 0x61a8,
                'cost': {'mp': 0x16},
                'castTime': 0x1f4,
                'maxExp': o => o ** 0x2 * 0x258 + 0x708 * o + 0x4b0,
                'canUse'(o, p) {
                    const {weapon: q} = p['player']['equipments'];
                    return !!p['target'] && 'swordshield' === q['goodData']['class'];
                },
                'effect'(o, p, q) {
                    p['addBuff']('skill12_buff', 0x61a8, q, 'skill12_buff');
                }
            }, {
                'key': 'paladin_skill13',
                'name': '神圣冲击',
                'group': '3',
                'halo': !0x0,
                'coolDown': 0x1388,
                'description': (o, p) => {
                    const q = p['int'] * (0.08 * o + 0x1) / 0xa;
                    return '根据自身智力，每秒对所有目标造成' + Math['round'](0.9 * q) + '-' + Math['round'](1.1 * q) + '点闪电伤害。\x0a\x09\x09\x09每次造成物理伤害时，将额外附加' + Math['round'](p['int'] * (0.5 + 0.03 * o)) + '点闪电伤害。\x0a\x09\x09\x09同时携带“信念”，每秒使目标的闪电抗性永久减少' + p['player']['getSkillLevel']('paladin_skill16') + '点。\x0a\x09\x09\x09同时携带“救助”，额外附加的闪电伤害提高25%。\x0a\x09\x09\x09同时携带“闪电抵抗”，额外增加10%闪电吸收。\x0a\x09\x09\x09每5秒增加1点技能熟练度。';
                },
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    p['addBuff']('skill13_buff1', 0x1388, q, 'skill13_buff1');
                }
            }, {
                'key': 'paladin_skill14',
                'name': '庇护之光',
                'group': '3',
                'halo': !0x0,
                'coolDown': 0x1388,
                'description': (o, p) => {
                    const q = o + p['runAttrHooks'](0x0, 'allskillLv') + p['runAttrHooks'](0x0, 'pdsk14'),
                        s = p['int'] * (0.08 * q + 0x1) / 0xa;
                    return '根据自身智力，每秒对所有目标造成' + Math['round'](0.9 * s) + '-' + Math['round'](1.1 * s) + '点光伤害。\x0a\x09\x09\x09每次造成物理伤害时，将额外附加' + Math['round'](p['int'] * (0.5 + 0.03 * q)) + '点光伤害。\x0a\x09\x09\x09同时携带“净化”，每秒减少目标25点光抗性。\x0a\x09\x09\x09同时携带“救赎”，额外附加的光伤害提高25%。\x0a\x09\x09\x09每5秒增加1点技能熟练度。';
                },
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const s = q + p['runAttrHooks'](0x0, 'allskillLv') + p['runAttrHooks'](0x0, 'pdsk14');
                    p['addBuff']('skill14_buff1', 0x1388, s, 'skill14_buff1');
                }
            }, {
                'key': 'paladin_skill15',
                'name': '天堂之拳',
                'description': (o, p) => {
                    const q = (p['atk'] + 1.5 * (p['str'] + p['int']) + 0x4e * o) * (0.035 * o + 0x1);
                    return '你记不记得有一招从天而降的拳法。\x0a\x09\x09\x09召唤神圣能量攻击你的目标，根据自身攻击力、力量、智力，对目标造成' + Math['round'](0.9 * q) + '-' + Math['round'](1.1 * q) + '点光伤害。\x0a\x09\x09\x09同时携带“圣光弹”，每“圣光弹”技能等级+5%伤害，并对目标额外释放一次“圣光弹”。\x0a\x09\x09\x09同时携带“庇护之光”，技能伤害+25%。\x0a\x09\x09\x09同时携带“净化”，冷却时间减少5秒。\x0a\x09\x09\x09同时携带“救赎”，释放技能时若生命值小于55%，则额外恢复20%最大生命值。';
                },
                'coolDown': (o, p, q) => 0x7530 - (p['runAttrHooks'](!0x1, 'pal_enhance7') ? 0x1388 : 0x0),
                'cost': {'mp': 0x3c},
                'castTime': 0x1f4,
                'maxExp': o => o ** 0x2 * 0xc8 + 0x258 * o + 0x190,
                'canUse': (o, p) => !!p['target'],
                'effect'(p, q, s) {
                    const {target: u} = q;
                    let v = 0x1 + (q['runAttrHooks'](!0x1, 'skill14_buff') ? 0.25 : 0x0);
                    q['runAttrHooks'](!0x1, 'skill4_buff') && (v += 0.01 * q['player']['getSkillLevel']('paladin_skill4'), q['useExtraSkill']('paladin_skill4'));
                    const w = (q['atk'] + 1.5 * (q['str'] + q['int']) + 0x4e * s) * (0.035 * s + 0x1) * q['lightdmgAdd'] * v * (0.9 + 0.2 * Math['random']()),
                        x = q['testCrit']();
                    p['sendDamage']('light', q, u, this, q['getCritBonus'](x) * w, x), q['runAttrHooks'](!0x1, 'pal_enhance11') && q['hp'] / q['maxHp'] < 0.55 && (q['hp'] += 0.2 * q['maxHp']), u['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'paladin_skill16',
                'name': '信念',
                'halo': !0x0,
                'coolDown': 0x1388,
                'description': o => '使所有敌对目标的物理防御减少' + (0x1f4 + 0x1e * o) + '点，元素抗性减少' + (0x1f4 + 0x1e * o) + '点。\x0a\x09\x09\x09同时携带“火焰抵抗”，额外减少' + 0x14 * o + '点火焰抗性。\x0a\x09\x09\x09同时携带“寒冷抵抗”，额外减少' + 0x14 * o + '点寒冷抗性。\x0a\x09\x09\x09同时携带“闪电抵抗”，额外减少' + 0x14 * o + '点闪电抗性。\x0a\x09\x09\x09同时携带“救助”，额外减少' + 0xa * o + '点元素抗性。\x0a\x09\x09\x09每5秒增加1点技能熟练度。',
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    p['addBuff']('skill16_buff1', 0x1388, q, 'skill16_buff1');
                }
            }, {
                'key': 'paladin_skill17',
                'name': '狂热',
                'group': '2',
                'halo': !0x0,
                'coolDown': 0x1388,
                'description': (o, p) => '造成的伤害+' + Math['round'](0x64 + 0x2 * o) / 0xa + '%，急速+20%。\x0a\x09\x09\x09同时携带“祝福瞄准”，造成的伤害额外+10%。\x0a\x09\x09\x09同时携带“精力”，造成的伤害额外+10%。\x0a\x09\x09\x09每5秒增加1点技能熟练度。',
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    p['removeBuff'](p['buffs']['find'](s => 'skill17_buff' === s['group'])), p['addBuff']('skill17_buff', 0x1388, 1.1 + 0.002 * q, 'skill17_buff');
                }
            }, {
                'key': 'holy_skill',
                'name': '神圣',
                'description': '',
                'maxExp': o => o ** 0x2 * 0xc8 + 0x258 * o + 0x190,
                'canUse': (o, p) => !!p['target'],
                'effect'(o, p, q) {
                    const {target: s} = p, u = p['testCrit']();
                    p['runAttrHooks'](!0x1, 'skill5_buff') && o['sendDamage']('fire', null, s, '火曜', p['getCritBonus'](u) * p['int'] * (0.5 + 0.03 * p['player']['getSkillLevel']('paladin_skill5')) * p['firedmgAdd'] * (0x1 + (p['runAttrHooks'](!0x1, 'pal_enhance10') ? 0.25 : 0x0)), u), p['runAttrHooks'](!0x1, 'skill9_buff') && o['sendDamage']('cold', null, s, '霜冻', p['getCritBonus'](u) * p['int'] * (0.5 + 0.03 * p['player']['getSkillLevel']('paladin_skill5')) * p['colddmgAdd'] * (0x1 + (p['runAttrHooks'](!0x1, 'pal_enhance10') ? 0.25 : 0x0)), u), p['runAttrHooks'](!0x1, 'skill13_buff') && o['sendDamage']('lightning', null, s, '雷冲', p['getCritBonus'](u) * p['int'] * (0.5 + 0.03 * p['player']['getSkillLevel']('paladin_skill5')) * p['lightningdmgAdd'] * (0x1 + (p['runAttrHooks'](!0x1, 'pal_enhance10') ? 0.25 : 0x0)), u), p['runAttrHooks'](!0x1, 'skill14_buff') && o['sendDamage']('light', null, s, '圣光', p['getCritBonus'](u) * p['int'] * (0.5 + 0.03 * p['player']['getSkillLevel']('paladin_skill5')) * p['lightdmgAdd'] * (0x1 + (p['runAttrHooks'](!0x1, 'pal_enhance11') ? 0.25 : 0x0)), u);
                }
            }];
        }, 8417: m => {
            function o(u) {
                let v = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : 0x1;
                const w = u['runAttrHooks'](0x5, 'maxComboPoint');
                u['runAttrHooks'](v, 'elect'), u['comboPoint'] = Math['min'](w, u['comboPoint'] + v);
            }

            function p(u, v) {
                const w = u['runAttrHooks'](!0x1, 'magicArtist'),
                    x = u['buffs']['find'](y => 'magicState' === y['group']);
                w ? x ? x['arg'] !== v && (x['arg'] = v, u['addBuff']('magicArtist', 0x1388, 0.1)) : u['addBuff']('magicState', null, v, 'magicState') : x && u['removeBuff'](x);
            }

            function q(u, v, w, x) {
                for (const y of u['units']['filter'](z => v['willAttack'](z))) {
                    const z = y['buffs']['find'](A => 'fire_buff' === A['group']);
                    z ? (z['arg'] += x, z['resetTimer'](0x3a98)) : y['addBuff']('fire_buff', 0x3a98, x, 'fire_buff');
                }
            }

            function s(u, v) {
                const w = v['buffs']['find'](x => 'electricity_buff' === x['group']);
                u['runAttrHooks'](!0x1, 'lv35_sorceress3_enhance2') && Math['random']() < 0.5 && (w ? (w['arg'] += 0.02, w['resetTimer'](0x2710)) : v['addBuff']('electricity_buff', 0x2710, 0.01, 'electricity_buff'));
            }

            m['exports'] = [{
                'key': 'sorceress_atk',
                'name': '杖击',
                'type': 'player',
                'lv': 0x1,
                'coolDown': 0x5dc,
                'element': 'melee',
                'description': (u, v) => '魔法入门第一课，以理服人。\x0a\x09\x09\x09对目标造成' + (Math['round']((0x64 + 0x1 * u) / 0x64 * v['atk']) + 0x2) + '-' + (Math['round']((0x96 + 0x2 * u) / 0x64 * v['atk']) + 0x2) + '点物理伤害。',
                'maxExp': u => u ** 0x2 * 0x3e8 + 0xbb8 * u + 0x7d0,
                'canUse': (u, v) => !!v['target'],
                'effect'(u, v, w) {
                    const {target: x, leech: y = 0x0, atk: z} = v;
                    if (u['testDodge'](v, x, this)) return;
                    const A = 0x2 + z * (0x1 + 0.01 * w + Math['random']() * (0.5 + 0.01 * w)) * v['dmgAdd'],
                        B = v['testCrit']();
                    u['sendDamage']('melee', v, x, this, v['getCritBonus'](B) * A, B), y && (v['hp'] += y), x['rp'] += x['rpOnAttacked'], x['runAttrHooks'](v, 'attacked'), p(v, 'melee');
                }
            }, {
                'key': 'wind_blade',
                'name': '魔法连弹',
                'type': 'player',
                'lv': 0x2,
                'element': 'magic',
                'description': (u, v) => {
                    const w = Math['round'](0.8 * (v['int'] * (0.1 + 0.005 * u) / 0x2 + 0x2)),
                        x = Math['round'](1.2 * (v['int'] * (0.1 + 0.005 * u) / 0x2 + 0x2));
                    return '命中靶心，十环。！\x0a\x09\x09\x09连续释放' + (Math['floor'](u / 0xa) + 0x4) + '个魔法飞弹，每个对目标造成' + w + '-' + x + '点魔法伤害。\x0a\x09\x09\x09每个飞弹攻击随机的目标,每10技能等级增加1个魔法飞弹。';
                },
                'coolDown': 0x5dc,
                'cost': {'mp': 0x2},
                'maxExp': u => u ** 0x2 * 0x3e8 + 0xbb8 * u + 0x7d0,
                'canUse': (u, v) => !!v['target'],
                'effect'(u, v, w) {
                    const {int: x = 0x0, target: y} = v;
                    !function (B) {
                        B['runAttrHooks'](!0x1, 'lv15_sorceress1_enhance1') && B['addBuff']('chord_buff', null, null, 'chord_buff');
                    }(v);
                    let z = 0x1;
                    v['runAttrHooks'](!0x1, 'lv15_sorceress1_enhance3') && v['mp'] > 0.2 * v['maxMp'] && (v['mp'] -= 0.02 * v['maxMp'], z += 0.02 * v['maxMp'] * 0.002);
                    const A = u['units']['filter'](B => B !== y && v['willAttack'](B));
                    for (let B = 0x0; B < Math['floor'](w / 0xa) + 0x4; B++) {
                        let C = y;
                        if (u['testDodge'](v, C, this)) return;
                        A['length'] > 0x0 && (!v['target'] || Math['random']() < 0.8) && (C = A[Math['floor'](Math['random']() * A['length'])]);
                        const D = Math['round']((v['int'] * (0.1 + 0.005 * w) / 0x2 + 0x2) * (0.8 + 0.4 * Math['random']())) * z,
                            E = v['testCrit']();
                        u['sendDamage']('magic', v, C, this, v['getCritBonus'](E) * D, E);
                    }
                    p(v, 'magic');
                }
            }, {
                'key': 'summon_slime',
                'name': '召唤术·史莱姆',
                'type': 'player',
                'lv': 0x5,
                'casttime': 0x7d0,
                'coolDown': 0x5dc,
                'cost': {'mp': 0x14},
                'description': (u, v) => '你喊来了一团史莱姆，就和你刚刚干掉的那只一毛一样。\x0a\x09\x09\x09召唤一团史莱姆，20秒后史莱姆将撤离现场。\x0a\x09\x09\x09召唤物攻击力：' + Math['round'](v['int'] / 0x2 + u) + '\x0a\x09\x09\x09召唤物生命值：' + Math['round']((v['maxHp'] + 0x2 * v['int']) * (0x1 + u / 0xa)),
                'maxExp': u => u ** 0x2 * 0xc8 + 0x258 * u + 0x190,
                'canUse': (u, v) => 'home' !== u['map'] && u['units']['filter'](w => w['summoner'] === v && w['type']['indexOf']('summon.element.slime') >= 0x0 && 'ghost' !== w['camp'])['length'] < v['runAttrHooks'](0x1, 'summonCount'),
                'effect'(u, v, w) {
                    const x = u['addEnemy']('summon.element.slime', null, 0x0, v, this);
                    x['addBuff']('summoned', v['runAttrHooks'](0x4e20, 'summonTime')), v['runAttrHooks'](x, 'summonedUnit');
                }
            }, {
                'key': 'sorceress_fireBall',
                'name': '火球术',
                'type': 'player',
                'lv': 0xf,
                'element': 'fire',
                'description': (u, v) => {
                    const w = (0x1e + 0x2 * u) * (0.01 * v['int'] + 0x1) * (0.05 * u + 0x1) * 1.5;
                    return '烫烫烫...\x0a\x09\x09\x09对目标造成' + Math['round'](0.5 * w) + '-' + Math['round'](1.5 * w) + '点火焰伤害。';
                },
                'castTime': 0x9c4,
                'coolDown': 0x64,
                'cost': {'mp': u => 0x14},
                'maxExp': u => u ** 0x2 * 0x3e8 + 0xbb8 * u + 0x7d0,
                'canUse': (u, v) => !!v['target'],
                'effect'(v, w, x) {
                    const {target: y} = w;
                    if (v['testDodge'](w, y, this)) return;
                    const z = w['runAttrHooks'](0x1, 'two_kjk');
                    let A = 0x1;
                    w['runAttrHooks'](!0x1, 'lv15_sorceress1_enhance3') && w['mp'] > 0.2 * w['maxMp'] && (w['mp'] -= 0.02 * w['maxMp'], A += 0.02 * w['maxMp'] * 0.002);
                    const B = w['buffs']['find'](F => 'chord_buff' === F['group']);
                    let C = 0x1;
                    B && (C += 0.3, w['removeBuff'](B));
                    const D = (0x1e + 0x2 * x) * (0.01 * w['int'] + 0x1) * (0.05 * x + 0x1) * w['firedmgAdd'] * z * C * A * 1.5,
                        E = w['testCrit']();
                    if (v['sendDamage']('fire', w, y, this, w['getCritBonus'](E) * D * (0.5 + Math['random']()), E), w['runAttrHooks'](!0x1, 'lv35_sorceress1_enhance2') && Math['random']() < 0.5 && y) {
                        const F = w['testCrit']();
                        if (v['sendDamage']('fire', w, y, this, w['getCritBonus'](F) * D * (0.5 + Math['random']()), F), Math['random']() < 0.25 && y) {
                            const G = w['testCrit']();
                            if (v['sendDamage']('fire', w, y, this, w['getCritBonus'](G) * D * (0.5 + Math['random']()), G), Math['random']() < 0.1 && y) {
                                const H = w['testCrit']();
                                if (v['sendDamage']('fire', w, y, this, w['getCritBonus'](H) * D * (0.5 + Math['random']()), H), Math['random']() < 0.01 && y) {
                                    const I = w['testCrit']();
                                    v['sendDamage']('fire', w, y, this, w['getCritBonus'](I) * D * (0.5 + Math['random']()), I);
                                }
                            }
                        }
                    }
                    p(w, 'fire');
                }
            }, {
                'key': 'sorceress_magicShield',
                'name': '魔法盾',
                'type': 'player',
                'lv': 0x14,
                'element': 'magic',
                'maxExp': u => u ** 0x2 * 0x258 + 0x708 * u + 0x4b0,
                'canUse': (u, v) => 'home' !== u['map'],
                'description': (u, v) => '消耗法力值以吸收伤害，每点法力值吸收' + Math['round'](0x64 + 0x8 * u) / 0x64 + '点伤害，最多吸收' + (0x0 | v['maxMp'] * (0.5 + 0.01 * u)) + '点伤害。',
                'coolDown': 0x3a98,
                'effect'(u, v, w) {
                    if (v['runAttrHooks'](!0x1, 'bzat_buff')) {
                        const z = v['buffs']['find'](B => 'magicShield' === B['group']);
                        let A = 0x0;
                        if (z && (A += z['arg'][0x1]), z && A > 0x0) {
                            for (const B of u['units']['filter'](C => v['willAttack'](C))) {
                                const C = v['testCrit']();
                                u['sendDamage']('cold', v, B, '霜寒', v['getCritBonus'](C) * A * v['colddmgAdd'], C);
                            }
                            v['removeBuff'](z);
                        }
                    }
                    const x = Math['round'](0x64 + 0x8 * w) / 0x64, y = v['maxMp'] * (0.5 + 0.01 * w);
                    v['addBuff']('magicShield', 0xea60, [x, y], 'magicShield'), p(v, 'magic');
                }
            }, {
                'key': 'sorceress_vitalitywater',
                'name': '活力之水',
                'type': 'player',
                'lv': 0x23,
                'description': u => '每秒恢复' + Math['round'](0x32 + 0x1 * u) / 0x64 + '%的生命值和法力值，持续10秒。',
                'coolDown': (u, v, w) => 0x3a98 * v['runAttrHooks'](0x1, 'defring'),
                'castTime': 0x3e8,
                'canUse': (u, v) => !!v['target'],
                'maxExp': u => u ** 0x2 * 0x258 + 0x708 * u + 0x4b0,
                'effect'(u, v, w) {
                    let x = v['runAttrHooks'](0x1, 'lv35_sorceress2_enhance2');
                    v['addBuff']('vitalitywater_buff', 0x2715, (0.05 + 0.001 * w) / 0xa * x, 'vitalitywater_buff');
                }
            }, {
                'key': 'sorceress_igniting',
                'name': '点燃',
                'type': 'player',
                'lv': 0x19,
                'element': 'fire',
                'description': (u, v) => {
                    const w = v['runAttrHooks'](0x1, 'lv80_sorceress2_enhance1'),
                        x = (0x14 + 0x2 * u) * (0.01 * v['int'] + 0x1) * (0.02 * u + 0x1) * w / 0x8;
                    return '为所有目标添加一层“灼烧”效果。\x0a\x09\x09\x09灼烧：每3秒受到' + Math['round'](x) + '点火焰伤害，持续15秒，可叠加。';
                },
                'coolDown': 0x4e20,
                'cost': {'mp': u => 0x1e},
                'maxExp': u => u ** 0x2 * 0xc8 + 0x258 * u + 0x190,
                'canUse': (u, v) => !!v['target'],
                'effect'(u, v, w) {
                    const {target: x} = v;
                    if (u['testDodge'](v, x, this)) return;
                    const y = v['runAttrHooks'](0x1, 'lv80_sorceress2_enhance1'),
                        z = v['runAttrHooks'](!0x1, 'lv80_sorceress2_enhance3'),
                        A = v['runAttrHooks'](!0x1, 'lv80_sorceress2_enhance5');
                    if (q(u, v, 0x0, (0x14 + 0x2 * w) * (0.01 * v['int'] + 0x1) * (0.02 * w + 0x1) * v['firedmgAdd'] * y / 0x8), z && x['addBuff']('laoyin_buff', null, null, 'laoyin_buff'), A) {
                        let B = Math['random'](), C = 0x0;
                        for (; B < 0.6;) q(u, v, 0x0, (0x14 + 0x2 * w) * (0.01 * v['int'] + 0x1) * (0.02 * w + 0x1) * v['firedmgAdd'] * y / 0x8), z && x['addBuff']('laoyin_buff', null, null), C += 0.3, B = Math['random']();
                    }
                    p(v, 'fire');
                }
            }, {
                'key': 'sorceress_lightning',
                'name': '闪电',
                'type': 'player',
                'lv': 0xf,
                'element': 'lightning',
                'description': (u, v) => {
                    const w = v['runAttrHooks'](!0x1, 'lv80_sorceress6_enhance1'),
                        x = v['runAttrHooks'](0x1, 'lv80_sorceress5_enhance1'),
                        y = (0x28 + 0x2 * u) * (0.01 * v['int'] + 0x1) * (0.05 * u + 0x1) * 0x3, z = y * x,
                        A = w ? 0.3 * y : 0x1;
                    return '对目标造成' + Math['round'](A) + '-' + Math['round'](z) + '点闪电伤害。';
                },
                'castTime': 0x7d0,
                'coolDown': (u, v, w) => v['runAttrHooks'](0x64, 'lv80_sorceress5_enhance3'),
                'cost': {'mp': u => 0x14},
                'maxExp': u => u ** 0x2 * 0x3e8 + 0xbb8 * u + 0x7d0,
                'canUse': (u, v) => !!v['target'],
                'effect'(v, w, x) {
                    const z = w['runAttrHooks'](!0x1, 'lv80_sorceress6_enhance1'),
                        A = w['runAttrHooks'](0x1, 'lv80_sorceress5_enhance1'), {target: B} = w;
                    if (v['testDodge'](w, B, this)) return;
                    let C = 0x1;
                    w['runAttrHooks'](!0x1, 'lv15_sorceress1_enhance3') && w['mp'] > 0.2 * w['maxMp'] && (w['mp'] -= 0.02 * w['maxMp'], C += 0.02 * w['maxMp'] * 0.002);
                    const D = w['buffs']['find'](L => 'chord_buff' === L['group']);
                    let E = 0x1;
                    D && (E += 0.3, w['removeBuff'](D));
                    const F = w['buffs']['find'](L => 'sorceress_energy_buff' === L['group']);
                    let G = 0x0, H = 0x1;
                    F && (H += 0.5 + 0.01 * F['arg'], G += 0x1, w['removeBuff'](F));
                    let I = (0x28 + 0x2 * x) * (0.01 * w['int'] + 0x1) * (0.05 * x + 0x1) * 0x3 * w['lightningdmgAdd'] * E * C * H;
                    I *= z ? 0.3 + 0.7 * Math['random']() : 0x1 !== A ? Math['random']() * A : Math['random']();
                    const J = w['runAttrHooks'](!0x1, 'lv80_sorceress5_enhance33');
                    J && (I = (0x28 + 0x2 * x) * (0.01 * w['int'] + 0x1) * (0.05 * x + 0x1) * 0x3 * w['lightningdmgAdd'] * E * C * H);
                    const K = w['testCrit'](critRate = Math['min'](w['critRate'] + G, 0x1));
                    s(w, B), v['sendDamage']('lightning', w, B, this, w['getCritBonus'](K) * I, K), J && Math['random']() > 0.5 && o(w), p(w, 'lightning');
                }
            }, {
                'key': 'sorceress_fireBall_ex',
                'name': '爆炎术',
                'type': 'player',
                'lv': 0x28,
                'element': 'fire',
                'description': (u, v) => {
                    const w = (0x28 + 0x3 * u) * (0.01 * v['int'] + 0x1) * (0.05 * u + 0x1);
                    return '对八个目标造成' + Math['round'](0.5 * w) + '-' + Math['round'](1.5 * w) + '点火焰伤害。';
                },
                'castTime': 0x9c4,
                'coolDown': 0x1f40,
                'cost': {'mp': u => 0x2d},
                'maxExp': u => u ** 0x2 * 0x258 + 0x708 * u + 0x4b0,
                'canUse': (u, v) => !!v['target'],
                'effect'(v, w, x) {
                    const {target: y} = w;
                    if (v['testDodge'](w, y, this)) return;
                    let z = 0x1;
                    w['runAttrHooks'](!0x1, 'lv15_sorceress1_enhance3') && w['mp'] > 0.2 * w['maxMp'] && (w['mp'] -= 0.02 * w['maxMp'], z += 0.02 * w['maxMp'] * 0.002);
                    const A = w['buffs']['find'](F => 'chord_buff' === F['group']);
                    let B = 0x1;
                    A && (B += 0.3, w['removeBuff'](A));
                    const C = w['runAttrHooks'](0x1, 'lv80_sorceress1_enhance3'),
                        D = (0x28 + 0x3 * x) * (0.01 * w['int'] + 0x1) * (0.05 * x + 0x1) * (0.5 + Math['random']()) * w['firedmgAdd'] * B * z * C,
                        E = w['testCrit']();
                    v['sendDamage']('fire', w, y, this, w['getCritBonus'](E) * D, E), p(w, 'fire'), 0x1 === C && v['units']['filter'](F => F !== y && w['willAttack'](F))['slice'](0x0, 0x7)['forEach'](F => {
                        if (v['testDodge'](w, F, this)) return;
                        const G = (0x28 + 0x3 * x) * (0.01 * w['int'] + 0x1) * (0.05 * x + 0x1) * (0.5 + Math['random']()) * w['firedmgAdd'] * B * z,
                            H = w['testCrit']();
                        v['sendDamage']('fire', w, F, this, w['getCritBonus'](H) * G, H);
                    });
                }
            }, {
                'key': 'sorceress_overdraft',
                'name': '透支',
                'type': 'player',
                'lv': 0x32,
                'description': u => '有时在过度劳累之后...\x0a\x09\x09\x09火焰伤害+' + Math['round'](0xfa + 0x5 * u) / 0xa + '%，但法力值恢复-' + Math['round'](0x32 + 0x1 * u) + '，持续25秒。',
                'coolDown': 0x61a8,
                'maxExp': u => u ** 0x2 * 0xc8 + 0x258 * u + 0x190,
                'canUse': (u, v) => !!v['target'],
                'effect'(u, v, w) {
                    v['runAttrHooks'](!0x1, 'lv80_sorceress1_enhance1') ? v['addBuff']('sorceress_overdraft_buff2', 0x61ad, w, 'sorceress_overdraft_buff2') : v['addBuff']('sorceress_overdraft_buff1', 0x61ad, w, 'sorceress_overdraft_buff1');
                }
            }, {
                'key': 'sorceress_hellfire',
                'name': '地狱之火',
                'type': 'player',
                'lv': 0x3c,
                'coolDown': 0x4650,
                'cost': {'mp': u => 0x46},
                'description': (u, v) => {
                    const w = (0xa + 0.5 * u) * (0.01 * v['int'] + 0x1) * (0.05 * u + 0x1);
                    return '持续施法6秒，每秒对所有目标造成' + Math['round'](0.5 * w) + '-' + Math['round'](1.5 * w) + '点火焰伤害。';
                },
                'maxExp': u => u ** 0x2 * 0xc8 + 0x258 * u + 0x190,
                'canUse': (u, v) => !!v['target'],
                'effect'(u, v, w) {
                    let x = 0x1;
                    v['runAttrHooks'](!0x1, 'lv15_sorceress1_enhance3') && v['mp'] > 0.2 * v['maxMp'] && (v['mp'] -= 0.02 * v['maxMp'], x += 0.02 * v['maxMp'] * 0.002);
                    const y = v['buffs']['find'](B => 'chord_buff' === B['group']);
                    let z = 0x1;
                    y && (z += 0.3, v['removeBuff'](y));
                    const A = (0xa + 0.5 * w) * (0.01 * v['int'] + 0x1) * (0.05 * w + 0x1) * v['firedmgAdd'] * z * x;
                    v['startRead']('sorceress_hellfire_buff', 0x1775, A, this);
                }
            }, {
                'key': 'sorceress_fireShield',
                'name': '烈焰护盾',
                'type': 'player',
                'lv': 0x46,
                'element': 'fire',
                'maxExp': u => u ** 0x2 * 0xc8 + 0x258 * u + 0x190,
                'canUse': (u, v) => !!v['target'],
                'description': (u, v) => '增加10%暴击几率和' + (0x0 | 0xa * (0.2 * u + 0x1)) + '%暴击伤害，持续30秒。',
                'coolDown': 0x7530,
                'effect'(u, v, w) {
                    const x = (0.2 * w + 0x1) / 0xa;
                    v['addBuff']('fireShield', 0x7530, x, 'fireShield'), p(v, 'fire');
                }
            }, {
                'key': 'sorceress_chainingLightning',
                'name': '雷蛇',
                'element': 'lightning',
                'description': (u, v) => {
                    const w = v['runAttrHooks'](!0x1, 'lv80_sorceress6_enhance1'),
                        x = v['runAttrHooks'](0x1, 'lv80_sorceress5_enhance1'),
                        y = (0x28 + 0x2 * u) * (0.01 * v['int'] + 0x1) * (0.05 * u + 0x1) * 0x3, z = y * x,
                        A = w ? 0.3 * y : 0x1;
                    return '对首个目标造成' + Math['round'](A) + '-' + Math['round'](z) + '点闪电伤害，最多弹射5次，每次弹射伤害衰减25%。';
                },
                'castTime': 0x3e8,
                'coolDown': 0x1f40,
                'cost': {'mp': u => 0x2d},
                'maxExp': u => u ** 0x2 * 0x258 + 0x708 * u + 0x4b0,
                'canUse': (u, v) => !!v['target'],
                'effect'(v, w, x) {
                    const {target: z} = w, A = w['runAttrHooks'](!0x1, 'lv80_sorceress6_enhance1'),
                        B = w['runAttrHooks'](0x1, 'lv80_sorceress5_enhance1');
                    let C = 0x1;
                    w['runAttrHooks'](!0x1, 'lv15_sorceress1_enhance3') && w['mp'] > 0.2 * w['maxMp'] && (w['mp'] -= 0.02 * w['maxMp'], C += 0.02 * w['maxMp'] * 0.002);
                    const D = w['buffs']['find'](M => 'chord_buff' === M['group']);
                    let E = 0x1;
                    D && (E += 0.3, w['removeBuff'](D));
                    const F = w['buffs']['find'](M => 'sorceress_energy_buff' === M['group']);
                    let G = 0x0, H = 0x1;
                    F && (H += 0.5 + 0.01 * F['arg'], G += 0x1, w['removeBuff'](F));
                    const I = v['units']['filter'](M => w['willAttack'](M));
                    let J = (0x28 + 0x2 * x) * (0.01 * w['int'] + 0x1) * (0.05 * x + 0x1) * 0x3 * w['lightningdmgAdd'] * E * C * H;
                    J *= A ? 0.3 + 0.7 * Math['random']() : 0x1 !== B ? Math['random']() * B : Math['random']();
                    const K = w['runAttrHooks'](0.75, 'blz_buff'),
                        L = w['runAttrHooks'](!0x1, 'lv80_sorceress5_enhance5');
                    for (let M = 0x0; M < 0x6 && !(I['length'] < 0x1); M++) {
                        const N = Math['floor'](Math['random']() * I['length']), O = I['splice'](N, 0x1)[0x0],
                            P = w['testCrit'](critRate = Math['min'](w['critRate'] + G, 0x1));
                        s(w, O), v['sendDamage']('lightning', w, O, this, w['getCritBonus'](P) * J, P), J *= K, L && o(w);
                    }
                }
            }, {
                'key': 'sorceress_energy',
                'name': '蓄电',
                'element': 'lightning',
                'coolDown': (u, v, w) => 0x2af8 - v['runAttrHooks'](0x0, 'lv80_sorceress5_enhance2'),
                'maxExp': u => u ** 0x2 * 0x258 + 0x708 * u + 0x4b0,
                'canUse': (u, v) => !!v['target'],
                'cost': {'mp': u => 0x46},
                'description': (u, v) => '下一个闪电类的法术必定暴击，且伤害提高' + Math['round'](0x32 + u) + '%，持续8秒。',
                'effect'(u, v, w) {
                    v['addBuff']('sorceress_energy_buff', 0x2328, w, 'sorceress_energy_buff'), o(v), p(v, 'lightning');
                }
            }, {
                'key': 'sorceress_supernova',
                'name': '超级新星',
                'element': 'lightning',
                'description': (u, v) => {
                    const w = v['runAttrHooks'](!0x1, 'lv80_sorceress6_enhance1'),
                        x = v['runAttrHooks'](0x1, 'lv80_sorceress5_enhance1'),
                        y = (0x5 + 0x1 * u) * (0.01 * v['int'] + 0x1) * (0.05 * u + 0x1) * 0x3, z = y * x,
                        A = w ? 0.3 * y : 0x1;
                    return '对所有目标造成' + Math['round'](A) + '-' + Math['round'](z) + '点闪电伤害，并使其获得“麻痹”效果。\x0a\x09\x09\x09麻痹：急速-10%，攻击力-50%，持续5秒。';
                },
                'castTime': 0x1f4,
                'coolDown': 0x3a98,
                'cost': {'mp': u => 0x2d},
                'maxExp': u => u ** 0x2 * 0x258 + 0x708 * u + 0x4b0,
                'canUse': (u, v) => !!v['target'],
                'effect'(v, w, x) {
                    const {target: y} = w;
                    if (v['testDodge'](w, y, this)) return;
                    const z = w['runAttrHooks'](!0x1, 'lv80_sorceress6_enhance1'),
                        A = w['runAttrHooks'](0x1, 'lv80_sorceress5_enhance1');
                    let B = 0x1;
                    w['runAttrHooks'](!0x1, 'lv15_sorceress1_enhance3') && w['mp'] > 0.2 * w['maxMp'] && (w['mp'] -= 0.02 * w['maxMp'], B += 0.02 * w['maxMp'] * 0.002);
                    const C = w['buffs']['find'](H => 'chord_buff' === H['group']);
                    let D = 0x1;
                    C && (D += 0.3, w['removeBuff'](C));
                    const E = w['buffs']['find'](H => 'sorceress_energy_buff' === H['group']);
                    let F = 0x0, G = 0x1;
                    E && (G += 0.5 + 0.01 * E['arg'], F += 0x1, w['removeBuff'](E));
                    for (const H of v['units']['filter'](I => w['willAttack'](I))) {
                        let I = (0x5 + 0x1 * x) * (0.01 * w['int'] + 0x1) * (0.05 * x + 0x1) * 0x3 * w['lightningdmgAdd'] * D * B * G;
                        I *= z ? 0.3 + 0.7 * Math['random']() : 0x1 !== A ? Math['random']() * A : Math['random']();
                        const J = w['testCrit'](critRate = Math['min'](w['critRate'] + F, 0x1));
                        s(w, H), v['sendDamage']('lightning', w, H, this, w['getCritBonus'](J) * I, J), H['addBuff']('supernova_buff', 0x1388, null, 'supernova_buff');
                    }
                    p(w, 'lightning');
                }
            }, {
                'key': 'sorceress_electrostatic',
                'name': '静电力场',
                'description': u => '使所有目标的添加一层“静电”效果，可叠加。\x0a\x09\x09\x09静电：闪电抗性永久减少' + Math['round'](0x64 + 0x2 * u) + '点。',
                'castTime': 0x1f4,
                'coolDown': 0x1388,
                'cost': {'mp': u => 0x1e},
                'canUse': (u, v) => !!v['target'],
                'maxExp': u => u ** 0x2 * 0x3e8 + 0xbb8 * u + 0x7d0,
                'effect'(u, v, w) {
                    for (const x of u['units']['filter'](y => v['willAttack'](y))) if (x['addBuff']('electrostatic_buff', null, 0x64 + 0x2 * w), v['runAttrHooks'](!0x1, 'lv80_sorceress6_enhance3')) {
                        const y = x['buffs']['find'](z => 'electricity_buff' === z['group']);
                        y ? (y['arg'] += 0.02, y['resetTimer'](0x2710)) : x['addBuff']('electricity_buff', 0x2710, 0.01, 'electricity_buff');
                    }
                    p(v, 'lightning');
                }
            }, {
                'key': 'sorceress_coldBall',
                'name': '水箭术',
                'element': 'cold',
                'description': (u, v) => {
                    const w = (0xf + 0x2 * u) * (0.01 * v['int'] + 0x1) * (0.05 * u + 0x1);
                    return '对目标造成' + Math['round'](0.9 * w) + '-' + Math['round'](1.1 * w) + '点寒冷伤害。';
                },
                'castTime': 0x5dc,
                'coolDown': 0x64,
                'cost': {'mp': u => 0x14},
                'maxExp': u => u ** 0x2 * 0x3e8 + 0xbb8 * u + 0x7d0,
                'canUse': (u, v) => !!v['target'],
                'effect'(v, w, x) {
                    const {target: y} = w;
                    if (v['testDodge'](w, y, this)) return;
                    let z = 0x1;
                    w['runAttrHooks'](!0x1, 'lv15_sorceress1_enhance3') && w['mp'] > 0.2 * w['maxMp'] && (w['mp'] -= 0.02 * w['maxMp'], z += 0.02 * w['maxMp'] * 0.002);
                    const A = w['buffs']['find'](G => 'chord_buff' === G['group']);
                    let B = 0x1;
                    A && (B += 0.3, w['removeBuff'](A));
                    const C = w['runAttrHooks'](!0x1, 'lv80_sorceress3_enhance1'),
                        D = w['runAttrHooks'](!0x1, 'lv80_sorceress4_enhance1'),
                        E = (0xf + 0x2 * x) * (0.01 * w['int'] + 0x1) * (0.05 * x + 0x1) * w['colddmgAdd'] * B * z * (C ? 1.3 : 0x1) * (D ? 2.5 : 0x1),
                        F = w['testCrit']();
                    D && Math['random']() < 0.15 && function (G, H, I) {
                        const J = H['buffs']['find'](L => 'freezed' === L['group']),
                            K = G['runAttrHooks'](!0x1, 'lv80_sorceress4_enhance3');
                        J ? K ? (I['sendDamage']('cold', null, H, '冻伤', Math['min'](0.2 * H['maxHp'], 0x32 * G['int']), !0x1), H['removeBuff'](J)) : J['resetTimer'](0x5dc) : H['addBuff']('freezed', 0x5dc, null, 'freezed');
                    }(w, y, v), v['sendDamage']('cold', w, y, this, w['getCritBonus'](F) * E * (0.9 + 0.2 * Math['random']()), F), p(w, 'cold'), C && v['units']['filter'](G => G !== y && w['willAttack'](G))['slice'](0x0, 0x5)['forEach'](G => {
                        if (v['testDodge'](w, G, this)) return;
                        const H = (0xf + 0x1 * x) * (0.01 * w['int'] + 0x1) * (0.05 * x + 0x1) * (0.9 + 0.2 * Math['random']()) * w['colddmgAdd'] * B * z * (C ? 1.3 : 0x1),
                            I = w['testCrit']();
                        v['sendDamage']('cold', w, G, this, w['getCritBonus'](I) * H, I);
                    });
                }
            }, {
                'key': 'sorceress_lucky',
                'name': '幸运祝福',
                'element': 'cold',
                'description': u => '你只有一个金苹果，所以你只能换取一种祝福。\x0a\x09\x09\x09随机获得以下一种祝福效果，每一种祝福效果不可共存，持续25秒。\x0a\x09\x09\x09幸运A面：智力+' + Math['round'](0x64 + 0x8 * u) + '\x0a\x09\x09\x09幸运B面：寒冷伤害+' + Math['round'](0xfa + 0x5 * u) / 0xa + '%\x0a\x09\x09\x09幸运C面：生命值恢复+' + Math['round'](0x32 + 0x3 * u) + '，法力值恢复+' + Math['round'](0x32 + 0x3 * u),
                'coolDown': 0x61a8,
                'maxExp': u => u ** 0x2 * 0xc8 + 0x258 * u + 0x190,
                'canUse': (u, v) => !!v['target'],
                'cost': {'mp': u => 0x32},
                'effect'(u, v, w) {
                    const x = v['buffs']['find'](C => 'lucky_buff1' === C['group']);
                    v['removeBuff'](x);
                    const y = v['buffs']['find'](C => 'lucky_buff2' === C['group']);
                    v['removeBuff'](y);
                    const z = v['buffs']['find'](C => 'lucky_buff3' === C['group']);
                    v['removeBuff'](z);
                    const A = v['runAttrHooks'](!0x1, 'goldapple_buff');
                    let B = Math['random']();
                    if (B < 0.33) {
                        let C = v['mp'] / v['maxMp'];
                        v['addBuff']('lucky_buff1', 0x61ad, 0x64 + 0x8 * w, 'lucky_buff1'), v['mp'] = C * v['maxMp'], A && (Math['random']() < 0.5 ? v['addBuff']('lucky_buff2', 0x61ad, 0.25 + 0.005 * w, 'lucky_buff2') : v['addBuff']('lucky_buff3', 0x61ad, 0x32 + 0x3 * w, 'lucky_buff3'));
                    } else if (B < 0.66) {
                        if (v['addBuff']('lucky_buff2', 0x61ad, 0.25 + 0.005 * w, 'lucky_buff2'), A) if (Math['random']() < 0.5) {
                            let D = v['mp'] / v['maxMp'];
                            v['addBuff']('lucky_buff1', 0x61ad, 0x64 + 0x8 * w, 'lucky_buff1'), v['mp'] = D * v['maxMp'];
                        } else v['addBuff']('lucky_buff3', 0x61ad, 0x32 + 0x3 * w, 'lucky_buff3');
                    } else if (v['addBuff']('lucky_buff3', 0x61ad, 0x32 + 0x3 * w, 'lucky_buff3'), A) if (Math['random']() < 0.5) {
                        let E = v['mp'] / v['maxMp'];
                        v['addBuff']('lucky_buff1', 0x61ad, 0x64 + 0x8 * w, 'lucky_buff1'), v['mp'] = E * v['maxMp'];
                    } else v['addBuff']('lucky_buff2', 0x61ad, 0.25 + 0.005 * w, 'lucky_buff2');
                    p(v, 'cold');
                }
            }, {
                'key': 'sorceress_torrent',
                'name': '湍流',
                'element': 'cold',
                'description': (u, v) => {
                    const w = (0x23 + 0x1 * u) * (0.01 * v['int'] + 0x1) * (0.05 * u + 0x1);
                    return '对所有目标造成' + Math['round'](0.9 * w) + '-' + Math['round'](1.1 * w) + '点寒冷伤害，并使其获得“冰缓”效果。\x0a\x09\x09\x09冰缓：急速-20%，持续7秒。';
                },
                'castTime': 0x5dc,
                'coolDown': 0x4e20,
                'cost': {'mp': u => 0xb4},
                'maxExp': u => u ** 0x2 * 0x258 + 0x708 * u + 0x4b0,
                'canUse': (u, v) => !!v['target'],
                'effect'(u, v, w) {
                    const {target: x} = v;
                    if (u['testDodge'](v, x, this)) return;
                    let y = 0x1;
                    v['runAttrHooks'](!0x1, 'lv15_sorceress1_enhance3') && v['mp'] > 0.2 * v['maxMp'] && (v['mp'] -= 0.02 * v['maxMp'], y += 0.02 * v['maxMp'] * 0.002);
                    const z = v['buffs']['find'](B => 'chord_buff' === B['group']);
                    let A = 0x1;
                    z && (A += 0.3, v['removeBuff'](z));
                    for (const B of u['units']['filter'](C => v['willAttack'](C))) {
                        const C = (0x23 + 0x1 * w) * (0.01 * v['int'] + 0x1) * (0.05 * w + 0x1) * v['colddmgAdd'] * A * y,
                            D = v['testCrit']();
                        u['sendDamage']('cold', v, B, this, v['getCritBonus'](D) * C * (0.9 + 0.2 * Math['random']()), D), B['addBuff']('soul_ice_cold', 0x1b58, null, 'soul_ice_cold'), v['runAttrHooks'](!0x1, 'lv80_sorceress3_enhance3') && v['useExtraSkill']('sorceress_coldBall');
                    }
                    p(v, 'cold');
                }
            }, {
                'key': 'sorceress_coldShield',
                'name': '寒冰护甲',
                'element': 'cold',
                'maxExp': u => u ** 0x2 * 0x258 + 0x708 * u + 0x4b0,
                'canUse': (u, v) => !!v['target'],
                'description': (u, v) => '受到的伤害减少' + Math['round'](0xfa + 0x5 * u) / 0xa + '%，持续15秒。',
                'coolDown': 0x3a98,
                'effect'(u, v, w) {
                    const x = 0x1 - (0.25 + 0.005 * w);
                    v['addBuff']('coldShield', 0x3a98, x, 'coldShield'), p(v, 'cold'), v['runAttrHooks'](!0x1, 'lv80_sorceress3_enhance2') && v['useExtraSkill']('sorceress_magicShield');
                }
            }, {
                'key': 'sorceress_bc_fire',
                'name': '元素化·烈焰',
                'element': 'fire',
                'maxExp': u => u ** 0x2 * 0x258 + 0x708 * u + 0x4b0,
                'canUse'(u, v) {
                    const w = v['buffs']['find'](y => 'bc_cd_buff' === y['group']),
                        x = v['buffs']['find'](y => 'bc_fire_buff2' === y['group']);
                    return !!v['target'] && v['mp'] / v['maxMp'] > 0.8 && !w && !x;
                },
                'description': (u, v) => '够了！现在不许成精了！\x0a\x09\x09\x09化为火焰元素，自身火焰伤害+' + Math['round'](0x32 + 0x1 * u) + '%，免疫火焰伤害，受到的寒冷、闪电伤害+' + Math['round'](0x32 + 0x1 * u) + '%。\x0a\x09\x09\x09元素化状态下，每秒消耗（3×持续时长）%的法力。\x0a\x09\x09\x09当法力值大于80%才可释放，法力值小于20%时将结束元素化状态，每次结束后需要经过至少15秒的冷却才能再次进入元素化状态。',
                'coolDown': 0x1388,
                'castTime': 0x3e8,
                'effect'(u, v, w) {
                    v['addBuff']('bc_fire_buff1', null, w, 'bc_fire_buff1'), v['addBuff']('bc_fire_buff2', null, 0x1, 'bc_fire_buff2'), p(v, 'fire');
                }
            }, {
                'key': 'sorceress_bc_cold',
                'name': '元素化·寒冰',
                'element': 'cold',
                'maxExp': u => u ** 0x2 * 0x258 + 0x708 * u + 0x4b0,
                'canUse'(u, v) {
                    const w = v['buffs']['find'](y => 'bc_cd_buff' === y['group']),
                        x = v['buffs']['find'](y => 'bc_cold_buff2' === y['group']);
                    return !!v['target'] && v['mp'] / v['maxMp'] > 0.8 && !w && !x;
                },
                'description': (u, v) => '够了！现在不许成精了！\x0a\x09\x09\x09化为寒冷元素，自身寒冷伤害+' + Math['round'](0x32 + 0x1 * u) + '%，免疫寒冷伤害，受到的火焰、闪电伤害+' + Math['round'](0x32 + 0x1 * u) + '%。\x0a\x09\x09\x09元素化状态下，每秒消耗（3×持续时长）%的法力。\x0a\x09\x09\x09当法力值大于80%才可释放，法力值小于20%时将结束元素化状态，每次结束后需要经过至少15秒的冷却才能再次进入元素化状态。',
                'coolDown': 0x1388,
                'castTime': 0x3e8,
                'effect'(u, v, w) {
                    v['addBuff']('bc_cold_buff1', null, w, 'bc_cold_buff1'), v['addBuff']('bc_cold_buff2', null, 0x1, 'bc_cold_buff2'), p(v, 'cold');
                }
            }, {
                'key': 'sorceress_bc_lightning',
                'name': '元素化·雷光',
                'element': 'lightning',
                'maxExp': u => u ** 0x2 * 0x258 + 0x708 * u + 0x4b0,
                'canUse'(u, v) {
                    const w = v['buffs']['find'](y => 'bc_cd_buff' === y['group']),
                        x = v['buffs']['find'](y => 'bc_lightning_buff2' === y['group']);
                    return !!v['target'] && v['mp'] / v['maxMp'] > 0.8 && !w && !x;
                },
                'description': (u, v) => '够了！现在不许成精了！\x0a\x09\x09\x09化为闪电元素，自身闪电伤害+' + Math['round'](0x32 + 0x1 * u) + '%，免疫闪电伤害，受到的火焰、寒冷伤害+' + Math['round'](0x32 + 0x1 * u) + '%。\x0a\x09\x09\x09元素化状态下，每秒消耗（3×持续时长）%的法力。\x0a\x09\x09\x09当法力值大于80%才可释放，法力值小于20%时将结束元素化状态，每次结束后需要经过至少15秒的冷却才能再次进入元素化状态。',
                'coolDown': 0x1388,
                'castTime': 0x3e8,
                'effect'(u, v, w) {
                    v['addBuff']('bc_lightning_buff1', null, w, 'bc_lightning_buff1'), v['addBuff']('bc_lightning_buff2', null, 0x1, 'bc_lightning_buff2'), p(v, 'lightning');
                }
            }, {
                'key': 'sorceress_fire_wind',
                'name': '焚骨',
                'element': 'fire',
                'coolDown': 0xafc8,
                'cost': {'mp': u => 0x384},
                'notBreakable': !0x0,
                'description': (u, v) => {
                    const w = (0x96 + 0x8 * u) * (0.01 * v['int'] + 0x1) * (0.08 * u + 0x1);
                    return '引导3秒，每秒对目标造成' + Math['round'](0.5 * w) + '-' + Math['round'](1.5 * w) + '点火焰伤害。';
                },
                'maxExp': u => u ** 0x2 * 0xc8 + 0x258 * u + 0x190,
                'canUse': (u, v) => !!v['target'],
                'effect'(u, v, w) {
                    let x = 0x1;
                    v['runAttrHooks'](!0x1, 'lv15_sorceress1_enhance3') && v['mp'] > 0.2 * v['maxMp'] && (v['mp'] -= 0.02 * v['maxMp'], x += 0.02 * v['maxMp'] * 0.002);
                    const y = v['buffs']['find'](B => 'chord_buff' === B['group']);
                    let z = 0x1;
                    y && (z += 0.3, v['removeBuff'](y));
                    const A = (0x96 + 0x8 * w) * (0.01 * v['int'] + 0x1) * (0.08 * w + 0x1) * v['firedmgAdd'] * z * x;
                    v['addBuff']('sorceress_firewind_buff2', 0xfa5, 0x1, 'sorceress_firewind_buff2'), v['startRead']('sorceress_firewind_buff1', 0xbbd, A, this), p(v, 'fire');
                }
            }, {
                'key': 'xunbao_skill',
                'name': '殉爆',
                'description': '殉爆',
                'coolDown': 0x7d0,
                'maxExp': u => u ** 0x2 * 0x258 + 0x708 * u + 0x4b0,
                'canUse': (u, v) => !!v['target'],
                'effect'(u, v, w) {
                    const {target: x} = v;
                    u['units']['filter'](y => v['willAttack'](y))['forEach'](y => {
                        const z = v['testCrit']();
                        u['sendDamage']('fire', null, y, '殉爆', v['getCritBonus'](z) * v['int'] * 0x2 * v['firedmgAdd'], z);
                    });
                }
            }, {
                'key': 'dianjiliu_skill',
                'name': '电击流',
                'description': '电击流',
                'coolDown': 0x7d0,
                'maxExp': u => u ** 0x2 * 0x258 + 0x708 * u + 0x4b0,
                'canUse': (u, v) => !!v['target'],
                'effect'(u, v, w) {
                    const {target: x} = v;
                    u['units']['filter'](y => v['willAttack'](y))['forEach'](y => {
                        const z = v['testCrit']();
                        s(v, y), u['sendDamage']('lightning', null, y, '电击流', v['getCritBonus'](z) * v['int'] * 0x2 * v['lightningdmgAdd'], z);
                    });
                }
            }, {
                'key': 'sorceress_hellfire_plus',
                'name': '狱炎之门',
                'coolDown': 0x9c40,
                'notBreakable': !0x0,
                'element': 'fire',
                'cost': {'mp': u => 0x2bc},
                'description': (u, v) => {
                    const w = (0x1 + 0.01 * u) * (0.01 * v['int'] + 0x1) * (0.02 * u + 0x1);
                    return '持续施法5秒，每0.25秒对所有目标造成' + Math['round'](0.5 * w) + '-' + Math['round'](1.5 * w) + '点火焰伤害。';
                },
                'maxExp': u => u ** 0x2 * 0xc8 + 0x258 * u + 0x190,
                'canUse': (u, v) => !!v['target'],
                'effect'(u, v, w) {
                    let x = 0x1;
                    v['runAttrHooks'](!0x1, 'lv15_sorceress1_enhance3') && v['mp'] > 0.2 * v['maxMp'] && (v['mp'] -= 0.02 * v['maxMp'], x += 0.02 * v['maxMp'] * 0.002);
                    const y = v['buffs']['find'](B => 'chord_buff' === B['group']);
                    let z = 0x1;
                    y && (z += 0.3, v['removeBuff'](y));
                    const A = (0x1 + 0.01 * w) * (0.01 * v['int'] + 0x1) * (0.02 * w + 0x1) * v['firedmgAdd'] * z * x;
                    v['startRead']('sorceress_hellfire_plus_buff', 0x138d, A, this), p(v, 'fire');
                }
            }, {
                'key': 'sorceress_impulse',
                'name': '脉冲',
                'description': (u, v) => {
                    const w = v['runAttrHooks'](0x1, 'lv80_sorceress5_enhance1'),
                        x = (0xb4 + 0x12 * u) * (0.01 * v['int'] + 0x1) * (0.1 * u + 0x1) * 0x3 * w;
                    return '消耗10格电能，对目标造成1-' + Math['round'](x) + '点闪电伤害。\x0a\x09\x09\x09每次释放“蓄电”将获得1格电能。';
                },
                'element': 'lightning',
                'cost': {'comboPoint': 0xa},
                'coolDown': 0x3e8,
                'maxExp': u => u ** 0x2 * 0x258 + 0x708 * u + 0x4b0,
                'canUse': (u, v) => !!v['target'],
                'effect'(v, w, x) {
                    const {target: y} = w;
                    let z = 0x1;
                    w['runAttrHooks'](!0x1, 'lv15_sorceress1_enhance3') && w['mp'] > 0.2 * w['maxMp'] && (w['mp'] -= 0.02 * w['maxMp'], z += 0.02 * w['maxMp'] * 0.002);
                    const A = w['buffs']['find'](J => 'chord_buff' === J['group']);
                    let B = 0x1;
                    A && (B += 0.3, w['removeBuff'](A));
                    const C = w['buffs']['find'](J => 'sorceress_energy_buff' === J['group']);
                    let D = 0x0, E = 0x1;
                    C && (E += 0.5 + 0.01 * C['arg'], D += 0x1, w['removeBuff'](C));
                    const F = w['runAttrHooks'](!0x1, 'lv80_sorceress6_enhance1'),
                        G = w['runAttrHooks'](0x1, 'lv80_sorceress5_enhance1');
                    let H = (0xb4 + 0x12 * x) * (0.01 * w['int'] + 0x1) * (0.1 * x + 0x1) * w['lightningdmgAdd'] * B * z * E * 0x3;
                    H *= F ? 0.3 + 0.7 * Math['random']() : 0x1 !== G ? Math['random']() * G : Math['random']();
                    const I = w['testCrit'](critRate = Math['min'](w['critRate'] + D, 0x1));
                    s(w, y), v['sendDamage']('lightning', w, y, this, w['getCritBonus'](I) * H, I), p(w, 'lightning');
                }
            }, {
                'key': 'sorceress_thunder',
                'name': '雷神降临',
                'coolDown': 0xafc8,
                'castTime': 0x1f4,
                'notBreakable': !0x0,
                'element': 'lightning',
                'cost': {'mp': u => 0x320},
                'description': (u, v) => {
                    const w = v['runAttrHooks'](!0x1, 'lv80_sorceress6_enhance1'),
                        x = v['runAttrHooks'](0x1, 'lv80_sorceress5_enhance1'),
                        y = (0xc + 0.8 * u) * (0.01 * v['int'] + 0x1) * (0.05 * u + 0x1) * 0x3, z = y * x,
                        A = w ? 0.3 * y : 0x1;
                    return '持续施法5秒，每0.5秒对所有目标造成' + Math['round'](A) + '-' + Math['round'](z) + '点闪电伤害。';
                },
                'maxExp': u => u ** 0x2 * 0xc8 + 0x258 * u + 0x190,
                'canUse': (u, v) => !!v['target'],
                'effect'(v, w, x) {
                    let y = 0x1;
                    w['runAttrHooks'](!0x1, 'lv15_sorceress1_enhance3') && w['mp'] > 0.2 * w['maxMp'] && (w['mp'] -= 0.02 * w['maxMp'], y += 0.02 * w['maxMp'] * 0.002);
                    const z = w['buffs']['find'](F => 'chord_buff' === F['group']);
                    let A = 0x1;
                    z && (A += 0.3, w['removeBuff'](z));
                    const B = w['buffs']['find'](F => 'sorceress_energy_buff' === F['group']);
                    let C = 0x0, D = 0x1;
                    B && (D += 0.5 + 0.01 * B['arg'], 0x1, w['removeBuff'](B));
                    let E = (0xc + 0.8 * x) * (0.01 * w['int'] + 0x1) * (0.05 * x + 0x1) * w['lightningdmgAdd'] * A * y * D * 0x3;
                    w['startRead']('sorceress_thunder_buff', 0x138d, E, this), p(w, 'lightning');
                }
            }, {
                'key': 'sorceress_sea',
                'name': '海啸',
                'coolDown': 0xafc8,
                'notBreakable': !0x0,
                'element': 'cold',
                'cost': {'mp': u => 0x320},
                'description': (u, v) => {
                    const w = (0x19 + 1.5 * u) * (0.01 * v['int'] + 0x1) * (0.05 * u + 0x1);
                    return '持续施法5秒，每0.5秒对所有目标造成' + Math['round'](0.9 * w) + '-' + Math['round'](1.1 * w) + '点寒冷伤害。';
                },
                'maxExp': u => u ** 0x2 * 0xc8 + 0x258 * u + 0x190,
                'canUse': (u, v) => !!v['target'],
                'effect'(u, v, w) {
                    let x = 0x1;
                    v['runAttrHooks'](!0x1, 'lv15_sorceress1_enhance3') && v['mp'] > 0.2 * v['maxMp'] && (v['mp'] -= 0.02 * v['maxMp'], x += 0.02 * v['maxMp'] * 0.002);
                    const y = v['buffs']['find'](B => 'chord_buff' === B['group']);
                    let z = 0x1;
                    y && (z += 0.3, v['removeBuff'](y));
                    let A = (0x19 + 1.5 * w) * (0.01 * v['int'] + 0x1) * (0.05 * w + 0x1) * v['colddmgAdd'] * z * x;
                    v['startRead']('sorceress_sea_buff', 0x138d, A, this), p(v, 'cold');
                }
            }, {
                'key': 'sorceress_blizzard',
                'name': '暴风雪',
                'coolDown': 0xafc8,
                'notBreakable': !0x0,
                'element': 'cold',
                'cost': {'mp': u => 0x320},
                'description': (u, v) => {
                    const w = (0x23 + 2.8 * u) * (0.01 * v['int'] + 0x1) * (0.05 * u + 0x1);
                    return '玻璃渣。\x0a\x09\x09\x09持续施法5秒，每秒对所有目标造成' + Math['round'](0.9 * w) + '-' + Math['round'](1.1 * w) + '点寒冷伤害。\x0a\x09\x09\x09每次造成伤害有50%几率冻结目标1.5秒。';
                },
                'maxExp': u => u ** 0x2 * 0xc8 + 0x258 * u + 0x190,
                'canUse': (u, v) => !!v['target'],
                'effect'(u, v, w) {
                    let x = 0x1;
                    v['runAttrHooks'](!0x1, 'lv15_sorceress1_enhance3') && v['mp'] > 0.2 * v['maxMp'] && (v['mp'] -= 0.02 * v['maxMp'], x += 0.02 * v['maxMp'] * 0.002);
                    const y = v['buffs']['find'](B => 'chord_buff' === B['group']);
                    let z = 0x1;
                    y && (z += 0.3, v['removeBuff'](y));
                    let A = (0x23 + 2.8 * w) * (0.01 * v['int'] + 0x1) * (0.05 * w + 0x1) * v['colddmgAdd'] * z * x;
                    v['startRead']('sorceress_blz_buff', 0x138d, A, this), p(v, 'cold');
                }
            }, {
                'key': 'sorceress_tide',
                'name': '潮汐',
                'element': 'cold',
                'description': (u, v) => {
                    const w = (0x14 + 0x1 * u) * (0.01 * v['int'] + 0x1) * (0.05 * u + 0x1);
                    return '潮长长，长长长，长长长消。\x0a\x09\x09\x09对所有目标造成' + Math['round'](0.9 * w) + '-' + Math['round'](1.1 * w) + '点寒冷伤害。\x0a\x09\x09\x09潮起：目标受到的寒冷伤害提高' + Math['round'](0xfa + 0x5 * u) / 0xa + '%，持续3秒。\x0a\x09\x09\x09潮落：自身物理防御+' + Math['round'](0x1f4 + 0.6 * u * v['level']) + ',持续3秒。';
                },
                'castTime': 0x3e8,
                'coolDown': 0x2ee0,
                'cost': {'mp': u => 0x78},
                'maxExp': u => u ** 0x2 * 0x2bc + 0x708 * u + 0x4b0,
                'canUse': (u, v) => !!v['target'],
                'effect'(v, w, x) {
                    const {target: y} = w;
                    if (v['testDodge'](w, y, this)) return;
                    let z = 0x1;
                    w['runAttrHooks'](!0x1, 'lv15_sorceress1_enhance3') && w['mp'] > 0.2 * w['maxMp'] && (w['mp'] -= 0.02 * w['maxMp'], z += 0.02 * w['maxMp'] * 0.002);
                    const A = w['buffs']['find'](E => 'chord_buff' === E['group']);
                    let B = 0x1;
                    A && (B += 0.3, w['removeBuff'](A));
                    const C = w['buffs']['find'](E => 'tidebf3' === E['group']);
                    let D = '潮汐·潮起';
                    if (C) D = '潮汐·潮落', w['addBuff']('tidebf2', 0xbb8, 0x1f4 + 0.6 * x * w['level'], 'tidebf2'), w['removeBuff'](C); else {
                        for (const E of v['units']['filter'](F => w['willAttack'](F))) E['addBuff']('tidebf1', 0xbb8, 0.25 + 0.005 * x, 'tidebf1');
                        w['addBuff']('tidebf3', null, null, 'tidebf3');
                    }
                    for (const F of v['units']['filter'](G => w['willAttack'](G))) {
                        const G = (0x14 + 0x1 * x) * (0.01 * w['int'] + 0x1) * (0.05 * x + 0x1) * w['colddmgAdd'] * B * z,
                            H = w['testCrit']();
                        v['sendDamage']('cold', w, F, D, w['getCritBonus'](H) * G * (0.9 + 0.2 * Math['random']()), H);
                    }
                    p(w, 'cold');
                }
            }];
        }, 9937: m => {
            function o(p) {
                return p <= 0x3c ? 0.3 * p + 0x1 : 0.5 * p + 0x1 - 0x6;
            }

            m['exports'] = [{
                'key': 'iceArrow',
                'name': '寒冰箭',
                'element': 'ice',
                'description': (p, q) => {
                    const {int: s} = q;
                    return '对目标造成' + (0x0 | 0xa * o(q['level']) * (0.01 * s + 0x1) * o(p) * q['dmgAdd']) + '点寒冷伤害，并使目标未来3秒所有行动减缓20%';
                },
                'castTime': 0x5dc,
                'cost': {'mp': p => 0x8 * (0.2 * p['level'] + 0x1)},
                'maxExp': p => p ** 0x2 * 0x258 + 0x708 * p + 0x4b0,
                'canUse': (p, q) => !!q['target'] && q['target']['coldAbsorb'] < 0x1,
                'effect'(p, q, u) {
                    const {critRate: v, critBonus: w, target: x, int: y = 0x0} = q;
                    if (p['testDodge'](q, x, this)) return;
                    const z = 0xa * o(q['level']) * (0.01 * y + 0x1) * (0.3 * u + 0x1) * q['dmgAdd'];
                    if (Math['random']() < q['runAttrHooks'](!0x1, 'soCold')) x['stun'](0x3, 'freezed'); else {
                        x['addBuff']('cold', 0xbb8, null, 'cold');
                        const A = q['testCrit']();
                        p['sendDamage']('cold', q, x, this, q['getCritBonus'](A) * z, A);
                    }
                }
            }, {
                'key': 'fireBall',
                'name': '火球术',
                'element': 'fire',
                'description': (p, q) => {
                    const {int: s} = q;
                    return '对目标造成' + (0x0 | 0xf * o(q['level']) * (0.01 * s + 0x1) * (0.3 * p + 0x1) * q['dmgAdd']) + '点火焰伤害';
                },
                'castTime': 0x7d0,
                'cost': {'mp': p => 0xa * (0.2 * p['level'] + 0x1)},
                'maxExp': p => p ** 0x2 * 0x258 + 0x708 * p + 0x4b0,
                'canUse': (p, q) => !!q['target'] && q['target']['fireAbsorb'] < 0x1,
                'effect'(p, q, v) {
                    const {critRate: w, critBonus: x, target: y, int: z = 0x0} = q;
                    if (p['testDodge'](q, y, this)) return;
                    const A = 0xf * o(q['level']) * (0.01 * z + 0x1) * (0.3 * v + 0x1) * q['dmgAdd'],
                        B = q['testCrit']();
                    if (p['sendDamage']('fire', q, y, this, q['getCritBonus'](B) * A, B), q['runAttrHooks'](!0x1, 'fireFrenzy')) for (const C of q['skills']) C !== this && 'fire' === C['skillData']['element'] && C['reduceCoolDown'](0x3e8);
                }
            }, {
                'key': 'windBlade',
                'name': '奥术飞弹',
                'element': 'wind',
                'description': (p, q) => {
                    const {int: s} = q;
                    return '释放' + (p + 0x3) + '个飞弹，每个对目标造成' + (0x0 | 0x1 * o(q['level']) * (0.01 * s + 0x1) * q['dmgAdd']) + '点秘法伤害。每个飞弹有20%的几率攻击随机的目标。';
                },
                'coolDown': 0x5dc,
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, v) {
                    const {critRate: w, critBonus: x, int: y = 0x0, target: z} = q,
                        A = 0x1 * o(q['level']) * (0.01 * y + 0x1) * q['dmgAdd'],
                        B = p['units']['filter'](C => C !== z && q['willAttack'](C));
                    for (let C = 0x0; C < v + 0x3; C++) {
                        let D = z;
                        if (p['testDodge'](q, D, this)) return;
                        B['length'] > 0x0 && (!q['target'] || Math['random']() < 0.2) && (D = B[Math['floor'](Math['random']() * B['length'])]);
                        const E = q['testCrit']();
                        p['sendDamage']('magic', q, D, this, q['getCritBonus'](E) * A, E);
                    }
                }
            }, {
                'key': 'burning',
                'name': '灼烧',
                'element': 'fire',
                'description': (p, q) => {
                    const {int: s} = q;
                    return '对目标造成' + (0x0 | 0xf * o(q['level']) * (0.01 * s + 0x1) * (0.3 * p + 0x1) * q['dmgAdd']) + '点火焰伤害';
                },
                'coolDown': 0x1f40,
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => !!q['target'] && q['target']['fireAbsorb'] < 0x1,
                'effect'(p, q, u) {
                    const {target: v, int: w = 0x0} = q;
                    if (p['testDodge'](q, v, this)) return;
                    const x = 0xf * o(q['level']) * (0.01 * w + 0x1) * (0.3 * u + 0x1) * q['dmgAdd'],
                        y = q['testCrit']();
                    p['sendDamage']('fire', q, v, this, q['getCritBonus'](y) * x, y);
                }
            }, {
                'key': 'iceNova',
                'name': '霜之新星',
                'element': 'ice',
                'description': (p, q) => '冻结全体目标' + (p / 0x2 + 0x1) + '秒。',
                'castTime': 0x1f4,
                'coolDown': p => 0x2710,
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => !!p['units']['find'](s => q['willAttack'](s)),
                'effect'(p, q, s) {
                    p['units']['filter'](u => q['willAttack'](u) && u['coldAbsorb'] < 0x1)['forEach'](u => {
                        p['testDodge'](q, u, this) || u['stun'](s / 0x2 + 0x1, 'freezed');
                    });
                }
            }];
        }, 7148: m => {
            function o(p, q, s) {
                if (p['buffs']['find'](u => 'soul_darkfire_buff' === u['group'])) {
                    const u = q['buffs']['find'](v => 'darkfire_buff' === v['group']);
                    u ? (u['arg'] += s, console['log'](u['arg']), u['arg'] = Math['min'](u['arg'], 0x3 * p['atk'] * p['darkdmgAdd']), u['resetTimer'](0xbb8)) : q['addBuff']('darkfire_buff', 0xbb8, s, 'darkfire_buff');
                }
            }

            m['exports'] = [{
                'key': 'soulbringer_atk',
                'name': '普通攻击',
                'coolDown': 0x3e8,
                'description': (p, q) => '对目标造成' + Math['round']((0x28 + 0x2 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x37 + 0x3 * p) / 0x64 * q['atk']) + '点物理伤害，恢复1点法力。',
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, v) {
                    const {target: w, leech: x = 0x0, atk: y} = q;
                    if (p['testDodge'](q, w, this)) return;
                    const z = q['runAttrHooks'](!0x1, 'soulbringer_enhance3'),
                        A = y * (0.4 + 0.02 * v + Math['random']() * (0.15 + 0.01 * v)), B = q['testCrit']();
                    let C = 0x0;
                    z ? (p['sendDamage']('dark', q, w, this, q['getCritBonus'](B) * A * 1.5 * q['darkdmgAdd'], B), C += 0.4, p['units']['filter'](D => D !== w && q['willAttack'](D))['slice'](0x0, 0x2)['forEach'](D => {
                        if (p['testDodge'](q, D, this)) return;
                        const E = y * (0.8 + 0.04 * v + Math['random']() * (0.1 + 0.01 * v));
                        C += 0.4;
                        const F = q['testCrit']();
                        p['sendDamage']('dark', q, D, this, q['getCritBonus'](F) * E * q['darkdmgAdd'] * 1.5, F), o(q, D, q['atk'] * q['darkdmgAdd']), D['runAttrHooks'](q, 'attacked');
                    })) : (p['sendDamage']('melee', q, w, this, q['getCritBonus'](B) * A * q['dmgAdd'], B), C += 0x1), o(q, w, q['atk'] * q['darkdmgAdd']), x && (q['hp'] += x * C), q['mp'] += 0x1, w['rp'] += w['rpOnAttacked'], w['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'onikiri',
                'name': '鬼斩',
                'coolDown': 0x1770,
                'description': (p, q) => '对目标造成' + Math['round']((0x6e + 0x5 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x87 + 0x7 * p) / 0x64 * q['atk']) + '点暗属性伤害。',
                'cost': {'mp': 0xc},
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    const y = q['runAttrHooks'](0x1, 'soulbringer_enhance2'),
                        z = x * (1.1 + 0.05 * u + Math['random']() * (0.25 + 0.02 * u)) * q['darkdmgAdd'] * y,
                        A = q['testCrit']();
                    if (p['sendDamage']('dark', q, v, this, q['getCritBonus'](A) * z, A), y > 0x1) {
                        const B = q['mp'] / q['maxMp'];
                        q['addBuff']('soulbringer_enhance2_buff', 0xfa0, u, 'soulbringer_enhance2_buff'), q['mp'] = q['maxMp'] * B;
                    }
                    w && (q['hp'] += w), v['rp'] += v['rpOnAttacked'], v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'soul_power',
                'name': '鬼神·抛瓦',
                'coolDown': 0x4e20,
                'description': (p, q) => {
                    let s = p;
                    return s += q['runAttrHooks'](0x0, 'soulbringer_enhance6'), Math['round'](q['maxHp_self'] * (0xa + 0.5 * s) / 0x64), '召唤鬼神·抛瓦的力量，持续25秒。\x0a\x09\x09\x09鬼神·抛瓦：提高' + (0x32 + 0x2 * p) + '点力量、智力。';
                },
                'castTime': 0x1f4,
                'cost': {'mp': 0x19},
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    let u = s;
                    u += q['runAttrHooks'](0x0, 'soulbringer_enhance6');
                    const v = q['mp'] / q['maxMp'];
                    q['addBuff']('soul_power_buff', 0x61a8, u, 'soul_power_buff'), q['mp'] = q['maxMp'] * v;
                }
            }, {
                'key': 'moonlight_slash',
                'name': '月光连斩',
                'coolDown': 0xfa0,
                'description': (p, q) => '快速斩击目标两次，每次造成' + Math['round']((0x3c + 0x4 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x4b + 0x5 * p) / 0x64 * q['atk']) + '点暗伤害。',
                'cost': {'mp': 0xc},
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, v) {
                    const {target: w, leech: x = 0x0, atk: y} = q;
                    if (p['testDodge'](q, w, this)) return;
                    const z = y * (0.6 + 0.04 * v + Math['random']() * (0.15 + 0.01 * v)) * q['darkdmgAdd'],
                        A = q['testCrit']();
                    p['sendDamage']('dark', q, w, this, q['getCritBonus'](A) * z, A);
                    const B = y * (0.6 + 0.04 * v + Math['random']() * (0.15 + 0.01 * v)) * q['darkdmgAdd'],
                        C = q['testCrit']();
                    p['sendDamage']('dark', q, w, this, q['getCritBonus'](C) * B, C), x && (q['hp'] += x), w['rp'] += w['rpOnAttacked'], w['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'ghost_whip',
                'name': '鬼影三击剑',
                'description': (p, q) => '对三个目标各刺出一剑，分别造成' + Math['round']((0x50 + 0x4 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x5a + 0x5 * p) / 0x64 * q['atk']) + '点暗属性伤害。',
                'coolDown': 0x1f40,
                'cost': {'mp': 0x19},
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {atk: v, target: w, leech: x} = q,
                        y = v * (0.8 + 0.04 * u + Math['random']() * (0.1 + 0.01 * u)), z = q['testCrit']();
                    p['sendDamage']('dark', q, w, this, q['getCritBonus'](z) * y * q['darkdmgAdd'], z);
                    let A = 0.4;
                    p['units']['filter'](B => B !== w && q['willAttack'](B))['slice'](0x0, 0x2)['forEach'](B => {
                        if (p['testDodge'](q, B, this)) return;
                        const C = v * (0.8 + 0.04 * u + Math['random']() * (0.1 + 0.01 * u));
                        A += 0.4;
                        const D = q['testCrit']();
                        p['sendDamage']('dark', q, B, this, q['getCritBonus'](D) * C * q['darkdmgAdd'], D), B['runAttrHooks'](q, 'attacked');
                    }), x && (q['hp'] += x * A), w['rp'] += w['rpOnAttacked'], w['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'soul_armor',
                'name': '鬼神·铠甲',
                'coolDown': 0x3a98,
                'notBreakable': !0x0,
                'description': (p, q) => {
                    let s = p;
                    return s += q['runAttrHooks'](0x0, 'soulbringer_enhance6'), '召唤鬼神·铠甲的力量，持续20秒。\x0a\x09\x09\x09鬼神·铠甲：物理防御+' + Math['round'](q['def_self'] * (0xf + s / 0x2) / 0x64) + ',暗抗性+' + Math['round'](q['darkResist'] * (0xa + s / 0x2) / 0x64) + '。';
                },
                'castTime': 0x1f4,
                'cost': {'mp': 0xf},
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    let u = s;
                    u += q['runAttrHooks'](0x0, 'soulbringer_enhance6'), q['addBuff']('soul_armor_buff', 0x4e20, u, 'soul_armor_buff'), q['runAttrHooks'](!0x1, 'soulbringer_enhance5') && q['addBuff']('soul_armor_buff2', 0x4e20, u, 'soul_armor_buff2');
                }
            }, {
                'key': 'tombstone',
                'name': '天降墓碑',
                'coolDown': 0x4650,
                'notBreakable': !0x0,
                'description': (p, q) => '每秒召唤一块墓碑，持续5秒。\x0a\x09\x09\x09墓碑：墓碑入场时立即对所有目标造成' + Math['round']((0x50 + 0x2 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x5a + 0x3 * p) / 0x64 * q['atk']) + '点暗属性伤害；自爆后再次对所有目标造成' + Math['round']((0x14 + 0x1 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x19 + 0x1 * p) / 0x64 * q['atk']) + '点暗属性伤害',
                'cost': {'mp': 0x2d},
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    q['startRead']('tombstonesummon_buff', 0x138d, null, this);
                }
            }, {
                'key': 'tombstone_boom',
                'name': '自爆',
                'description': '自爆',
                'castTime': 0x1388,
                'notBreakable': !0x0,
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !0x0,
                'effect'(p, q, s) {
                    for (const u of p['units']['filter'](v => q['willAttack'](v))) {
                        const v = q['def'], w = q['atk'] * (0.2 + 0.01 * v + 0.05 * Math['random']()) * q['darkdmgAdd'],
                            x = q['testCrit']();
                        p['sendDamage']('dark', q, u, this, q['getCritBonus'](x) * w, x), u['runAttrHooks'](q, 'attacked');
                    }
                    q['kill']();
                }
            }, {
                'key': 'soul_weak',
                'name': '鬼神·虚弱',
                'coolDown': 0x61a8,
                'notBreakable': !0x0,
                'description': (p, q) => {
                    let s = p;
                    return s += q['runAttrHooks'](0x0, 'soulbringer_enhance6'), '召唤鬼神·虚弱的力量，持续30秒。\x0a\x09\x09\x09鬼神·虚弱：使所有目标受到的伤害提高' + Math['round'](0xc8 + 0x6 * s) / 0xa + '%。';
                },
                'castTime': 0x1f4,
                'cost': {'mp': 0x19},
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    let u = s;
                    u += q['runAttrHooks'](0x0, 'soulbringer_enhance6'), q['addBuff']('soul_weak_buff1', 0x7530, u, 'soul_weak_buff1'), q['runAttrHooks'](!0x1, 'soulbringer_enhance4') && q['addBuff']('soul_weak_buff2', 0x7530, u, 'soul_weak_buff2');
                }
            }, {
                'key': 'ghost_fury',
                'name': '鬼斩·裂地',
                'description': (p, q) => '对四个目标分别造成' + Math['round']((0xb4 + 0x8 * p) / 0x64 * q['atk']) + '-' + Math['round']((0xdc + 0xc * p) / 0x64 * q['atk']) + '点暗属性伤害。',
                'coolDown': 0x4e20,
                'cost': {'mp': 0x41},
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {atk: v, target: w, leech: x} = q,
                        y = v * (1.8 + 0.08 * u + Math['random']() * (0.4 + 0.04 * u)), z = q['testCrit']();
                    p['sendDamage']('dark', q, w, this, q['getCritBonus'](z) * y * q['darkdmgAdd'], z);
                    let A = 0.4;
                    p['units']['filter'](B => B !== w && q['willAttack'](B))['slice'](0x0, 0x3)['forEach'](B => {
                        if (p['testDodge'](q, B, this)) return;
                        const C = v * (1.8 + 0.08 * u + Math['random']() * (0.4 + 0.04 * u));
                        A += 0.4;
                        const D = q['testCrit']();
                        p['sendDamage']('dark', q, B, this, q['getCritBonus'](D) * C * q['darkdmgAdd'], D), B['runAttrHooks'](q, 'attacked');
                    }), x && (q['hp'] += x * A), w['rp'] += w['rpOnAttacked'], w['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'soul_shadow',
                'name': '鬼影瞬闪',
                'coolDown': 0x4e20,
                'description': (p, q) => '对目标造成' + Math['round']((0xe6 + 0xa * p) / 0x64 * q['atk']) + '-' + Math['round']((0x118 + 0xf * p) / 0x64 * q['atk']) + '点暗属性伤害。\x0a\x09\x09\x09若携带了被动技能“凭依”，则随机使目标停滞1-5秒。',
                'cost': {'mp': 0x46},
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    const y = x * (2.3 + 0.1 * u + Math['random']() * (0.5 + 0.05 * u)) * q['darkdmgAdd'],
                        z = q['testCrit']();
                    p['sendDamage']('dark', q, v, this, q['getCritBonus'](z) * y, z), q['runAttrHooks'](0x0, 'soulbringer_enhance3') && v['addBuff']('stop_buff', 0x3e8 * (0x1 + 0x4 * Math['random']()), null, 'stop_buff'), w && (q['hp'] += w), v['rp'] += v['rpOnAttacked'], v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'soul_ice',
                'name': '鬼神·冰霜',
                'coolDown': 0x4e20,
                'description': (p, q) => {
                    let s = p;
                    return s += q['runAttrHooks'](0x0, 'soulbringer_enhance6'), '召唤鬼神·冰霜的力量，持续10秒。\x0a\x09\x09\x09鬼神·冰霜：每秒对所有目标造成' + (0x1 + Math['round']((0xa + 0.1 * s) / 0x64 * q['atk'])) + '-' + (0x1 + Math['round']((0xf + 0.2 * s) / 0x64 * q['atk'])) + '点寒冷伤害并使其获得“冰缓”效果，10%几率额外获得“冻结”效果。\x0a\x09\x09\x09冰缓：减速20%，持续2秒。\x0a\x09\x09\x09冻结：无法行动，持续1.5秒。';
                },
                'castTime': 0x1f4,
                'cost': {'mp': 0x2d},
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    let u = s;
                    u += q['runAttrHooks'](0x0, 'soulbringer_enhance6'), q['addBuff']('soul_ice_buff', 0x2715, u, 'soul_ice_buff', maxStack = 0x1, this);
                }
            }, {
                'key': 'soul_poison',
                'name': '鬼神·瘟疫',
                'coolDown': 0x4e20,
                'description': (p, q) => {
                    let s = p;
                    return s += q['runAttrHooks'](0x0, 'soulbringer_enhance6'), '召唤鬼神·瘟疫的力量，持续10秒。\x0a\x09\x09\x09鬼神·瘟疫：每秒对所有目标造成' + (0x1 + Math['round']((0xa + 0.1 * s) / 0x64 * q['atk'])) + '-' + (0x1 + Math['round']((0xf + 0.2 * s) / 0x64 * q['atk'])) + '点毒素伤害，20%几率使目标获得“中毒”效果。\x0a\x09\x09\x09中毒：每3秒受到20%攻击力的毒素伤害，持续30秒，可叠加；受“中毒”效果影响的目标每损失1%生命值，“中毒”的伤害提高5%。';
                },
                'castTime': 0x1f4,
                'cost': {'mp': 0x3c},
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    let u = s;
                    u += q['runAttrHooks'](0x0, 'soulbringer_enhance6'), q['addBuff']('soul_poison_buff', 0x2715, u, 'soul_poison_buff', maxStack = 0x1, this);
                }
            }, {
                'key': 'ghost_puncture',
                'name': '鬼斩·穿刺',
                'description': (p, q) => '对五个目标分别造成' + Math['round']((0x14a + 0x14 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x1a4 + 0x1e * p) / 0x64 * q['atk']) + '点暗属性伤害，并使目标停滞3秒。',
                'coolDown': 0x88b8,
                'cost': {'mp': 0x6e},
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {atk: v, target: w, leech: x} = q,
                        y = v * (3.3 + 0.2 * u + Math['random']() * (0.9 + 0.1 * u)), z = q['testCrit']();
                    p['sendDamage']('dark', q, w, this, q['getCritBonus'](z) * y * q['darkdmgAdd'], z), w['addBuff']('stop_buff', 0xbb8, u, 'stop_buff');
                    let A = 0.4;
                    p['units']['filter'](B => B !== w && q['willAttack'](B))['slice'](0x0, 0x4)['forEach'](B => {
                        if (p['testDodge'](q, B, this)) return;
                        const C = v * (3.3 + 0.2 * u + Math['random']() * (0.9 + 0.1 * u));
                        A += 0.4;
                        const D = q['testCrit']();
                        p['sendDamage']('dark', q, B, this, q['getCritBonus'](D) * C * q['darkdmgAdd'], D), B['addBuff']('stop_buff', 0xbb8, u, 'stop_buff'), B['runAttrHooks'](q, 'attacked');
                    }), x && (q['hp'] += x * A), w['rp'] += w['rpOnAttacked'], w['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'soul_darkfire',
                'name': '鬼神·冥炎',
                'coolDown': 0x4e20,
                'description': (p, q) => {
                    let s = p;
                    return s += q['runAttrHooks'](0x0, 'soulbringer_enhance6'), '召唤鬼神·冥炎的力量，持续' + Math['round'](0x64 + 0x2 * s) / 0xa + '秒。\x0a\x09\x09\x09鬼神·冥炎：普通攻击命中目标时，为目标添加“冥炎”效果。\x0a\x09\x09\x09冥炎：每秒受到100%攻击力的暗属性伤害，持续3秒，最多叠加3次。';
                },
                'castTime': 0x1f4,
                'cost': {'mp': 0x78},
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    let u = s;
                    u += q['runAttrHooks'](0x0, 'soulbringer_enhance6'), q['addBuff']('soul_darkfire_buff', 0x2715 + 0xc8 * u, null, 'soul_darkfire_buff', maxStack = 0x1, this);
                }
            }, {
                'key': 'tombstoneplus',
                'name': '坟头蹦迪',
                'coolDown': 0x9c40,
                'notBreakable': !0x0,
                'description': (p, q) => (Math['round']((0x190 + 0x28 * p) / 0x64 * q['atk']), Math['round']((0x1f4 + 0x32 * p) / 0x64 * q['atk']), '召唤一个坟头上场。\x0a\x09\x09\x09坟头：携带“蹦迪”、“自爆”技能。'),
                'cost': {'mp': 0x96},
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !p['units']['find'](s => 'summon_tombstoneplus' === s['type']),
                'effect'(p, q, s) {
                    p['addEnemy']('summon_tombstoneplus', null, 0x0, q, this);
                }
            }, {
                'key': 'tombstoneplus_skill1',
                'name': '蹦迪',
                'castTime': 0x3e8,
                'coolDown': 0x64,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    for (const u of p['units']['filter'](v => q['willAttack'](v))) q['target']['target'] = q;
                }
            }, {
                'key': 'tombstoneplus_skill2',
                'name': '自爆',
                'description': '自爆',
                'castTime': 0x2710,
                'coolDown': 0x7530,
                'notBreakable': !0x0,
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !0x0,
                'effect'(p, q, s) {
                    for (const u of p['units']['filter'](v => q['willAttack'](v))) {
                        const v = q['def'],
                            w = q['atk'] * (0x4 + 0.4 * v + Math['random']() * (0x1 + 0.5 * v)) * q['darkdmgAdd'],
                            x = q['testCrit']();
                        p['sendDamage']('dark', q, u, this, q['getCritBonus'](x) * w, x), u['runAttrHooks'](q, 'attacked');
                    }
                    q['kill']();
                }
            }, {
                'key': 'ghost_pidi',
                'name': '鬼斩·辟地',
                'description': (p, q) => '对六个目标分别造成' + Math['round']((0xc8 + 0xa * p) / 0x64 * q['atk']) + '-' + Math['round']((0xdc + 0x14 * p) / 0x64 * q['atk']) + '点暗属性伤害，并为目标添加“冥炎”效果。\x0a\x09\x09\x09冥炎：每秒受到100%攻击力的暗属性伤害，持续3秒，最多叠加3次。',
                'coolDown': 0x2ee0,
                'cost': {'mp': 0x5a},
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, v) {
                    const {atk: w, target: x, leech: y} = q,
                        z = w * (0x2 + 0.1 * v + Math['random']() * (0.2 + 0.1 * v)), A = q['testCrit']();
                    p['sendDamage']('dark', q, x, this, q['getCritBonus'](A) * z * q['darkdmgAdd'], A), o(q, x, q['atk'] * q['darkdmgAdd']);
                    let B = 0.4;
                    p['units']['filter'](C => C !== x && q['willAttack'](C))['slice'](0x0, 0x4)['forEach'](C => {
                        if (p['testDodge'](q, C, this)) return;
                        const D = w * (3.3 + 0.2 * v + Math['random']() * (0.9 + 0.1 * v));
                        B += 0.4;
                        const E = q['testCrit']();
                        p['sendDamage']('dark', q, C, this, q['getCritBonus'](E) * D * q['darkdmgAdd'], E), o(q, C, q['atk'] * q['darkdmgAdd']), C['runAttrHooks'](q, 'attacked');
                    }), y && (q['hp'] += y * B), x['rp'] += x['rpOnAttacked'], x['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'dark_jige',
                'name': '吉哥降临',
                'coolDown': 0x4e20,
                'castTime': 0x1388,
                'description': (p, q) => (Math['round']((0x190 + 0x28 * p) / 0x64 * q['atk']), Math['round']((0x1f4 + 0x32 * p) / 0x64 * q['atk']), '召唤神官吉哥上场。\x0a\x09\x09\x09吉哥：携带“鬼斩”、“天降墓碑”、“自爆”技能。'),
                'cost': {'mp': 0x1c2},
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !p['units']['find'](s => 'summon_jige' === s['type']),
                'effect'(p, q, s) {
                    p['addEnemy']('summon_jige', null, 0x0, q, this);
                }
            }, {
                'key': 'jige_atk',
                'name': '普通攻击',
                'coolDown': 0x3e8,
                'description': (p, q) => (Math['round']((0x28 + 0x2 * p) / 0x64 * q['atk']), Math['round']((0x37 + 0x3 * p) / 0x64 * q['atk']), '吉哥普攻。'),
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {atk: v, target: w, leech: x} = q,
                        y = v * (0.4 + 0.02 * u + Math['random']() * (0.15 + 0.01 * u)), z = q['testCrit']();
                    p['sendDamage']('dark', q, w, this, q['getCritBonus'](z) * y * q['darkdmgAdd'], z);
                    let A = 0.4;
                    p['units']['filter'](B => B !== w && q['willAttack'](B))['slice'](0x0, 0x2)['forEach'](B => {
                        if (p['testDodge'](q, B, this)) return;
                        const C = v * (0.4 + 0.2 * u + Math['random']() * (0.15 + 0.1 * u));
                        A += 0.4;
                        const D = q['testCrit']();
                        p['sendDamage']('dark', q, B, this, q['getCritBonus'](D) * C * q['darkdmgAdd'], D), B['runAttrHooks'](q, 'attacked');
                    }), w['rp'] += w['rpOnAttacked'], w['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'soul_iceplus',
                'name': '鬼神·冰晶',
                'coolDown': 0x4e20,
                'description': (p, q) => {
                    let s = p;
                    return s += q['runAttrHooks'](0x0, 'soulbringer_enhance6'), '召唤鬼神·冰晶的力量，持续10秒。\x0a\x09\x09\x09鬼神·冰晶：每0.5秒对所有目标造成' + (0x1 + Math['round']((0x5 + 0x1 * p) / 0x64 * q['atk'])) + '-' + (0x1 + Math['round']((0xa + 0x2 * p) / 0x64 * q['atk'])) + '点寒冷伤害并使其获得“冰缓”效果，20%几率额外获得“冻结”效果。\x0a\x09\x09\x09冰缓：减速20%，持续5秒。\x0a\x09\x09\x09冻结：无法行动，持续2秒。';
                },
                'castTime': 0x1f4,
                'cost': {'mp': 0xc8},
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    let u = s;
                    u += q['runAttrHooks'](0x0, 'soulbringer_enhance6'), q['addBuff']('soul_iceplus_buff', 0x2715, u, 'soul_iceplus_buff', maxStack = 0x1, this);
                }
            }, {
                'key': 'soul_7',
                'name': '鬼神·鱼头',
                'coolDown': 0x88b8,
                'castTime': 0xbb8,
                'description': (p, q) => {
                    let s = p;
                    return s += q['runAttrHooks'](0x0, 'soulbringer_enhance6'), '召唤第八鬼神·鱼头对所有目标发起一次攻击，造成' + Math['round']((0x352 + 0x5a * s) / 0x64 * q['atk']) + '-' + Math['round']((0x47e + 0x96 * s) / 0x64 * q['atk']) + '点暗属性伤害。\x0a\x09\x09\x09第八鬼神·鱼头会吞噬在场所有其他鬼神的力量，伤害增加（吞噬数量×100）%。';
                },
                'cost': {'mp': 0x4e2},
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(q, v, w) {
                    const {target: x, leech: y = 0x0, atk: z} = v;
                    let A = w;
                    A += v['runAttrHooks'](0x0, 'soulbringer_enhance6');
                    let B = 0x0;
                    const C = v['buffs']['find'](L => 'soul_power_buff' === L['group']);
                    C && (B += 0x1, v['removeBuff'](C));
                    const D = v['buffs']['find'](L => 'soul_armor_buff' === L['group']);
                    D && (B += 0x1, v['removeBuff'](D));
                    const E = v['buffs']['find'](L => 'soul_armor_buff2' === L['group']);
                    E && v['removeBuff'](E);
                    const F = v['buffs']['find'](L => 'soul_weak_buff1' === L['group']);
                    F && (B += 0x1, v['removeBuff'](F));
                    const G = v['buffs']['find'](L => 'soul_weak_buff2' === L['group']);
                    G && v['removeBuff'](G);
                    const H = v['buffs']['find'](L => 'soul_ice_buff' === L['group']);
                    H && (B += 0x1, v['removeBuff'](H));
                    const I = v['buffs']['find'](L => 'soul_darkfire_buff' === L['group']);
                    I && (B += 0x1, v['removeBuff'](I));
                    const J = v['buffs']['find'](L => 'soul_poison_buff' === L['group']);
                    J && (B += 0x1, v['removeBuff'](J));
                    const K = v['buffs']['find'](L => 'soul_iceplus_buff' === L['group']);
                    K && (B += 0x1, v['removeBuff'](K));
                    for (const L of q['units']['filter'](M => v['willAttack'](M))) {
                        const M = v['atk'] * (8.5 + 0.9 * A + Math['random']() * (11.5 + 1.5 * A)) * v['darkdmgAdd'] * (0x1 + B),
                            N = v['testCrit']();
                        q['sendDamage']('dark', v, L, this, v['getCritBonus'](N) * M, N);
                    }
                    x['rp'] += x['rpOnAttacked'], x['runAttrHooks'](v, 'attacked');
                }
            }];
        }, 3246: m => {
            function o(p) {
                let q = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : 0x1;
                const s = p['runAttrHooks'](0x5, 'maxComboPoint');
                p['runAttrHooks'](q, 'fistCombo'), p['comboPoint'] = Math['min'](s, p['comboPoint'] + q);
            }

            m['exports'] = [{
                'key': 'vbsk1',
                'name': '直拳',
                'coolDown': 0xbb8,
                'castTime': 0x1f4,
                'description': (p, q) => '平平无奇的一拳，臻至化境或许有特殊的效果。\x0a\x09\x09\x09根据自身攻击力，对目标造成' + Math['round']((0x3c + 0x4 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x64 + 0x4 * p) / 0x64 * q['atk']) + '点物理伤害，获得1格拳意。\x0a\x09\x09\x09明奇：自身急速+' + (0xa + Math['round'](0x4 * p) / 0xa) + '%，持续1秒。\x0a\x09\x09\x09行偶：自身攻击力+' + (0xa + Math['round'](0x4 * p) / 0xa) + '%，持续1秒。\x0a\x09\x09\x09臻至化境：技能达到50级时，每次命中使目标昏迷，持续0.1秒。',
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    const y = x * (0.6 + 0.04 * u + 0.4 * Math['random']()) * q['dmgAdd'], z = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](z) * y, z), o(q), (p['player']['careerInfo']['selectedSkills']['findIndex'](A => A === this['type']) + 0x1) % 0x2 != 0x0 ? q['addBuff']('vbsk1bf1', 0x3ed, 0.1 + 0.04 * u, 'vbsk1bf1') : q['addBuff']('vbsk1bf2', 0x3ed, 1.1 + 0.04 * u, 'vbsk1bf2'), u >= 0x32 && v['addBuff']('vbsk1bf3', 0x64, null, 'vbsk1bf3'), w && (q['hp'] += w), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'vbsk2',
                'name': '推掌',
                'coolDown': 0xbb8,
                'castTime': 0x1f4,
                'description': (p, q) => '平平无奇的一拳，臻至化境或许有特殊的效果。\x0a\x09\x09\x09根据自身攻击力，对目标造成' + Math['round']((0x3c + 0x4 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x64 + 0x4 * p) / 0x64 * q['atk']) + '点物理伤害，获得1格拳意。\x0a\x09\x09\x09明奇：使目标受到的伤害提高' + (0xa + Math['round'](0x4 * p) / 0xa) + '%，持续1秒。\x0a\x09\x09\x09行偶：使自身受到的伤害降低' + (0xa + Math['round'](0x4 * p) / 0xa) + '%，持续1秒。\x0a\x09\x09\x09臻至化境：技能达到50级时，每次命中使目标减速50%，持续1秒。',
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    const y = x * (0.6 + 0.04 * u + 0.4 * Math['random']()) * q['dmgAdd'], z = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](z) * y, z), o(q), (p['player']['careerInfo']['selectedSkills']['findIndex'](A => A === this['type']) + 0x1) % 0x2 != 0x0 ? v['addBuff']('vbsk2bf1', 0x3ed, 1.1 + 0.04 * u, 'vbsk2bf1') : q['addBuff']('vbsk2bf1', 0x3ed, 0.9 - 0.04 * u, 'vbsk2bf1'), u >= 0x32 && v['addBuff']('vbsk2bf2', 0x3e8, 0.5, 'vbsk2bf2'), w && (q['hp'] += w), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'vbsk3',
                'name': '童子迎宾',
                'coolDown': 0xbb8,
                'castTime': 0x1f4,
                'description': (p, q) => '以礼迎客，以力送客。\x0a\x09\x09\x09根据自身攻击力，对目标造成' + Math['round']((0x78 + 0xc * p) / 0x64 * q['atk']) + '-' + Math['round']((0xc8 + 0xc * p) / 0x64 * q['atk']) + '点物理伤害。\x0a\x09\x09\x09末境：消耗所有拳意。每消耗1格拳意，自身将获得' + Math['round'](0x64 + 0x4 * p) / 0xa + '%生命值上限的护盾，持续1秒。',
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    q['comboPoint'] >= 0x1 && (q['addBuff']('shield_wall_buff', 0x3e8, q['maxHp'] * (0.1 + 0.004 * u) * q['comboPoint'], 'shield_wall_buff'), q['comboPoint'] = 0x0);
                    const y = x * (1.2 + 0.12 * u + 0.8 * Math['random']()) * q['dmgAdd'], z = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](z) * y, z), w && (q['hp'] += w), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'vbsk4',
                'name': '扑面掌',
                'coolDown': 0xbb8,
                'castTime': 0x1f4,
                'description': (p, q) => '瞄准目标鼻梁骨击出，顺势推入脑干的迅猛一掌。\x0a\x09\x09\x09根据自身攻击力，对目标造成' + Math['round']((0x50 + 0x8 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x64 + 0x8 * p) / 0x64 * q['atk']) + '点物理伤害，获得1格拳意。\x0a\x09\x09\x09明奇：自身暴击几率+' + (0x14 + Math['round'](0x4 * p) / 0xa) + '%，持续1秒。\x0a\x09\x09\x09行偶：打断目标正在释放的技能，并使其0.5秒内无法释放同样的技能。',
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    const y = x * (0.8 + 0.04 * u + 0.4 * Math['random']()) * q['dmgAdd'], z = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](z) * y, z), o(q), (p['player']['careerInfo']['selectedSkills']['findIndex'](A => A === this['type']) + 0x1) % 0x2 != 0x0 ? q['addBuff']('vbsk4bf1', 0x3ed, 0.2 - 0.004 * u, 'vbsk4bf1') : (null !== v['casting'] && !v['casting']['notBreakable'] || null !== v['reading'] && v['reading']['skill'] && !v['reading']['skill']['notBreakable']) && v['breakCasting'](0x1f4), w && (q['hp'] += w), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'vbsk5',
                'name': '搬拦捶',
                'coolDown': 0xbb8,
                'castTime': 0x1f4,
                'description': (p, q) => '先化后打，以掌搬移拦截，以拳进击猛砸，柔中寓刚。\x0a\x09\x09\x09根据自身攻击力，对目标造成' + Math['round']((0x50 + 0x8 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x64 + 0x8 * p) / 0x64 * q['atk']) + '点物理伤害，获得1格拳意。\x0a\x09\x09\x09明奇：获得' + Math['round'](0x64 + 0x2 * p) + '%生命值上限的护盾，持续1秒。\x0a\x09\x09\x09行偶：恢复' + Math['round'](0x64 + 0x2 * p) / 0xa + '%的生命值。',
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    const y = x * (0.8 + 0.04 * u + 0.4 * Math['random']()) * q['dmgAdd'], z = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](z) * y, z), o(q), (p['player']['careerInfo']['selectedSkills']['findIndex'](A => A === this['type']) + 0x1) % 0x2 != 0x0 ? q['addBuff']('shield_wall_buff', 0x3e8, q['maxHp'] * (0x1 + 0.02 * u), 'shield_wall_buff') : q['hp'] += q['maxHp'] * (0.1 + 0.002 * u), w && (q['hp'] += w), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'vbsk6',
                'name': '顶心肘',
                'coolDown': 0xbb8,
                'castTime': 0x1f4,
                'description': (p, q) => '急步切入，以肘猛击对方心窝。\x0a\x09\x09\x09根据自身攻击力，对目标造成' + Math['round']((0x50 + 0x8 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x64 + 0x8 * p) / 0x64 * q['atk']) + '点物理伤害，获得1格拳意。\x0a\x09\x09\x09明奇：自身暴击伤害+' + (0x32 + p) + '%，持续1秒。\x0a\x09\x09\x09行偶：永久减少目标' + (0x32 + p) + '点物理防御等级。',
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    const y = x * (0.8 + 0.04 * u + 0.4 * Math['random']()) * q['dmgAdd'], z = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](z) * y, z), o(q), (p['player']['careerInfo']['selectedSkills']['findIndex'](A => A === this['type']) + 0x1) % 0x2 != 0x0 ? q['addBuff']('vbsk6bf1', 0x3e8, 0.5 + 0.01 * u, 'vbsk6bf1') : v['addBuff']('vbsk6bf2', null, 0x32 + u), w && (q['hp'] += w), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'vbsk7',
                'name': '黑虎掏心',
                'coolDown': 0xbb8,
                'castTime': 0x1f4,
                'description': (p, q) => '猛虎下山，博兔亦用全力。\x0a\x09\x09\x09根据自身攻击力，对目标造成' + Math['round']((0xa0 + 0x10 * p) / 0x64 * q['atk']) + '-' + Math['round']((0xf0 + 0x10 * p) / 0x64 * q['atk']) + '点物理伤害。\x0a\x09\x09\x09末境：消耗所有拳意。每消耗1格拳意，造成的伤害提高' + Math['round'](0x32 + p) / 0xa + '%。',
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    let y = 0x1;
                    q['comboPoint'] >= 0x1 && (y += q['comboPoint'], q['comboPoint'] = 0x0);
                    const z = x * (1.6 + 0.16 * u + 0.8 * Math['random']()) * q['dmgAdd'] * y, A = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](A) * z, A), w && (q['hp'] += w), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'vbsk8',
                'name': '扫堂腿',
                'coolDown': 0xbb8,
                'castTime': 0x1f4,
                'description': (p, q) => '腿似铁帚，弹膝横扫，同时躲开对方的上段攻击。\x0a\x09\x09\x09根据自身攻击力，对5个目标分别造成' + Math['round']((0x3c + 0x2 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x50 + 0x2 * p) / 0x64 * q['atk']) + '点物理伤害，获得1格拳意。\x0a\x09\x09\x09明奇：命中后使目标减速' + Math['round'](0x64 + 0x4 * p) / 0xa + '%，持续1秒。\x0a\x09\x09\x09行偶：命中后自身闪避几率+' + Math['round'](0xc8 + 0x8 * p) / 0xa + '%，持续1秒。',
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    const y = x * (0.6 + 0.02 * u + 0.2 * Math['random']()) * q['dmgAdd'], z = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](z) * y, z), p['units']['filter'](A => A !== v && q['willAttack'](A))['slice'](0x0, 0x4)['forEach'](A => {
                        if (p['testDodge'](q, A, this)) return;
                        const B = x * (0.6 + 0.02 * u + 0.2 * Math['random']()) * q['dmgAdd'], C = q['testCrit']();
                        p['sendDamage']('melee', q, A, this, q['getCritBonus'](C) * B * q['dmgAdd'], C), A['runAttrHooks'](q, 'attacked');
                    }), o(q), (p['player']['careerInfo']['selectedSkills']['findIndex'](A => A === this['type']) + 0x1) % 0x2 != 0x0 ? v['addBuff']('vbsk2bf2', 0x3e8, 0.9 - 0.004 * u, 'vbsk2bf2') : q['addBuff']('vbsk6bf1', 0x3e8, 0.2 + 0.008 * u, 'vbsk6bf1'), w && (q['hp'] += w), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'vbsk9',
                'name': '双劈手',
                'coolDown': 0xbb8,
                'castTime': 0x1f4,
                'description': (p, q) => '拧腰切胯，随后双臂如抽鞭长击，翻腾不息。\x0a\x09\x09\x09根据自身攻击力，对目标造成' + Math['round']((0x50 + 0x8 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x64 + 0x8 * p) / 0x64 * q['atk']) + '点物理伤害，获得1格拳意。\x0a\x09\x09\x09明奇：命中后刷新目标的减益效果。\x0a\x09\x09\x09行偶：命中后刷新自身的增益效果。',
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    const y = x * (0.8 + 0.08 * u + 0.4 * Math['random']()) * q['dmgAdd'], z = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](z) * y, z), o(q), (p['player']['careerInfo']['selectedSkills']['findIndex'](A => A === this['type']) + 0x1) % 0x2 != 0x0 ? v['addBuff']('vbsk2bf2', 0x3e8, 0.9 - 0.004 * u, 'vbsk2bf2') : q['addBuff']('vbsk6bf1', 0x3e8, 0.2 + 0.008 * u, 'vbsk6bf1'), w && (q['hp'] += w), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'vbsk10',
                'name': '无影腿',
                'coolDown': 0xbb8,
                'castTime': 0x1f4,
                'description': (p, q) => '手若蝴蝶翩飞，惑敌，脚若鬼蜮射影，夺命。\x0a\x09\x09\x09根据自身攻击力，对目标造成' + Math['round']((0x50 + 0x8 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x64 + 0x8 * p) / 0x64 * q['atk']) + '点物理伤害，获得1格拳意。\x0a\x09\x09\x09明奇：额外造成' + (0x2 + (p > 0x31 ? 0x1 : 0x0)) + '次伤害。\x0a\x09\x09\x09行偶：对有负面状态的目标额外造成（50\x20+\x202/Lv）%的伤害。',
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    const y = x * (0.8 + 0.08 * u + 0.4 * Math['random']()) * q['dmgAdd'], z = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](z) * y, z), o(q), (p['player']['careerInfo']['selectedSkills']['findIndex'](A => A === this['type']) + 0x1) % 0x2 != 0x0 ? v['addBuff']('vbsk2bf2', 0x3e8, 0.9 - 0.004 * u, 'vbsk2bf2') : q['addBuff']('vbsk6bf1', 0x3e8, 0.2 + 0.008 * u, 'vbsk6bf1'), w && (q['hp'] += w), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'vbsk11',
                'name': '铁山靠',
                'coolDown': 0xbb8,
                'castTime': 0x1f4,
                'description': (p, q) => '将全身重量运至肩膀，静若岳镇渊渟，动若泰山压顶。\x0a\x09\x09\x09根据自身攻击力，对目标造成' + Math['round']((0x50 + 0x8 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x64 + 0x8 * p) / 0x64 * q['atk']) + '点物理伤害，获得1格拳意。\x0a\x09\x09\x09明奇：自身每点拳意提高（5+0.1/Lv）%的伤害。\x0a\x09\x09\x09行偶：附加（50+1/Lv）%防御力的伤害。',
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    const y = x * (0.8 + 0.08 * u + 0.4 * Math['random']()) * q['dmgAdd'], z = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](z) * y, z), o(q), (p['player']['careerInfo']['selectedSkills']['findIndex'](A => A === this['type']) + 0x1) % 0x2 != 0x0 ? v['addBuff']('vbsk2bf2', 0x3e8, 0.9 - 0.004 * u, 'vbsk2bf2') : q['addBuff']('vbsk6bf1', 0x3e8, 0.2 + 0.008 * u, 'vbsk6bf1'), w && (q['hp'] += w), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'vbsk12',
                'name': '隔山打牛',
                'coolDown': 0xbb8,
                'castTime': 0x1f4,
                'description': (p, q) => '浮屠善幻此技能，乃是深山白猿授。\x0a\x09\x09\x09根据自身攻击力，对目标造成' + Math['round']((0xf0 + 0x18 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x168 + 0x20 * p) / 0x64 * q['atk']) + '点物理伤害。\x0a\x09\x09\x09末境：消耗所有拳意，每点拳意将（10\x20+\x200.1/Lv）%的该技能伤害扩散至全体。',
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    let y = 0x1;
                    q['comboPoint'] >= 0x1 && (y += q['comboPoint'], q['comboPoint'] = 0x0);
                    const z = x * (1.6 + 0.16 * u + 0.8 * Math['random']()) * q['dmgAdd'] * y, A = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](A) * z, A), w && (q['hp'] += w), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'vbsk13',
                'name': '白鹤亮翅',
                'coolDown': 0xbb8,
                'castTime': 0x1f4,
                'description': (p, q) => '沉势蓄劲神机足，亮翅由来见白鹤。\x0a\x09\x09\x09根据自身攻击力，对目标造成' + Math['round']((0xa0 + 0x10 * p) / 0x64 * q['atk']) + '-' + Math['round']((0xf0 + 0x10 * p) / 0x64 * q['atk']) + '点物理伤害。\x0a\x09\x09\x09末境：消耗所有拳意，每点拳意自身恢复（1\x20+\x200.1/Lv）%的最大生命值。',
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    let y = 0x1;
                    q['comboPoint'] >= 0x1 && (y += q['comboPoint'], q['comboPoint'] = 0x0);
                    const z = x * (1.6 + 0.16 * u + 0.8 * Math['random']()) * q['dmgAdd'] * y, A = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](A) * z, A), w && (q['hp'] += w), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'vbsk14',
                'name': '游龙',
                'coolDown': 0xbb8,
                'castTime': 0x1f4,
                'description': (p, q) => '八卦游龙。休、生、伤、杜、景、死、惊、开。\x0a\x09\x09\x09根据自身攻击力，对目标造成' + Math['round']((0x168 + 0x1e * p) / 0x64 * q['atk']) + '-' + Math['round']((0x1e0 + 0x28 * p) / 0x64 * q['atk']) + '点物理伤害。\x0a\x09\x09\x09末境：消耗所有拳意，每点拳意附加技能伤害\x202%的\x20各类元素伤害。\x0a\x09\x09\x09明奇：8次游龙之后，该技能造成一次20倍的伤害。\x0a\x09\x09\x09行偶：每次游龙之后，该技能伤害+25%，最高提升8次。\x0a\x09\x09\x09',
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    let y = 0x1;
                    q['comboPoint'] >= 0x1 && (y += q['comboPoint'], q['comboPoint'] = 0x0);
                    const z = x * (1.6 + 0.16 * u + 0.8 * Math['random']()) * q['dmgAdd'] * y, A = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](A) * z, A), w && (q['hp'] += w), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'vbsk15',
                'name': '太极',
                'coolDown': 0xbb8,
                'castTime': 0x1f4,
                'description': (p, q) => '只一招只一式，亦或是无招也无式。\x0a\x09\x09\x09根据自身攻击力，对目标造成' + Math['round']((0x168 + 0x1e * p) / 0x64 * q['atk']) + '-' + Math['round']((0x1e0 + 0x28 * p) / 0x64 * q['atk']) + '点物理伤害。\x0a\x09\x09\x09末境：消耗所有拳意，每点拳意延长\x200.15秒\x20的该技能给予的状态\x0a\x09\x09\x09明奇：获得每次受击急速+20%的增益，最多叠加5次，持续0秒。\x0a\x09\x09\x09行偶：获得将受到伤害（50+1/Lv）%反弹给目标的增益，持续\x200秒。',
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    let y = 0x1;
                    q['comboPoint'] >= 0x1 && (y += q['comboPoint'], q['comboPoint'] = 0x0);
                    const z = x * (1.6 + 0.16 * u + 0.8 * Math['random']()) * q['dmgAdd'] * y, A = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](A) * z, A), w && (q['hp'] += w), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'vbsk16',
                'name': '白鹤亮翅',
                'coolDown': 0xbb8,
                'castTime': 0x1f4,
                'description': (p, q) => '沉势蓄劲神机足，亮翅由来见白鹤。\x0a\x09\x09\x09根据自身攻击力，对目标造成' + Math['round']((0xa0 + 0x10 * p) / 0x64 * q['atk']) + '-' + Math['round']((0xf0 + 0x10 * p) / 0x64 * q['atk']) + '点物理伤害。\x0a\x09\x09\x09末境：消耗所有拳意，每点拳意自身恢复（1\x20+\x200.1/Lv）%的最大生命值。',
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    let y = 0x1;
                    q['comboPoint'] >= 0x1 && (y += q['comboPoint'], q['comboPoint'] = 0x0);
                    const z = x * (1.6 + 0.16 * u + 0.8 * Math['random']()) * q['dmgAdd'] * y, A = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](A) * z, A), w && (q['hp'] += w), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'vbsk17',
                'name': '游龙',
                'coolDown': 0xbb8,
                'castTime': 0x1f4,
                'description': (p, q) => '八卦游龙。休、生、伤、杜、景、死、惊、开。\x0a\x09\x09\x09根据自身攻击力，对目标造成' + Math['round']((0x168 + 0x1e * p) / 0x64 * q['atk']) + '-' + Math['round']((0x1e0 + 0x28 * p) / 0x64 * q['atk']) + '点物理伤害。\x0a\x09\x09\x09末境：消耗所有拳意，每点拳意附加技能伤害\x202%的\x20各类元素伤害。\x0a\x09\x09\x09明奇：8次游龙之后，该技能造成一次20倍的伤害。\x0a\x09\x09\x09行偶：每次游龙之后，该技能伤害+25%，最高提升8次。\x0a\x09\x09\x09',
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    let y = 0x1;
                    q['comboPoint'] >= 0x1 && (y += q['comboPoint'], q['comboPoint'] = 0x0);
                    const z = x * (1.6 + 0.16 * u + 0.8 * Math['random']()) * q['dmgAdd'] * y, A = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](A) * z, A), w && (q['hp'] += w), v['runAttrHooks'](q, 'attacked');
                }
            }];
        }, 4012: m => {
            function o(p, q, s) {
                const u = q['buffs']['find'](v => 'fire_buff' === v['group']);
                u ? (u['arg'] += s, u['resetTimer'](0x3a98)) : q['addBuff']('fire_buff', 0x3a98, s, 'fire_buff');
            }

            m['exports'] = [{
                'key': 'warrior_atk',
                'name': '普通攻击',
                'group': '1',
                'coolDown': 0x5dc,
                'description': (p, q) => '毫无章法的一击。\x0a\x09\x09\x09对目标造成' + Math['round']((0x2d + 0x4 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x3c + 0x6 * p) / 0x64 * q['atk']) + '点物理伤害，获得5点怒气。',
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    const y = q['runAttrHooks'](!0x1, 'lv5_wree2'),
                        z = x * (0.45 + 0.04 * u + Math['random']() * (0.15 + 0.02 * u)) * q['dmgAdd'] * (y ? 0x2 : 0x1),
                        A = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](A) * z, A), w && (q['hp'] += w), q['rp'] += 0x5, v['rp'] += v['rpOnAttacked'], v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'thump',
                'group': 'thump',
                'name': '重击',
                'description': (p, q) => '这是，赌上自身体重的一击！\x0a\x09\x09\x09对目标造成' + Math['round']((0x50 + 0x8 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x82 + 0xc * p) / 0x64 * q['atk']) + '点物理伤害，消耗25点怒气。',
                'cost': {'rp': 0x19},
                'coolDown': 0x3e8,
                'castTime': 0x1f4,
                'maxExp': p => p ** 0x2 * 0x258 + 0x708 * p + 0x4b0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, atk: w, leech: x = 0x0} = q;
                    if (p['testDodge'](q, v, this)) return;
                    const y = w * (0.8 + 0.08 * u + Math['random']() * (0.5 + 0.04 * u)) * q['dmgAdd'],
                        z = q['testCrit']();
                    if (p['sendDamage']('melee', q, v, this, q['getCritBonus'](z) * y, z), q['runAttrHooks'](!0x1, 'kklf_love') && Math['random']() <= 0.4) {
                        const A = w * (0.8 + 0.08 * u + Math['random']() * (0.5 + 0.04 * u)) * q['firedmgAdd'] * 0.5,
                            B = q['testCrit']();
                        p['sendDamage']('fire', q, v, this, q['getCritBonus'](B) * A, B);
                    }
                    x && (q['hp'] += x), v['rp'] += v['rpOnAttacked'], v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'save_oneself',
                'name': '包扎伤口',
                'description': (p, q) => {
                    const s = q['runAttrHooks'](0x1, 'lv15_warrior_enhance1_time');
                    return '你确定纱布已经消毒了吗？\x0a\x09\x09\x09恢复' + Math['round'](0.05 * q['maxHp'] + 0x5 * p) * s + '点生命值。';
                },
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'castTime': 0x3e8,
                'coolDown': (p, q, s) => 0x1f40 * q['runAttrHooks'](0x1, 'defring'),
                'effect'(p, q, s) {
                    const u = q['runAttrHooks'](0x1, 'lv15_warrior_enhance1_time'),
                        v = Math['round'](0.05 * q['maxHp'] + 0x5 * s) * u;
                    p['sendHeal'](q, q, this, v);
                }
            }, {
                'key': 'fury_cutter',
                'name': '斩击',
                'group': '1',
                'coolDown': 0x5dc,
                'description': (p, q) => '挥剑！\x0a\x09\x09\x09对目标造成' + Math['round']((0x46 + 0x6 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x64 + 0x8 * p) / 0x64 * q['atk']) + '点物理伤害，获得5点怒气。',
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(q, v, w) {
                    const {target: x, leech: y = 0x0, atk: z} = v;
                    if (!x || q['testDodge'](v, x, this)) return;
                    const A = v['buffs']['find'](J => 'fury_cutter_time_buff' === J['group']);
                    A && (A['arg'] += 0x1, v['rp'] -= 0x5);
                    const B = A ? Math['pow'](1.1, A['arg']) : 0x1,
                        C = z * (0.7 + 0.06 * w + Math['random']() * (0.3 + 0.02 * w)) * B, D = v['testCrit'](),
                        E = v['buffs']['find'](J => 'element_fire_buff' === J['group']),
                        F = v['runAttrHooks'](!0x1, 'lv80_warrior1_enhance3_time'),
                        G = v['runAttrHooks'](!0x1, 'lv80_warrior1_enhance5_time');
                    if (E) {
                        const J = E['arg'];
                        if (q['sendDamage']('fire', v, x, this, v['getCritBonus'](D) * C * J * v['firedmgAdd'], D), G) {
                            for (const K of v['skills']) '炎龙吐息' == K['name'] && K['reduceCoolDown'](0x3e8);
                            v['rp'] += 0x2;
                        }
                        F || v['removeBuff'](E);
                    } else q['sendDamage']('melee', v, x, this, v['getCritBonus'](D) * C * v['dmgAdd'], D);
                    v['runAttrHooks'](!0x1, 'lv35_warrior1_enhance1_time') && Math['random']() <= 0.2 && q['sendDamage']('melee', null, x, '剑花', v['getCritBonus'](D) * C * 0.8 * v['dmgAdd'], D);
                    const H = v['buffs']['find'](L => 'guardian_buff1' === L['group']),
                        I = v['runAttrHooks'](0x0, 'guardianodds');
                    Math['random']() < I && H && v['useExtraSkill']('jingji_skill_pro'), v['runAttrHooks'](!0x1, 'lv80_warrior2_enhance3_time') && Math['random']() <= 0.2 && v['useExtraSkill']('fury_cutter'), y && (v['hp'] += y), v['rp'] += 0x5, x['rp'] += x['rpOnAttacked'], x['runAttrHooks'](v, 'attacked');
                }
            }, {
                'key': 'whirlwind',
                'name': '旋风斩',
                'description': (p, q) => '转！转！转！\x0a\x09\x09\x09对最多五个目标分别造成' + Math['round']((0x50 + 0x3 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x6e + 0x5 * p) / 0x64 * q['atk']) + '点物理伤害，每命中一个目标将获得3点怒气。',
                'coolDown': 0x1388,
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => !!q['target'],
                'effect'(q, v, w) {
                    const {atk: x, target: y, leech: z} = v;
                    let A = 0x0;
                    const B = v['buffs']['find'](G => 'element_fire2_buff' === G['group']),
                        C = v['runAttrHooks'](!0x1, 'lv80_warrior1_enhance3_time');
                    B && (A += 0x1, C || v['removeBuff'](B));
                    const D = x * (0.8 + 0.03 * w + Math['random']() * (0.3 + 0.02 * w)), E = v['testCrit']();
                    if (0x1 == A) {
                        if (!y) return;
                        o(0x0, y, 0.2 * v['atk'] * v['firedmgAdd']), q['sendDamage']('fire', v, y, this, v['getCritBonus'](E) * D * v['firedmgAdd'], E);
                    } else q['sendDamage']('melee', v, y, this, v['getCritBonus'](E) * D * v['dmgAdd'], E);
                    let F = 0.4;
                    q['units']['filter'](G => G !== y && v['willAttack'](G))['slice'](0x0, 0x4)['forEach'](G => {
                        if (q['testDodge'](v, G, this)) return;
                        const H = x * (0.8 + 0.03 * w + Math['random']() * (0.3 + 0.02 * w));
                        F += 0.4;
                        const I = v['testCrit']();
                        if (0x1 == A) {
                            if (!G) return;
                            o(0x0, G, 0.2 * v['atk'] * v['firedmgAdd']), q['sendDamage']('fire', v, G, this, v['getCritBonus'](I) * H * v['firedmgAdd'], I);
                        } else q['sendDamage']('melee', v, G, this, v['getCritBonus'](I) * H * v['dmgAdd'], I);
                        v['rp'] += 0x3, G['runAttrHooks'](v, 'attacked');
                    }), z && (v['hp'] += z * F), v['rp'] += 0x3, y['rp'] += y['rpOnAttacked'], y['runAttrHooks'](v, 'attacked');
                }
            }, {
                'key': 'warrior_hp',
                'name': '气血激增',
                'coolDown': 0x7530,
                'description': (p, q) => {
                    const s = q['runAttrHooks'](0x1, 'lv35_warrior2_enhance1_time');
                    return '吃一口人参。\x0a\x09\x09\x09生命值上限+' + Math['round'](q['maxHp_self'] * (0xa + 0.5 * p) / 0x64) * s + '，持续30秒。';
                },
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    const u = q['hp'] / q['maxHp'], v = q['runAttrHooks'](0x1, 'lv35_warrior2_enhance1_time'),
                        w = q['maxHp_self'] * (0xa + 0.5 * s) / 0x64 * v;
                    q['addBuff']('warrior_hp_buff', 0x752f, w, 'warrior_hp_buff'), q['hp'] = q['maxHp'] * u;
                }
            }, {
                'key': 'warrior_def',
                'name': '钢铁之躯',
                'coolDown': 0x7530,
                'description': (p, q) => {
                    const s = q['runAttrHooks'](0x1, 'lv35_warrior2_enhance2_time');
                    return '梆硬！\x0a\x09\x09\x09物理防御+' + Math['round'](q['def_self'] * (0xf + p / 0x2) / 0x64) * s + '，持续30秒。';
                },
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    const u = q['runAttrHooks'](0x1, 'lv35_warrior2_enhance2_time'),
                        v = q['def_self'] * (0xf + s / 0x2) / 0x64 * u;
                    q['addBuff']('warrior_def_buff', 0x752f, v, 'warrior_def_buff'), q['runAttrHooks'](!0x1, 'lv15_warrior_enhance3_time') && q['addBuff']('warrior_res_buff', 0x752f, v, 'warrior_res_buff');
                }
            }, {
                'key': 'hamstring',
                'name': '断筋',
                'description': (p, q) => '我叫你瞄准的是敌人的心脏，你在做什么？\x0a\x09\x09\x09对目标造成' + Math['round']((0x1e + 0x1 * p) / 0x64 * q['atk']) + '-' + Math['round']((0x23 + 0x2 * p) / 0x64 * q['atk']) + '点物理伤害并使其减速30%，持续4秒。',
                'coolDown': 0x2328,
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    const y = x * (0.3 + 0.01 * u + Math['random']() * (0.05 + 0.01 * u)) * q['dmgAdd'],
                        z = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](z) * y, z);
                    const A = q['runAttrHooks'](0.7, 'lv35_warrior2_enhance3_time');
                    v['addBuff']('hamstring_buff', 0xfa0, A, 'hamstring_buff'), q['runAttrHooks'](!0x1, 'lv35_warrior1_enhance2_time') && v['addBuff']('kedi_buff', 0xfa0, null, 'kedi_buff'), w && (q['hp'] += w), v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'element_fire',
                'name': '元素附魔·Ⅰ',
                'description': p => 'fire\x20in\x20the\x20hole!\x0a\x09\x09\x09借助火焰的力量，使下一个“斩击”变为火焰伤害，且伤害+' + Math['round'](0xfa + 0x5 * p) / 0xa + '%。',
                'coolDown': 0x1770,
                'castTime': 0x1f4,
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    const u = Math['round'](0x4e2 + 0x5 * s) / 0x3e8;
                    q['addBuff']('element_fire_buff', 0x2710, u, 'element_fire_buff'), q['runAttrHooks'](!0x1, 'lv35_warrior1_enhance3_time') && q['addBuff']('element_fire2_buff', 0x2710, null, 'element_fire2_buff');
                }
            }, {
                'key': 'white_heat',
                'name': '疾风',
                'coolDown': 0x4e20,
                'description': p => '你的手上仿佛多出了好几把剑。\x0a\x09\x09\x09急速+' + Math['round'](0xa * (0xa + 0.2 * p)) / 0xa + '%，持续5秒。',
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    const u = Math['round'](0xa * (0xa + 0.2 * s)) / 0x3e8;
                    q['addBuff']('white_heat_buff', 0x1388, u, 'white_heat_buff');
                }
            }, {
                'key': 'fury_cutter_plus',
                'name': '重斩',
                'description': (p, q) => '这一剑力度之大，以至于连你都见到了对岸的奶奶在招手。\x0a\x09\x09\x09对目标造成' + Math['round']((0xfa + 0xc * p) / 0x64 * q['atk']) + '-' + Math['round']((0x15e + 0x18 * p) / 0x64 * q['atk']) + '点物理伤害，消耗40点怒气。',
                'cost': {'rp': 0x28},
                'castTime': 0x3e8,
                'coolDown': 0x1f4,
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const {target: v, atk: w, leech: x = 0x0} = q;
                    if (p['testDodge'](q, v, this)) return;
                    let y = 0x1;
                    q['runAttrHooks'](!0x1, 'lv80_warrior1_enhance4_time') && (y += 0.005 * q['rp']);
                    const z = w * (2.5 + 0.12 * u + Math['random']() * (0x1 + 0.12 * u)) * q['dmgAdd'] * y,
                        A = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](A) * z, A), q['runAttrHooks'](!0x1, 'lv80_warrior1_enhance1_time') && v['addBuff']('lv80_warrior1_enhance1_buff', 0x2ee0, null, 'lv80_warrior1_enhance1_buff'), q['runAttrHooks'](!0x1, 'lv80_warrior2_enhance1_time') && Math['random']() <= 0.5 && q['useExtraSkill']('fury_cutter'), x && (q['hp'] += x), v['rp'] += v['rpOnAttacked'], v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'block',
                'name': '格挡姿态',
                'coolDown': 0x4e20,
                'description': p => '你的武器已经磕了好几个口了！\x0a\x09\x09\x09受到攻击时有15%的几率进行格挡，成功格挡后将使本次伤害减少50%，持续' + Math['round'](0x64 + 0x2 * p) / 0xa + '秒。',
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    const u = 0x64 * Math['round'](0x64 + 0x2 * s),
                        v = q['runAttrHooks'](!0x1, 'lv80_warrior1_enhance2_time'),
                        w = q['runAttrHooks'](!0x1, 'lv80_warrior2_enhance2_time');
                    v ? q['addBuff']('block2_buff', u, null, 'block2_buff') : w ? q['addBuff']('block3_buff', u, null, 'block3_buff') : q['addBuff']('block_buff', u, null, 'block_buff');
                }
            }, {
                'key': 'flame_armor',
                'name': '炎铠',
                'description': p => '尝尝这黑色的火焰吧！\x0a\x09\x09\x20\x20每秒为所有目标添加一层“灼烧”效果，持续' + (0xa + 0.2 * p)['toFixed'](0x1) + '秒。\x0a\x09\x09\x20\x20受到伤害时将额外为伤害来源添加一层“灼烧效果。\x0a\x09\x09\x20\x20灼烧：每3秒受到35%攻击力的火焰伤害，持续15秒，可叠加。',
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'castTime': 0x5dc,
                'coolDown': 0x4e20,
                'effect'(p, q, s) {
                    q['addBuff']('flame_armor_buff', 0x2710 + 0xc8 * s, 0.35 * q['atk'] * q['firedmgAdd'], 'flame_armor_buff'), q['addBuff']('flame_armor_buff2', 0x2710 + 0xc8 * s, 0.35 * q['atk'] * q['firedmgAdd'], 'flame_armor_buff2');
                }
            }, {
                'key': 'dragon_breath',
                'name': '炎龙吐息',
                'description': (p, q) => '这场面，就像是深秋的时候你在山上放了一把火。\x0a\x09\x20\x20\x09\x09对所有目标造成' + Math['round']((0x2bc + 0x3c * p) / 0x64 * q['atk']) + '-' + Math['round']((0x4b0 + 0x78 * p) / 0x64 * q['atk']) + '点火焰伤害。\x0a\x09\x09\x09终结技：消耗自身所有怒气，每消耗1点怒气提升0.5%伤害。',
                'castTime': 0x3e8,
                'coolDown': 0x7530,
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, u) {
                    const v = p['units']['filter'](B => q['willAttack'](B)), {
                        critRate: w = 0x0,
                        critBonus: x = 1.5,
                        leech: y
                    } = q;
                    y && (q['hp'] += y);
                    const z = q['runAttrHooks'](!0x1, 'lv80_warrior1_enhance4_time');
                    let A = 0x1;
                    z && (A += 0.01 * q['rp']), A += 0.005 * q['rp'], q['rp'] = 0x0, v['forEach'](B => {
                        if (p['testDodge'](q, B, this)) return;
                        const C = q['atk'] * (0x7 + 0.6 * u + Math['random']() * (0xc + 1.2 * u)) * q['firedmgAdd'] * A,
                            D = q['testCrit']();
                        p['sendDamage']('fire', q, B, this, q['getCritBonus'](D) * C, D), B['runAttrHooks'](q, 'attacked');
                    });
                }
            }, {
                'key': 'fury_cutter_time',
                'name': '连斩姿态',
                'description': p => '剑即正义！\x0a\x09\x09\x09消耗所有怒气进入“连斩姿态”，期间每释放一次“斩击”，“斩击”所造成的伤害递增10%，持续' + Math['round'](0x32 + p) / 0xa + '秒。',
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'castTime': 0x3e8,
                'coolDown': 0x88b8,
                'canUse': (p, q) => !q['buffs']['find'](s => 'fury_cutter_time_buff' === s['group']) && !!q['target'],
                'effect'(p, q, s) {
                    const u = 0x1388 + 0x64 * s;
                    if (q['rp'] = 0x0, q['addBuff']('fury_cutter_time_buff', u, 0x0, 'fury_cutter_time_buff'), q['runAttrHooks'](!0x1, 'lv80_warrior2_enhance5_time')) for (const v of q['skills']) '吴迪斩' == v['name'] && v['reduceCoolDown'](0x186a0);
                }
            }, {
                'key': 'omnislash',
                'name': '吴迪斩',
                'coolDown': 0xafc8,
                'notBreakable': !0x0,
                'description': (p, q) => '众所周知，吴迪斩和无敌斩并不是同一个技能。\x0a\x09\x09\x09精湛的剑技，每0.5秒对目标释放一次“斩击”，持续8秒。\x0a\x09\x09\x09技能持续期间，自身受到的伤害减少' + Math['round'](0x1e + p) + '%。',
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    const u = 0x1 - Math['round'](0x1e + s) / 0x64;
                    q['addBuff']('omnislash_buff2', 0x1f45, u, 'omnislash_buff2'), q['startRead']('omnislash_buff', 0x1f45, null, this);
                }
            }, {
                'key': 'shield_charge',
                'name': '盾冲',
                'description': (p, q) => '持盾冲击目标，根据攻击力和物理防御，对目标造成' + Math['round']((0x64 + p) / 0x64 * q['atk'] + q['def'] * (0.08 + 0.008 * p) * 0x2) + '-' + Math['round']((0x82 + 0x2 * p) / 0x64 * q['atk'] + q['def'] * (0.08 + 0.008 * p) * 0x2) + '点物理伤害，并使目标昏迷3秒。',
                'coolDown': 0x2ee0,
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, v) {
                    const {target: w, atk: x, def: y, leech: z = 0x0} = q;
                    if (p['testDodge'](q, w, this)) return;
                    const A = (x * (0x1 + 0.01 * v + Math['random']() * (0.3 + 0.01 * v)) + y * (0.08 + 0.008 * v) * 0x2) * q['dmgAdd'],
                        B = q['testCrit'](), C = q['runAttrHooks'](0xbb8, 'lv35_warrior2_enhance6_time');
                    w['breakCasting'](), w['addBuff']('stunned', C, null, 'stunned'), p['sendDamage']('melee', q, w, this, q['getCritBonus'](B) * A, B), z && (q['hp'] += z), w['rp'] += w['rpOnAttacked'], w['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'defensive_stance',
                'name': '防御姿态',
                'coolDown': 0x4e20,
                'description': p => '你看这盾，那是又大又圆，又白。\x0a\x09\x09\x09受到攻击时有25%的几率用盾牌进行防御，成功防御后将使本次伤害降低至1点，持续' + Math['round'](0x64 + 0x2 * p) / 0xa + '秒。',
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    const u = 0x64 * Math['round'](0x64 + 0x2 * s),
                        v = q['runAttrHooks'](!0x1, 'lv80_warrior1_enhance2_time'),
                        w = q['runAttrHooks'](!0x1, 'lv80_warrior2_enhance2_time'),
                        x = q['runAttrHooks'](!0x1, 'lv80_warrior2_enhance2_time');
                    v ? q['addBuff']('defensive4_buff', u, null, 'defensive4_buff') : w ? q['addBuff']('defensive3_buff', u, null, 'defensive3_buff') : x ? q['addBuff']('defensive2_buff', u, null, 'defensive2_buff') : q['addBuff']('defensive1_buff', u, null, 'defensive1_buff');
                }
            }, {
                'key': 'first_aid',
                'name': '急救',
                'description': (p, q) => '苟...苟...苟住！\x0a\x09\x09\x09\x09恢复' + Math['round'](q['maxHp'] * (0.5 + 0.01 * p)) + '点生命值，只会生命值小于40%时释放。',
                'castTime': 0x1f4,
                'coolDown': (p, q, s) => 0x9c40 * q['runAttrHooks'](0x1, 'defring'),
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'shouldUse': (p, q) => q['hp'] <= q['maxHp'] / 2.5,
                'effect'(p, q, s) {
                    p['sendHeal'](q, q, this, q['maxHp'] * (0.5 + 0.01 * s));
                }
            }, {
                'key': 'guardian',
                'name': '守护者之魂',
                'coolDown': 0x4e20,
                'description': (p, q) => {
                    const s = p + q['runAttrHooks'](0x0, 'allskillLv') + q['runAttrHooks'](0x0, 'guardianLv');
                    return '愿大...守护者护佑着你。\x0a\x09\x09\x09召唤守护者之魂，持续30秒。期间每次受到攻击将获得一层“护佑”效果，最多叠加20层。\x0a\x09\x09\x09叠加至20层后，再次召唤守护者之魂时将消耗所有“护佑”效果，根据物理防御对所有目标造成' + Math['round']((0xc8 + 0x8 * s) / 0x64 * q['def'] / 6.5) + '-' + Math['round']((0xfa + 0xc * s) / 0x64 * q['def'] / 6.5) + '点魔法伤害。\x0a\x09\x09\x09护佑：受到的伤害减少2.5%。';
                },
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    const u = s + q['runAttrHooks'](0x0, 'allskillLv') + q['runAttrHooks'](0x0, 'guardianLv'),
                        v = q['buffs']['find'](w => 'Blessing_buff' === w['group']);
                    v && 0x14 === v['arg'] && (p['units']['filter'](w => q['willAttack'](w))['forEach'](w => {
                        if (p['testDodge'](q, w, this)) return;
                        const x = q['def'] * (0x2 + 0.08 * u + Math['random']() * (0.5 + 0.4 * u)) / 6.5,
                            y = q['testCrit']();
                        p['sendDamage']('magic', q, w, this, q['getCritBonus'](y) * x, y);
                    }), q['removeBuff'](v)), q['addBuff']('guardian_buff1', 0x7530, null, 'guardian_buff1'), q['addBuff']('guardian_buff2', null, u, 'guardian_buff2');
                }
            }, {
                'key': 'zheshe_skill',
                'name': '折射',
                'description': '荆棘',
                'coolDown': 0x7d0,
                'maxExp': p => p ** 0x2 * 0x258 + 0x708 * p + 0x4b0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    const {target: u, int: v} = q, w = 0x2 * v || 0x1, x = q['testCrit']();
                    p['sendDamage']('magic', q, u, this, q['getCritBonus'](x) * w, x);
                }
            }, {
                'key': 'jingji_skill_pro',
                'name': '绝对领域',
                'description': '荆棘',
                'coolDown': 0x7d0,
                'maxExp': p => p ** 0x2 * 0x258 + 0x708 * p + 0x4b0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    const {target: u, def: v} = q;
                    p['units']['filter'](w => q['willAttack'](w))['forEach'](w => {
                        const x = 0.1 * q['def'], y = q['testCrit']();
                        p['sendDamage']('real', null, w, '绝对领域', q['getCritBonus'](y) * x, y);
                    });
                }
            }, {
                'key': 'infinite_justice',
                'name': '无限正义之剑',
                'description': (p, q) => {
                    const s = p + q['runAttrHooks'](0x0, 'allskillLv') + q['runAttrHooks'](0x0, 'igsLv');
                    return '你还是觉得盾牌会比长剑更加顺手。\x0a\x09\x09\x09根据攻击力和物理防御，对目标造成' + Math['round']((0xc8 + 0x5 * s) / 0x64 * q['atk'] + q['def'] * (0.1 + 0.012 * s) * 1.2) + '-' + Math['round']((0x12c + 0xa * s) / 0x64 * q['atk'] + q['def'] * (0.1 + 0.012 * s) * 1.2) + '点物理伤害。';
                },
                'coolDown': 0x4e20,
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, v) {
                    const {target: w, def: x, atk: y, leech: z = 0x0} = q;
                    if (p['testDodge'](q, w, this)) return;
                    let A = 0x1;
                    const B = q['buffs']['find'](F => 'igs_buff' === F['group']);
                    B && (A += B['arg'], q['removeBuff'](B));
                    const C = v + q['runAttrHooks'](0x0, 'allskillLv') + q['runAttrHooks'](0x0, 'igsLv'),
                        D = y * (0x2 + 0.05 * C + Math['random']() * (0x1 + 0.1 * C)) * q['dmgAdd'] + x * (0.1 + 0.012 * C) * q['dmgAdd'] * 1.2,
                        E = q['testCrit']();
                    p['sendDamage']('melee', q, w, this, q['getCritBonus'](E) * D * A, E), z && (q['hp'] += z), w['rp'] += w['rpOnAttacked'], w['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'hacking',
                'name': '劈砍',
                'group': '1',
                'coolDown': 0x5dc,
                'description': (p, q) => {
                    const s = p + q['runAttrHooks'](0x0, 'allskillLv') + q['runAttrHooks'](0x0, 'whksk');
                    return '挥刀！\x0a\x09\x09\x09对目标造成' + Math['round']((0x50 + 0x7 * s) / 0x64 * q['atk']) + '-' + Math['round']((0x78 + 0x9 * s) / 0x64 * q['atk']) + '点物理伤害，获得5点怒气。';
                },
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'],
                'effect'(q, w, x) {
                    const {target: z, leech: A = 0x0, atk: B} = w;
                    if (q['testDodge'](w, z, this)) return;
                    const C = w['runAttrHooks'](0x1, 'lv80_warrior5_enhance1_time');
                    0x1 !== C && (w['hp'] = Math['max'](0.95 * w['hp'], 0x1));
                    const D = w['runAttrHooks'](!0x1, 'lv80_warrior8_enhance2_time'),
                        E = w['runAttrHooks'](!0x1, 'lv80_wr8_ee2_2t'), F = w['runAttrHooks'](!0x1, 'lv80_wr8_ee2_3t'),
                        G = w['runAttrHooks'](!0x1, 'lv80_wr8_ee1_2t'), H = w['runAttrHooks'](!0x1, 'lv80_wr8_ee1t');
                    let I = w['runAttrHooks'](0xa, 'lv80_warrior8_enhance3_2_time'),
                        J = w['runAttrHooks'](0xa, 'lv80_warrior8_enhance3_time');
                    const K = x + w['runAttrHooks'](0x0, 'allskillLv') + w['runAttrHooks'](0x0, 'whksk'),
                        L = B * (0.8 + 0.07 * K + Math['random']() * (0.4 + 0.02 * K)) * C, M = w['testCrit'](),
                        N = w['buffs']['find'](P => 'element_fire_buff' === P['group']),
                        O = w['runAttrHooks'](!0x1, 'lv80_warrior1_enhance3_time');
                    if (N) {
                        const P = N['arg'];
                        let Q = 0x1;
                        D ? (Q -= 0.5, H && z['addBuff']('yaori_buff', null, null), q['sendDamage']('fire', w, z, this, w['getCritBonus'](M) * L * P * w['firedmgAdd'] * Q, M), w['fp'] += J, G && z['addBuff']('bingning_buff', null, null), q['sendDamage']('cold', w, z, this, w['getCritBonus'](M) * L * P * w['colddmgAdd'] * Q, M), w['cp'] += I) : (E || Math['random']() < 0.5) && !F ? (Q += 0.2, H && z['addBuff']('yaori_buff', null, null), q['sendDamage']('fire', w, z, this, w['getCritBonus'](M) * L * P * w['firedmgAdd'] * Q, M), w['fp'] += J) : (Q += 0.2, G && z['addBuff']('bingning_buff', null, null), q['sendDamage']('cold', w, z, this, w['getCritBonus'](M) * L * P * w['colddmgAdd'] * Q, M), w['cp'] += I), O || w['removeBuff'](N);
                    } else q['sendDamage']('melee', w, z, this, w['getCritBonus'](M) * L * w['dmgAdd'], M);
                    A && (w['hp'] += A), w['rp'] += 0x5, z['rp'] += z['rpOnAttacked'], z['runAttrHooks'](w, 'attacked');
                }
            }, {
                'key': 'sunder_armor',
                'name': '破甲击',
                'description': (p, q) => {
                    const s = p + q['runAttrHooks'](0x0, 'allskillLv') + q['runAttrHooks'](0x0, 'wsask');
                    return '敌羞！吾去脱......追他一击！\x0a\x09\x09\x09击破目标的护甲，对其造成' + Math['round']((0x96 + 0x3 * s) / 0x64 * q['atk']) + '-' + Math['round']((0xb4 + 0x4 * s) / 0x64 * q['atk']) + '点物理伤害并获得“碎甲”效果，持续5秒。\x0a\x09\x09\x09碎甲：物理防御减少' + (0xf + s) + '%，受到的伤害提高30%。';
                },
                'coolDown': 0x2710,
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, v) {
                    const {target: w, leech: x = 0x0, atk: y} = q;
                    if (p['testDodge'](q, w, this)) return;
                    const z = v + q['runAttrHooks'](0x0, 'allskillLv') + q['runAttrHooks'](0x0, 'wsask'),
                        A = y * (1.5 + 0.03 * z + Math['random']() * (0.3 + 0.01 * z)) * q['dmgAdd'],
                        B = 1.3 + q['runAttrHooks'](0x0, 'lv35_warrior5_enhance3_time'), C = q['testCrit']();
                    p['sendDamage']('melee', q, w, this, q['getCritBonus'](C) * A, C), w['addBuff']('sunder_armor_buff', 0x1388, [B, (z + 0xf) / 0x64], 'sunder_armor_buff'), x && (q['hp'] += x), w['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'shield_wall',
                'name': '血甲缚',
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => 'home' !== p['map'],
                'description': (p, q) => {
                    const s = p + q['runAttrHooks'](0x0, 'allskillLv') + q['runAttrHooks'](0x0, 'wswsk'),
                        u = q['runAttrHooks'](0x1, 'zwww_hjl'),
                        v = Math['round'](0.1 * q['maxHp'] + 0.25 * q['sta'] * s) * u,
                        w = Math['round'](Math['min'](v, q['maxHp']));
                    return '突然之间你觉得身体一虚，紧接着又全身一紧。\x0a\x09\x09\x20\x20消耗' + Math['round'](0x64 + 0x1 * s) / 0xa + '%的当前生命值（至少保留1点生命值），同时获得一定吸收量的护盾。\x0a\x09\x09\x20\x20护盾的吸收量受生命值上限和耐力影响，但最大不能超过生命值上限。\x0a\x09\x20\x20\x20\x20\x20\x20护盾：可吸收' + w + '点伤害，持续30秒。';
                },
                'coolDown': (p, q, s) => 0x3a98 - 0xbb8 * q['runAttrHooks'](0x0, 'zwww_cd'),
                'effect'(p, q, u) {
                    const v = u + q['runAttrHooks'](0x0, 'allskillLv') + q['runAttrHooks'](0x0, 'wswsk'),
                        w = q['runAttrHooks'](0x1, 'lv80_warrior5_enhance5_time');
                    0x2 === w && (q['hp'] = 0x1);
                    const x = Math['round'](0.1 * q['maxHp'] + 0.25 * q['sta'] * v), y = Math['min'](x, q['maxHp']) * w,
                        z = 0x1 - Math['round'](0x64 + 0x1 * v) / 0x3e8;
                    q['addBuff']('shield_wall_buff', 0x7530, y, 'shield_wall_buff'), q['hp'] = Math['max'](q['hp'] * z, 0x1);
                }
            }, {
                'key': 'element_cold_fire',
                'name': '元素附魔·Ⅱ',
                'description': (p, q) => {
                    const s = p + q['runAttrHooks'](0x0, 'allskillLv') + q['runAttrHooks'](0x0, 'wecfsk');
                    return '让我尝尝冰火两重天的滋味。\x0a\x09\x09\x09借助魔法的力量，使下一个“劈砍”随机附魔寒冷或者火焰效果，且伤害+' + Math['round'](0xfa + 0x5 * s) / 0xa + '%。';
                },
                'coolDown': 0x1770,
                'castTime': 0x1f4,
                'maxExp': p => p ** 0x2 * 0x258 + 0x708 * p + 0x4b0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    const u = s + q['runAttrHooks'](0x0, 'allskillLv') + q['runAttrHooks'](0x0, 'wecfsk'),
                        v = Math['round'](0x4e2 + 0x5 * u) / 0x3e8;
                    q['addBuff']('element_fire_buff', 0x2710, v, 'element_fire_buff'), q['runAttrHooks'](!0x1, 'lv35_warrior1_enhance3_time') && q['addBuff']('element_fire2_buff', 0x2710, null, 'element_fire2_buff');
                }
            }, {
                'key': 'fanatical',
                'name': '血怒',
                'coolDown': 0x4e20,
                'description': (p, q) => {
                    const s = p + q['runAttrHooks'](0x0, 'allskillLv') + q['runAttrHooks'](0x0, 'wftsk');
                    return '按时献血有利于身心的健康发展。\x0a\x09\x09\x09消耗5%的当前生命值，攻击力+' + Math['round']((0.1 + 0.02 * s) * q['atk_self'] + 0.025 * q['hp']) + '，持续10秒。';
                },
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    const u = (0.1 + 0.02 * (s + q['runAttrHooks'](0x0, 'allskillLv') + q['runAttrHooks'](0x0, 'wftsk'))) * q['atk_self'] + 0.025 * q['hp'];
                    q['addBuff']('fanatical_buff', 0x2710, u, 'fanatical_buff'), q['hp'] *= 0.95, q['runAttrHooks'](0x1, 'lv80_warrior5_enhance2_time') && q['addBuff']('fanatical_buff2', 0x2710, null, 'fanatical_buff2');
                }
            }, {
                'key': 'hacking_plus_double',
                'name': '致命劈砍',
                'coolDown': 0xfa0,
                'castTime': 0x3e8,
                'cost': {'rp': 0x28},
                'description': (p, q) => {
                    const s = p + q['runAttrHooks'](0x0, 'allskillLv') + q['runAttrHooks'](0x0, 'whkpsk');
                    return '左右开弓！。\x0a\x09\x09\x09消耗40点怒气，蓄力1秒后对所有目标发起2次大范围的劈砍，每次造成' + Math['round']((0x64 + 0x7 * s) / 0x64 * q['atk']) + '-' + Math['round']((0x8c + 0xa * s) / 0x64 * q['atk']) + '点物理伤害。';
                },
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, v) {
                    const {target: w, leech: x} = q,
                        y = v + q['runAttrHooks'](0x0, 'allskillLv') + q['runAttrHooks'](0x0, 'whkpsk'),
                        z = q['runAttrHooks'](0x1, 'lv80_warrior5_enhance1_time');
                    0x1 !== z && (q['hp'] = Math['max'](0.9 * q['hp'], 0x1));
                    const A = q['atk'] * (0x1 + 0.07 * y + Math['random']() * (0.4 + 0.03 * y)) * z,
                        B = q['atk'] * (0x1 + 0.07 * y + Math['random']() * (0.4 + 0.03 * y)) * z,
                        C = p['units']['filter'](D => q['willAttack'](D));
                    x && (q['hp'] += x), C['forEach'](D => {
                        if (p['testDodge'](q, D, this)) return;
                        const E = A * q['dmgAdd'], F = B * q['dmgAdd'], G = q['testCrit'](), H = q['testCrit']();
                        p['sendDamage']('melee', q, D, this, q['getCritBonus'](G) * E, G), p['sendDamage']('melee', q, D, this, q['getCritBonus'](H) * F, H), D['runAttrHooks'](q, 'attacked');
                    });
                }
            }, {
                'key': 'ghost_shuffle',
                'name': '鬼步',
                'coolDown': 0x61a8,
                'description': (p, q) => '摩擦~~摩擦~~\x0a\x09\x09\x09根据已损失的生命值，自身闪避值提高' + Math['round'](q['maxHp'] - q['hp']) + '点，持续' + Math['round'](0x32 + p) / 0xa + '秒。',
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    const u = 0x138d + 0x64 * s;
                    q['addBuff']('ghost_shuffle_buff', u, null, 'ghost_shuffle_buff');
                }
            }, {
                'key': 'hacking_time',
                'name': '血魔乱舞',
                'coolDown': p => 0xafc8 - 0x12c * p,
                'description': (p, q) => (Math['round'](0x1e + p), '你对着空气一顿乱切。\x0a\x09\x09\x09精湛的刀法，每秒对所有目标释放一次“致命劈砍”，持续5秒。'),
                'maxExp': p => p ** 0x2 * 0x64 + 0x12c * p + 0xc8,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    q['startRead']('hacking_time_buff', 0x138d, null, this);
                }
            }, {
                'key': 'warrior_deadline',
                'name': '末日',
                'coolDown': 0x1388,
                'castTime': 0x1f4,
                'description': (p, q) => {
                    const s = Math['round']((0xfa + 0xc * p) / 0x64 * q['atk']),
                        u = Math['round']((0x15e + 0x18 * p) / 0x64 * q['atk']);
                    return '这次轮到你来拯救世界了噢。\x0a\x09\x09\x09在冰能或者火能达到100点时方可释放，消耗不同的能量将产生不同的效果，优先消耗火能。\x0a\x09\x09\x09消耗火能：对所有目标造成' + s + '-' + u + '点火焰伤害。\x0a\x09\x09\x09消耗冰能：对目标攻击三次，每次造成' + 1.5 * s + '-' + 1.5 * u + '点寒冷伤害。\x0a\x09\x09\x09不论是否携带技能，劈砍造成火焰或寒冷伤害时，将获得对应的10点能量。';
                },
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'] && (0x64 === q['cp'] || 0x64 === q['fp']),
                'effect'(q, v, w) {
                    const {target: x, leech: y} = v, z = v['runAttrHooks'](!0x1, 'lv80_warrior8_enhance4_time'),
                        A = v['atk'] * (2.5 + 0.12 * w + Math['random']() * (0x1 + 0.12 * w)) * v['firedmgAdd'],
                        B = v['atk'] * (2.5 + 0.12 * w + Math['random']() * (0x1 + 0.12 * w)) * v['colddmgAdd'] * 1.5,
                        C = v['atk'] * (2.5 + 0.12 * w + Math['random']() * (0x1 + 0.12 * w)) * v['colddmgAdd'] * 1.5,
                        D = v['atk'] * (2.5 + 0.12 * w + Math['random']() * (0x1 + 0.12 * w)) * v['colddmgAdd'] * 1.5,
                        E = q['units']['filter'](F => v['willAttack'](F));
                    if (0x64 === v['fp']) {
                        const F = v['buffs']['find'](H => 'energy_fire_buff' === H['group']);
                        let G = 0x1;
                        if (F && (G += 0.3, v['removeBuff'](F)), E['forEach'](H => {
                            const I = v['testCrit']();
                            q['sendDamage']('fire', v, H, '末日·炎', v['getCritBonus'](I) * A * G, I), H['runAttrHooks'](v, 'attacked');
                        }), z) {
                            const H = v['buffs']['find'](M => 'energy_cold_buff' === M['group']);
                            let I = 0x1;
                            H && (I += 0.3, v['removeBuff'](H));
                            const J = v['testCrit'](), K = v['testCrit'](), L = v['testCrit']();
                            q['sendDamage']('cold', v, x, '末日·寒', v['getCritBonus'](J) * B * I, J), q['sendDamage']('cold', v, x, '末日·寒', v['getCritBonus'](K) * C * I, K), q['sendDamage']('cold', v, x, '末日·寒', v['getCritBonus'](L) * D * I, L), x['runAttrHooks'](v, 'attacked');
                        }
                        v['fp'] = 0x0;
                    } else if (0x64 === v['cp']) {
                        const M = v['buffs']['find'](R => 'energy_cold_buff' === R['group']);
                        let N = 0x1;
                        M && (N += 0.3, v['removeBuff'](M));
                        const O = v['testCrit'](), P = v['testCrit'](), Q = v['testCrit']();
                        if (q['sendDamage']('cold', v, x, '末日·寒', v['getCritBonus'](O) * B * N, O), q['sendDamage']('cold', v, x, '末日·寒', v['getCritBonus'](P) * C * N, P), q['sendDamage']('cold', v, x, '末日·寒', v['getCritBonus'](Q) * D * N, Q), x['runAttrHooks'](v, 'attacked'), z) {
                            const R = v['buffs']['find'](T => 'energy_fire_buff' === T['group']);
                            let S = 0x1;
                            R && (S += 0.3, v['removeBuff'](R)), E['forEach'](T => {
                                const U = v['testCrit']();
                                q['sendDamage']('fire', v, T, '末日·炎', v['getCritBonus'](U) * A * S, U), T['runAttrHooks'](v, 'attacked');
                            });
                        }
                        v['cp'] = 0x0;
                    }
                }
            }, {
                'key': 'warrior_con_energy',
                'name': '能量守恒',
                'coolDown': 0x2710,
                'description': (p, q) => {
                    const s = Math['round'](0xfa + 0x5 * p) / 0xa;
                    return '随机获得“酷热”或者“极寒”效果，并按照1:0.5的比例将所有怒气转化为对应的能量。\x0a\x09\x09\x09酷热：使下一个“末日”造成的火焰伤害+' + s + '%。\x0a\x09\x09\x09极寒：使下一个“末日”造成的寒冷伤害+' + s + '%。\x0a\x09\x09\x09自身怒气大于50点时方可释放。';
                },
                'maxExp': p => p ** 0x2 * 0x3e8 + 0xbb8 * p + 0x7d0,
                'canUse': (p, q) => !!q['target'] && q['rp'] >= 0x32,
                'effect'(p, q, s) {
                    Math['random']() < 0.5 ? (q['fp'] += 0.5 * q['rp'], q['rp'] = 0x0, q['addBuff']('energy_fire_buff', null, 0.25 + 0.005 * s, 'energy_fire_buff')) : (q['cp'] += 0.5 * q['rp'], q['rp'] = 0x0, q['addBuff']('energy_cold_buff', null, 0.25 + 0.005 * s, 'energy_cold_buff'));
                }
            }, {
                'key': 'gsbjq_skill',
                'name': '攻速暴击',
                'description': '',
                'coolDown': 0x2710,
                'maxExp': p => p ** 0x2 * 0xc8 + 0x258 * p + 0x190,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    const {target: u} = q;
                    u['addBuff']('gsbj_buff', 0x2710, null, 'gsbj_buff');
                }
            }, {
                'key': 'mabi_skill',
                'name': '麻痹',
                'description': '',
                'coolDown': 0x2710,
                'maxExp': p => p ** 0x2 * 0x258 + 0x708 * p + 0x4b0,
                'canUse': (p, q) => !!q['target'],
                'effect'(p, q, s) {
                    const {target: u} = q;
                    u['addBuff']('mabijiezhi_buff', 0x3e8, null, 'mabijiezhi_buff');
                }
            }];
        }, 192: m => {
            m['exports'] = [{
                'key': 'cleave',
                'name': '顺劈斩',
                'group': 'melee',
                'description': (o, p) => {
                    const q = (0x1 + 0.2 * o) * p['runAttrHooks'](0x1, 'cleaveDamageRate');
                    return '对最多三个目标分别造成(' + (0x0 | 0x28 * q) + '%-' + (0x0 | 0x3c * q) + '%)倍攻击力伤害。';
                },
                'coolDown': 0x9c4,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(p, q, v) {
                    const {atk: w, target: x, leech: y = 0x0, critRate: z = 0x0, critBonus: A = 1.5} = q,
                        B = q['runAttrHooks'](0x1, 'cleaveDamageRate'),
                        C = w * (0.2 * Math['random']() + 0.4) * (v / 0x5 + 0x1) * B, D = q['testCrit']();
                    p['sendDamage']('melee', q, x, this, q['getCritBonus'](D) * C, D);
                    let E = 0.4;
                    p['units']['filter'](F => F !== x && q['willAttack'](F))['slice'](0x0, 0x2)['forEach'](F => {
                        if (p['testDodge'](q, F, this)) return;
                        const G = w * (0.2 * Math['random']() + 0.4) * (v / 0xa + 0x1) * B;
                        E += 0.4, p['sendDamage']('melee', q, F, this, q['getCritBonus'](D) * G, D), F['runAttrHooks'](q, 'attacked');
                    }), y && (q['hp'] += y * E), q['rp'] += q['rpOnAttack'], x['rp'] += x['rpOnAttacked'], x['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'shout',
                'name': '战斗怒吼',
                'description': o => '恢复50点怒气，并在未来30秒内增加所有同伴' + (0xa + 0x5 * o | 0x0) + '%护甲。',
                'coolDown': 0x7530,
                'maxExp': o => o ** 0x2 * 0x64 + 0x12c * o + 0xc8,
                'canUse': (o, p) => 'home' !== o['map'],
                'effect'(o, p, q) {
                    o['sendSkillUsage'](p, null, this);
                    const s = o['units']['filter'](w => w === p || p['willAssist'](w)), u = 0.1 * (0x1 + 0.5 * q),
                        v = p['runAttrHooks'](!0x1, 'multiShouts');
                    s['forEach'](w => {
                        w['addBuff']('shout', 0x7530, u, v ? void 0x0 : 'shout');
                    }), p['rp'] += 0x32;
                }
            }, {
                'key': 'mortalStrike',
                'name': '致死打击',
                'description': o => {
                    const p = 0x1 + 0.2 * o;
                    return '只能对血量少于20%的目标使用。对目标造成' + (0x0 | 0x3e8 * p) + '%-' + (0x0 | 0x7d0 * p) + '%攻击力伤害。';
                },
                'coolDown': (o, p) => p['runAttrHooks'](0x1f40, 'mortalStrikeCoolDown'),
                'maxExp': o => o ** 0x2 * 0xc8 + 0x258 * o + 0x190,
                'canUse': (o, p, q) => !!p['target'] && p['target']['hp'] <= 0.2 * p['target']['maxHp'],
                'effect'(o, p, q) {
                    const {target: s} = p;
                    if (o['testDodge'](p, s, this)) return;
                    const u = p['atk'] * (0xa * Math['random']() + 0xa) * (0x1 + 0.2 * q), v = p['testCrit']();
                    o['sendDamage']('melee', p, s, this, p['getCritBonus'](v) * u, v), s['runAttrHooks'](p, 'attacked');
                }
            }, {
                'key': 'swordSkill',
                'name': '狂热',
                'group': 'melee',
                'description': o => {
                    const p = 0x1 + 0.2 * o;
                    return '对目标造成攻击力的' + (0x0 | 0x3c * p) + '%-' + (0x0 | 0x64 * p) + '%伤害，并在接下来的' + (o + 0x1) + '秒内增加10%伤害，此效果可以叠加。';
                },
                'targetType': 'target',
                'coolDown': 0x9c4,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(p, q, v) {
                    const {target: w, leech: x = 0x0, atk: y} = q;
                    if (p['testDodge'](q, w, this)) return;
                    const z = y * (0.4 * Math['random']() + 0.6) * (0.2 * v + 0x1), {
                        critRate: A = 0x0,
                        critBonus: B = 1.5
                    } = q, C = q['testCrit']();
                    p['sendDamage']('melee', q, w, this, q['getCritBonus'](C) * z, C), x && (q['hp'] += x), q['addBuff']('swordSkill', 0x3e8 * (v + 0x1), 0.1), q['rp'] += q['rpOnAttack'], w['rp'] += w['rpOnAttacked'], w['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'meleeForRage',
                'name': '怒击',
                'group': 'melee',
                'description': o => {
                    const p = 0x1 + 0.2 * o;
                    return '对目标造成攻击力的' + (0x0 | 0x3c * p) + '%-' + (0x0 | 0x64 * p) + '%伤害，并获得' + (o + 0x1) + '点额外怒气。';
                },
                'targetType': 'target',
                'coolDown': 0x9c4,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!p['target'],
                'effect'(p, q, u) {
                    const {target: v, leech: w = 0x0, atk: x} = q;
                    if (p['testDodge'](q, v, this)) return;
                    const y = x * (0.4 * Math['random']() + 0.6) * (0.2 * u + 0x1), z = q['testCrit']();
                    p['sendDamage']('melee', q, v, this, q['getCritBonus'](z) * y, z), w && (q['hp'] += w), q['rp'] += q['rpOnAttack'] + u + 0x1, v['rp'] += v['rpOnAttacked'], v['runAttrHooks'](q, 'attacked');
                }
            }, {
                'key': 'shoutShake',
                'name': '震慑怒吼',
                'description': o => '恢复50点怒气，并在未来30秒减少所有敌人' + (0x64 * (0x1 - 0x1 / (1.1 + 0.1 * o)))['toFixed'](0x1) + '%攻击力。',
                'coolDown': 0x7530,
                'maxExp': o => o ** 0x2 * 0x64 + 0x12c * o + 0xc8,
                'canUse': (o, p) => 'home' !== o['map'],
                'effect'(o, p, q) {
                    o['sendSkillUsage'](p, null, this);
                    const s = o['units']['filter'](v => p['willAttack'](v)), u = 0.1 + 0.1 * q;
                    s['forEach'](v => {
                        const w = v['stunResist'], x = 0x1 / (0x1 + u / (0x1 + w / 0x64));
                        v['addBuff']('shoutShake', 0x7530, x, 'shoutShake');
                    }), p['rp'] += 0x32;
                }
            }, {
                'key': 'commandShout',
                'name': '命令怒吼',
                'description': o => '恢复50点怒气，并在未来30秒内增加所有同伴' + (0xa + 0x5 * o | 0x0) + '%生命上限。',
                'coolDown': 0x7530,
                'maxExp': o => o ** 0x2 * 0x64 + 0x12c * o + 0xc8,
                'canUse': (o, p) => 'home' !== o['map'],
                'effect'(o, p, q) {
                    o['sendSkillUsage'](p, null, this);
                    const s = o['units']['filter'](w => w === p || p['willAssist'](w)),
                        u = p['runAttrHooks'](!0x1, 'multiShouts'), v = 0.05 * q + 0.1;
                    s['forEach'](w => {
                        w['addBuff']('commandShout', 0x7530, v, u ? void 0x0 : 'shout'), w['hp'] *= 0x1 + v;
                    }), p['rp'] += 0x32;
                }
            }, {
                'key': 'shockWave',
                'name': '震荡波',
                'group': 'shockWave',
                'description': o => {
                    const p = 0x1 + 0.2 * o;
                    return '对全体目标造成攻击力的' + (0x0 | 0x3c * p) + '%-' + (0x0 | 0x64 * p) + '%伤害，并使目标昏迷' + (o / 0x2 + 0x1) + '秒。';
                },
                'coolDown': o => 0x2710,
                'maxExp': o => o ** 0x2 * 0x3e8 + 0xbb8 * o + 0x7d0,
                'canUse': (o, p) => !!o['units']['find'](q => p['willAttack'](q)),
                'effect'(o, p, q) {
                    const {atk: s, critRate: u = 0x0, critBonus: v = 1.5} = p;
                    o['units']['filter'](w => p['willAttack'](w))['forEach'](w => {
                        if (o['testDodge'](p, w, this)) return;
                        const x = s * (0.4 * Math['random']() + 0.6) * (0x1 + 0.2 * q), y = p['testCrit']();
                        o['sendDamage']('melee', p, w, this, p['getCritBonus'](y) * x, y), w['stun'](q / 0x2 + 0x1), w['rp'] += w['rpOnAttacked'], w['runAttrHooks'](p, 'attacked');
                    });
                }
            }];
        }, 2657: m => {
            m['exports'] = '\x0aSCENE\x20自宅\x0aSAY\x20艾尔的声音\x20。。我在哪里呢……果然迷路了吗……\x0aSAY\x20艾尔的声音\x20救命啊！！！！有人能听见吗？？？？\x0aSAY\x20艾尔的声音\x20呜呜呜……村长……布帕阿姨……\x0aSAY\x20亚莲娜\x20！！\x0aSAY\x20亚莲娜\x20感觉听到了艾尔的声音。\x0aSAY\x20亚莲娜\x20他迷路了吗？\x0a\x0aASIDE\x20{\x0a现在可以选择[亚莲娜]进行战斗了。\x0a使用神力解锁新的英雄栏位，使用[亚莲娜]进行冒险吧！\x0a神力将在不同英雄之间共享，请在使用之前务必注意。\x0a}\x0aASIDE\x20{\x0a亚莲娜的任务篇章会解锁新的故事和地图，但不会阻碍艾尔的剧情继续进展，所以你也可以使用艾尔继续游戏，积累够足够的神力再尝试亚莲娜的冒险之旅。\x0a}\x0a';
        }, 5807: m => {
            m['exports'] = '\x0aSCENE\x20自宅\x0aSAY\x20亚莲娜\x20好像听到了艾尔的声音，他好像迷路了。我要去救他。\x0aSAY\x20亚莲娜\x20但是外面这么多史莱姆，我一个人会不会……\x0aSAY\x20亚莲娜\x20怎么办呢……怎么办呢……\x0aSAY\x20？？？\x20亚莲娜，你在呼唤我的帮助吗？\x0aSAY\x20亚莲娜\x20什么？谁在说话？\x0aSAY\x20？？？\x20亚莲娜，是我，你需要我的帮助吗？\x0aSAY\x20亚莲娜\x20你是谁？\x0aSAY\x20？？？\x20我是元素精灵，你叫我小亚就行\x0aSAY\x20元素精灵\x20亚莲娜，你需要我的帮助吗？\x0aSAY\x20亚莲娜\x20我需要！艾尔需要我的帮助！我得去救援他！\x0aSAY\x20元素精灵\x20亚莲娜，和我签订契约，成为马猴烧酒吧！\x0aSAY\x20亚莲娜\x20马……马猴？\x0aSAY\x20元素精灵\x20哎，你只要跟我念就可以了。元素的精灵啊，请倾听我的请求……\x0aASIDE\x20[亚莲娜]学会了[奥术飞弹]。\x0aSAY\x20元素精灵\x20亚莲娜，你只要使用元素的力量消灭敌人，就可以变得更强大啦！\x0a';
        }, 8322: m => {
            m['exports'] = '\x0aSCENE\x20迷雾森林\x0aSAY\x20亚莲娜\x20艾尔~村长~村长~艾尔~\x0aSAY\x20亚莲娜\x20咦，这是村长，他昏迷了！村长！村长！快醒醒。\x0aSAY\x20村长\x20唔……\x0aSAY\x20村长\x20亚莲娜！你怎么进到林子里来了？\x0aSAY\x20亚莲娜\x20村长，刚才我在路上遇到了艾尔，后来他到森林里来找你了。\x0aSAY\x20村长\x20哎……胡闹！小孩子怎么可以一个人到森林里来。\x0aSAY\x20亚莲娜\x20后来艾尔一直没回来，他可能迷路了！\x0aSAY\x20村长\x20……\x0aSAY\x20村长\x20诺大的森林找人也太困难。走！我们先去邻村找到布帕！\x0aSAY\x20亚莲娜\x20对！有布帕阿姨的二哈在，就不怕找不到人了！\x0a';
        }, 6209: m => {
            m['exports'] = '\x0aSCENE\x20邻村\x0aSAY\x20亚莲娜\x20咦，上午闪银村还很热闹的，怎么现在一点声音都没有。\x0aSAY\x20村长\x20当心，亚莲娜，可能有蹊跷。\x0aSAY\x20发狂的村民甲\x20呼哧……\x0aSAY\x20发狂的村民乙\x20吼！\x0aSAY\x20村长\x20二位小哥，你们……\x0aSAY\x20亚莲娜\x20村长当心！他们不对劲！\x0aSAY\x20发狂的村民甲\x20啊呜！\x0aSAY\x20村长\x20哎哟，你怎么咬人。\x0aSAY\x20亚莲娜\x20快放开村长！\x0a';
        }, 6084: m => {
            m['exports'] = '\x0aSCENE\x20邻村\x0aSAY\x20村长\x20布帕，布帕，你在吗\x0aSAY\x20亚莲娜\x20布帕阿姨~布帕阿姨~\x0aSAY\x20亚莲娜\x20咦，这是……\x0aASIDE\x20{\x0a亚莲娜感觉到附近传来了一股强大的黑暗气息。经过一番查探后，发现了一个地窖。\x0a}\x0aWAIT\x201000\x0a\x0aSCENE\x20幽暗的地窖\x0aSAY\x20死灵法师奈布\x20哈撸所卡卡嘛细塔……(咒语)\x0aSAY\x20亚莲娜\x20(悄声)这是……\x0aSAY\x20村长\x20(悄声)这是召灵阵啊。。这是个亡灵术士！\x0aSAY\x20亚莲娜\x20(悄声)天啊，太可怕了。\x0aSAY\x20村长\x20(悄声)我们快离开这里。\x0aSAY\x20奈布的僵尸\x20吼！\x0aSAY\x20亚莲娜\x20糟了，我们被发现了！\x0a';
        }, 1755: m => {
            m['exports'] = '\x0aSCENE\x20幽暗的地窖\x0aSAY\x20亚莲娜\x20受死吧！\x0aSAY\x20死灵法师奈布\x20呼……\x0aSAY\x20死灵法师奈布\x20对于死亡，我早有准备。年轻的法师，我们还会再见面的。\x0aSAY\x20亚莲娜\x20恶魔，我不会原谅你，就算追杀到天涯海角，我也会消灭你！\x0aSAY\x20死灵法师奈布\x20哼哼……\x0aASIDE\x20这时，地窖外面传来了一阵嘈杂的声音\x0aWAIT\x201000\x0a\x0aSCENE\x20邻村村口\x0aSAY\x20圣殿骑士\x20报告！队长，这里有大量低等亡灵活动的迹象！可能有过天灾瘟疫的传播，建议进行全面的净化！\x0aSAY\x20骑士队长卡罗\x20所有队员听令！对整个村庄进行净化！\x0aSAY\x20圣殿骑士们\x20是！\x0aSAY\x20亚莲娜\x20圣殿骑士团……他们，这是在把村民当做亡灵净化吗……\x0aSAY\x20意识清醒的村民\x20啊！不要杀我\x0aSAY\x20圣殿骑士\x20(砍)\x0aSAY\x20意识清醒的村民\x20啊！……(死亡)\x0aSAY\x20亚莲娜\x20可恶，这帮狂热的骑士，简直就是凶手！明明村民们意识都很清醒了！\x0aSAY\x20亚莲娜\x20我一定要阻止他们！\x0a';
        }, 4654: m => {
            m['exports'] = '\x0aSCENE\x20邻村村口\x0aSAY\x20亚莲娜\x20虽然击败了圣殿骑士们，但是……\x0aSAY\x20亚莲娜\x20闪银村……已经彻底毁了……\x0aSAY\x20布帕阿姨\x20亚莲娜！村长！你们都没事！\x0aSAY\x20布帕阿姨家的二哈\x20汪！\x0aSAY\x20亚莲娜\x20二哈！布帕阿姨！\x0aSAY\x20村长\x20布帕，其它村民们怎么样了？\x0aSAY\x20布帕阿姨\x20你们离开后不久，在我们临时驻扎的区域就发生了混乱，貌似是西德家的小子疯了一样，见谁都咬。\x0aSAY\x20布帕阿姨\x20后来这个状况一下子就传染到了很多村民，我推断可能是疾病或诅咒，就去圣光教会求援了。\x0aSAY\x20布帕阿姨\x20没想到他们居然进行了屠杀……刚才看到，西德家的小子，还有夏洛特家的，都已经……\x0aSAY\x20村长\x20哎……事到如今，也没有什么办法了。布帕，你快在附近搜寻一下，看看还有没有幸存者，然后，我们还要赶去森林里，艾尔在森林里走丢了，我们得尽快找回他，否则太危险了……\x0aSAY\x20布帕阿姨\x20好的\x0aSAY\x20亚莲娜\x20艾尔……坚持一下，我们就来救你了。\x0a\x0aSAY\x20系统\x20这里已经是当前版本亚莲娜剧情线的剧情尽头了。作者还在努力的编写更多的剧情，您也可以继续\x22伐木\x22怪物和制造更好的装备，提前为下一个版本做好准备！\x0a';
        }, 4987: (m, o, p) => {
            m['exports'] = [{
                'key': 'aleanor-startup',
                'group': '亚莲娜的故事',
                'name': '艾尔的呼唤',
                'script': p(0xa61),
                'requirement': {'stories': ['eyer-stories-10']}
            }, {
                'key': 'aleanor-stories-1',
                'group': '亚莲娜的故事',
                'name': '亚莲娜的故事\x20-\x201',
                'script': p(0x16af),
                'requirement': {'role': 'Aleanor', 'stories': ['aleanor-startup']}
            }, {
                'key': 'aleanor-stories-2',
                'group': '亚莲娜的故事',
                'name': '亚莲娜的故事\x20-\x202',
                'script': p(0x2082),
                'requirement': {'role': 'Aleanor', 'map': 'town.woods', 'stories': ['aleanor-stories-1']}
            }, {
                'key': 'aleanor-stories-3',
                'group': '亚莲娜的故事',
                'name': '亚莲娜的故事\x20-\x203',
                'script': p(0x1841),
                'requirement': {'role': 'Aleanor', 'map': 'town.neighbourTown', 'stories': ['aleanor-stories-2']}
            }, {
                'key': 'aleanor-stories-4',
                'group': '亚莲娜的故事',
                'name': '亚莲娜的故事\x20-\x204',
                'script': p(0x17c4),
                'requirement': {'role': 'Aleanor', 'map': 'town.neighbourTown', 'stories': ['aleanor-stories-3']},
                'taskType': 'kill',
                'enemy': 'zombies.farmer',
                'killCount': 0xa
            }, {
                'key': 'aleanor-stories-5',
                'group': '亚莲娜的故事',
                'name': '亚莲娜的故事\x20-\x205',
                'script': p(0x6db),
                'requirement': {'role': 'Aleanor', 'map': 'town.neighbourTown.2', 'stories': ['aleanor-stories-4']},
                'taskType': 'kill',
                'enemy': 'zombie.necromancer',
                'killCount': 0x1
            }, {
                'key': 'aleanor-stories-6',
                'group': '亚莲娜的故事',
                'name': '亚莲娜的故事\x20-\x206',
                'script': p(0x122e),
                'requirement': {'role': 'Aleanor', 'map': 'town.neighbourTown.3', 'stories': ['aleanor-stories-5']},
                'taskType': 'kill',
                'enemy': 'knight.leader',
                'killCount': 0x1
            }];
        }, 2957: m => {
            m['exports'] = '\x0aSAY\x20系统\x20[母体史莱姆]是一种体型巨大的史莱姆，具有很强的防御力和超多的血量。\x0aSAY\x20系统\x20[技能：吞噬]当母体史莱姆受伤时，会吞噬最靠前的一只史莱姆，并恢复相当于被吞噬史莱姆最大生命值的血量。\x0aSAY\x20系统\x20因为母体史莱姆的防御力和高血量，这场战斗注定是一场持久战。所以你务必准备好具备生命恢复词缀的护甲。\x0aSAY\x20系统\x20缩短战斗时间也是非常重要的，所以带有攻击力词缀的武器是很不错的选择。\x0aSAY\x20系统\x20在战斗的过程中，因为母体史莱姆恢复的血量和被吞噬的史莱姆有关，所以务必及时清理掉大史莱姆和带有词缀（尤其是强壮词缀）的史莱姆。\x0aSAY\x20系统\x20杀死母体史莱姆不但可以获得大量材料，还有机会获取极其稀少的神力哦。\x0a';
        }, 3786: m => {
            m['exports'] = '\x0aSAY\x20系统\x20[狼王]是狼群的首领，攻击力极高。\x0aSAY\x20系统\x20[技能：召唤狼群]狼王每隔一段时间，就会召唤一只母狼和两只幼狼加入战斗。\x0aSAY\x20系统\x20[母狼]体型较大的狼，攻击力极高，且会治疗自己的同伴。\x0aSAY\x20系统\x20[技能：舔舐伤口]狼王每隔一段时间，就会治疗一个自己受伤的同伴，为其恢复100点生命值\x0aSAY\x20系统\x20初期开荒时，使用高伤害技能迅速消灭母狼十分必要，母狼不但攻击力高，还会为包括狼王在内的目标恢复生命\x0aSAY\x20系统\x20因为敌人攻击力很高，积累足够品质的防具，以及选择足够的防御技能也非常重要。\x0aSAY\x20系统\x20使用艾尔战斗时，幼狼攻击力不高，反而可以帮艾尔恢复大量怒气以提升输出，因此防御足够的情况下，不妨留下若干的幼狼。\x0aSAY\x20系统\x20若艾尔已经装备了狼牙棒，那么也可以采用[狂热]+[旋风斩]的组合，迅速造成大量群体伤害。\x0aSAY\x20系统\x20若久战不过，很可能是你的技能等级还不够，在较早地图锻炼来提升技能等级吧。技能是越用越强大的哦~\x0a';
        }, 1831: m => {
            m['exports'] = '\x0aASIDE\x20{\x0a\u3000自从第二灵灾过去，兽人大战结束，麦德尼大陆已经和平许久了。\x0a\u3000在拜尔帝国北郡的一个小村庄，所有人过着安静祥和的日子。白天劳作收获，夜晚则聚在酒吧闲谈……\x0a}\x0a\x0aSCENE\x20自宅\x0a\x0aSAY\x20艾尔\x20呼~睡的真舒服呀！\x0aSAY\x20艾尔\x20昨晚通宵读这本《圣光英雄传》，然后一觉睡到了……咦？\x0aSAY\x20艾尔\x20为什么天还没有亮？\x0aWAIT\x20500\x0aASIDE\x20远方传来了一声尖叫：啊！……\x0aSAY\x20艾尔\x20！！！\x0aSAY\x20艾尔\x20发生什么事了？\x0aASIDE\x20艾尔走出家门\x0a\x0aSCENE\x20村间小路\x0aSAY\x20艾尔\x20我^&$%，哪来这么多史莱姆！\x0aSAY\x20艾尔\x20唔……\x0aSAY\x20艾尔\x20没错！这个邪恶值得一战！\x0aSAY\x20艾尔\x20不过首先……\x0aWAIT\x20500\x0a\x0aSCENE\x20自宅\x0aASIDE\x20(艾尔拿出一把自制的细木剑)\x0aSAY\x20艾尔\x20珍藏多年的宝剑啊，终于到了你有用武之地的时候了！\x0aASIDE\x20细木剑发出一声低鸣（艾尔的妄想）\x0aSAY\x20艾尔\x20邪恶的爪牙们啊，等待勇者艾尔的制裁吧！\x0a\x0aSCENE\x0a\x0aSAY\x20系统\x20{\x0a这是一个放置类RPG游戏，您不需要亲自操作英雄们进行战斗，只需要为他们准备好武器和防具，设定好冒险的地图，英雄们就会自动奋战。\x0a}\x0aSAY\x20系统\x20{\x0a击败魔物然后获得材料和装备，使用材料改造更强大的武器和防具，让英雄逐步成长，最后挑战各种邪恶的魔王。\x0a}\x0aSAY\x20系统\x20{\x0a即使您离开游戏，只要在72个小时之内回来，英雄们就不会停止奋战。随时回到游戏整理战利品吧！\x0a}\x0aSAY\x20系统\x20{\x0a除了金币外，神力(也有人把它叫做命运点数)也是重要的资源点数。它可以开启新的英雄栏位，解锁新的背包空间，生产高品质的装备。更重要的是，收集情报和开启新的冒险之旅也可能会需要它，因此在冒险的过程请务必注意收集神力点数。\x0a}\x0aSAY\x20系统\x20{\x0a神力的来源除了向创世神祈(kè)祷(jīn)外，还可以通过击败魔王获得。另外，拆解史诗及更高品质的装备也可以得到神力。\x0a}\x0aSAY\x20系统\x20{\x0a现在，为艾尔装备上武器，开始您的冒险之旅吧！\x0a}\x0a';
        }, 831: m => {
            m['exports'] = '\x0aSCENE\x20迷雾森林\x0aSAY\x20艾尔\x20终于击败了狼王。\x0aSAY\x20艾尔\x20可是，村长在哪里呢……\x0aSAY\x20艾尔\x20。。我在哪里呢……果然迷路了吗……\x0aSAY\x20艾尔\x20救命啊！！！！有人能听见吗？？？？\x0aSAY\x20艾尔\x20呜呜呜……村长……布帕阿姨……\x0aWAIT\x20500\x0a\x0aSCENE\x20拜尔王都\x0aASIDE\x20这时候，数十里外的拜尔王都\x0aSAY\x20？？？\x20终于！我酝酿十年的计划！\x0aSAY\x20？？？\x20神明啊，圣光啊，既然你们都遗弃了我，就让死亡和黑暗，洗刷这片土地的邪恶吧！\x0a';
        }, 1274: m => {
            m['exports'] = '\x0aSCENE\x20村间小路\x0aSAY\x20艾尔\x20来吧！邪恶的爪牙！战个痛快吧！\x0aSAY\x20艾尔\x20……\x0aSAY\x20艾尔\x20不过话说为什么会有这么多史莱姆出现呢？亚莲娜他们没事吧？\x0aSAY\x20小史莱姆\x20{\x0a呼……\x20呼……\x20（扑上）\x0a}\x0aSAY\x20艾尔\x20哎哟！居然咬我，吃我一记破鞋斩！\x0aSAY\x20艾尔\x20咦，这史莱姆肚子里好像有什么东西\x0aSAY\x20系统\x20杀死魔物可以掉落材料，材料可以用于制造更好的装备。\x0aSAY\x20系统\x20如果受伤比较严重，也可以先回到自宅休整一番。在自宅体力和魔力等都会加速恢复。\x0aSAY\x20系统\x20多杀死几只史莱姆收集更进一步的情报吧。\x0a';
        }, 4057: m => {
            m['exports'] = '\x0aSCENE\x20村间小路\x0aSAY\x20艾尔\x20呼……\x0aSAY\x20艾尔\x20区区史莱姆，居然也如此难缠！\x0aSAY\x20艾尔\x20但是在本勇者的宝剑下，不过是一群乌合之众！\x0aSAY\x20艾尔\x20啊啊啊啊！冲锋！\x0aSAY\x20大史莱姆\x20……\x0aSAY\x20艾尔\x20哎哟，非洲老头子跳高，黑（吓）老子一跳啊，这是什么鬼？\x0aSAY\x20艾尔\x20看样子不会咬人哦，戳一下看看。\x0aSAY\x20大史莱姆\x20呜！呼呼呼呼！\x0aSAY\x20艾尔\x20哎哟，怎么突然疯了一样\x0aSAY\x20系统\x20黄色名字的魔物不会主动攻击英雄们，英雄们的溅射和群体伤害技能也不会攻击他们。但如果英雄主动攻击他们，他们就会加入战斗。\x0aSAY\x20系统\x20要想指明英雄的攻击目标，在\x22单位\x22面板里点击敌人面板就可以了哦~\x0aSAY\x20系统\x20因为大史莱姆的战斗力比小史莱姆强很多，请务必挑选好防具再行挑战！\x0a';
        }, 6860: m => {
            m['exports'] = '\x0aSCENE\x20村间小路\x0aSAY\x20艾尔\x20啊……多凶狠的怪物啊……我曾数过我杀死了多少怪物，然而已经多到数不清了。\x0aSAY\x20女孩的声音\x20啊……救命……不要过来……！\x0aSAY\x20艾尔\x20是亚莲娜吗？\x0aSAY\x20艾尔\x20但是话说史莱姆的危险度……应该不会致命吧……？就算被咬了也只是痒痒的……\x0aSAY\x20艾尔\x20（摇头）不对，这可是英雄救美的重要时刻，我怎么可以在这里胡思乱想呢……快跟上去！\x0a\x0aSCENE\x20洞窟入口\x0aSAY\x20艾尔\x20听声音就在这个洞窟里面了。\x0aSAY\x20艾尔\x20洞里面阴森森的，真是恐怖！\x0aSAY\x20大史莱姆\x20呼！！呼！！\x0aSAY\x20艾尔\x20啊！洞穴里的史莱姆体型更大，而且更加凶猛了！怎么办？\x0aSAY\x20女孩的声音\x20哈……嘿嘿……哈哈……好痒……不要过来！\x0aSAY\x20艾尔\x20……\x0aSAY\x20艾尔\x20看起来亚莲娜没有生命危险，我还是做好准备再来吧。\x0a';
        }, 4963: m => {
            m['exports'] = '\x0aSCENE\x20洞窟\x0aSAY\x20艾尔\x20亚莲娜应该在这个方向。\x0aSAY\x20艾尔\x20来吧，史莱姆们！最大不过蒲团大小的怪物，正是我练剑的好对象！\x0aSAY\x20艾尔\x20就算洞穴里的个头比外面的大，也不过就是稍微大一点的蒲团嘛！总不会出现比人还大的吧。\x0aSAY\x20母体史莱姆\x20……\x0aSAY\x20艾尔\x20……\x0aSAY\x20艾尔\x20（悄声）我的天哪~居然有这么大个的史莱姆，别说见了，听都没听说过。\x0aSAY\x20母体史莱姆\x20咕嘟（一口吞下一只旁边的大史莱姆）\x0aSAY\x20艾尔\x20（咽了一口口水）……我觉得它一口吞了我问题也不大。我还是绕过他去寻找亚莲娜吧。。不然她被这怪物发现了就完了。\x0aSAY\x20母体史莱姆\x20！\x0aSAY\x20艾尔\x20！\x0aSAY\x20亚莲娜\x20！\x0aSAY\x20亚莲娜\x20啊啊啊啊啊……救命啊！\x0aSAY\x20母体史莱姆\x20咕嘟（一口吞下亚莲娜）\x0aSAY\x20艾尔\x20……\x0aSAY\x20艾尔\x20没办法了，只能硬上了！\x0aWAIT\x20500\x0aSAY\x20系统\x20母体史莱姆的战斗极其困难，建议务必准备好武器和防具，并且认真观察它的行动。\x0aSAY\x20系统\x20你也可以在情报界面使用神力点数兑换相应的情报，了解敌人的弱点就可以更好的消灭它！\x0a';
        }, 5318: m => {
            m['exports'] = '\x0aSCENE\x20洞窟\x0aSAY\x20艾尔\x20亚莲娜，你还好吗？\x0aSAY\x20亚莲娜\x20呜呜呜……你快转过去……（衣服都破破烂烂的了，羞死了）\x0aSAY\x20艾尔\x20哦哦……好的……我这边还有我自己缝的布裙，你赶紧换上，我到那边去等你……\x0aSAY\x20亚莲娜\x20……\x0aSAY\x20艾尔\x20……\x0aSAY\x20亚莲娜\x20好了，艾尔，谢谢你救了我。\x0aSAY\x20艾尔\x20没事！谁叫我是命中注定的勇者呢！对了，其他人呢？\x0aSAY\x20亚莲娜\x20今天上午的时候突然爆发了兽潮，村长和布帕阿姨带着大家一起去邻村避难了。\x0aSAY\x20艾尔\x20呵……（看来我睡的真是沉啊，兽潮这么大事都没有吵醒我）\x0aSAY\x20亚莲娜\x20大家慌乱中到了邻村才发现找不见你，于是我和村长就冒险回来寻你。\x0aSAY\x20亚莲娜\x20可是在前面的山路上，突然一堆史莱姆涌了出来，直接将村长冲到山脚下了，我拼命跑拼命跑才跑到这里，然后就遇到你了。\x0aSAY\x20艾尔\x20这样……兽潮应该已经过去了。我先送你回家，关好门窗就可以，史莱姆不敢靠近木头。\x0aSAY\x20艾尔\x20然后我赶紧去山谷看看能不能找到村长。\x0aSAY\x20亚莲娜\x20好的……\x0aSAY\x20亚莲娜\x20（要是我能帮助到艾尔哥哥就好了……）\x0aSAY\x20艾尔\x20那我们就赶紧离开这里吧！\x0a';
        }, 9909: m => {
            m['exports'] = '\x0aSCENE\x20山谷\x0aSAY\x20艾尔\x20从小就听大人们说山里有狼，这还是我第一次独自到山里呢。\x0aSAY\x20艾尔\x20不过一路走来，鹿儿见到好几只，却没见着狼呢。\x0aSAY\x20狼幼崽\x20呼……\x0aSAY\x20艾尔\x20咦，哪里来的小狗狗，好可爱❤\x0aSAY\x20母狼\x20呼……\x0aSAY\x20艾尔\x20啊，好大的……狼！\x0a';
        }, 7624: m => {
            m['exports'] = '\x0aSCENE\x20山谷\x0aSAY\x20艾尔\x20原来这就是狼，远看着跟布帕阿姨家的二哈一模一样。。\x0aSAY\x20艾尔\x20这样看来，原来大人们真的没有骗人。山里真的有很多狼。\x0aSAY\x20艾尔\x20可是村长……还在更深的地方吗？前面的森林全都是雾，进去不会迷路吧……\x0a';
        }, 2239: m => {
            m['exports'] = '\x0aSCENE\x20迷雾森林\x0aSAY\x20狼王\x20……(冷冷的)\x0aSAY\x20狼王\x20啊呜呜呜呜……(嗥叫)\x0aSAY\x20狼群们\x20啊呜呜呜呜……(嗥叫)\x0a';
        }, 3150: (m, o, p) => {
            m['exports'] = [{
                'key': 'eyer-stories-1',
                'group': '艾尔的故事',
                'name': '艾尔的故事\x20-\x20序章\x20-\x201',
                'script': p(0x727),
                'requirement': {'role': 'Eyer', 'map': 'home'}
            }, {
                'key': 'eyer-stories-2',
                'group': '艾尔的故事',
                'name': '艾尔的故事\x20-\x20序章\x20-\x202',
                'script': p(0x4fa),
                'requirement': {'role': 'Eyer', 'map': 'town.street', 'stories': ['eyer-stories-1']}
            }, {
                'key': 'eyer-stories-3',
                'group': '艾尔的故事',
                'name': '艾尔的故事\x20-\x20序章\x20-\x203',
                'script': p(0xfd9),
                'requirement': {'role': 'Eyer', 'map': 'town.street', 'stories': ['eyer-stories-2']},
                'taskType': 'kill',
                'enemy': 'slime.minimal',
                'killCount': 0xa
            }, {
                'key': 'eyer-stories-4',
                'group': '艾尔的故事',
                'name': '艾尔的故事\x20-\x20序章\x20-\x204',
                'script': p(0x1acc),
                'requirement': {'role': 'Eyer', 'map': 'town.street', 'stories': ['eyer-stories-3']},
                'taskType': 'kill',
                'enemy': 'slime.giant',
                'killCount': 0x1
            }, {
                'key': 'eyer-stories-5',
                'group': '艾尔的故事',
                'name': '艾尔的故事\x20-\x20序章\x20-\x205',
                'script': p(0x1363),
                'requirement': {'role': 'Eyer', 'map': 'town.cave2', 'stories': ['eyer-stories-4']}
            }, {
                'key': 'eyer-stories-6',
                'group': '艾尔的故事',
                'name': '艾尔的故事\x20-\x20序章\x20-\x206',
                'script': p(0x14c6),
                'requirement': {'role': 'Eyer', 'stories': ['eyer-stories-5']},
                'taskType': 'kill',
                'enemy': 'slime.queen',
                'killCount': 0x1
            }, {
                'key': 'eyer-stories-7',
                'group': '艾尔的故事',
                'name': '艾尔的故事\x20-\x20序章\x20-\x207',
                'script': p(0x26b5),
                'requirement': {'role': 'Eyer', 'map': 'town.valley', 'stories': ['eyer-stories-6']}
            }, {
                'key': 'eyer-stories-8',
                'group': '艾尔的故事',
                'name': '艾尔的故事\x20-\x20序章\x20-\x208',
                'script': p(0x1dc8),
                'requirement': {'role': 'Eyer', 'map': 'town.valley', 'stories': ['eyer-stories-7']},
                'taskType': 'kill',
                'enemy': 'wolf.giant',
                'killCount': 0xa
            }, {
                'key': 'eyer-stories-9',
                'group': '艾尔的故事',
                'name': '艾尔的故事\x20-\x20序章\x20-\x209',
                'script': p(0x8bf),
                'requirement': {'role': 'Eyer', 'map': 'town.woods', 'stories': ['eyer-stories-8']}
            }, {
                'key': 'eyer-stories-10',
                'group': '艾尔的故事',
                'name': '艾尔的故事\x20-\x20序章\x20-\x20完结',
                'script': p(0x33f),
                'requirement': {'role': 'Eyer', 'map': 'town.woods', 'stories': ['eyer-stories-9']},
                'taskType': 'kill',
                'enemy': 'wolf.king',
                'killCount': 0x1
            }, {
                'key': 'advices-slime-queen',
                'group': '魔王情报录',
                'name': '情报:\x20母体史莱姆',
                'script': p(0xb8d),
                'requirement': {'stories': ['eyer-stories-5']},
                'taskType': 'purchase',
                'price': 0xa
            }, {
                'key': 'advices-wolf-king',
                'group': '魔王情报录',
                'name': '情报:\x20狼王',
                'script': p(0xeca),
                'requirement': {'stories': ['eyer-stories-9']},
                'taskType': 'purchase',
                'price': 0x14
            }];
        }, 506: m => {
            m['exports'] = '\x0aASIDE\x20艾尔迷路后，一路狂奔，结果掉进了一个坍塌的矿洞中。\x0aSCENE\x20矿洞\x0aSAY\x20艾尔\x20{\x0a村长~\x20村长~\x0a}\x0aSAY\x20艾尔\x20一路走过来都没有看到村长的痕迹，村长去哪儿了呢？\x0aSAY\x20艾尔\x20要是这时候布帕阿姨家的二哈在就好了……\x0aSAY\x20？？？\x20汪汪！\x0aSAY\x20艾尔\x20咦？那是什么声音？\x0aSAY\x20？？？\x20汪！你休想抢走我的蜡烛！\x0aSAY\x20艾尔\x20？？？我要蜡烛干嘛？前面到底是谁？\x0a';
        }, 4231: m => {
            m['exports'] = '\x0aSCENE\x20矿洞\x0aSAY\x20艾尔\x20哎哟，狗头人不是一向很和善的么，为什么这些狗头人看到我就打呢？\x20\x0aSAY\x20狗头人甲\x20汪！人类太凶恶了！\x0aSAY\x20狗头人乙\x20汪！快去叫大王！\x0aSAY\x20狗头人甲\x20对！汪！人类你等着，让大王来消灭你！\x0aSAY\x20艾尔\x20什么鬼，狗头人也有大王了？这不魔法呀，狗头人明明是平等聚居的种族啊……\x0aSAY\x20艾尔\x20这里面一定有蹊跷。\x0aSAY\x20狗头人乙\x20汪！刚才进来的人类我一铲子就打晕了，为什么这个人类这么凶？快跑！\x0aSAY\x20艾尔\x20刚才的人类？难道是村长？\x0a';
        }, 3728: m => {
            m['exports'] = '\x0aSCENE\x20矿洞深处\x0aSAY\x20金牙大王\x20汪！人类！这个矿洞已经是我的领地了！你快点离开。\x0aSAY\x20艾尔\x20你就是狗头人的大王吗？我问你，刚才你有见到另一个人类吗？\x0aSAY\x20金牙大王\x20汪！人类！你快走开！快走开！你不属于这里！\x0aSAY\x20艾尔\x20我是想问你……\x0aSAY\x20金牙大王\x20汪！你不走开我就要咬你了，啊呜呜！！\x0a';
        }, 2293: m => {
            m['exports'] = '\x0aSCENE\x20矿洞深处\x0aSAY\x20金牙大王\x20汪！人类！你不要打金牙了！狗头人是人类最好的朋友！\x0aSAY\x20艾尔\x20噗……你现在能不能好好说话了？\x0aSAY\x20金牙大王\x20汪！人类！我再也不把项链咬坏了！\x0aSAY\x20艾尔\x20我不是问你这个，我问你，刚才你们有没有看到过另一个人类？\x0aSAY\x20金牙大王\x20汪！金牙有见过！一个白胡子的人类！\x0aSAY\x20艾尔\x20对！他在哪儿呢？\x0aSAY\x20金牙大王\x20汪！他被卡卡列夫大王的使者带走了！\x0aSAY\x20艾尔\x20卡卡列夫大王？那是啥？\x0aSAY\x20金牙大王\x20汪！卡卡列夫大王很厉害！他教会了金牙魔法！他的使者也很厉害！会丢盘子！金牙喜欢盘子！\x0aSAY\x20艾尔\x20别说这些乱七八糟的了……快告诉我，他们往哪儿走了？\x0aSAY\x20金牙大王\x20汪！他们往洞里面！洞里面有好多蜡烛！然后出现了一个大洞！然后他们就走了！\x0aSAY\x20艾尔\x20洞……？蜡烛？\x0a\x0aSCENE\x20召唤法阵\x0aSAY\x20金牙大王\x20汪！就是这里！\x0aSAY\x20艾尔\x20天啊……这里是……\x0aSAY\x20艾尔\x20召唤法阵！为什么这里会有这种东西……\x0aSAY\x20金牙大王\x20汪！这里是金牙画的！金牙是不是很厉害！\x0aSAY\x20艾尔\x20金牙。。你为什么会画召唤法阵的？\x0aSAY\x20金牙大王\x20汪！金牙喜欢蜡烛，喜欢火焰！火焰保护狗头人！这个法阵让金牙感到很温暖！\x0aSAY\x20艾尔\x20确实，这里非常温暖……是元素召唤法阵吗？\x0aSAY\x20艾尔\x20金牙，你还能联系上卡卡列夫他们吗？\x0aSAY\x20金牙大王\x20汪！没问题！卡夫萨尼亚卡阿纳列西夫卡……（咒语）\x0aSAY\x20艾尔\x20天啊。。狗头人居然能念出这么长的咒语……\x0aSAY\x20金牙大王\x20卡卡列夫大人来了！\x0aASIDE\x20{\x0a随着金牙大王的念诵，阵法最中间的蜡烛的火焰，骤然幻化成一个火元素的形状。\x0a在金牙的带领下，艾尔靠近着团火焰。\x0a}\x0aSAY\x20艾尔\x20噗……这指尖大的火元素……看起来好萌！\x0aSAY\x20卡卡列夫的幻象\x20是谁在呼唤本大君！\x0aSAY\x20金牙大王\x20卡卡列夫大人！这个人类很厉害，金牙打不过他！\x0aSAY\x20卡卡列夫的幻象\x20人类！感受本大君的怒火吧！\x0aSAY\x20金牙大王\x20受死吧人类！\x0aSAY\x20艾尔\x20（对着蜡烛一吹）\x0aASIDE\x20蜡烛应声而灭\x0aSAY\x20金牙大王\x20……\x0aSAY\x20艾尔\x20……\x0aSAY\x20金牙大王\x20卡夫萨尼亚卡阿纳列西夫卡……！（咒语）\x0aSAY\x20卡卡列夫的幻象\x20是谁在呼唤本大君！\x0aSAY\x20艾尔\x20卡卡列夫，你把村长带到哪儿去了？\x0aSAY\x20卡卡列夫的幻象\x20可恶的人类，本大君不会回答你的问题！\x0aSAY\x20艾尔\x20（吹）\x0aSAY\x20金牙大王\x20卡夫萨尼亚卡阿纳列西夫卡……！（咒语）\x0aSAY\x20卡卡列夫的幻象\x20啊啊啊啊！无耻的人类！快停止你对本大君的不敬！\x0aSAY\x20艾尔\x20（吹）\x0aSAY\x20金牙大王\x20卡夫萨尼亚卡阿纳列西夫卡……！（咒语）\x0aSAY\x20卡卡列夫的幻象\x20啊啊啊啊！人类！快停下你的作为！\x0aSAY\x20艾尔\x20（吹）\x0aSAY\x20金牙大王\x20卡夫萨尼亚卡阿纳列西夫卡……！（咒语）\x0aSAY\x20卡卡列夫的幻象\x20人类！别玩了！本大君同意回答你的问题！\x0aSAY\x20艾尔\x20快说，为什么带走村长，你把他带到哪儿去了？\x0aSAY\x20卡卡列夫的幻象\x20你是说那个老年人类吗？他的灵魂已经属于本大君了！\x0aSAY\x20艾尔\x20什么！\x0aSAY\x20卡卡列夫的幻象\x20因为他违背了和本大君的契约！他拒绝实施本大君的降临计划！\x0aSAY\x20艾尔\x20你这个恶魔！(吹)\x0aSAY\x20卡卡列夫的幻象\x20呵哈哈哈，你以为同样的办法还能对本君继续使用吗？本君已经链接好了两个位面，感受本君的愤怒吧！\x0aASIDE\x20卡卡列夫的体型瞬间膨胀，一下扩大了几十倍\x0aSAY\x20卡卡列夫的幻象\x20金牙，你这个背叛本君的狗杂种，灼热之箭！\x0aSAY\x20金牙大王\x20啊啊啊啊啊（死了）\x0aSAY\x20艾尔\x20！！\x0a';
        }, 4550: m => {
            m['exports'] = '\x0aSCENE\x20召唤法阵\x0aSAY\x20卡卡列夫的幻象\x20人类，你等着，我卡卡列夫终将有一天降临你们的世界！到时候，感受我的怒火吧！\x0aSAY\x20艾尔\x20你别走！你把村长还给我！\x0aSAY\x20卡卡列夫的幻象\x20（消散）\x0aSAY\x20艾尔\x20呜呜……村长……\x0aSAY\x20布帕阿姨\x20艾尔……艾尔……你在哪里？\x0aSAY\x20亚莲娜\x20艾尔……艾尔……\x0aSAY\x20艾尔\x20呜呜……大家……\x0aSAY\x20村长\x20艾尔……艾尔……\x0aSAY\x20艾尔\x20？？村长？喂~我在这里！\x0aSAY\x20布帕阿姨\x20艾尔！你没事吧！\x0aSAY\x20艾尔\x20布帕阿姨！村长！你没事！\x0aSAY\x20布帕阿姨家的狗\x20汪汪！\x0aSAY\x20艾尔\x20村长，我刚听说你被火元素大君抓走了……你没事吗？\x0aSAY\x20村长爷爷\x20什么？我只是被史莱姆冲下了山，因为有软软的史莱姆做缓冲，所以什么伤也没有受。\x0aSAY\x20艾尔\x20啊！那被火元素抓走的是谁呢……\x0aSAY\x20艾尔\x20（一五一十的跟大家说了发生的事）\x0aSAY\x20村长爷爷\x20唔……听起来，被抓走的可能是一名魔法师。\x0aSAY\x20村长爷爷\x20不过这不是眼下最需要担心的事情了。艾尔，我们快回村子，天就快黑了。\x0aSAY\x20艾尔\x20好的。\x0a';
        }, 7811: (m, o, p) => {
            m['exports'] = [{
                'key': 'eyer-grow-1',
                'group': '艾尔的启程',
                'name': '狗头人是人类最好的朋友\x20-\x201',
                'requirement': {'role': 'Eyer', 'map': 'town.mine.1', 'stories': ['eyer-stories-10']},
                'script': p(0x1fa)
            }, {
                'key': 'eyer-grow-2',
                'group': '艾尔的启程',
                'name': '狗头人是人类最好的朋友\x20-\x202',
                'requirement': {'role': 'Eyer', 'map': 'town.mine.1', 'stories': ['eyer-grow-1']},
                'script': p(0x1087),
                'taskType': 'kill',
                'enemy': 'kobold.miner',
                'killCount': 0xa
            }, {
                'key': 'eyer-grow-3',
                'group': '艾尔的启程',
                'name': '金牙是人类最好的朋友',
                'requirement': {'role': 'Eyer', 'map': 'town.mine.2', 'stories': ['eyer-grow-2']},
                'script': p(0xe90)
            }, {
                'key': 'eyer-grow-4',
                'group': '艾尔的启程',
                'name': '金牙召唤了金牙最好的朋友',
                'requirement': {'role': 'Eyer', 'map': 'town.mine.2', 'stories': ['eyer-grow-3']},
                'script': p(0x8f5),
                'taskType': 'kill',
                'enemy': 'kobold.goldteeth',
                'killCount': 0x1
            }, {
                'key': 'eyer-grow-5',
                'group': '艾尔的启程',
                'name': '艾尔最好的朋友找回了艾尔',
                'requirement': {'role': 'Eyer', 'map': 'town.mine.3', 'stories': ['eyer-grow-4']},
                'script': p(0x11c6),
                'taskType': 'kill',
                'enemy': 'kakarif.illusion',
                'killCount': 0x1
            }];
        }, 5910: m => {
            m['exports'] = '\x0aSCENE\x20村长家\x0aASIDE\x20（夜晚，大家聚集在村长家）\x0aSAY\x20村长\x20孩子们，今天发生的事情太多了，而且都非常的蹊跷。\x0aSAY\x20村长\x20先是反季节的兽潮，明明已经快到夏天了，天气非常的炎热，照理不是兽群迁徙的时候。\x0aSAY\x20村长\x20然后是史莱姆大爆发，如果是自然树木分泌的史莱姆，不会有这么多。\x0aSAY\x20村长\x20接着是艾尔发现的火元素祭坛，狗头人本来是温顺勤劳的种族，现在却变得十分攻击性，背后又出现了火元素大君的力量。\x0aSAY\x20村长\x20然后是邻村，很多村民突然发疯，互相撕咬，亚莲娜还发现了是死灵法师在作怪。\x0aSAY\x20村长\x20最后是圣殿骑士。。不由分说的屠杀村民，连没有被感染的村民也不放过。\x0aSAY\x20村长\x20现在兽潮过去了，史莱姆也已经被清理干净，火元素祭坛也被摧毁了，死灵法师也被消灭了。但是我担心的是……\x0aSAY\x20村长\x20圣殿骑士团会不会再次前来袭击村民……他们的一个小队在闪银村覆灭，我想他们一定会派出更多的队伍进行调查。\x0aSAY\x20亚莲娜\x20村长……都是我的错，我太冲动了。\x0aSAY\x20村长\x20好了，现在不是说这些的时候。\x0aSAY\x20村长\x20我想，我们最好赶紧收拾一下，远离这片地方。\x0aSAY\x20艾尔\x20！！\x0aSAY\x20亚莲娜\x20村长，突然间说迁徙也……\x0aSAY\x20村长\x20这是最安全的办法了。今天咱们就已经损失了一半多的村民。不能再冒险留下了！布帕，你经常出门冒险，关于迁徙的方向，由你来决定吧。\x0aSAY\x20布帕阿姨\x20好的。我们朝西和朝北分别是迷雾森林和山脉地带，已经接近奥兰的地界，也没有什么适宜定居的地方，朝东南是帕拉玛大平原，太容易被教会的军队追击。我想，我们还是朝西南走，向拜尔王都的方向前进最为安全！\x0aSAY\x20亚莲娜\x20村长，但是我很担心……村民们的发狂，像是一种传染病，贸然前往王都，拜尔的军队会对我们什么态度？\x0aSAY\x20村长\x20恩，这也是需要考虑的问题。但是迁徙也必须尽快开始，这……\x0aSAY\x20艾尔\x20村长，交给我和亚莲娜吧，我们俩都是孤儿，没有什么行李需要收拾，我们可以先前往王都，寻求官员的帮助。您和布帕阿姨带着村民们一起迁徙，如果等几天还没有我们的消息，你们就尽快转向北，去奥兰吧！\x0aSAY\x20村长\x20可是，对你们来说这也太冒险了……\x0aSAY\x20亚莲娜\x20村长，没问题的，现在消息应该还没传过去，如果有危险，我会带着艾尔传送离开的。\x0aSAY\x20村长\x20好吧……那就这么定了，尽快行动吧，我们时间不多了。\x0a';
        }, 3027: m => {
            m['exports'] = '\x0aSCENE\x20大路上\x0aSAY\x20艾尔\x20亚莲娜\x0aSAY\x20亚莲娜\x20恩？\x0aSAY\x20艾尔\x20我听说，咱们拜尔的王都，在海边？\x0aSAY\x20亚莲娜\x20是呀，和法师之国艾因罗丹特隔海相望。\x0aSAY\x20艾尔\x20亚莲娜，你很想去艾因罗丹特吗。\x0aSAY\x20亚莲娜\x20嗯，很想去。听说那里有很多书可以看。\x0aSAY\x20艾尔\x20哈哈哈，亚莲娜真的很爱读书啊。\x0aSAY\x20艾尔\x20好！我想这次的事情处理完，我就进城去工作，一定要挣够多多的钱，带你出海去艾因罗丹特！\x0aSAY\x20亚莲娜\x20艾尔。。\x0aSAY\x20艾尔\x20嗯……？怎么了？你不用太感动，哈哈哈~\x0aSAY\x20亚莲娜\x20不。。我是觉得，我们是不是走错路了……我们好像在往东南方向走……\x0aSAY\x20艾尔\x20啊……有吗？哈哈哈，不好意思，聊的太兴起，没注意方向，那我们就朝这边！\x0aSAY\x20亚莲娜\x20不……艾尔，那是东北面。。往那边就是帕拉玛大草原了……你想被安东尼奥的圣骑士追赶吗……\x0aSAY\x20艾尔\x20哈哈哈……还是亚莲娜你带路吧……\x0a';
        }, 7564: m => {
            m['exports'] = '\x0aSCENE\x20大路上\x0a\x0aSAY\x20亚莲娜\x20艾尔\x0aSAY\x20艾尔\x20恩？\x0aSAY\x20亚莲娜\x20我们走多久了？\x0aSAY\x20艾尔\x20不知道哎，但咱们肚子饿吃干粮应该已经……三次了吧？\x0aSAY\x20亚莲娜\x20那应该是十几个小时过去了。那也应该天亮了……可是为什么天上还是这么黑呢？\x0aSAY\x20艾尔\x20耶？有吗？说不定只是咱们赶路，饿的比较快呢？\x0aSAY\x20亚莲娜\x20这天上……既没有月亮，也没有星星……\x0aSAY\x20亚莲娜\x20而且我们走了十几个小时了，这么宽的路，没有遇到一个行人，没有遇到一辆车马。。\x0aSAY\x20艾尔\x20亚莲娜。。你说的我心里开始发毛了。。\x0aSAY\x20亚莲娜\x20而且，你有没有觉得，似乎越来越冷了……\x0aSAY\x20艾尔\x20亚莲娜，我觉得你想多了，你看看，前面不就有一个人拖着一辆车？\x0aSAY\x20亚莲娜\x20行人……吗？这么黑的夜里，不带火把……？\x0aSAY\x20艾尔\x20哈哈，不要想太多，也许是离他家很近了呢，你等等，我上去打个招呼。\x0aWAIT\x201000\x0a\x0aSAY\x20艾尔\x20嗨，哥们~\x0aSAY\x20行人？\x20（一言不发的拖着车）\x0aSAY\x20艾尔\x20哥们，想问下，附近有啥村子啥的吗？咱们是打东北面来的，要上王都去，问下还有多远哈~\x0aSAY\x20行人？\x20吼~\x0aSAY\x20艾尔\x20哎哟我去，哥们你这脸也忒吓人了。\x0aSAY\x20亚莲娜\x20艾尔小心，他不是人类！\x0aSAY\x20艾尔\x20哈？\x0aSAY\x20？？？\x20（刺！）\x0aSAY\x20行人？\x20吼！（倒下）\x0aSAY\x20？？？\x20喂，你们俩，是活人？\x0aSAY\x20艾尔\x20哥们你好厉害！一刀一个啊！\x0aSAY\x20？？？\x20这附近都被污染了，呆在外面久了也会被感染的，你们是从哪来的？\x0aSAY\x20艾尔\x20大哥我们是从东北来的，要去王都。\x0aSAY\x20？？？\x20王都？别开玩笑了，那地方现在谁敢去。就这一个小僵尸都能吓你们一跳的，去王都不是给僵尸投食么。\x0aSAY\x20亚莲娜\x20请问大哥附近发生了什么事呢？\x0aSAY\x20？？？\x20拜尔已经不是活人的世界了，你们快逃去奥兰吧，别去安东尼奥，那群疯子骑士知道你们是拜尔来的，会直接灭口的。\x0aSAY\x20？？？\x20别耽误时间了，我要赶去前面的一个避难所，通知他们尽快迁徙。你们也快往回走吧。\x0aSAY\x20艾尔\x20大哥等等……\x0aASIDE\x20那人已经瞬间没了踪影\x0aWAIT\x201000\x0aSAY\x20艾尔\x20那我们接下来怎么办呢？掉头回去吗？\x0aSAY\x20亚莲娜\x20那个人未必可信，我们先跟上去看看吧。\x20\x0a';
        }, 8041: m => {
            m['exports'] = '\x0aSCENE\x20避难所773号\x0aSAY\x20？？？\x20（吐血）咳……\x0aSAY\x20？？？\x20你是什么人？怎么会有我们的联络名单的？\x0aSAY\x20死灵法师奈布\x20哼哼，避难所773号，四十八个灵魂，一个白银三个青铜，我就收下了。这一片还有十七个避难所吧，真是甜美的晚餐啊。\x0aSAY\x20？？？\x20可恶……\x0aSAY\x20亚莲娜\x20这是……\x0aSAY\x20死灵法师奈布\x20呵呵，小法师，我们又见面了。\x0aSAY\x20亚莲娜\x20又是你？\x0aSAY\x20艾尔\x20这里发生了什么事？\x0aSAY\x20亚莲娜\x20是那个死灵法师！我们在闪银村的时候，就是他的阵法让大家都发疯了！\x0aSAY\x20死灵法师奈布\x20哎哟不不不，小法师，可不要冤枉我，我的阵法只是普通的聚魂阵，至于发疯嘛，那可是另有原因的。\x0aSAY\x20艾尔\x20你这个邪恶的法师，拿命来！\x0a';
        }, 5514: m => {
            m['exports'] = '\x0aSCENE\x20避难所773号\x0aSAY\x20？？？\x20（吐血）咳……\x0aSAY\x20艾尔\x20大哥你没事吧，我们来晚一步……\x0aSAY\x20？？？\x20避难所也不安全了。。我得去通知附近的其它避难所！\x0aSAY\x20艾尔\x20大哥你受伤这么重，还是别乱动了，那个死灵法师已经被我们打死啦。\x0aSAY\x20亚莲娜\x20艾尔，那个死灵法师可能会有复活的手段。之前，我在闪银村已经和他交战过了。\x0aASIDE\x20亚莲娜讲述了在邻村发生的事情。\x0aSAY\x20？？？\x20你们不知道，这场瘟疫，覆盖的不只是你们村子，是整个，整个拜尔王国呀！\x0aSAY\x20？？？\x20王都因为人口众多，现在已经是一片人间炼狱了！\x0aSAY\x20艾尔\x20圣光啊……那教会那边呢？\x0aSAY\x20？？？\x20圣光……哼哼，那帮脑子里进了圣光的榆木脑袋除了净化就是净化，拜尔本土的教会除了硬刚就是硬上，一点战术都没有，现在已经全都挂成亡灵战士了。\x0aSAY\x20？？？\x20安东尼奥的教会总部倒是反应快，直接宣布整个拜尔帝国都是异端之国，现在派了一大堆圣殿骑士围在拜尔边境上，见人就砍。\x0aSAY\x20艾尔\x20那我们……怎么办？\x0aSAY\x20？？？\x20怎么办？小兄弟，不怎么办。现如今这情况，能多活一秒就是一秒。躲吧，藏吧。想尽办法吧。\x0aSAY\x20艾尔\x20……\x0aSAY\x20亚莲娜\x20好了，大哥，我们还是先通知其他的避难所吧。赶紧通知大家要紧。\x0aSAY\x20？？？\x20……\x0aSAY\x20？？？\x20小兄弟，附近的避难所还是由我来通知吧。你们还是先去总部躲一躲。从这里往南十里，有一个隐秘的矿洞，从外面看只有几米深，其实里面四通八达。\x0aSAY\x20？？？\x20但是你们不要乱闯，那里也设置了非常多的机关和暗哨。你们到矿洞门口大喊三声\x22主神大人最美丽\x22，会有人来引你们进去。\x0aSAY\x20艾尔\x20主……主什么？\x0aSAY\x20？？？\x20这是暗语，你照着念就可以了。快别耽误时间了，到了你就知道了。我们快点集合所有人，准备一起迁徙到奥兰了！\x0aSAY\x20艾尔\x20好的……那大哥你保重，我们出发了。\x0aWAIT\x201000\x0a\x0aSCENE\x20大路上\x0aSAY\x20亚莲娜\x20艾尔，我们先给村长飞鸽传书，让他们还是改道奥兰吧。\x0aSAY\x20艾尔\x20好的。\x0aASIDE\x20艾尔放飞了信鸽\x0aSAY\x20亚莲娜\x20然后……我们要去他说的地方吗？\x0aSAY\x20亚莲娜\x20认识这么久，我们都还不知道他的名字，还有什么暗语，搞的神神秘秘，我们能信任他吗？\x0aSAY\x20艾尔\x20我也不知道耶……我倒是觉得大哥人还是蛮好的。\x0aSAY\x20亚莲娜\x20我还是不放心，我想去艾因罗丹特求援。\x0aSAY\x20艾尔\x20去向法师求援吗？哎哎我不行，那些法师一个个躲在塔里，搞的神神秘秘的，我才不想和他们打交道呢。\x0aSAY\x20艾尔\x20我倒是觉得对付亡灵瘟疫，还是应该向圣光教会求助。\x0aSAY\x20亚莲娜\x20什么？那可是一帮是非不分的杀人凶手啊！\x0aSAY\x20艾尔\x20哎，可是要说到对付骷髅和僵尸，还是……而且我小时候，一直是被附近的教会照顾着，我想教会里还是好人多的。\x0aSAY\x20亚莲娜\x20艾尔，那我们分手吧。\x0aSAY\x20艾尔\x20咦咦咦咦？\x0aSAY\x20亚莲娜\x20我是说我们分头出发吧，我向北前往艾因罗丹特，你向东去安东尼奥找圣光教会。然后，我们去奥兰会合吧。\x0aSAY\x20艾尔\x20我……我考虑一下。\x0a\x0aSAY\x20系统\x20接下来，是艾尔和亚莲娜一起前往避难所总部呢，还是让艾尔去安东尼奥教会，或者是让亚莲娜前往艾因罗丹特呢？\x0aSAY\x20系统\x20不用担心因此错过支线剧情，没选中的支线剧情将来还可以在\x22故事-情报兑换\x22中兑换哦~\x0a';
        }, 9239: m => {
            m['exports'] = '\x0aSCENE\x20边界森林\x0aSAY\x20娜娜\x20辛巴，辛巴，森林里来了一群陌生的动物，你的子民们都被他们击败了！\x0aSAY\x20辛巴\x20什么？我将在前面的道路上挑战他们，看看谁才是森林的王者！\x0a';
        }, 5088: m => {
            m['exports'] = '\x0aSCENE\x20森林深处\x0aSAY\x20辛巴\x20人类，我承认你的实力，但请速速离去吧，你不属于这篇森林！\x0aSAY\x20艾尔\x20尊敬的狮子王大人，我无意冒犯您的权威，只要您允许我通行，让您的子民不要打扰我，我将从前方径直离开这篇森林！\x0aSAY\x20辛巴\x20如你所愿，人类。\x0a\x0aSAY\x20系统\x20这里已经是当前版本的剧情尽头了。作者还在努力的编写更多的剧情，您也可以继续\x22伐木\x22怪物和制造更好的装备，提前为下一个版本做好准备！\x0a';
        }, 8700: (m, o, p) => {
            m['exports'] = [{
                'key': 'chapter3-1',
                'group': '无人之境',
                'name': '无人之境\x20-\x201',
                'requirement': {'$or': [{'stories': ['eyer-grow-5']}, {'stories': ['aleanor-stories-6']}]},
                'script': p(0x1716)
            }, {
                'key': 'chapter3-2',
                'group': '无人之境',
                'name': '无人之境\x20-\x202',
                'requirement': {'stories': ['chapter3-1'], 'map': 'chapter3.road'},
                'script': p(0xbd3)
            }, {
                'key': 'chapter3-3',
                'group': '无人之境',
                'name': '无人之境\x20-\x203',
                'requirement': {'stories': ['chapter3-2'], 'map': 'chapter3.road'},
                'script': p(0x1d8c),
                'taskType': 'kill',
                'enemy': 'chapter3.undead.zombie',
                'killCount': 0xa
            }, {
                'key': 'chapter3-4',
                'group': '无人之境',
                'name': '无人之境\x20-\x204',
                'requirement': {'stories': ['chapter3-3'], 'map': 'chapter3.shelter773'},
                'script': p(0x1f69)
            }, {
                'key': 'chapter3-5',
                'group': '无人之境',
                'name': '无人之境\x20-\x205',
                'requirement': {'stories': ['chapter3-4'], 'map': 'chapter3.shelter773'},
                'script': p(0x158a),
                'taskType': 'kill',
                'enemy': 'chapter3.necromancer',
                'killCount': 0x1
            }, {
                'key': 'chapter3-6',
                'group': '前往奥兰',
                'name': '前往奥兰\x20-\x201',
                'requirement': {'stories': ['chapter3-5'], 'map': 'chapter3.wood'},
                'script': p(0x2417),
                'taskType': 'kill',
                'enemy': 'chapter3.beast.lion',
                'killCount': 0xa
            }, {
                'key': 'chapter3-7',
                'group': '前往奥兰',
                'name': '前往奥兰\x20-\x202',
                'requirement': {'stories': ['chapter3-5'], 'map': 'chapter3.wood'},
                'script': p(0x13e0),
                'taskType': 'kill',
                'enemy': 'chapter3.beast.simba',
                'killCount': 0x1
            }, {
                'key': 'career-lv80',
                'group': '三转',
                'name': '三转',
                'requirement': {'map': 'chapter4.sanAnthony2'},
                'taskType': 'kill',
                'enemy': 'chapter4.humans.boss.evil',
                'killCount': 0x1
            }];
        }, 4589: (m, o, p) => {
            m['exports'] = [...p(0xc4e), ...p(0x1e83), ...p(0x21fc), ...p(0x137b), ...p(0x5e3), ...p(0xc94), ...p(0x2323)];
        }, 8995: (m, o, p) => {
            m['exports'] = [{
                'key': 'pal-1',
                'group': '偶遇-1',
                'name': '偶遇-1',
                'requirement': {'stories': ['aleanor-stories-6']},
                'script': p(0x170),
                'taskType': 'kill',
                'enemy': 'knight.leader',
                'killCount': 0xf
            }, {
                'key': 'pal-2',
                'group': '圣骑士-2',
                'name': '圣骑士-2',
                'requirement': {'stories': ['pal-1']},
                'script': p(0x2d9),
                'taskType': 'kill',
                'enemy': 'paladin_ariel',
                'killCount': 0x1
            }, {
                'key': 'pal-3',
                'group': '圣骑士-3',
                'name': '圣骑士-3',
                'requirement': {'role': 'Ariel', 'map': 'home'}
            }];
        }, 368: m => {
            m['exports'] = '\x0aSCENE\x20邻村村口-2\x0a\x0aSAY\x20系统\x20当你清点完卡罗给你的战利品之后\x0aSAY\x20系统\x20非常凑巧地遇上了赶来救援闪银村的伊瑞尔\x0aSAY\x20系统\x20根据传统剧情的发展，你已经被当做是这一切惨状的罪魁祸首\x0aWAIT\x201000\x0a\x0aSAY\x20系统\x20尝试击败伊瑞尔并向他说明这一切，他会相信你的。\x0aASIDE\x20伊瑞尔是一名出身于庇护之地的杰出圣骑士，在他们看来圣殿骑士们才是真正的异端，同时这也是他此次救援闪银村的原因，只是因为剧情的原因而没有赶上。\x0a\x20\x0a';
        }, 729: m => {
            m['exports'] = '\x0aSCENE\x20邻村村口-2\x0a\x0aSAY\x20系统\x20击败伊瑞尔之后，你向他解释了发生的一切。\x0aSAY\x20系统\x20现在，你现在可以创建角色“伊瑞尔”来体验新职业“圣骑士”了。\x0aWAIT\x201000\x0a\x0aSAY\x20系统\x20同样作为隐藏职业，“圣骑士”也仅有一次创建角色的机会，误删之后无法恢复或者再次创建。\x0a';
        }, 1507: m => {
            m['exports'] = [{
                'key': 'purchase-rates-lvl-60',
                'script': '\x0aSAY\x20系统\x20恭喜您达到60级。从现在开始，所有的神力购买和兑换都将提升50%收益。\x0aSAY\x20系统\x20现在您可以继续挑战副本，提升装备，然后进行试炼挑战，就可以继续提升到70级了。\x0a',
                'requirement': {'level': 0x258},
                'awards': {'purchaseRate': 0.5}
            }, {
                'key': 'purchase-rates-lvl-70',
                'script': '\x0aSAY\x20系统\x20恭喜您达到70级。从现在开始，所有的神力购买和兑换都将提升100%收益。\x0aSAY\x20系统\x20现在您可以继续挑战副本，在亚莲娜的噩梦中挽救木灵一族！\x0a',
                'requirement': {'level': 0x2bc},
                'awards': {'purchaseRate': 0.5}
            }];
        }, 3220: (m, o, p) => {
            m['exports'] = [{
                'key': 'soulbringer-1',
                'group': '？？-1',
                'name': '？？-1',
                'requirement': {},
                'script': p(0x698),
                'taskType': 'kill',
                'enemy': 'chapter3.necromancer',
                'killCount': 0x64
            }, {
                'key': 'soulbringer-2',
                'group': '黑暗君主-2',
                'name': '黑暗君主-2',
                'requirement': {},
                'script': p(0x3c1),
                'taskType': 'kill',
                'enemy': 'soul_karon',
                'killCount': 0x1
            }, {
                'key': 'soulbringer-3',
                'group': '黑暗君主-3',
                'name': '黑暗君主-3',
                'requirement': {'role': 'iPhone14promax', 'map': 'home'}
            }];
        }, 1688: m => {
            m['exports'] = '\x0aSCENE\x20庇护所深处\x0a\x0aSAY\x20系统\x20这是你第101次来到庇护所\x0aSAY\x20系统\x20不同的是，这一次你在庇护所的深处遇到了一个奇怪的男人\x0aSAY\x20系统\x20男人的头顶上漂浮着“百鬼之王·卡隆”几个大字\x0aSAY\x20系统\x20虽然现在的你还不够强大，但他已经等你很久了\x0aWAIT\x201500\x0a\x0aSAY\x20系统\x20尝试向他发起挑战并击败他！\x0aASIDE\x20百鬼之王·卡隆是非常强大的敌人，建议在满级且具备一定的装备基础后再发起挑战。\x0a\x20\x0a';
        }, 961: m => {
            m['exports'] = '\x0aSCENE\x20\x0a\x0aSAY\x20系统\x20你竟然轻而易举地击败了百鬼之王·卡隆\x0aSAY\x20系统\x20不愧是创世神艾尔所挑选的种子\x0aSAY\x20系统\x20作为奖励，你现在可以创建角色“恶魔五月哭”来体验新职业“黑暗君主”了\x0aWAIT\x201500\x0a\x0aSAY\x20系统\x20忘记提醒你了，“黑暗君主”作为强大的隐藏职业，仅有一次创建角色的机会\x0aSAY\x20系统\x20所以，假如你误删了角色，既无法恢复，也不能再次创建\x0a';
        }, 9818: m => {
            m['exports'] = {
                'bankByDiamonds': [0xa, 0xa, 0x14, 0x1e, 0x28, 0x3c, 0x5a, 0x82, 0xbe, 0x118, 0x19a, 0x258, 0x370, 0x50a, 0x762, 0xad2, 0xfdc, 0x173e, 0x2210, 0x31ec, 0x492a, 0x6b3a, 0x9d26, 0xe650, 0x1518a, 0x1eeb0, 0x2d500, 0x4268a],
                'inventoryByDiamonds': [0x1, 0x1, 0x2, 0x3, 0x4, 0x6, 0x9, 0xd, 0x13, 0x1c, 0x29, 0x3c, 0x58, 0x81, 0xbd, 0x115, 0x196, 0x253, 0x368, 0x4fe, 0x751, 0xab9, 0xfb7, 0x1708, 0x21c1, 0x3178, 0x4880, 0x6a41, 0x9bb9, 0xe439, 0x14e7a, 0x1ea33],
                'inventory': [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {'gold': 0xa}, {'gold': 0x14}, {'gold': 0x1e}, {'gold': 0x32}, {
                    'gold': 0x50,
                    'wuxingshi': 0x1
                }, {'gold': 0x82, 'wuxingshi': 0x1}, {'gold': 0xd2, 'wuxingshi': 0x2}, {
                    'gold': 0x154,
                    'wuxingshi': 0x3
                }, {'gold': 0x226, 'wuxingshi': 0x4}, {'gold': 0x37a, 'wuxingshi': 0x6}, {
                    'gold': 0x5a0,
                    'wuxingshi': 0x9
                }, {'gold': 0x91a, 'wuxingshi': 0xd}, {'gold': 0xeba, 'wuxingshi': 0x13}, {
                    'gold': 0x17d4,
                    'wuxingshi': 0x1c
                }, {'gold': 0x268e, 'wuxingshi': 0x29}, {'gold': 0x3e62, 'wuxingshi': 0x3c}, {
                    'gold': 0x64f0,
                    'wuxingshi': 0x58
                }, {'gold': 0xa352, 'wuxingshi': 0x81}, {'gold': 0x10842, 'wuxingshi': 0xbd}, {
                    'gold': 0x1ab94,
                    'wuxingshi': 0x115
                }, {'gold': 0x2b3d6, 'wuxingshi': 0x196}, {'gold': 0x45f6a, 'wuxingshi': 0x253}, {
                    'gold': 0x71340,
                    'wuxingshi': 0x368
                }, {'gold': 0xb72aa, 'wuxingshi': 0x4fe}, {'gold': 0x1285ea, 'wuxingshi': 0x751}, {
                    'gold': 0x1df894,
                    'wuxingshi': 0xab9
                }, {'gold': 0x307e7e, 'wuxingshi': 0xfb7}, {'gold': 0x4e7712, 'wuxingshi': 0x1708}]
            };
        }, 4526: m => {
            var o = {
                'utf8': {
                    'stringToBytes': function (p) {
                        return o['bin']['stringToBytes'](unescape(encodeURIComponent(p)));
                    }, 'bytesToString': function (p) {
                        return decodeURIComponent(escape(o['bin']['bytesToString'](p)));
                    }
                }, 'bin': {
                    'stringToBytes': function (p) {
                        for (var q = [], s = 0x0; s < p['length']; s++) q['push'](0xff & p['charCodeAt'](s));
                        return q;
                    }, 'bytesToString': function (p) {
                        for (var q = [], s = 0x0; s < p['length']; s++) q['push'](String['fromCharCode'](p[s]));
                        return q['join']('');
                    }
                }
            };
            m['exports'] = o;
        }, 3358: (m, o) => {
            var p;
            !function () {
                'use strict';
                var q = {}['hasOwnProperty'];

                function s() {
                    for (var u = [], v = 0x0; v < arguments['length']; v++) {
                        var w = arguments[v];
                        if (w) {
                            var x = typeof w;
                            if ('string' === x || 'number' === x) u['push'](w); else if (Array['isArray'](w)) {
                                if (w['length']) {
                                    var y = s['apply'](null, w);
                                    y && u['push'](y);
                                }
                            } else if ('object' === x) {
                                if (w['toString'] !== Object['prototype']['toString'] && !w['toString']['toString']()['includes']('[native\x20code]')) {
                                    u['push'](w['toString']());
                                    continue;
                                }
                                for (var z in w) q['call'](w, z) && w[z] && u['push'](z);
                            }
                        }
                    }
                    return u['join']('\x20');
                }

                m['exports'] ? (s['default'] = s, m['exports'] = s) : void 0x0 === (p = function () {
                    return s;
                }['apply'](o, [])) || (m['exports'] = p);
            }();
        }, 7298: m => {
            var o, p;
            o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', p = {
                'rotl': function (q, s) {
                    return q << s | q >>> 0x20 - s;
                }, 'rotr': function (q, s) {
                    return q << 0x20 - s | q >>> s;
                }, 'endian': function (q) {
                    if (q['constructor'] == Number) return 0xff00ff & p['rotl'](q, 0x8) | 0xff00ff00 & p['rotl'](q, 0x18);
                    for (var s = 0x0; s < q['length']; s++) q[s] = p['endian'](q[s]);
                    return q;
                }, 'randomBytes': function (q) {
                    for (var s = []; q > 0x0; q--) s['push'](Math['floor'](0x100 * Math['random']()));
                    return s;
                }, 'bytesToWords': function (q) {
                    for (var s = [], u = 0x0, v = 0x0; u < q['length']; u++, v += 0x8) s[v >>> 0x5] |= q[u] << 0x18 - v % 0x20;
                    return s;
                }, 'wordsToBytes': function (q) {
                    for (var s = [], u = 0x0; u < 0x20 * q['length']; u += 0x8) s['push'](q[u >>> 0x5] >>> 0x18 - u % 0x20 & 0xff);
                    return s;
                }, 'bytesToHex': function (q) {
                    for (var s = [], u = 0x0; u < q['length']; u++) s['push']((q[u] >>> 0x4)['toString'](0x10)), s['push']((0xf & q[u])['toString'](0x10));
                    return s['join']('');
                }, 'hexToBytes': function (q) {
                    for (var s = [], u = 0x0; u < q['length']; u += 0x2) s['push'](parseInt(q['substr'](u, 0x2), 0x10));
                    return s;
                }, 'bytesToBase64': function (q) {
                    for (var s = [], u = 0x0; u < q['length']; u += 0x3) for (var v = q[u] << 0x10 | q[u + 0x1] << 0x8 | q[u + 0x2], w = 0x0; w < 0x4; w++) 0x8 * u + 0x6 * w <= 0x8 * q['length'] ? s['push'](o['charAt'](v >>> 0x6 * (0x3 - w) & 0x3f)) : s['push']('=');
                    return s['join']('');
                }, 'base64ToBytes': function (q) {
                    q = q['replace'](/[^A-Z0-9+\/]/gi, '');
                    for (var s = [], u = 0x0, v = 0x0; u < q['length']; v = ++u % 0x4) 0x0 != v && s['push']((o['indexOf'](q['charAt'](u - 0x1)) & Math['pow'](0x2, -0x2 * v + 0x8) - 0x1) << 0x2 * v | o['indexOf'](q['charAt'](u)) >>> 0x6 - 0x2 * v);
                    return s;
                }
            }, m['exports'] = p;
        }, 3527: m => {
            'use strict';
            m['exports'] = function (o) {
                var p = [];
                return p['toString'] = function () {
                    return this['map'](function (q) {
                        var s = '', u = void 0x0 !== q[0x5];
                        return q[0x4] && (s += '@supports\x20('['concat'](q[0x4], ')\x20{')), q[0x2] && (s += '@media\x20'['concat'](q[0x2], '\x20{')), u && (s += '@layer'['concat'](q[0x5]['length'] > 0x0 ? '\x20'['concat'](q[0x5]) : '', '\x20{')), s += o(q), u && (s += '}'), q[0x2] && (s += '}'), q[0x4] && (s += '}'), s;
                    })['join']('');
                }, p['i'] = function (q, v, w, x, y) {
                    'string' == typeof q && (q = [[null, q, void 0x0]]);
                    var z = {};
                    if (w) for (var A = 0x0; A < this['length']; A++) {
                        var B = this[A][0x0];
                        null != B && (z[B] = !0x0);
                    }
                    for (var C = 0x0; C < q['length']; C++) {
                        var D = []['concat'](q[C]);
                        w && z[D[0x0]] || (void 0x0 !== y && (void 0x0 === D[0x5] || (D[0x1] = '@layer'['concat'](D[0x5]['length'] > 0x0 ? '\x20'['concat'](D[0x5]) : '', '\x20{')['concat'](D[0x1], '}')), D[0x5] = y), v && (D[0x2] ? (D[0x1] = '@media\x20'['concat'](D[0x2], '\x20{')['concat'](D[0x1], '}'), D[0x2] = v) : D[0x2] = v), x && (D[0x4] ? (D[0x1] = '@supports\x20('['concat'](D[0x4], ')\x20{')['concat'](D[0x1], '}'), D[0x4] = x) : D[0x4] = ''['concat'](x)), p['push'](D));
                    }
                }, p;
            };
        }, 7942: m => {
            'use strict';
            m['exports'] = function (o) {
                return o[0x1];
            };
        }, 5516: (m, o, p) => {
            var q = {'EventEmitter': p(0xba9), 'EmitterSubscription': p(0x153b)};
            m['exports'] = q;
        }, 2985: (m, p, q) => {
            'use strict';
            var u = q(0x153b), v = q(0x23b7), w = q(0x89d), x = q(0x1348), y = function () {
                function z() {
                    this['_subscriber'] = new v(), this['_currentSubscription'] = null;
                }

                var A = z['prototype'];
                return A['addListener'] = function (B, C, D) {
                    return this['_subscriber']['addSubscription'](B, new u(this['_subscriber'], C, D));
                }, A['once'] = function (B, C, D) {
                    var E = this;
                    return this['addListener'](B, function () {
                        E['removeCurrentListener'](), C['apply'](D, arguments);
                    });
                }, A['removeAllListeners'] = function (B) {
                    this['_subscriber']['removeAllSubscriptions'](B);
                }, A['removeCurrentListener'] = function () {
                    this['_currentSubscription'] || w(!0x1), this['_subscriber']['removeSubscription'](this['_currentSubscription']);
                }, A['listeners'] = function (B) {
                    var C = this['_subscriber']['getSubscriptionsForType'](B);
                    return C ? C['filter'](x['thatReturnsTrue'])['map'](function (D) {
                        return D['listener'];
                    }) : [];
                }, A['emit'] = function (B) {
                    var C = this['_subscriber']['getSubscriptionsForType'](B);
                    if (C) {
                        for (var D = Object['keys'](C), E = 0x0; E < D['length']; E++) {
                            var F = C[D[E]];
                            F && (this['_currentSubscription'] = F, this['__emitToSubscription']['apply'](this, [F]['concat'](Array['prototype']['slice']['call'](arguments))));
                        }
                        this['_currentSubscription'] = null;
                    }
                }, A['__emitToSubscription'] = function (B, C) {
                    var D = Array['prototype']['slice']['call'](arguments, 0x2);
                    B['listener']['apply'](B['context'], D);
                }, z;
            }();
            m['exports'] = y;
        }, 5435: (m, o, p) => {
            'use strict';
            var q = function (s) {
                var u, v;

                function w(x, y, z) {
                    var A;
                    return (A = s['call'](this, x) || this)['listener'] = y, A['context'] = z, A;
                }

                return v = s, (u = w)['prototype'] = Object['create'](v['prototype']), u['prototype']['constructor'] = u, u['__proto__'] = v, w;
            }(p(0x1d8d));
            m['exports'] = q;
        }, 7565: m => {
            'use strict';
            var o = function () {
                function p(q) {
                    this['subscriber'] = q;
                }

                return p['prototype']['remove'] = function () {
                    this['subscriber'] && (this['subscriber']['removeSubscription'](this), this['subscriber'] = null);
                }, p;
            }();
            m['exports'] = o;
        }, 9143: (m, o, p) => {
            'use strict';
            var q = p(0x89d), s = function () {
                function u() {
                    this['_subscriptionsForType'] = {}, this['_currentSubscription'] = null;
                }

                var v = u['prototype'];
                return v['addSubscription'] = function (w, x) {
                    x['subscriber'] !== this && q(!0x1), this['_subscriptionsForType'][w] || (this['_subscriptionsForType'][w] = []);
                    var y = this['_subscriptionsForType'][w]['length'];
                    return this['_subscriptionsForType'][w]['push'](x), x['eventType'] = w, x['key'] = y, x;
                }, v['removeAllSubscriptions'] = function (w) {
                    void 0x0 === w ? this['_subscriptionsForType'] = {} : delete this['_subscriptionsForType'][w];
                }, v['removeSubscription'] = function (w) {
                    var x = w['eventType'], y = w['key'], z = this['_subscriptionsForType'][x];
                    z && delete z[y];
                }, v['getSubscriptionsForType'] = function (w) {
                    return this['_subscriptionsForType'][w];
                }, u;
            }();
            m['exports'] = s;
        }, 4936: m => {
            'use strict';

            function o(q) {
                return function () {
                    return q;
                };
            }

            var p = function () {
            };
            p['thatReturns'] = o, p['thatReturnsFalse'] = o(!0x1), p['thatReturnsTrue'] = o(!0x0), p['thatReturnsNull'] = o(null), p['thatReturnsThis'] = function () {
                return this;
            }, p['thatReturnsArgument'] = function (q) {
                return q;
            }, m['exports'] = p;
        }, 2205: m => {
            'use strict';
            m['exports'] = function (p, q) {
                for (var s = arguments['length'], u = new Array(s > 0x2 ? s - 0x2 : 0x0), v = 0x2; v < s; v++) u[v - 0x2] = arguments[v];
                if (!p) {
                    var w;
                    if (void 0x0 === q) w = new Error('Minified\x20exception\x20occurred;\x20use\x20the\x20non-minified\x20dev\x20environment\x20for\x20the\x20full\x20error\x20message\x20and\x20additional\x20helpful\x20warnings.'); else {
                        var x = 0x0;
                        (w = new Error(q['replace'](/%s/g, function () {
                            return String(u[x++]);
                        })))['name'] = 'Invariant\x20Violation';
                    }
                    throw w['framesToPop'] = 0x1, w;
                }
            };
        }, 8135: m => {
            function o(p) {
                return !!p['constructor'] && 'function' == typeof p['constructor']['isBuffer'] && p['constructor']['isBuffer'](p);
            }

            m['exports'] = function (p) {
                return null != p && (o(p) || function (q) {
                    return 'function' == typeof q['readFloatLE'] && 'function' == typeof q['slice'] && o(q['slice'](0x0, 0x0));
                }(p) || !!p['_isBuffer']);
            };
        }, 2782: (a0, a1) => {
            var a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad = {'userAgent': !0x1}, af = {},
                ag = ag || (a2 = Math, a4 = (a3 = {})['lib'] = {}, a5 = a4['Base'] = function () {
                    function bJ() {
                    }

                    return {
                        'extend': function (bK) {
                            bJ['prototype'] = this;
                            var bL = new bJ();
                            return bK && bL['mixIn'](bK), bL['hasOwnProperty']('init') || (bL['init'] = function () {
                                bL['$super']['init']['apply'](this, arguments);
                            }), bL['init']['prototype'] = bL, bL['$super'] = this, bL;
                        }, 'create': function () {
                            var bK = this['extend']();
                            return bK['init']['apply'](bK, arguments), bK;
                        }, 'init': function () {
                        }, 'mixIn': function (bK) {
                            for (var bL in bK) bK['hasOwnProperty'](bL) && (this[bL] = bK[bL]);
                            bK['hasOwnProperty']('toString') && (this['toString'] = bK['toString']);
                        }, 'clone': function () {
                            return this['init']['prototype']['extend'](this);
                        }
                    };
                }(), a6 = a4['WordArray'] = a5['extend']({
                    'init': function (bJ, bK) {
                        bJ = this['words'] = bJ || [], this['sigBytes'] = null != bK ? bK : 0x4 * bJ['length'];
                    }, 'toString': function (bJ) {
                        return (bJ || a8)['stringify'](this);
                    }, 'concat': function (bJ) {
                        var bK = this['words'], bL = bJ['words'], bM = this['sigBytes'], bN = bJ['sigBytes'];
                        if (this['clamp'](), bM % 0x4) for (var bO = 0x0; bO < bN; bO++) {
                            var bP = bL[bO >>> 0x2] >>> 0x18 - bO % 0x4 * 0x8 & 0xff;
                            bK[bM + bO >>> 0x2] |= bP << 0x18 - (bM + bO) % 0x4 * 0x8;
                        } else for (bO = 0x0; bO < bN; bO += 0x4) bK[bM + bO >>> 0x2] = bL[bO >>> 0x2];
                        return this['sigBytes'] += bN, this;
                    }, 'clamp': function () {
                        var bJ = this['words'], bK = this['sigBytes'];
                        bJ[bK >>> 0x2] &= 0xffffffff << 0x20 - bK % 0x4 * 0x8, bJ['length'] = a2['ceil'](bK / 0x4);
                    }, 'clone': function () {
                        var bJ = a5['clone']['call'](this);
                        return bJ['words'] = this['words']['slice'](0x0), bJ;
                    }, 'random': function (bJ) {
                        for (var bK = [], bL = 0x0; bL < bJ; bL += 0x4) bK['push'](0x100000000 * a2['random']() | 0x0);
                        return new a6['init'](bK, bJ);
                    }
                }), a7 = a3['enc'] = {}, a8 = a7['Hex'] = {
                    'stringify': function (bJ) {
                        for (var bK = bJ['words'], bL = bJ['sigBytes'], bM = [], bN = 0x0; bN < bL; bN++) {
                            var bO = bK[bN >>> 0x2] >>> 0x18 - bN % 0x4 * 0x8 & 0xff;
                            bM['push']((bO >>> 0x4)['toString'](0x10)), bM['push']((0xf & bO)['toString'](0x10));
                        }
                        return bM['join']('');
                    }, 'parse': function (bJ) {
                        for (var bK = bJ['length'], bL = [], bM = 0x0; bM < bK; bM += 0x2) bL[bM >>> 0x3] |= parseInt(bJ['substr'](bM, 0x2), 0x10) << 0x18 - bM % 0x8 * 0x4;
                        return new a6['init'](bL, bK / 0x2);
                    }
                }, a9 = a7['Latin1'] = {
                    'stringify': function (bJ) {
                        for (var bK = bJ['words'], bL = bJ['sigBytes'], bM = [], bN = 0x0; bN < bL; bN++) {
                            var bO = bK[bN >>> 0x2] >>> 0x18 - bN % 0x4 * 0x8 & 0xff;
                            bM['push'](String['fromCharCode'](bO));
                        }
                        return bM['join']('');
                    }, 'parse': function (bJ) {
                        for (var bK = bJ['length'], bL = [], bM = 0x0; bM < bK; bM++) bL[bM >>> 0x2] |= (0xff & bJ['charCodeAt'](bM)) << 0x18 - bM % 0x4 * 0x8;
                        return new a6['init'](bL, bK);
                    }
                }, aa = a7['Utf8'] = {
                    'stringify': function (bJ) {
                        try {
                            return decodeURIComponent(escape(a9['stringify'](bJ)));
                        } catch (bK) {
                            throw new Error('Malformed\x20UTF-8\x20data');
                        }
                    }, 'parse': function (bJ) {
                        return a9['parse'](unescape(encodeURIComponent(bJ)));
                    }
                }, ab = a4['BufferedBlockAlgorithm'] = a5['extend']({
                    'reset': function () {
                        this['_data'] = new a6['init'](), this['_nDataBytes'] = 0x0;
                    }, '_append': function (bJ) {
                        'string' == typeof bJ && (bJ = aa['parse'](bJ)), this['_data']['concat'](bJ), this['_nDataBytes'] += bJ['sigBytes'];
                    }, '_process': function (bJ) {
                        var bK = this['_data'], bL = bK['words'], bM = bK['sigBytes'], bN = this['blockSize'],
                            bO = bM / (0x4 * bN),
                            bP = (bO = bJ ? a2['ceil'](bO) : a2['max']((0x0 | bO) - this['_minBufferSize'], 0x0)) * bN,
                            bQ = a2['min'](0x4 * bP, bM);
                        if (bP) {
                            for (var bR = 0x0; bR < bP; bR += bN) this['_doProcessBlock'](bL, bR);
                            var bS = bL['splice'](0x0, bP);
                            bK['sigBytes'] -= bQ;
                        }
                        return new a6['init'](bS, bQ);
                    }, 'clone': function () {
                        var bJ = a5['clone']['call'](this);
                        return bJ['_data'] = this['_data']['clone'](), bJ;
                    }, '_minBufferSize': 0x0
                }), a4['Hasher'] = ab['extend']({
                    'cfg': a5['extend'](), 'init': function (bJ) {
                        this['cfg'] = this['cfg']['extend'](bJ), this['reset']();
                    }, 'reset': function () {
                        ab['reset']['call'](this), this['_doReset']();
                    }, 'update': function (bJ) {
                        return this['_append'](bJ), this['_process'](), this;
                    }, 'finalize': function (bJ) {
                        return bJ && this['_append'](bJ), this['_doFinalize']();
                    }, 'blockSize': 0x10, '_createHelper': function (bJ) {
                        return function (bK, bL) {
                            return new bJ['init'](bL)['finalize'](bK);
                        };
                    }, '_createHmacHelper': function (bJ) {
                        return function (bK, bL) {
                            return new ac['HMAC']['init'](bJ, bL)['finalize'](bK);
                        };
                    }
                }), ac = a3['algo'] = {}, a3);
            !function (bJ) {
                var bK, bL = (bK = ag)['lib'], bM = bL['Base'], bN = bL['WordArray'];
                (bK = bK['x64'] = {})['Word'] = bM['extend']({
                    'init': function (bO, bP) {
                        this['high'] = bO, this['low'] = bP;
                    }
                }), bK['WordArray'] = bM['extend']({
                    'init': function (bO, bP) {
                        bO = this['words'] = bO || [], this['sigBytes'] = null != bP ? bP : 0x8 * bO['length'];
                    }, 'toX32': function () {
                        for (var bO = this['words'], bP = bO['length'], bQ = [], bR = 0x0; bR < bP; bR++) {
                            var bS = bO[bR];
                            bQ['push'](bS['high']), bQ['push'](bS['low']);
                        }
                        return bN['create'](bQ, this['sigBytes']);
                    }, 'clone': function () {
                        for (var bO = bM['clone']['call'](this), bP = bO['words'] = this['words']['slice'](0x0), bQ = bP['length'], bR = 0x0; bR < bQ; bR++) bP[bR] = bP[bR]['clone']();
                        return bO;
                    }
                });
            }(), ag['lib']['Cipher'] || function (bJ) {
                var bK = (bW = ag)['lib'], bL = bK['Base'], bM = bK['WordArray'], bN = bK['BufferedBlockAlgorithm'],
                    bO = bW['enc']['Base64'], bP = bW['algo']['EvpKDF'], bQ = bK['Cipher'] = bN['extend']({
                        'cfg': bL['extend'](),
                        'createEncryptor': function (bY, bZ) {
                            return this['create'](this['_ENC_XFORM_MODE'], bY, bZ);
                        },
                        'createDecryptor': function (bY, bZ) {
                            return this['create'](this['_DEC_XFORM_MODE'], bY, bZ);
                        },
                        'init': function (bY, bZ, c0) {
                            this['cfg'] = this['cfg']['extend'](c0), this['_xformMode'] = bY, this['_key'] = bZ, this['reset']();
                        },
                        'reset': function () {
                            bN['reset']['call'](this), this['_doReset']();
                        },
                        'process': function (bY) {
                            return this['_append'](bY), this['_process']();
                        },
                        'finalize': function (bY) {
                            return bY && this['_append'](bY), this['_doFinalize']();
                        },
                        'keySize': 0x4,
                        'ivSize': 0x4,
                        '_ENC_XFORM_MODE': 0x1,
                        '_DEC_XFORM_MODE': 0x2,
                        '_createHelper': function (bY) {
                            return {
                                'encrypt': function (bZ, c0, c1) {
                                    return ('string' == typeof c0 ? bX : bV)['encrypt'](bY, bZ, c0, c1);
                                }, 'decrypt': function (bZ, c0, c1) {
                                    return ('string' == typeof c0 ? bX : bV)['decrypt'](bY, bZ, c0, c1);
                                }
                            };
                        }
                    });
                bK['StreamCipher'] = bQ['extend']({
                    '_doFinalize': function () {
                        return this['_process'](!0x0);
                    }, 'blockSize': 0x1
                });
                var bR = bW['mode'] = {}, bS = function (bY, bZ, c0) {
                    var c1 = this['_iv'];
                    c1 ? this['_iv'] = void 0x0 : c1 = this['_prevBlock'];
                    for (var c2 = 0x0; c2 < c0; c2++) bY[bZ + c2] ^= c1[c2];
                }, bT = (bK['BlockCipherMode'] = bL['extend']({
                    'createEncryptor': function (bY, bZ) {
                        return this['Encryptor']['create'](bY, bZ);
                    }, 'createDecryptor': function (bY, bZ) {
                        return this['Decryptor']['create'](bY, bZ);
                    }, 'init': function (bY, bZ) {
                        this['_cipher'] = bY, this['_iv'] = bZ;
                    }
                }))['extend']();
                bT['Encryptor'] = bT['extend']({
                    'processBlock': function (bY, bZ) {
                        var c0 = this['_cipher'], c1 = c0['blockSize'];
                        bS['call'](this, bY, bZ, c1), c0['encryptBlock'](bY, bZ), this['_prevBlock'] = bY['slice'](bZ, bZ + c1);
                    }
                }), bT['Decryptor'] = bT['extend']({
                    'processBlock': function (bY, bZ) {
                        var c0 = this['_cipher'], c1 = c0['blockSize'], c2 = bY['slice'](bZ, bZ + c1);
                        c0['decryptBlock'](bY, bZ), bS['call'](this, bY, bZ, c1), this['_prevBlock'] = c2;
                    }
                }), bR = bR['CBC'] = bT, bT = (bW['pad'] = {})['Pkcs7'] = {
                    'pad': function (bY, bZ) {
                        for (var c0, c1 = (c0 = (c0 = 0x4 * bZ) - bY['sigBytes'] % c0) << 0x18 | c0 << 0x10 | c0 << 0x8 | c0, c2 = [], c3 = 0x0; c3 < c0; c3 += 0x4) c2['push'](c1);
                        c0 = bM['create'](c2, c0), bY['concat'](c0);
                    }, 'unpad': function (bY) {
                        bY['sigBytes'] -= 0xff & bY['words'][bY['sigBytes'] - 0x1 >>> 0x2];
                    }
                }, bK['BlockCipher'] = bQ['extend']({
                    'cfg': bQ['cfg']['extend']({'mode': bR, 'padding': bT}),
                    'reset': function () {
                        bQ['reset']['call'](this);
                        var bY = (bZ = this['cfg'])['iv'], bZ = bZ['mode'];
                        if (this['_xformMode'] == this['_ENC_XFORM_MODE']) var c0 = bZ['createEncryptor']; else c0 = bZ['createDecryptor'], this['_minBufferSize'] = 0x1;
                        this['_mode'] = c0['call'](bZ, this, bY && bY['words']);
                    },
                    '_doProcessBlock': function (bY, bZ) {
                        this['_mode']['processBlock'](bY, bZ);
                    },
                    '_doFinalize': function () {
                        var bY = this['cfg']['padding'];
                        if (this['_xformMode'] == this['_ENC_XFORM_MODE']) {
                            bY['pad'](this['_data'], this['blockSize']);
                            var bZ = this['_process'](!0x0);
                        } else bZ = this['_process'](!0x0), bY['unpad'](bZ);
                        return bZ;
                    },
                    'blockSize': 0x4
                });
                var bU = bK['CipherParams'] = bL['extend']({
                    'init': function (bY) {
                        this['mixIn'](bY);
                    }, 'toString': function (bY) {
                        return (bY || this['formatter'])['stringify'](this);
                    }
                }), bV = (bR = (bW['format'] = {})['OpenSSL'] = {
                    'stringify': function (bY) {
                        var bZ = bY['ciphertext'];
                        return ((bY = bY['salt']) ? bM['create']([0x53616c74, 0x65645f5f])['concat'](bY)['concat'](bZ) : bZ)['toString'](bO);
                    }, 'parse': function (bY) {
                        var bZ = (bY = bO['parse'](bY))['words'];
                        if (0x53616c74 == bZ[0x0] && 0x65645f5f == bZ[0x1]) {
                            var c0 = bM['create'](bZ['slice'](0x2, 0x4));
                            bZ['splice'](0x0, 0x4), bY['sigBytes'] -= 0x10;
                        }
                        return bU['create']({'ciphertext': bY, 'salt': c0});
                    }
                }, bK['SerializableCipher'] = bL['extend']({
                    'cfg': bL['extend']({'format': bR}),
                    'encrypt': function (bY, bZ, c0, c1) {
                        c1 = this['cfg']['extend'](c1);
                        var c2 = bY['createEncryptor'](c0, c1);
                        return bZ = c2['finalize'](bZ), c2 = c2['cfg'], bU['create']({
                            'ciphertext': bZ,
                            'key': c0,
                            'iv': c2['iv'],
                            'algorithm': bY,
                            'mode': c2['mode'],
                            'padding': c2['padding'],
                            'blockSize': bY['blockSize'],
                            'formatter': c1['format']
                        });
                    },
                    'decrypt': function (bY, bZ, c0, c1) {
                        return c1 = this['cfg']['extend'](c1), bZ = this['_parse'](bZ, c1['format']), bY['createDecryptor'](c0, c1)['finalize'](bZ['ciphertext']);
                    },
                    '_parse': function (bY, bZ) {
                        return 'string' == typeof bY ? bZ['parse'](bY, this) : bY;
                    }
                })), bW = (bW['kdf'] = {})['OpenSSL'] = {
                    'execute': function (bY, bZ, c0, c1) {
                        return c1 || (c1 = bM['random'](0x8)), bY = bP['create']({'keySize': bZ + c0})['compute'](bY, c1), c0 = bM['create'](bY['words']['slice'](bZ), 0x4 * c0), bY['sigBytes'] = 0x4 * bZ, bU['create']({
                            'key': bY,
                            'iv': c0,
                            'salt': c1
                        });
                    }
                }, bX = bK['PasswordBasedCipher'] = bV['extend']({
                    'cfg': bV['cfg']['extend']({'kdf': bW}),
                    'encrypt': function (bY, bZ, c0, c1) {
                        return c0 = (c1 = this['cfg']['extend'](c1))['kdf']['execute'](c0, bY['keySize'], bY['ivSize']), c1['iv'] = c0['iv'], (bY = bV['encrypt']['call'](this, bY, bZ, c0['key'], c1))['mixIn'](c0), bY;
                    },
                    'decrypt': function (bY, bZ, c0, c1) {
                        return c1 = this['cfg']['extend'](c1), bZ = this['_parse'](bZ, c1['format']), c0 = c1['kdf']['execute'](c0, bY['keySize'], bY['ivSize'], bZ['salt']), c1['iv'] = c0['iv'], bV['decrypt']['call'](this, bY, bZ, c0['key'], c1);
                    }
                });
            }(), function () {
                for (var bJ = ag, bK = bJ['lib']['BlockCipher'], bL = bJ['algo'], bM = [], bN = [], bO = [], bP = [], bQ = [], bR = [], bS = [], bT = [], bU = [], bV = [], bW = [], bX = 0x0; 0x100 > bX; bX++) bW[bX] = 0x80 > bX ? bX << 0x1 : bX << 0x1 ^ 0x11b;
                var bY = 0x0, bZ = 0x0;
                for (bX = 0x0; 0x100 > bX; bX++) {
                    var c0 = (c0 = bZ ^ bZ << 0x1 ^ bZ << 0x2 ^ bZ << 0x3 ^ bZ << 0x4) >>> 0x8 ^ 0xff & c0 ^ 0x63;
                    bM[bY] = c0, bN[c0] = bY;
                    var c1 = bW[bY], c2 = bW[c1], c3 = bW[c2], c4 = 0x101 * bW[c0] ^ 0x1010100 * c0;
                    bO[bY] = c4 << 0x18 | c4 >>> 0x8, bP[bY] = c4 << 0x10 | c4 >>> 0x10, bQ[bY] = c4 << 0x8 | c4 >>> 0x18, bR[bY] = c4, c4 = 0x1010101 * c3 ^ 0x10001 * c2 ^ 0x101 * c1 ^ 0x1010100 * bY, bS[c0] = c4 << 0x18 | c4 >>> 0x8, bT[c0] = c4 << 0x10 | c4 >>> 0x10, bU[c0] = c4 << 0x8 | c4 >>> 0x18, bV[c0] = c4, bY ? (bY = c1 ^ bW[bW[bW[c3 ^ c1]]], bZ ^= bW[bW[bZ]]) : bY = bZ = 0x1;
                }
                var c5 = [0x0, 0x1, 0x2, 0x4, 0x8, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
                bL = bL['AES'] = bK['extend']({
                    '_doReset': function () {
                        for (var c6 = (c8 = this['_key'])['words'], c7 = c8['sigBytes'] / 0x4, c8 = 0x4 * ((this['_nRounds'] = c7 + 0x6) + 0x1), c9 = this['_keySchedule'] = [], ca = 0x0; ca < c8; ca++) if (ca < c7) c9[ca] = c6[ca]; else {
                            var cb = c9[ca - 0x1];
                            ca % c7 ? 0x6 < c7 && 0x4 == ca % c7 && (cb = bM[cb >>> 0x18] << 0x18 | bM[cb >>> 0x10 & 0xff] << 0x10 | bM[cb >>> 0x8 & 0xff] << 0x8 | bM[0xff & cb]) : (cb = bM[(cb = cb << 0x8 | cb >>> 0x18) >>> 0x18] << 0x18 | bM[cb >>> 0x10 & 0xff] << 0x10 | bM[cb >>> 0x8 & 0xff] << 0x8 | bM[0xff & cb], cb ^= c5[ca / c7 | 0x0] << 0x18), c9[ca] = c9[ca - c7] ^ cb;
                        }
                        for (c6 = this['_invKeySchedule'] = [], c7 = 0x0; c7 < c8; c7++) ca = c8 - c7, cb = c7 % 0x4 ? c9[ca] : c9[ca - 0x4], c6[c7] = 0x4 > c7 || 0x4 >= ca ? cb : bS[bM[cb >>> 0x18]] ^ bT[bM[cb >>> 0x10 & 0xff]] ^ bU[bM[cb >>> 0x8 & 0xff]] ^ bV[bM[0xff & cb]];
                    }, 'encryptBlock': function (c6, c7) {
                        this['_doCryptBlock'](c6, c7, this['_keySchedule'], bO, bP, bQ, bR, bM);
                    }, 'decryptBlock': function (c6, c7) {
                        var c8 = c6[c7 + 0x1];
                        c6[c7 + 0x1] = c6[c7 + 0x3], c6[c7 + 0x3] = c8, this['_doCryptBlock'](c6, c7, this['_invKeySchedule'], bS, bT, bU, bV, bN), c8 = c6[c7 + 0x1], c6[c7 + 0x1] = c6[c7 + 0x3], c6[c7 + 0x3] = c8;
                    }, '_doCryptBlock': function (c6, c7, c8, c9, ca, cb, cc, cd) {
                        for (var cf = this['_nRounds'], cg = c6[c7] ^ c8[0x0], ch = c6[c7 + 0x1] ^ c8[0x1], ci = c6[c7 + 0x2] ^ c8[0x2], cj = c6[c7 + 0x3] ^ c8[0x3], ck = 0x4, cl = 0x1; cl < cf; cl++) {
                            var cm = c9[cg >>> 0x18] ^ ca[ch >>> 0x10 & 0xff] ^ cb[ci >>> 0x8 & 0xff] ^ cc[0xff & cj] ^ c8[ck++],
                                cn = c9[ch >>> 0x18] ^ ca[ci >>> 0x10 & 0xff] ^ cb[cj >>> 0x8 & 0xff] ^ cc[0xff & cg] ^ c8[ck++],
                                co = c9[ci >>> 0x18] ^ ca[cj >>> 0x10 & 0xff] ^ cb[cg >>> 0x8 & 0xff] ^ cc[0xff & ch] ^ c8[ck++];
                            cj = c9[cj >>> 0x18] ^ ca[cg >>> 0x10 & 0xff] ^ cb[ch >>> 0x8 & 0xff] ^ cc[0xff & ci] ^ c8[ck++], cg = cm, ch = cn, ci = co;
                        }
                        cm = (cd[cg >>> 0x18] << 0x18 | cd[ch >>> 0x10 & 0xff] << 0x10 | cd[ci >>> 0x8 & 0xff] << 0x8 | cd[0xff & cj]) ^ c8[ck++], cn = (cd[ch >>> 0x18] << 0x18 | cd[ci >>> 0x10 & 0xff] << 0x10 | cd[cj >>> 0x8 & 0xff] << 0x8 | cd[0xff & cg]) ^ c8[ck++], co = (cd[ci >>> 0x18] << 0x18 | cd[cj >>> 0x10 & 0xff] << 0x10 | cd[cg >>> 0x8 & 0xff] << 0x8 | cd[0xff & ch]) ^ c8[ck++], cj = (cd[cj >>> 0x18] << 0x18 | cd[cg >>> 0x10 & 0xff] << 0x10 | cd[ch >>> 0x8 & 0xff] << 0x8 | cd[0xff & ci]) ^ c8[ck++], c6[c7] = cm, c6[c7 + 0x1] = cn, c6[c7 + 0x2] = co, c6[c7 + 0x3] = cj;
                    }, 'keySize': 0x8
                }), bJ['AES'] = bK['_createHelper'](bL);
            }(), function () {
                function bJ(bV, bW) {
                    var bX = (this['_lBlock'] >>> bV ^ this['_rBlock']) & bW;
                    this['_rBlock'] ^= bX, this['_lBlock'] ^= bX << bV;
                }

                function bK(bV, bW) {
                    var bX = (this['_rBlock'] >>> bV ^ this['_lBlock']) & bW;
                    this['_lBlock'] ^= bX, this['_rBlock'] ^= bX << bV;
                }

                var bL = ag, bM = (bN = bL['lib'])['WordArray'], bN = bN['BlockCipher'], bO = bL['algo'],
                    bP = [0x39, 0x31, 0x29, 0x21, 0x19, 0x11, 0x9, 0x1, 0x3a, 0x32, 0x2a, 0x22, 0x1a, 0x12, 0xa, 0x2, 0x3b, 0x33, 0x2b, 0x23, 0x1b, 0x13, 0xb, 0x3, 0x3c, 0x34, 0x2c, 0x24, 0x3f, 0x37, 0x2f, 0x27, 0x1f, 0x17, 0xf, 0x7, 0x3e, 0x36, 0x2e, 0x26, 0x1e, 0x16, 0xe, 0x6, 0x3d, 0x35, 0x2d, 0x25, 0x1d, 0x15, 0xd, 0x5, 0x1c, 0x14, 0xc, 0x4],
                    bQ = [0xe, 0x11, 0xb, 0x18, 0x1, 0x5, 0x3, 0x1c, 0xf, 0x6, 0x15, 0xa, 0x17, 0x13, 0xc, 0x4, 0x1a, 0x8, 0x10, 0x7, 0x1b, 0x14, 0xd, 0x2, 0x29, 0x34, 0x1f, 0x25, 0x2f, 0x37, 0x1e, 0x28, 0x33, 0x2d, 0x21, 0x30, 0x2c, 0x31, 0x27, 0x38, 0x22, 0x35, 0x2e, 0x2a, 0x32, 0x24, 0x1d, 0x20],
                    bR = [0x1, 0x2, 0x4, 0x6, 0x8, 0xa, 0xc, 0xe, 0xf, 0x11, 0x13, 0x15, 0x17, 0x19, 0x1b, 0x1c],
                    bS = [{
                        0: 0x808200,
                        268435456: 0x8000,
                        536870912: 0x808002,
                        805306368: 0x2,
                        1073741824: 0x200,
                        1342177280: 0x808202,
                        1610612736: 0x800202,
                        1879048192: 0x800000,
                        2147483648: 0x202,
                        2415919104: 0x800200,
                        2684354560: 0x8200,
                        2952790016: 0x808000,
                        3221225472: 0x8002,
                        3489660928: 0x800002,
                        3758096384: 0x0,
                        4026531840: 0x8202,
                        134217728: 0x0,
                        402653184: 0x808202,
                        671088640: 0x8202,
                        939524096: 0x8000,
                        1207959552: 0x808200,
                        1476395008: 0x200,
                        1744830464: 0x808002,
                        2013265920: 0x2,
                        2281701376: 0x800200,
                        2550136832: 0x8200,
                        2818572288: 0x808000,
                        3087007744: 0x800202,
                        3355443200: 0x800002,
                        3623878656: 0x8002,
                        3892314112: 0x202,
                        4160749568: 0x800000,
                        1: 0x8000,
                        268435457: 0x2,
                        536870913: 0x808200,
                        805306369: 0x800000,
                        1073741825: 0x808002,
                        1342177281: 0x8200,
                        1610612737: 0x200,
                        1879048193: 0x800202,
                        2147483649: 0x808202,
                        2415919105: 0x808000,
                        2684354561: 0x800002,
                        2952790017: 0x8202,
                        3221225473: 0x202,
                        3489660929: 0x800200,
                        3758096385: 0x8002,
                        4026531841: 0x0,
                        134217729: 0x808202,
                        402653185: 0x808000,
                        671088641: 0x800000,
                        939524097: 0x200,
                        1207959553: 0x8000,
                        1476395009: 0x800002,
                        1744830465: 0x2,
                        2013265921: 0x8202,
                        2281701377: 0x8002,
                        2550136833: 0x800202,
                        2818572289: 0x202,
                        3087007745: 0x808200,
                        3355443201: 0x800200,
                        3623878657: 0x0,
                        3892314113: 0x8200,
                        4160749569: 0x808002
                    }, {
                        0: 0x40084010,
                        16777216: 0x4000,
                        33554432: 0x80000,
                        50331648: 0x40080010,
                        67108864: 0x40000010,
                        83886080: 0x40084000,
                        100663296: 0x40004000,
                        117440512: 0x10,
                        134217728: 0x84000,
                        150994944: 0x40004010,
                        167772160: 0x40000000,
                        184549376: 0x84010,
                        201326592: 0x80010,
                        218103808: 0x0,
                        234881024: 0x4010,
                        251658240: 0x40080000,
                        8388608: 0x40004000,
                        25165824: 0x84010,
                        41943040: 0x10,
                        58720256: 0x40004010,
                        75497472: 0x40084010,
                        92274688: 0x40000000,
                        109051904: 0x80000,
                        125829120: 0x40080010,
                        142606336: 0x80010,
                        159383552: 0x0,
                        176160768: 0x4000,
                        192937984: 0x40080000,
                        209715200: 0x40000010,
                        226492416: 0x84000,
                        243269632: 0x40084000,
                        260046848: 0x4010,
                        268435456: 0x0,
                        285212672: 0x40080010,
                        301989888: 0x40004010,
                        318767104: 0x40084000,
                        335544320: 0x40080000,
                        352321536: 0x10,
                        369098752: 0x84010,
                        385875968: 0x4000,
                        402653184: 0x4010,
                        419430400: 0x80000,
                        436207616: 0x80010,
                        452984832: 0x40000010,
                        469762048: 0x84000,
                        486539264: 0x40004000,
                        503316480: 0x40000000,
                        520093696: 0x40084010,
                        276824064: 0x84010,
                        293601280: 0x80000,
                        310378496: 0x40080000,
                        327155712: 0x4000,
                        343932928: 0x40004000,
                        360710144: 0x40084010,
                        377487360: 0x10,
                        394264576: 0x40000000,
                        411041792: 0x40084000,
                        427819008: 0x40000010,
                        444596224: 0x40004010,
                        461373440: 0x80010,
                        478150656: 0x0,
                        494927872: 0x4010,
                        511705088: 0x40080010,
                        528482304: 0x84000
                    }, {
                        0: 0x104,
                        1048576: 0x0,
                        2097152: 0x4000100,
                        3145728: 0x10104,
                        4194304: 0x10004,
                        5242880: 0x4000004,
                        6291456: 0x4010104,
                        7340032: 0x4010000,
                        8388608: 0x4000000,
                        9437184: 0x4010100,
                        10485760: 0x10100,
                        11534336: 0x4010004,
                        12582912: 0x4000104,
                        13631488: 0x10000,
                        14680064: 0x4,
                        15728640: 0x100,
                        524288: 0x4010100,
                        1572864: 0x4010004,
                        2621440: 0x0,
                        3670016: 0x4000100,
                        4718592: 0x4000004,
                        5767168: 0x10000,
                        6815744: 0x10004,
                        7864320: 0x104,
                        8912896: 0x4,
                        9961472: 0x100,
                        11010048: 0x4010000,
                        12058624: 0x10104,
                        13107200: 0x10100,
                        14155776: 0x4000104,
                        15204352: 0x4010104,
                        16252928: 0x4000000,
                        16777216: 0x4010100,
                        17825792: 0x10004,
                        18874368: 0x10000,
                        19922944: 0x4000100,
                        20971520: 0x100,
                        22020096: 0x4010104,
                        23068672: 0x4000004,
                        24117248: 0x0,
                        25165824: 0x4000104,
                        26214400: 0x4000000,
                        27262976: 0x4,
                        28311552: 0x10100,
                        29360128: 0x4010000,
                        30408704: 0x104,
                        31457280: 0x10104,
                        32505856: 0x4010004,
                        17301504: 0x4000000,
                        18350080: 0x104,
                        19398656: 0x4010100,
                        20447232: 0x0,
                        21495808: 0x10004,
                        22544384: 0x4000100,
                        23592960: 0x100,
                        24641536: 0x4010004,
                        25690112: 0x10000,
                        26738688: 0x4010104,
                        27787264: 0x10104,
                        28835840: 0x4000004,
                        29884416: 0x4000104,
                        30932992: 0x4010000,
                        31981568: 0x4,
                        33030144: 0x10100
                    }, {
                        0: 0x80401000,
                        65536: 0x80001040,
                        131072: 0x401040,
                        196608: 0x80400000,
                        262144: 0x0,
                        327680: 0x401000,
                        393216: 0x80000040,
                        458752: 0x400040,
                        524288: 0x80000000,
                        589824: 0x400000,
                        655360: 0x40,
                        720896: 0x80001000,
                        786432: 0x80400040,
                        851968: 0x1040,
                        917504: 0x1000,
                        983040: 0x80401040,
                        32768: 0x80001040,
                        98304: 0x40,
                        163840: 0x80400040,
                        229376: 0x80001000,
                        294912: 0x401000,
                        360448: 0x80401040,
                        425984: 0x0,
                        491520: 0x80400000,
                        557056: 0x1000,
                        622592: 0x80401000,
                        688128: 0x400000,
                        753664: 0x1040,
                        819200: 0x80000000,
                        884736: 0x400040,
                        950272: 0x401040,
                        1015808: 0x80000040,
                        1048576: 0x400040,
                        1114112: 0x401000,
                        1179648: 0x80000040,
                        1245184: 0x0,
                        1310720: 0x1040,
                        1376256: 0x80400040,
                        1441792: 0x80401000,
                        1507328: 0x80001040,
                        1572864: 0x80401040,
                        1638400: 0x80000000,
                        1703936: 0x80400000,
                        1769472: 0x401040,
                        1835008: 0x80001000,
                        1900544: 0x400000,
                        1966080: 0x40,
                        2031616: 0x1000,
                        1081344: 0x80400000,
                        1146880: 0x80401040,
                        1212416: 0x0,
                        1277952: 0x401000,
                        1343488: 0x400040,
                        1409024: 0x80000000,
                        1474560: 0x80001040,
                        1540096: 0x40,
                        1605632: 0x80000040,
                        1671168: 0x1000,
                        1736704: 0x80001000,
                        1802240: 0x80400040,
                        1867776: 0x1040,
                        1933312: 0x80401000,
                        1998848: 0x400000,
                        2064384: 0x401040
                    }, {
                        0: 0x80,
                        4096: 0x1040000,
                        8192: 0x40000,
                        12288: 0x20000000,
                        16384: 0x20040080,
                        20480: 0x1000080,
                        24576: 0x21000080,
                        28672: 0x40080,
                        32768: 0x1000000,
                        36864: 0x20040000,
                        40960: 0x20000080,
                        45056: 0x21040080,
                        49152: 0x21040000,
                        53248: 0x0,
                        57344: 0x1040080,
                        61440: 0x21000000,
                        2048: 0x1040080,
                        6144: 0x21000080,
                        10240: 0x80,
                        14336: 0x1040000,
                        18432: 0x40000,
                        22528: 0x20040080,
                        26624: 0x21040000,
                        30720: 0x20000000,
                        34816: 0x20040000,
                        38912: 0x0,
                        43008: 0x21040080,
                        47104: 0x1000080,
                        51200: 0x20000080,
                        55296: 0x21000000,
                        59392: 0x1000000,
                        63488: 0x40080,
                        65536: 0x40000,
                        69632: 0x80,
                        73728: 0x20000000,
                        77824: 0x21000080,
                        81920: 0x1000080,
                        86016: 0x21040000,
                        90112: 0x20040080,
                        94208: 0x1000000,
                        98304: 0x21040080,
                        102400: 0x21000000,
                        106496: 0x1040000,
                        110592: 0x20040000,
                        114688: 0x40080,
                        118784: 0x20000080,
                        122880: 0x0,
                        126976: 0x1040080,
                        67584: 0x21000080,
                        71680: 0x1000000,
                        75776: 0x1040000,
                        79872: 0x20040080,
                        83968: 0x20000000,
                        88064: 0x1040080,
                        92160: 0x80,
                        96256: 0x21040000,
                        100352: 0x40080,
                        104448: 0x21040080,
                        108544: 0x0,
                        112640: 0x21000000,
                        116736: 0x1000080,
                        120832: 0x40000,
                        124928: 0x20040000,
                        129024: 0x20000080
                    }, {
                        0: 0x10000008,
                        256: 0x2000,
                        512: 0x10200000,
                        768: 0x10202008,
                        1024: 0x10002000,
                        1280: 0x200000,
                        1536: 0x200008,
                        1792: 0x10000000,
                        2048: 0x0,
                        2304: 0x10002008,
                        2560: 0x202000,
                        2816: 0x8,
                        3072: 0x10200008,
                        3328: 0x202008,
                        3584: 0x2008,
                        3840: 0x10202000,
                        128: 0x10200000,
                        384: 0x10202008,
                        640: 0x8,
                        896: 0x200000,
                        1152: 0x202008,
                        1408: 0x10000008,
                        1664: 0x10002000,
                        1920: 0x2008,
                        2176: 0x200008,
                        2432: 0x2000,
                        2688: 0x10002008,
                        2944: 0x10200008,
                        3200: 0x0,
                        3456: 0x10202000,
                        3712: 0x202000,
                        3968: 0x10000000,
                        4096: 0x10002000,
                        4352: 0x10200008,
                        4608: 0x10202008,
                        4864: 0x2008,
                        5120: 0x200000,
                        5376: 0x10000000,
                        5632: 0x10000008,
                        5888: 0x202000,
                        6144: 0x202008,
                        6400: 0x0,
                        6656: 0x8,
                        6912: 0x10200000,
                        7168: 0x2000,
                        7424: 0x10002008,
                        7680: 0x10202000,
                        7936: 0x200008,
                        4224: 0x8,
                        4480: 0x202000,
                        4736: 0x200000,
                        4992: 0x10000008,
                        5248: 0x10002000,
                        5504: 0x2008,
                        5760: 0x10202008,
                        6016: 0x10200000,
                        6272: 0x10202000,
                        6528: 0x10200008,
                        6784: 0x2000,
                        7040: 0x202008,
                        7296: 0x200008,
                        7552: 0x0,
                        7808: 0x10000000,
                        8064: 0x10002008
                    }, {
                        0: 0x100000,
                        16: 0x2000401,
                        32: 0x400,
                        48: 0x100401,
                        64: 0x2100401,
                        80: 0x0,
                        96: 0x1,
                        112: 0x2100001,
                        128: 0x2000400,
                        144: 0x100001,
                        160: 0x2000001,
                        176: 0x2100400,
                        192: 0x2100000,
                        208: 0x401,
                        224: 0x100400,
                        240: 0x2000000,
                        8: 0x2100001,
                        24: 0x0,
                        40: 0x2000401,
                        56: 0x2100400,
                        72: 0x100000,
                        88: 0x2000001,
                        104: 0x2000000,
                        120: 0x401,
                        136: 0x100401,
                        152: 0x2000400,
                        168: 0x2100000,
                        184: 0x100001,
                        200: 0x400,
                        216: 0x2100401,
                        232: 0x1,
                        248: 0x100400,
                        256: 0x2000000,
                        272: 0x100000,
                        288: 0x2000401,
                        304: 0x2100001,
                        320: 0x100001,
                        336: 0x2000400,
                        352: 0x2100400,
                        368: 0x100401,
                        384: 0x401,
                        400: 0x2100401,
                        416: 0x100400,
                        432: 0x1,
                        448: 0x0,
                        464: 0x2100000,
                        480: 0x2000001,
                        496: 0x400,
                        264: 0x100400,
                        280: 0x2000401,
                        296: 0x2100001,
                        312: 0x1,
                        328: 0x2000000,
                        344: 0x100000,
                        360: 0x401,
                        376: 0x2100400,
                        392: 0x2000001,
                        408: 0x2100000,
                        424: 0x0,
                        440: 0x2100401,
                        456: 0x100401,
                        472: 0x400,
                        488: 0x2000400,
                        504: 0x100001
                    }, {
                        0: 0x8000820,
                        1: 0x20000,
                        2: 0x8000000,
                        3: 0x20,
                        4: 0x20020,
                        5: 0x8020820,
                        6: 0x8020800,
                        7: 0x800,
                        8: 0x8020000,
                        9: 0x8000800,
                        10: 0x20800,
                        11: 0x8020020,
                        12: 0x820,
                        13: 0x0,
                        14: 0x8000020,
                        15: 0x20820,
                        2147483648: 0x800,
                        2147483649: 0x8020820,
                        2147483650: 0x8000820,
                        2147483651: 0x8000000,
                        2147483652: 0x8020000,
                        2147483653: 0x20800,
                        2147483654: 0x20820,
                        2147483655: 0x20,
                        2147483656: 0x8000020,
                        2147483657: 0x820,
                        2147483658: 0x20020,
                        2147483659: 0x8020800,
                        2147483660: 0x0,
                        2147483661: 0x8020020,
                        2147483662: 0x8000800,
                        2147483663: 0x20000,
                        16: 0x20820,
                        17: 0x8020800,
                        18: 0x20,
                        19: 0x800,
                        20: 0x8000800,
                        21: 0x8000020,
                        22: 0x8020020,
                        23: 0x20000,
                        24: 0x0,
                        25: 0x20020,
                        26: 0x8020000,
                        27: 0x8000820,
                        28: 0x8020820,
                        29: 0x20800,
                        30: 0x820,
                        31: 0x8000000,
                        2147483664: 0x20000,
                        2147483665: 0x800,
                        2147483666: 0x8020020,
                        2147483667: 0x20820,
                        2147483668: 0x20,
                        2147483669: 0x8020000,
                        2147483670: 0x8000000,
                        2147483671: 0x8000820,
                        2147483672: 0x8020820,
                        2147483673: 0x8000020,
                        2147483674: 0x8000800,
                        2147483675: 0x0,
                        2147483676: 0x20800,
                        2147483677: 0x820,
                        2147483678: 0x20020,
                        2147483679: 0x8020800
                    }], bT = [0xf8000001, 0x1f800000, 0x1f80000, 0x1f8000, 0x1f800, 0x1f80, 0x1f8, 0x8000001f],
                    bU = bO['DES'] = bN['extend']({
                        '_doReset': function () {
                            for (var bV = this['_key']['words'], bW = [], bX = 0x0; 0x38 > bX; bX++) {
                                var bY = bP[bX] - 0x1;
                                bW[bX] = bV[bY >>> 0x5] >>> 0x1f - bY % 0x20 & 0x1;
                            }
                            for (bV = this['_subKeys'] = [], bY = 0x0; 0x10 > bY; bY++) {
                                var bZ = bV[bY] = [], c0 = bR[bY];
                                for (bX = 0x0; 0x18 > bX; bX++) bZ[bX / 0x6 | 0x0] |= bW[(bQ[bX] - 0x1 + c0) % 0x1c] << 0x1f - bX % 0x6, bZ[0x4 + (bX / 0x6 | 0x0)] |= bW[0x1c + (bQ[bX + 0x18] - 0x1 + c0) % 0x1c] << 0x1f - bX % 0x6;
                                for (bZ[0x0] = bZ[0x0] << 0x1 | bZ[0x0] >>> 0x1f, bX = 0x1; 0x7 > bX; bX++) bZ[bX] >>>= 0x4 * (bX - 0x1) + 0x3;
                                bZ[0x7] = bZ[0x7] << 0x5 | bZ[0x7] >>> 0x1b;
                            }
                            for (bW = this['_invSubKeys'] = [], bX = 0x0; 0x10 > bX; bX++) bW[bX] = bV[0xf - bX];
                        }, 'encryptBlock': function (bV, bW) {
                            this['_doCryptBlock'](bV, bW, this['_subKeys']);
                        }, 'decryptBlock': function (bV, bW) {
                            this['_doCryptBlock'](bV, bW, this['_invSubKeys']);
                        }, '_doCryptBlock': function (bV, bW, bX) {
                            this['_lBlock'] = bV[bW], this['_rBlock'] = bV[bW + 0x1], bJ['call'](this, 0x4, 0xf0f0f0f), bJ['call'](this, 0x10, 0xffff), bK['call'](this, 0x2, 0x33333333), bK['call'](this, 0x8, 0xff00ff), bJ['call'](this, 0x1, 0x55555555);
                            for (var bY = 0x0; 0x10 > bY; bY++) {
                                for (var bZ = bX[bY], c0 = this['_lBlock'], c1 = this['_rBlock'], c2 = 0x0, c3 = 0x0; 0x8 > c3; c3++) c2 |= bS[c3][((c1 ^ bZ[c3]) & bT[c3]) >>> 0x0];
                                this['_lBlock'] = c1, this['_rBlock'] = c0 ^ c2;
                            }
                            bX = this['_lBlock'], this['_lBlock'] = this['_rBlock'], this['_rBlock'] = bX, bJ['call'](this, 0x1, 0x55555555), bK['call'](this, 0x8, 0xff00ff), bK['call'](this, 0x2, 0x33333333), bJ['call'](this, 0x10, 0xffff), bJ['call'](this, 0x4, 0xf0f0f0f), bV[bW] = this['_lBlock'], bV[bW + 0x1] = this['_rBlock'];
                        }, 'keySize': 0x2, 'ivSize': 0x2, 'blockSize': 0x2
                    });
                bL['DES'] = bN['_createHelper'](bU), bO = bO['TripleDES'] = bN['extend']({
                    '_doReset': function () {
                        var bV = this['_key']['words'];
                        this['_des1'] = bU['createEncryptor'](bM['create'](bV['slice'](0x0, 0x2))), this['_des2'] = bU['createEncryptor'](bM['create'](bV['slice'](0x2, 0x4))), this['_des3'] = bU['createEncryptor'](bM['create'](bV['slice'](0x4, 0x6)));
                    }, 'encryptBlock': function (bV, bW) {
                        this['_des1']['encryptBlock'](bV, bW), this['_des2']['decryptBlock'](bV, bW), this['_des3']['encryptBlock'](bV, bW);
                    }, 'decryptBlock': function (bV, bW) {
                        this['_des3']['decryptBlock'](bV, bW), this['_des2']['encryptBlock'](bV, bW), this['_des1']['decryptBlock'](bV, bW);
                    }, 'keySize': 0x6, 'ivSize': 0x2, 'blockSize': 0x2
                }), bL['TripleDES'] = bN['_createHelper'](bO);
            }(), function () {
                var bJ = ag, bK = bJ['lib']['WordArray'];
                bJ['enc']['Base64'] = {
                    'stringify': function (bL) {
                        var bM = bL['words'], bN = bL['sigBytes'], bO = this['_map'];
                        bL['clamp'](), bL = [];
                        for (var bP = 0x0; bP < bN; bP += 0x3) for (var bQ = (bM[bP >>> 0x2] >>> 0x18 - bP % 0x4 * 0x8 & 0xff) << 0x10 | (bM[bP + 0x1 >>> 0x2] >>> 0x18 - (bP + 0x1) % 0x4 * 0x8 & 0xff) << 0x8 | bM[bP + 0x2 >>> 0x2] >>> 0x18 - (bP + 0x2) % 0x4 * 0x8 & 0xff, bR = 0x0; 0x4 > bR && bP + 0.75 * bR < bN; bR++) bL['push'](bO['charAt'](bQ >>> 0x6 * (0x3 - bR) & 0x3f));
                        if (bM = bO['charAt'](0x40)) for (; bL['length'] % 0x4;) bL['push'](bM);
                        return bL['join']('');
                    }, 'parse': function (bL) {
                        var bM = bL['length'], bN = this['_map'];
                        (bO = bN['charAt'](0x40)) && -0x1 != (bO = bL['indexOf'](bO)) && (bM = bO);
                        for (var bO = [], bP = 0x0, bQ = 0x0; bQ < bM; bQ++) if (bQ % 0x4) {
                            var bR = bN['indexOf'](bL['charAt'](bQ - 0x1)) << bQ % 0x4 * 0x2,
                                bS = bN['indexOf'](bL['charAt'](bQ)) >>> 0x6 - bQ % 0x4 * 0x2;
                            bO[bP >>> 0x2] |= (bR | bS) << 0x18 - bP % 0x4 * 0x8, bP++;
                        }
                        return bK['create'](bO, bP);
                    }, '_map': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
                };
            }(), function (bJ) {
                function bK(bU, bV, bW, bX, bY, bZ, c0) {
                    return ((bU = bU + (bV & bW | ~bV & bX) + bY + c0) << bZ | bU >>> 0x20 - bZ) + bV;
                }

                function bL(bU, bV, bW, bX, bY, bZ, c0) {
                    return ((bU = bU + (bV & bX | bW & ~bX) + bY + c0) << bZ | bU >>> 0x20 - bZ) + bV;
                }

                function bM(bU, bV, bW, bX, bY, bZ, c0) {
                    return ((bU = bU + (bV ^ bW ^ bX) + bY + c0) << bZ | bU >>> 0x20 - bZ) + bV;
                }

                function bN(bU, bV, bW, bX, bY, bZ, c0) {
                    return ((bU = bU + (bW ^ (bV | ~bX)) + bY + c0) << bZ | bU >>> 0x20 - bZ) + bV;
                }

                for (var bO = ag, bP = (bR = bO['lib'])['WordArray'], bQ = bR['Hasher'], bR = bO['algo'], bS = [], bT = 0x0; 0x40 > bT; bT++) bS[bT] = 0x100000000 * bJ['abs'](bJ['sin'](bT + 0x1)) | 0x0;
                bR = bR['MD5'] = bQ['extend']({
                    '_doReset': function () {
                        this['_hash'] = new bP['init']([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
                    }, '_doProcessBlock': function (bU, bV) {
                        for (var bW = 0x0; 0x10 > bW; bW++) {
                            var bX = bU[bY = bV + bW];
                            bU[bY] = 0xff00ff & (bX << 0x8 | bX >>> 0x18) | 0xff00ff00 & (bX << 0x18 | bX >>> 0x8);
                        }
                        bW = this['_hash']['words'];
                        var bY = bU[bV + 0x0], bZ = (bX = bU[bV + 0x1], bU[bV + 0x2]), c0 = bU[bV + 0x3],
                            c1 = bU[bV + 0x4], c2 = bU[bV + 0x5], c3 = bU[bV + 0x6], c4 = bU[bV + 0x7],
                            c5 = bU[bV + 0x8], c6 = bU[bV + 0x9], c7 = bU[bV + 0xa], c8 = bU[bV + 0xb],
                            c9 = bU[bV + 0xc], ca = bU[bV + 0xd], cb = bU[bV + 0xe], cc = bU[bV + 0xf],
                            cd = bK(cd = bW[0x0], ch = bW[0x1], cg = bW[0x2], cf = bW[0x3], bY, 0x7, bS[0x0]),
                            cf = bK(cf, cd, ch, cg, bX, 0xc, bS[0x1]), cg = bK(cg, cf, cd, ch, bZ, 0x11, bS[0x2]),
                            ch = bK(ch, cg, cf, cd, c0, 0x16, bS[0x3]);
                        cd = bK(cd, ch, cg, cf, c1, 0x7, bS[0x4]), cf = bK(cf, cd, ch, cg, c2, 0xc, bS[0x5]), cg = bK(cg, cf, cd, ch, c3, 0x11, bS[0x6]), ch = bK(ch, cg, cf, cd, c4, 0x16, bS[0x7]), cd = bK(cd, ch, cg, cf, c5, 0x7, bS[0x8]), cf = bK(cf, cd, ch, cg, c6, 0xc, bS[0x9]), cg = bK(cg, cf, cd, ch, c7, 0x11, bS[0xa]), ch = bK(ch, cg, cf, cd, c8, 0x16, bS[0xb]), cd = bK(cd, ch, cg, cf, c9, 0x7, bS[0xc]), cf = bK(cf, cd, ch, cg, ca, 0xc, bS[0xd]), cg = bK(cg, cf, cd, ch, cb, 0x11, bS[0xe]), cd = bL(cd, ch = bK(ch, cg, cf, cd, cc, 0x16, bS[0xf]), cg, cf, bX, 0x5, bS[0x10]), cf = bL(cf, cd, ch, cg, c3, 0x9, bS[0x11]), cg = bL(cg, cf, cd, ch, c8, 0xe, bS[0x12]), ch = bL(ch, cg, cf, cd, bY, 0x14, bS[0x13]), cd = bL(cd, ch, cg, cf, c2, 0x5, bS[0x14]), cf = bL(cf, cd, ch, cg, c7, 0x9, bS[0x15]), cg = bL(cg, cf, cd, ch, cc, 0xe, bS[0x16]), ch = bL(ch, cg, cf, cd, c1, 0x14, bS[0x17]), cd = bL(cd, ch, cg, cf, c6, 0x5, bS[0x18]), cf = bL(cf, cd, ch, cg, cb, 0x9, bS[0x19]), cg = bL(cg, cf, cd, ch, c0, 0xe, bS[0x1a]), ch = bL(ch, cg, cf, cd, c5, 0x14, bS[0x1b]), cd = bL(cd, ch, cg, cf, ca, 0x5, bS[0x1c]), cf = bL(cf, cd, ch, cg, bZ, 0x9, bS[0x1d]), cg = bL(cg, cf, cd, ch, c4, 0xe, bS[0x1e]), cd = bM(cd, ch = bL(ch, cg, cf, cd, c9, 0x14, bS[0x1f]), cg, cf, c2, 0x4, bS[0x20]), cf = bM(cf, cd, ch, cg, c5, 0xb, bS[0x21]), cg = bM(cg, cf, cd, ch, c8, 0x10, bS[0x22]), ch = bM(ch, cg, cf, cd, cb, 0x17, bS[0x23]), cd = bM(cd, ch, cg, cf, bX, 0x4, bS[0x24]), cf = bM(cf, cd, ch, cg, c1, 0xb, bS[0x25]), cg = bM(cg, cf, cd, ch, c4, 0x10, bS[0x26]), ch = bM(ch, cg, cf, cd, c7, 0x17, bS[0x27]), cd = bM(cd, ch, cg, cf, ca, 0x4, bS[0x28]), cf = bM(cf, cd, ch, cg, bY, 0xb, bS[0x29]), cg = bM(cg, cf, cd, ch, c0, 0x10, bS[0x2a]), ch = bM(ch, cg, cf, cd, c3, 0x17, bS[0x2b]), cd = bM(cd, ch, cg, cf, c6, 0x4, bS[0x2c]), cf = bM(cf, cd, ch, cg, c9, 0xb, bS[0x2d]), cg = bM(cg, cf, cd, ch, cc, 0x10, bS[0x2e]), cd = bN(cd, ch = bM(ch, cg, cf, cd, bZ, 0x17, bS[0x2f]), cg, cf, bY, 0x6, bS[0x30]), cf = bN(cf, cd, ch, cg, c4, 0xa, bS[0x31]), cg = bN(cg, cf, cd, ch, cb, 0xf, bS[0x32]), ch = bN(ch, cg, cf, cd, c2, 0x15, bS[0x33]), cd = bN(cd, ch, cg, cf, c9, 0x6, bS[0x34]), cf = bN(cf, cd, ch, cg, c0, 0xa, bS[0x35]), cg = bN(cg, cf, cd, ch, c7, 0xf, bS[0x36]), ch = bN(ch, cg, cf, cd, bX, 0x15, bS[0x37]), cd = bN(cd, ch, cg, cf, c5, 0x6, bS[0x38]), cf = bN(cf, cd, ch, cg, cc, 0xa, bS[0x39]), cg = bN(cg, cf, cd, ch, c3, 0xf, bS[0x3a]), ch = bN(ch, cg, cf, cd, ca, 0x15, bS[0x3b]), cd = bN(cd, ch, cg, cf, c1, 0x6, bS[0x3c]), cf = bN(cf, cd, ch, cg, c8, 0xa, bS[0x3d]), cg = bN(cg, cf, cd, ch, bZ, 0xf, bS[0x3e]), ch = bN(ch, cg, cf, cd, c6, 0x15, bS[0x3f]), bW[0x0] = bW[0x0] + cd | 0x0, bW[0x1] = bW[0x1] + ch | 0x0, bW[0x2] = bW[0x2] + cg | 0x0, bW[0x3] = bW[0x3] + cf | 0x0;
                    }, '_doFinalize': function () {
                        var bU = this['_data'], bV = bU['words'], bW = 0x8 * this['_nDataBytes'],
                            bX = 0x8 * bU['sigBytes'];
                        bV[bX >>> 0x5] |= 0x80 << 0x18 - bX % 0x20;
                        var bY = bJ['floor'](bW / 0x100000000);
                        for (bV[0xf + (bX + 0x40 >>> 0x9 << 0x4)] = 0xff00ff & (bY << 0x8 | bY >>> 0x18) | 0xff00ff00 & (bY << 0x18 | bY >>> 0x8), bV[0xe + (bX + 0x40 >>> 0x9 << 0x4)] = 0xff00ff & (bW << 0x8 | bW >>> 0x18) | 0xff00ff00 & (bW << 0x18 | bW >>> 0x8), bU['sigBytes'] = 0x4 * (bV['length'] + 0x1), this['_process'](), bV = (bU = this['_hash'])['words'], bW = 0x0; 0x4 > bW; bW++) bX = bV[bW], bV[bW] = 0xff00ff & (bX << 0x8 | bX >>> 0x18) | 0xff00ff00 & (bX << 0x18 | bX >>> 0x8);
                        return bU;
                    }, 'clone': function () {
                        var bU = bQ['clone']['call'](this);
                        return bU['_hash'] = this['_hash']['clone'](), bU;
                    }
                }), bO['MD5'] = bQ['_createHelper'](bR), bO['HmacMD5'] = bQ['_createHmacHelper'](bR);
            }(Math), function () {
                var bJ = ag, bK = (bN = bJ['lib'])['WordArray'], bL = bN['Hasher'], bM = [],
                    bN = bJ['algo']['SHA1'] = bL['extend']({
                        '_doReset': function () {
                            this['_hash'] = new bK['init']([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
                        }, '_doProcessBlock': function (bO, bP) {
                            for (var bQ = this['_hash']['words'], bR = bQ[0x0], bS = bQ[0x1], bT = bQ[0x2], bU = bQ[0x3], bV = bQ[0x4], bW = 0x0; 0x50 > bW; bW++) {
                                if (0x10 > bW) bM[bW] = 0x0 | bO[bP + bW]; else {
                                    var bX = bM[bW - 0x3] ^ bM[bW - 0x8] ^ bM[bW - 0xe] ^ bM[bW - 0x10];
                                    bM[bW] = bX << 0x1 | bX >>> 0x1f;
                                }
                                bX = (bR << 0x5 | bR >>> 0x1b) + bV + bM[bW], bX = 0x14 > bW ? bX + (0x5a827999 + (bS & bT | ~bS & bU)) : 0x28 > bW ? bX + (0x6ed9eba1 + (bS ^ bT ^ bU)) : 0x3c > bW ? bX + ((bS & bT | bS & bU | bT & bU) - 0x70e44324) : bX + ((bS ^ bT ^ bU) - 0x359d3e2a), bV = bU, bU = bT, bT = bS << 0x1e | bS >>> 0x2, bS = bR, bR = bX;
                            }
                            bQ[0x0] = bQ[0x0] + bR | 0x0, bQ[0x1] = bQ[0x1] + bS | 0x0, bQ[0x2] = bQ[0x2] + bT | 0x0, bQ[0x3] = bQ[0x3] + bU | 0x0, bQ[0x4] = bQ[0x4] + bV | 0x0;
                        }, '_doFinalize': function () {
                            var bO = this['_data'], bP = bO['words'], bQ = 0x8 * this['_nDataBytes'],
                                bR = 0x8 * bO['sigBytes'];
                            return bP[bR >>> 0x5] |= 0x80 << 0x18 - bR % 0x20, bP[0xe + (bR + 0x40 >>> 0x9 << 0x4)] = Math['floor'](bQ / 0x100000000), bP[0xf + (bR + 0x40 >>> 0x9 << 0x4)] = bQ, bO['sigBytes'] = 0x4 * bP['length'], this['_process'](), this['_hash'];
                        }, 'clone': function () {
                            var bO = bL['clone']['call'](this);
                            return bO['_hash'] = this['_hash']['clone'](), bO;
                        }
                    });
                bJ['SHA1'] = bL['_createHelper'](bN), bJ['HmacSHA1'] = bL['_createHmacHelper'](bN);
            }(), function (bJ) {
                for (var bK = ag, bL = (bN = bK['lib'])['WordArray'], bM = bN['Hasher'], bN = bK['algo'], bO = [], bP = [], bQ = function (bX) {
                    return 0x100000000 * (bX - (0x0 | bX)) | 0x0;
                }, bR = 0x2, bS = 0x0; 0x40 > bS;) {
                    var bT;
                    bX:{
                        bT = bR;
                        for (var bU = bJ['sqrt'](bT), bV = 0x2; bV <= bU; bV++) if (!(bT % bV)) {
                            bT = !0x1;
                            break bX;
                        }
                        bT = !0x0;
                    }
                    bT && (0x8 > bS && (bO[bS] = bQ(bJ['pow'](bR, 0.5))), bP[bS] = bQ(bJ['pow'](bR, 0x1 / 0x3)), bS++), bR++;
                }
                var bW = [];
                bN = bN['SHA256'] = bM['extend']({
                    '_doReset': function () {
                        this['_hash'] = new bL['init'](bO['slice'](0x0));
                    }, '_doProcessBlock': function (bX, bY) {
                        for (var bZ = this['_hash']['words'], c0 = bZ[0x0], c1 = bZ[0x1], c2 = bZ[0x2], c3 = bZ[0x3], c4 = bZ[0x4], c5 = bZ[0x5], c6 = bZ[0x6], c7 = bZ[0x7], c8 = 0x0; 0x40 > c8; c8++) {
                            if (0x10 > c8) bW[c8] = 0x0 | bX[bY + c8]; else {
                                var c9 = bW[c8 - 0xf], ca = bW[c8 - 0x2];
                                bW[c8] = ((c9 << 0x19 | c9 >>> 0x7) ^ (c9 << 0xe | c9 >>> 0x12) ^ c9 >>> 0x3) + bW[c8 - 0x7] + ((ca << 0xf | ca >>> 0x11) ^ (ca << 0xd | ca >>> 0x13) ^ ca >>> 0xa) + bW[c8 - 0x10];
                            }
                            c9 = c7 + ((c4 << 0x1a | c4 >>> 0x6) ^ (c4 << 0x15 | c4 >>> 0xb) ^ (c4 << 0x7 | c4 >>> 0x19)) + (c4 & c5 ^ ~c4 & c6) + bP[c8] + bW[c8], ca = ((c0 << 0x1e | c0 >>> 0x2) ^ (c0 << 0x13 | c0 >>> 0xd) ^ (c0 << 0xa | c0 >>> 0x16)) + (c0 & c1 ^ c0 & c2 ^ c1 & c2), c7 = c6, c6 = c5, c5 = c4, c4 = c3 + c9 | 0x0, c3 = c2, c2 = c1, c1 = c0, c0 = c9 + ca | 0x0;
                        }
                        bZ[0x0] = bZ[0x0] + c0 | 0x0, bZ[0x1] = bZ[0x1] + c1 | 0x0, bZ[0x2] = bZ[0x2] + c2 | 0x0, bZ[0x3] = bZ[0x3] + c3 | 0x0, bZ[0x4] = bZ[0x4] + c4 | 0x0, bZ[0x5] = bZ[0x5] + c5 | 0x0, bZ[0x6] = bZ[0x6] + c6 | 0x0, bZ[0x7] = bZ[0x7] + c7 | 0x0;
                    }, '_doFinalize': function () {
                        var bX = this['_data'], bY = bX['words'], bZ = 0x8 * this['_nDataBytes'],
                            c0 = 0x8 * bX['sigBytes'];
                        return bY[c0 >>> 0x5] |= 0x80 << 0x18 - c0 % 0x20, bY[0xe + (c0 + 0x40 >>> 0x9 << 0x4)] = bJ['floor'](bZ / 0x100000000), bY[0xf + (c0 + 0x40 >>> 0x9 << 0x4)] = bZ, bX['sigBytes'] = 0x4 * bY['length'], this['_process'](), this['_hash'];
                    }, 'clone': function () {
                        var bX = bM['clone']['call'](this);
                        return bX['_hash'] = this['_hash']['clone'](), bX;
                    }
                }), bK['SHA256'] = bM['_createHelper'](bN), bK['HmacSHA256'] = bM['_createHmacHelper'](bN);
            }(Math), function () {
                var bJ = ag, bK = bJ['lib']['WordArray'], bL = (bM = bJ['algo'])['SHA256'],
                    bM = bM['SHA224'] = bL['extend']({
                        '_doReset': function () {
                            this['_hash'] = new bK['init']([0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]);
                        }, '_doFinalize': function () {
                            var bN = bL['_doFinalize']['call'](this);
                            return bN['sigBytes'] -= 0x4, bN;
                        }
                    });
                bJ['SHA224'] = bL['_createHelper'](bM), bJ['HmacSHA224'] = bL['_createHmacHelper'](bM);
            }(), function () {
                function bJ() {
                    return bM['create']['apply'](bM, arguments);
                }

                for (var bK = ag, bL = bK['lib']['Hasher'], bM = (bO = bK['x64'])['Word'], bN = bO['WordArray'], bO = bK['algo'], bP = [bJ(0x428a2f98, 0xd728ae22), bJ(0x71374491, 0x23ef65cd), bJ(0xb5c0fbcf, 0xec4d3b2f), bJ(0xe9b5dba5, 0x8189dbbc), bJ(0x3956c25b, 0xf348b538), bJ(0x59f111f1, 0xb605d019), bJ(0x923f82a4, 0xaf194f9b), bJ(0xab1c5ed5, 0xda6d8118), bJ(0xd807aa98, 0xa3030242), bJ(0x12835b01, 0x45706fbe), bJ(0x243185be, 0x4ee4b28c), bJ(0x550c7dc3, 0xd5ffb4e2), bJ(0x72be5d74, 0xf27b896f), bJ(0x80deb1fe, 0x3b1696b1), bJ(0x9bdc06a7, 0x25c71235), bJ(0xc19bf174, 0xcf692694), bJ(0xe49b69c1, 0x9ef14ad2), bJ(0xefbe4786, 0x384f25e3), bJ(0xfc19dc6, 0x8b8cd5b5), bJ(0x240ca1cc, 0x77ac9c65), bJ(0x2de92c6f, 0x592b0275), bJ(0x4a7484aa, 0x6ea6e483), bJ(0x5cb0a9dc, 0xbd41fbd4), bJ(0x76f988da, 0x831153b5), bJ(0x983e5152, 0xee66dfab), bJ(0xa831c66d, 0x2db43210), bJ(0xb00327c8, 0x98fb213f), bJ(0xbf597fc7, 0xbeef0ee4), bJ(0xc6e00bf3, 0x3da88fc2), bJ(0xd5a79147, 0x930aa725), bJ(0x6ca6351, 0xe003826f), bJ(0x14292967, 0xa0e6e70), bJ(0x27b70a85, 0x46d22ffc), bJ(0x2e1b2138, 0x5c26c926), bJ(0x4d2c6dfc, 0x5ac42aed), bJ(0x53380d13, 0x9d95b3df), bJ(0x650a7354, 0x8baf63de), bJ(0x766a0abb, 0x3c77b2a8), bJ(0x81c2c92e, 0x47edaee6), bJ(0x92722c85, 0x1482353b), bJ(0xa2bfe8a1, 0x4cf10364), bJ(0xa81a664b, 0xbc423001), bJ(0xc24b8b70, 0xd0f89791), bJ(0xc76c51a3, 0x654be30), bJ(0xd192e819, 0xd6ef5218), bJ(0xd6990624, 0x5565a910), bJ(0xf40e3585, 0x5771202a), bJ(0x106aa070, 0x32bbd1b8), bJ(0x19a4c116, 0xb8d2d0c8), bJ(0x1e376c08, 0x5141ab53), bJ(0x2748774c, 0xdf8eeb99), bJ(0x34b0bcb5, 0xe19b48a8), bJ(0x391c0cb3, 0xc5c95a63), bJ(0x4ed8aa4a, 0xe3418acb), bJ(0x5b9cca4f, 0x7763e373), bJ(0x682e6ff3, 0xd6b2b8a3), bJ(0x748f82ee, 0x5defb2fc), bJ(0x78a5636f, 0x43172f60), bJ(0x84c87814, 0xa1f0ab72), bJ(0x8cc70208, 0x1a6439ec), bJ(0x90befffa, 0x23631e28), bJ(0xa4506ceb, 0xde82bde9), bJ(0xbef9a3f7, 0xb2c67915), bJ(0xc67178f2, 0xe372532b), bJ(0xca273ece, 0xea26619c), bJ(0xd186b8c7, 0x21c0c207), bJ(0xeada7dd6, 0xcde0eb1e), bJ(0xf57d4f7f, 0xee6ed178), bJ(0x6f067aa, 0x72176fba), bJ(0xa637dc5, 0xa2c898a6), bJ(0x113f9804, 0xbef90dae), bJ(0x1b710b35, 0x131c471b), bJ(0x28db77f5, 0x23047d84), bJ(0x32caab7b, 0x40c72493), bJ(0x3c9ebe0a, 0x15c9bebc), bJ(0x431d67c4, 0x9c100d4c), bJ(0x4cc5d4be, 0xcb3e42b6), bJ(0x597f299c, 0xfc657e2a), bJ(0x5fcb6fab, 0x3ad6faec), bJ(0x6c44198c, 0x4a475817)], bQ = [], bR = 0x0; 0x50 > bR; bR++) bQ[bR] = bJ();
                bO = bO['SHA512'] = bL['extend']({
                    '_doReset': function () {
                        this['_hash'] = new bN['init']([new bM['init'](0x6a09e667, 0xf3bcc908), new bM['init'](0xbb67ae85, 0x84caa73b), new bM['init'](0x3c6ef372, 0xfe94f82b), new bM['init'](0xa54ff53a, 0x5f1d36f1), new bM['init'](0x510e527f, 0xade682d1), new bM['init'](0x9b05688c, 0x2b3e6c1f), new bM['init'](0x1f83d9ab, 0xfb41bd6b), new bM['init'](0x5be0cd19, 0x137e2179)]);
                    }, '_doProcessBlock': function (bS, bT) {
                        for (var bU = (c1 = this['_hash']['words'])[0x0], bV = c1[0x1], bW = c1[0x2], bX = c1[0x3], bY = c1[0x4], bZ = c1[0x5], c0 = c1[0x6], c1 = c1[0x7], c2 = bU['high'], c3 = bU['low'], c4 = bV['high'], c5 = bV['low'], c6 = bW['high'], c7 = bW['low'], c8 = bX['high'], c9 = bX['low'], ca = bY['high'], cb = bY['low'], cc = bZ['high'], cd = bZ['low'], cf = c0['high'], cg = c0['low'], ch = c1['high'], ci = c1['low'], cj = c2, ck = c3, cl = c4, cm = c5, cn = c6, co = c7, cp = c8, cq = c9, cr = ca, cs = cb, ct = cc, cu = cd, cv = cf, cw = cg, cx = ch, cy = ci, cz = 0x0; 0x50 > cz; cz++) {
                            var cA = bQ[cz];
                            if (0x10 > cz) var cB = cA['high'] = 0x0 | bS[bT + 0x2 * cz],
                                cC = cA['low'] = 0x0 | bS[bT + 0x2 * cz + 0x1]; else {
                                cB = ((cC = (cB = bQ[cz - 0xf])['high']) >>> 0x1 | (cD = cB['low']) << 0x1f) ^ (cC >>> 0x8 | cD << 0x18) ^ cC >>> 0x7;
                                var cD = (cD >>> 0x1 | cC << 0x1f) ^ (cD >>> 0x8 | cC << 0x18) ^ (cD >>> 0x7 | cC << 0x19),
                                    cE = ((cC = (cE = bQ[cz - 0x2])['high']) >>> 0x13 | (cF = cE['low']) << 0xd) ^ (cC << 0x3 | cF >>> 0x1d) ^ cC >>> 0x6,
                                    cF = (cF >>> 0x13 | cC << 0xd) ^ (cF << 0x3 | cC >>> 0x1d) ^ (cF >>> 0x6 | cC << 0x1a),
                                    cG = (cC = bQ[cz - 0x7])['high'], cH = (cI = bQ[cz - 0x10])['high'], cI = cI['low'];
                                cB = (cB = (cB = cB + cG + ((cC = cD + cC['low']) >>> 0x0 < cD >>> 0x0 ? 0x1 : 0x0)) + cE + ((cC += cF) >>> 0x0 < cF >>> 0x0 ? 0x1 : 0x0)) + cH + ((cC += cI) >>> 0x0 < cI >>> 0x0 ? 0x1 : 0x0), cA['high'] = cB, cA['low'] = cC;
                            }
                            cG = cr & ct ^ ~cr & cv, cI = cs & cu ^ ~cs & cw, cA = cj & cl ^ cj & cn ^ cl & cn;
                            var cJ = ck & cm ^ ck & co ^ cm & co,
                                cK = (cD = (cj >>> 0x1c | ck << 0x4) ^ (cj << 0x1e | ck >>> 0x2) ^ (cj << 0x19 | ck >>> 0x7), cE = (ck >>> 0x1c | cj << 0x4) ^ (ck << 0x1e | cj >>> 0x2) ^ (ck << 0x19 | cj >>> 0x7), (cF = bP[cz])['high']),
                                cL = cF['low'];
                            cH = cx + ((cr >>> 0xe | cs << 0x12) ^ (cr >>> 0x12 | cs << 0xe) ^ (cr << 0x17 | cs >>> 0x9)) + ((cF = cy + ((cs >>> 0xe | cr << 0x12) ^ (cs >>> 0x12 | cr << 0xe) ^ (cs << 0x17 | cr >>> 0x9))) >>> 0x0 < cy >>> 0x0 ? 0x1 : 0x0), cx = cv, cy = cw, cv = ct, cw = cu, ct = cr, cu = cs, cr = cp + (cH = (cH = (cH = cH + cG + ((cF += cI) >>> 0x0 < cI >>> 0x0 ? 0x1 : 0x0)) + cK + ((cF += cL) >>> 0x0 < cL >>> 0x0 ? 0x1 : 0x0)) + cB + ((cF += cC) >>> 0x0 < cC >>> 0x0 ? 0x1 : 0x0)) + ((cs = cq + cF | 0x0) >>> 0x0 < cq >>> 0x0 ? 0x1 : 0x0) | 0x0, cp = cn, cq = co, cn = cl, co = cm, cl = cj, cm = ck, cj = cH + (cA = cD + cA + ((cC = cE + cJ) >>> 0x0 < cE >>> 0x0 ? 0x1 : 0x0)) + ((ck = cF + cC | 0x0) >>> 0x0 < cF >>> 0x0 ? 0x1 : 0x0) | 0x0;
                        }
                        c3 = bU['low'] = c3 + ck, bU['high'] = c2 + cj + (c3 >>> 0x0 < ck >>> 0x0 ? 0x1 : 0x0), c5 = bV['low'] = c5 + cm, bV['high'] = c4 + cl + (c5 >>> 0x0 < cm >>> 0x0 ? 0x1 : 0x0), c7 = bW['low'] = c7 + co, bW['high'] = c6 + cn + (c7 >>> 0x0 < co >>> 0x0 ? 0x1 : 0x0), c9 = bX['low'] = c9 + cq, bX['high'] = c8 + cp + (c9 >>> 0x0 < cq >>> 0x0 ? 0x1 : 0x0), cb = bY['low'] = cb + cs, bY['high'] = ca + cr + (cb >>> 0x0 < cs >>> 0x0 ? 0x1 : 0x0), cd = bZ['low'] = cd + cu, bZ['high'] = cc + ct + (cd >>> 0x0 < cu >>> 0x0 ? 0x1 : 0x0), cg = c0['low'] = cg + cw, c0['high'] = cf + cv + (cg >>> 0x0 < cw >>> 0x0 ? 0x1 : 0x0), ci = c1['low'] = ci + cy, c1['high'] = ch + cx + (ci >>> 0x0 < cy >>> 0x0 ? 0x1 : 0x0);
                    }, '_doFinalize': function () {
                        var bS = this['_data'], bT = bS['words'], bU = 0x8 * this['_nDataBytes'],
                            bV = 0x8 * bS['sigBytes'];
                        return bT[bV >>> 0x5] |= 0x80 << 0x18 - bV % 0x20, bT[0x1e + (bV + 0x80 >>> 0xa << 0x5)] = Math['floor'](bU / 0x100000000), bT[0x1f + (bV + 0x80 >>> 0xa << 0x5)] = bU, bS['sigBytes'] = 0x4 * bT['length'], this['_process'](), this['_hash']['toX32']();
                    }, 'clone': function () {
                        var bS = bL['clone']['call'](this);
                        return bS['_hash'] = this['_hash']['clone'](), bS;
                    }, 'blockSize': 0x20
                }), bK['SHA512'] = bL['_createHelper'](bO), bK['HmacSHA512'] = bL['_createHmacHelper'](bO);
            }(), function () {
                var bJ = ag, bK = (bN = bJ['x64'])['Word'], bL = bN['WordArray'], bM = (bN = bJ['algo'])['SHA512'],
                    bN = bN['SHA384'] = bM['extend']({
                        '_doReset': function () {
                            this['_hash'] = new bL['init']([new bK['init'](0xcbbb9d5d, 0xc1059ed8), new bK['init'](0x629a292a, 0x367cd507), new bK['init'](0x9159015a, 0x3070dd17), new bK['init'](0x152fecd8, 0xf70e5939), new bK['init'](0x67332667, 0xffc00b31), new bK['init'](0x8eb44a87, 0x68581511), new bK['init'](0xdb0c2e0d, 0x64f98fa7), new bK['init'](0x47b5481d, 0xbefa4fa4)]);
                        }, '_doFinalize': function () {
                            var bO = bM['_doFinalize']['call'](this);
                            return bO['sigBytes'] -= 0x10, bO;
                        }
                    });
                bJ['SHA384'] = bM['_createHelper'](bN), bJ['HmacSHA384'] = bM['_createHmacHelper'](bN);
            }(), function () {
                var bJ = ag, bK = (bM = bJ['lib'])['WordArray'], bL = bM['Hasher'], bM = bJ['algo'],
                    bN = bK['create']([0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x7, 0x4, 0xd, 0x1, 0xa, 0x6, 0xf, 0x3, 0xc, 0x0, 0x9, 0x5, 0x2, 0xe, 0xb, 0x8, 0x3, 0xa, 0xe, 0x4, 0x9, 0xf, 0x8, 0x1, 0x2, 0x7, 0x0, 0x6, 0xd, 0xb, 0x5, 0xc, 0x1, 0x9, 0xb, 0xa, 0x0, 0x8, 0xc, 0x4, 0xd, 0x3, 0x7, 0xf, 0xe, 0x5, 0x6, 0x2, 0x4, 0x0, 0x5, 0x9, 0x7, 0xc, 0x2, 0xa, 0xe, 0x1, 0x3, 0x8, 0xb, 0x6, 0xf, 0xd]),
                    bO = bK['create']([0x5, 0xe, 0x7, 0x0, 0x9, 0x2, 0xb, 0x4, 0xd, 0x6, 0xf, 0x8, 0x1, 0xa, 0x3, 0xc, 0x6, 0xb, 0x3, 0x7, 0x0, 0xd, 0x5, 0xa, 0xe, 0xf, 0x8, 0xc, 0x4, 0x9, 0x1, 0x2, 0xf, 0x5, 0x1, 0x3, 0x7, 0xe, 0x6, 0x9, 0xb, 0x8, 0xc, 0x2, 0xa, 0x0, 0x4, 0xd, 0x8, 0x6, 0x4, 0x1, 0x3, 0xb, 0xf, 0x0, 0x5, 0xc, 0x2, 0xd, 0x9, 0x7, 0xa, 0xe, 0xc, 0xf, 0xa, 0x4, 0x1, 0x5, 0x8, 0x7, 0x6, 0x2, 0xd, 0xe, 0x0, 0x3, 0x9, 0xb]),
                    bP = bK['create']([0xb, 0xe, 0xf, 0xc, 0x5, 0x8, 0x7, 0x9, 0xb, 0xd, 0xe, 0xf, 0x6, 0x7, 0x9, 0x8, 0x7, 0x6, 0x8, 0xd, 0xb, 0x9, 0x7, 0xf, 0x7, 0xc, 0xf, 0x9, 0xb, 0x7, 0xd, 0xc, 0xb, 0xd, 0x6, 0x7, 0xe, 0x9, 0xd, 0xf, 0xe, 0x8, 0xd, 0x6, 0x5, 0xc, 0x7, 0x5, 0xb, 0xc, 0xe, 0xf, 0xe, 0xf, 0x9, 0x8, 0x9, 0xe, 0x5, 0x6, 0x8, 0x6, 0x5, 0xc, 0x9, 0xf, 0x5, 0xb, 0x6, 0x8, 0xd, 0xc, 0x5, 0xc, 0xd, 0xe, 0xb, 0x8, 0x5, 0x6]),
                    bQ = bK['create']([0x8, 0x9, 0x9, 0xb, 0xd, 0xf, 0xf, 0x5, 0x7, 0x7, 0x8, 0xb, 0xe, 0xe, 0xc, 0x6, 0x9, 0xd, 0xf, 0x7, 0xc, 0x8, 0x9, 0xb, 0x7, 0x7, 0xc, 0x7, 0x6, 0xf, 0xd, 0xb, 0x9, 0x7, 0xf, 0xb, 0x8, 0x6, 0x6, 0xe, 0xc, 0xd, 0x5, 0xe, 0xd, 0xd, 0x7, 0x5, 0xf, 0x5, 0x8, 0xb, 0xe, 0xe, 0x6, 0xe, 0x6, 0x9, 0xc, 0x9, 0xc, 0x5, 0xf, 0x8, 0x8, 0x5, 0xc, 0x9, 0xc, 0x5, 0xe, 0x6, 0x8, 0xd, 0x6, 0x5, 0xf, 0xd, 0xb, 0xb]),
                    bR = bK['create']([0x0, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xa953fd4e]),
                    bS = bK['create']([0x50a28be6, 0x5c4dd124, 0x6d703ef3, 0x7a6d76e9, 0x0]);
                bM = bM['RIPEMD160'] = bL['extend']({
                    '_doReset': function () {
                        this['_hash'] = bK['create']([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
                    }, '_doProcessBlock': function (bT, bU) {
                        for (var bV = 0x0; 0x10 > bV; bV++) {
                            var bW = bT[c8 = bU + bV];
                            bT[c8] = 0xff00ff & (bW << 0x8 | bW >>> 0x18) | 0xff00ff00 & (bW << 0x18 | bW >>> 0x8);
                        }
                        var bX, bY, bZ, c0, c1, c2, c3, c4, c5, c6, c7, c8 = this['_hash']['words'],
                            c9 = (bW = bR['words'], bS['words']), ca = bN['words'], cb = bO['words'], cc = bP['words'],
                            cd = bQ['words'];
                        for (c2 = bX = c8[0x0], c3 = bY = c8[0x1], c4 = bZ = c8[0x2], c5 = c0 = c8[0x3], c6 = c1 = c8[0x4], bV = 0x0; 0x50 > bV; bV += 0x1) c7 = bX + bT[bU + ca[bV]] | 0x0, c7 = 0x10 > bV ? c7 + ((bY ^ bZ ^ c0) + bW[0x0]) : 0x20 > bV ? c7 + ((bY & bZ | ~bY & c0) + bW[0x1]) : 0x30 > bV ? c7 + (((bY | ~bZ) ^ c0) + bW[0x2]) : 0x40 > bV ? c7 + ((bY & c0 | bZ & ~c0) + bW[0x3]) : c7 + ((bY ^ (bZ | ~c0)) + bW[0x4]), c7 = (c7 = (c7 |= 0x0) << cc[bV] | c7 >>> 0x20 - cc[bV]) + c1 | 0x0, bX = c1, c1 = c0, c0 = bZ << 0xa | bZ >>> 0x16, bZ = bY, bY = c7, c7 = c2 + bT[bU + cb[bV]] | 0x0, c7 = 0x10 > bV ? c7 + ((c3 ^ (c4 | ~c5)) + c9[0x0]) : 0x20 > bV ? c7 + ((c3 & c5 | c4 & ~c5) + c9[0x1]) : 0x30 > bV ? c7 + (((c3 | ~c4) ^ c5) + c9[0x2]) : 0x40 > bV ? c7 + ((c3 & c4 | ~c3 & c5) + c9[0x3]) : c7 + ((c3 ^ c4 ^ c5) + c9[0x4]), c7 = (c7 = (c7 |= 0x0) << cd[bV] | c7 >>> 0x20 - cd[bV]) + c6 | 0x0, c2 = c6, c6 = c5, c5 = c4 << 0xa | c4 >>> 0x16, c4 = c3, c3 = c7;
                        c7 = c8[0x1] + bZ + c5 | 0x0, c8[0x1] = c8[0x2] + c0 + c6 | 0x0, c8[0x2] = c8[0x3] + c1 + c2 | 0x0, c8[0x3] = c8[0x4] + bX + c3 | 0x0, c8[0x4] = c8[0x0] + bY + c4 | 0x0, c8[0x0] = c7;
                    }, '_doFinalize': function () {
                        var bT = this['_data'], bU = bT['words'], bV = 0x8 * this['_nDataBytes'],
                            bW = 0x8 * bT['sigBytes'];
                        for (bU[bW >>> 0x5] |= 0x80 << 0x18 - bW % 0x20, bU[0xe + (bW + 0x40 >>> 0x9 << 0x4)] = 0xff00ff & (bV << 0x8 | bV >>> 0x18) | 0xff00ff00 & (bV << 0x18 | bV >>> 0x8), bT['sigBytes'] = 0x4 * (bU['length'] + 0x1), this['_process'](), bU = (bT = this['_hash'])['words'], bV = 0x0; 0x5 > bV; bV++) bW = bU[bV], bU[bV] = 0xff00ff & (bW << 0x8 | bW >>> 0x18) | 0xff00ff00 & (bW << 0x18 | bW >>> 0x8);
                        return bT;
                    }, 'clone': function () {
                        var bT = bL['clone']['call'](this);
                        return bT['_hash'] = this['_hash']['clone'](), bT;
                    }
                }), bJ['RIPEMD160'] = bL['_createHelper'](bM), bJ['HmacRIPEMD160'] = bL['_createHmacHelper'](bM);
            }(Math), function () {
                var bJ = ag, bK = bJ['enc']['Utf8'];
                bJ['algo']['HMAC'] = bJ['lib']['Base']['extend']({
                    'init': function (bL, bM) {
                        bL = this['_hasher'] = new bL['init'](), 'string' == typeof bM && (bM = bK['parse'](bM));
                        var bN = bL['blockSize'], bO = 0x4 * bN;
                        bM['sigBytes'] > bO && (bM = bL['finalize'](bM)), bM['clamp']();
                        for (var bP = this['_oKey'] = bM['clone'](), bQ = this['_iKey'] = bM['clone'](), bR = bP['words'], bS = bQ['words'], bT = 0x0; bT < bN; bT++) bR[bT] ^= 0x5c5c5c5c, bS[bT] ^= 0x36363636;
                        bP['sigBytes'] = bQ['sigBytes'] = bO, this['reset']();
                    }, 'reset': function () {
                        var bL = this['_hasher'];
                        bL['reset'](), bL['update'](this['_iKey']);
                    }, 'update': function (bL) {
                        return this['_hasher']['update'](bL), this;
                    }, 'finalize': function (bL) {
                        var bM = this['_hasher'];
                        return bL = bM['finalize'](bL), bM['reset'](), bM['finalize'](this['_oKey']['clone']()['concat'](bL));
                    }
                });
            }(), function () {
                var bJ, bK = ag, bL = (bJ = bK['lib'])['Base'], bM = bJ['WordArray'], bN = (bJ = bK['algo'])['HMAC'],
                    bO = bJ['PBKDF2'] = bL['extend']({
                        'cfg': bL['extend']({
                            'keySize': 0x4,
                            'hasher': bJ['SHA1'],
                            'iterations': 0x1
                        }), 'init': function (bP) {
                            this['cfg'] = this['cfg']['extend'](bP);
                        }, 'compute': function (bP, bQ) {
                            var bR = this['cfg'], bS = bN['create'](bR['hasher'], bP), bT = bM['create'](),
                                bU = bM['create']([0x1]), bV = bT['words'], bW = bU['words'], bX = bR['keySize'];
                            for (bR = bR['iterations']; bV['length'] < bX;) {
                                var bY = bS['update'](bQ)['finalize'](bU);
                                bS['reset']();
                                for (var bZ = bY['words'], c0 = bZ['length'], c1 = bY, c2 = 0x1; c2 < bR; c2++) {
                                    c1 = bS['finalize'](c1), bS['reset']();
                                    for (var c3 = c1['words'], c4 = 0x0; c4 < c0; c4++) bZ[c4] ^= c3[c4];
                                }
                                bT['concat'](bY), bW[0x0]++;
                            }
                            return bT['sigBytes'] = 0x4 * bX, bT;
                        }
                    });
                bK['PBKDF2'] = function (bP, bQ, bR) {
                    return bO['create'](bR)['compute'](bP, bQ);
                };
            }();
            var ah, ai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', aj = '=';

            function ak(bJ) {
                var bK, bL, bM = '';
                for (bK = 0x0; bK + 0x3 <= bJ['length']; bK += 0x3) bL = parseInt(bJ['substring'](bK, bK + 0x3), 0x10), bM += ai['charAt'](bL >> 0x6) + ai['charAt'](0x3f & bL);
                if (bK + 0x1 == bJ['length'] ? (bL = parseInt(bJ['substring'](bK, bK + 0x1), 0x10), bM += ai['charAt'](bL << 0x2)) : bK + 0x2 == bJ['length'] && (bL = parseInt(bJ['substring'](bK, bK + 0x2), 0x10), bM += ai['charAt'](bL >> 0x2) + ai['charAt']((0x3 & bL) << 0x4)), aj) for (; (0x3 & bM['length']) > 0x0;) bM += aj;
                return bM;
            }

            function al(bJ) {
                var bK, bL, bM, bN = '', bO = 0x0;
                for (bK = 0x0; bK < bJ['length'] && bJ['charAt'](bK) != aj; ++bK) (bM = ai['indexOf'](bJ['charAt'](bK))) < 0x0 || (0x0 == bO ? (bN += as(bM >> 0x2), bL = 0x3 & bM, bO = 0x1) : 0x1 == bO ? (bN += as(bL << 0x2 | bM >> 0x4), bL = 0xf & bM, bO = 0x2) : 0x2 == bO ? (bN += as(bL), bN += as(bM >> 0x2), bL = 0x3 & bM, bO = 0x3) : (bN += as(bL << 0x2 | bM >> 0x4), bN += as(0xf & bM), bO = 0x0));
                return 0x1 == bO && (bN += as(bL << 0x2)), bN;
            }

            function am(bJ, bK, bL) {
                null != bJ && ('number' == typeof bJ ? this['fromNumber'](bJ, bK, bL) : null == bK && 'string' != typeof bJ ? this['fromString'](bJ, 0x100) : this['fromString'](bJ, bK));
            }

            function an() {
                return new am(null);
            }

            'Microsoft\x20Internet\x20Explorer' == ad['appName'] ? (am['prototype']['am'] = function (bJ, bK, bL, bM, bN, bO) {
                for (var bP = 0x7fff & bK, bQ = bK >> 0xf; --bO >= 0x0;) {
                    var bR = 0x7fff & this[bJ], bS = this[bJ++] >> 0xf, bT = bQ * bR + bS * bP;
                    bN = ((bR = bP * bR + ((0x7fff & bT) << 0xf) + bL[bM] + (0x3fffffff & bN)) >>> 0x1e) + (bT >>> 0xf) + bQ * bS + (bN >>> 0x1e), bL[bM++] = 0x3fffffff & bR;
                }
                return bN;
            }, ah = 0x1e) : 'Netscape' != ad['appName'] ? (am['prototype']['am'] = function (bJ, bK, bL, bM, bN, bO) {
                for (; --bO >= 0x0;) {
                    var bP = bK * this[bJ++] + bL[bM] + bN;
                    bN = Math['floor'](bP / 0x4000000), bL[bM++] = 0x3ffffff & bP;
                }
                return bN;
            }, ah = 0x1a) : (am['prototype']['am'] = function (bJ, bK, bL, bM, bN, bO) {
                for (var bP = 0x3fff & bK, bQ = bK >> 0xe; --bO >= 0x0;) {
                    var bR = 0x3fff & this[bJ], bS = this[bJ++] >> 0xe, bT = bQ * bR + bS * bP;
                    bN = ((bR = bP * bR + ((0x3fff & bT) << 0xe) + bL[bM] + bN) >> 0x1c) + (bT >> 0xe) + bQ * bS, bL[bM++] = 0xfffffff & bR;
                }
                return bN;
            }, ah = 0x1c), am['prototype']['DB'] = ah, am['prototype']['DM'] = (0x1 << ah) - 0x1, am['prototype']['DV'] = 0x1 << ah, am['prototype']['FV'] = Math['pow'](0x2, 0x34), am['prototype']['F1'] = 0x34 - ah, am['prototype']['F2'] = 0x2 * ah - 0x34;
            var ao, ap, aq = '0123456789abcdefghijklmnopqrstuvwxyz', ar = new Array();
            for (ao = '0'['charCodeAt'](0x0), ap = 0x0; ap <= 0x9; ++ap) ar[ao++] = ap;
            for (ao = 'a'['charCodeAt'](0x0), ap = 0xa; ap < 0x24; ++ap) ar[ao++] = ap;
            for (ao = 'A'['charCodeAt'](0x0), ap = 0xa; ap < 0x24; ++ap) ar[ao++] = ap;

            function as(bJ) {
                return aq['charAt'](bJ);
            }

            function at(bJ, bK) {
                var bL = ar[bJ['charCodeAt'](bK)];
                return null == bL ? -0x1 : bL;
            }

            function au(bJ) {
                var bK = an();
                return bK['fromInt'](bJ), bK;
            }

            function av(bJ) {
                var bK, bL = 0x1;
                return 0x0 != (bK = bJ >>> 0x10) && (bJ = bK, bL += 0x10), 0x0 != (bK = bJ >> 0x8) && (bJ = bK, bL += 0x8), 0x0 != (bK = bJ >> 0x4) && (bJ = bK, bL += 0x4), 0x0 != (bK = bJ >> 0x2) && (bJ = bK, bL += 0x2), 0x0 != (bK = bJ >> 0x1) && (bJ = bK, bL += 0x1), bL;
            }

            function aw(bJ) {
                this['m'] = bJ;
            }

            function ax(bJ) {
                this['m'] = bJ, this['mp'] = bJ['invDigit'](), this['mpl'] = 0x7fff & this['mp'], this['mph'] = this['mp'] >> 0xf, this['um'] = (0x1 << bJ['DB'] - 0xf) - 0x1, this['mt2'] = 0x2 * bJ['t'];
            }

            function ay(bJ, bK) {
                return bJ & bK;
            }

            function az(bJ, bK) {
                return bJ | bK;
            }

            function aA(bJ, bK) {
                return bJ ^ bK;
            }

            function aB(bJ, bK) {
                return bJ & ~bK;
            }

            function aC(bJ) {
                if (0x0 == bJ) return -0x1;
                var bK = 0x0;
                return 0xffff & bJ || (bJ >>= 0x10, bK += 0x10), 0xff & bJ || (bJ >>= 0x8, bK += 0x8), 0xf & bJ || (bJ >>= 0x4, bK += 0x4), 0x3 & bJ || (bJ >>= 0x2, bK += 0x2), 0x1 & bJ || ++bK, bK;
            }

            function aD(bJ) {
                for (var bK = 0x0; 0x0 != bJ;) bJ &= bJ - 0x1, ++bK;
                return bK;
            }

            function aE() {
            }

            function aF(bJ) {
                return bJ;
            }

            function aG(bJ) {
                this['r2'] = an(), this['q3'] = an(), am['ONE']['dlShiftTo'](0x2 * bJ['t'], this['r2']), this['mu'] = this['r2']['divide'](bJ), this['m'] = bJ;
            }

            aw['prototype']['convert'] = function (bJ) {
                return bJ['s'] < 0x0 || bJ['compareTo'](this['m']) >= 0x0 ? bJ['mod'](this['m']) : bJ;
            }, aw['prototype']['revert'] = function (bJ) {
                return bJ;
            }, aw['prototype']['reduce'] = function (bJ) {
                bJ['divRemTo'](this['m'], null, bJ);
            }, aw['prototype']['mulTo'] = function (bJ, bK, bL) {
                bJ['multiplyTo'](bK, bL), this['reduce'](bL);
            }, aw['prototype']['sqrTo'] = function (bJ, bK) {
                bJ['squareTo'](bK), this['reduce'](bK);
            }, ax['prototype']['convert'] = function (bJ) {
                var bK = an();
                return bJ['abs']()['dlShiftTo'](this['m']['t'], bK), bK['divRemTo'](this['m'], null, bK), bJ['s'] < 0x0 && bK['compareTo'](am['ZERO']) > 0x0 && this['m']['subTo'](bK, bK), bK;
            }, ax['prototype']['revert'] = function (bJ) {
                var bK = an();
                return bJ['copyTo'](bK), this['reduce'](bK), bK;
            }, ax['prototype']['reduce'] = function (bJ) {
                for (; bJ['t'] <= this['mt2'];) bJ[bJ['t']++] = 0x0;
                for (var bK = 0x0; bK < this['m']['t']; ++bK) {
                    var bL = 0x7fff & bJ[bK],
                        bM = bL * this['mpl'] + ((bL * this['mph'] + (bJ[bK] >> 0xf) * this['mpl'] & this['um']) << 0xf) & bJ['DM'];
                    for (bJ[bL = bK + this['m']['t']] += this['m']['am'](0x0, bM, bJ, bK, 0x0, this['m']['t']); bJ[bL] >= bJ['DV'];) bJ[bL] -= bJ['DV'], bJ[++bL]++;
                }
                bJ['clamp'](), bJ['drShiftTo'](this['m']['t'], bJ), bJ['compareTo'](this['m']) >= 0x0 && bJ['subTo'](this['m'], bJ);
            }, ax['prototype']['mulTo'] = function (bJ, bK, bL) {
                bJ['multiplyTo'](bK, bL), this['reduce'](bL);
            }, ax['prototype']['sqrTo'] = function (bJ, bK) {
                bJ['squareTo'](bK), this['reduce'](bK);
            }, am['prototype']['copyTo'] = function (bJ) {
                for (var bK = this['t'] - 0x1; bK >= 0x0; --bK) bJ[bK] = this[bK];
                bJ['t'] = this['t'], bJ['s'] = this['s'];
            }, am['prototype']['fromInt'] = function (bJ) {
                this['t'] = 0x1, this['s'] = bJ < 0x0 ? -0x1 : 0x0, bJ > 0x0 ? this[0x0] = bJ : bJ < -0x1 ? this[0x0] = bJ + this['DV'] : this['t'] = 0x0;
            }, am['prototype']['fromString'] = function (bJ, bK) {
                var bL;
                if (0x10 == bK) bL = 0x4; else if (0x8 == bK) bL = 0x3; else if (0x100 == bK) bL = 0x8; else if (0x2 == bK) bL = 0x1; else if (0x20 == bK) bL = 0x5; else {
                    if (0x4 != bK) return void this['fromRadix'](bJ, bK);
                    bL = 0x2;
                }
                this['t'] = 0x0, this['s'] = 0x0;
                for (var bM = bJ['length'], bN = !0x1, bO = 0x0; --bM >= 0x0;) {
                    var bP = 0x8 == bL ? 0xff & bJ[bM] : at(bJ, bM);
                    bP < 0x0 ? '-' == bJ['charAt'](bM) && (bN = !0x0) : (bN = !0x1, 0x0 == bO ? this[this['t']++] = bP : bO + bL > this['DB'] ? (this[this['t'] - 0x1] |= (bP & (0x1 << this['DB'] - bO) - 0x1) << bO, this[this['t']++] = bP >> this['DB'] - bO) : this[this['t'] - 0x1] |= bP << bO, (bO += bL) >= this['DB'] && (bO -= this['DB']));
                }
                0x8 == bL && 0x80 & bJ[0x0] && (this['s'] = -0x1, bO > 0x0 && (this[this['t'] - 0x1] |= (0x1 << this['DB'] - bO) - 0x1 << bO)), this['clamp'](), bN && am['ZERO']['subTo'](this, this);
            }, am['prototype']['clamp'] = function () {
                for (var bJ = this['s'] & this['DM']; this['t'] > 0x0 && this[this['t'] - 0x1] == bJ;) --this['t'];
            }, am['prototype']['dlShiftTo'] = function (bJ, bK) {
                var bL;
                for (bL = this['t'] - 0x1; bL >= 0x0; --bL) bK[bL + bJ] = this[bL];
                for (bL = bJ - 0x1; bL >= 0x0; --bL) bK[bL] = 0x0;
                bK['t'] = this['t'] + bJ, bK['s'] = this['s'];
            }, am['prototype']['drShiftTo'] = function (bJ, bK) {
                for (var bL = bJ; bL < this['t']; ++bL) bK[bL - bJ] = this[bL];
                bK['t'] = Math['max'](this['t'] - bJ, 0x0), bK['s'] = this['s'];
            }, am['prototype']['lShiftTo'] = function (bJ, bK) {
                var bL, bM = bJ % this['DB'], bN = this['DB'] - bM, bO = (0x1 << bN) - 0x1,
                    bP = Math['floor'](bJ / this['DB']), bQ = this['s'] << bM & this['DM'];
                for (bL = this['t'] - 0x1; bL >= 0x0; --bL) bK[bL + bP + 0x1] = this[bL] >> bN | bQ, bQ = (this[bL] & bO) << bM;
                for (bL = bP - 0x1; bL >= 0x0; --bL) bK[bL] = 0x0;
                bK[bP] = bQ, bK['t'] = this['t'] + bP + 0x1, bK['s'] = this['s'], bK['clamp']();
            }, am['prototype']['rShiftTo'] = function (bJ, bK) {
                bK['s'] = this['s'];
                var bL = Math['floor'](bJ / this['DB']);
                if (bL >= this['t']) bK['t'] = 0x0; else {
                    var bM = bJ % this['DB'], bN = this['DB'] - bM, bO = (0x1 << bM) - 0x1;
                    bK[0x0] = this[bL] >> bM;
                    for (var bP = bL + 0x1; bP < this['t']; ++bP) bK[bP - bL - 0x1] |= (this[bP] & bO) << bN, bK[bP - bL] = this[bP] >> bM;
                    bM > 0x0 && (bK[this['t'] - bL - 0x1] |= (this['s'] & bO) << bN), bK['t'] = this['t'] - bL, bK['clamp']();
                }
            }, am['prototype']['subTo'] = function (bJ, bK) {
                for (var bL = 0x0, bM = 0x0, bN = Math['min'](bJ['t'], this['t']); bL < bN;) bM += this[bL] - bJ[bL], bK[bL++] = bM & this['DM'], bM >>= this['DB'];
                if (bJ['t'] < this['t']) {
                    for (bM -= bJ['s']; bL < this['t'];) bM += this[bL], bK[bL++] = bM & this['DM'], bM >>= this['DB'];
                    bM += this['s'];
                } else {
                    for (bM += this['s']; bL < bJ['t'];) bM -= bJ[bL], bK[bL++] = bM & this['DM'], bM >>= this['DB'];
                    bM -= bJ['s'];
                }
                bK['s'] = bM < 0x0 ? -0x1 : 0x0, bM < -0x1 ? bK[bL++] = this['DV'] + bM : bM > 0x0 && (bK[bL++] = bM), bK['t'] = bL, bK['clamp']();
            }, am['prototype']['multiplyTo'] = function (bJ, bK) {
                var bL = this['abs'](), bM = bJ['abs'](), bN = bL['t'];
                for (bK['t'] = bN + bM['t']; --bN >= 0x0;) bK[bN] = 0x0;
                for (bN = 0x0; bN < bM['t']; ++bN) bK[bN + bL['t']] = bL['am'](0x0, bM[bN], bK, bN, 0x0, bL['t']);
                bK['s'] = 0x0, bK['clamp'](), this['s'] != bJ['s'] && am['ZERO']['subTo'](bK, bK);
            }, am['prototype']['squareTo'] = function (bJ) {
                for (var bK = this['abs'](), bL = bJ['t'] = 0x2 * bK['t']; --bL >= 0x0;) bJ[bL] = 0x0;
                for (bL = 0x0; bL < bK['t'] - 0x1; ++bL) {
                    var bM = bK['am'](bL, bK[bL], bJ, 0x2 * bL, 0x0, 0x1);
                    (bJ[bL + bK['t']] += bK['am'](bL + 0x1, 0x2 * bK[bL], bJ, 0x2 * bL + 0x1, bM, bK['t'] - bL - 0x1)) >= bK['DV'] && (bJ[bL + bK['t']] -= bK['DV'], bJ[bL + bK['t'] + 0x1] = 0x1);
                }
                bJ['t'] > 0x0 && (bJ[bJ['t'] - 0x1] += bK['am'](bL, bK[bL], bJ, 0x2 * bL, 0x0, 0x1)), bJ['s'] = 0x0, bJ['clamp']();
            }, am['prototype']['divRemTo'] = function (bJ, bK, bL) {
                var bM = bJ['abs']();
                if (!(bM['t'] <= 0x0)) {
                    var bN = this['abs']();
                    if (bN['t'] < bM['t']) return null != bK && bK['fromInt'](0x0), void (null != bL && this['copyTo'](bL));
                    null == bL && (bL = an());
                    var bO = an(), bP = this['s'], bQ = bJ['s'], bR = this['DB'] - av(bM[bM['t'] - 0x1]);
                    bR > 0x0 ? (bM['lShiftTo'](bR, bO), bN['lShiftTo'](bR, bL)) : (bM['copyTo'](bO), bN['copyTo'](bL));
                    var bS = bO['t'], bT = bO[bS - 0x1];
                    if (0x0 != bT) {
                        var bU = bT * (0x1 << this['F1']) + (bS > 0x1 ? bO[bS - 0x2] >> this['F2'] : 0x0),
                            bV = this['FV'] / bU, bW = (0x1 << this['F1']) / bU, bX = 0x1 << this['F2'], bY = bL['t'],
                            bZ = bY - bS, c0 = null == bK ? an() : bK;
                        for (bO['dlShiftTo'](bZ, c0), bL['compareTo'](c0) >= 0x0 && (bL[bL['t']++] = 0x1, bL['subTo'](c0, bL)), am['ONE']['dlShiftTo'](bS, c0), c0['subTo'](bO, bO); bO['t'] < bS;) bO[bO['t']++] = 0x0;
                        for (; --bZ >= 0x0;) {
                            var c1 = bL[--bY] == bT ? this['DM'] : Math['floor'](bL[bY] * bV + (bL[bY - 0x1] + bX) * bW);
                            if ((bL[bY] += bO['am'](0x0, c1, bL, bZ, 0x0, bS)) < c1) for (bO['dlShiftTo'](bZ, c0), bL['subTo'](c0, bL); bL[bY] < --c1;) bL['subTo'](c0, bL);
                        }
                        null != bK && (bL['drShiftTo'](bS, bK), bP != bQ && am['ZERO']['subTo'](bK, bK)), bL['t'] = bS, bL['clamp'](), bR > 0x0 && bL['rShiftTo'](bR, bL), bP < 0x0 && am['ZERO']['subTo'](bL, bL);
                    }
                }
            }, am['prototype']['invDigit'] = function () {
                if (this['t'] < 0x1) return 0x0;
                var bJ = this[0x0];
                if (!(0x1 & bJ)) return 0x0;
                var bK = 0x3 & bJ;
                return (bK = (bK = (bK = (bK = bK * (0x2 - (0xf & bJ) * bK) & 0xf) * (0x2 - (0xff & bJ) * bK) & 0xff) * (0x2 - ((0xffff & bJ) * bK & 0xffff)) & 0xffff) * (0x2 - bJ * bK % this['DV']) % this['DV']) > 0x0 ? this['DV'] - bK : -bK;
            }, am['prototype']['isEven'] = function () {
                return 0x0 == (this['t'] > 0x0 ? 0x1 & this[0x0] : this['s']);
            }, am['prototype']['exp'] = function (bJ, bK) {
                if (bJ > 0xffffffff || bJ < 0x1) return am['ONE'];
                var bL = an(), bM = an(), bN = bK['convert'](this), bO = av(bJ) - 0x1;
                for (bN['copyTo'](bL); --bO >= 0x0;) if (bK['sqrTo'](bL, bM), (bJ & 0x1 << bO) > 0x0) bK['mulTo'](bM, bN, bL); else {
                    var bP = bL;
                    bL = bM, bM = bP;
                }
                return bK['revert'](bL);
            }, am['prototype']['toString'] = function (bJ) {
                if (this['s'] < 0x0) return '-' + this['negate']()['toString'](bJ);
                var bK;
                if (0x10 == bJ) bK = 0x4; else if (0x8 == bJ) bK = 0x3; else if (0x2 == bJ) bK = 0x1; else if (0x20 == bJ) bK = 0x5; else {
                    if (0x4 != bJ) return this['toRadix'](bJ);
                    bK = 0x2;
                }
                var bL, bM = (0x1 << bK) - 0x1, bN = !0x1, bO = '', bP = this['t'],
                    bQ = this['DB'] - bP * this['DB'] % bK;
                if (bP-- > 0x0) for (bQ < this['DB'] && (bL = this[bP] >> bQ) > 0x0 && (bN = !0x0, bO = as(bL)); bP >= 0x0;) bQ < bK ? (bL = (this[bP] & (0x1 << bQ) - 0x1) << bK - bQ, bL |= this[--bP] >> (bQ += this['DB'] - bK)) : (bL = this[bP] >> (bQ -= bK) & bM, bQ <= 0x0 && (bQ += this['DB'], --bP)), bL > 0x0 && (bN = !0x0), bN && (bO += as(bL));
                return bN ? bO : '0';
            }, am['prototype']['negate'] = function () {
                var bJ = an();
                return am['ZERO']['subTo'](this, bJ), bJ;
            }, am['prototype']['abs'] = function () {
                return this['s'] < 0x0 ? this['negate']() : this;
            }, am['prototype']['compareTo'] = function (bJ) {
                var bK = this['s'] - bJ['s'];
                if (0x0 != bK) return bK;
                var bL = this['t'];
                if (0x0 != (bK = bL - bJ['t'])) return this['s'] < 0x0 ? -bK : bK;
                for (; --bL >= 0x0;) if (0x0 != (bK = this[bL] - bJ[bL])) return bK;
                return 0x0;
            }, am['prototype']['bitLength'] = function () {
                return this['t'] <= 0x0 ? 0x0 : this['DB'] * (this['t'] - 0x1) + av(this[this['t'] - 0x1] ^ this['s'] & this['DM']);
            }, am['prototype']['mod'] = function (bJ) {
                var bK = an();
                return this['abs']()['divRemTo'](bJ, null, bK), this['s'] < 0x0 && bK['compareTo'](am['ZERO']) > 0x0 && bJ['subTo'](bK, bK), bK;
            }, am['prototype']['modPowInt'] = function (bJ, bK) {
                var bL;
                return bL = bJ < 0x100 || bK['isEven']() ? new aw(bK) : new ax(bK), this['exp'](bJ, bL);
            }, am['ZERO'] = au(0x0), am['ONE'] = au(0x1), aE['prototype']['convert'] = aF, aE['prototype']['revert'] = aF, aE['prototype']['mulTo'] = function (bJ, bK, bL) {
                bJ['multiplyTo'](bK, bL);
            }, aE['prototype']['sqrTo'] = function (bJ, bK) {
                bJ['squareTo'](bK);
            }, aG['prototype']['convert'] = function (bJ) {
                if (bJ['s'] < 0x0 || bJ['t'] > 0x2 * this['m']['t']) return bJ['mod'](this['m']);
                if (bJ['compareTo'](this['m']) < 0x0) return bJ;
                var bK = an();
                return bJ['copyTo'](bK), this['reduce'](bK), bK;
            }, aG['prototype']['revert'] = function (bJ) {
                return bJ;
            }, aG['prototype']['reduce'] = function (bJ) {
                for (bJ['drShiftTo'](this['m']['t'] - 0x1, this['r2']), bJ['t'] > this['m']['t'] + 0x1 && (bJ['t'] = this['m']['t'] + 0x1, bJ['clamp']()), this['mu']['multiplyUpperTo'](this['r2'], this['m']['t'] + 0x1, this['q3']), this['m']['multiplyLowerTo'](this['q3'], this['m']['t'] + 0x1, this['r2']); bJ['compareTo'](this['r2']) < 0x0;) bJ['dAddOffset'](0x1, this['m']['t'] + 0x1);
                for (bJ['subTo'](this['r2'], bJ); bJ['compareTo'](this['m']) >= 0x0;) bJ['subTo'](this['m'], bJ);
            }, aG['prototype']['mulTo'] = function (bJ, bK, bL) {
                bJ['multiplyTo'](bK, bL), this['reduce'](bL);
            }, aG['prototype']['sqrTo'] = function (bJ, bK) {
                bJ['squareTo'](bK), this['reduce'](bK);
            };
            var aH = [0x2, 0x3, 0x5, 0x7, 0xb, 0xd, 0x11, 0x13, 0x17, 0x1d, 0x1f, 0x25, 0x29, 0x2b, 0x2f, 0x35, 0x3b, 0x3d, 0x43, 0x47, 0x49, 0x4f, 0x53, 0x59, 0x61, 0x65, 0x67, 0x6b, 0x6d, 0x71, 0x7f, 0x83, 0x89, 0x8b, 0x95, 0x97, 0x9d, 0xa3, 0xa7, 0xad, 0xb3, 0xb5, 0xbf, 0xc1, 0xc5, 0xc7, 0xd3, 0xdf, 0xe3, 0xe5, 0xe9, 0xef, 0xf1, 0xfb, 0x101, 0x107, 0x10d, 0x10f, 0x115, 0x119, 0x11b, 0x125, 0x133, 0x137, 0x139, 0x13d, 0x14b, 0x151, 0x15b, 0x15d, 0x161, 0x167, 0x16f, 0x175, 0x17b, 0x17f, 0x185, 0x18d, 0x191, 0x199, 0x1a3, 0x1a5, 0x1af, 0x1b1, 0x1b7, 0x1bb, 0x1c1, 0x1c9, 0x1cd, 0x1cf, 0x1d3, 0x1df, 0x1e7, 0x1eb, 0x1f3, 0x1f7, 0x1fd, 0x209, 0x20b, 0x21d, 0x223, 0x22d, 0x233, 0x239, 0x23b, 0x241, 0x24b, 0x251, 0x257, 0x259, 0x25f, 0x265, 0x269, 0x26b, 0x277, 0x281, 0x283, 0x287, 0x28d, 0x293, 0x295, 0x2a1, 0x2a5, 0x2ab, 0x2b3, 0x2bd, 0x2c5, 0x2cf, 0x2d7, 0x2dd, 0x2e3, 0x2e7, 0x2ef, 0x2f5, 0x2f9, 0x301, 0x305, 0x313, 0x31d, 0x329, 0x32b, 0x335, 0x337, 0x33b, 0x33d, 0x347, 0x355, 0x359, 0x35b, 0x35f, 0x36d, 0x371, 0x373, 0x377, 0x38b, 0x38f, 0x397, 0x3a1, 0x3a9, 0x3ad, 0x3b3, 0x3b9, 0x3c7, 0x3cb, 0x3d1, 0x3d7, 0x3df, 0x3e5],
                aI = (0x1 << 0x1a) / aH[aH['length'] - 0x1];

            function aJ() {
                this['i'] = 0x0, this['j'] = 0x0, this['S'] = new Array();
            }

            am['prototype']['chunkSize'] = function (bJ) {
                return Math['floor'](Math['LN2'] * this['DB'] / Math['log'](bJ));
            }, am['prototype']['toRadix'] = function (bJ) {
                if (null == bJ && (bJ = 0xa), 0x0 == this['signum']() || bJ < 0x2 || bJ > 0x24) return '0';
                var bK = this['chunkSize'](bJ), bL = Math['pow'](bJ, bK), bM = au(bL), bN = an(), bO = an(), bP = '';
                for (this['divRemTo'](bM, bN, bO); bN['signum']() > 0x0;) bP = (bL + bO['intValue']())['toString'](bJ)['substr'](0x1) + bP, bN['divRemTo'](bM, bN, bO);
                return bO['intValue']()['toString'](bJ) + bP;
            }, am['prototype']['fromRadix'] = function (bJ, bK) {
                this['fromInt'](0x0), null == bK && (bK = 0xa);
                for (var bL = this['chunkSize'](bK), bM = Math['pow'](bK, bL), bN = !0x1, bO = 0x0, bP = 0x0, bQ = 0x0; bQ < bJ['length']; ++bQ) {
                    var bR = at(bJ, bQ);
                    bR < 0x0 ? '-' == bJ['charAt'](bQ) && 0x0 == this['signum']() && (bN = !0x0) : (bP = bK * bP + bR, ++bO >= bL && (this['dMultiply'](bM), this['dAddOffset'](bP, 0x0), bO = 0x0, bP = 0x0));
                }
                bO > 0x0 && (this['dMultiply'](Math['pow'](bK, bO)), this['dAddOffset'](bP, 0x0)), bN && am['ZERO']['subTo'](this, this);
            }, am['prototype']['fromNumber'] = function (bJ, bK, bL) {
                if ('number' == typeof bK) if (bJ < 0x2) this['fromInt'](0x1); else for (this['fromNumber'](bJ, bL), this['testBit'](bJ - 0x1) || this['bitwiseTo'](am['ONE']['shiftLeft'](bJ - 0x1), az, this), this['isEven']() && this['dAddOffset'](0x1, 0x0); !this['isProbablePrime'](bK);) this['dAddOffset'](0x2, 0x0), this['bitLength']() > bJ && this['subTo'](am['ONE']['shiftLeft'](bJ - 0x1), this); else {
                    var bM = new Array(), bN = 0x7 & bJ;
                    bM['length'] = 0x1 + (bJ >> 0x3), bK['nextBytes'](bM), bN > 0x0 ? bM[0x0] &= (0x1 << bN) - 0x1 : bM[0x0] = 0x0, this['fromString'](bM, 0x100);
                }
            }, am['prototype']['bitwiseTo'] = function (bJ, bK, bL) {
                var bM, bN, bO = Math['min'](bJ['t'], this['t']);
                for (bM = 0x0; bM < bO; ++bM) bL[bM] = bK(this[bM], bJ[bM]);
                if (bJ['t'] < this['t']) {
                    for (bN = bJ['s'] & this['DM'], bM = bO; bM < this['t']; ++bM) bL[bM] = bK(this[bM], bN);
                    bL['t'] = this['t'];
                } else {
                    for (bN = this['s'] & this['DM'], bM = bO; bM < bJ['t']; ++bM) bL[bM] = bK(bN, bJ[bM]);
                    bL['t'] = bJ['t'];
                }
                bL['s'] = bK(this['s'], bJ['s']), bL['clamp']();
            }, am['prototype']['changeBit'] = function (bJ, bK) {
                var bL = am['ONE']['shiftLeft'](bJ);
                return this['bitwiseTo'](bL, bK, bL), bL;
            }, am['prototype']['addTo'] = function (bJ, bK) {
                for (var bL = 0x0, bM = 0x0, bN = Math['min'](bJ['t'], this['t']); bL < bN;) bM += this[bL] + bJ[bL], bK[bL++] = bM & this['DM'], bM >>= this['DB'];
                if (bJ['t'] < this['t']) {
                    for (bM += bJ['s']; bL < this['t'];) bM += this[bL], bK[bL++] = bM & this['DM'], bM >>= this['DB'];
                    bM += this['s'];
                } else {
                    for (bM += this['s']; bL < bJ['t'];) bM += bJ[bL], bK[bL++] = bM & this['DM'], bM >>= this['DB'];
                    bM += bJ['s'];
                }
                bK['s'] = bM < 0x0 ? -0x1 : 0x0, bM > 0x0 ? bK[bL++] = bM : bM < -0x1 && (bK[bL++] = this['DV'] + bM), bK['t'] = bL, bK['clamp']();
            }, am['prototype']['dMultiply'] = function (bJ) {
                this[this['t']] = this['am'](0x0, bJ - 0x1, this, 0x0, 0x0, this['t']), ++this['t'], this['clamp']();
            }, am['prototype']['dAddOffset'] = function (bJ, bK) {
                if (0x0 != bJ) {
                    for (; this['t'] <= bK;) this[this['t']++] = 0x0;
                    for (this[bK] += bJ; this[bK] >= this['DV'];) this[bK] -= this['DV'], ++bK >= this['t'] && (this[this['t']++] = 0x0), ++this[bK];
                }
            }, am['prototype']['multiplyLowerTo'] = function (bJ, bK, bL) {
                var bM, bN = Math['min'](this['t'] + bJ['t'], bK);
                for (bL['s'] = 0x0, bL['t'] = bN; bN > 0x0;) bL[--bN] = 0x0;
                for (bM = bL['t'] - this['t']; bN < bM; ++bN) bL[bN + this['t']] = this['am'](0x0, bJ[bN], bL, bN, 0x0, this['t']);
                for (bM = Math['min'](bJ['t'], bK); bN < bM; ++bN) this['am'](0x0, bJ[bN], bL, bN, 0x0, bK - bN);
                bL['clamp']();
            }, am['prototype']['multiplyUpperTo'] = function (bJ, bK, bL) {
                --bK;
                var bM = bL['t'] = this['t'] + bJ['t'] - bK;
                for (bL['s'] = 0x0; --bM >= 0x0;) bL[bM] = 0x0;
                for (bM = Math['max'](bK - this['t'], 0x0); bM < bJ['t']; ++bM) bL[this['t'] + bM - bK] = this['am'](bK - bM, bJ[bM], bL, 0x0, 0x0, this['t'] + bM - bK);
                bL['clamp'](), bL['drShiftTo'](0x1, bL);
            }, am['prototype']['modInt'] = function (bJ) {
                if (bJ <= 0x0) return 0x0;
                var bK = this['DV'] % bJ, bL = this['s'] < 0x0 ? bJ - 0x1 : 0x0;
                if (this['t'] > 0x0) if (0x0 == bK) bL = this[0x0] % bJ; else for (var bM = this['t'] - 0x1; bM >= 0x0; --bM) bL = (bK * bL + this[bM]) % bJ;
                return bL;
            }, am['prototype']['millerRabin'] = function (bJ) {
                var bK = this['subtract'](am['ONE']), bL = bK['getLowestSetBit']();
                if (bL <= 0x0) return !0x1;
                var bM = bK['shiftRight'](bL);
                (bJ = bJ + 0x1 >> 0x1) > aH['length'] && (bJ = aH['length']);
                for (var bN = an(), bO = 0x0; bO < bJ; ++bO) {
                    bN['fromInt'](aH[Math['floor'](Math['random']() * aH['length'])]);
                    var bP = bN['modPow'](bM, this);
                    if (0x0 != bP['compareTo'](am['ONE']) && 0x0 != bP['compareTo'](bK)) {
                        for (var bQ = 0x1; bQ++ < bL && 0x0 != bP['compareTo'](bK);) if (0x0 == (bP = bP['modPowInt'](0x2, this))['compareTo'](am['ONE'])) return !0x1;
                        if (0x0 != bP['compareTo'](bK)) return !0x1;
                    }
                }
                return !0x0;
            }, am['prototype']['clone'] = function () {
                var bJ = an();
                return this['copyTo'](bJ), bJ;
            }, am['prototype']['intValue'] = function () {
                if (this['s'] < 0x0) {
                    if (0x1 == this['t']) return this[0x0] - this['DV'];
                    if (0x0 == this['t']) return -0x1;
                } else {
                    if (0x1 == this['t']) return this[0x0];
                    if (0x0 == this['t']) return 0x0;
                }
                return (this[0x1] & (0x1 << 0x20 - this['DB']) - 0x1) << this['DB'] | this[0x0];
            }, am['prototype']['byteValue'] = function () {
                return 0x0 == this['t'] ? this['s'] : this[0x0] << 0x18 >> 0x18;
            }, am['prototype']['shortValue'] = function () {
                return 0x0 == this['t'] ? this['s'] : this[0x0] << 0x10 >> 0x10;
            }, am['prototype']['signum'] = function () {
                return this['s'] < 0x0 ? -0x1 : this['t'] <= 0x0 || 0x1 == this['t'] && this[0x0] <= 0x0 ? 0x0 : 0x1;
            }, am['prototype']['toByteArray'] = function () {
                var bJ = this['t'], bK = new Array();
                bK[0x0] = this['s'];
                var bL, bM = this['DB'] - bJ * this['DB'] % 0x8, bN = 0x0;
                if (bJ-- > 0x0) for (bM < this['DB'] && (bL = this[bJ] >> bM) != (this['s'] & this['DM']) >> bM && (bK[bN++] = bL | this['s'] << this['DB'] - bM); bJ >= 0x0;) bM < 0x8 ? (bL = (this[bJ] & (0x1 << bM) - 0x1) << 0x8 - bM, bL |= this[--bJ] >> (bM += this['DB'] - 0x8)) : (bL = this[bJ] >> (bM -= 0x8) & 0xff, bM <= 0x0 && (bM += this['DB'], --bJ)), 0x80 & bL && (bL |= -0x100), 0x0 == bN && (0x80 & this['s']) != (0x80 & bL) && ++bN, (bN > 0x0 || bL != this['s']) && (bK[bN++] = bL);
                return bK;
            }, am['prototype']['equals'] = function (bJ) {
                return 0x0 == this['compareTo'](bJ);
            }, am['prototype']['min'] = function (bJ) {
                return this['compareTo'](bJ) < 0x0 ? this : bJ;
            }, am['prototype']['max'] = function (bJ) {
                return this['compareTo'](bJ) > 0x0 ? this : bJ;
            }, am['prototype']['and'] = function (bJ) {
                var bK = an();
                return this['bitwiseTo'](bJ, ay, bK), bK;
            }, am['prototype']['or'] = function (bJ) {
                var bK = an();
                return this['bitwiseTo'](bJ, az, bK), bK;
            }, am['prototype']['xor'] = function (bJ) {
                var bK = an();
                return this['bitwiseTo'](bJ, aA, bK), bK;
            }, am['prototype']['andNot'] = function (bJ) {
                var bK = an();
                return this['bitwiseTo'](bJ, aB, bK), bK;
            }, am['prototype']['not'] = function () {
                for (var bJ = an(), bK = 0x0; bK < this['t']; ++bK) bJ[bK] = this['DM'] & ~this[bK];
                return bJ['t'] = this['t'], bJ['s'] = ~this['s'], bJ;
            }, am['prototype']['shiftLeft'] = function (bJ) {
                var bK = an();
                return bJ < 0x0 ? this['rShiftTo'](-bJ, bK) : this['lShiftTo'](bJ, bK), bK;
            }, am['prototype']['shiftRight'] = function (bJ) {
                var bK = an();
                return bJ < 0x0 ? this['lShiftTo'](-bJ, bK) : this['rShiftTo'](bJ, bK), bK;
            }, am['prototype']['getLowestSetBit'] = function () {
                for (var bJ = 0x0; bJ < this['t']; ++bJ) if (0x0 != this[bJ]) return bJ * this['DB'] + aC(this[bJ]);
                return this['s'] < 0x0 ? this['t'] * this['DB'] : -0x1;
            }, am['prototype']['bitCount'] = function () {
                for (var bJ = 0x0, bK = this['s'] & this['DM'], bL = 0x0; bL < this['t']; ++bL) bJ += aD(this[bL] ^ bK);
                return bJ;
            }, am['prototype']['testBit'] = function (bJ) {
                var bK = Math['floor'](bJ / this['DB']);
                return bK >= this['t'] ? 0x0 != this['s'] : !!(this[bK] & 0x1 << bJ % this['DB']);
            }, am['prototype']['setBit'] = function (bJ) {
                return this['changeBit'](bJ, az);
            }, am['prototype']['clearBit'] = function (bJ) {
                return this['changeBit'](bJ, aB);
            }, am['prototype']['flipBit'] = function (bJ) {
                return this['changeBit'](bJ, aA);
            }, am['prototype']['add'] = function (bJ) {
                var bK = an();
                return this['addTo'](bJ, bK), bK;
            }, am['prototype']['subtract'] = function (bJ) {
                var bK = an();
                return this['subTo'](bJ, bK), bK;
            }, am['prototype']['multiply'] = function (bJ) {
                var bK = an();
                return this['multiplyTo'](bJ, bK), bK;
            }, am['prototype']['divide'] = function (bJ) {
                var bK = an();
                return this['divRemTo'](bJ, bK, null), bK;
            }, am['prototype']['remainder'] = function (bJ) {
                var bK = an();
                return this['divRemTo'](bJ, null, bK), bK;
            }, am['prototype']['divideAndRemainder'] = function (bJ) {
                var bK = an(), bL = an();
                return this['divRemTo'](bJ, bK, bL), new Array(bK, bL);
            }, am['prototype']['modPow'] = function (bJ, bK) {
                var bL, bM, bN = bJ['bitLength'](), bO = au(0x1);
                if (bN <= 0x0) return bO;
                bL = bN < 0x12 ? 0x1 : bN < 0x30 ? 0x3 : bN < 0x90 ? 0x4 : bN < 0x300 ? 0x5 : 0x6, bM = bN < 0x8 ? new aw(bK) : bK['isEven']() ? new aG(bK) : new ax(bK);
                var bP = new Array(), bQ = 0x3, bR = bL - 0x1, bS = (0x1 << bL) - 0x1;
                if (bP[0x1] = bM['convert'](this), bL > 0x1) {
                    var bT = an();
                    for (bM['sqrTo'](bP[0x1], bT); bQ <= bS;) bP[bQ] = an(), bM['mulTo'](bT, bP[bQ - 0x2], bP[bQ]), bQ += 0x2;
                }
                var bU, bV, bW = bJ['t'] - 0x1, bX = !0x0, bY = an();
                for (bN = av(bJ[bW]) - 0x1; bW >= 0x0;) {
                    for (bN >= bR ? bU = bJ[bW] >> bN - bR & bS : (bU = (bJ[bW] & (0x1 << bN + 0x1) - 0x1) << bR - bN, bW > 0x0 && (bU |= bJ[bW - 0x1] >> this['DB'] + bN - bR)), bQ = bL; !(0x1 & bU);) bU >>= 0x1, --bQ;
                    if ((bN -= bQ) < 0x0 && (bN += this['DB'], --bW), bX) bP[bU]['copyTo'](bO), bX = !0x1; else {
                        for (; bQ > 0x1;) bM['sqrTo'](bO, bY), bM['sqrTo'](bY, bO), bQ -= 0x2;
                        bQ > 0x0 ? bM['sqrTo'](bO, bY) : (bV = bO, bO = bY, bY = bV), bM['mulTo'](bY, bP[bU], bO);
                    }
                    for (; bW >= 0x0 && !(bJ[bW] & 0x1 << bN);) bM['sqrTo'](bO, bY), bV = bO, bO = bY, bY = bV, --bN < 0x0 && (bN = this['DB'] - 0x1, --bW);
                }
                return bM['revert'](bO);
            }, am['prototype']['modInverse'] = function (bJ) {
                var bK = bJ['isEven']();
                if (this['isEven']() && bK || 0x0 == bJ['signum']()) return am['ZERO'];
                for (var bL = bJ['clone'](), bM = this['clone'](), bN = au(0x1), bO = au(0x0), bP = au(0x0), bQ = au(0x1); 0x0 != bL['signum']();) {
                    for (; bL['isEven']();) bL['rShiftTo'](0x1, bL), bK ? (bN['isEven']() && bO['isEven']() || (bN['addTo'](this, bN), bO['subTo'](bJ, bO)), bN['rShiftTo'](0x1, bN)) : bO['isEven']() || bO['subTo'](bJ, bO), bO['rShiftTo'](0x1, bO);
                    for (; bM['isEven']();) bM['rShiftTo'](0x1, bM), bK ? (bP['isEven']() && bQ['isEven']() || (bP['addTo'](this, bP), bQ['subTo'](bJ, bQ)), bP['rShiftTo'](0x1, bP)) : bQ['isEven']() || bQ['subTo'](bJ, bQ), bQ['rShiftTo'](0x1, bQ);
                    bL['compareTo'](bM) >= 0x0 ? (bL['subTo'](bM, bL), bK && bN['subTo'](bP, bN), bO['subTo'](bQ, bO)) : (bM['subTo'](bL, bM), bK && bP['subTo'](bN, bP), bQ['subTo'](bO, bQ));
                }
                return 0x0 != bM['compareTo'](am['ONE']) ? am['ZERO'] : bQ['compareTo'](bJ) >= 0x0 ? bQ['subtract'](bJ) : bQ['signum']() < 0x0 ? (bQ['addTo'](bJ, bQ), bQ['signum']() < 0x0 ? bQ['add'](bJ) : bQ) : bQ;
            }, am['prototype']['pow'] = function (bJ) {
                return this['exp'](bJ, new aE());
            }, am['prototype']['gcd'] = function (bJ) {
                var bK = this['s'] < 0x0 ? this['negate']() : this['clone'](),
                    bL = bJ['s'] < 0x0 ? bJ['negate']() : bJ['clone']();
                if (bK['compareTo'](bL) < 0x0) {
                    var bM = bK;
                    bK = bL, bL = bM;
                }
                var bN = bK['getLowestSetBit'](), bO = bL['getLowestSetBit']();
                if (bO < 0x0) return bK;
                for (bN < bO && (bO = bN), bO > 0x0 && (bK['rShiftTo'](bO, bK), bL['rShiftTo'](bO, bL)); bK['signum']() > 0x0;) (bN = bK['getLowestSetBit']()) > 0x0 && bK['rShiftTo'](bN, bK), (bN = bL['getLowestSetBit']()) > 0x0 && bL['rShiftTo'](bN, bL), bK['compareTo'](bL) >= 0x0 ? (bK['subTo'](bL, bK), bK['rShiftTo'](0x1, bK)) : (bL['subTo'](bK, bL), bL['rShiftTo'](0x1, bL));
                return bO > 0x0 && bL['lShiftTo'](bO, bL), bL;
            }, am['prototype']['isProbablePrime'] = function (bJ) {
                var bK, bL = this['abs']();
                if (0x1 == bL['t'] && bL[0x0] <= aH[aH['length'] - 0x1]) {
                    for (bK = 0x0; bK < aH['length']; ++bK) if (bL[0x0] == aH[bK]) return !0x0;
                    return !0x1;
                }
                if (bL['isEven']()) return !0x1;
                for (bK = 0x1; bK < aH['length'];) {
                    for (var bM = aH[bK], bN = bK + 0x1; bN < aH['length'] && bM < aI;) bM *= aH[bN++];
                    for (bM = bL['modInt'](bM); bK < bN;) if (bM % aH[bK++] == 0x0) return !0x1;
                }
                return bL['millerRabin'](bJ);
            }, am['prototype']['square'] = function () {
                var bJ = an();
                return this['squareTo'](bJ), bJ;
            }, aJ['prototype']['init'] = function (bJ) {
                var bK, bL, bM;
                for (bK = 0x0; bK < 0x100; ++bK) this['S'][bK] = bK;
                for (bL = 0x0, bK = 0x0; bK < 0x100; ++bK) bL = bL + this['S'][bK] + bJ[bK % bJ['length']] & 0xff, bM = this['S'][bK], this['S'][bK] = this['S'][bL], this['S'][bL] = bM;
                this['i'] = 0x0, this['j'] = 0x0;
            }, aJ['prototype']['next'] = function () {
                var bJ;
                return this['i'] = this['i'] + 0x1 & 0xff, this['j'] = this['j'] + this['S'][this['i']] & 0xff, bJ = this['S'][this['i']], this['S'][this['i']] = this['S'][this['j']], this['S'][this['j']] = bJ, this['S'][bJ + this['S'][this['i']] & 0xff];
            };
            var aK, aL, aM, aN = 0x100;

            function aO() {
                !function (bJ) {
                    aL[aM++] ^= 0xff & bJ, aL[aM++] ^= bJ >> 0x8 & 0xff, aL[aM++] ^= bJ >> 0x10 & 0xff, aL[aM++] ^= bJ >> 0x18 & 0xff, aM >= aN && (aM -= aN);
                }(new Date()['getTime']());
            }

            if (null == aL) {
                var aP;
                if (aL = new Array(), aM = 0x0, void 0x0 !== af && (void 0x0 !== af['crypto'] || void 0x0 !== af['msCrypto'])) {
                    var aQ = af['crypto'] || af['msCrypto'];
                    if (aQ['getRandomValues']) {
                        var aR = new Uint8Array(0x20);
                        for (aQ['getRandomValues'](aR), aP = 0x0; aP < 0x20; ++aP) aL[aM++] = aR[aP];
                    } else if ('Netscape' == ad['appName'] && ad['appVersion'] < '5') {
                        var aS = af['crypto']['random'](0x20);
                        for (aP = 0x0; aP < aS['length']; ++aP) aL[aM++] = 0xff & aS['charCodeAt'](aP);
                    }
                }
                for (; aM < aN;) aP = Math['floor'](0x10000 * Math['random']()), aL[aM++] = aP >>> 0x8, aL[aM++] = 0xff & aP;
                aM = 0x0, aO();
            }

            function aT() {
                if (null == aK) {
                    for (aO(), (aK = new aJ())['init'](aL), aM = 0x0; aM < aL['length']; ++aM) aL[aM] = 0x0;
                    aM = 0x0;
                }
                return aK['next']();
            }

            function aU() {
            }

            function aV(bJ, bK) {
                return new am(bJ, bK);
            }

            function aW(bJ, bK, bL) {
                for (var bM = '', bN = 0x0; bM['length'] < bK;) bM += bL(String['fromCharCode']['apply'](String, bJ['concat']([(0xff000000 & bN) >> 0x18, (0xff0000 & bN) >> 0x10, (0xff00 & bN) >> 0x8, 0xff & bN]))), bN += 0x1;
                return bM;
            }

            function aX() {
                this['n'] = null, this['e'] = 0x0, this['d'] = null, this['p'] = null, this['q'] = null, this['dmp1'] = null, this['dmq1'] = null, this['coeff'] = null;
            }

            function aY(bJ, bK, bL) {
                for (var bM = '', bN = 0x0; bM['length'] < bK;) bM += bL(bJ + String['fromCharCode']['apply'](String, [(0xff000000 & bN) >> 0x18, (0xff0000 & bN) >> 0x10, (0xff00 & bN) >> 0x8, 0xff & bN])), bN += 0x1;
                return bM;
            }

            function aZ(bJ, bK) {
                this['x'] = bK, this['q'] = bJ;
            }

            function b0(bJ, bK, bL, bM) {
                this['curve'] = bJ, this['x'] = bK, this['y'] = bL, this['z'] = null == bM ? am['ONE'] : bM, this['zinv'] = null;
            }

            function b1(bJ, bK, bL) {
                this['q'] = bJ, this['a'] = this['fromBigInteger'](bK), this['b'] = this['fromBigInteger'](bL), this['infinity'] = new b0(this, null, null);
            }

            aU['prototype']['nextBytes'] = function (bJ) {
                var bK;
                for (bK = 0x0; bK < bJ['length']; ++bK) bJ[bK] = aT();
            }, aX['prototype']['doPublic'] = function (bJ) {
                return bJ['modPowInt'](this['e'], this['n']);
            }, aX['prototype']['setPublic'] = function (bJ, bK) {
                if (this['isPublic'] = !0x0, this['isPrivate'] = !0x1, 'string' != typeof bJ) this['n'] = bJ, this['e'] = bK; else {
                    if (!(null != bJ && null != bK && bJ['length'] > 0x0 && bK['length'] > 0x0)) throw 'Invalid\x20RSA\x20public\x20key';
                    this['n'] = aV(bJ, 0x10), this['e'] = parseInt(bK, 0x10);
                }
            }, aX['prototype']['encrypt'] = function (bJ) {
                var bK = function (bN, bO) {
                    if (bO < bN['length'] + 0xb) throw 'Message\x20too\x20long\x20for\x20RSA';
                    for (var bP = new Array(), bQ = bN['length'] - 0x1; bQ >= 0x0 && bO > 0x0;) {
                        var bR = bN['charCodeAt'](bQ--);
                        bR < 0x80 ? bP[--bO] = bR : bR > 0x7f && bR < 0x800 ? (bP[--bO] = 0x3f & bR | 0x80, bP[--bO] = bR >> 0x6 | 0xc0) : (bP[--bO] = 0x3f & bR | 0x80, bP[--bO] = bR >> 0x6 & 0x3f | 0x80, bP[--bO] = bR >> 0xc | 0xe0);
                    }
                    bP[--bO] = 0x0;
                    for (var bS = new aU(), bT = new Array(); bO > 0x2;) {
                        for (bT[0x0] = 0x0; 0x0 == bT[0x0];) bS['nextBytes'](bT);
                        bP[--bO] = bT[0x0];
                    }
                    return bP[--bO] = 0x2, bP[--bO] = 0x0, new am(bP);
                }(bJ, this['n']['bitLength']() + 0x7 >> 0x3);
                if (null == bK) return null;
                var bL = this['doPublic'](bK);
                if (null == bL) return null;
                var bM = bL['toString'](0x10);
                return 0x1 & bM['length'] ? '0' + bM : bM;
            }, aX['prototype']['encryptOAEP'] = function (bJ, bK, bL) {
                var bM = function (bP, bQ, bR, bS) {
                    var bT = b3['crypto']['MessageDigest'], bU = b3['crypto']['Util'], bV = null;
                    if (bR || (bR = 'sha1'), 'string' == typeof bR && (bV = bT['getCanonicalAlgName'](bR), bS = bT['getHashLength'](bV), bR = function (c4) {
                        return bh(bU['hashHex'](bi(c4), bV));
                    }), bP['length'] + 0x2 * bS + 0x2 > bQ) throw 'Message\x20too\x20long\x20for\x20RSA';
                    var bW, bX = '';
                    for (bW = 0x0; bW < bQ - bP['length'] - 0x2 * bS - 0x2; bW += 0x1) bX += '