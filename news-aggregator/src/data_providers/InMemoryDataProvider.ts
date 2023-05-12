import IDataProvider from "./IDataProvider";

export default class InMemoryDataProvider<Resource extends {id: string, data: any}> implements IDataProvider<Resource> {
  private _data: Resource[];
  
  constructor() {
    this._data = [];
  };

  public async createData(resource: Resource) {
    this._data.push(resource);
    return;
  }

  public async getData() {
    return this._data;
  }

  public async readData(args: {id: string, matchField: string}) {
    const filteredData = this._data.filter(x => {
      return  x.data[args.matchField] === args.id
    });
    return filteredData[0]
  };

  public async updateData(props: { id: string; resource: Resource; }) : Promise<void>{
    const {id, resource} = props;
    for(const datum of this._data) {
      console.log(datum.data.email)
      if(datum.data.email === id) {
        datum.data = resource.data;
        break;
      }
    }
    
    return;
  };

  public async deleteData(id: string) {
    this._data = this._data.filter(datum => datum.id !== id);
    return;
  };

}

 
