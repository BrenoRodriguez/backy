import { v4 as uuidv4 } from 'uuid'

export class Game {
  id: string = uuidv4()
  name: string
  cover: string
  genre: string[]
  status: string
  expectation: string
  length: string
  platform: string
  notes: string = ''
  review: string = ''
  series: string = ''
  seriesOrder: string = ''

  constructor(
    name: string,
    cover: string,
    genre: string[],
    status: string,
    expectation: string,
    length: string,
    platform: string,
  ) {
    this.name = name
    this.cover = cover
    this.genre = genre
    this.status = status
    this.expectation = expectation
    this.length = length
    this.platform = platform
  }
}
