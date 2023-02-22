var domRootElement = document.getElementById('root');
// console.dir( domRootElement)
var reactRootElement = ReactDOM.createRoot(domRootElement);

// const h1tag = React.createElement('h1', null, 'Hello, React world!')
// console.log('h1tag >>> ', h1tag)
var Header = React.createElement(
    'h1',
    null,
    'Hello, React world!'
);
reactRootElement.render(Header);