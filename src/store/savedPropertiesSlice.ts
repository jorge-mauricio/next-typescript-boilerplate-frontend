import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SavedProperty {
  id: number;
  title: string;
  pictureUrl: string;
}

interface SavedPropertiesState {
  properties: SavedProperty[];
}

const initialState: SavedPropertiesState = {
  properties: [],
};

/**
 * Saved properties slice.
 */
export const savedPropertiesSlice = createSlice({
  name: 'savedProperties',
  initialState,
  reducers: {
    toggleProperty: (state, action: PayloadAction<SavedProperty>) => {
      const index = state.properties.findIndex(p => p.id === action.payload.id);
      if (index >= 0) {
        state.properties.splice(index, 1);
      } else {
        state.properties.push(action.payload);
      }
    },
  },
});

export const { toggleProperty } = savedPropertiesSlice.actions;
export default savedPropertiesSlice.reducer;
