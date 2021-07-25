export const deleteFunc = (arr,id, arrSetter) =>{
  const index = arr.findIndex(x => x.id === id)
  arr.splice(index, 1)
  arrSetter([...arr])
}

export const updateFunc = (arr,id, arrSetter, obj) =>{
  const index = arr.findIndex(x => x.id === id)
  arr[index] = obj
  arrSetter([...arr])
}
export const adderFunc = (arr, arrSetter, obj) =>{
  arrSetter([...arr,obj])
}