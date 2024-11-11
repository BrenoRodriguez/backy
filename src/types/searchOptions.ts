export interface SearchOptions {
  search?: string
  filter: {
    genre?: string[]
    status?: string
    expectation?: string
    length: {
      min?: string | number
      max?: string | number
    }
  }
  sort: {
    type: SortType
    order: SortOrder
  }
}

export type SortType = 'default' | 'name' | 'length' | 'expectation'

export type SortOrder = 'asc' | 'desc'
