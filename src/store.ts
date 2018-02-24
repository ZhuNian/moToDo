let item1 = {
  isDone: false,
  name: 'react',
  desc: 'react is not mandatory'
}

let item2 = {
  isDone: true,
  name: 'mithril',
  desc: 'mithril is better'
} 

let list: List = [].concat(item1, item2)
export {list}