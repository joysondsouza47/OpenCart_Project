import fs from 'fs'

import {parse} from 'csv-parse/sync'

export class DataProvider
{

static getTestDataFromJson(filepath:string)
{
      let data = JSON.parse(fs.readFileSync(filepath, 'utf8'));
      return data;
}

static getTestDataFromCsv(filepath:string)
{
      let data = parse(fs.readFileSync(filepath),{columns:true,skip_empty_lines:true}) 
      return data;
}
}


