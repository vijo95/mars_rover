import { render } from '@testing-library/react';
import App from './App';
import SinglePhoto from '../src/components/SinglePhoto'
import Rovers from '../src/components/Rovers'
import RoverCard from '../src/components/RoverCard'
import Pagination from '../src/components/Pagination'
import ListPhotos from '../src/components/ListPhotos'
import FilterBar from '../src/components/FilterBar'
import DatePicker from './components/DatePicker';

test('renders App', () => {
  render(<App />)
});

test('renders SinglePhoto', () => {
  render(<SinglePhoto />)
})

test('renders Rovers', () => {
  render(<Rovers />)
})

test('renders Rover Cards', () => {
  render(<RoverCard />)
})

test('renders Pagination', () => {
  render(<Pagination />)
})

test('renders List of Photos', () => {
  render(<ListPhotos />)
})

test('renders FilterBar', () => {
  render(<FilterBar />)
})

test('renders DatePicker', () => {
  render(<DatePicker />)
})
