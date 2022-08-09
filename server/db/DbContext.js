import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'

import { CarSchema } from '../models/Car.js';
import { HouseSchema } from '../models/House.js';

import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Cars = mongoose.model('Cars', CarSchema);
  Houses = mongoose.model('Houses', HouseSchema)
}

export const dbContext = new DbContext()
