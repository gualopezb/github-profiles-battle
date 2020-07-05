import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fetchPopularRepos } from '../utils/api';

function LanguagesNav({ selected, onUpdateLanguage }) {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className="flex-center">
      {languages.map((language) => (
        <li key={language}>
          <button
            type="button"
            className="btn-clear nav-link"
            style={language === selected ? { color: 'rgb(187, 46, 31)' } : null}
            onClick={() => onUpdateLanguage(language)}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};

export default class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      repos: null,
      error: null,
    };
    this.updateLanguage = this.updateLanguage.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }

  componentDidMount() {
    const { selectedLanguage } = this.state;
    this.updateLanguage(selectedLanguage);
  }

  async updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
      repos: null,
      error: null,
    });

    try {
      const repos = await fetchPopularRepos(selectedLanguage);
      this.setState({ repos, error: null });
    } catch (error) {
      console.warn('Error fetching repos: ', error);
      this.setState({ error: 'There was an error fetching the repositories.' });
    }
  }

  isLoading() {
    const { repos, error } = this.state;
    return repos === null && error === null;
  }

  render() {
    const { selectedLanguage, repos, error } = this.state;
    return (
      <>
        <LanguagesNav selected={selectedLanguage} onUpdateLanguage={this.updateLanguage} />
        {this.isLoading() && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
      </>
    );
  }
}
