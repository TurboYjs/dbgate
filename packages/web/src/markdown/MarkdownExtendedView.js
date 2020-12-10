import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import OpenChartLink from './OpenChartLink';

const Wrapper = styled.div`
  padding: 10px;
  overflow: auto;
  flex: 1;
`;

export default function MarkdownExtendedView({ children }) {
  return (
    <Wrapper>
      <Markdown
        options={{
          overrides: {
            OpenChartLink: {
              component: OpenChartLink,
            },
          },
        }}
      >
        {children || ''}
      </Markdown>
    </Wrapper>
  );
}
