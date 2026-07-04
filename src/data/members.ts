export type MemberGroup = 'faculty' | 'phd' | 'master' | 'alumni'

export interface MemberProfile {
  id: string
  group: MemberGroup
  localeKey: string
  photo: string
  email?: string
  homepage?: string
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
    photo: 'members/JinZhi.jpg',
    email: 'zhijin@pku.edu.cn',
    homepage: 'http://faculty.pku.edu.cn/zhijin/en/index.htm',
  },
  {
    id: 'xiaohong-chen',
    group: 'faculty',
    localeKey: 'xiaohongChen',
    photo: 'members/ChenXiaohong.jpg',
    email: 'xhchen@sei.ecnu.edu.cn',
    homepage: 'https://faculty.ecnu.edu.cn/_s43/cxh2/main.psp',
  },
  {
    id: 'dongming-jin',
    group: 'phd',
    localeKey: 'dongmingJin',
    photo: 'members/avatar-placeholder.svg',
    homepage: 'https://github.com/jdm4pku',
  },
  {
    id: 'zhujun-wu',
    group: 'master',
    localeKey: 'zhujunWu',
    photo: 'members/avatar-placeholder.svg',
  },
  {
    id: 'huangyike',
    group: 'alumni',
    localeKey: 'huangyike',
    photo: 'members/avatar-placeholder.svg',
    homepage: 'https://github.com/Ekay47',
  },
]
