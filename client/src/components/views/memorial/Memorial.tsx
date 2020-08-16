import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown/with-html';

// import data file
// eslint-disable-next-line @typescript-eslint/no-var-requires
const markdownFile = require('./memorial.md');

export const Memorial: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('');

  fetch(markdownFile)
    .then((res: Response) => res.text())
    .then((text: string) => setMarkdown(text));

  return <ReactMarkdown source={markdown} escapeHtml={false} />;
};
