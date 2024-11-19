export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';

interface FetchTasksRequestAction {
  type: typeof FETCH_TASKS_REQUEST;
}

interface FetchTasksSuccessAction {
  type: typeof FETCH_TASKS_SUCCESS;
  payload: any[];
}

interface FetchTasksFailureAction {
  type: typeof FETCH_TASKS_FAILURE;
  payload: string;
}

export const fetchTasksRequest = (): FetchTasksRequestAction => ({
  type: FETCH_TASKS_REQUEST,
});

export const fetchTasksSuccess = (data: any[]): FetchTasksSuccessAction => ({
  type: FETCH_TASKS_SUCCESS,
  payload: data,
});

export const fetchTasksFailure = (error: string): FetchTasksFailureAction => ({
  type: FETCH_TASKS_FAILURE,
  payload: error,
});

export type TaskActionTypes =
  | FetchTasksRequestAction
  | FetchTasksSuccessAction
  | FetchTasksFailureAction;
