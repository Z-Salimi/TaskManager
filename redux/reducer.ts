import { FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE, TaskActionTypes } from './action';

interface State {
  loading: boolean;
  tasks: any[];
  error: string | null;
}

const initialState: State = {
  loading: false,
  tasks: [],
  error: null,
};

const taskReducer = (state = initialState, action: TaskActionTypes): State => {
  switch (action.type) {
    case FETCH_TASKS_REQUEST:
      return { ...state, loading: true };
    case FETCH_TASKS_SUCCESS:
      return { loading: false, tasks: action.payload, error: null };
    case FETCH_TASKS_FAILURE:
      return { loading: false, tasks: [], error: action.payload };
    default:
      return state;
  }
};

export default taskReducer;
