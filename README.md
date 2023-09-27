# Loading Cover React

This is a package to show and hide a full loading cover on the application of React.

## Installation

```bash
npm i loading-cover-react
```

## Usage

Get the component into the top level in the application

```typescript
import ReactDOM from 'react-dom/client'
import App from './App.tsx'


// Import the LoadingCover component
import { LoadingCover } from 'loading-cover-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />

    { /* Set the Loading component under the App */}
    { /* Set the text you want to show on the loading cover */}
    <LoadingCover text='Loading, please wait...' />
  </React.StrictMode>,
)
```

Now inside any component you can use the **useLoadingCover( )** to get access to the loading status **isLoading** or the methods to change the status **showLoadingCover** and **hideLoadingCover**.

This is a example of how to use this hook in a component:

```typescript
import { useEffect } from 'react'

// import the custom hoook
import { useLoadingCover } from 'loading-cover-react';

function App() {

    // the the values of status
    // showLoadingCover and hideLoadingCover are methods
    // to help you to manage the status
    const {
        isLoading,
        showLoadingCover,
        hideLoadingCover } = useLoadingCover();

// listen the isLoading value, 3 seconds later the cover is showed, hide the loading cover
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        hideLoadingCover();
      }, 3000);
    }

  }, [isLoading])


  return (
    <>
      <h1>Example app</h1>
      <button onClick={showLoadingCover}>Show loader</button>
    </>
  )
}

export default App

```

In the example before you can click on the button to show the full loading cover. When you click on the button, the method *showLoadingCover* change the status of the value *isLoading*. When this happed the useEffect launch a setTimeOut to hide the loading cover after 3 seconds. 

This is just an example to let you know how you can use the functions of the *useLoadingCover* hook. 

### Note
*Currently the components is only made for typescript applications.*
If you want to collaborate just send your Pull Request, it is going to be thankful.
