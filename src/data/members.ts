import defaultAvatar from '../assets/members/avatar-placeholder.svg'
import xiaohongChenPhoto from '../assets/members/Faculty/ChenXiaohong.jpg'
import zhiJinPhoto from '../assets/members/Faculty/JinZhi.jpg'
import shiChenPhoto from '../assets/members/alumni/ChenShi.jpg'
import gaoYuanPhoto from '../assets/members/alumni/GaoYuan.jpg'
import liuJiachengPhoto from '../assets/members/alumni/LiuJiacheng.jpg'
import ruanKunPhoto from '../assets/members/alumni/RuanKun.jpg'
import dongmingJinPhoto from '../assets/members/phd-students/JinDongming.jpg'
import haotianLiPhoto from '../assets/members/master-students/LiHaotian.jpg'
import bowenLuoPhoto from '../assets/members/master-students/LuoBowen.jpg'
import kailiangYangPhoto from '../assets/members/master-students/YangKailiang.jpg'
import haoxiangYanPhoto from '../assets/members/master-students/YanHaoxiang.jpg'
import boyiYePhoto from '../assets/members/master-students/YeBoyi.jpg'
import zhujunWuPhoto from '../assets/members/master-students/WuZhujun.jpg'
import abcLogo from '../assets/organizations/agricultural-bank-of-china.svg'
import axeraLogo from '../assets/organizations/AXERA-semiconductor.svg'
import didiLogo from '../assets/organizations/didi.svg'
import meituanLogo from '../assets/organizations/meituan.svg'
import neteaseGamesLogo from '../assets/organizations/netease-games.svg'
import pddLogo from '../assets/organizations/pdd.svg'
import poizonLogo from '../assets/organizations/poizon.svg'
import hithinkLogo from '../assets/organizations/tonghuashun.svg'

export type MemberGroup = 'faculty' | 'phd' | 'master' | 'alumni'

export interface MemberOrganization {
  nameLocaleKey: string
  logo?: string
}

export interface MemberCareerStep {
  id: string
  labelLocaleKey: string
  logo?: string
  current?: boolean
}

export interface MemberProfile {
  id: string
  group: MemberGroup
  localeKey: string
  photo: string
  admissionYear?: number
  graduationYear?: number
  order?: number
  email?: string
  homepage?: string
  hasBio?: boolean
  organization?: MemberOrganization
  careerPath?: readonly MemberCareerStep[]
}

export const memberGroupOrder: readonly MemberGroup[] = [
  'faculty',
  'phd',
  'master',
  'alumni',
]

export const members: readonly MemberProfile[] = [
  {
    id: 'zhi-jin',
    group: 'faculty',
    localeKey: 'zhiJin',
    photo: zhiJinPhoto,
    email: 'zhijin@pku.edu.cn',
    homepage: 'http://faculty.pku.edu.cn/zhijin/en/index.htm',
  },
  {
    id: 'xiaohong-chen',
    group: 'faculty',
    localeKey: 'xiaohongChen',
    photo: xiaohongChenPhoto,
    email: 'xhchen@sei.ecnu.edu.cn',
    homepage: 'https://faculty.ecnu.edu.cn/_s43/cxh2/main.psp',
  },
  {
    id: 'dongming-jin',
    group: 'phd',
    localeKey: 'dongmingJin',
    photo: dongmingJinPhoto,
    admissionYear: 2023,
    email: 'dmjin@stu.pku.edu.cn',
    homepage: 'https://jdm4pku.github.io/',
  },
  {
    id: 'yue-fang',
    group: 'phd',
    localeKey: 'yueFang',
    photo: defaultAvatar,
    admissionYear: 2023,
    email: 'y.fang@stu.pku.edu.cn',
  },
  {
    id: 'zheng-zhou',
    group: 'phd',
    localeKey: 'zhengZhou',
    photo: defaultAvatar,
    admissionYear: 2023,
    email: '52285902024@stu.ecnu.edu.cn',
    homepage: 'https://github.com/Limpidlove',
  },
  {
    id: 'xingkun-pei',
    group: 'phd',
    localeKey: 'xingkunPei',
    photo: defaultAvatar,
    admissionYear: 2025,
    email: 'm18085073445@163.com',
    homepage: 'https://github.com/startreepei',
  },
  {
    id: 'bowen-luo',
    group: 'master',
    localeKey: 'bowenLuo',
    photo: bowenLuoPhoto,
    admissionYear: 2024,
    order: 1,
    hasBio: true,
    email: 'clbwc@outlook.com',
    homepage: 'https://github.com/LeonadroW?tab=repositories',
  },
  {
    id: 'haotian-li',
    group: 'master',
    localeKey: 'haotianLi',
    photo: haotianLiPhoto,
    admissionYear: 2024,
    order: 2,
    hasBio: true,
    email: 'haotianli2011@163.com',
  },
  {
    id: 'zihan-chen',
    group: 'master',
    localeKey: 'zihanChen',
    photo: defaultAvatar,
    admissionYear: 2024,
    order: 3,
    hasBio: true,
    email: 'Hannachen294@163.com',
  },
  {
    id: 'jingkai-lin',
    group: 'master',
    localeKey: 'jingkaiLin',
    photo: defaultAvatar,
    admissionYear: 2025,
    order: 4,
    hasBio: true,
    email: '51285902044@stu.ecnu.edu.cn',
    homepage: 'https://github.com/cayenne123',
  },
  {
    id: 'kailiang-yang',
    group: 'master',
    localeKey: 'kailiangYang',
    photo: kailiangYangPhoto,
    admissionYear: 2025,
    order: 5,
    hasBio: true,
    email: '51285902208@stu.ecnu.edu.cn',
    homepage: 'https://github.com/Yangkailiang1',
  },
  {
    id: 'zhujun-wu',
    group: 'master',
    localeKey: 'zhujunWu',
    photo: zhujunWuPhoto,
    admissionYear: 2025,
    order: 6,
    hasBio: true,
    email: '51285902115@stu.ecnu.edu.cn',
  },
  {
    id: 'haoran-zhang',
    group: 'master',
    localeKey: 'haoranZhang',
    photo: defaultAvatar,
    admissionYear: 2025,
    order: 7,
    email: '1059075943@qq.com',
  },
  {
    id: 'yuxuan-ji',
    group: 'master',
    localeKey: 'yuxuanJi',
    photo: defaultAvatar,
    admissionYear: 2026,
    order: 8,
    hasBio: true,
    email: '51295902049@stu.ecnu.edu.cn',
  },
  {
    id: 'keyi-mou',
    group: 'master',
    localeKey: 'keyiMou',
    photo: defaultAvatar,
    admissionYear: 2026,
    order: 9,
    hasBio: true,
    email: 'keyi_mou@163.com',
  },
  {
    id: 'weihao-xia',
    group: 'master',
    localeKey: 'weihaoXia',
    photo: defaultAvatar,
    admissionYear: 2026,
    order: 10,
    hasBio: true,
    email: '51295902138@stu.ecnu.edu.cn',
  },
  {
    id: 'haoxiang-yan',
    group: 'master',
    localeKey: 'haoxiangYan',
    photo: haoxiangYanPhoto,
    admissionYear: 2026,
    order: 11,
    hasBio: true,
    email: '1479205471@qq.com',
    homepage: 'https://github.com/TiGh0147c',
  },
  {
    id: 'boyi-ye',
    group: 'master',
    localeKey: 'boyiYe',
    photo: boyiYePhoto,
    admissionYear: 2026,
    order: 12,
    hasBio: true,
    email: '51295902144@stu.ecnu.edu.cn',
    homepage: 'https://github.com/Waller-Man',
  },
  {
    id: 'liu-jiacheng',
    group: 'alumni',
    localeKey: 'liuJiacheng',
    photo: liuJiachengPhoto,
    graduationYear: 2023,
    order: 1,
    hasBio: true,
    email: '707516345@qq.com',
    homepage: 'https://mp.weixin.qq.com/s/9TkIpxZyW3mGpMLsIRT01Q',
    careerPath: [
      {
        id: 'meituan',
        labelLocaleKey: 'organizations.meituan',
        logo: meituanLogo,
      },
      {
        id: 'startup-exploration',
        labelLocaleKey: 'careerSteps.startupExploration',
      },
      {
        id: 'hithink',
        labelLocaleKey: 'organizations.hithink',
        logo: hithinkLogo,
        current: true,
      },
      {
        id: 'future-startup-plan',
        labelLocaleKey: 'careerSteps.futureStartupPlan',
      },
    ],
  },
  {
    id: 'xiaoqi-wang',
    group: 'alumni',
    localeKey: 'xiaoqiWang',
    photo: defaultAvatar,
    graduationYear: 2024,
    order: 2,
    organization: {
      nameLocaleKey: 'axera',
      logo: axeraLogo,
    },
  },
  {
    id: 'weihao-zeng',
    group: 'alumni',
    localeKey: 'weihaoZeng',
    photo: defaultAvatar,
    graduationYear: 2024,
    order: 3,
    organization: {
      nameLocaleKey: 'neteaseGames',
      logo: neteaseGamesLogo,
    },
  },
  {
    id: 'liangguo-li',
    group: 'alumni',
    localeKey: 'liangguoLi',
    photo: defaultAvatar,
    graduationYear: 2025,
    order: 4,
    organization: {
      nameLocaleKey: 'agriculturalBankOfChina',
      logo: abcLogo,
    },
  },
  {
    id: 'shi-chen',
    group: 'alumni',
    localeKey: 'shiChen',
    photo: shiChenPhoto,
    graduationYear: 2025,
    order: 5,
    organization: {
      nameLocaleKey: 'pinduoduo',
      logo: pddLogo,
    },
  },
  {
    id: 'kun-ruan',
    group: 'alumni',
    localeKey: 'kunRuan',
    photo: ruanKunPhoto,
    graduationYear: 2026,
    order: 6,
    organization: {
      nameLocaleKey: 'didi',
      logo: didiLogo,
    },
  },
  {
    id: 'yuan-gao',
    group: 'alumni',
    localeKey: 'yuanGao',
    photo: gaoYuanPhoto,
    graduationYear: 2026,
    order: 7,
    organization: {
      nameLocaleKey: 'poizon',
      logo: poizonLogo,
    },
  },
  {
    id: 'yike-huang',
    group: 'alumni',
    localeKey: 'yikeHuang',
    photo: defaultAvatar,
    graduationYear: 2026,
    order: 8,
    homepage: 'https://github.com/Ekay47',
    organization: {
      nameLocaleKey: 'meituan',
      logo: meituanLogo,
    },
  },
]
