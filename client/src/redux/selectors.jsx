import { createSelector } from "@reduxjs/toolkit";

export const searchSelector = (state) => state.search;
export const loginSelector = (state) => state.auth;

export const searchCreateSelector = createSelector(
  searchSelector,
  (searchTerm) => {
    return searchTerm.search;
  }
);
export const loginCreateSelector = createSelector(loginSelector, (login) => {
  return login;
});
