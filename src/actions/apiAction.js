import { FETCH_REQUEST,FETCH_SUCCESS,FETCH_ERROR } from '../constants'

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST
}}
  
export const fetchSuccess = (data) => {
  return {
  type: FETCH_SUCCESS,
  payload: data
}}
  
export const fetchError = (error) => {
  return {
  type: FETCH_ERROR,
  payload: error
}}
