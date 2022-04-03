export default function getHost() {
  const env = process.env.REACT_APP_NODE_ENV;
  console.log('env', env);
  if (env === 'local') {
    return {
      REACT_APP_BASE_URL: `http://localhost:30001`,
      WS_BASE_URL: `http://localhost:30001`,
    };
  }
  return {
    REACT_APP_BASE_URL: `${window.location.origin}/api`,
    WS_BASE_URL: window.location.origin,
  };
}
