import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, { shallow, mount, render } from 'enzyme';
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
  ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={() => { }} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders a h1', () => {
  const wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={() => { }} />);
  expect(wrapper.find("h1").length).toBe(1);
});

describe("when no answer has been selected", function () {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={() => { }} />);
  });
  it("should have no background color", () =>{
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('');
  });

});

describe("when the wrong answer has been selected", function () {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(<AuthorQuiz {...(Object.assign({},state,{highlight:'wrong'}))} onAnswerSelected={() => { }} />);
  });
  it("should have red background color", () =>{
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('red');
  });

});

describe("when the correct answer has been selected", function () {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(<AuthorQuiz {...(Object.assign({},state,{highlight:'correct'}))} onAnswerSelected={() => { }} />);
  });
  it("should have green background color", () =>{
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('green');
  });

});

describe("when the first answer is selected", function () {
  let wrapper;
  const handleAnswerSelected = jest.fn();
  beforeAll(() => {
    wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={handleAnswerSelected} />);
    wrapper.find(".answer").first().simulate("click");
  });
  it("onAnswerSelected should be called", () =>{
      expect(handleAnswerSelected).toHaveBeenCalled();
  });
  it("should have received The Shining", () =>{
    expect(handleAnswerSelected).toHaveBeenCalledWith("The Shining");
});
});