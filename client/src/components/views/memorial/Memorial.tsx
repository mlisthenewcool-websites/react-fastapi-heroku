import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';


const apiUrl = 'http://0.0.0.0:5050/api/memorial/images';


const TheMemorial = () => {
  const { memorialId } = useParams();

  const [imageSrc, setImageSrc] = useState<string>('');

  const getImage = async(imageName: string) => {
    fetch(apiUrl)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText)
        }
        return response
      })
      .then(response => response.blob())
      .then(blob => {
        console.info(URL.createObjectURL(blob))
        setImageSrc(URL.createObjectURL(blob))
      })
  }

  return (
    <div className='project-container'>
      {memorialId}
      <button type='button' onClick={() => getImage('')}>
        Get image
      </button>
      {imageSrc && <img alt='' src={imageSrc}/>}
    </div>
  );
};

export const Memorial: React.FC = () => {
  const { path } = useRouteMatch();

  // import data file
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const markdownFile = require('./memorial.md');
  const [markdown, setMarkdown] = useState<string>('');

  fetch(markdownFile)
    .then((res: Response) => res.text())
    .then((text: string) => setMarkdown(text));

  return (
    <Switch>
      <Route path={`${path}`} component={TheMemorial} />

      <Route exact path={path}>
        <ReactMarkdown source={markdown} escapeHtml={false} />
      </Route>
    </Switch>
  );
};
