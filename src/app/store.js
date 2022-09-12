import { configureStore } from '@reduxjs/toolkit';
import borderRadiusDataSlice from '../features/formVali/borderRadiusDataSlice';
import formValidDescriptionSlice from '../features/formVali/formValidDescriptionSlice';

import formValidSlice from '../features/formVali/formValidSlice';
import titleColorDataSlice from '../features/formVali/titleColorDataSlise';
import descriptionColorDataSlice from '../features/formVali/descriptionColorDataSlice';

export const store = configureStore({
  reducer: {
    
    formValid : formValidSlice,
    formValidDescription: formValidDescriptionSlice,
    borderRadiusData: borderRadiusDataSlice,
    titleColorData: titleColorDataSlice,
    descriptionColorData: descriptionColorDataSlice

  },
});