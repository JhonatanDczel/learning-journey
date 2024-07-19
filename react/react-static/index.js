import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"
import { FaBeer } from "https://esm.sh/react-icons/fa";

const appDocumentElement = document.getElementById('app')

const root = ReactDOM.createRoot(appDocumentElement)

const beerIcon = React.createElement(FaBeer)

const button = React.createElement('button', {"data-id" : 123}, [beerIcon, "Me gusta"])
const button1 = React.createElement('button', {"data-id" : 456}, 'Me gusta')
const button2 = React.createElement('button', {"data-id" : 789}, 'Me gusta')

root.render(button)
