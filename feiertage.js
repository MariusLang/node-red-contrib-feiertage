module.exports = function(RED) {
    function feiertage(config) {
        RED.nodes.createNode(this,config);
        var context = this.context();
        var node = this;

        var checkNewYear = config.neujahr; // checkbox New Year
        var checkHolyThreeKings = config.heiligeDreiKoenige; // checkboy Holy Three Kings
        var checkWeiberfastnacht = config.weiberfastnacht; // checkbox Weiberfastnacht
        var checkValentinstag = config.valentinstag; // checkbox Valentinstag
        var checkRosenmontag = config.rosenmontag; // checkbox Rosenmontag
        var checkFastnachtsdienstag = config.fastnachtsdienstag; // checkbox Fastnachtsdienstag
        var checkAschermittwoch = config.aschermittwoch; // checkbox Aschermittwoch
        var checkGruendonnerstag = config.gruendonnerstag; // checkbox Gründonnerstag
        var checkKarfreitag = config.karfreitag; // checkbox Karfreitag
        var checkEasterSunday = config.easterSunday; // checkbox Easter Sunday
        var checkEasterMonday = config.easterMonday; // checkbox Easter Monday
        var checkChristiHimmelfahrt = config.christiHimmelfahrt; // checkbox Christihimmelfahrt
        var checkPfingstsonntag = config.pfingstsonntag; // checkbox Pfingstsonntag
        var checkPfingstmontag = config.pfingstmontag; // checkbox Pfingstmontag
        var checkFronleichnam = config.fronleichnam; // checkbox Fronleichnam
        var checkMariaHimmelfahrt = config.mariaHimmelfahrt; // checkbox Maria Himmelfahrt
        var checkTagDerDeutschenEinheit = config.tagDerDeutschenEinheit; // checkbox Tag der Deutschen Einheit
        var checkHalloween = config.halloween; // checkbox Halloween
        var checkAllerheiligen = config.allerheiligen; // checkbox Allerheiligen
        var checkStMartin = config.stMartin; // checkbox St. Martin
        var checkBussUndBettag = config.bussUndBettag; // checkbox Buß und Bettag
        var checkSanta = config.nikolaus; // checkbox Nikolaus
        var checkadvent1 = config.advent1; // checkbox 1. Advent
        var checkAdvent2 = config.advent2; // checkbox 2. Advent
        var checkAdvent3 = config.advent3; // checkbox 3. Advent
        var checkAdvent4 = config.advent4; // checkbox 4. Advent
        var checkChristmasEve = config.heiligabend; // checkbox Christmas Eve
        var checkFirstDayChristmas = config.weihnachten1; // checkbox First day of Chrsitmas
        var checkSecondDayChristmas = config.weihnachten2; // checkbox Second day of Christmas
        var checkNewYearsEve = config.silvester; // checkbox New Years Eve

        var checkOwnHoliday1 = config.ownHoliday1; // checkbox Own Holiday 1
        var dayOwnHoliday1 = config.ownHoliday1Day; // day Own Holiday 1
        var monthOwnHoliday1 = config.ownHoliday1Month; // month Own Holiday 1
        var nameOwnHoliday1 = config.ownHoliday1Name; // name Own Holiday 1

        var checkOwnHoliday2 = config.ownHoliday2; // checkbox Own Holiday 2
        var dayOwnHoliday2 = config.ownHoliday2Day; // day Own Holiday 2
        var monthOwnHoliday2 = config.ownHoliday2Month; // month Own Holiday 2
        var nameOwnHoliday2 = config.ownHoliday2Name; // name Own Holiday 2

        var checkOwnHoliday3 = config.ownHoliday3; // checkbox Own Holiday 3
        var dayOwnHoliday3 = config.ownHoliday3Day; // day Own Holiday 3
        var monthOwnHoliday3 = config.ownHoliday3Month; // month Own Holiday 3
        var nameOwnHoliday3 = config.ownHoliday3Name; // name Own Holiday 3

        var checkOwnHoliday4 = config.ownHoliday4; // checkbox Own Holiday 4
        var dayOwnHoliday4 = config.ownHoliday4Day; // day Own Holiday 4
        var monthOwnHoliday4 = config.ownHoliday4Month; // month Own Holiday 4
        var nameOwnHoliday4 = config.ownHoliday4Name; // name Own Holiday 4

        var checkOwnHoliday5 = config.ownHoliday5; // checkbox Own Holiday 5
        var dayOwnHoliday5 = config.ownHoliday5Day; // day Own Holiday 5
        var monthOwnHoliday5 = config.ownHoliday5Month; // month Own Holiday 5
        var nameOwnHoliday5 = config.ownHoliday5Name; // name Own Holiday 5

        var checkOwnHoliday6 = config.ownHoliday6; // checkbox Own Holiday 6
        var dayOwnHoliday6 = config.ownHoliday6Day; // day Own Holiday 6
        var monthOwnHoliday6 = config.ownHoliday6Month; // month Own Holiday 6
        var nameOwnHoliday6 = config.ownHoliday6Name; // name Own Holiday 6

        var checkOwnHoliday7 = config.ownHoliday7; // checkbox Own Holiday 7
        var dayOwnHoliday7 = config.ownHoliday7Day; // day Own Holiday 7
        var monthOwnHoliday7 = config.ownHoliday7Month; // month Own Holiday 7
        var nameOwnHoliday7 = config.ownHoliday7Name; // name Own Holiday 7

        var checkOwnHoliday8 = config.ownHoliday8; // checkbox Own Holiday 8
        var dayOwnHoliday8 = config.ownHoliday8Day; // day Own Holiday 8
        var monthOwnHoliday8 = config.ownHoliday8Month; // month Own Holiday 8
        var nameOwnHoliday8 = config.ownHoliday8Name; // name Own Holiday 8

        var checkOwnHoliday9 = config.ownHoliday9; // checkbox Own Holiday 9
        var dayOwnHoliday9 = config.ownHoliday9Day; // day Own Holiday 9
        var monthOwnHoliday9 = config.ownHoliday9Month; // month Own Holiday 9
        var nameOwnHoliday9 = config.ownHoliday9Name; // name Own Holiday 9

        var checkOwnHoliday10 = config.ownHoliday10; // checkbox Own Holiday 10
        var dayOwnHoliday10 = config.ownHoliday10Day; // day Own Holiday 10
        var monthOwnHoliday10 = config.ownHoliday10Month; // month Own Holiday 10
        var nameOwnHoliday10 = config.ownHoliday10Name; // name Own Holiday 10

        setCurrentDate(); // set current date on start

        var currentYear; // current year (yyyy)
        var currentMonth; // current month (1-12)
        var currentDay; // current day
        var currentHour; // current hour
        var currentMinute; // current minute

        var newYear = []; // day of New Year
        newYear[0] = "New Year";
        newYear[1] = "Neu Jahr";
        newYear[2] = getNeujahr(currentYear);
        var holyThreeKings = []; // day of Holy Three Kings
        holyThreeKings[0] = "Holy Three Kings";
        holyThreeKings[1] = "Heilige drei Könige";
        holyThreeKings[2] = getHeiligeDreiKoenige(currentYear);
        var weiberfastnacht = []; // day of Weiberfastnacht
        weiberfastnacht[0] = "Weiberfastnacht";
        weiberfastnacht[1] = "Weiberfastnacht";
        weiberfastnacht[2] = getWeiberfastnacht(currentYear);
        var valentinstag = []; // day of Valentinstag
        valentinstag[0] = "Valentinstag";
        valentinstag[1] = "Valentinstag";
        valentinstag[2] = getValentinstag(currentYear);
        var rosenmontag = []; // day of Rosenmontag
        rosenmontag[0] = "Rosenmontag";
        rosenmontag[1] = "Rosenmontag";
        rosenmontag[2] = getRosenmontag(currentYear);
        var fastnachtsdienstag = []; // day of Fastnachtsdienstag
        fastnachtsdienstag[0] = "Fastnachtdienstag";
        fastnachtsdienstag[1] = "Fastnachtdienstag";
        fastnachtsdienstag[2] = getFastnachtsdienstag(currentYear);
        var aschermittwoch = []; // day of Aschermittwoch
        aschermittwoch[0] = "Aschermittwoch";
        aschermittwoch[1] = "Aschermittwoch";
        aschermittwoch[2] = getAschermittwoch(currentYear);
        var gruendonnerstag = []; // day of Gründonnerstag
        gruendonnerstag[0] = "Gründonnerstag";
        gruendonnerstag[1] = "Gründonnerstag";
        gruendonnerstag[2] = getGruendonnerstag(currentYear);
        var karfreitag = []; // day of Karfreitag
        karfreitag[0] = "Karfreitag";
        karfreitag[1] = "Karfreitag";
        karfreitag[2] = getKarfreitag(currentYear);
        var easterSunday = []; // day of Easter Sunday
        easterSunday[0] = "Easter Sunday";
        easterSunday[1] = "Ostersonntag";
        easterSunday[2] = getOstersonntag(currentYear);
        var easterMonday = []; // day of easter Sunday
        easterMonday[0] = "Easter Monday";
        easterMonday[1] = "Ostermontag";
        easterMonday[2] = getOstermontag(currentYear);
        var christiHimmelfahrt = []; // day of Christi Himmelfahrt
        christiHimmelfahrt[0] = "Christi Himmelfahrt";
        christiHimmelfahrt[1] = "Christi Himmelfahrt";
        christiHimmelfahrt[2] = getChristiHimmelfahrt(currentYear);
        var pfingstsonntag = []; // day of Pfingstsonntag
        pfingstsonntag[0] = "Pfingstsonntag";
        pfingstsonntag[1] = "Pfingstsonntag";
        pfingstsonntag[2] = getPfingstsonntag(currentYear);
        var pfingstmontag = []; // day of Pfingstmontag
        pfingstmontag[0] = "Pfingstmontag";
        pfingstmontag[1] = "Pfingstmontag";
        pfingstmontag[2] = getPfingstmontag(currentYear);
        var fronleichnam = []; // day of Fronleichnam
        fronleichnam[0] = "Fronleichnam";
        fronleichnam[1] = "Fronleichnam";
        fronleichnam[2] = getFronleichnam(currentYear);
        var mariaHimmelfahrt = []; // day of Maria Himmelfahrt
        mariaHimmelfahrt[0] = "Maria Himmelfahrt";
        mariaHimmelfahrt[1] = "Maria Himmelfahrt";
        mariaHimmelfahrt[2] = getMariaHimmelfahrt(currentYear);
        var tagDerDeutschenEinheit = []; // day of Tag der Deutschen Einheit
        tagDerDeutschenEinheit[0] = "Tag der Deutschen Einheit";
        tagDerDeutschenEinheit[1] = "Tag der Deutschen Einheit";
        tagDerDeutschenEinheit[2] = getTagDerDeutschenEinheit(currentYear);
        var halloween = []; // day of Halloween
        halloween[0] = "Halloween";
        halloween[1] = "Halloween";
        halloween[2] = getHalloween(currentYear);
        var allerheiligen = []; // day of Allerheiligen
        allerheiligen[0] = "Allerheiligen";
        allerheiligen[1] = "Allerheiligen";
        allerheiligen[2] = getAllerheiligen(currentYear);
        var stMartin = []; // day of St. Martin
        stMartin[0] = "St. Martin";
        stMartin[1] = "St. Martin";
        stMartin[2] = getStMartin(currentYear);
        var bussUndBettag = []; // day of Buß und Bettag
        bussUndBettag[0] = "Buß und Bettag";
        bussUndBettag[1] = "Buß und Bettag";
        bussUndBettag[2] = getBussUndBettag(currentYear);
        var santa = []; // day of Nikolaus
        santa[0] = "Santa";
        santa[1] = "Nikolaus";
        santa[2] = getNikolaus(currentYear);
        var advent1 = []; // day of first Advent
        advent1[0] = "1. Advent";
        advent1[1] = "1. Advent";
        advent1[2] = getAdvent1(currentYear);
        var advent2 = []; // day of second Advent
        advent2[0] = "2. Advent";
        advent2[1] = "2. Advent";
        advent2[2] = getAdvent2(currentYear);
        var advent3 = []; // day of third Advent
        advent3[0] = "3. Advent";
        advent3[1] = "3. Advent";
        advent3[2] = getAdvent3(currentYear);
        var advent4 = []; // day of fourth Advent
        advent4[0] = "4. Advent";
        advent4[1] = "4. Advent";
        advent4[2] = getAdvent4(24, currentYear);
        var christmasEve = []; // day of Christmas Eve
        christmasEve[0] = "Christmas Eve";
        christmasEve[1] = "Heiligabend";
        christmasEve[2] = getHeiligabend(currentYear);
        var firstDayChristmas = []; // day of First day of Christmas
        firstDayChristmas[0] = "First day of Christmas";
        firstDayChristmas[1] = "1. Weihnachtsfeiertag";
        firstDayChristmas[2] = getWeihnachtsfeiertag1(currentYear);
        var secondDayChristmas = []; // day of Second day of Christmas
        secondDayChristmas[0] = "Second day of Christmas";
        secondDayChristmas[1] = "2. Weihnachtsfeiertag";
        secondDayChristmas[2] = getWeihnachtsfeiertag2(currentYear);
        var newYearsEve = []; // day of New Years Eve
        newYearsEve[0] = "New Years Eve";
        newYearsEve[1] = "Silvester";
        newYearsEve[2] = getSilvester(currentYear);

        var ownHoliday1 = []; // day of Own Holiday 1
        ownHoliday1[0] = nameOwnHoliday1;
        ownHoliday1[1] = nameOwnHoliday1;
        ownHoliday1[2] = getOwnHoliday1(currentYear);
        var ownHoliday2 = []; // day of Own Holiday 2
        ownHoliday2[0] = nameOwnHoliday2;
        ownHoliday2[1] = nameOwnHoliday2;
        ownHoliday2[2] = getOwnHoliday2(currentYear);
        var ownHoliday3 = []; // day of Own Holiday 3
        ownHoliday3[0] = nameOwnHoliday3;
        ownHoliday3[1] = nameOwnHoliday3;
        ownHoliday3[2] = getOwnHoliday3(currentYear);
        var ownHoliday4 = []; // day of Own Holiday 4
        ownHoliday4[0] = nameOwnHoliday4;
        ownHoliday4[1] = nameOwnHoliday4;
        ownHoliday4[2] = getOwnHoliday4(currentYear);
        var ownHoliday5 = []; // day of Own Holiday 5
        ownHoliday5[0] = nameOwnHoliday5;
        ownHoliday5[1] = nameOwnHoliday5;
        ownHoliday5[2] = getOwnHoliday5(currentYear);
        var ownHoliday6 = []; // day of Own Holiday 6
        ownHoliday6[0] = nameOwnHoliday6;
        ownHoliday6[1] = nameOwnHoliday6;
        ownHoliday6[2] = getOwnHoliday6(currentYear);
        var ownHoliday7 = []; // day of Own Holiday 7
        ownHoliday7[0] = nameOwnHoliday7;
        ownHoliday7[1] = nameOwnHoliday7;
        ownHoliday7[2] = getOwnHoliday7(currentYear);
        var ownHoliday8 = []; // day of Own Holiday 8
        ownHoliday8[0] = nameOwnHoliday8;
        ownHoliday8[1] = nameOwnHoliday8;
        ownHoliday8[2] = getOwnHoliday8(currentYear);
        var ownHoliday9 = []; // day of Own Holiday 9
        ownHoliday9[0] = nameOwnHoliday9;
        ownHoliday9[1] = nameOwnHoliday9;
        ownHoliday9[2] = getOwnHoliday9(currentYear);
        var ownHoliday10 = []; // day of Own Holiday 10
        ownHoliday10[0] = nameOwnHoliday10;
        ownHoliday10[1] = nameOwnHoliday10;
        ownHoliday10[2] = getOwnHoliday10(currentYear);

        var holiday = [];

        checkbox();

        this.on('input', function(msg) {
            var payload = msg.payload;
            switch (payload) {
                case "all":
                    sendAll(); // outputs all holidays
                    break;
                case "isTodayHoliday":
                    isTodayHoliday(); // outputs boolean wether today is holiday
                    break;
                case "nextHoliday":
                    sendNextHoliday(); // outputs next holiday
                    break;
                case "nextThreeHolidays":
                    sendNextThreeHolidays(); // outputs next 3 holidays
                    break;
            }
        });

        var dailyInterval = setInterval(function () {
            setCurrentDate(); // refresh current date
            // output boolean wether roday is holiday every day at 00:01 o'clock
            if (currentHour == 0 && currentMinute == 1) {
                refreshHoliday(); // refresh holiday
                isTodayHoliday(); // outputs boolean wether today is holiday
            }
        }, 60000);

        function getNeujahr(year) {
            return year + "-1-1";
        }

        function getHeiligeDreiKoenige(year) {
            return year + "-1-6";
        }

        function getWeiberfastnacht(year) {
            var refereceDate = new Date(getOstersonntag(year));
            refereceDate.setDate(refereceDate.getDate() - 52); // Weiberfastnacht = eastersunday - 52 days
            return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
        }

        function getValentinstag(year) {
            return year + "-2-14";
        }

        function getRosenmontag(year) {
            var refereceDate = new Date(getOstersonntag(year));
            refereceDate.setDate(refereceDate.getDate() - 48); // Rosenmontag = eastersunday - 48
            return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
        }

        function getFastnachtsdienstag(year) {
            var refereceDate = new Date(getOstersonntag(year));
            refereceDate.setDate(refereceDate.getDate() - 47); // Fastnachtsdienstag = eastersunday - 47
            return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
        }

        function getAschermittwoch(year) {
            var refereceDate = new Date(getOstersonntag(year));
            refereceDate.setDate(refereceDate.getDate() - 46); // Aschermittwoch = eastersunday - 46
            return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
        }

        function getGruendonnerstag(year) {
            var refereceDate = new Date(getOstersonntag(year));
            refereceDate.setDate(refereceDate.getDate() - 3); // Gründonnerstag = eastersunday - 3
            return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
        }

        function getKarfreitag(year) {
            var refereceDate = new Date(getOstersonntag(year));
            refereceDate.setDate(refereceDate.getDate() - 2); // Karfreitag = eastersunday - 2
            return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
        }

        function getOstersonntag(year) {
            var a = year % 19; // currentYear mod 19
            var b = (19 * a + 24) % 30;
            var easterSundayDay = b + (2 * (year % 4) + 4 * (year % 7) + 6 * b + 5) % 7;
            
            if (easterSundayDay == 35 || (easterSundayDay == 34 && b == 28 && a > 10)) {
                easterSundayDay -= 7;
            }
            // generate easterDate and change Parameters to easter Date
            var easterDate = new Date(year, 2, 22);
            easterDate.setTime(easterDate.getTime() + 86400000 * easterSundayDay);
            var easterMonth = easterDate.getMonth() + 1;
            var easterDay = easterDate.getDate();
            
            return year + "-" + easterMonth + "-" + easterDay;
        }

        function getOstermontag(year) {
            var refereceDate = new Date(getOstersonntag(year));
            refereceDate.setDate(refereceDate.getDate() + 1); // eastermonday = eastersunday + 1
            return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
        }

        function getChristiHimmelfahrt(year) {
            var refereceDate = new Date(getOstersonntag(year));
            refereceDate.setDate(refereceDate.getDate() + 39); // Christi Himmelfahrt = eastersunday + 39
            return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
        }

        function getPfingstsonntag(year) {
            var refereceDate = new Date(getOstersonntag(year));
            refereceDate.setDate(refereceDate.getDate() + 49); // Pfingstsonntag = eastersunday + 49
            return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
        }

        function getPfingstmontag(year) {
            var refereceDate = new Date(getOstersonntag(year));
            refereceDate.setDate(refereceDate.getDate() + 50); // Pfingstmontag = eastersunday + 50
            return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
        }

        function getFronleichnam(year) {
            var refereceDate = new Date(getOstersonntag(year));
            refereceDate.setDate(refereceDate.getDate() + 60); // Fronleichnam = eastersunday + 60
            return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
        }

        function getMariaHimmelfahrt(year) {
            return year + "-8-15";
        }

        function getTagDerDeutschenEinheit(year) {
            return year + "-10-3";
        }

        function getHalloween(year) {
            return year + "-10-31";
        }

        function getAllerheiligen(year) {
            return year + "-11-1";
        }

        function getStMartin(year) {
            return year + "-11-11";
        }

        function getBussUndBettag(year) {
            var refereceDate = new Date(getAdvent4(24, year));
            refereceDate.setDate(refereceDate.getDate() - 32); // Buß und Bettag = 4. Advent - 32
            return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
        }

        function getNikolaus(year) {
            return year + "-12-6";
        }

        function getAdvent1(year) {
            var refereceDate = new Date(getAdvent4(24, year));
            refereceDate.setDate(refereceDate.getDate() - 21); // 1. Advent = 4. Advent - 21
            return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
        }

        function getAdvent2(year) {
            var refereceDate = new Date(getAdvent4(24, year));
            refereceDate.setDate(refereceDate.getDate() - 14); // 2. Advent = 4. Advent - 14
            return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
        }

        function getAdvent3(year) {
            var refereceDate = new Date(getAdvent4(24, year));
            refereceDate.setDate(refereceDate.getDate() - 7); // 3. Advent = 4. Advent - 7
            return year + "-" + (refereceDate.getMonth() + 1) + "-" + refereceDate.getDate();
        }

        function getAdvent4(day, year) {
            // calculates days of advent
            var checkDate = new Date(year + "-12-" + day); // generate object of specific day
            var checkMonth = checkDate.getMonth() + 1; // month (should be 12)
            var checkWeekday = checkDate.getDay(); // weekday

            // check generated weekday is 0 and generated month is 12
            if (checkWeekday === 0 && checkMonth == 12) {
                return year + "-" + checkMonth + "-" + day;
            }
            else {
                return getAdvent4(day - 1, year);
            }
        }

        function getHeiligabend(year) {
            return year + "-12-24";
        }

        function getWeihnachtsfeiertag1(year) {
            return year + "-12-25";
        }

        function getWeihnachtsfeiertag2(year) {
            return year + "-12-26";
        }

        function getSilvester(year) {
            return year + "-12-31";
        }

        function getOwnHoliday1(year) {
            return year + "-" + monthOwnHoliday1 + "-" + dayOwnHoliday1;
        }

        function getOwnHoliday2(year) {
            return year + "-" + monthOwnHoliday2 + "-" + dayOwnHoliday2;
        }

        function getOwnHoliday3(year) {
            return year + "-" + monthOwnHoliday3 + "-" + dayOwnHoliday3;
        }

        function getOwnHoliday4(year) {
            return year + "-" + monthOwnHoliday4 + "-" + dayOwnHoliday4;
        }

        function getOwnHoliday5(year) {
            return year + "-" + monthOwnHoliday5 + "-" + dayOwnHoliday5;
        }

        function getOwnHoliday6(year) {
            return year + "-" + monthOwnHoliday6 + "-" + dayOwnHoliday6;
        }

        function getOwnHoliday7(year) {
            return year + "-" + monthOwnHoliday7 + "-" + dayOwnHoliday7;
        }

        function getOwnHoliday8(year) {
            return year + "-" + monthOwnHoliday8 + "-" + dayOwnHoliday8;
        }

        function getOwnHoliday9(year) {
            return year + "-" + monthOwnHoliday9 + "-" + dayOwnHoliday9;
        }

        function getOwnHoliday10(year) {
            return year + "-" + monthOwnHoliday10 + "-" + dayOwnHoliday10;
        }

        function setCurrentDate() {
            var currentDate = new Date(); // create current date
            currentYear = currentDate.getFullYear(); // set current year
            currentMonth = currentDate.getMonth() + 1; // set current month
            currentDay = currentDate.getDate(); // set current day
            currentHour = currentDate.getHours(); // set current hour
            currentMinute = currentDate.getMinutes(); // set current minute
        }

        function sendAll() {
            // outputs all holidays
            refreshHoliday(); // refresh holiday array
            sortHolidayArray(); // sort holiday array
            for (let i = 0; i < holiday.length; i++) {
                node.send({payload: holiday[i]}); // send every item of holiday array
            }
        }

        function isTodayHoliday() {
            // outputs boolean wether today is holiday
            refreshHoliday(); // refresh holiday array
            if (holiday.length == 0) {
                todayHoliday = false; // if there aren't items in holiday array today can't be holiday
            }
            else {
                for (let i = 0; i < holiday.length; i++) {
                    var temp = holiday[i];
                    var todayHoliday;
                    // check item of holiday array equals todays date
                    if (new Date(temp[2]).valueOf() == new Date(currentYear + "-" + currentMonth + "-" + currentDay).valueOf()) {
                        todayHoliday = true;
                        break;
                    }
                    else {
                        todayHoliday = false;
                    }
                }
                node.send({payload: todayHoliday}); // send boolean
            }
        }

        function sendNextHoliday() {
            // outputs next holiday
            refreshHoliday(); // refresh holiday array
            sortHolidayArray(); // sort holiday array
            node.send({payload: holiday[holiday.length - 1]}); // send last item of holiday array
        }

        function sendNextThreeHolidays() {
            refreshHoliday(); // refresh holiday array
            sortHolidayArray(); // sort holiday array
            node.send({payload: holiday[holiday.length - 1]}); // send last item of holiday array
            node.send({payload: holiday[holiday.length - 2]}); // send penultimate item of holiday array
            node.send({payload: holiday[holiday.length - 3]}); // send before penultimate item of holiday array
        }

        function refreshHoliday() {
            // if holiday is already over create new date (next year)
            if ((new Date(newYear[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                newYear[2] = getNeujahr(currentYear + 1);
            }
            if ((new Date(holyThreeKings[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                holyThreeKings[2] = getHeiligeDreiKoenige(currentYear + 1);
            }
            if ((new Date(valentinstag[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                valentinstag[2] = getValentinstag(currentYear + 1);
            }
            if ((new Date(rosenmontag[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                rosenmontag[2] = getRosenmontag(currentYear + 1);
            }
            if ((new Date(fastnachtsdienstag[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                fastnachtsdienstag[2] = getFastnachtsdienstag(currentYear + 1);
            }
            if ((new Date(aschermittwoch[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                aschermittwoch[2] = getAschermittwoch(currentYear + 1);
            }
            if ((new Date(gruendonnerstag[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                gruendonnerstag[2] = getGruendonnerstag(currentYear + 1);
            }
            if ((new Date(karfreitag[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                karfreitag[2] = getKarfreitag(currentYear + 1);
            }
            if ((new Date(easterSunday[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                easterSunday[2] = getOstersonntag(currentYear + 1);
            }
            if ((new Date(easterMonday[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                easterMonday[2] = getOstermontag(currentYear + 1);
            }
            if ((new Date(christiHimmelfahrt[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                christiHimmelfahrt[2] = getChristiHimmelfahrt(currentYear + 1);
            }
            if ((new Date(pfingstsonntag[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                pfingstsonntag[2] = getPfingstsonntag(currentYear + 1);
            }
            if ((new Date(pfingstmontag[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                pfingstmontag[2] = getPfingstmontag(currentYear + 1);
            }
            if ((new Date(fronleichnam[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                fronleichnam[2] = getFronleichnam(currentYear + 1);
            }
            if ((new Date(mariaHimmelfahrt[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                mariaHimmelfahrt[2] = getMariaHimmelfahrt(currentYear + 1);
            }
            if ((new Date(tagDerDeutschenEinheit[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                tagDerDeutschenEinheit[2] = getTagDerDeutschenEinheit(currentYear + 1);
            }
            if ((new Date(weiberfastnacht[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                weiberfastnacht[2] = getWeiberfastnacht(currentYear + 1);
            }
            if ((new Date(halloween[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                halloween[2] = getHalloween(currentYear + 1);
            }
            if ((new Date(allerheiligen[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                allerheiligen[2] = getAllerheiligen(currentYear + 1);
            }
            if ((new Date(stMartin[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                stMartin[2] = getStMartin(currentYear + 1);
            }
            if ((new Date(bussUndBettag[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                bussUndBettag[2] = getBussUndBettag(currentYear + 1);
            }
            if ((new Date(advent1[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                advent1[2] = getAdvent1(currentYear + 1);
            }
            if ((new Date(advent2[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                advent2[2] = getAdvent2(currentYear + 1);
            }
            if ((new Date(advent3[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                advent3[2] = getAdvent3(currentYear + 1);
            }
            if ((new Date(advent4[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                advent4[2] = getAdvent4(24, currentYear + 1);
            }
            if ((new Date(christmasEve[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                christmasEve[2] = getHeiligabend(currentYear + 1);
            }
            if ((new Date(firstDayChristmas[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                firstDayChristmas[2] = getWeihnachtsfeiertag1(currentYear + 1);
            }
            if ((new Date(secondDayChristmas[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                secondDayChristmas[2] = getWeihnachtsfeiertag2(currentYear + 1);
            }
            if ((new Date(newYearsEve[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                newYearsEve[2] = getSilvester(currentYear + 1);
            }
            if ((new Date(ownHoliday1[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                ownHoliday1[2] = getOwnHoliday1(currentYear + 1);
            }
            if ((new Date(santa[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                santa[2] = getNikolaus(currentYear + 1);
            }
            if ((new Date(ownHoliday2[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                ownHoliday2[2] = getOwnHoliday2(currentYear + 1);
            }
            if ((new Date(ownHoliday3[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                ownHoliday3[2] = getOwnHoliday3(currentYear + 1);
            }
            if ((new Date(ownHoliday4[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                ownHoliday4[2] = getOwnHoliday4(currentYear + 1);
            }
            if ((new Date(ownHoliday5[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                ownHoliday5[2] = getOwnHoliday5(currentYear + 1);
            }
            if ((new Date(ownHoliday6[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                ownHoliday6[2] = getOwnHoliday6(currentYear + 1);
            }
            if ((new Date(ownHoliday7[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                ownHoliday7[2] = getOwnHoliday7(currentYear + 1);
            }
            if ((new Date(ownHoliday8[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                ownHoliday8[2] = getOwnHoliday8(currentYear + 1);
            }
            if ((new Date(ownHoliday9[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                ownHoliday9[2] = getOwnHoliday9(currentYear + 1);
            }
            if ((new Date(ownHoliday10[2]) - new Date(currentYear + "-" + currentMonth + "-" + currentDay)) < 0) {
                ownHoliday10[2] = getOwnHoliday10(currentYear + 1);
            }
        }

        function sortHolidayArray() {
            // sorts holiday array
            // latest date at last
            holiday.sort(function(a, b) {
                if (new Date(a[2]) > new Date(b[2])) {
                    return -1;
                }
                if (new Date(a[2]) < new Date(b[2])) {
                    return 1;
                }
                return 0;
            });
        }

        function checkbox() {
            // check New Year is activated
            if (checkNewYear) {
                holiday.push(newYear); // add New Year to holiday array
            }
            else {
                var index = holiday.indexOf(newYear); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Holy Three Kings is activated
            if (checkHolyThreeKings) {
                holiday.push(holyThreeKings); // add Holy Three Kings to holiday array
            }
            else {
                var index = holiday.indexOf(holyThreeKings); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Weiberfastnacht is activated
            if (checkWeiberfastnacht) {
                holiday.push(weiberfastnacht); // add Weiberfastnacht to holiday array
            }
            else {
                var index = holiday.indexOf(weiberfastnacht); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Valentinstag is activated
            if (checkValentinstag) {
                holiday.push(valentinstag); // add Valentinstag to holiday array
            }
            else {
                var index = holiday.indexOf(valentinstag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Rosenmontag is activated
            if (checkRosenmontag) {
                holiday.push(rosenmontag); // add Rosenmontag to holiday array
            }
            else {
                var index = holiday.indexOf(rosenmontag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Fastnachtsdienstag is activated
            if (checkFastnachtsdienstag) {
                holiday.push(fastnachtsdienstag); // add Fastnachtsdienstag to holiday array
            }
            else {
                var index = holiday.indexOf(fastnachtsdienstag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Aschermittwoch is activated
            if (checkAschermittwoch) {
                holiday.push(aschermittwoch); // add Aschermittwoch to holiday array
            }
            else {
                var index = holiday.indexOf(aschermittwoch); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Gründonnerstag is activated
            if (checkGruendonnerstag) {
                holiday.push(gruendonnerstag); // add Gründonnerstag to holiday array
            }
            else {
                var index = holiday.indexOf(gruendonnerstag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Karfreitag is activated
            if (checkKarfreitag) {
                holiday.push(karfreitag); // add Karfreitag to holiday array
            }
            else {
                var index = holiday.indexOf(karfreitag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Easter Sunday is activated
            if (checkEasterSunday) {
                holiday.push(easterSunday); // add Easter Sunday to holiday array
            }
            else {
                var index = holiday.indexOf(easterSunday); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Easter Monday is activated
            if (checkEasterMonday) {
                holiday.push(easterMonday); // add Easter Monday to holiday array
            }
            else {
                var index = holiday.indexOf(easterMonday); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Christi Himmelfahrt is activated
            if (checkChristiHimmelfahrt) {
                holiday.push(christiHimmelfahrt); // add Christi Himmelfahrt to holiday array
            }
            else {
                var index = holiday.indexOf(christiHimmelfahrt); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Pfingstsonntag is activated
            if (checkPfingstsonntag) {
                holiday.push(pfingstsonntag); // add Pfingstsonntag to holiday array
            }
            else {
                var index = holiday.indexOf(pfingstsonntag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Pfingstmontag is activated
            if (checkPfingstmontag) {
                holiday.push(pfingstmontag); // add Pfingstmontag to holiday array
            }
            else {
                var index = holiday.indexOf(pfingstmontag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Fronleichnam is activated
            if (checkFronleichnam) {
                holiday.push(fronleichnam); // add Fronleichnam to holiday array
            }
            else {
                var index = holiday.indexOf(fronleichnam); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Maria Himmelfahrt is activated
            if (checkMariaHimmelfahrt) {
                holiday.push(mariaHimmelfahrt); // add Maria Himmelfahrt to holiday array
            }
            else {
                var index = holiday.indexOf(mariaHimmelfahrt); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Tag der Deutschen Einheit is activated
            if (checkTagDerDeutschenEinheit) {
                holiday.push(tagDerDeutschenEinheit); // add Tag der Deutschen Einheit to holiday array
            }
            else {
                var index = holiday.indexOf(tagDerDeutschenEinheit); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Halloween is activated
            if (checkHalloween) {
                holiday.push(halloween); // add Halloween to holiday array
            }
            else {
                var index = holiday.indexOf(halloween); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Allerheiligen is activated
            if (checkAllerheiligen) {
                holiday.push(allerheiligen); // add Allerheiligen to holiday array
            }
            else {
                var index = holiday.indexOf(allerheiligen); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check St. Martin is activated
            if (checkStMartin) {
                holiday.push(stMartin); // add St. Martin to holiday array
            }
            else {
                var index = holiday.indexOf(stMartin); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Buß und Bettag is activated
            if (checkBussUndBettag) {
                holiday.push(bussUndBettag); // add Buß und Bettag to holiday array
            }
            else {
                var index = holiday.indexOf(bussUndBettag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Santa is activated
            if (checkSanta) {
                holiday.push(santa); // add Santa to holiday array
            }
            else {
                var index = holiday.indexOf(santa); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check 1. Advent is activated
            if (checkadvent1) {
                holiday.push(advent1); // add 1. Advent to holiday array
            }
            else {
                var index = holiday.indexOf(advent1); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check 2. Advent is activated
            if (checkAdvent2) {
                holiday.push(advent2); // add 2. Advent to holiday array
            }
            else {
                var index = holiday.indexOf(advent2); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check 3. Advent is activated
            if (checkAdvent3) {
                holiday.push(advent3); // add 3. Advent to holiday array
            }
            else {
                var index = holiday.indexOf(advent3); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check 4. Advent is activated
            if (checkAdvent4) {
                holiday.push(advent4); // add 4. Advent to holiday array
            }
            else {
                var index = holiday.indexOf(advent4); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Christmas Eve is activated
            if (checkChristmasEve) {
                holiday.push(christmasEve); // add Christmas Eve to holiday array
            }
            else {
                var index = holiday.indexOf(christmasEve); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check First day of Christmas is activted
            if (checkFirstDayChristmas) {
                holiday.push(firstDayChristmas); // add First day of Christmas to holiday array
            }
            else {
                var index = holiday.indexOf(firstDayChristmas); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Second day of Christmas is activated
            if (checkSecondDayChristmas) {
                holiday.push(secondDayChristmas); // add Second Christmas Day to holiday array
            }
            else {
                var index = holiday.indexOf(secondDayChristmas); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check New Years Eve is activated
            if (checkNewYearsEve) {
                holiday.push(newYearsEve); // add New Years Eve to holiday array
            }
            else {
                var index = holiday.indexOf(newYearsEve); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            //check Own Holiday 1 is activated
            if (checkOwnHoliday1) {
                holiday.push(ownHoliday1); // add Won Holiday 1 to holiday array
            }
            else {
                var index = holiday.indexOf(ownHoliday1); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            //check Own Holiday 2 is activated
            if (checkOwnHoliday2) {
                holiday.push(ownHoliday2); // add Won Holiday 2 to holiday array
            }
            else {
                var index = holiday.indexOf(ownHoliday2); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            //check Own Holiday 3 is activated
            if (checkOwnHoliday3) {
                holiday.push(ownHoliday3); // add Won Holiday 3 to holiday array
            }
            else {
                var index = holiday.indexOf(ownHoliday3); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            //check Own Holiday 4 is activated
            if (checkOwnHoliday4) {
                holiday.push(ownHoliday4); // add Won Holiday 4 to holiday array
            }
            else {
                var index = holiday.indexOf(ownHoliday4); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            //check Own Holiday 5 is activated
            if (checkOwnHoliday5) {
                holiday.push(ownHoliday5); // add Won Holiday 5 to holiday array
            }
            else {
                var index = holiday.indexOf(ownHoliday5); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            //check Own Holiday 6 is activated
            if (checkOwnHoliday6) {
                holiday.push(ownHoliday6); // add Won Holiday 6 to holiday array
            }
            else {
                var index = holiday.indexOf(ownHoliday6); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            //check Own Holiday 7 is activated
            if (checkOwnHoliday7) {
                holiday.push(ownHoliday7); // add Won Holiday 7 to holiday array
            }
            else {
                var index = holiday.indexOf(ownHoliday7); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            //check Own Holiday 8 is activated
            if (checkOwnHoliday8) {
                holiday.push(ownHoliday8); // add Won Holiday 8 to holiday array
            }
            else {
                var index = holiday.indexOf(ownHoliday8); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            //check Own Holiday 9 is activated
            if (checkOwnHoliday9) {
                holiday.push(ownHoliday9); // add Won Holiday 9 to holiday array
            }
            else {
                var index = holiday.indexOf(ownHoliday9); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            //check Own Holiday 10 is activated
            if (checkOwnHoliday10) {
                holiday.push(ownHoliday10); // add Won Holiday 10 to holiday array
            }
            else {
                var index = holiday.indexOf(ownHoliday10); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
        }

        this.on('close', function() {
            if (interval) {
                clearInterval(dailyInterval);
            }
        });
    }
    RED.nodes.registerType("feiertage", feiertage);
};