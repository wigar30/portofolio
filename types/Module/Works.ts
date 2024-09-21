export type Work = {
  name: string
  desc: string
  color?: string
  tech: string[]
  images?: string[]
}

export type WorkWrapper = {
  name: string
  items: Work[]
}
