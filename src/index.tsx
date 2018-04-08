import * as React from 'react'
import { render } from 'react-dom'
import update from 'immutability-helper'
import { Hook, Console, Decode } from './module'

const iframe = document.createElement('iframe')
iframe.src = './iframe.html'
document.body.appendChild(iframe)

class App extends React.Component {
  state = {
    logs: []
  }

  componentDidMount() {
    Hook(iframe.contentWindow.console, (log) => {
      this.setState((state) =>
        update(state, { logs: { $push: [Decode(log)] } })
      )
    })
  }

  render() {
    return (
      <div style={{ backgroundColor: '#242424' }}>
        <Console
          logs={this.state.logs}
          variant="dark"
          styles={{
            PADDING: '10px',
            BASE_FONT_FAMILY: 'Menlo, monospace',
            BASE_FONT_SIZE: '14px',
            BASE_LINE_HEIGHT: '18px',

            BASE_BACKGROUND_COLOR: 'rgba(0, 0, 0, 0)',
            BASE_COLOR: 'rgb(213, 213, 213)',

            // OBJECT_NAME_COLOR: theme.secondary(),
            OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
            OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
            OBJECT_VALUE_REGEXP_COLOR: '#fac863',
            OBJECT_VALUE_STRING_COLOR: '#fac863',
            OBJECT_VALUE_SYMBOL_COLOR: '#fac863',
            OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
            OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
            OBJECT_VALUE_FUNCTION_KEYWORD_COLOR: 'rgb(242, 85, 217)',

            HTML_TAG_COLOR: 'rgb(93, 176, 215)',
            HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
            HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
            HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
            HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
            HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
            HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',

            ARROW_COLOR: 'rgb(145, 145, 145)',
            ARROW_MARGIN_RIGHT: 3,
            ARROW_FONT_SIZE: 12,

            TREENODE_FONT_FAMILY: 'Menlo, monospace',
            TREENODE_FONT_SIZE: '13px',
            TREENODE_LINE_HEIGHT: '16px',
            TREENODE_PADDING_LEFT: 12,

            TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
            TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
            TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
            TABLE_SORT_ICON_COLOR: 'black',
            TABLE_DATA_BACKGROUND_IMAGE:
              'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
            TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
          }}
        />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
