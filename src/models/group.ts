export type Group = {
  id: number
  type: 'private' | 'public'
  mediaUrl?: string
  owner: string
  name: string
  memberCount: string
  price?: string
  currency?: string
  periodically?: string
  description?: string
  requirements?: {
    minimumFollowers?: string
    minimumAccountAge?: string
    minimumUSFollowers?: string
  }
}
