import chinaSoft2024Image from '../assets/home-assets/2024CCF-ChinaSoft.png'
import chinaSoft2025Image from '../assets/home-assets/2025CCF-ChinaSoft.png'
import cncc2025Image from '../assets/home-assets/2025CNCC.png'
import envire2025Image from '../assets/home-assets/2025EnviRE.png'

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
    id: 'china-soft-2025',
    localeKey: 'chinaSoft2025',
    image: chinaSoft2025Image,
  },
  {
    id: 'envire-2025',
    localeKey: 'envire2025',
    image: envire2025Image,
  },
  {
    id: 'china-software-conference',
    localeKey: 'chinaSoftwareConference',
    image: chinaSoft2024Image,
  },
]
