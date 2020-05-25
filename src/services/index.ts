import { ICar } from '../interfaces';
import axios from 'axios';

export const fetchVehicles = () => axios.get<ICar[]>('http://www.mocky.io/v2/5eb553df31000060006994a8');
