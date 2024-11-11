import {
  STRING_START,
  MAX_SIZE_CARD_TITLE,
  ELLIPSIS_SIZE,
} from '../utils/constants'

export default function useGetCardTitle(gameName: string) {
  const isShortened = gameName.length > MAX_SIZE_CARD_TITLE
  const shortName = `${gameName.slice(STRING_START, MAX_SIZE_CARD_TITLE - ELLIPSIS_SIZE)}...`
  const normalName = gameName
  const displayedTitle = isShortened ? shortName : normalName

  return { isShortened, displayedTitle }
}
