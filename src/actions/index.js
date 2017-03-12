import axios from 'axios';
import {
    FETCH_EMPLOYEES,
    FETCH_DEPARTMENTS,
    ADD_EMPLOYEES,
    ADD_DEPARTMENTS
} from './types';

const ROOT_URL = 'http://localhost:3000';

export function fetchEmployees() {
    return function(dispatch) {
      axios.get(`${ROOT_URL}/employees`)
          .then(response => {
              dispatch({
                  type: FETCH_EMPLOYEES,
                  payload: response.data
              });
          });
    }
}

export function fetchDepartments() {
    return function(dispatch) {
        axios.get(`${ROOT_URL}/departments`)
            .then(response => {
                dispatch({
                    type: FETCH_DEPARTMENTS,
                    payload: response.data
                });
            });
    }
}

export function updateDepartments({id, name, value}) {
    return function(dispatch) {
        axios.get(`${ROOT_URL}/departments/${id}`)
            .then(response => {
                let employee = response.data;
                employee[name] = value;
                axios.put(`${ROOT_URL}/departments/${id}`,employee).then(response => {
                        dispatch(fetchDepartments())
                    }
                )
            });
    }
}

export function updateEmployees({id, name, value}) {
    return function(dispatch) {
        axios.get(`${ROOT_URL}/employees/${id}`)
            .then(response => {
                let employee = response.data;
                employee[name] = value;
                axios.put(`${ROOT_URL}/employees/${id}`,employee).then(response => {
                        dispatch(fetchEmployees())
                    }
                )
            });
    }
}

export function addEmployees() {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/employees`,{firstName:'Name', lastName: 'Surname', departmentId: '-'})
            .then(response => {
                dispatch({
                    type: ADD_EMPLOYEES,
                    payload: response.data
                });
            });
    }
}

export function addDepartments() {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/departments`,{name: "-"})
            .then(response => {
                dispatch({
                    type: ADD_DEPARTMENTS,
                    payload: response.data
                });
            });
    }
}




