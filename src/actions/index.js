import server from '../api/server'
import * as types from '../constants/ActionTypes'

export const getAllProjects = () => dispatch => {
  server.getProjects((ex, projects) => {
    dispatch({type: types.RECEIVE_PROJECTS, projects})
  })
}

export const getAllSuppliers = () => dispatch => {
  server.getSuppliers((ex, suppliers) => {
    dispatch({type: types.RECEIVE_SUPPLIERS, suppliers})
  })
}

export const getTransactions = (values) => dispatch => {
  server.getTransactions(values, (ex, transactions) => {
    dispatch({type: types.RECEIVE_TRANSACTIONS, transactions})
  })
}

export const addProject = (project, cb) => (dispatch, getState) => {
  server.addProject(project, (ex, project) => {
    if (!ex) {
        dispatch({type: types.ADD_PROJECT_SUCCESS, project})
    }
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.ADD_PROJECT_FAILURE, projects })
    cb();
  })
}

export const selectCurrentProject = id => dispatch => {
  dispatch({type: types.SELECT_CURRENT_PROJECT, id})
}
