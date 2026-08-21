import chinaSoft2024Image from '../assets/home-assets/2024CCF-ChinaSoft.png'
import cncc2024Image from '../assets/home-assets/2024CNCC.png'
import cncc2025Image from '../assets/home-assets/2025CNCC.png'
import xiuhu30Image from '../assets/home-assets/30thXiuhu.png'

export interface ConferenceHighlight {
  id: string
  localeKey: string
  image: string
}

export const conferenceHighlights: readonly ConferenceHighlight[] = [
  {
    id: 'cncc-2025',
    localeKey: 'cncc2025',
    image: cncc2025Image,
  },
  {
    id: 'cncc-2024',
    localeKey: 'cncc2024',
    image: cncc2024Image,
  },
  {
    id: 'china-software-conference',
    localeKey: 'chinaSoftwareConference',
    image: chinaSoft2024Image,
  },
  {
    id: 'ccf-xiuhu-30',
    localeKey: 'ccfXiuhu30',
    image: xiuhu30Image,
  },
]
