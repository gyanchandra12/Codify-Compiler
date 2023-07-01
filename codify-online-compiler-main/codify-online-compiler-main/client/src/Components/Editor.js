import React, { useContext } from 'react'
import Editor from '@monaco-editor/react'
import InputOutput from './InputOutput'
import CodeContext from '../Context/CodeConext'

const EditorPage = () => {
  const { lang, defaultCode, setCode } = useContext(CodeContext)
  const handleChange = (val) => {
    setCode(val)
  }
  return (
    <div className='editorOuter'>
      <div className='editorWrap'>
        <div className='seperator'></div>
        <Editor
          defaultLanguage={
            lang === 'nodejs' ? 'javascript' : lang === 'python3' ? 'python' : lang
          }
          defaultValue={defaultCode}
          theme='vs-dark'
          path={lang}
          onChange={handleChange}
        />
      </div>
      <InputOutput />
    </div>
  )
}

export default EditorPage
