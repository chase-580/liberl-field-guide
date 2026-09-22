window.GUIDE_DATA = (() => {
  const bi = (en, zh) => ({ en, zh });
  const q = (id, ch, type, bp, bonus, title, zhTitle, open, zhOpen, expire, zhExpire, route, zhRoute) => ({
    id, ch, type, bp, bonus, title: bi(title, zhTitle), open: bi(open, zhOpen), expire: bi(expire, zhExpire), route: bi(route, zhRoute)
  });

  const chapters = [
    { id: "prologue", n: "00", title: bi("Prologue · A Father's Love, A New Beginning", "序章 · 父亲、启程"), region: bi("Rolent", "洛连特"), bp: 53, cumulative: 53, chests: 16 },
    { id: "chapter1", n: "01", title: bi("Chapter 1 · Disappearance of the Linde", "第一章 · 消失的定期船"), region: bi("Bose", "柏斯"), bp: 58, cumulative: 111, chests: 21 },
    { id: "chapter2", n: "02", title: bi("Chapter 2 · Madrigal of the White Magnolia", "第二章 · 白花恋诗"), region: bi("Ruan", "卢安"), bp: 87, cumulative: 198, chests: 25 },
    { id: "chapter3", n: "03", title: bi("Chapter 3 · The Black Orbment", "第三章 · 黑色导力器"), region: bi("Zeiss", "蔡斯"), bp: 92, cumulative: 290, chests: 43 },
    { id: "final", n: "04", title: bi("Final Chapter · Turmoil in the Royal City", "终章 · 王都撩乱"), region: bi("Grancel", "格兰赛尔"), bp: 78, cumulative: 368, chests: 59 }
  ];

  const walkthrough = {
    prologue: [
      bi("Pass the Bracer exam in the Rolent sewers. Open both tutorial chests and report to Aina.", "完成洛连特地下水路的游击士考试，开启两个教学宝箱并向爱娜报告。"),
      bi("After the rescue, speak to Rhett for Carnelia 1 and buy Liberl News 1. Clear the early Rolent board before the farm.", "救出孩子后向雷特取得《红耀石》1，并购买《利贝尔通讯》1；前往农场前清理首批委托。"),
      bi("Investigate Perzel Farm at night. First-attempt stealth earns the full bonus BP.", "夜间调查帕赛尔农场；第一次潜入成功可取得全部奖励 BP。"),
      bi("Sweep Milch Main Road, Malga Trail, Mistwald and Verte Bridge before entering Mayor Klaus's house.", "进入克劳斯市长家前，清理米尔西街道、玛鲁加山道、神秘森林和威尔特桥。"),
      bi("Complete Mayor Klaus's mine request, then escort Nial and Dorothy through Esmelas Tower.", "完成市长的矿山委托，再护送奈尔与朵洛希登上艾斯梅拉斯塔。"),
      bi("Solve the mayoral theft. Correct deductions and listening before the last fight secure +5 BP.", "侦破市长官邸失窃案；正确推理并在最终战前先听对话，可取得 +5 BP。"),
      bi("Before crossing Verte Bridge, accept Letter Carrier and finish every Rolent collectible. Rolent then locks for the rest of the game.", "跨过威尔特桥前接下“送亲笔信”并完成洛连特收集；之后本作无法返回洛连特。")
    ],
    chapter1: [
      bi("At Verte Bridge, talk to the patrolling soldier for Carnelia 2 before crossing into Bose.", "在威尔特桥过境前与巡逻士兵交谈，取得《红耀石》2。"),
      bi("Register at Bose Guild, deliver the Rolent letter, then clear the East/West Bose and Ravennue wanted monsters.", "在柏斯协会登记、交付洛连特来信，并清理东西柏斯街道与拉文努村通缉魔兽。"),
      bi("Visit Haken Gate during Missing Airliner. After Olivier's scenes, speak to Marco for Carnelia 3.", "调查定期船期间前往哈肯大门；奥利维尔事件后向马尔科取得《红耀石》3。"),
      bi("Finish Nebel Valley, Amberl Tower, Bear Claw Survey, Ingredient Seeker and Escort Request before pushing the airliner lead.", "推进定期船线索前完成迷雾峡谷、琥珀之塔、熊刺草、食材与护送委托。"),
      bi("Raid the Sky Bandit Stronghold. Take the Black Notebook from the vacuum cleaner and open all six stronghold chests.", "攻略空贼基地；调查吸尘器取得黑色笔记本，并开启基地内六个宝箱。"),
      bi("During South Block Burglary, speak to Libro after the Cecile/Kuwano sequence for Carnelia 4, then finish the chapter at 111 BP and 37 chests.", "南街区强盗事件中，在塞西尔与库瓦诺剧情后向利布罗取得《红耀石》4；以 111 BP、37 宝箱结束本章。")
    ],
    chapter2: [
      bi("Cross Krone Pass, then clear Stolen Ring and Black Notebook immediately. Both depend on Chapter 1 pickups.", "越过古罗尼山道后立刻完成“失窃的戒指”和“黑色笔记本”；二者依赖第一章道具。"),
      bi("Explore Manoria, Gull Seaway and Varenne Lighthouse before advancing the orphanage investigation.", "推进孤儿院调查前探索玛诺利亚、梅威海道与巴伦诺灯塔。"),
      bi("After the fire investigation opens, complete Find the Prototype, Warehouse Key and Aurian Road Monster.", "火灾调查开启后完成“寻找试作品”“仓库的钥匙”与阿伊纳街道通缉魔兽。"),
      bi("Resolve Orphanage Crisis with the correct deductions for +4 BP, then clear every Ruan board request before going to Jenis Academy.", "以正确推理完成“孤儿院事件”，取得 +4 BP；去杰尼丝王立学院前清空卢安公告板。"),
      bi("At the academy festival, do all three campus jobs and learn the four stall recipes before ending the day.", "学园祭期间完成三项校内工作，并在结束当天前学会四种摊位料理。"),
      bi("After Festival Help, return to Ruan and speak to Matilda on the bridge for Carnelia 5. Finish at 198 BP and 62 chests.", "完成学园祭协助后返回卢安，在桥上向玛蒂尔达取得《红耀石》5；以 198 BP、62 宝箱结束本章。")
    ],
    chapter3: [
      bi("Before leaving Ruan, buy Liberl News 6 and speak to Purity in the academy archives for Carnelia 6.", "离开卢安前购买《利贝尔通讯》6，并在学院资料室向普莉缇取得《红耀石》6。"),
      bi("In Zeiss, complete the four Temp Librarian requests in sequence and clear Tratt Plains Monster before the workshop investigation.", "抵达蔡斯后连续完成四项临时图书管理员委托，并在调查工房前清理托兰特平原通缉魔兽。"),
      bi("After Tita joins, accept every board request. Finish the long Product Testing route through all five destinations before entering Elmo Inn.", "提妲加入后接下全部公告板委托；进入亚尔摩温泉旅馆前走完新品测试的五个地点。"),
      bi("Repair the haulage vehicle, deliver the love letter, solve Smoker's Revolt and finish Ritter Road Monster.", "修理运输车、送达情书、解决“禁烟强化周”，并完成利塔街道通缉魔兽。"),
      bi("During Factory Incident, remove all five smoke canisters. After speaking with Professor Alba, visit Wolf Fort and talk to Bruno for Carnelia 7.", "中央工房事件中拆除五个烟筒；与亚鲁瓦教授交谈后前往沃尔费堡向布鲁诺取得《红耀石》7。"),
      bi("Clear Ritter Road Monster 2, choose the Royal Guardsmen deduction, infiltrate without being seen, and finish at 290 BP / 105 chests.", "清理第二只利塔街道通缉魔兽，选择“亲卫队遭到陷害”的推理，无警报潜入；以 290 BP、105 宝箱结束本章。")
    ],
    final: [
      bi("Before leaving Zeiss, detour through Kaldia Tunnel to Air-Letten and speak to Orta for Carnelia 8.", "离开蔡斯前经卡鲁迪亚隧道绕到亚尔摩关所，向奥尔塔取得《红耀石》8。"),
      bi("Before entering Grancel, detour to Gurune Gate and speak to Selbourne on the wall for Carnelia 9.", "进入王都前绕行古鲁奈大门，在城墙上向塞尔伯恩取得《红耀石》9。"),
      bi("Clear both Grancel sewer monsters before the tournament schedule closes their board window.", "在武术大会流程关闭公告板前，清理王都地下水路东西两只通缉魔兽。"),
      bi("During the night stealth route, avoid every patrol and detour to the Arseille landing strip; speak to Ralph for Carnelia 10.", "夜间潜入时避开全部巡逻，并绕到埃尔赛尤号停机坪向拉尔夫取得《红耀石》10。"),
      bi("Before the final tournament match, complete Anton and Marsha's three-lap scene for Carnelia Finale. Trade all 11 books to Baral for one ultimate weapon.", "决赛前完成安东与玛夏的三圈事件，取得《红耀石》终卷；把 11 册交给巴拉尔换取一把终极武器。"),
      bi("In the castle, do not defeat Duke Dunan and defeat Lorence for the full +5 BP on To Rescue a Queen.", "王城战中不要击倒杜南公爵，并击败洛伦斯，取得“解救女王”全部 +5 BP。"),
      bi("Open 40 chests in the Sealed Area, defeat Reverie, then complete The Embassy Mission during the celebration: 368 BP / 164 chests.", "在封印区域开启 40 个宝箱并击败幻想乐曲；庆典期间完成“大使馆的委托”，最终 368 BP / 164 宝箱。")
    ]
  };

  const quests = [
    q("training","prologue","main",1,0,"Training: Retrieval","实地研修·回收宝物","Game start","游戏开始","Report to Aina","向爱娜报告","Recover the Small Box in Rolent Sewers.","在洛连特地下水路回收小箱子。"),
    q("child-rescue","prologue","main",3,1,"Child Rescue","孩子们的救援","After the exam","考试结束后","When reported","报告时","Rescue Luke and Pat; keep both safe for the bonus.","救出鲁克与帕特；确保两人安全以取得奖励。"),
    q("farm","prologue","main",1,2,"Perzel Farm Monsters","帕赛尔农场的魔兽","After Cassius departs","卡西乌斯离开后","End of the night search","夜间调查结束","Approach the field monsters from behind on the first try.","第一次就从背后接近田地魔兽。"),
    q("shiny-rock","prologue","side",2,0,"Find the Shiny Rock","寻找发光的石头","After Cassius departs","卡西乌斯离开后","Enter Mayor Klaus's house","进入市长家","Find the stone in Rolent Sewers and return it to Charles.","在地下水路找到石头并交还查尔斯。"),
    q("milch-monster","prologue","hunt",3,0,"Milch Main Road Monster","米尔西街道通缉魔兽","After Cassius departs","卡西乌斯离开后","Enter Mayor Klaus's house","进入市长家","Defeat the Pine Plant on Milch Main Road.","击败米尔西街道的菠萝怪。"),
    q("mayor-request","prologue","main",4,0,"Mayor Klaus' Request","克劳斯市长的委托","After the farm case","农场事件后","Story completion","随主线完成","Retrieve the septium crystal and rescue the Malga miners.","取回七耀石结晶并救出玛鲁加矿工。"),
    q("mushroom","prologue","side",3,0,"Mushroom Hunt","采蘑菇","After the farm case","农场事件后","Finish Mayor Klaus' Request","完成市长委托","Collect the mushroom on Malga Trail.","在玛鲁加山道采集蘑菇。"),
    q("lamp","prologue","side",3,1,"Orbment Replacement","更换导力灯","After the farm case","农场事件后","Finish Mayor Klaus' Request","完成市长委托","Replace lamp six; enter 544818 for the bonus.","更换第六盏灯；输入 544818 取得奖励。"),
    q("medical","prologue","side",3,0,"Medical Necessities","采集药材","After the farm case","农场事件后","Finish Mayor Klaus' Request","完成市长委托","Bring a Savory Pinion and Bear Claw to the chapel.","向教会交付魔兽羽翼与熊刺草。"),
    q("training-soldiers","prologue","side",3,2,"Soldier Training","士兵训练","After the farm case","农场事件后","Finish Mayor Klaus' Request","完成市长委托","Win the Verte Bridge mock battle on the first attempt.","第一次赢下威尔特桥模拟战。"),
    q("kitten","prologue","side",2,0,"Lost Kitten","寻找小猫","After the mine rescue","矿山救援后","Board changes after Media","通讯社主线后公告板更新","Follow clues through Rolent to the chapel roof.","沿洛连特线索找到教会屋顶。"),
    q("elize-monster","prologue","hunt",4,0,"Elize Highway Monster","艾利兹街道通缉魔兽","After the mine rescue","矿山救援后","Before Mayoral Theft ends","市长失窃案结束前","Defeat the Rhinocider at the bridge.","击败桥上的犀牛怪。"),
    q("media","prologue","main",4,0,"The Liberl Media","利贝尔通讯社","After the mine rescue","矿山救援后","Story completion","随主线完成","Escort Nial and Dorothy through Esmelas Tower.","护送奈尔与朵洛希通过艾斯梅拉斯塔。"),
    q("mayoral-theft","prologue","main",6,5,"Mayoral Theft","市长官邸的强盗事件","After the tower","高塔事件后","Chapter end","序章结束","Give the correct deductions and listen before fighting.","正确推理，并在开战前先听对方说话。"),
    q("letter","chapter1","side",2,0,"Letter Carrier","送亲笔信","After Mayoral Theft in the Prologue","序章失窃案结束后","First Bose visit in Chapter 1","第一章首次抵达柏斯","Accept in Rolent and deliver to Father Holstein in Bose.","在洛连特接取并于柏斯交给霍尔斯教区长。"),

    q("missing-airliner","chapter1","main",5,3,"Missing Airliner","定期船失踪事件","Register at Bose Guild","在柏斯协会登记","Sky Bandit Stronghold complete","空贼基地完成","Follow Haken Gate, Ravennue and Nebel Valley leads; choose the strongest deductions.","调查哈肯大门、拉文努与迷雾峡谷，并选择最合理推理。"),
    q("ravennue-monster","chapter1","hunt",4,0,"Ravennue Trail Monster","拉文努山道通缉魔兽","Chapter start","第一章开始","Advance Missing Airliner to the stronghold","定期船主线推进至基地","Defeat the monster on Ravennue Trail.","击败拉文努山道魔兽。"),
    q("ingredient-seeker","chapter1","side",3,0,"Ingredient Seeker","寻找食材","Chapter start","第一章开始","Advance Missing Airliner to the stronghold","定期船主线推进至基地","Gather the requested monster ingredients for the Bose restaurant.","为柏斯餐厅收集指定魔兽食材。"),
    q("east-bose","chapter1","hunt",4,0,"East Bose Monster","东柏斯街道通缉魔兽","Chapter start","第一章开始","Advance Missing Airliner to the stronghold","定期船主线推进至基地","Defeat the eastern highway target.","击败东柏斯街道目标。"),
    q("bear-claw","chapter1","side",4,0,"Bear Claw Survey","熊刺草调查","Chapter start","第一章开始","Advance Missing Airliner to the stronghold","定期船主线推进至基地","Survey Bear Claw growth in Nebel Valley.","调查迷雾峡谷的熊刺草。"),
    q("nebel-monster","chapter1","hunt",5,0,"Nebel Valley Monster","迷雾峡谷通缉魔兽","Chapter start","第一章开始","Advance Missing Airliner to the stronghold","定期船主线推进至基地","Defeat the wanted monster deep in Nebel Valley.","击败迷雾峡谷深处的通缉魔兽。"),
    q("west-bose","chapter1","hunt",4,0,"West Bose Monster","西柏斯街道通缉魔兽","Chapter start","第一章开始","Advance Missing Airliner to the stronghold","定期船主线推进至基地","Defeat the western highway target.","击败西柏斯街道目标。"),
    q("amberl","chapter1","side",4,0,"Amberl Tower Mystery","琥珀之塔的神秘事件","Enter Amberl Tower","进入琥珀之塔","Complete Missing Airliner","完成定期船主线","Escort the scholar safely from the tower.","护送学者安全离开高塔。"),
    q("escort","chapter1","side",4,1,"Escort Request","护卫委托","Chapter start","第一章开始","Advance Missing Airliner to the stronghold","定期船主线推进至基地","Escort the client and satisfy the bonus condition.","完成护送并满足奖励条件。"),
    q("new-ansel","chapter1","hunt",5,0,"New Ansel Path Monster","新安塞尔小径通缉魔兽","Chapter start","第一章开始","Advance Missing Airliner to the stronghold","定期船主线推进至基地","Defeat the monster on New Ansel Path.","击败新安塞尔小径通缉魔兽。"),
    q("south-block","chapter1","main",10,0,"South Block Burglary","南街区的强盗事件","After returning from the stronghold","空贼基地归来后","Chapter end","第一章结束","Investigate the Bose market theft and follow the final lead.","调查柏斯市场失窃并追踪最后线索。"),

    q("krone-attack","chapter2","main",2,0,"Krone Pass Attacked!","古罗尼山道遇袭","Cross Krone Pass","穿越古罗尼山道","Arrive in Ruan","抵达卢安","Protect the travelers at the pass.","保护山道上的旅客。"),
    q("stolen-ring","chapter2","side",3,0,"Stolen Ring","失窃的戒指","Return to Bose after Chapter 1","第一章后回柏斯","Leave Bose for Krone Pass","离开柏斯前往山道","Return the Jeweled Ring from the Sky Bandit Stronghold.","归还空贼基地取得的宝石戒指。"),
    q("black-notebook","chapter2","side",5,0,"Black Notebook","黑色笔记本","Return to Bose after Chapter 1","第一章后回柏斯","Leave Bose for Krone Pass","Hand over the notebook found in the stronghold vacuum cleaner.","交付在空贼基地吸尘器里找到的笔记本。"),
    q("lighthouse","chapter2","hunt",4,0,"Lighthouse Monsters","灯塔的魔兽","Arrive in Ruan","抵达卢安","Advance Orphanage Crisis","推进孤儿院事件","Clear Varenne Lighthouse.","清理巴伦诺灯塔。"),
    q("gull1","chapter2","hunt",4,0,"Gull Seaway Monster","梅威海道通缉魔兽","Arrive in Ruan","抵达卢安","Advance Orphanage Crisis","推进孤儿院事件","Defeat the first Gull Seaway target.","击败梅威海道第一只目标。"),
    q("orphanage","chapter2","main",5,4,"Orphanage Crisis","孤儿院事件","After reaching Manoria","抵达玛诺利亚后","Resolve the fire investigation","火灾调查结束","Examine every clue and select the correct deductions.","调查全部线索并作出正确推理。"),
    q("prototype","chapter2","side",3,0,"Find the Prototype!","寻找试作品","After the fire","火灾后","Go to Jenis Academy","前往王立学院","Recover the prototype on Gull Seaway.","在梅威海道找回试作品。"),
    q("warehouse-key","chapter2","side",2,0,"Warehouse Key","仓库的钥匙","After the fire","火灾后","Go to Jenis Academy","前往王立学院","Fish up the warehouse key at Ruan harbor.","在卢安港钓回仓库钥匙。"),
    q("aurian","chapter2","hunt",4,0,"Aurian Road Monster","阿伊纳街道通缉魔兽","After the fire","火灾后","Go to Jenis Academy","前往王立学院","Defeat the wanted monster on Aurian Road.","击败阿伊纳街道通缉魔兽。"),
    q("festival","chapter2","main",5,5,"Festival Help","学园祭协助","Reach Jenis Academy","抵达王立学院","End the festival day","学园祭结束","Finish all three campus jobs for the full bonus.","完成三项校内工作取得全部奖励。"),
    q("theresa","chapter2","main",10,0,"Theresa the Target","被盯上的特蕾莎院长","After the festival","学园祭后","Chapter end","第二章结束","Return toward Manoria and protect Theresa.","返回玛诺利亚并保护特蕾莎院长。"),
    q("maintenance","chapter2","side",4,0,"Maintenance Delivery","整备工具配送","Before Jenis Academy","前往学院前","Enter Jenis Academy","进入学院","Deliver the maintenance kit to Varenne Lighthouse.","把整备工具送到巴伦诺灯塔。"),
    q("old-map","chapter2","side",3,2,"Secret of the Old Map","古地图的秘密","Before Jenis Academy","前往学院前","Enter Jenis Academy","进入学院","Find the offshore treasure and meet the bonus condition.","找到海上宝藏并满足奖励条件。"),
    q("escort-job","chapter2","side",5,0,"Escort Job","护送委托","Before Jenis Academy","前往学院前","Enter Jenis Academy","进入学院","Escort the client safely along Aurian Road.","沿阿伊纳街道安全护送委托人。"),
    q("candelabrum","chapter2","side",7,0,"Candelabrum Theft","烛台失窃事件","Before Jenis Academy","前往学院前","Enter Jenis Academy","进入学院","Follow the riddles around Ruan to recover the candelabrum.","沿卢安各处谜语找回烛台。"),
    q("make-leave","chapter2","side",3,2,"Make Him Leave!","说服旅行者","Before Jenis Academy","前往学院前","Enter Jenis Academy","进入学院","Resolve the hotel dispute with the best dialogue choices.","用最佳对话选项解决旅馆纠纷。"),
    q("gull2","chapter2","hunt",5,0,"Gull Seaway Monster 2","梅威海道通缉魔兽 2","Before Jenis Academy","前往学院前","Enter Jenis Academy","进入学院","Defeat the second Gull Seaway target.","击败梅威海道第二只目标。"),

    q("black-orbment","chapter3","main",0,0,"Black Orbment Moan","黑色导力器的异响","Chapter start","第三章开始","Reach Zeiss","抵达蔡斯","Travel through Air-Letten and Kaldia Tunnel to Zeiss.","经亚尔摩关所与卡鲁迪亚隧道前往蔡斯。"),
    q("librarian","chapter3","side",3,0,"Temp Librarian","临时图书管理员","Reach Zeiss","抵达蔡斯","Start workshop investigation","开始工房调查","Find the first missing book.","找回第一本遗失图书。"),
    q("librarian1","chapter3","side",3,0,"Temp Librarian Plus","临时图书管理员 Plus","Finish Temp Librarian","完成前项委托","Start workshop investigation","开始工房调查","Decode the clue and recover The Erbe Woodpecker.","解读线索并找回《艾尔贝啄木鸟》。"),
    q("librarian2","chapter3","side",4,0,"Temp Librarian Plus 2","临时图书管理员 Plus 2","Finish Plus","完成 Plus","Start workshop investigation","开始工房调查","Recover Hertz's Adventure II on Tratt Plains.","在托兰特平原找回《赫兹冒险记 II》。"),
    q("librarian3","chapter3","side",4,0,"Temp Librarian Plus 3","临时图书管理员 Plus 3","Finish Plus 2","完成 Plus 2","Start workshop investigation","开始工房调查","Find 31 Cypress Trees at Sanktheim Gate.","在圣海姆门找到《31 棵丝柏树》。"),
    q("tratt-monster","chapter3","hunt",4,0,"Tratt Plains Monster","托兰特平原通缉魔兽","Reach Zeiss","抵达蔡斯","Start workshop investigation","开始工房调查","Defeat the wanted monster on Tratt Plains.","击败托兰特平原通缉魔兽。"),
    q("elmo-pump","chapter3","main",5,0,"Elmo Pump Repair","亚尔摩温泉的修理","After workshop investigation","工房调查后","Story completion","随主线完成","Repair the hot spring pump with Tita.","与提妲一起修理温泉水泵。"),
    q("product","chapter3","side",4,2,"Product Testing","新品测试","Tita joins","提妲加入后","Enter Elmo Inn","进入温泉旅馆","Wear the shoes to all five destinations, including Air-Letten.","穿测试鞋走遍五个地点，包括亚尔摩关所。"),
    q("vehicle-search","chapter3","side",4,0,"Haulage Vehicle Search","寻找运输车","Tita joins","提妲加入后","Enter Elmo Inn","进入温泉旅馆","Find the stranded vehicle on Tratt Plains.","在托兰特平原找到受困运输车。"),
    q("vehicle-repair","chapter3","side",5,0,"Haulage Vehicle Repair","运输车修理","Find the vehicle","找到运输车后","Enter Elmo Inn","进入温泉旅馆","Fetch and deliver the Drive Orbment.","取得并交付驱动导力器。"),
    q("potent","chapter3","side",3,0,"Potent Ingredient","强力食材","Tita joins","提妲加入后","Enter Elmo Inn","进入温泉旅馆","Show the cook an Acerbic Tomato.","向厨师出示苦西红柿。"),
    q("smoker","chapter3","side",4,0,"Smoker's Revolt","禁烟强化周","Tita joins","提妲加入后","Enter Elmo Inn","进入温泉旅馆","Trace the hidden cigarettes through Central Factory.","在中央工房追查隐藏香烟。"),
    q("love","chapter3","side",2,4,"Messenger of Love","爱的使者","Speak to Wolf Fort guard","与沃尔费堡守卫交谈","Enter Elmo Inn","进入温泉旅馆","Deliver the letter and add the Woolly Knit-Hat for +4 BP.","送达情书，并附上绒毛编织帽取得 +4 BP。"),
    q("ritter1","chapter3","hunt",5,0,"Ritter Road Monster","利塔街道通缉魔兽","Tita joins","提妲加入后","Enter Elmo Inn","进入温泉旅馆","Defeat Mercury Viper and its Bane Cobras.","击败水银巨蛇与剧毒眼镜蛇。"),
    q("factory","chapter3","main",6,8,"Factory Incident","中央工房事件","After Elmo Pump Repair","温泉修理后","Leave Central Factory","离开中央工房","Remove all five smoke canisters and answer correctly.","拆除五个烟筒并正确回答问题。"),
    q("professor","chapter3","main",10,6,"Prof.'s Whereabouts","博士的下落","After Factory Incident","工房事件后","Chapter end","第三章结束","Pick the Royal Guards deduction and escape Leiston unseen.","选择亲卫队推理，并无警报逃离雷斯顿要塞。"),
    q("ritter2","chapter3","hunt",6,0,"Ritter Road Monster 2","利塔街道通缉魔兽 2","After Factory Incident","工房事件后","Board closes before Leibnitz","登上莱布尼兹号前","Defeat Bloody Saber and its escort.","击败血腥军刀及其护卫。"),

    q("queen","final","main",10,8,"To Queen Alicia","给女王陛下的传话","Reach Grancel","抵达王都","Complete night infiltration","完成夜间潜入","Win tournament rounds, solve the investigation and avoid every night patrol.","赢下武术大会、完成调查，并避开全部夜间巡逻。"),
    q("sewer-west","final","hunt",8,0,"Sewer Monster (West)","地下水路西区通缉魔兽","Reach Grancel","抵达王都","Before the final tournament match","武术大会决赛前","Clear the western sewer target.","清理地下水路西区目标。"),
    q("sewer-east","final","hunt",8,0,"Sewer Monster (East)","地下水路东区通缉魔兽","Reach Grancel","抵达王都","Before the final tournament match","武术大会决赛前","Clear the eastern sewer target.","清理地下水路东区目标。"),
    q("hostage","final","main",10,4,"Hostage Liberation","人质解救作战","After meeting the Queen","见到女王后","Complete Erbe Villa operation","完成艾尔贝离宫行动","Complete the operation with the optimal choices.","以最佳选择完成人质解救。"),
    q("rescue-queen","final","main",10,5,"To Rescue a Queen","女王陛下营救作战","After Hostage Liberation","人质解救后","Castle assault ends","王城战结束","Do not KO Duke Dunan; defeat Lorence for all bonus BP.","不要击倒杜南公爵；击败洛伦斯取得全部奖励。"),
    q("aureole","final","main",12,0,"Aureole","辉之环","Enter the Sealed Area","进入封印区域","Defeat the final boss","击败最终 Boss","Descend through all four levels and defeat Reverie.","穿过四层遗迹并击败幻想乐曲。"),
    q("embassy","final","side",3,0,"The Embassy Mission","大使馆的委托","Celebration epilogue","庆典尾声","Speak to Olivier before ending the game","结束游戏前与奥利维尔交谈","Visit the Erebonian Embassy, then report back to Olivier.","前往埃雷波尼亚大使馆，再向奥利维尔报告。")
  ];

  const chests = {
    prologue: [
      ["Rolent Sewers",2,"Reviving Balm; Small Box ×2 (story chest, included in the guide's 164 counter)"],
      ["Malga Trail / Esmelas approach",2,"Reviving Balm; Tear Balm"],
      ["Milch Main Road",4,"Tear Balm ×3; Topaz Talisman (monster chest)"],
      ["Malga Mine / Mistwald",3,"White Bracelet; Tear Balm; Hide Jumpsuit"],
      ["Esmelas Tower / late Rolent routes",5,"Tear Balm; recipe chest; Impede 2; Viper route rewards"],
    ],
    chapter1: [
      ["Bose highways and Nebel Valley",8,"Reviving Balm; Tear Balm ×3; Deathblow 2; Beast Steak; Strega-R; Katars"],
      ["Amberl Tower",6,"Tear Balm ×2; Fried Eyes & Eggs; Reviving Balm; Chain Mail; Emerald Talisman"],
      ["New Ansel Path",1,"Pearl Earring"],
      ["Sky Bandit Stronghold",6,"Scorpion; EP Charge; Jeweled Ring; Strega-R; Bear Assault; Reviving Balm"],
    ],
    chapter2: [
      ["Krone Pass / Ruan arrival",11,"EP Charge ×2; Lily Necklace; Tear Balm ×6; Ruby Talisman; Teara Balm; Battle Suit"],
      ["Orphanage investigation routes",2,"Deathblow 2; Tear Balm"],
      ["Ruan / Jenis festival routes",12,"Army Boots; Flamberge; Battle Suit; Hot Fried Chicken; EP Charge ×3; Tear Balm ×2; Range 1; Scent; Reviving Balm"],
    ],
    chapter3: [
      ["Kaldia Tunnel / Tratt Plains / Ritter Road",17,"Teara Balm ×9; Curia Balm; Deathblow 2; Celestial Balm; Black Bangle; Sapphire Talisman; Long Barrel; Hit 3; EP Charge EX"],
      ["Soldat Army Road",4,"Teara Balm; Reviving Balm; EP Charge EX; Curia Balm"],
      ["Carnelia Tower / Factory Incident routes",22,"Teara Balm ×8; EP Charge ×2; Black Coat; Mind 3; EP Charge EX ×2; Hellfire Eggs; Demi-Handers; Celestial Balm; Attack 3; Tear All Balm; Octavian Stave; Cavalier Killer; EP 3; G-Impact"],
    ],
    final: [
      ["Royal Avenue / Grancel / sewers",15,"Deathblow 2; Teara Balm ×8; Shield 3; Defense 3; Chomping Spare Rib; Gladiator Headband; Hawkeye; Cestus"],
      ["Castle infiltration",4,"Tear All Balm ×2; Reflector; Cloak"],
      ["Sealed Area",40,"Celestial Balm ×5; Teara Balm ×7; Tear All Balm ×7; EP Charge EX ×5; Atlas Gear ×2; Sylphen Boots ×2; ten ultimate weapons; Royal Guard ×2; Valkyrie Dress ×2; Move 3"],
    ]
  };

  const recipes = {
    prologue: ["Maple Cookie","Drill Meatball","Wholesome Pasta","French Fries","Flowery Soda","Carmine Eye","Vegetable Sandwich","Potluck in a Shell"],
    chapter1: ["Milk Crepe","Red Tail Soup","Abaddon Potluck","Cheese Risotto","Mouthful Soup","Sweet Sponge Cake","Floral Jelly","Liberl Omelet","Beast Steak","Fried Eyes & Eggs","Deep-Fried Smelt","Boiled Miso Carp","Grilled Rainbow","Rockfish Skewer","Salmon Meuniere","Apple Ice Cream","Fresh Juice"],
    chapter2: ["Diehard Paella","Plucked Herb Tea","Azelia Rose","Salubrious Oatmeal","Wine-Steamed Egg","Briny Delight","Jenis Lunch","Hot Fried Chicken","Royal Crepe","Coffee Ice Cream","Orange Ice Cream","Holey Popcorn","Rainbow Jellybeans"],
    chapter3: ["Rotini Pasta","Black Pepper Soup","Seasonal Tart","Bouillabaisse Plus","Fluffy Spring Egg","Wild Veggie Pot","Fruity Milk","Specialty Eggnog","Monster Sushi","Pot O' Meat","Tomato Sandwich","Hellfire Eggs"],
    final: ["Gorgeous Crepe","Bouillabaisse","Mixed Cocktail","Refreshing Pie","Chef's Curry","Rich Espresso","Special Ice Cream","Chomping Spare Rib"]
  };

  const carnelia = [
    [1,"prologue","Rhett, northwest Rolent apartments","After Training: Retrieval; before leaving Rolent"],
    [2,"chapter1","Private Harold, Verte Bridge","Before crossing the checkpoint out of Rolent"],
    [3,"chapter1","Marco, Haken Gate","After speaking with Olivier twice during Missing Airliner"],
    [4,"chapter1","Libro, Bose","After the Cecile and Kuwano conversations in South Block Burglary"],
    [5,"chapter2","Matilda, Ruan bridge","After completing Festival Help; before leaving Ruan"],
    [6,"chapter3","Purity, Jenis Academy archives","Before leaving Ruan for Air-Letten"],
    [7,"chapter3","Bruno, Wolf Fort","After speaking with Professor Alba during Factory Incident"],
    [8,"final","Private Orta, Air-Letten rest area","Before leaving Zeiss region"],
    [9,"final","Private Selbourne, Gurune Gate wall","Before entering Grancel"],
    [10,"final","Ralph, Arseille landing strip","During the night section of To Queen Alicia"],
    ["Finale","final","Anton and Marsha, Grancel","Before the tournament final; trigger three completed laps"],
  ];

  const bosses = [
    ["prologue","Fate Spinner","Mistwald","Protect the guest; fire and focused damage end the adds quickly.","命运编织者","神秘森林","保护同行 NPC；用火属性与集中火力快速清杂。"],
    ["chapter1","Don, Kyle & Josette","Sky Bandit Stronghold","Use area arts, keep seal protection ready, and remove support targets first.","多伦、吉尔与乔丝特","空贼基地","使用范围魔法，准备封技防护，优先清理支援目标。"],
    ["chapter2","Rais, Deen & Rocco","Ruan warehouse","They heal and revive; burst one target down and guard against seal/deathblow.","雷斯、迪恩与洛克","卢安仓库","敌人会治疗和复活；集中击破单体，并防范封技与即死。"],
    ["chapter2","Dalmore's monsters","Mayor's residence","Control the wolves and keep party HP high before their powered attacks.","戴尔蒙家的魔兽","市长官邸","控制狼群，并在强化攻击前保持全队高血量。"],
    ["chapter3","King Penguin","Kaldia limestone cave","Clear the small penguins, then rotate healing and S-Crafts on the king.","企鹅王","卡鲁迪亚钟乳洞","先清小企鹅，再以治疗与 S 技压制企鹅王。"],
    ["chapter3","Colonel Richard","Leiston Fortress","Save CP, resist faint, and use arts when physical defense stalls damage.","理查德上校","雷斯顿要塞","保留 CP、预防气绝；物防过高时改用魔法输出。"],
    ["final","Duke Dunan escort","Grancel Castle","For maximum BP, defeat the soldiers without knocking out Dunan.","杜南公爵护卫战","格兰赛尔城","最高 BP 条件：击倒士兵，但不能击倒公爵。"],
    ["final","Lorence","Grancel Castle","Confuse and mute protection matter. Break Earth Guard EX with weak hits; defeating him is bonus BP.","洛伦斯少尉","格兰赛尔城","防混乱与封魔；用弱攻击拆地之守护 EX，击败他可得奖励 BP。"],
    ["final","Reverie","Sealed Area · bottom","Enter fully healed with CP stocked; handle the support units, then commit S-Breaks.","幻想乐曲","封印区域最下层","满血并储满 CP 入场；先处理支援单位，再集中释放 S 爆发技。"]
  ];

  const characters = [
    ["Estelle","艾丝蒂尔","Staff / balanced","棍 / 均衡","Flexible healer and physical support; long lines make mixed arts practical.","灵活治疗与物理支援；较长导力链适合混合魔法。"],
    ["Joshua","约修亚","Dual blades / speed","双刀 / 速度","Fast interrupter and Time caster; Action, Cast and EP Cut are premium picks.","高速打断与时属性施法；行动力、驱动、EP 节省优先。"],
    ["Scherazard","雪拉扎德","Whip / turn support","鞭 / 回合支援","Heaven's Kiss manipulates turns; build speed and broad support arts.","天堂之吻可调整行动顺序；优先速度与广泛辅助魔法。"],
    ["Olivier","奥利维尔","Gun / arts","枪 / 魔法","Strong ranged caster and secondary healer with flexible elemental access.","优秀远程施法与副治疗，属性适配灵活。"],
    ["Agate","阿加特","Greatsword / physical","重剑 / 物理","High STR and area crafts; Attack, Action, Hit and CP support fit his role.","高 STR 与范围战技；攻击、行动、命中与 CP 配置契合定位。"],
    ["Kloe","科洛丝","Rapier / healing","细剑 / 治疗","Best dedicated healer; Kaempfer debuffs bosses and her S-Craft rescues the party.","专职治疗优秀；斗魂可削弱 Boss，S 技适合救场。"],
    ["Tita","提妲","Orbal cannon / range","导力炮 / 远程","Wide normal attacks and Smoke Cannon; protect her low defenses and add healing arts.","普攻范围大并有烟幕弹；需弥补低防御，可配置治疗魔法。"],
    ["Zin","金","Gauntlets / tank","拳套 / 坦克","Durable front liner with self sustain; Defense, HP and Attack reinforce his kit.","耐久前排并能自我恢复；防御、HP 与攻击可强化定位。"]
  ];

  const quartz = [
    ["HP / Mind","水","HP / 精神","Water","Raises HP or ATS/ADF and supplies Water values for healing arts.","提升 HP 或 ATS/ADF，并提供水属性值解锁治疗魔法。"],
    ["Attack / Seal","火","攻击 / 封技","Fire","Raises STR or adds seal chance; feeds Fire damage arts.","提升 STR 或附加封技概率；提供火属性值解锁攻击魔法。"],
    ["Defense / Poison","地","防御 / 毒之刃","Earth","Raises DEF or adds poison; enables Earth Guard and Earth Wall setups.","提升 DEF 或附加毒；可组成地之守护与大地之墙。"],
    ["Evade / Sleep","风","回避 / 睡眠之刃","Wind","Raises AGL or adds sleep; contributes to Aerial and movement support.","提升 AGL 或附加睡眠；可解锁风之领域与移动辅助。"],
    ["Action / Deathblow","时","行动力 / 必杀之刃","Time","Action is universally strong; Time lines unlock Soul Blur, Hell Gate and speed buffs.","行动力几乎全员适用；时属性链可解锁灵魂模糊、地狱之门与速度强化。"],
    ["EP / Hit","空","EP / 命中","Space","Expands EP or accuracy; combines with other elements for advanced arts.","扩充 EP 或命中；常与其他属性组合解锁高级魔法。"],
    ["EP Cut / Information","幻","省 EP / 情报","Mirage","Reduces EP costs or reveals enemy data; supports mixed high tier arts.","降低 EP 消耗或显示敌人资料；支撑复合高级魔法。"],
    ["Cast","时","驱动","Time","Cuts art casting delay and is a priority on every primary caster.","缩短魔法驱动时间，是主施法者的优先回路。"],
    ["Impede","风","妨害","Wind","Adds art interruption to attacks and helps reach mixed Wind requirements.","普攻附带打断魔法，并帮助满足复合风属性需求。"],
    ["Heal / Strike","水 / 火","治愈 / 必杀","Water / Fire","Heal improves recovery; Strike adds a critical chance. Both occupy special status slots.","治愈强化恢复；必杀增加暴击概率。两者都属于特殊效果回路。"]
  ];

  const arts = [
    ["Tear → Teara → Tearal","Single-target healing that scales through the game.","单体回复链，随流程逐级强化。"],
    ["La Tear → La Teara","Area healing; central to difficult boss fights.","范围回复，是高难 Boss 战核心。"],
    ["Curia / La Curia","Cures ailments on one ally or an area.","解除单体或范围异常状态。"],
    ["Earth Guard / Earth Wall","Nullifies one attack on one ally or an area; one of FC's strongest defensive tools.","为单体或范围抵消一次攻击，是 FC 最强防御手段之一。"],
    ["Clock Up / Clock Up EX","Raises speed and improves turn economy.","提升速度并显著改善行动效率。"],
    ["Clock Down","Lowers enemy speed when the target is vulnerable.","对可生效目标降低速度。"],
    ["Aerial / Aero Storm","Reliable Wind area damage for grouped enemies.","稳定的风属性范围伤害，适合清理集群。"],
    ["Hell Gate / White Gehenna","Time area damage with useful status pressure.","时属性范围伤害，并附带实用异常压制。"],
    ["Soul Blur / Shadow Spear","Fast Time offense; Shadow Spear carries a deathblow chance.","快速时属性攻击；暗影之矛带即死概率。"],
    ["Blue Impact / Diamond Dust","Strong Water damage; Diamond Dust covers an area.","强力水属性伤害；钻石星尘为范围攻击。"],
    ["Flare Arrow / Napalm Breath","Efficient Fire offense for many armored or plant enemies.","高效火属性攻击，适合多种装甲或植物敌人。"],
    ["Chaos Brand / Silver Thorn","Advanced Mirage control; check immunity before relying on confusion.","高级幻属性控制；依赖混乱前先确认免疫。"]
  ];

  const sources = [
    ["GameFAQs — Kartarius FC guide v1.5","https://gamefaqs.gamespot.com/pc/979866-the-legend-of-heroes-trails-in-the-sky/faqs/79398","Chapter routes, BP, chest milestones, recipes and boss notes"],
    ["Crimson Tear — FC quest index","https://www.crimsontear.com/gaming/loh-trails-in-the-sky-1/quests/","Quest index and request cross-check"],
    ["Kiseki Wiki — Carnelia series","https://kiseki.fandom.com/wiki/Carnelia_(book_series)","All eleven original FC book windows and NPC locations"],
    ["Kiseki Wiki — original FC recipes","https://kiseki.fandom.com/wiki/List_of_recipes_(Sky_FC)","All 58 recipe names and acquisition locations"],
    ["Ghostlight — original PC manual","https://trails1.ghostlight.uk.com/manuals/Trails-UK-Manual.pdf","Combat, orbment and arts system terminology"],
    ["Steam Community — chest guide","https://steamcommunity.com/sharedfiles/filedetails/?id=295517181","164-chest route and second-interaction achievement cross-check"]
  ];

  return { chapters, walkthrough, quests, chests, recipes, carnelia, bosses, characters, quartz, arts, sources, verified: "2026-09-22" };
})();
