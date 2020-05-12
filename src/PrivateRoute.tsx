import React, { FC } from 'react';

type Props = { exact: true; path: string; component: FC<Props> };
const PrivateRoute: FC<Props> = () => {
  return <div>hoge</div>;
};

export default PrivateRoute;
