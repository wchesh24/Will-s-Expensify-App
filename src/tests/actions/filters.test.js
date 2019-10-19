import moment from 'moment';
import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters';


test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set and date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate action object for sort by date', () => {
    const action = sortByDate(moment);
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});

test('should generate action object for sort by amount', () => {
   expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT'});
});

//This is another option to write the sort by date or sort by amount code both seem to work fine

test('should generate set text filter object with text value', () => {
    const text = 'Something in';
    const action = setTextFilter('Something in');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should generate set text filter object with default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});



//test('should generate set text filter', () => {
  //  const action = setTextFilter(moment(text=''))

//})





// 4 test calls import and setup test cases
// 2 for set text filter and 1 for each of the sort by