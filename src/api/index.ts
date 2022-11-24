export interface IHoleListItem {
  pid: string
  hidden: string
  text: string
  type: 'text' | 'image'
  timestamp: string
  reply: string
  likenum: string
  extra: string
  url: string
  hot: string
  tag: unknown
}

export interface IHoleListResp {
  code: number
  data: IHoleListItem[]
  timestamp: number
  count: number
}

const BASE_URL = `https://hole-memory.la.workers.dev`

export async function getHoleList(page = 1): Promise<IHoleListResp> {
  const resp = await fetch(`${BASE_URL}/getlist?page=${page}`)
  return resp.json()
}
