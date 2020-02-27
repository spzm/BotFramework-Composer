// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'office-ui-fabric-react/lib/Link';

import { ObiColors } from '../../constants/ElementColors';
import { ChoiceInputSize } from '../../constants/ElementSizes';

import { ElementProps, MultiLineDivProps, ElementComponent } from './styledComponents.types';

const dynamicStyle = props =>
  css`
    color: ${props.color || ObiColors.Black};
  `;

export const LinkBtn = styled(Link)(props => ({
  color: props.color || ObiColors.AzureBlue,
}));

export const Span = styled.span`
  ${dynamicStyle}
`;

export const BorderedDiv: ElementComponent<ElementProps> = styled.div<ElementProps>(props => ({
  color: props.color || ObiColors.Black,
  width: ChoiceInputSize.width,
  height: ChoiceInputSize.height,
  padding: '2px 0 0 8px',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  fontFamily: 'Segoe UI',
  fontSize: '12px',
  lineHeight: '14px',
  border: '1px solid #C4C4C4',
  boxSizing: 'border-box',
}));

export const MultiLineDiv = styled.div<MultiLineDivProps>(props => ({
  color: props.color || ObiColors.Black,
  fontSize: '12px',
  height: `${(props.lineNum || 1) * 19}px`,
  lineHeight: '19px',
  fontFamily: 'Segoe UI',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  wordBreak: 'break-word',
  display: '-webkit-box',
  '-webkit-line-clamp': `${props.lineNum || 1}`,
  '-webkit-box-orient': 'vertical',
}));

export const SingleLineDiv = styled.div<ElementProps>(props => ({
  color: props.color || ObiColors.Black,
  fontSize: '12px',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  lineHeight: '19px',
  height: '19px',
  fontFamily: 'Segoe UI',
}));
