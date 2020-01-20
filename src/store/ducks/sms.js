/**
 * Types & Creators
 */

export const Types = {
  SMS_REQUEST: "sms/SMS_REQUEST",
  SMS_SUCCESS: "sms/SMS_SUCCESS",
  SMS_FAILURE: "sms/SMS_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false
};

export default function sms(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SMS_REQUEST:
      return {
        ...state
      };
    case Types.SMS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: false,
        loading: false
      };
    case Types.SMS_FAILURE:
      return {
        ...state,
        data: [],
        error: true,
        loading: false
      };
    default:
      return state;
  }
}

export const Creators = {
  smsRequest: entidade => ({
    type: Types.SMS_REQUEST,
    payload: entidade
  }),
  smsSuccess: data => ({
    type: Types.SMS_SUCCESS,
    payload: { data }
  }),
  smsFailure: data => ({ type: Types.SMS_FAILURE, payload: { data } })
};
