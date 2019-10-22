//rect(50, 50, 50, 50);


function preload() {
    libraryOfSkills = [
                new Skill("split leap forward", "a", "nonsalto", "leap", x, y, height, width, img1101),
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