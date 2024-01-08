interface IObject extends Object {
id: number;
}

export function getNewId(objectsArray: IObject[]): number {
    console.log(objectsArray);
  return objectsArray.length ? objectsArray[0].id + 1 : 1;
}