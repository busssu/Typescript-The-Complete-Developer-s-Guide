import { User } from './User';
import { Company } from './Company';
import { CustomMapp } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMapp('map');

customMap.addMarker(user);
customMap.addMarker(company);
