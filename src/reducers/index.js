import { combineReducers } from 'redux';
import EmployeesReducer from './EmployeesReducer';
import DepartmentsReducer from './DepartmentsReducer';

export default combineReducers({
  employees: EmployeesReducer,
  departments: DepartmentsReducer
});
