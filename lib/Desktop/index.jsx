import { container, arrow, arrowLight, content } from './style.jsx';

const render = ({output}) => {
  if (typeof output === 'undefined') return null;
  
  name = output.app
  
  return (
    <div style={container}>
     
    <div style={content}>{name}</div>
    <div style={arrow} />  
    </div>
    
  )
}

export default render
