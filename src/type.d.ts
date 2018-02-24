interface Dict {
  [key: string]: any;
}

interface ArrLike {
  [index: number]: any;
  length: number;
}

type Indexable = Dict | ArrLike

interface Item {
  isChecked: boolean,
  desc: string,
  name: string
}

type List = Item[]