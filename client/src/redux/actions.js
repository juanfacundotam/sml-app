import axios from "axios";
export const GET_ALL_LEAD = "GET_ALL_LEAD";
export const GET_LEAD_UNCHECKED_10 = "GET_LEAD_UNCHECKED_10";
export const GET_LEAD_UNCHECKED = "GET_LEAD_UNCHECKED";
export const GET_LEAD_CHEQUED = "GET_LEAD_CHEQUED";
export const GET_LEAD_CHEQUED_100 = "GET_LEAD_CHEQUED_100";


export const getAllLead = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/lead");
    const LeadData = response.data;
    dispatch({ type: GET_ALL_LEAD, payload: LeadData });
  };
};

export const getLeadUnchecked = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/lead/unchecked");
    const LeadUnchecked = response.data;
    dispatch({ type: GET_LEAD_UNCHECKED, payload: LeadUnchecked });
  };
};

export const getLeadUnchecked10 = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/lead/unchecked10");
    const LeadUnchecked10 = response.data;
    dispatch({ type: GET_LEAD_UNCHECKED_10, payload: LeadUnchecked10 });
  };
};

export const getLeadChecked = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/lead/checked");
    const LeadChecked = response.data;
    dispatch({ type: GET_LEAD_CHEQUED, payload: LeadChecked });
  };
};

export const getLeadChecked100 = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/lead/checked100");
    const LeadChecked100 = response.data;
    dispatch({ type: GET_LEAD_CHEQUED_100, payload: LeadChecked100 });
  };
};
