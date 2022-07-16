console.clear()

import Duo from "../index.js";
const duo = new Duo("NolanHight");

duo.getCourses().then(res => {
    res.forEach(item => {
        var title = item.title;
        var xp = item.xp;
        var crowns = item.crowns;

        var str = `${title}\nXP: ${xp}\nCrowns: ${crowns}\n`;
        console.log(str);
    });
});