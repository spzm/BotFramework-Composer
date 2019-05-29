import React, { useState } from 'react';
import { IconButton } from 'office-ui-fabric-react';

export const Panel = ({ text, children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const collapseFuc = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          style={{
            flex: 1,
            color: '#605E5C',
            fontSize: '12px',
            lineHeight: '19px',
            height: '22px',
            borderBottom: '1px solid #000000',
          }}
        >
          {text}
        </div>
        <IconButton iconProps={{ iconName: collapsed ? 'ChevronDown' : 'ChevronUp' }} onClick={collapseFuc} />
      </div>
      <div style={{ display: collapsed ? 'none' : 'block' }}>{children}</div>
    </div>
  );
};