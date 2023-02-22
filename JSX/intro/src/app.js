const domRootElement = document.getElementById('root')
// console.dir( domRootElement)
const reactRootElement = ReactDOM.createRoot(domRootElement)

// const h1tag = React.createElement('h1', null, 'Hello, React world!')
// console.log('h1tag >>> ', h1tag)
const Header = (
    <h1>Hello, React world!</h1>
)
reactRootElement.render(Header)

