import * as React from 'react';
import { Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';

const OverrideRoutes = (props: any) => {
  const { isAppBar, path, component } = props;
  if (isAppBar) {
    return (
      <>
        <AppBar />
        <Route exact path={path} component={component} />
      </>
    );
  }

  return (
    <>
      <Route exact path={path} component={component} />
    </>
  );
};

export default OverrideRoutes;
