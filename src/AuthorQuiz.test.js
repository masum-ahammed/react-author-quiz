import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<AuthorQuiz />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
Enzyme.configure({ adapter: new Adapter() });
const state = {
  turnData: {
    books: ['The Shining', 'IT', 'David Copperfield', 'A Tale of Two Cities', 'Hamlet', 'Macbeth', 'Romeo and Juliet'],
    author: {
      name: 'Charles Dickens',
      imageUrl: 'images/authors/charlesdickens.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['David Copperfield', 'A Tale of Two Cities']
    },
  },
  highlight: 'none'
};
test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected= { () => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});





test('renders a h1', () => {
  const wrapper = shallow(<AuthorQuiz {...state} onAnswerSelected= { () => {}}/>);
  
  expect(wrapper.find("h1").length).toBe(1);
});