import { User } from './User';
// import { Company } from './Company';
import { CustomMapp } from './CustomMap';

const user = new User();
const customMap = new CustomMapp('map');

customMap.addUserMarker(user);
