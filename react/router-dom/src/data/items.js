export const items = [
  {
    id: '0', name: 'marcos', telephone: '111 111', favorite: false
  },
  {
    id: '1', name: 'abdiel', telephone: '222 111', favorite: true
  },
]

export function getContact(id){
  return items.find((item) => item.id === id)
}