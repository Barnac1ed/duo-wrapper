import fetch from "node-fetch";
var base = "https://api.allorigins.win/get?url=";

/**
 * Duolingo API
 * @param {string} username Username
 */
function Duo(username) {
    if (!username) {
        throw new Error("Username is required");
    }

    var self = this;
    self.username = username;
    self.params = {
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "omit",
    };
}

// {"joinedClassroomIds":[],"streak":0,"motivation":"other","acquisitionSurveyReason":"other","shouldForceConnectPhoneNumber":false,"picture":"//simg-ssl.duolingo.com/avatars/915546027/4aR2Qf9gTJ","learningLanguage":"fr","hasFacebookId":false,"shakeToReportEnabled":null,"liveOpsFeatures":[],"canUseModerationTools":false,"id":915546027,"betaStatus":"INELIGIBLE","hasGoogleId":true,"privacySettings":[],"fromLanguage":"en","hasRecentActivity15":false,"_achievements":[{"tier":2,"count":0,"tierCounts":[2,7,30],"name":"streak","shouldShowUnlock":true},{"tier":0,"count":0,"tierCounts":[10,20,253],"name":"completion","shouldShowUnlock":false},{"tier":3,"count":1425,"tierCounts":[20,50,200],"name":"spending","shouldShowUnlock":true},{"tier":1,"count":0,"tierCounts":[1,1,1],"name":"items","shouldShowUnlock":true},{"tier":0,"count":0,"tierCounts":[1,1,1],"name":"time","shouldShowUnlock":false},{"tier":0,"count":0,"tierCounts":[3,3,1],"name":"social","shouldShowUnlock":false},{"tier":3,"count":34,"tierCounts":[50,100,200],"name":"xp","shouldShowUnlock":true},{"tier":3,"count":538,"tierCounts":[1,5,20],"name":"perfect","shouldShowUnlock":true}],"observedClassroomIds":[],"username":"NolanHight","bio":"","profileCountry":"US","globalAmbassadorStatus":{},"currentCourseId":"DUOLINGO_FR_EN","hasPhoneNumber":false,"creationDate":1648662748,"achievements":[],"hasPlus":false,"name":"daddy?!??","roles":["users"],"classroomLeaderboardsEnabled":false,"emailVerified":true,"courses":[{"preload":false,"placementTestAvailable":false,"authorId":"duolingo","title":"French","learningLanguage":"fr","xp":1894,"healthEnabled":true,"fromLanguage":"en","crowns":21,"id":"DUOLINGO_FR_EN"},{"preload":false,"placementTestAvailable":false,"authorId":"duolingo","title":"Swedish","learningLanguage":"sv","xp":7941,"healthEnabled":true,"fromLanguage":"en","crowns":166,"id":"DUOLINGO_SV_EN"},{"preload":false,"placementTestAvailable":false,"authorId":"duolingo","title":"High Valyrian","learningLanguage":"hv","xp":1575,"healthEnabled":true,"fromLanguage":"en","crowns":60,"id":"DUOLINGO_HV_EN"},{"preload":false,"placementTestAvailable":false,"authorId":"duolingo","title":"Welsh","learningLanguage":"cy","xp":195,"healthEnabled":true,"fromLanguage":"en","crowns":60,"id":"DUOLINGO_CY_EN"}],"totalXp":11605}

/**
 * Send a request to the Duolingo API
 * @param {Duo} self
 * @param {string} url
 * @returns {Promise}
*/
function request(self, url) {
    return fetch(url, self.params).then(res => {
        return res.json();
    }).catch(err => {
        return Promise.reject(err);
    });
}

/**
 * Parses data from Duolingo API
 * @param {Duo} self
 * @returns {Promise}
*/
function getData(self) {
    var url = base + encodeURIComponent(`https://www.duolingo.com/2017-06-30/users?username=${self.username}`);
    return request(self, url).then(res => {
        var data = JSON.parse(res.contents).users[0];
        if (!data) throw new Error("Invalid username");
        return data;
    });
}

/**
 * Gets the streak of the user
 * @returns {number}
*/
Duo.prototype.getStreak = function () {
    return getData(this).then(res => {
        return res.streak;
    });
}

/**
 * Gets the level of the user
 * @returns {string}
*/
Duo.prototype.getName = function () {
    return getData(this).then(res => {
        return res.name;
    });
}

/**
 * Gets the XP of a user
 * @returns {number}
*/
Duo.prototype.getXp = function () {

    return getData(this).then(res => {
        return res.totalXp;
    });
}

/**
 * Gets the current language of the user
 * @returns {string}
 */
Duo.prototype.getCurrentLang = function () {
    return getData(this).then(res => {
        return res.current_lang_id;
    });
}

/**
 * Checks if the user has premium
 * @returns {boolean}
*/
Duo.prototype.isPlus = function () {
    return getData(this).then(res => {
        return res.plus;
    });
}

/**
 * Checks if the user can use moderation tools
 * @returns {boolean}
*/
Duo.prototype.isMod = function () {
    return getData(this).then(res => {
        return res.canUseModerationTools;
    });
}

/**
 * Gets the user's courses
 * @returns {array}
*/
Duo.prototype.getCourses = function () {
    return getData(this).then(res => {
        return res.courses;
    });
}

/**
 * Gets the user's motivation
 * @returns {string}
*/
Duo.prototype.getMotivation = function () {
    return getData(this).then(res => {
        return res.motivation;
    });
}

/**
 * Gets the user's total crowns
 * @returns {number}
*/
Duo.prototype.getTotalCrowns = function () {
    return getData(this).then(res => {
        var courses = res.courses;
        var total = 0;
        courses.forEach((item) => {
            total += item.crowns;
        })
        return total;
    });
}

/**
 * Gets the user's native language
 * @returns {string}
*/
Duo.prototype.getNativeLang = function () {
    return getData(this).then(res => {
        return res.fromLanguage;
    });
}

/**
 * Gets the user's achievements
 * @returns {array}
*/
Duo.prototype.getAchievements = function () {
    return getData(this).then(res => {
        return res._achievements;
    });
}

/**
 * Checks if the user has a verified email
 * @returns {boolean}
*/
Duo.prototype.isEmailVerified = function () {
    return getData(this).then(res => {
        return res.emailVerified;
    });
}

export default Duo;