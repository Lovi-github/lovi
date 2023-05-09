var universitiesToTeams = new Map();
addTeam(universitiesToTeams, "浙江大学", "浙大-team1");
addTeam(universitiesToTeams, "浙江大学", "浙大-team2");
addTeam(universitiesToTeams, "浙江大学", "浙大-team3");
addTeam(universitiesToTeams, "中国美术学院", "中美-team1");
addTeam(universitiesToTeams, "中国美术学院", "中美-team2");
addTeam(universitiesToTeams, "浙江工业大学", "浙工大-team1");
addTeam(universitiesToTeams, "浙江工业大学", "浙工大-team2");
addTeam(universitiesToTeams, "浙江师范大学", "浙师大-team1");
addTeam(universitiesToTeams, "浙江师范大学", "浙师大-team2");
addTeam(universitiesToTeams, "宁波大学", "宁波大-team1");
addTeam(universitiesToTeams, "宁波大学", "宁波大-team2");
addTeam(universitiesToTeams, "杭州电子科技大学", "杭电-team1");
addTeam(universitiesToTeams, "杭州电子科技大学", "杭电-team2");
addTeam(universitiesToTeams, "浙江工商大学", "浙商大-team1");
addTeam(universitiesToTeams, "浙江工商大学", "浙商大-team2");
addTeam(universitiesToTeams, "浙江理工大学", "浙理工-team1");
addTeam(universitiesToTeams, "浙江理工大学", "浙理工-team2");
addTeam(universitiesToTeams, "温州医科大学", "温医-team1");
addTeam(universitiesToTeams, "温州医科大学", "温医-team2");
addTeam(universitiesToTeams, "温州医科大学", "温医-team3");
addTeam(universitiesToTeams, "浙江海洋大学", "海洋大-team1");
addTeam(universitiesToTeams, "浙江海洋大学", "海洋大-team2");
addTeam(universitiesToTeams, "浙江农林大学", "农林大-team1");
addTeam(universitiesToTeams, "浙江农林大学", "农林大-team2");
addTeam(universitiesToTeams, "浙江中医药大学", "中药大-team1");
addTeam(universitiesToTeams, "浙江中医药大学", "中药大-team2");
addTeam(universitiesToTeams, "中国计量大学", "计量大-team1");
addTeam(universitiesToTeams, "中国计量大学", "计量大-team2");
addTeam(universitiesToTeams, "中国计量大学", "计量大-team3");
addTeam(universitiesToTeams, "浙江万里学院", "万里院-team1");
addTeam(universitiesToTeams, "浙江万里学院", "万里院-team2");
addTeam(universitiesToTeams, "浙江科技学院", "浙科院-team1");
addTeam(universitiesToTeams, "浙江科技学院", "浙科院-team2");
addTeam(universitiesToTeams, "浙江财经大学", "浙财大-team1");
addTeam(universitiesToTeams, "浙江财经大学", "浙财大-team2");
addTeam(universitiesToTeams, "嘉兴学院", "嘉院-team1");
addTeam(universitiesToTeams, "嘉兴学院", "嘉院-team2");
addTeam(universitiesToTeams, "浙大城市学院", "城市院-team1");
addTeam(universitiesToTeams, "浙大城市学院", "城市院-team2");
addTeam(universitiesToTeams, "浙大宁波理工学院", "宁波理工-team1");
addTeam(universitiesToTeams, "浙大宁波理工学院", "宁波理工-team2");
addTeam(universitiesToTeams, "杭州师范大学", "杭师大-team1");
addTeam(universitiesToTeams, "杭州师范大学", "杭师大-team2");
addTeam(universitiesToTeams, "湖州师范学院", "湖师院-team1");
addTeam(universitiesToTeams, "湖州师范学院", "湖师院-team2");
addTeam(universitiesToTeams, "绍兴文理学院", "绍文理-team1");
addTeam(universitiesToTeams, "绍兴文理学院", "绍文理-team2");
addTeam(universitiesToTeams, "台州学院", "台院-team1");
addTeam(universitiesToTeams, "台州学院", "台院-team2");
addTeam(universitiesToTeams, "温州大学", "温大-team1");
addTeam(universitiesToTeams, "温州大学", "温大-team2");
addTeam(universitiesToTeams, "温州大学", "温大-team3");
addTeam(universitiesToTeams, "浙江外国语学院", "外国语-team1");
addTeam(universitiesToTeams, "浙江外国语学院", "外国语-team2");
addTeam(universitiesToTeams, "浙江传媒学院", "传媒院-team1");
addTeam(universitiesToTeams, "浙江传媒学院", "传媒院-team2");
addTeam(universitiesToTeams, "浙江传媒学院", "传媒院-team3");
addTeam(universitiesToTeams, "宁波工程学院", "宁波工-team1");
addTeam(universitiesToTeams, "宁波工程学院", "宁波工-team2");
addTeam(universitiesToTeams, "宁波工程学院", "宁波工-team3");
addTeam(universitiesToTeams, "衢州学院", "衢院-team1");
addTeam(universitiesToTeams, "衢州学院", "衢院-team2");
addTeam(universitiesToTeams, "浙江水利水电学院", "浙水利-team1");
addTeam(universitiesToTeams, "浙江水利水电学院", "浙水利-team2");
addTeam(universitiesToTeams, "浙江树人学院", "浙树院-team1");
addTeam(universitiesToTeams, "浙江树人学院", "浙树院-team2");
addTeam(universitiesToTeams, "杭州医学院", "杭医-team1");
addTeam(universitiesToTeams, "杭州医学院", "杭医-team2");
addTeam(universitiesToTeams, "丽水学院", "丽院-team1");
addTeam(universitiesToTeams, "丽水学院", "丽院-team2");
addTeam(universitiesToTeams, "丽水学院", "丽院-team3");
// 从Map对象获取所有学校和队伍的数组
var universities = Array.from(universitiesToTeams.keys());
var teams = Array.from(universitiesToTeams.values());
var universitiesAndTeams = [];
universitiesToTeams.forEach(function(value, key) {
    universitiesAndTeams.push({ university: key, teams: value });
});
console.log(universitiesAndTeams)


// 将映射对象展平为二维数组，方便在模板中循环
let teamsFlat = [];
for (let [university, teams] of universitiesToTeams) {
    teamsFlat.push(...teams);
}


var groupButton = document.getElementById("group-button");
//给group-button设定了单击事件
groupButton.addEventListener("click", function() {
    var group1 = [];
    var group2 = [];

    universitiesToTeams.forEach(function(teamList) {
        shuffle(teamList);//打乱teamlist，也就是打乱高校内部的队伍名。
        var size = teamList.length;
        // var mid = Math.floor(size / 2);
        /*如果队伍是奇数，那么就把前面的分了，最后一个随机分配到1,2两个队伍里*/
        if (size % 2 != 0) {
            // var rand = Math.floor(Math.random() * 2);
            // if (rand == 0) {
            //     mid += 1;
            // }
            group1.push(teamList[0]);
            group2.push(teamList[1]);
            //奇数的时候，把第三个给少的队伍！
            if (group1.length < group2.length) {
                group1.push(teamList[2]);
            } else {
                group2.push(teamList[2]);
            }
        }else {//偶数的时候，一个队伍一个
            group1.push(teamList[0]);
            group2.push(teamList[1]);
        }

        // var size = teamList.length;
        // var mid = Math.ceil(size / 2);
        // if (size % 2 != 0) {
        //     if (group1.length < group2.length) {
        //         group1.push(teamList[size-1]);
        //     } else {
        //         group2.push(teamList[size-1]);
        //     }
        //     teamList.pop();
        // }
        // group1.push.apply(group1, teamList.slice(0, mid));
        // group2.push.apply(group2, teamList.slice(mid));

    });

    console.log("group1:"+group1)
    console.log("group2:"+group2)

    //打乱所有队伍！
    shuffle(group1);
    shuffle(group2);



    // 获取所有的box下的子元素
    const teamNameElements = document.querySelectorAll('#box11 #leftTableInner .box .teamName');
    const schNameElement = document.querySelectorAll('#box11 #leftTableInner .box .schName');
    const noElement = document.querySelectorAll('#box11 #leftTableInner .box .no');
    const teamNameElements2 = document.querySelectorAll('#box22 #rightTableInner .box .teamName');
    const schNameElement2 = document.querySelectorAll('#box22 #rightTableInner .box .schName');
    const noElement2 = document.querySelectorAll('#box22 #rightTableInner .box .no');
    // 检查和渲染左侧队伍
    checkAndRenderGroup(group1, teamNameElements, noElement,"leftTableInner");
    // 检查和渲染右侧右侧
    checkAndRenderGroup(group2, teamNameElements2, noElement2,"rightTableInner");


    //填充数据
    fillDataToElements(group1, noElement, teamNameElements, schNameElement,"leftTableInner");
    fillDataToElements(group2, noElement2, teamNameElements2, schNameElement2,"rightTableInner");

});

/*
这是一个JavaScript函数，它接受三个参数：一个Map对象，一个键k和一个值v。
如果Map对象已经包含键k，则将值v添加到与该键关联的值列表中。
否则，创建一个新的值列表，并将值v添加到该列表中，然后将该列表与键k一起添加到Map对象中。
 */
function addTeam(map, k, v) {
    if (map.has(k)) {
        map.get(k).push(v);
    } else {
        var lst = [v];
        map.set(k, lst);
    }
}
//加入一个方法
// 查找给定队伍对应的学校
function findUniversityByTeam(team) {
    for (let [university, teams] of universitiesToTeams) {
        if (teams.indexOf(team) !== -1) {
            return university;
        }
    }
    return '';
}
/*
打乱数组，这个方法用来打乱相同高校的队伍。
 */
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function displayTeamNameAndUniversity(item, i, teamNameElems, schNameElems) {
    if (i >= teamNameElems.length || i >= schNameElems.length) {
        return; // 如果超出了范围，则直接返回
    }
    teamNameElems[i].innerHTML = item;
    schNameElems[i].innerHTML = findUniversityByTeam(item);
}
//渲染合适的div数量！
function checkAndRenderGroup(group, teamNameElements, noElement,tableInnerID) {
    // 判断数组长度是否小于原来渲染的数量
    if (group.length < teamNameElements.length) {
        // 将多余的 div 删除
        for (let j = group.length; j < teamNameElements.length; j++) {
            teamNameElements[j].parentNode.remove();
        }
    } else if (group.length > teamNameElements.length) {
        // 向 box 元素中添加缺少的 div
        for (let j = teamNameElements.length; j < group.length; j++) {
            // const div = document.createElement('div');
            // div.classList.add('box');
            // div.innerHTML = `<div class="no"></div><div class="schName"></div><div class="teamName"></div>`;
            // noElement[noElement.length - 1].parentNode.appendChild(div);

            const container = document.getElementById(tableInnerID);
            const div = document.createElement('div');
            div.classList.add('box');
            div.innerHTML = `<div class="no"></div><div class="schName"></div><div class="teamName"></div>`;
            container.appendChild(div);
        }
    }
}

// function checkAndRenderGroup(group, teamNameElements, noElement, tableInnerID) {
//     // 删除 tableInnerID 下所有的 div
//     const container = document.getElementById(tableInnerID);
//     while (container.firstChild) {
//         container.removeChild(container.firstChild);
//     }
//
//     // 向 box 元素中添加缺少的 div
//     for (let j = 0; j < group.length; j++) {
//         const div = document.createElement('div');
//         div.classList.add('box');
//         div.innerHTML = `<div class="no"></div><div class="schName"></div><div class="teamName"></div>`;
//         container.appendChild(div);
//     }
//     console.log("这个时候的teamNameElements："+teamNameElements);
//     console.log("这个时候的noElement："+noElement);
//
//     // 刷新 teamNameElements 和 noElement 的值
//     teamNameElements = document.querySelectorAll(`#${tableInnerID} .teamName`);
//     noElement = document.querySelectorAll(`#${tableInnerID} .no`);
// }


//填充数据2
function fillDataToElements(group, noElement, teamNameElements, schNameElement,tableInnerID) {
    // 刷新 teamNameElements 和 noElement 的值
    teamNameElements = document.querySelectorAll(`#${tableInnerID} .teamName`);
    noElement = document.querySelectorAll(`#${tableInnerID} .no`);
    schNameElement = document.querySelectorAll(`#${tableInnerID} .schName`);
    for (let i = 0; i < group.length; i++) {
        if (i < noElement.length) { // 判断是否越界
            noElement[i].innerHTML = `${i + 1}`;
        }
        const item = group[i];
        displayTeamNameAndUniversity(item,i,teamNameElements,schNameElement);
    }
}



new Vue({
    el: '#app', // Vue 实例挂载的元素 ID
    data: {
        tableHei: 'auto', // 表格容器高度
        timer: null, // 定时器句柄
        size: 0, // 计算表格行数
        stopSign: true, // 判断定时器是否停止标识
        stepTime: null, // 改为全局定时器
        universities:universities, // 数据源：大学列表
        teams:teams, // 数据源：参赛队伍列表
    },
    mounted() {
        const that = this;
        const tableBox = this.$refs.tableBox;
        const tableBoxRight = this.$refs.tableBoxRight;
        // 同时给左右两个列表容器元素添加scroll事件监听器，并将当前滚动位置同步到另一侧列表容器
        tableBox.addEventListener('scroll', function(e) {
            tableBoxRight.scrollTop = this.scrollTop;
        });
        tableBoxRight.addEventListener('scroll', function(e) {
            tableBox.scrollTop = this.scrollTop;
        });

        this.getTable(); // 获取表格行数并设置表格容器高度，启动循环滚动

        // 获取按钮元素
        const groupButton = document.getElementById("group-button");
        // 给按钮添加点击事件
        groupButton.addEventListener('click', () => {
            this.stopScroll(); // 调用 stopScroll() 方法
        });
    },
    methods: {
        getTable() {
            const outHei = this.$refs.tableoOut.clientHeight - 60; // 获取表格容器高度
            this.size = Math.floor(outHei / 58); // 计算表格行数
            this.tableHei = this.size * 58 + 'px'; // 设置表格容器高度
            this.scrolls(); // 启动循环滚动
        },
        stepScroll() {
            const that = this;
            const step = 50; // 每次滚动的距离
            let num = 0; // 每次已滚动的距离
            const tableBox = this.$refs.tableBox; // 表格容器

            // 改为全局定时器，且在调用前先进行清空
            clearInterval(this.stepTime);

            function animateScroll() {
                // 每次滚动4px
                tableBox.scrollTop += 4;

                if (num < step) {
                    num += 4;
                    // 不断地执行 animateScroll() 函数，直到滚动距离达到指定值
                    requestAnimationFrame(animateScroll);
                } else {
                    num = 0;
                    that.stopSign = true; // 标识定时器已停止
                }
            }

            // 使用 requestAnimationFrame 执行滚动动画
            requestAnimationFrame(animateScroll);
        },

        scrolls() {
            const that = this;
            const tableBox = this.$refs.tableBox; // 表格容器
            const tableInner = this.$refs.tableInner; // 表格内容区域
            clearInterval(this.timer); // 在启动定时器前先清空之前的计时器
            this.timer = setInterval(function () {
                // 修改定时器结束判断条件：当滚动距离大于等于内容区域高度时，重新滚动到顶部
                if (tableBox.scrollTop + tableBox.clientHeight >= tableInner.scrollHeight) {
                    tableBox.scrollTop = 0;
                }
                that.stepScroll(); // 执行一次 stepScroll()，即向下滚动一段距离
            }, 50); // 定时器循环周期为 50ms
        },

        //停止滚动并且回到第一条数据！
        stopScroll() {
            const tableBox = this.$refs.tableBox;
            tableBox.scrollTop = 0;
                clearInterval(this.timer); // 清空循环定时器，停止滚动
                clearInterval(this.stepTime); // 清空单次滚动的定时器
                this.stopSign = true; // 标识定时器已经停止
            const timerId = setInterval(() => {
                if (tableBox.scrollTop === 0) {
                    clearInterval(timerId);
                    this.stopSign = true;
                } else {
                    setTimeout(() => {
                        this.stopSign = false;
                        this.stopScroll();
                    }, 100);
                }
            }, 100);
        },
    }
})


