
   
                const textEl = document.getElementById('wj')
            const text1 =  '在这里祝大家跨年快乐啊!!! 新的一年里愿大家天天开心，年年有今日，岁岁有今朝!  好啦，接下来就是我的技术总结了，这个网页是我自己一个人找资料和设计的，很拉跨，哈哈哈，这是我心血来潮距离跨年还有二十天的时间做的，这是我做过的第二个跨年网页，对比上一次，我自认为进步是有的，不论是排版还得技术层面，我也是通过自己最大努力去实现，想要呈现给大家看到的画面。遗憾也是有的，毕竟我目前能力摆在这，有些我设计的画面还是因为技术太菜没能实现，中途也是想过放弃，以我现在的实力，拼尽全力也只能这样，然而对比网上的作品可以说是小巫见大巫了，但是转念一想，做出这样一个作品对于我来说也是有一定意义的，对于大家，或许能给大家带来快乐，于是咬咬牙坚持做了下来。其实这份网页就像是我今年的一个缩影吧，今年我参加了大合唱，打了暑假工，参加了省中小学艺术节和元旦汇演。其实有很多事，我中间都想过要放弃，可是放弃很容易，逃避很轻松，但唯有坚持下去才有机会获得成功，收获成长。这一年也是收获了一些成绩哈，大合唱一等奖，暑假工赚到了人生的第一桶金，靠自己全款买了属于自己的一把电吉他🎸，省艺术家一等奖。今年有许多开心幸福的瞬间，也有些许遗憾... 但是都过去了不是嘛，过往皆序章，新的一年里再次祝大家新年快乐! '
            var idx1 = 1
            writeText1()
            function writeText1() {
                textEl.innerText = text1.slice(0, idx1)
                idx1++
                if(idx1 > text1.length) {
                    clearTimeout(js)
                }
                js=setTimeout(writeText1,100)
            } 