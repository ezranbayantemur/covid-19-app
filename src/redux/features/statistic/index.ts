import slicer from './slicer';
import getAllStatistics from './thunks/getAllStatistics';

export {getAllStatistics};
export const {search} = slicer.actions;
export default slicer;
