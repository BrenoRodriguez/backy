export interface Game {
  id: string
  name: string
  cover: string
  genre: string[]
  status: string
  expectation: string
  length: string | undefined
  platform: string
  review: string | undefined
  notes: string | undefined
  series: string | undefined
  seriesOrder: string | undefined
}
