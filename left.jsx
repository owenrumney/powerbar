import Desktop from './lib/Desktop/index.jsx';
import Error from './lib/Error/index.jsx';
import { leftSide } from './lib/style.jsx';
import parse from './lib/parse.jsx';

export const refreshFrequency = 1000

export const command = './powerbar/status-left.sh'

export const render = ({output}) => {

  const data = parse(output);
  if (typeof data === 'undefined') {
    return (
      <div style={leftSide}>
        <Error msg="Error: unknown script output" side="left"/>
      </div>
    )
  }
  if (typeof data.error !== 'undefined') {
    return (
      <div style={leftSide}>
        <Error msg={`Error: ${data.error}`} side="left"/>
      </div>
    )
  }
  return (
    <div style={leftSide}>
			<Desktop output={data}/>
    </div>
  )
}

export default null
