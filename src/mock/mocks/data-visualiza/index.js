import Mock from 'mockjs'

Mock.mock(
  '/left-top/data',
  'get', {
    alarmNum: 350,
    offlineNum: 23,
    onlineNum: 680,
    totalNum: 700
  })

Mock.mock(
  '/left-center/data',
  'get', {
    lockNum: 9,
    offlineNum: 68,
    onlineNum: 141,
    totalNum: 218
  })
Mock.mock(
  '/left-bottom/data',
  'get', {
    list: [
      {
        provinceName: '香港特别行政区',
        cityName: '赣州市',
        countyName: '平南县',
        createTime: '2018-07-18 05:31:02',
        deviceId: '6c512d754bbcd6d7cd86abce0e0cac58',
        gatewayno: 10000,
        onlineState: 0
      },
      {
        provinceName: '广西壮族自治区',
        cityName: '朝阳市',
        countyName: '温泉县',
        createTime: '1984-11-17 22:45:02',
        deviceId: '6c512d754bbcd6d7cd86abce0e0cac58',
        gatewayno: 10001,
        onlineState: 0
      },
      {
        provinceName: '浙江省',
        cityName: '鄂州市',
        countyName: '西区',
        createTime: '1976-02-21 10:15:46',
        deviceId: '6c512d754bbcd6d7cd86abce0e0cac58',
        gatewayno: 10002,
        onlineState: 0
      },
      {
        provinceName: '新疆维吾尔自治区',
        cityName: '龙岩市',
        countyName: '平武县',
        createTime: '1986-07-03 23:05:46',
        deviceId: '6c512d754bbcd6d7cd86abce0e0cac58',
        gatewayno: 10003,
        onlineState: 1
      },
      {
        provinceName: '广东省',
        cityName: '楚雄彝族自治州',
        countyName: '潼关县',
        createTime: '1994-03-30 22:30:15',
        deviceId: '6c512d754bbcd6d7cd86abce0e0cac58',
        gatewayno: 10004,
        onlineState: 1
      },
      {
        provinceName: '四川省',
        cityName: '株洲市',
        countyName: '南山区',
        createTime: '2004-03-17 22:56:07',
        deviceId: '6c512d754bbcd6d7cd86abce0e0cac58',
        gatewayno: 10005,
        onlineState: 1
      },
      {
        provinceName: '甘肃省',
        cityName: '黔东南苗族侗族自治州',
        countyName: '下陆区',
        createTime: '2010-11-09 08:37:46',
        deviceId: '6c512d754bbcd6d7cd86abce0e0cac58',
        gatewayno: 10006,
        onlineState: 1
      },
      {
        provinceName: '福建省',
        cityName: '阜新市',
        countyName: '容城县',
        createTime: '2023-08-14 10:17:50',
        deviceId: '6c512d754bbcd6d7cd86abce0e0cac58',
        gatewayno: 10007,
        onlineState: 1
      },
      {
        provinceName: '广东省',
        cityName: '淮安市',
        countyName: '其它区',
        createTime: '1989-05-19 20:46:07',
        deviceId: '6c512d754bbcd6d7cd86abce0e0cac58',
        gatewayno: 10008,
        onlineState: 1
      },
      {
        provinceName: '海南省',
        cityName: '朝阳市',
        countyName: '盂县',
        createTime: '1997-01-27 02:39:46',
        deviceId: '6c512d754bbcd6d7cd86abce0e0cac58',
        gatewayno: 10009,
        onlineState: 0
      },
      {
        provinceName: '安徽省',
        cityName: '离岛',
        countyName: '-',
        createTime: '1981-07-16 10:47:46',
        deviceId: '6c512d754bbcd6d7cd86abce0e0cac58',
        gatewayno: 10010,
        onlineState: 0
      },
      {
        provinceName: '广东省',
        cityName: '固原市',
        countyName: '石狮市',
        createTime: '1978-03-08 09:52:40',
        deviceId: '6c512d754bbcd6d7cd86abce0e0cac58',
        gatewayno: 10011,
        onlineState: 1
      },
      {
        provinceName: '黑龙江省',
        cityName: '商洛市',
        countyName: '嵊泗县',
        createTime: '2014-04-26 16:10:06',
        deviceId: '6c512d754bbcd6d7cd86abce0e0cac58',
        gatewayno: 10012,
        onlineState: 0
      },
      {
        provinceName: '西藏自治区',
        cityName: '海南藏族自治州',
        countyName: '枣阳市',
        createTime: '1986-11-10 20:52:49',
        deviceId: '6c512d754bbcd6d7cd86abce0e0cac58',
        gatewayno: 10013,
        onlineState: 1
      },
      {
        provinceName: '甘肃省',
        cityName: '汕头市',
        countyName: '昌江区',
        createTime: '2019-04-05 01:34:05',
        deviceId: '6c512d754bbcd6d7cd86abce0e0cac58',
        gatewayno: 10014,
        onlineState: 0
      },
      {
        provinceName: '西藏自治区',
        cityName: '三亚市',
        countyName: '龙陵县',
        createTime: '2017-01-19 19:53:15',
        deviceId: '6c512d754bbcd6d7cd86abce0e0cac58',
        gatewayno: 10015,
        onlineState: 1
      },
      {
        provinceName: '湖北省',
        cityName: '榆林市',
        countyName: '鲅鱼圈区',
        createTime: '1979-10-05 19:16:40',
        deviceId: '6c512d754bbcd6d7cd86abce0e0cac58',
        gatewayno: 10016,
        onlineState: 0
      },
      {
        provinceName: '江西省',
        cityName: '通化市',
        countyName: '其它区',
        createTime: '2017-06-29 23:46:26',
        deviceId: '6c512d754bbcd6d7cd86abce0e0cac58',
        gatewayno: 10017,
        onlineState: 1
      },
      {
        provinceName: '广西壮族自治区',
        cityName: '重庆市',
        countyName: '增城市',
        createTime: '1991-08-12 00:25:47',
        deviceId: '6c512d754bbcd6d7cd86abce0e0cac58',
        gatewayno: 10018,
        onlineState: 0
      },
      {
        provinceName: '江西省',
        cityName: '白山市',
        countyName: '普陀区',
        createTime: '1994-08-21 23:03:18',
        deviceId: '6c512d754bbcd6d7cd86abce0e0cac58',
        gatewayno: 10019,
        onlineState: 1
      }
    ]
  })

Mock.mock(
  '/center-map/data',
  'get', {
    dataList: [
      {
        name: '郴州市',
        value: 667
      },
      {
        name: '海口市',
        value: 530
      },
      {
        name: '清远市',
        value: 522
      },
      {
        name: '白山市',
        value: 850
      },
      {
        name: '济宁市',
        value: 605
      },
      {
        name: '咸阳市',
        value: 498
      },
      {
        name: '晋中市',
        value: 423
      },
      {
        name: '新乡市',
        value: 900
      },
      {
        name: '烟台市',
        value: 289
      },
      {
        name: '开封市',
        value: 151
      },
      {
        name: '三亚市',
        value: 921
      },
      {
        name: '阳江市',
        value: 613
      },
      {
        name: '日喀则地区',
        value: 33
      },
      {
        name: '毕节市',
        value: 517
      },
      {
        name: '赤峰市',
        value: 829
      },
      {
        name: '镇江市',
        value: 376
      },
      {
        name: '牡丹江市',
        value: 185
      },
      {
        name: '济南市',
        value: 66
      },
      {
        name: '澳门半岛',
        value: 537
      },
      {
        name: '北京市',
        value: 516
      },
      {
        name: '泰州市',
        value: 221
      },
      {
        name: '乌海市',
        value: 839
      },
      {
        name: '百色市',
        value: 39
      },
      {
        name: '河池市',
        value: 787
      },
      {
        name: '萍乡市',
        value: 962
      },
      {
        name: '徐州市',
        value: 848
      },
      {
        name: '天津市',
        value: 848
      },
      {
        name: '铁岭市',
        value: 903
      },
      {
        name: '运城市',
        value: 127
      },
      {
        name: '山南地区',
        value: 143
      }
    ],
    regionCode: 'china'
  })

Mock.mock(
  '/center-bottom/data',
  'get', {
    category: [
      '呼和浩特市',
      '铁岭市',
      '铜川市',
      '重庆市',
      '南宁市',
      '台州市',
      '晋城市',
      '滨州市',
      '泰安市',
      '莆田市',
      '六盘水市',
      '黄山市',
      '漯河市',
      '三亚市',
      '重庆市',
      '漳州市',
      '绥化市',
      '梧州市',
      '沈阳市',
      '定西市',
      '海北藏族自治州',
      '海外',
      '海外',
      '海外',
      '绍兴市',
      '攀枝花市',
      '澳门半岛',
      '海东市',
      '那曲地区'
    ],
    barData: [
      17,
      25,
      56,
      92,
      67,
      38,
      72,
      89,
      65,
      88,
      77,
      92,
      42,
      96,
      52,
      60,
      42,
      25,
      31,
      31,
      38,
      21,
      78,
      29,
      66,
      49,
      24,
      67,
      50
    ],
    lineData: [
      117,
      76,
      154,
      127,
      92,
      59,
      114,
      184,
      127,
      126,
      85,
      141,
      78,
      122,
      82,
      159,
      53,
      34,
      122,
      100,
      60,
      47,
      79,
      104,
      120,
      105,
      71,
      70,
      97
    ],
    rateData: [
      '15',
      '33',
      '36',
      '72',
      '73',
      '64',
      '63',
      '48',
      '51',
      '70',
      '91',
      '65',
      '54',
      '79',
      '63',
      '38',
      '79',
      '74',
      '25',
      '31',
      '63',
      '45',
      '99',
      '28',
      '55',
      '47',
      '34',
      '96',
      '52'
    ]
  })
Mock.mock(
  '/right-top/data',
  'get', {
    dateList: [
      '2021-11',
      '2021-12',
      '2022-01',
      '2022-02',
      '2022-03',
      '2022-04'
    ],
    numList: [
      944,
      453,
      802,
      636,
      196,
      392
    ],
    numList2: [
      21,
      141,
      215,
      993,
      320,
      730
    ]
  })
Mock.mock(
  '/right-center/data',
  'get', {
    datalist: [
      {
        value: 641,
        name: '庆阳市'
      },
      {
        value: 560,
        name: '上海市'
      },
      {
        value: 552,
        name: '海北藏族自治州'
      },
      {
        value: 484,
        name: '北京市'
      },
      {
        value: 320,
        name: '重庆市'
      },
      {
        value: 280,
        name: '泰州市'
      },
      {
        value: 215,
        name: '巴彦淖尔市'
      },
      {
        value: 208,
        name: '龙岩市'
      }
    ]
  })
Mock.mock(
  '/right-bottom/data',
  'get', {
    datalist: [
      {
        alertdetai: '色革书使拉用。',
        alertname: '各种报警',
        alertvalue: 187.59,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10000,
        phase: 'A1',
        sbInfo: '特厂集老华物专个究出感。',
        terminalno: 100,
        provinceName: '山西省',
        cityName: '随州市',
        countyName: '湖西乡'
      },
      {
        alertdetai: '手较正装的图切下除。',
        alertname: '各种报警',
        alertvalue: 123.3,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10001,
        phase: 'A1',
        sbInfo: '色深完对类强照快严选计。',
        terminalno: 101,
        provinceName: '澳门特别行政区',
        cityName: '天津市',
        countyName: '湘潭县'
      },
      {
        alertdetai: '己矿什华把日声。',
        alertname: '各种报警',
        alertvalue: 177.7672462,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10002,
        phase: 'A1',
        sbInfo: '拉图发来写各年都第解。',
        terminalno: 102,
        provinceName: '广东省',
        cityName: '秦皇岛市',
        countyName: '九江县'
      },
      {
        alertdetai: '后求由么属至技自验。',
        alertname: '水浸告警',
        alertvalue: 171.35283,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10003,
        phase: 'A1',
        sbInfo: '装满速志众研制装交务照进越议。',
        terminalno: 103,
        provinceName: '香港特别行政区',
        cityName: '天津市',
        countyName: '延津县'
      },
      {
        alertdetai: '速起儿问你义这。',
        alertname: '水浸告警',
        alertvalue: 96.7625319237936,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10004,
        phase: 'A1',
        sbInfo: '内理图己用员术明容始任东。',
        terminalno: 104,
        provinceName: '内蒙古自治区',
        cityName: '晋城市',
        countyName: '铁东区'
      },
      {
        alertdetai: '军委已品队头及立。',
        alertname: '水浸告警',
        alertvalue: 134.466238,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10005,
        phase: 'A1',
        sbInfo: '积然历又说白立济立存亲花。',
        terminalno: 105,
        provinceName: '新疆维吾尔自治区',
        cityName: '红河哈尼族彝族自治州',
        countyName: '弋江区'
      },
      {
        alertdetai: '华半置美志治手只。',
        alertname: '各种报警',
        alertvalue: 70.242831,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10006,
        phase: 'A1',
        sbInfo: '什地又细党重也后快理走。',
        terminalno: 106,
        provinceName: '四川省',
        cityName: '中山市',
        countyName: '佛坪县'
      },
      {
        alertdetai: '去亲设育完切。',
        alertname: '水浸告警',
        alertvalue: 185.1975132247768,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10007,
        phase: 'A1',
        sbInfo: '小作数将单象林断按美委许。',
        terminalno: 107,
        provinceName: '福建省',
        cityName: '苗栗县',
        countyName: '九龙城区'
      },
      {
        alertdetai: '道状高世联变多。',
        alertname: '各种报警',
        alertvalue: 132.488,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10008,
        phase: 'A1',
        sbInfo: '式织离如常条府验其决特斯。',
        terminalno: 108,
        provinceName: '贵州省',
        cityName: '天津市',
        countyName: '民雄乡'
      },
      {
        alertdetai: '一装月基比区图感。',
        alertname: '各种报警',
        alertvalue: 127.10874358595395,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10009,
        phase: 'A1',
        sbInfo: '需院二开国器少设热体层石外外化织比。',
        terminalno: 109,
        provinceName: '黑龙江省',
        cityName: '厦门市',
        countyName: '玉泉区'
      },
      {
        alertdetai: '南能没日它。',
        alertname: '水浸告警',
        alertvalue: 153.414355511052,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10010,
        phase: 'A1',
        sbInfo: '自系积近能圆那布容织么时验观义。',
        terminalno: 110,
        provinceName: '吉林省',
        cityName: '香港岛',
        countyName: '浦北县'
      },
      {
        alertdetai: '置真府又多白连速。',
        alertname: '各种报警',
        alertvalue: 129.4872,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10011,
        phase: 'A1',
        sbInfo: '党常界率术无同单和品。',
        terminalno: 111,
        provinceName: '四川省',
        cityName: '玉溪市',
        countyName: '江东区'
      },
      {
        alertdetai: '军非参许江只非命造。',
        alertname: '各种报警',
        alertvalue: 80.60542483738143,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10012,
        phase: 'A1',
        sbInfo: '并酸易设特干中白风具江金改解存。',
        terminalno: 112,
        provinceName: '甘肃省',
        cityName: '澳门半岛',
        countyName: '其它区'
      },
      {
        alertdetai: '事铁即化性素作半。',
        alertname: '水浸告警',
        alertvalue: 179.51542506416,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10013,
        phase: 'A1',
        sbInfo: '局酸器件矿至酸运科王统增理效几身。',
        terminalno: 113,
        provinceName: '黑龙江省',
        cityName: '舟山市',
        countyName: '奉贤区'
      },
      {
        alertdetai: '济确口群置层需。',
        alertname: '各种报警',
        alertvalue: 107.742201093,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10014,
        phase: 'A1',
        sbInfo: '走消志整把世问此报少书才听些但清一感。',
        terminalno: 114,
        provinceName: '天津',
        cityName: '宜春市',
        countyName: '仙游县'
      },
      {
        alertdetai: '但拉基重不中根设。',
        alertname: '水浸告警',
        alertvalue: 188.5756142,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10015,
        phase: 'A1',
        sbInfo: '展八力反家好需数参具石走准精五。',
        terminalno: 115,
        provinceName: '上海',
        cityName: '池州市',
        countyName: '忻城县'
      },
      {
        alertdetai: '商系前们力该。',
        alertname: '水浸告警',
        alertvalue: 109.0884921612041,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10016,
        phase: 'A1',
        sbInfo: '步是平发变后进论名用系志或确命队号传。',
        terminalno: 116,
        provinceName: '西藏自治区',
        cityName: '阳泉市',
        countyName: '东区'
      },
      {
        alertdetai: '位听越片意转水。',
        alertname: '水浸告警',
        alertvalue: 104.75334178322167,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10017,
        phase: 'A1',
        sbInfo: '意列相快深节图设难那后多采单治识采。',
        terminalno: 117,
        provinceName: '广西壮族自治区',
        cityName: '延边朝鲜族自治州',
        countyName: '梅河口市'
      },
      {
        alertdetai: '火同发同年时增号较。',
        alertname: '水浸告警',
        alertvalue: 135.746564484964,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10018,
        phase: 'A1',
        sbInfo: '受元整深速局造叫展果全列进接被商并。',
        terminalno: 118,
        provinceName: '湖南省',
        cityName: '周口市',
        countyName: '南安市'
      },
      {
        alertdetai: '志少写外养元很生。',
        alertname: '各种报警',
        alertvalue: 91.4233264479572,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10019,
        phase: 'A1',
        sbInfo: '越四六去品信南油识由路。',
        terminalno: 119,
        provinceName: '江苏省',
        cityName: '巴彦淖尔市',
        countyName: '建阳市'
      },
      {
        alertdetai: '好省它水始类行身第。',
        alertname: '各种报警',
        alertvalue: 136.23148524181522,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10020,
        phase: 'A1',
        sbInfo: '受件量养住问观各问少习去。',
        terminalno: 120,
        provinceName: '吉林省',
        cityName: '贵港市',
        countyName: '防城区'
      },
      {
        alertdetai: '与将省养手色军了时。',
        alertname: '各种报警',
        alertvalue: 158.5388,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10021,
        phase: 'A1',
        sbInfo: '往织才二转长论把外性此较及设革万龙治。',
        terminalno: 121,
        provinceName: '北京',
        cityName: '嘉兴市',
        countyName: '恩阳区'
      },
      {
        alertdetai: '根周光织且起完。',
        alertname: '水浸告警',
        alertvalue: 184.58,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10022,
        phase: 'A1',
        sbInfo: '报表办来党中题己满及须特头。',
        terminalno: 122,
        provinceName: '山西省',
        cityName: '厦门市',
        countyName: '中沙群岛的岛礁及其海域'
      },
      {
        alertdetai: '适周合教圆相连。',
        alertname: '各种报警',
        alertvalue: 90.010409228127,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10023,
        phase: 'A1',
        sbInfo: '我看话办着打内许龙复声布土常打支。',
        terminalno: 123,
        provinceName: '湖北省',
        cityName: '马鞍山市',
        countyName: '北辰区'
      },
      {
        alertdetai: '商照色力候并需导。',
        alertname: '水浸告警',
        alertvalue: 99.47357,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10024,
        phase: 'A1',
        sbInfo: '养入车拉么比任却要现持识合情斗值。',
        terminalno: 124,
        provinceName: '四川省',
        cityName: '乌兰察布市',
        countyName: '宾阳县'
      },
      {
        alertdetai: '易维七角性自议开据引。',
        alertname: '各种报警',
        alertvalue: 81.33432971722686,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10025,
        phase: 'A1',
        sbInfo: '度改内器式公大维好部导热老命的到更元。',
        terminalno: 125,
        provinceName: '广西壮族自治区',
        cityName: '山南地区',
        countyName: '恩阳区'
      },
      {
        alertdetai: '队没人书由改切片外。',
        alertname: '水浸告警',
        alertvalue: 82.776332844026,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10026,
        phase: 'A1',
        sbInfo: '重候节联算办光性更确观而历分当。',
        terminalno: 126,
        provinceName: '台湾',
        cityName: '重庆市',
        countyName: '安达市'
      },
      {
        alertdetai: '装关效将商更劳。',
        alertname: '各种报警',
        alertvalue: 91.8182427,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10027,
        phase: 'A1',
        sbInfo: '月半反观要等劳国况色业红规族元性织。',
        terminalno: 127,
        provinceName: '台湾',
        cityName: '海口市',
        countyName: '渭城区'
      },
      {
        alertdetai: '军情数感少见装备主。',
        alertname: '各种报警',
        alertvalue: 133.39087378071156,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10028,
        phase: 'A1',
        sbInfo: '解报到物划却身加理意毛验看之。',
        terminalno: 128,
        provinceName: '福建省',
        cityName: '佛山市',
        countyName: '津南区'
      },
      {
        alertdetai: '要位展活步般工。',
        alertname: '各种报警',
        alertvalue: 118.502,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10029,
        phase: 'A1',
        sbInfo: '划它安才可思价就者本大二设。',
        terminalno: 129,
        provinceName: '江西省',
        cityName: '新乡市',
        countyName: '耀州区'
      },
      {
        alertdetai: '较才例快着按。',
        alertname: '各种报警',
        alertvalue: 151.39832836261436,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10030,
        phase: 'A1',
        sbInfo: '中我知写没解许整国向就须电复查。',
        terminalno: 130,
        provinceName: '澳门特别行政区',
        cityName: '桃园县',
        countyName: '金宁乡'
      },
      {
        alertdetai: '气置每济育已角。',
        alertname: '各种报警',
        alertvalue: 112.87335346348466,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10031,
        phase: 'A1',
        sbInfo: '半养本些际方青头按府提花满先引连多。',
        terminalno: 131,
        provinceName: '海外',
        cityName: '大理白族自治州',
        countyName: '襄垣县'
      },
      {
        alertdetai: '了没且件到。',
        alertname: '水浸告警',
        alertvalue: 84.09227602,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10032,
        phase: 'A1',
        sbInfo: '而易展历万马方该导火。',
        terminalno: 132,
        provinceName: '河北省',
        cityName: '东营市',
        countyName: '永泰县'
      },
      {
        alertdetai: '业近时次门热满使决县。',
        alertname: '各种报警',
        alertvalue: 79.5,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10033,
        phase: 'A1',
        sbInfo: '拉几验等和周毛须速门农近导个完及管他。',
        terminalno: 133,
        provinceName: '上海',
        cityName: '湖州市',
        countyName: '句容市'
      },
      {
        alertdetai: '话证加内必此年商物老。',
        alertname: '各种报警',
        alertvalue: 83.736336,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10034,
        phase: 'A1',
        sbInfo: '许及此广道江小她响党军界干文。',
        terminalno: 134,
        provinceName: '四川省',
        cityName: '白城市',
        countyName: '-'
      },
      {
        alertdetai: '活行即车以于新强达。',
        alertname: '水浸告警',
        alertvalue: 90.343822771605,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10035,
        phase: 'A1',
        sbInfo: '按习压厂电它气公度八属。',
        terminalno: 135,
        provinceName: '西藏自治区',
        cityName: '哈密地区',
        countyName: '古城区'
      },
      {
        alertdetai: '带办准声属法花。',
        alertname: '水浸告警',
        alertvalue: 101.4,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10036,
        phase: 'A1',
        sbInfo: '一定总然研建月红无相型片与提。',
        terminalno: 136,
        provinceName: '甘肃省',
        cityName: '周口市',
        countyName: '广水市'
      },
      {
        alertdetai: '带物即海车还进况安日。',
        alertname: '水浸告警',
        alertvalue: 159.85628854457113,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10037,
        phase: 'A1',
        sbInfo: '合标极容影每名金改所号。',
        terminalno: 137,
        provinceName: '甘肃省',
        cityName: '桂林市',
        countyName: '美兰区'
      },
      {
        alertdetai: '向办月量低里院交族合。',
        alertname: '各种报警',
        alertvalue: 197.3772860671,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10038,
        phase: 'A1',
        sbInfo: '消界建放导六极上说级保什。',
        terminalno: 138,
        provinceName: '湖南省',
        cityName: '安顺市',
        countyName: '安县'
      },
      {
        alertdetai: '装由结值好质式段带对。',
        alertname: '水浸告警',
        alertvalue: 200.56149114143827,
        createtime: '2022-04-19 08:38:33',
        deviceid: null,
        gatewayno: 10039,
        phase: 'A1',
        sbInfo: '示样非严近单但式到国也中指况写。',
        terminalno: 139,
        provinceName: '河南省',
        cityName: '伊犁哈萨克自治州',
        countyName: '渝北区'
      }
    ]
  })
