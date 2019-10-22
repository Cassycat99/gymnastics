//rect(50, 50, 50, 50);


function preload() {
    libraryOfSkills = [
        
        //DANCE SKILLS
        
        //LEAPS
        
        //As
        new Skill("split leap forward", "a", "nonsalto", "leap", x, y, height, width, img1101),

        new Skill("tuck into split leap", "a", "nonsalto", "leap", x, y, height, width, 1103),
        
        new Skill("side leap", "a", "nonsalto", "leap", x, y, height, width, 1104),
        
        new Skill("leap to wolf position", "a", "nonsalto", "leap", x, y, height, width, 1105),
        
        //Bs
        
        new Skill("split leap 1/2 turn", "b", "nonsalto", "leap", x, y, height, width, 1201),
        
        new Skill("switch leap 1/4 turn", "b", "nonsalto", "leap", x, y, height, width, 1204),
        
        new Skill("switch leap", "b", "nonsalto", "leap", x, y, height, width, 1205),
        
        
        
        //Cs
        
                
        new Skill("split leap 360", "c", "nonsalto", "leap", x, y, height, width, 1301),
        
        new Skill("split leap 360 split", "c", "nonsalto", "leap", x, y, height, width, 1302),
        
        new Skill("switch leap 1/2", "c", "nonsalto", "leap", x, y, height, width, 1304),
        
        new Skill("ring switch leap", "c", "nonsalto", "leap", x, y, height, width, 1305),
                  
        new Skill("split ring leap", "c", "nonsalto", "jump", x, y, height, width, 1309),
        
        
        //JUMPS
        
        //As
        new Skill("pike jump < 90", "a", "nonsalto", "jump", x, y, height, width, 1106),
        
        new Skill("straddle jump", "a", "nonsalto", "jump", x, y, height, width, 1107),
        
        new Skill("shushunova", "a", "nonsalto", "jump", x, y, height, width, 1108),
        
        new Skill("split or stag jump", "a", "nonsalto", "jump", x, y, height, width, 1109),
        
        new Skill("wolf jump", "a", "nonsalto", "jump", x, y, height, width, 1114),
        
        
        //Bs
        
        new Skill("sheep jump", "b", "nonsalto", "jump", x, y, height, width, 1206),
        
        new Skill("straddle 1/2", "b", "nonsalto", "jump", x, y, height, width, 1207),
        
        new Skill("shushunova 360", "b", "nonsalto", "jump", x, y, height, width, 1208),
        
        new Skill("ring jump", "b", "nonsalto", "jump", x, y, height, width, 1209),
        
        new Skill("jump 360", "b", "nonsalto", "jump", x, y, height, width, 1209),
        
        new Skill("tuck jump 360", "b", "nonsalto", "jump", x, y, height, width, 1213),
        
        new Skill("wolf jump 360", "b", "nonsalto", "jump", x, y, height, width, 1214),
        
        
        //Cs
        
        new Skill("pike 360", "c", "nonsalto", "jump", x, y, height, width, 1301),
        
        new Skill("straddle 360", "c", "nonsalto", "jump", x, y, height, width, 1301),
        
        new Skill("jump 720", "c", "nonsalto", "jump", x, y, height, width, 1310),
        
        new Skill("tuck jump 720", "c", "nonsalto", "jump", x, y, height, width, 1313),

        
        
        //HOPS
        
        //As        
        
        new Skill("cat leap", "a", "nonsalto", "hop", x, y, height, width, 1111),
        
        new Skill("fouette-hop", "a", "nonsalto", "hop", x, y, height, width, 1112),
        
        new Skill("fouette-hop", "a", "nonsalto", "hop", x, y, height, width, 1112),
        
        //Bs
        
        new Skill("switch fouette-hop", "b", "nonsalto", "hop", x, y, height, width, 1201),
        
        new Skill("butterfly", "b", "nonsalto", "hop", x, y, height, width, 1203),
        
        new Skill("cat leap 360", "b", "nonsalto", "hop", x, y, height, width, 1211),
        
        new Skill("hop 180", "b", "nonsalto", "hop", x, y, height, width, 1212),
        
        //Cs
        
        new Skill("cat leap 720", "b", "nonsalto", "hop", x, y, height, width, 1211),
        
        new Skill("hop 360", "b", "nonsalto", "hop", x, y, height, width, 1312),

        
        //TURNS
        
        //As
        new Skill("360 turn", "a", "nonsalto", "turn", x, y, height, width, 2101),
        
        new Skill("360 tuck stand turn", "a", "nonsalto", "turn", x, y, height, width, 2106),
        
        //Bs
        
        new Skill("720 turn", "b", "nonsalto", "turn", x, y, height, width, 2201),
        
        new Skill("360 turn heel above horizontal", "b", "nonsalto", "turn", x, y, height, width, 2202),
        
        new Skill("360 split turn", "b", "nonsalto", "turn", x, y, height, width, 2203),
        
        new Skill("360 back attitude turn", "b", "nonsalto", "turn", x, y, height, width, 2204),
        
        new Skill("360 illusion", "b", "nonsalto", "turn", x, y, height, width, 2205),
        
        new Skill("720 tuck stand turn", "b", "nonsalto", "turn", x, y, height, width, 2206),
        
        new Skill("720 windmill", "b", "nonsalto", "turn", x, y, height, width, 2207),
        
        //Cs
        
        new Skill("1080 turn", "c", "nonsalto", "turn", x, y, height, width, 2301),
        
        //HANDSUPPORT ACRO
        
        //As
        new Skill("handstand", "a", "nonsalto", "handstand", x, y, height, width, 3101),
        
        new Skill("dive roll", "a", "nonsalto", "handstand", x, y, height, width, 3102),
        
        new Skill("back extension roll 1/2 or 360", "a", "nonsalto", "handstand", x, y, height, width, 3103),
        
        new Skill("back walk over handstand 360", "a", "nonsalto", "handstand", x, y, height, width, 3104),
        
        new Skill("front hand spring/bounder", "a", "nonsalto", "acroflight", x, y, height, width, 3105),
        
        new Skill("round off", "a", "nonsalto", "acroflight", x, y, height, width, 3106),
        
        new Skill("back hand spring", "a", "nonsalto", "acroflight", x, y, height, width, 3107),
        
        
        //Bs
        
        new Skill("handstand 540-720", "b", "nonsalto", "handstand", x, y, height, width, 3201),
        
        new Skill("back extension roll 540-720", "b", "nonsalto", "handstand", x, y, height, width, 3203),
        
        new Skill("back hand spring 360", "b", "nonsalto", "acroflight", x, y, height, width, 3203),
        
        //Cs
        
        new Skill("front hand spring 360", "c", "nonsalto", "acroflight", x, y, height, width, 3305),
        
        
        //SALTOS
        
        //As
        
        new Skill("front tuck", "a", "salto", "tuck", x, y, height, width, 4101),
        
        new Skill("front aerial", "a", "salto", "aerial", x, y, height, width, 4103),
        
        new Skill("side aerial", "a", "salto", "aerial", x, y, height, width, 4104),
        
        new Skill("side tuck", "a", "salto", "tuck", x, y, height, width, 4104),
        
        new Skill("side pike", "a", "salto", "pike", x, y, height, width, 4105),
        
        new Skill("back tuck", "a", "salto", "tuck", x, y, height, width, 5101),
        
        new Skill("back pike", "a", "salto", "pike", x, y, height, width, 51012),
        
        new Skill("back layout", "a", "salto", "layout", x, y, height, width, 51013),
        
        new Skill("whip back", "a", "salto", "layout", x, y, height, width, 5104),
        
        
        //Bs
        
        new Skill("front pike", "b", "salto", "pike", x, y, height, width, 41012),
        
        new Skill("front tuck 1/2 or 360", "b", "salto", "tuck", x, y, height, width, 4101),
        
        new Skill("front pike 1/2 or 360", "b", "salto", "pike", x, y, height, width, 41012),
        
        new Skill("front layout 1/2 or 360", "b", "salto", "layout", x, y, height, width, 4101),
        
        new Skill("arabian tuck", "b", "salto", "tuck", x, y, height, width, 4205),
        
        new Skill("arabian pike", "b", "salto", "pike", x, y, height, width, 42052),
        
        new Skill("half or full layout", "b", "salto", "layout", x, y, height, width, 5201),
        
        new Skill("whip back 1/2", "b", "salto", "layout", x, y, height, width, 5204),
                  
        
        //Cs
        
        new Skill("layout 1/2 or 360", "c", "salto", "layout", x, y, height, width, 4302),
        
        new Skill("540 or 720 layout", "c", "salto", "layout", x, y, height, width, 5301),
        
        new Skill("whip back 360", "c", "salto", "layout", x, y, height, width, 5304),
        
        //TEST
                new Skill("tuck jump", "a", "nonsalto", "jump", (x + width + incredment), y, height, width),

                new Skill("pike jump", "b", "nonsalto", "jump", (x + 2 * width + 2 * incredment), y, height, width),

                new Skill("360 turn", "a", "nonsalto", "turn", (x + 3 * width + 3 * incredment), y, height, width),

                new Skill("540 turn", "b", "nonsalto", "turn", (x + 4 * width + 4 * incredment), y, height, width),

                new Skill("back tuck", "a", "salto", "tuck", (x + 5 * width + 5 * incredment), y, height, width),

                new Skill("back tuck 180", "b", "salto", "tuck", (x + 6 * width + 6 * incredment), y, height, width),

                new Skill("back pike", "a", "salto", "pike", (x + 7 * width + 7 * incredment), y, height, width),

                new Skill("back layout", "a", "salto", "layout", (x + 8 * width + 8 * incredment), y, height, width),

            ]
}
