import {actionTypes} from "../constants/action-types";

export const addArticle = article => ({ type: actionTypes.ADD_ARTICLE, payload: article });