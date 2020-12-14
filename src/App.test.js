import { render } from '@testing-library/react';
import renderer from 'react-test-renderer'
import App from './App';
import SinglePhoto from '../src/components/SinglePhoto'
import Rovers from '../src/components/Rovers'
import RoverCard from '../src/components/RoverCard'
import Pagination from '../src/components/Pagination'
import ListPhotos from '../src/components/ListPhotos'
import FilterBar from '../src/components/FilterBar'
import DatePicker from './components/DatePicker';

// Render Test
test('renders App', () => {
  render(<App />)
});

test('renders SinglePhoto', () => {
  render(<SinglePhoto />)
})

test('renders Rovers', () => {
  render(<Rovers />)
})

test('renders RoverCard', () => {
  render(<RoverCard />)
})

test('renders Pagination', () => {
  render(<Pagination />)
})

test('renders ListPhotos', () => {
  render(<ListPhotos />)
})

test('renders FilterBar', () => {
  render(<FilterBar />)
})

test('renders DatePicker', () => {
  render(<DatePicker />)
})

//Snapshot Test
it("matches snapshot App", () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})

it("matches snapshot SinglePhoto", () => {
  const tree = renderer.create(<SinglePhoto />).toJSON()
  expect(tree).toMatchSnapshot()
})

it("matches snapshot Rovers", () => {
  const tree = renderer.create(<Rovers />).toJSON()
  expect(tree).toMatchSnapshot()
})

it("matches snapshot RoverCard", () => {
  const tree = renderer.create(<RoverCard />).toJSON()
  expect(tree).toMatchSnapshot()
})

it("matches snapshot Pagination", () => {
  const tree = renderer.create(<Pagination />).toJSON()
  expect(tree).toMatchSnapshot()
})

it("matches snapshot ListPhotos", () => {
  const tree = renderer.create(<ListPhotos />).toJSON()
  expect(tree).toMatchSnapshot()
})

it("matches snapshot FilterBar", () => {
  const tree = renderer.create(<FilterBar />).toJSON()
  expect(tree).toMatchSnapshot()
})

it("matches snapshot DatePicker", () => {
  const tree = renderer.create(<DatePicker />).toJSON()
  expect(tree).toMatchSnapshot()
})