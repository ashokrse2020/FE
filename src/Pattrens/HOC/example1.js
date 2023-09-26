//https://www.patterns.dev/posts/factory-pattern

import React from "react";

const List = (props) => {
  const { repos } = props;
  if (!repos) return null;
  if (!repos.length) return <p>No repos, sorry</p>;
  return (
    <ul>
      {repos.map((repo) => {
        return <li key={repo.id}>{repo.full_name}</li>;
      })}
    </ul>
  );
};

//withdLoading.js
function WithLoading(Component) {
  //{/* <List repos={[]} /> */}
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />; ////{/* <List repos={[]} /> */}
    return <p>Hold on, fetching data might take some time.</p>;
  };
}

const ListWithLoading = WithLoading(List);

export default class App extends React.Component {
  state = {
    loading: false,
    repos: null,
  };
  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      fetch(`https://api.github.com/users/hacktivist123/repos`)
        .then((json) => json.json())
        .then((repos) => {
          this.setState({ loading: false, repos: repos });
        });
    }, 5000);
  }

  render() {
    return (
      <ListWithLoading
        isLoading={this.state.loading}
        repos={this.state.repos}
      />
    );
  }
}
