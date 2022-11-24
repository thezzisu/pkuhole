export interface IHole {
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
  data: IHole[]
  timestamp: number
  count: number
}

const BASE_URL = `https://hole-memory.la.workers.dev`

export async function getHoleList(page = 1): Promise<IHoleListResp> {
  const resp = await fetch(`${BASE_URL}/getlist?page=${page}`)
  return resp.json()
}

export interface IHoleResp {
  code: number
  data: IHole
  timestamp: number
}

export async function getHole(pid: string): Promise<IHoleResp> {
  const resp = await fetch(`${BASE_URL}/getone?pid=${pid}`)
  return resp.json()
}

export interface IComment {
  cid: string
  pid: string
  text: string
  timestamp: string
  anonymous: string
  tag: unknown
  islz: number
  name: string
}

export interface ICommentListResp {
  code: number
  data: IComment[]
  attention: number
  captcha: boolean
}

export async function getCommentList(pid: string): Promise<ICommentListResp> {
  const resp = await fetch(`${BASE_URL}/getcomment?pid=${pid}`)
  return resp.json()
}
